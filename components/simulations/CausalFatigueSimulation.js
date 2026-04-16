import { useRef, useEffect, useState } from 'react';

export default function CausalFatigueSimulation() {
  const canvasRef = useRef(null);
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

      const startX = 50;
      const endX = canvas.width - 50;
      const emY = canvas.height / 2 - 50;
      const gwY = canvas.height / 2 + 50;

      // Draw source (Black Hole Merger)
      ctx.fillStyle = '#a855f7';
      ctx.beginPath();
      ctx.arc(startX, canvas.height / 2, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#a1a1aa';
      ctx.font = '11px monospace';
      ctx.fillText('BH Merger', startX - 20, canvas.height / 2 + 25);

      // Draw detector (LIGO)
      const detectorSize = 8 + Math.sin(timeRef.current * 3) * 3;
      ctx.fillStyle = '#ff6b35';
      ctx.beginPath();
      ctx.arc(endX, canvas.height / 2, detectorSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#a1a1aa';
      ctx.fillText('LIGO', endX - 15, canvas.height / 2 + 25);

      // EM Wave (Yellow) - Constant frequency
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = startX; x <= endX; x += 5) {
        const progress = (x - startX) / (endX - startX);
        const phase = (x - timeRef.current * 100) * 0.02;
        const y = emY + Math.sin(phase) * 15;
        
        if (x === startX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px monospace';
      ctx.fillText('EM: λ constant', startX + 20, emY - 25);

      // GW Wave (Blue) - Progressive attenuation (fatiga causal)
      ctx.strokeStyle = '#3b82f6';
      ctx.beginPath();

      for (let x = startX; x <= endX; x += 5) {
        const progress = (x - startX) / (endX - startX);
        
        // Causal fatigue: frequency decreases, amplitude decreases
        const fatigue = Math.max(0.2, 1 - progress * 0.7);
        const frequency = 0.02 * fatigue;
        const amplitude = 15 * fatigue;
        const phase = (x - timeRef.current * 50) * frequency;
        const y = gwY + Math.sin(phase) * amplitude;
        
        if (x === startX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.fillStyle = '#3b82f6';
      ctx.fillText('GW: λ → ∞ (Fatigued)', startX + 20, gwY + 25);

      // Draw phase lag indicator
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(endX - 80, emY);
      ctx.lineTo(endX - 80, gwY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('Phase Lag', endX - 120, canvas.height / 2);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={280}
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
        <div style={{ fontWeight: 'bold' }}>Causal Fatigue (LIGO O4)</div>
        <div style={{ marginTop: '5px', fontSize: '10px' }}>D_L^GW ≠ D_L^EM</div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(10, 14, 39, 0.9)',
        border: '1px solid rgba(239, 68, 68, 0.5)',
        borderRadius: '6px',
        padding: '8px',
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#ef4444',
        textAlign: 'center',
      }}>
        Divergence: ~23% | GW Attenuation Active
      </div>
    </div>
  );
}
