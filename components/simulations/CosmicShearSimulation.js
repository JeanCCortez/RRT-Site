import { useRef, useEffect, useState } from 'react';

export default function CosmicShearSimulation() {
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

      // Draw stars
      ctx.fillStyle = isRRT ? 'rgba(0, 255, 255, 0.7)' : 'rgba(255, 107, 53, 0.7)';
      for (let i = 0; i < 200; i++) {
        const angle = (i / 200) * Math.PI * 2 + timeRef.current;
        const radius = 50 + Math.sin(i * 0.1 + timeRef.current) * 20;
        
        if (isRRT) {
          // RRT: Smooth laminar rotation
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          ctx.fillRect(x - 1, y - 1, 2, 2);
        } else {
          // ΛCDM: Chaotic scatter
          const chaos = Math.sin(i * 0.5 + timeRef.current * 2) * 30;
          const x = centerX + Math.cos(angle) * (radius + chaos);
          const y = centerY + Math.sin(angle) * (radius + chaos);
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      // Draw shear field lines
      ctx.strokeStyle = isRRT ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 107, 53, 0.3)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        const phase = isRRT ? timeRef.current * 0.5 : timeRef.current * 2;
        const amplitude = isRRT ? 10 : 20;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y = centerY + Math.sin((x + phase) * 0.01) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
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
        left: '10px',
        backgroundColor: 'rgba(10, 14, 39, 0.9)',
        border: '1px solid rgba(0, 255, 255, 0.5)',
        borderRadius: '6px',
        padding: '10px',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#00ffff',
      }}>
        <div style={{ fontWeight: 'bold' }}>Cosmic Shear (Euclid)</div>
        <div style={{ marginTop: '5px', fontSize: '10px' }}>γ(θ,z) = γ_ISO[1 + A_T cos(2φ)]</div>
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
        {isRRT ? 'RRT: Laminar' : 'ΛCDM: Chaotic'}
      </button>
    </div>
  );
}
