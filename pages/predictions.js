import Layout from '../components/Layout';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const StreamVisualization = dynamic(() => import('../components/StreamVisualization'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>Loading 3D Visualization...</div>
});

function AnimatedSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Pequeno delay para garantir que o componente renderizou
    const timer = setTimeout(() => setIsVisible(true), 50 + delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
      transition: `opacity 0.8s ease-out 0s, transform 0.8s ease-out 0s`,
      transitionDelay: `${delay}ms`,
      willChange: 'opacity, transform',
    }}>
      {children}
    </div>
  );
}

export default function Predictions() {
  const [isRRT, setIsRRT] = useState(true);

  return (
    <Layout>
      <Head>
        <title>RRT - Predictions & Falsification Tests</title>
      </Head>
      
      <main className="page-transition" style={{ paddingBottom: '4rem' }}>
        {/* Content Container */}
        <div style={{ margin: '0 auto', maxWidth: '850px', width: '100%', padding: '4rem 2rem', boxSizing: 'border-box' }}>
          {/* Header Section */}
          <AnimatedSection delay={0}>
            <div className="volume-header" style={{ marginBottom: '3rem' }}>
              <h1 className="hero-title" style={{ color: '#ef4444' }}>Predictions & Falsifiability</h1>
              <h2 className="vol-subtitle" style={{ color: '#ef4444', marginBottom: '2rem' }}>A Deterministic Agenda for Cosmic Falsification</h2>
            </div>
          </AnimatedSection>

          {/* Introduction */}
          <AnimatedSection delay={100}>
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">Overview</h2>
              <p className="text-justify leading-relaxed text-lg mb-4">
                The power of a scientific theory lies not in its ability to explain past observations, but in its capacity to make <strong>testable, falsifiable predictions about future observations</strong>. RRT presents a deterministic agenda for how observable data from next-generation astronomical surveys will distinguish between RRT and the standard LCDM model.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                This page outlines specific, quantitative predictions for major observatories arriving over the next 3-5 years. Each prediction employs a "Dual Scenario" framework: Scenario A represents what RRT predicts will appear in <em>raw, unmanipulated data</em>, while Scenario B shows what standard pipelines will claim by artificially forcing the data into an isotropic mold.
              </p>
            </section>
          </AnimatedSection>

          {/* Core Concept */}
          <AnimatedSection delay={200}>
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">The Variance Absorption Mechanism</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Central Problem</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                Modern data processing pipelines operate under the premise that <em>the universe must be isotropic</em>. When raw observations reveal directional variances, calibration algorithms systematically absorb these real signals and reclassify them as artificial noise to preserve the isotropy assumption.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Documented Pipeline Bias (LSST Early Engineering)</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                LSST engineering documentation reveals endemic calibration flaws:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
                <li>Over-scaling Right Ascension errors by cosine of declination (artificial isotropy enforcement)</li>
                <li>Failing aperture corrections for non-point structures (directional bias absorption)</li>
                <li>De facto algorithmic bias toward isotropy in all standardization procedures</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The RRT Strategy</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                By establishing explicit "Dual Scenarios" for each upcoming observatory, RRT predicts:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
                <li><strong>Scenario A (RAW Data):</strong> What unmanipulated astrometry should reveal according to RRT</li>
                <li><strong>Scenario B (LCDM Pipeline):</strong> What biased standard pipelines will artificially claim</li>
              </ul>

              <p className="text-justify leading-relaxed text-lg mb-4">
                This dual prediction demonstrates the transparently falsifiable nature of RRT: if pipelines reveal Scenario A instead of Scenario B, the theory withstands falsification. If they reveal Scenario B, RRT's predictions are falsified, and the theory must be abandoned.
              </p>
            </section>
          </AnimatedSection>

          {/* Fluid Dynamics in Stellar Streams */}
          <AnimatedSection delay={300}>
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Fluid Dynamics in Stellar Streams (Gaia DR4 & LSST)</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Paradigm Shift</h3>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', color: '#a1a1aa', fontWeight: 'bold' }}>Standard Model</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', color: '#a1a1aa', fontWeight: 'bold' }}>RRT View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '0.75rem', color: '#e4e4e7' }}>Morphological gaps = random collisions with dark matter sub-halos (stochastic)</td>
                      <td style={{ padding: '0.75rem', color: '#10b981' }}>Gaps = deterministic result of Viscous Shear from tensor field hydrodynamic friction</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Physical Mechanism</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                When a stellar stream plunges toward galactic pericenter:
              </p>
              <ol className="list-decimal pl-8 space-y-2 text-lg text-gray-800 mb-6">
                <li>Local gravitational acceleration drops below the Cortez Limit: a0 = 1.2001 x 10^-10 m/s^2</li>
                <li>The system undergoes Viscous Shear caused by baryonic system coupling to the temporal tensor field</li>
                <li>This hydrodynamic friction creates precise morphological ruptures at predictable radii</li>
              </ol>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Interactive 3D Visualization</h3>
              <p className="text-justify leading-relaxed text-lg mb-6">
                Toggle between RRT (laminar, deterministic) and LCDM (stochastic, chaotic) stellar stream morphologies:
              </p>

              {/* Toggle Button */}
              <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <button
                  onClick={() => setIsRRT(!isRRT)}
                  style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: isRRT ? '#00ffff' : '#ff6b35',
                    color: '#0a0e27',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 0 20px ${isRRT ? 'rgba(0, 255, 255, 0.5)' : 'rgba(255, 107, 53, 0.5)'}`
                  }}
                >
                  {isRRT ? 'RRT: Laminar Flow' : 'LCDM: Stochastic Spray'}
                </button>
              </div>

              {/* 3D Canvas */}
              <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <StreamVisualization isRRT={isRRT} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">A Priori Predictions: Stream Gap Locations</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                RRT makes specific predictions for morphological gaps in five named stellar streams:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { name: 'Phlegethon', range: '12.5-16.2 kpc' },
                  { name: 'Fjorm', range: '10.0-14.3 kpc' },
                  { name: 'Slidr', range: '16.0-19.8 kpc' },
                  { name: 'Sylgr', range: '13.0-16.7 kpc' },
                  { name: 'Ylgr', range: '11.0-14.9 kpc' }
                ].map((stream, idx) => (
                  <div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1rem' }}>
                    <p style={{ margin: 0, color: '#fbbf24', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stream.name}</p>
                    <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem' }}>Gap Radius: {stream.range}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Dual Scenario Verdict</h3>
              
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#10b981', fontWeight: 'bold' }}>Scenario A: Pure Astrometry (RRT Success)</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-0">
                  <li>Morphological gaps occur <strong>exclusively</strong> at a priori calculated coordinates</li>
                  <li>6D velocity dispersion at gap edges reveals strictly <strong>laminar flow</strong></li>
                  <li>Pattern consistent with <strong>deterministic fluid dynamics</strong>, not random collisions</li>
                  <li>Angular momentum conservation preserved intrinsically</li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '1.5rem' }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#ef4444', fontWeight: 'bold' }}>Scenario B: N-Body Forcing (LCDM Failure)</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-0">
                  <li>Researchers artificially insert dark matter halos into simulations</li>
                  <li>Models generate <strong>stochastic, thermal "spray"</strong> of stars</li>
                  <li>Violates <strong>angular momentum conservation</strong> of actual stream</li>
                  <li>Requires continuous parameter adjustment to match observations</li>
                </ul>
              </div>
            </section>
          </AnimatedSection>

          {/* Cosmic Shear Predictions */}
          <AnimatedSection delay={400}>
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Extreme Cosmological Precision Tests (Euclid, CMB-S4)</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Euclid Weak Lensing: The Rotational Signature</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                The Euclid satellite will map weak gravitational lensing in unprecedented detail. RRT predicts a unique rotational (B-mode) signature in shear maps - the imprint of the anisotropic temporal tensor field on light propagation.
              </p>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
                <p style={{ margin: 0, color: '#a855f7', marginBottom: '0.5rem' }}>Gamma(theta,z) = Gamma_ISO(theta) [1 + A_T(z) cos(2(phi - phi_T(z)))]</p>
                <p style={{ margin: '1rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>
                  RRT Prediction: A_T(z = 0.5) = 0.074 +/- 0.008 (B-mode amplitude)
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">CMB-S4: Low Multipole Angular Gradient</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                RRT has already demonstrated that the "Axis of Evil" is not a statistical anomaly, but the signature of the causal vector at recombination. CMB-S4 will measure this with unprecedented precision:
              </p>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
                <p style={{ margin: 0, color: '#a855f7' }}>h* = 0.015 +/- 0.003</p>
                <p style={{ margin: '0.5rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>Angular gradient in low multipoles (ell less than 20)</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">VLBI: Direct Measurement of Cosmic Rotation</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                For the first time, Gaia DR5 combined with VLBI will enable direct detection of the precession of the fundamental causal vector field:
              </p>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', fontFamily: 'monospace' }}>
                <p style={{ margin: 0, color: '#10b981' }}>d(phi_T)/dt = (0.12 +/- 0.03) degrees per century</p>
                <p style={{ margin: '0.5rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>Rate of Cosmic Rotation (Causal Axis Precession)</p>
              </div>
            </section>
          </AnimatedSection>

          {/* DESI Void Test */}
          <AnimatedSection delay={500}>
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Large-Scale Structure (DESI): The Void Expansion Rate Test</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Novel Prediction</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                Due to the Baryonic Neutrality Principle, the expansion rate should vary with local matter density. <strong>Deep cosmic voids experience less baryonic shielding</strong>, allowing causal field effects to dominate.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">RRT Prediction: Void Expansion Elevation</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                Measurements of H0 restricted exclusively to the interior of large cosmic voids should yield <strong>systematically higher values</strong> than measurements within dense superclusters:
              </p>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
                <p style={{ margin: 0, color: '#fbbf24' }}>H0,void &gt; H0,supercluster</p>
                <p style={{ margin: '0.5rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>K_eff approximately 1 (perfect RRT agreement)</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Physical Mechanism</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                This topological variation reveals the "Causal Shielding Effect": baryonic matter literally shields the temporal field effects. In dense regions, the field is suppressed; in voids, it dominates the expansion dynamics.
              </p>
            </section>
          </AnimatedSection>

          {/* Closing Statement */}
          <AnimatedSection delay={600}>
            <section className="bg-gradient-to-r from-red-900 to-red-800 p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-justify leading-relaxed text-lg text-gray-100 m-0">
                The Falsification Agenda is explicitly deterministic. Each prediction can be tested, verified, or refuted by imminent astronomical surveys. If the cosmos conforms to these predictions, Einstein's geometric framework requires fundamental revision. If it does not, RRT must be abandoned. Science demands nothing less than this uncompromising transparency. The era of phenomenological fitting is over. The age of deterministic prediction has begun.
              </p>
            </section>
          </AnimatedSection>
        </div>
      </main>
    </Layout>
  );
}
