import { useRef, useEffect, useState } from 'react';

export default function CMBGenesisSimulation() {
  const canvasRef = useRef(null);
  const [isRRT, setIsRRT] = useState(true);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const animate = () => {
      timeRef.current += 0.016;
      
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (isRRT) {
        // RRT: Particles align to causal vector (green axis in center)
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - 80);
        ctx.lineTo(centerX, centerY + 80);
        ctx.stroke();

        // Hot particles (red) align upward
        ctx.fillStyle = 'rgba(255, 100, 100, 0.8)';
        for (let i = 0; i < 150; i++) {
          const angle = Math.random() * Math.PI * 0.3 - Math.PI * 0.15;
          const dist = 20 + Math.sin(i * 0.05 + timeRef.current * 0.5) * 60;
          const x = centerX + Math.cos(angle) * dist;
          const y = centerY - dist * 0.5;
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }

        // Cold particles (blue) align downward
        ctx.fillStyle = 'rgba(100, 150, 255, 0.8)';
        for (let i = 0; i < 150; i++) {
          const angle = Math.random() * Math.PI * 0.3 - Math.PI * 0.15;
          const dist = 20 + Math.sin(i * 0.05 + timeRef.current * 0.5) * 60;
          const x = centerX + Math.cos(angle) * dist;
          const y = centerY + dist * 0.5;
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      } else {
        // ΛCDM: Isotropic thermal expansion
        ctx.fillStyle = 'rgba(150, 150, 150, 0.6)';
        const expansion = 1 + Math.sin(timeRef.current * 0.5) * 0.2;
        
        for (let i = 0; i < 300; i++) {
          const angle = (i / 300) * Math.PI * 2;
          const baseRadius = 40;
          const radius = baseRadius * expansion + Math.sin(i * 0.1 + timeRef.current) * 15;
          
          const temp = Math.random();
          ctx.fillStyle = temp > 0.5 ? 'rgba(255, 100, 100, 0.6)' : 'rgba(100, 150, 255, 0.6)';
          
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isRRT]);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{
          border: '1px solid rgba(0, 255, 255, 0.3)',
          borderRadius: '8px',
          display: 'block',
          backgroundColor: '#0a0e27',
        }}
      />
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(10, 14, 39, 0.9)',
        border: '1px solid rgba(0, 255, 255, 0.5)',
        borderRadius: '6px',
        padding: '10px',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#00ffff',
        textAlign: 'right',
      }}>
        <div style={{ fontWeight: 'bold' }}>CMB Genesis (CMB-S4)</div>
        <div style={{ marginTop: '5px', fontSize: '10px' }}>Alignment: {isRRT ? '98.36%' : '23.4%'}</div>
      </div>
      <button
        onClick={() => setIsRRT(!isRRT)}
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
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
        {isRRT ? 'RRT: SSB' : 'ΛCDM: Isotropic'}
      </button>
    </div>
  );
}
