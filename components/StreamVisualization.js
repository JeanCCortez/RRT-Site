import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';

// Stellar Stream Particles Component
function StellarStreamParticles({ isRRT }) {
  const particlesRef = useRef(null);
  const velocitiesRef = useRef([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    const newVelocities = [];
    
    // Generate stream morphology
    const streamLength = 50;
    const particleCount = 300;
    
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const streamPos = t * streamLength - streamLength / 2;
      
      // TRR: laminar flow with precise morphological gaps
      if (isRRT) {
        // Create precise gap at 14.5 kpc
        const gapCenter = 14.5 / 50;
        const gapWidth = 2.0 / 50;
        
        if (Math.abs(t - gapCenter) < gapWidth) {
          continue; // Skip particles in gap
        }
        
        const x = streamPos + (Math.random() - 0.5) * 0.3;
        const y = (Math.sin(t * Math.PI * 8) * 0.5) + (Math.random() - 0.5) * 0.1; // Smooth laminar
        const z = (Math.cos(t * Math.PI * 4) * 0.3) + (Math.random() - 0.5) * 0.08;
        
        newParticles.push({ x, y, z, size: 0.8, color: new THREE.Color(0x00ffff) });
        newVelocities.push({ vx: 0.001, vy: -0.001, vz: 0.0005 });
      } else {
        // ΛCDM: stochastic thermal spray
        const x = streamPos + (Math.random() - 0.5) * 3;
        const y = (Math.random() - 0.5) * 3;
        const z = (Math.random() - 0.5) * 2;
        
        newParticles.push({ x, y, z, size: 0.6, color: new THREE.Color(0xff6b35) });
        newVelocities.push({ 
          vx: (Math.random() - 0.5) * 0.01, 
          vy: (Math.random() - 0.5) * 0.01, 
          vz: (Math.random() - 0.5) * 0.01 
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
      
      particles.forEach((p, i) => {
        if (velocitiesRef.current[i]) {
          // Update velocity for ΛCDM (more chaotic)
          if (!isRRT) {
            velocitiesRef.current[i].vx += (Math.random() - 0.5) * 0.002;
            velocitiesRef.current[i].vy += (Math.random() - 0.5) * 0.002;
            velocitiesRef.current[i].vz += (Math.random() - 0.5) * 0.001;
          }
          
          positions[i * 3] += velocitiesRef.current[i].vx;
          positions[i * 3 + 1] += velocitiesRef.current[i].vy;
          positions[i * 3 + 2] += velocitiesRef.current[i].vz;
          
          // Boundary wrapping
          if (positions[i * 3] > 25) positions[i * 3] = -25;
          if (positions[i * 3] < -25) positions[i * 3] = 25;
        }
      });
      
      positionAttribute.needsUpdate = true;
    }
  });

  const positions = new Float32Array(particles.flatMap(p => [p.x, p.y, p.z]));
  const sizes = new Float32Array(particles.map(p => p.size));
  const colors = particles.map(p => p.color);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particles.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.4}
        sizeAttenuation={true}
        color={isRRT ? 0x00ffff : 0xff6b35}
        transparent={true}
        opacity={0.9}
        emissive={isRRT ? 0x00ffff : 0xff6b35}
        emissiveIntensity={0.5}
      />
    </points>
  );
}

// Main Canvas Component
function StreamVisualization({ isRRT }) {
  return (
    <Canvas
      style={{ width: '100%', height: '500px', borderRadius: '12px' }}
      camera={{ position: [0, 10, 40], fov: 60 }}
    >
      <color attach="background" args={['#0a0e27']} />
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[20, 20, 20]} intensity={1} color="#00ffff" />
      <pointLight position={[-20, -20, 20]} intensity={1} color="#ff6b35" />
      
      <StellarStreamParticles isRRT={isRRT} />
      
      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
}

export default StreamVisualization;
