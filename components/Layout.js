import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/volume1" className="nav-link">Volume I</Link>
        <Link href="/volume2" className="nav-link">Volume II</Link>
        <Link href="/volume3" className="nav-link">Volume III</Link>
        <Link href="/volume4" className="nav-link">Volume IV</Link>
        <Link href="/simulations" className="nav-link" style={{ color: '#ef4444', textShadow: '0 0 10px rgba(239, 68, 68, 0.5)', whiteSpace: 'nowrap' }}>Live Simulations</Link>
      </nav>
      <main className="page-transition">
        {children}
      </main>
    </>
  );
}