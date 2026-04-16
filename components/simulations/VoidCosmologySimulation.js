import { useRef, useEffect, useState } from 'react';

export default function VoidCosmologySimulation() {
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

      // Supercluster zone (left, green)
      const superclusterX = centerX - 150;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.fillRect(0, 0, centerX - 75, canvas.height);

      // Void zone (right, blue)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.fillRect(centerX + 75, 0, centerX - 75, canvas.height);

      // Draw expansion vectors
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';

      // Supercluster: Slow expansion
      if (isRRT) {
        for (let y = 50; y < canvas.height; y += 60) {
          const scale = 0.3 + Math.sin(timeRef.current * 0.3) * 0.2;
          const arrowLen = 20 * scale;
          ctx.beginPath();
          ctx.moveTo(superclusterX - 30, y);
          ctx.lineTo(superclusterX - 30 + arrowLen, y);
          ctx.stroke();

          // Arrowhead
          ctx.beginPath();
          ctx.moveTo(superclusterX - 30 + arrowLen, y);
          ctx.lineTo(superclusterX - 30 + arrowLen - 5, y - 3);
          ctx.lineTo(superclusterX - 30 + arrowLen - 5, y + 3);
          ctx.closePath();
          ctx.fill();
        }
      } else {
        for (let y = 50; y < canvas.height; y += 60) {
          const scale = 0.5 + Math.sin(timeRef.current) * 0.15;
          const arrowLen = 20 * scale;
          ctx.beginPath();
          ctx.moveTo(superclusterX - 30, y);
          ctx.lineTo(superclusterX - 30 + arrowLen, y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(superclusterX - 30 + arrowLen, y);
          ctx.lineTo(superclusterX - 30 + arrowLen - 5, y - 3);
          ctx.lineTo(superclusterX - 30 + arrowLen - 5, y + 3);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Void: Fast expansion
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
      ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';

      if (isRRT) {
        for (let y = 50; y < canvas.height; y += 60) {
          const scale = 1.5 + Math.sin(timeRef.current * 0.5) * 0.3;
          const arrowLen = 30 * scale;
          ctx.beginPath();
          ctx.moveTo(centerX + 150, y);
          ctx.lineTo(centerX + 150 + arrowLen, y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(centerX + 150 + arrowLen, y);
          ctx.lineTo(centerX + 150 + arrowLen - 5, y - 3);
          ctx.lineTo(centerX + 150 + arrowLen - 5, y + 3);
          ctx.closePath();
          ctx.fill();
        }
      } else {
        for (let y = 50; y < canvas.height; y += 60) {
          const scale = 1.0 + Math.sin(timeRef.current) * 0.15;
          const arrowLen = 25 * scale;
          ctx.beginPath();
          ctx.moveTo(centerX + 150, y);
          ctx.lineTo(centerX + 150 + arrowLen, y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(centerX + 150 + arrowLen, y);
          ctx.lineTo(centerX + 150 + arrowLen - 5, y - 3);
          ctx.lineTo(centerX + 150 + arrowLen - 5, y + 3);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Labels
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Supercluster', centerX - 150, 30);
      ctx.fillText('Void', centerX + 150, 30);

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
        height={350}
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
        <div style={{ fontWeight: 'bold' }}>Void Cosmology (DESI)</div>
        <div style={{ marginTop: '5px', fontSize: '10px' }}>H₀ Variation via BNP</div>
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
        {isRRT ? 'RRT: Variable H₀' : 'ΛCDM: Uniform H₀'}
      </button>
    </div>
  );
}
