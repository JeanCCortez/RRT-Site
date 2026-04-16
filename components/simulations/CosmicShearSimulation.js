'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points } from '@react-three/drei';
import * as THREE from 'three';

function StarField({ isRRT }) {
  const meshRef = useRef();
  const positionRef = useRef();
  const timeRef = useRef(0);

  useEffect(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }
    
    positionRef.current = positions;
    
    if (meshRef.current?.geometry) {
      meshRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, []);

  useFrame(() => {
    timeRef.current += 0.001;
    
    if (!meshRef.current?.geometry) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const originalPositions = positionRef.current;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      const z = originalPositions[i + 2];
      const dist = Math.sqrt(x * x + y * y + z * z);
      
      if (isRRT) {
        const angle = Math.atan2(y, x) + timeRef.current * 0.5;
        const twist = Math.sin(dist * 0.05 + timeRef.current) * 0.1;
        positions[i] = (x + Math.cos(angle) * twist);
        positions[i + 1] = (y + Math.sin(angle) * twist);
        positions[i + 2] = z + Math.sin(timeRef.current + dist * 0.02) * 0.5;
      } else {
        const noiseX = Math.sin(x * 0.1 + timeRef.current) * Math.cos(y * 0.1);
        const noiseY = Math.cos(y * 0.1 + timeRef.current) * Math.sin(z * 0.1);
        const noiseZ = Math.sin(z * 0.1 + timeRef.current) * Math.cos(x * 0.1);
        positions[i] = x + noiseX * 2;
        positions[i + 1] = y + noiseY * 2;
        positions[i + 2] = z + noiseZ * 2;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={meshRef} stride={3}>
      <pointsMaterial size={0.5} color={isRRT ? '#00ffff' : '#ff6b35'} />
    </Points>
  );
}

function ShearPlane({ isRRT }) {
  const shaderMaterial = useRef();
  
  useFrame(() => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.uTime.value += 0.016;
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[100, 100, 64, 64]} />
      <shaderMaterial
        ref={shaderMaterial}
        uniforms={{
          uTime: { value: 0 },
          uIsRRT: { value: isRRT ? 1 : 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform float uIsRRT;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            if (uIsRRT > 0.5) {
              float twist = sin(uv.x * 3.14159 + uTime) * cos(uv.y * 3.14159) * 3.0;
              pos.z += twist;
            } else {
              float chaos = sin(uv.x * 10.0 + uTime * 2.0) * cos(uv.y * 10.0 + uTime);
              pos.z += chaos * 5.0;
            }
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          
          void main() {
            gl_FragColor = vec4(vUv.x * 0.5 + 0.2, vUv.y * 0.5 + 0.2, 0.8, 0.3);
          }
        `}
        transparent
      />
    </mesh>
  );
}

export default function CosmicShearSimulation() {
  const [isRRT, setIsRRT] = useState(true);

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 255, 255, 0.2)' }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <color attach="background" args={['#0a0e27']} />
        <StarField isRRT={isRRT} />
        <ShearPlane isRRT={isRRT} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        border: '1px solid rgba(0, 255, 255, 0.5)',
        borderRadius: '8px',
        padding: '15px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#00ffff',
        zIndex: 10
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>COSMIC SHEAR (Euclid)</div>
        <div>γ(θ,z) = γ_ISO[1 + A_T cos(2φ)]</div>
        <div style={{ marginTop: '8px', color: '#fbbf24' }}>A_T(z=0.5) = 0.074 ± 0.008</div>
        <div style={{ marginTop: '8px', color: isRRT ? '#10b981' : '#ef4444' }}>
          {isRRT ? 'RRT: Laminar' : 'ΛCDM: Chaotic'}
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
