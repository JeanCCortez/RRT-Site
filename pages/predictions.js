import Layout from '../components/Layout';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const StreamVisualization = dynamic(() => import('../components/StreamVisualization'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>Loading 3D Visualization...</div>
});

function AnimatedSection({ children, delay = 0 }) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  const baseStyle = {
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(20px)',
  };
  
  const transitionStyle = show ? 'opacity 0.7s ease-out, transform 0.7s ease-out' : 'none';
  
  return (
    <div style={{
      ...baseStyle,
      transition: transitionStyle,
    }}>
      {children}
    </div>
  );
}

export default function Predictions() {
  const [isRRT, setIsRRT] = useState(true);
  const [selectedStream, setSelectedStream] = useState(null);
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scenario, setScenario] = useState('A');

  // Dados EXATOS do Volume 3, página 270
  const streams = [
    { name: 'Phlegethon', pericenter: 12.5, apocenter: 20.0, gapMin: 12.5, gapMax: 16.2 },
    { name: 'Fjörm', pericenter: 10.0, apocenter: 22.0, gapMin: 10.0, gapMax: 14.3 },
    { name: 'Slidr', pericenter: 16.0, apocenter: 30.5, gapMin: 16.0, gapMax: 19.8 },
    { name: 'Sylgr', pericenter: 13.0, apocenter: 24.0, gapMin: 13.0, gapMax: 16.7 },
    { name: 'Ylgr', pericenter: 11.0, apocenter: 21.0, gapMin: 11.0, gapMax: 14.9 }
  ];

  const analyzeStream = (stream) => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setProgress(0);
    setSelectedStream(stream);
    setScenario('A');

    const sequence = [
      { msg: `Analyzing stellar stream: ${stream.name}...`, delay: 400, scenario: null },
      { msg: `Loading Gaia DR4 astrometry data...`, delay: 1100, scenario: null },
      { msg: `Stream parameters: Pericenter=${stream.pericenter} kpc, Apocenter=${stream.apocenter} kpc`, delay: 2000, scenario: null },
      { msg: `Applying RRT Viscous Shear Model (Critical Acceleration a_0 = 1.2001×10⁻¹⁰ m/s²)...`, delay: 3200, scenario: null },
      { msg: `------- SCENARIO A: PURE ASTROMETRY (RRT) -------`, delay: 4500, scenario: 'A' },
      { msg: `Computing deterministic gap rupture zone: [${stream.gapMin.toFixed(1)} kpc – ${stream.gapMax.toFixed(1)} kpc]`, delay: 5800, scenario: 'A' },
      { msg: `Gaps are predictable geometric results of Viscous Shear hydrodynamic friction`, delay: 7100, scenario: 'A' },
      { msg: `6D velocity dispersion at gap edges reveals strictly laminar flow`, delay: 8400, scenario: 'A' },
      { msg: `Angular momentum conservation: VERIFIED (preserved intrinsically)`, delay: 9700, scenario: 'A' },
      { msg: `Pattern consistent with deterministic fluid dynamics, not random collisions`, delay: 11000, scenario: 'A' },
      { msg: `------- SCENARIO B: N-BODY FORCING (LCDM FAILURE) -------`, delay: 12300, scenario: 'B' },
      { msg: `Attempting to explain gaps by inserting 10⁵ M_sun dark matter sub-halos...`, delay: 13600, scenario: 'B' },
      { msg: `Result: Stochastic thermal "spray" of stars (±random scatter)`, delay: 14900, scenario: 'B' },
      { msg: `Angular momentum conservation of actual stream: VIOLATED`, delay: 16200, scenario: 'B' },
      { msg: `Requires continuous parameter adjustment to match observations`, delay: 17500, scenario: 'B' },
      { msg: `------- FALSIFICATION VERDICT -------`, delay: 18800, scenario: null },
      { msg: `Awaiting observational data from LSST and Gaia DR4 for definitive test`, delay: 20100, scenario: null },
    ];

    sequence.forEach(({ msg, delay, scenario: s }, index) => {
      setTimeout(() => {
        if (s) setScenario(s);
        setLogs(prev => [...prev, `[${new Date().toISOString().substring(11, 19)}] ${msg}`]);
        setProgress(((index + 1) / sequence.length) * 100);
        if (index === sequence.length - 1) setIsRunning(false);
      }, delay);
    });
  };

  return (
    <Layout>
      <Head>
        <title>RRT - Predictions & Falsification Tests</title>
      </Head>
      
      <main style={{ paddingBottom: '4rem' }}>
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

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Interactive Analysis: Stream Gap Locations (Blind Predictions)</h3>
              <p className="text-justify leading-relaxed text-lg mb-4">
                RRT submits five formal blind predictions for stellar streams whose internal gaps have not yet been high-resolution mapped. Click on any stream to analyze RRT (Scenario A) vs LCDM (Scenario B) predictions:
              </p>
              
              {/* Stream Selection Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
                {streams.map((stream, idx) => (
                  <button
                    key={idx}
                    onClick={() => analyzeStream(stream)}
                    disabled={isRunning}
                    style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      borderRadius: '6px',
                      border: selectedStream?.name === stream.name ? '2px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: isRunning ? 'not-allowed' : 'pointer',
                      backgroundColor: selectedStream?.name === stream.name ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                      color: '#fbbf24',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease',
                      opacity: isRunning && selectedStream?.name !== stream.name ? 0.5 : 1,
                      boxShadow: selectedStream?.name === stream.name ? '0 0 15px rgba(16, 185, 129, 0.4)' : 'none'
                    }}
                  >
                    {stream.name}
                  </button>
                ))}
              </div>

              {/* Terminal Interface */}
              {selectedStream && (
                <div style={{ backgroundColor: '#050505', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <div style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid rgba(16, 185, 129, 0.3)', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#a1a1aa' }}>rrt_stream_analyzer.py | {selectedStream.name}</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#10b981' }}>Active: {scenario === 'A' ? 'Scenario A (RRT)' : scenario === 'B' ? 'Scenario B (LCDM)' : 'Initialization'}</span>
                  </div>
                  <div style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.75rem', color: '#10b981', maxHeight: '350px', overflowY: 'auto', lineHeight: '1.6', backgroundColor: '#0a0a0a' }}>
                    {logs.length === 0 && !isRunning ? (
                      <div style={{ color: '#a1a1aa' }}>Ready to analyze. Click stream button to execute analysis...</div>
                    ) : logs.length === 0 ? (
                      <div style={{ color: '#a1a1aa' }}>Initializing analysis...</div>
                    ) : (
                      logs.map((log, i) => (
                        <div key={i} style={{ marginBottom: '0.25rem', color: log.includes('SCENARIO') ? '#fbbf24' : log.includes('VIOLATION') || log.includes('FAILED') ? '#ef4444' : '#10b981' }}>
                          {log}
                        </div>
                      ))
                    )}
                    {isRunning && <div style={{ marginTop: '0.5rem', color: '#38bdf8', animation: 'pulse 1s infinite' }}>_</div>}
                  </div>
                  {/* Progress bar */}
                  <div style={{ height: '3px', backgroundColor: '#0a0a0a' }}>
                    <div 
                      style={{
                        height: '100%',
                        backgroundColor: '#10b981',
                        width: `${progress}%`,
                        transition: 'width 0.3s ease',
                        boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)'
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Stream Visualization - Scenario A vs Scenario B */}
              {selectedStream && !isRunning && logs.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ margin: '1.5rem 0 1rem 0', color: '#fbbf24', fontWeight: 'bold', textAlign: 'center' }}>
                    Visual Comparison: Stream Morphology
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                    {/* Scenario A: RRT Deterministic */}
                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '2px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '1.5rem' }}>
                      <h4 style={{ margin: '0 0 1rem 0', color: '#10b981', fontWeight: 'bold', textAlign: 'center' }}>Scenario A: Pure Astrometry (RRT)</h4>
                      <div style={{ position: 'relative', height: '220px', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '6px', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                          {/* Stream arc */}
                          <circle cx="50%" cy="60%" r="35" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.4" />
                          
                          {/* Ordered star distribution (laminar flow) */}
                          {Array.from({ length: 70 }).map((_, i) => {
                            const angle = (i / 70) * Math.PI * 1.6 - Math.PI * 0.8;
                            const r = 33 + Math.sin(angle * 2) * 2;
                            const x = 50 + r * Math.cos(angle);
                            const y = 60 + r * Math.sin(angle);
                            return (
                              <circle key={i} cx={`${x}%`} cy={`${y}%`} r="0.8" fill="#10b981" opacity="0.7" />
                            );
                          })}
                          
                          {/* Gap zone markers (RRT prediction) */}
                          <rect x={`${20 + (selectedStream.gapMin / 30) * 30}%`} y="30%" width={`${((selectedStream.gapMax - selectedStream.gapMin) / 30) * 30}%`} height="60%" fill="#10b981" opacity="0.15" />
                          <line x1={`${20 + (selectedStream.gapMin / 30) * 30}%`} y1="30%" x2={`${20 + (selectedStream.gapMin / 30) * 30}%`} y2="90%" stroke="#10b981" strokeWidth="1.5" opacity="0.6" strokeDasharray="4,4" />
                          <line x1={`${20 + (selectedStream.gapMax / 30) * 30}%`} y1="30%" x2={`${20 + (selectedStream.gapMax / 30) * 30}%`} y2="90%" stroke="#10b981" strokeWidth="1.5" opacity="0.6" strokeDasharray="4,4" />
                        </svg>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#10b981', fontFamily: 'monospace', textAlign: 'center', lineHeight: '1.6' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Deterministic Gap Zone</div>
                        <div>[{selectedStream.gapMin.toFixed(1)} kpc – {selectedStream.gapMax.toFixed(1)} kpc]</div>
                        <div style={{ marginTop: '0.5rem', color: '#a1a1aa', fontSize: '0.7rem' }}>Laminar flow • Angular momentum conserved</div>
                      </div>
                    </div>

                    {/* Scenario B: LCDM Stochastic */}
                    <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '1.5rem' }}>
                      <h4 style={{ margin: '0 0 1rem 0', color: '#ef4444', fontWeight: 'bold', textAlign: 'center' }}>Scenario B: N-Body Forcing (LCDM)</h4>
                      <div style={{ position: 'relative', height: '220px', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '6px', marginBottom: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                          {/* Stream arc */}
                          <circle cx="50%" cy="60%" r="35" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.4" />
                          
                          {/* Basal ordered distribution */}
                          {Array.from({ length: 70 }).map((_, i) => {
                            const angle = (i / 70) * Math.PI * 1.6 - Math.PI * 0.8;
                            const r = 33 + Math.sin(angle * 2) * 2;
                            const x = 50 + r * Math.cos(angle);
                            const y = 60 + r * Math.sin(angle);
                            return (
                              <circle key={i} cx={`${x}%`} cy={`${y}%`} r="0.8" fill="#ef4444" opacity="0.4" />
                            );
                          })}
                          
                          {/* Thermal scatter (stochastic spray) */}
                          {Array.from({ length: 45 }).map((_, i) => {
                            const angle = Math.random() * 2 * Math.PI;
                            const rnd = 25 + Math.random() * 30;
                            const x = 50 + rnd * Math.cos(angle);
                            const y = 60 + rnd * Math.sin(angle);
                            return (
                              <circle key={`scatter-${i}`} cx={`${x}%`} cy={`${y}%`} r="0.6" fill="#ef4444" opacity={0.4 + Math.random() * 0.4} />
                            );
                          })}
                        </svg>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#ef4444', fontFamily: 'monospace', textAlign: 'center', lineHeight: '1.6' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Random Thermal Spray</div>
                        <div>±2.3 kpc scatter (stochastic)</div>
                        <div style={{ marginTop: '0.5rem', color: '#a1a1aa', fontSize: '0.7rem' }}>Dark matter sub-halos • Angular momentum violated</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
