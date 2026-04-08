export default function ImagePanel({ src, alt, caption, themeColor = '#fbbf24' }) {
  return (
    <figure className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: `0 0 30px ${themeColor}30` }} />
      {caption && <figcaption style={{ color: '#a1a1aa', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', marginTop: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>{caption}</figcaption>}
    </figure>
  );
}