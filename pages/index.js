import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('');

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('Sending...');
    try {
      const response = await fetch('/api/send-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      if (response.ok) {
        setContactStatus('✓ Question sent successfully!');
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setContactStatus(''), 3000);
      } else {
        setContactStatus('✗ Error sending. Please try again.');
      }
    } catch (error) {
      setContactStatus('✗ Connection error.');
    }
  };

  const faqs = [
    {
      question: "Doesn't RRT introduce unnecessary mathematical and conceptual complexity compared to the standard ΛCDM model?",
      answer: "No. The apparent complexity of RRT actually replaces the hidden and ad hoc complexity of the ΛCDM \"dark sector\", which relies on undetected particles and dark energy. Instead of phenomenological parameters tuned for each galaxy, RRT offers strict physical mechanisms derived from a fundamental temporal field."
    },
    {
      question: "The theory postulates a cosmological Lorentz violation. Doesn't this break well-established and universally tested principles of physics?",
      answer: "RRT does not arbitrarily break these principles; it reveals that Lorentzian symmetry is approximate rather than fundamental, backed by empirical evidence at 30.36σ in the deep cosmic vacuum. General Relativity and Lorentz invariance are perfectly recovered at local scales through the Baryonic Neutrality Principle (BNP)."
    },
    {
      question: "A statistical significance of 30.36σ (SDSS DR16Q) is extraordinarily high. Isn't the detected gradient much more likely to be a systematic or instrumental error?",
      answer: "Instrumental and systematic errors are typically static or follow known calibration patterns. RRT predicted and detected a perfect linear law (γ=1.000) and an angular precession driven by a theoretical mechanism. Furthermore, the signal was subjected to a 50-iteration Jackknife test proving sub-degree directional stability (0.19°)."
    },
    {
      question: "Your analysis shows a directional shift in the anisotropy axis between the Pantheon+ and DES surveys. Doesn't this non-monotonic signature indicate a failure in the data or the model?",
      answer: "On the contrary, this shift is the non-monotonic signature that definitively differentiates the RRT causal vector (Tμ) from systematic errors. The exact vector rotation cancels the global linear signal in deep surveys like DES, generating the expected phase decoherence, which acts as experimental proof of the precession of the cosmological axis."
    },
    {
      question: "The Hubble Tension (H0) is widely considered to be an instrumental calibration issue between the early and local universe. Why propose a new ontological framework to solve it?",
      answer: "The discrepancy of approximately 5.0σ is not an instrumental error, but a referential projection effect. By applying the RRT scalar coupling fraction (δ=0.3084), the primordial H0 value is mathematically corrected to 72.92 km/s/Mpc, resolving the tension naturally."
    },
    {
      question: "If the universe operates as a \"viscous fluid,\" why have highly precise local experiments shown zero evidence of this temporal viscosity?",
      answer: "This is exactly what RRT predicts via the Universal Phase Transition Ladder and the Baryonic Shielding Function. In high-density environments, the density far exceeds the critical threshold, suppressing the temporal viscosity and maintaining a state of causal stagnation."
    },
    {
      question: "Modified Newtonian Dynamics (MOND) and Dark Matter halos already explain flat galactic rotation curves. How is the RRT approach quantitatively superior?",
      answer: "Dark matter requires invisible particles and custom-fitted halos. RRT derives a0 = 1.2001×10⁻¹⁰ m/s² from first principles. When applying the RRT Island Law to the 175 spiral galaxies of the SPARC catalog, the mean residual error in rotational velocity drops to an instrumental level of just 1.33%."
    },
    {
      question: "How does RRT explain the \"Axis of Evil\" in the Cosmic Microwave Background (CMB)?",
      answer: "RRT demonstrates that the anomalous alignment of the CMB's low multipoles is the Primordial Causal Signature. By applying the Cortez Rotation back to the recombination epoch, RRT calculates a causal phase of ≈149.94°, which aligns with the Planck SMICA map's anisotropy axis with an astonishing 98.36% accuracy."
    },
    {
      question: "The theory lacks direct experimental detection of the Fundamental Temporal Field (Tμν). Isn't this just another untestable construct?",
      answer: "This critique applies equally to dark matter. However, unlike dark matter, RRT offers highly specific, macroscopic, and testable predictions across multiple independent pathways, replacing an unobservable \"dark sector\" with a rigorously defined causal physics."
    },
    {
      question: "For any theory to supersede ΛCDM, it must be strictly falsifiable. What are the blind, near-term predictions of RRT?",
      answer: "RRT provides absolute deterministic falsifiability through its Critical Field Tests (CFTs). For instance, it predicts precise kilometric rupture zones in stellar streams due to Viscous Shear, and a divergence of up to 23% between gravitational and optical distances in the LIGO O4 run along the Cortez Axis."
    }
  ];

  return (
    <Layout>
      <main className="container page-transition theme-vol1">
        <h1 className="hero-title">Referential Relativity Theory</h1>
        <p className="hero-subtitle">Observational Phenomenology and the Temporal Anisotropy Gradient</p>
        
        <div className="glass-panel">
          <h3 style={{ color: 'var(--theme-color)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Abstract</h3>
          <p>Contemporary cosmology (ΛCDM) faces severe epistemological crises, relying on an unobservable "dark sector" to reconcile galactic dynamics and cosmic expansion. The Referential Relativity Theory (RRT) resolves this impasse by reformulating gravitation through a hydrodynamic and causal framework. We propose that the "spatialization of time"—a foundational error dating back to the 1922 Einstein-Bergson debate—stripped physics of its causal directionality. By postulating time as an active, anisotropic spin-2 tensor field (T<sub>μν</sub>), we introduce the Baryonic Neutrality Principle (BNP), which demonstrates that dense baryonic matter shields local Einsteinian geometry, while the deep vacuum acts as a viscous temporal fluid.</p>
          
          <p style={{ marginTop: '1rem' }}>This phase-dependent metric replaces the geometric Big Bang singularity with a Causal Genesis driven by Spontaneous Symmetry Breaking, and derives the critical acceleration a<sub>0</sub> strictly from first principles. RRT eliminates the need for dark matter and dark energy, validated through a "Golden Triad" of empirical audits: (1) a reduction of dynamical residual error in the SPARC catalog to 1.33% via the Island Law; (2) the exact 98.36% precessional alignment of the CMB low-multipole anomalies (the "Axis of Evil"); and (3) the definitive detection of a Temporal Anisotropy Gradient and Cosmic Precession at 30.36σ significance in the SDSS DR16Q quasar catalog. RRT establishes a unified cosmological paradigm where the 5.0σ Hubble Tension is mathematically resolved as a mere referential projection effect, inaugurating the era of absolute causal prediction.</p>
        </div>

        <section className="faq-container glass-panel" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--theme-color)', fontFamily: 'Inter', fontSize: '1.3rem', letterSpacing: '1px' }}>FAQ</h2>
          
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" style={{ marginBottom: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.7rem' }}>
              <div 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '0.7rem 0.8rem',
                  backgroundColor: expandedFaq === index ? 'rgba(var(--theme-rgb), 0.08)' : 'transparent',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                  userSelect: 'none'
                }}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--theme-color)', minWidth: '1.5rem', opacity: 0.7 }}>
                  {index + 1}
                </span>
                <span style={{ flex: 1, color: 'var(--theme-color)', fontWeight: '500', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  {faq.question}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--theme-color)', transition: 'transform 0.2s ease', transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.6 }}>
                  ▼
                </span>
              </div>
              
              {expandedFaq === index && (
                <div style={{ padding: '0.7rem 0.8rem 0.7rem 3rem', color: '#d1d5db', lineHeight: '1.6', fontSize: '0.85rem', backgroundColor: 'rgba(255,255,255,0.01)', borderRadius: '4px', marginTop: '0.4rem' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="glass-panel" style={{ marginTop: '3rem', padding: '2rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--theme-color)', fontFamily: 'Inter', fontSize: '1.1rem', letterSpacing: '1px' }}>Your Question</h3>
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Didn't find an answer? Send your question directly to the author.</p>
          
          <form onSubmit={handleContactSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your name (optional)"
                value={contactForm.name}
                onChange={handleContactChange}
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--theme-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                }
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Your email *"
                required
                value={contactForm.email}
                onChange={handleContactChange}
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--theme-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <textarea
                name="message"
                placeholder="Your question or inquiry..."
                required
                value={contactForm.message}
                onChange={handleContactChange}
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.2s',
                  fontFamily: 'Inter'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--theme-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                type="submit"
                style={{
                  padding: '0.7rem 2rem',
                  backgroundColor: 'var(--theme-color)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'opacity 0.2s',
                  flex: 1
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                Send Question
              </button>
            </div>
            
            {contactStatus && (
              <p style={{
                marginTop: '1rem',
                fontSize: '0.9rem',
                color: contactStatus.includes('✓') ? '#10b981' : '#ef4444',
                textAlign: 'center'
              }}>
                {contactStatus}
              </p>
            )}
          </form>
        </section>
      </main>
    </Layout>
  );
}