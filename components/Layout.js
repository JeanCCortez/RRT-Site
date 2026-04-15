import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          RRT
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/volume1" className="nav-link">Vol. I</Link>
          <Link href="/volume2" className="nav-link">Vol. II</Link>
          <Link href="/volume3" className="nav-link">Vol. III</Link>
          <Link href="/volume4" className="nav-link">Vol. IV</Link>
          <Link href="/methodology" className="nav-link">Audits</Link>
          <Link href="/predictions" className="nav-link">Predict.</Link>
          <Link href="/calculator" className="nav-link nav-highlight-green">Engine</Link>
          <Link href="/simulations" className="nav-link nav-highlight-red">Live</Link>
        </div>

        {/* Hamburger Button */}
        <button className="nav-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-menu-mobile">
          <Link href="/" className="nav-link-mobile" onClick={closeMenu}>Home</Link>
          <div className="nav-separator"></div>
          <span className="nav-label-mobile">Theory</span>
          <Link href="/volume1" className="nav-link-mobile" onClick={closeMenu}>Volume I</Link>
          <Link href="/volume2" className="nav-link-mobile" onClick={closeMenu}>Volume II</Link>
          <Link href="/volume3" className="nav-link-mobile" onClick={closeMenu}>Volume III</Link>
          <Link href="/volume4" className="nav-link-mobile" onClick={closeMenu}>Volume IV</Link>
          <div className="nav-separator"></div>
          <span className="nav-label-mobile">Research</span>
          <Link href="/methodology" className="nav-link-mobile" onClick={closeMenu}>Computational Audits</Link>
          <Link href="/predictions" className="nav-link-mobile" onClick={closeMenu}>Predictions</Link>
          <div className="nav-separator"></div>
          <span className="nav-label-mobile">Tools</span>
          <Link href="/calculator" className="nav-link-mobile nav-highlight-green" onClick={closeMenu}>RRT Engine</Link>
          <Link href="/simulations" className="nav-link-mobile nav-highlight-red" onClick={closeMenu}>Live Simulations</Link>
        </div>
      )}

      <main className="page-transition">
        {children}
      </main>
    </>
  );
}