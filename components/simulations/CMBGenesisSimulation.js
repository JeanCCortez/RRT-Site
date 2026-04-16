import { useRef, useEffect, useState } from 'react';

export default function CMBGenesisSimulation() {
  const containerRef = useRef(null);
  const [isRRT, setIsRRT] = useState(true);
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

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // Causal vector (RRT only)
      const causalGeometry = new THREE.CylinderGeometry(0.08, 0.08, 5, 16);
      const causalMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, emissive: 0x00aa00 });
      const causalVector = new THREE.Mesh(causalGeometry, causalMaterial);
      causalVector.visible = isRRT;
      scene.add(causalVector);

      // Hot particles (red)
      const hotGeometry = new THREE.SphereGeometry(0.12, 16, 16);
      const hotMaterial = new THREE.MeshPhongMaterial({ color: 0xff6464 });
      const hotParticles = [];

      for (let i = 0; i < 150; i++) {
        const particle = new THREE.Mesh(hotGeometry, hotMaterial);
        const angle = Math.random() * Math.PI * 0.4 - Math.PI * 0.2;
        const dist = 2;
        particle.position.set(
          Math.cos(angle) * dist,
          2.5 - Math.random() * 0.3,
          Math.sin(angle) * dist
        );
        particle.userData = { angle, dist };
        scene.add(particle);
        hotParticles.push(particle);
      }

      // Cold particles (blue)
      const coldGeometry = new THREE.SphereGeometry(0.12, 16, 16);
      const coldMaterial = new THREE.MeshPhongMaterial({ color: 0x6496ff });
      const coldParticles = [];

      for (let i = 0; i < 150; i++) {
        const particle = new THREE.Mesh(coldGeometry, coldMaterial);
        const angle = Math.random() * Math.PI * 0.4 - Math.PI * 0.2;
        const dist = 2;
        particle.position.set(
          Math.cos(angle) * dist,
          -2.5 + Math.random() * 0.3,
          Math.sin(angle) * dist
        );
        particle.userData = { angle, dist };
        scene.add(particle);
        coldParticles.push(particle);
      }

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
        zoomRef.current = Math.max(3, Math.min(18, zoomRef.current));
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

        if (isRRT) {
          causalVector.visible = true;
          causalVector.rotation.z = timeRef.current * 0.3;
        } else {
          causalVector.visible = false;
        }

        hotParticles.forEach((p, i) => {
          if (isRRT) {
            const angle = (i / 150) * Math.PI * 0.4 - Math.PI * 0.2 + Math.sin(timeRef.current * 0.3 + i) * 0.1;
            const dist = 1.5 + Math.sin(timeRef.current * 0.4 + i * 0.1) * 0.5;
            p.position.set(Math.cos(angle) * dist, 2.5 + Math.sin(timeRef.current + i * 0.1) * 0.3, Math.sin(angle) * dist);
          } else {
            const angle = (i / 150) * Math.PI * 2;
            const dist = 2 + Math.sin(timeRef.current * 0.5 + i * 0.1) * 0.8;
            p.position.set(Math.cos(angle) * dist, 1 + Math.sin(timeRef.current * 0.3 + i) * 1.5, Math.sin(angle) * dist);
          }
          p.rotation.x += 0.01;
        });

        coldParticles.forEach((p, i) => {
          if (isRRT) {
            const angle = (i / 150) * Math.PI * 0.4 - Math.PI * 0.2 + Math.sin(timeRef.current * 0.3 + i) * 0.1;
            const dist = 1.5 + Math.sin(timeRef.current * 0.4 + i * 0.1) * 0.5;
            p.position.set(Math.cos(angle) * dist, -2.5 - Math.sin(timeRef.current + i * 0.1) * 0.3, Math.sin(angle) * dist);
          } else {
            const angle = (i / 150) * Math.PI * 2 + Math.PI;
            const dist = 2 + Math.sin(timeRef.current * 0.5 + i * 0.1) * 0.8;
            p.position.set(Math.cos(angle) * dist, -1 + Math.sin(timeRef.current * 0.3 + i) * 1.5, Math.sin(angle) * dist);
          }
          p.rotation.x += 0.01;
        });

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
  }, [isRRT]);

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
          border: '2px solid rgba(0, 255, 255, 0.6)',
          borderRadius: '8px',
          padding: '12px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#00ffff',
          maxWidth: '280px',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '12px' }}>
          CMB Genesis (CMB-S4)
        </div>
        <div style={{ color: '#a855f7', marginBottom: '6px', fontSize: '10px' }}>
          Causal Vector Alignment
        </div>
        <div style={{ color: '#fbbf24', fontSize: '10px', lineHeight: '1.4' }}>
          {isRRT ? (
            <>
              <strong>RRT:</strong> 98.36%<br/>alignment
            </>
          ) : (
            <>
              <strong>ΛCDM:</strong> 23.4%<br/>isotropy
            </>
          )}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          backgroundColor: isRRT ? 'rgba(0, 255, 255, 0.15)' : 'rgba(255, 107, 53, 0.15)',
          border: `2px solid ${isRRT ? '#00ffff' : '#ff6b35'}`,
          borderRadius: '8px',
          padding: '8px 12px',
          fontFamily: 'monospace',
          fontSize: '12px',
          fontWeight: 'bold',
          color: isRRT ? '#00ffff' : '#ff6b35',
        }}
      >
        {isRRT ? '🔷 SSB Mode' : '🔶 Isotropic'}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#a1a1aa', fontSize: '11px', fontFamily: 'monospace' }}>
          Drag · Scroll to zoom
        </span>
        <button
          onClick={() => setIsRRT(!isRRT)}
          style={{
            padding: '8px 16px',
            backgroundColor: isRRT ? '#00ffff' : '#ff6b35',
            color: '#0a0e27',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          {isRRT ? 'RRT' : 'ΛCDM'}
        </button>
      </div>
    </div>
  );
}
