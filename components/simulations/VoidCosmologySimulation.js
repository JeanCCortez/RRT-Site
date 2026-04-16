'use client';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function CosmicWeb({ isRRT }) {
  const groupRef = useRef();
  const arrowsRef = useRef([]);
  const timeRef = useRef(0);

  React.useEffect(() => {
    const superclusterArrows = [];
    const voidArrows = [];
    
    for (let x = -30; x < 0; x += 15) {
      for (let y = -30; y < 30; y += 15) {
        for (let z = -30; z < 30; z += 15) {
          superclusterArrows.push({
            x, y, z,
            isVoid: false,
            direction: new THREE.Vector3(0.1, 0, 0),
          });
        }
      }
    }
    
    for (let x = 0; x < 30; x += 20) {
      for (let y = -30; y < 30; y += 20) {
        for (let z = -30; z < 30; z += 20) {
          voidArrows.push({
            x, y, z,
            isVoid: true,
            direction: new THREE.Vector3(1.0, 0.1, 0.1),
          });
        }
      }
    }
    
    arrowsRef.current = [...superclusterArrows, ...voidArrows];
  }, []);

  useFrame(() => {
    timeRef.current += 0.016;
    
    if (!groupRef.current) return;
    
    groupRef.current.children.forEach((arrow, idx) => {
      if (arrowsRef.current[idx]) {
        const arrowData = arrowsRef.current[idx];
        
        if (isRRT) {
          const expansion = arrowData.isVoid ? 1.5 : 0.2;
          arrow.scale.x = 1 + Math.sin(timeRef.current * expansion) * 0.2;
          arrow.scale.y = 1 + Math.sin(timeRef.current * expansion) * 0.2;
          arrow.position.x += arrowData.direction.x * expansion * 0.01;
        } else {
          const uniformExpansion = 1.0;
          arrow.scale.x = 1 + Math.sin(timeRef.current * uniformExpansion) * 0.15;
          arrow.scale.y = 1 + Math.sin(timeRef.current * uniformExpansion) * 0.15;
          arrow.position.x += 0.5 * uniformExpansion * 0.01;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {arrowsRef.current.map((arrow, idx) => (
        <mesh key={idx} position={[arrow.x, arrow.y, arrow.z]}>
          <coneGeometry args={[1.5, 3, 8]} />
          <meshPhongMaterial
            color={arrow.isVoid ? '#3b82f6' : '#10b981'}
            emissive={arrow.isVoid ? '#3b82f6' : '#10b981'}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function VoidCosmologySimulation() {
  const [isRRT, setIsRRT] = useState(true);

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 255, 255, 0.2)' }}>
      <Canvas camera={{ position: [0, 0, 80], fov: 75 }}>
        <color attach="background" args={['#0a0e27']} />
        <ambientLight intensity={0.7} />
        <pointLight position={[50, 50, 50]} intensity={1} color="#00ffff" />
        <CosmicWeb isRRT={isRRT} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
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
        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>VOID COSMOLOGY (DESI)</div>
        <div style={{ marginTop: '10px', color: '#10b981' }}>Supercluster:</div>
        <div style={{ fontSize: '11px' }}>K_eff → {isRRT ? '0' : '0.5'}</div>
        <div style={{ marginTop: '10px', color: '#3b82f6' }}>Void:</div>
        <div style={{ fontSize: '11px' }}>Higher H₀ = {isRRT ? '72' : '70'}</div>
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
