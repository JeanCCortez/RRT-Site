'use client';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points } from '@react-three/drei';
import * as THREE from 'three';

function PrimordialPlasma({ isRRT }) {
  const meshRef = useRef();
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  React.useEffect(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    particlesRef.current = [];
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 40;
      const height = (Math.random() - 0.5) * 80;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      const temp = Math.random();
      colors[i * 3] = temp > 0.5 ? 1 : 0.2;
      colors[i * 3 + 1] = 0.3;
      colors[i * 3 + 2] = temp < 0.5 ? 1 : 0.2;
      
      particlesRef.current.push({ x: positions[i * 3], y: positions[i * 3 + 1], z: positions[i * 3 + 2], temp });
    }
    
    if (meshRef.current?.geometry) {
      meshRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      meshRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
  }, []);

  useFrame(() => {
    timeRef.current += 0.01;
    
    if (!meshRef.current?.geometry) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      const particle = particlesRef.current[i];
      const dist = Math.sqrt(particle.x * particle.x + particle.y * particle.y + particle.z * particle.z);
      
      if (isRRT) {
        const causalAxis = Math.sin(timeRef.current * 0.5);
        const causalVector = new THREE.Vector3(
          Math.cos(timeRef.current * 0.3) * 0.1,
          causalAxis * 0.2,
          Math.sin(timeRef.current * 0.3) * 0.1
        );
        
        const alignment = particle.temp * 0.3;
        positions[i * 3] = particle.x + causalVector.x * alignment;
        positions[i * 3 + 1] = particle.y + causalVector.y * alignment + (dist / 40) * timeRef.current * 0.5;
        positions[i * 3 + 2] = particle.z + causalVector.z * alignment;
      } else {
        const expansion = (1 + timeRef.current * 0.3) * (1 + Math.sin(timeRef.current + particle.temp) * 0.2);
        positions[i * 3] = particle.x * expansion * (1 + Math.sin(timeRef.current * particle.temp) * 0.1);
        positions[i * 3 + 1] = particle.y * expansion * (1 + Math.cos(timeRef.current * particle.temp) * 0.1);
        positions[i * 3 + 2] = particle.z * expansion * (1 + Math.sin(timeRef.current * 2 * particle.temp) * 0.1);
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={meshRef}>
      <pointsMaterial size={0.8} vertexColors sizeAttenuation />
    </Points>
  );
}

function CausalVector({ isRRT }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && isRRT) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 40, 32]} />
        <meshPhongMaterial emissive={isRRT ? '#00ff00' : '#333333'} color={isRRT ? '#00ff00' : '#666666'} />
      </mesh>
    </group>
  );
}

export default function CMBGenesisSimulation() {
  const [isRRT, setIsRRT] = useState(true);

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 255, 255, 0.2)' }}>
      <Canvas camera={{ position: [0, 50, 50], fov: 75 }}>
        <color attach="background" args={['#0a0e27']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[30, 30, 30]} intensity={1} color="#00ffff" />
        <PrimordialPlasma isRRT={isRRT} />
        <CausalVector isRRT={isRRT} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        border: '1px solid rgba(0, 255, 255, 0.5)',
        borderRadius: '8px',
        padding: '15px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#00ffff',
        zIndex: 10,
        textAlign: 'right'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>CMB GENESIS (CMB-S4)</div>
        <div>Alignment: {isRRT ? '98.36%' : '23.4%'}</div>
        <div style={{ marginTop: '8px', color: '#fbbf24' }}>h_* = 0.015 ± 0.003</div>
        <div style={{ marginTop: '8px', color: isRRT ? '#10b981' : '#ef4444' }}>
          {isRRT ? 'Causal SSB' : 'Thermal'}
        </div>
      </div>

      <button
        onClick={() => setIsRRT(!isRRT)}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          backgroundColor: isRRT ? '#00ffff' : '#ff6b35',
          color: '#0a0e27',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        {isRRT ? 'RRT' : 'ΛCDM'}
      </button>
    </div>
  );
}
