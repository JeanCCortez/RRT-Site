'use client';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WaveParticles({ isEM, timeRef }) {
  const meshRef = useRef();

  React.useEffect(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = -40 + (i / count) * 80;
      positions[i * 3 + 1] = isEM ? 10 : -10;
      positions[i * 3 + 2] = Math.sin(i * 0.1) * 5;
    }
    
    if (meshRef.current?.geometry) {
      meshRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [isEM]);

  useFrame(() => {
    if (!meshRef.current?.geometry) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const time = timeRef.current.value;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = -40 + (i / 3 / 200) * 80;
      
      if (isEM) {
        positions[i + 1] = 10 + Math.sin((x + time) * 0.1) * 3;
      } else {
        const fatigue = Math.max(0.3, 1 - (x + 40) / 80 * 0.7);
        const frequency = 0.08 * fatigue;
        const amplitude = 3 * fatigue;
        const phase = (x + time * 0.5) * frequency;
        positions[i + 1] = -10 + Math.sin(phase) * amplitude;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef}>
      <bufferGeometry />
      <lineBasicMaterial color={isEM ? '#fbbf24' : '#3b82f6'} linewidth={3} fog={false} />
    </mesh>
  );
}

function Detector({ timeRef }) {
  const alertRef = useRef(0);
  
  useFrame(() => {
    alertRef.current = (Math.sin(timeRef.current.value * 3) + 1) / 2;
  });

  return (
    <mesh position={[40, 0, 0]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshPhongMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={alertRef.current * 0.8} />
    </mesh>
  );
}

export default function CausalFatigueSimulation() {
  const timeRef = useRef({ value: 0 });
  const [divergence, setDivergence] = useState(23);

  useFrame(() => {
    timeRef.current.value += 0.016;
    setDivergence(20 + Math.sin(timeRef.current.value * 0.5) * 5);
  });

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 255, 255, 0.2)' }}>
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <color attach="background" args={['#0a0e27']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[-40, 0, 30]} intensity={0.8} color="#fbbf24" />
        <pointLight position={[-40, 0, -30]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[40, 0, 0]} intensity={1} color="#ff6b35" />
        
        <mesh position={[-40, 0, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshPhongMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
        </mesh>
        
        <WaveParticles isEM={true} timeRef={timeRef} />
        <WaveParticles isEM={false} timeRef={timeRef} />
        
        <Detector timeRef={timeRef} />
      </Canvas>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        border: '1px solid rgba(168, 85, 247, 0.5)',
        borderRadius: '8px',
        padding: '12px',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#a855f7',
        zIndex: 10
      }}>
        <div style={{ fontWeight: 'bold' }}>BH Merger</div>
        <div>RA ≈ 168°</div>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '8px',
        padding: '12px',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#fbbf24',
        zIndex: 10,
        textAlign: 'center'
      }}>
        <div style={{ fontWeight: 'bold' }}>CORTEZ AXIS</div>
        <div>RA = 168°</div>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        border: '1px solid rgba(255, 107, 53, 0.5)',
        borderRadius: '8px',
        padding: '12px',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#ff6b35',
        zIndex: 10,
        textAlign: 'right'
      }}>
        <div style={{ fontWeight: 'bold' }}>LIGO O4</div>
        <div style={{ color: '#ef4444', fontWeight: 'bold' }}>⚠ ALERT</div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(10, 14, 39, 0.9)',
        border: '1px solid rgba(239, 68, 68, 0.7)',
        borderRadius: '8px',
        padding: '15px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#ef4444',
        zIndex: 10,
        textAlign: 'center',
        width: '90%',
        maxWidth: '500px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>CAUSAL FATIGUE</div>
        <div>D_L^GW ≠ D_L^EM | Divergence: {divergence.toFixed(1)}%</div>
        <div style={{ marginTop: '8px', color: '#fbbf24', fontSize: '11px' }}>
          Yellow (EM): λ = 1550nm | Blue (GW): λ → ∞
        </div>
      </div>

      <button
        onClick={() => {}}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        Causal Fatigue Visualized
      </button>
    </div>
  );
}
