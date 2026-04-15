import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const NavLink = ({ href, label, color, isHighlight }) => (
    <Link 
      href={href} 
      className="nav-link"
      onClick={closeMenu}
      style={isHighlight ? {
        color: color,
        textShadow: `0 0 15px ${color}77`,
        fontWeight: '600',
        whiteSpace: 'nowrap'
      } : undefined}
    >
      {label}
    </Link>
  );

  return (
    <>
      <nav className="navbar">
        {/* Logo/Home */}
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          RRT
        </Link>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          {/* Theory Section */}
          <div className="nav-section">
            <span className="nav-label">Theory</span>
            <NavLink href="/volume1" label="Vol. I" />
            <NavLink href="/volume2" label="Vol. II" />
            <NavLink href="/volume3" label="Vol. III" />
            <NavLink href="/volume4" label="Vol. IV" />
          </div>

          {/* Research Section */}
          <div className="nav-section">
            <span className="nav-label">Research</span>
            <NavLink href="/methodology" label="Audits" />
            <NavLink href="/predictions" label="Predictions" />
          </div>

          {/* Tools Section */}
          <div className="nav-section">
            <span className="nav-label">Tools</span>
            <NavLink href="/calculator" label="RRT Engine" color="#10b981" isHighlight={true} />
            <NavLink href="/simulations" label="Simulations" color="#ef4444" isHighlight={true} />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-section">
            <h3 className="nav-mobile-label">Theory</h3>
            <NavLink href="/volume1" label="Volume I: Foundations" />
            <NavLink href="/volume2" label="Volume II: Dynamics" />
            <NavLink href="/volume3" label="Volume III: Structure" />
            <NavLink href="/volume4" label="Volume IV: Cosmology" />
          </div>

          <div className="nav-mobile-section">
            <h3 className="nav-mobile-label">Research</h3>
            <NavLink href="/methodology" label="Computational Audits" />
            <NavLink href="/predictions" label="Predictions & Falsifiability" />
          </div>

          <div className="nav-mobile-section">
            <h3 className="nav-mobile-label">Tools & Data</h3>
            <NavLink href="/calculator" label="RRT Engine" color="#10b981" isHighlight={true} />
            <NavLink href="/simulations" label="Live Simulations" color="#ef4444" isHighlight={true} />
          </div>
        </div>
      )}
    </>
  );
}
