import { useRef, useEffect, useState } from 'react';

export default function CausalFatigueSimulation() {
  const containerRef = useRef(null);
  const timeRef = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseDownRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const zoomRef = useRef(6);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('three').then((THREE) => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0e27);

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = zoomRef.current;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // Black Hole Source
      const bhGeometry = new THREE.SphereGeometry(0.4, 32, 32);
      const bhMaterial = new THREE.MeshPhongMaterial({ color: 0xa855f7, emissive: 0x7c3aed });
      const bhMesh = new THREE.Mesh(bhGeometry, bhMaterial);
      bhMesh.position.x = -4;
      scene.add(bhMesh);

      // LIGO Detector
      const ligoGeometry = new THREE.SphereGeometry(0.35, 32, 32);
      const ligoMaterial = new THREE.MeshPhongMaterial({ color: 0xff6b35, emissive: 0xdc2626 });
      const ligoMesh = new THREE.Mesh(ligoGeometry, ligoMaterial);
      ligoMesh.position.x = 4;
      scene.add(ligoMesh);

      // EM Wave (yellow line)
      const emCurve = new THREE.LineCurve3(
        new THREE.Vector3(-3.5, 1, 0),
        new THREE.Vector3(3.5, 1, 0)
      );
      const emGeometry = new THREE.BufferGeometry().setFromPoints(
        emCurve.getPoints(100)
      );
      const emMaterial = new THREE.LineBasicMaterial({ color: 0xfbbf24, linewidth: 3 });
      const emLine = new THREE.Line(emGeometry, emMaterial);
      scene.add(emLine);

      // GW Wave (blue attenuated wave)
      const gwMaterial = new THREE.LineBasicMaterial({ color: 0x3b82f6, linewidth: 2 });
      let gwLine = null;

      // Create GW wave points that animate
      const createGWWave = () => {
        const points = [];
        const steps = 150;
        for (let i = 0; i <= steps; i++) {
          const x = -3.5 + (i / steps) * 7;
          const progress = (i / steps);
          
          // Causal fatigue: amplitude and frequency decrease
          const fatigue = Math.max(0.1, 1 - progress * 0.8);
          const frequency = (1 - progress * 0.7);
          const amplitude = 0.8 * fatigue;
          const phase = (x + timeRef.current * 2) * frequency * 2;
          const y = -1 + Math.sin(phase) * amplitude;
          
          points.push(new THREE.Vector3(x, y, 0));
        }
        return points;
      };

      const onMouseDown = (e) => {
        isDraggingRef.current = true;
        mouseDownRef.current = { x: e.clientX, y: e.clientY };
      };

      const onMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        const dx = (e.clientX - mouseDownRef.current.x) * 0.01;
        const dy = (e.clientY - mouseDownRef.current.y) * 0.01;
        rotationRef.current.x += dy;
        rotationRef.current.y += dx;
        mouseDownRef.current = { x: e.clientX, y: e.clientY };
      };

      const onMouseUp = () => {
        isDraggingRef.current = false;
      };

      const onWheel = (e) => {
        e.preventDefault();
        zoomRef.current += e.deltaY * 0.005;
        zoomRef.current = Math.max(3, Math.min(16, zoomRef.current));
      };

      renderer.domElement.addEventListener('mousedown', onMouseDown);
      renderer.domElement.addEventListener('mousemove', onMouseMove);
      renderer.domElement.addEventListener('mouseup', onMouseUp);
      renderer.domElement.addEventListener('wheel', onWheel, { passive: false });

      const animate = () => {
        timeRef.current += 0.016;
        requestAnimationFrame(animate);

        scene.rotation.x = rotationRef.current.x;
        scene.rotation.y = rotationRef.current.y;
        camera.position.z = zoomRef.current;

        bhMesh.rotation.x += 0.01;
        bhMesh.rotation.y += 0.015;
        ligoMesh.rotation.x += 0.008;
        ligoMesh.rotation.y += 0.012;

        // Update GW wave
        if (gwLine) scene.remove(gwLine);
        const gwPoints = createGWWave();
        const gwGeometry = new THREE.BufferGeometry().setFromPoints(gwPoints);
        gwLine = new THREE.Line(gwGeometry, gwMaterial);
        scene.add(gwLine);

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        renderer.domElement.removeEventListener('mousemove', onMouseMove);
        renderer.domElement.removeEventListener('mouseup', onMouseUp);
        renderer.domElement.removeEventListener('wheel', onWheel);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '700px', margin: '0 auto' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '12px',
          border: '2px solid rgba(0, 255, 255, 0.4)',
          overflow: 'hidden',
          cursor: isDraggingRef.current ? 'grabbing' : 'grab',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          backgroundColor: 'rgba(10, 14, 39, 0.95)',
          border: '2px solid rgba(239, 68, 68, 0.6)',
          borderRadius: '8px',
          padding: '12px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#ef4444',
          maxWidth: '280px',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '12px' }}>
          Causal Fatigue (LIGO O4)
        </div>
        <div style={{ color: '#a855f7', marginBottom: '6px', fontSize: '10px' }}>
          D_L^GW ≠ D_L^EM
        </div>
        <div style={{ color: '#fbbf24', fontSize: '10px', lineHeight: '1.4' }}>
          <strong>RRT:</strong> Wave<br/>attenuation ~23%
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(239, 68, 68, 0.15)',
          border: '2px solid rgba(239, 68, 68, 0.5)',
          borderRadius: '8px',
          padding: '10px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#ef4444',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        ⚠ GW Attenuation Active | Divergence: 23%
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#a1a1aa',
          fontSize: '11px',
          fontFamily: 'monospace',
        }}
      >
        Drag · Scroll to zoom
      </div>
    </div>
  );
}
