import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';

// Stellar Stream Particles Component
function StellarStreamParticles({ isRRT }) {
  const particlesRef = useRef(null);
  const velocitiesRef = useRef([]);
  const [particles, setParticles] = useState([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const newParticles = [];
    const newVelocities = [];
    
    // Generate stream morphology
    const streamLength = 50;
    const particleCount = 400;
    
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const streamPos = t * streamLength - streamLength / 2;
      
      // TRR: laminar flow with precise morphological gaps
      if (isRRT) {
        // Create precise gaps at multiple locations for multiple streams
        const gaps = [
          { center: 0.28, width: 0.04 },  // 14.5 kpc equivalent
          { center: 0.50, width: 0.03 },  // Second gap
          { center: 0.72, width: 0.035 }  // Third gap
        ];
        
        let isInGap = false;
        for (let gap of gaps) {
          if (Math.abs(t - gap.center) < gap.width) {
            isInGap = true;
            break;
          }
        }
        
        if (isInGap) continue;
        
        // Smooth laminar oscillations
        const x = streamPos + (Math.random() - 0.5) * 0.2;
        const y = (Math.sin(t * Math.PI * 12) * 0.4) + (Math.cos(t * Math.PI * 6) * 0.2) + (Math.random() - 0.5) * 0.08;
        const z = (Math.cos(t * Math.PI * 8) * 0.25) + (Math.sin(t * Math.PI * 4) * 0.15) + (Math.random() - 0.5) * 0.06;
        
        newParticles.push({ x, y, z, size: 0.85, color: new THREE.Color(0x00ffff), brightness: 0.8 });
        newVelocities.push({ vx: 0.0008, vy: -0.0008, vz: 0.0003, ax: 0, ay: -0.00001, az: 0 });
      } else {
        // ΛCDM: stochastic thermal spray with random bursts
        const x = streamPos + (Math.random() - 0.5) * 4;
        const y = (Math.random() - 0.5) * 4;
        const z = (Math.random() - 0.5) * 2.5;
        
        newParticles.push({ x, y, z, size: Math.random() * 0.8 + 0.3, color: new THREE.Color(0xff6b35), brightness: Math.random() * 0.6 + 0.4 });
        newVelocities.push({ 
          vx: (Math.random() - 0.5) * 0.015, 
          vy: (Math.random() - 0.5) * 0.015, 
          vz: (Math.random() - 0.5) * 0.012,
          ax: (Math.random() - 0.5) * 0.00003,
          ay: (Math.random() - 0.5) * 0.00003,
          az: (Math.random() - 0.5) * 0.00002
        });
      }
    }
    
    setParticles(newParticles);
    velocitiesRef.current = newVelocities;
  }, [isRRT]);

  useFrame(() => {
    if (particlesRef.current && particles.length > 0) {
      const positionAttribute = particlesRef.current.geometry.getAttribute('position');
      const positions = positionAttribute.array;
      
      timeRef.current += 0.016;
      
      particles.forEach((p, i) => {
        if (velocitiesRef.current[i]) {
          const vel = velocitiesRef.current[i];
          
          if (!isRRT) {
            // ΛCDM: stochastic, chaotic acceleration
            vel.vx += vel.ax + (Math.random() - 0.5) * 0.003;
            vel.vy += vel.ay + (Math.random() - 0.5) * 0.003;
            vel.vz += vel.az + (Math.random() - 0.5) * 0.002;
            
            // Random bursts
            if (Math.random() > 0.98) {
              vel.vx += (Math.random() - 0.5) * 0.02;
              vel.vy += (Math.random() - 0.5) * 0.02;
            }
          } else {
            // TRR: smooth, deterministic damping
            vel.vx *= 0.998;
            vel.vy *= 0.998;
            vel.vz *= 0.998;
          }
          
          positions[i * 3] += vel.vx;
          positions[i * 3 + 1] += vel.vy;
          positions[i * 3 + 2] += vel.vz;
          
          // Boundary wrapping
          if (positions[i * 3] > 30) positions[i * 3] = -30;
          if (positions[i * 3] < -30) positions[i * 3] = 30;
        }
      });
      
      positionAttribute.needsUpdate = true;
    }
  });

  const positions = new Float32Array(particles.flatMap(p => [p.x, p.y, p.z]));
  const sizes = new Float32Array(particles.map(p => p.size));

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particles.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        sizeAttenuation={true}
        color={isRRT ? 0x00ffff : 0xff6b35}
        transparent={true}
        opacity={0.85}
        emissive={isRRT ? 0x00ffff : 0xff6b35}
        emissiveIntensity={0.6}
        fog={false}
      />
    </points>
  );
}

// Main Canvas Component
export default function StreamVisualization({ isRRT }) {
  return (
    <Canvas
      style={{ width: '100%', height: '500px', borderRadius: '12px' }}
      camera={{ position: [0, 12, 45], fov: 55 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#0a0e27']} />
      
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight position={[25, 25, 25]} intensity={1.2} color={isRRT ? "#00ffff" : "#ff6b35"} />
      <pointLight position={[-25, -15, 20]} intensity={0.8} color={isRRT ? "#10b981" : "#fbbf24"} />
      <pointLight position={[0, -20, 15]} intensity={0.6} color="#a855f7" />
      
      {/* Reference grid */}
      <gridHelper args={[60, 30, '#333333', '#222222']} position={[0, -25, 0]} />
      
      <StellarStreamParticles isRRT={isRRT} />
      
      <EffectComposer>
        <Bloom 
          intensity={isRRT ? 2.5 : 3} 
          luminanceThreshold={0.15} 
          luminanceSmoothing={0.95}
          mipmapBlur={true}
        />
      </EffectComposer>
    </Canvas>
  );
}
