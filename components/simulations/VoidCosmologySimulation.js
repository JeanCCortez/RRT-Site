import { useRef, useEffect, useState } from 'react';

export default function VoidCosmologySimulation() {
  const containerRef = useRef(null);
  const [isRRT, setIsRRT] = useState(true);
  const timeRef = useRef(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseDownRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const zoomRef = useRef(8);

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

      // Create supercluster (left, slow expansion)
      const superclusterGeometry = new THREE.BoxGeometry(2, 4, 2);
      const superclusterMaterial = new THREE.MeshPhongMaterial({ color: 0x10b981, emissive: 0x059669, wireframe: true });
      const supercluster = new THREE.Mesh(superclusterGeometry, superclusterMaterial);
      supercluster.position.x = -3;
      scene.add(supercluster);

      // Create void (right, fast expansion)
      const voidGeometry = new THREE.BoxGeometry(2, 4, 2);
      const voidMaterial = new THREE.MeshPhongMaterial({ color: 0x3b82f6, emissive: 0x1e40af, wireframe: true });
      const voidBox = new THREE.Mesh(voidGeometry, voidMaterial);
      voidBox.position.x = 3;
      scene.add(voidBox);

      // Create expansion arrow groups
      const createArrows = (x, count, isRRT) => {
        const arrows = [];
        for (let i = 0; i < count; i++) {
          const group = new THREE.Group();
          
          // Arrow shaft
          const shaftGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
          const material = x < 0 ? 
            new THREE.MeshPhongMaterial({ color: 0x10b981 }) :
            new THREE.MeshPhongMaterial({ color: 0x3b82f6 });
          const shaft = new THREE.Mesh(shaftGeometry, material);
          shaft.rotation.z = Math.PI / 2;
          shaft.position.x = 0.5;
          group.add(shaft);

          // Arrow head
          const headGeometry = new THREE.ConeGeometry(0.2, 0.4, 8);
          const head = new THREE.Mesh(headGeometry, material);
          head.rotation.z = -Math.PI / 2;
          head.position.x = 1.2;
          group.add(head);

          group.position.set(x, -1.5 + i * 0.5, 0);
          group.userData = { baseX: x, baseY: group.position.y, isRRT };
          
          scene.add(group);
          arrows.push(group);
        }
        return arrows;
      };

      const superclusterArrows = createArrows(-3, 8, isRRT);
      const voidArrows = createArrows(3, 8, isRRT);

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
        zoomRef.current = Math.max(4, Math.min(20, zoomRef.current));
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

        supercluster.rotation.x += 0.002;
        supercluster.rotation.y += 0.003;
        voidBox.rotation.x += 0.002;
        voidBox.rotation.y += 0.003;

        superclusterArrows.forEach((arrow, i) => {
          if (isRRT) {
            const scale = 0.3 + Math.sin(timeRef.current * 0.3 + i) * 0.15;
            arrow.scale.x = scale;
          } else {
            const scale = 0.4 + Math.sin(timeRef.current * 0.2 + i) * 0.1;
            arrow.scale.x = scale;
          }
        });

        voidArrows.forEach((arrow, i) => {
          if (isRRT) {
            const scale = 1.5 + Math.sin(timeRef.current * 0.5 + i) * 0.3;
            arrow.scale.x = scale;
          } else {
            const scale = 1.0 + Math.sin(timeRef.current * 0.2 + i) * 0.1;
            arrow.scale.x = scale;
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
          Void Cosmology (DESI)
        </div>
        <div style={{ color: '#a855f7', marginBottom: '6px', fontSize: '10px' }}>
          H₀ Variation via BNP
        </div>
        <div style={{ color: '#fbbf24', fontSize: '10px', lineHeight: '1.4' }}>
          {isRRT ? (
            <>
              <strong>RRT:</strong> H₀,void &gt; H₀,cluster
            </>
          ) : (
            <>
              <strong>ΛCDM:</strong> Uniform H₀
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
        {isRRT ? '🔷 Variable' : '🔶 Uniform'}
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
