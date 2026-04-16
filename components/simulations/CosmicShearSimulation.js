import { useRef, useEffect, useState } from 'react';

export default function CosmicShearSimulation() {
  const containerRef = useRef(null);
  const [isRRT, setIsRRT] = useState(true);
  const timeRef = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseDownRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const zoomRef = useRef(5);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('three').then(({ default: THREE }) => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0e27);

      // Camera
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = zoomRef.current;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // Create stars
      const starGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const starMaterialRRT = new THREE.MeshPhongMaterial({ color: 0x00ffff });
      const starMaterialLCDM = new THREE.MeshPhongMaterial({ color: 0xff6b35 });

      const stars = [];
      const radius = 3;

      for (let i = 0; i < 200; i++) {
        const angle = (i / 200) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 0.5;

        const star = new THREE.Mesh(starGeometry, isRRT ? starMaterialRRT : starMaterialLCDM);
        star.position.set(x, y, z);
        star.userData = { angle, baseX: x, baseY: y, baseZ: z, radius };

        scene.add(star);
        stars.push(star);
      }

      // Create shear field lines
      const lines = [];
      for (let i = 0; i < 20; i++) {
        const points = [];
        const angle = (i / 20) * Math.PI * 2;

        for (let r = 0; r <= 4; r += 0.2) {
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          points.push(new THREE.Vector3(x, y, 0));
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: isRRT ? 0x00ffff : 0xff6b35,
          opacity: 0.4,
          transparent: true,
        });

        const line = new THREE.Line(geometry, material);
        scene.add(line);
        lines.push(line);
      }

      // Mouse controls
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
        zoomRef.current = Math.max(2, Math.min(15, zoomRef.current));
      };

      renderer.domElement.addEventListener('mousedown', onMouseDown);
      renderer.domElement.addEventListener('mousemove', onMouseMove);
      renderer.domElement.addEventListener('mouseup', onMouseUp);
      renderer.domElement.addEventListener('wheel', onWheel, { passive: false });

      // Animation loop
      const animate = () => {
        timeRef.current += 0.016;
        requestAnimationFrame(animate);

        scene.rotation.x = rotationRef.current.x;
        scene.rotation.y = rotationRef.current.y;
        camera.position.z = zoomRef.current;

        stars.forEach((star, idx) => {
          const { angle, baseX, baseY, baseZ } = star.userData;

          if (isRRT) {
            const shearAngle = angle + timeRef.current * 0.3;
            const shearAmount = Math.cos(2 * shearAngle) * 0.1;
            star.position.x = baseX * (1 + shearAmount);
            star.position.y = baseY;
            star.position.z = baseZ + Math.sin(timeRef.current + idx * 0.1) * 0.05;
          } else {
            const randomShear = Math.sin(timeRef.current * 0.5 + idx) * 0.3;
            const randomDisturb = Math.cos(timeRef.current * 0.3 + idx * 2) * 0.2;
            star.position.x = baseX + randomShear;
            star.position.y = baseY + randomDisturb;
            star.position.z = baseZ + Math.random() * 0.5 - 0.25;
          }

          star.rotation.x += 0.01;
          star.rotation.y += 0.02;
        });

        lines.forEach((line, i) => {
          if (isRRT) {
            line.material.color.set(0x00ffff);
            line.rotation.z = timeRef.current * 0.2;
          } else {
            line.material.color.set(0xff6b35);
            line.rotation.z += Math.sin(timeRef.current + i) * 0.05;
          }
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
          Euclid Weak Lensing
        </div>
        <div style={{ color: '#a855f7', marginBottom: '6px', fontSize: '10px' }}>
          γ(θ,z) = γ_ISO(θ)[1 + A_T(z)cos(2φ)]
        </div>
        <div style={{ color: '#fbbf24', fontSize: '10px', lineHeight: '1.4' }}>
          {isRRT ? (
            <>
              <strong>RRT:</strong> A_T = 0.074±0.008
            </>
          ) : (
            <>
              <strong>ΛCDM:</strong> χ² scatter
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
        {isRRT ? '🔷 Laminar' : '🔶 Chaotic'}
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
