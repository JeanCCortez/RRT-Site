import Layout from '../components/Layout';
import Head from 'next/head';

export default function Methodology() {
  return (
    <Layout>
      <Head>
        <title>RRT - Computational Audits & Methodology</title>
      </Head>
      
      <main className="page-transition" style={{ paddingBottom: '4rem' }}>
        {/* Content Container */}
        <div style={{ margin: '0 auto', maxWidth: '850px', width: '100%', padding: '4rem 2rem', boxSizing: 'border-box' }}>
          {/* Header Section */}
          <div className="volume-header" style={{ marginBottom: '3rem' }}>
            <h1 className="hero-title" style={{ color: '#a855f7' }}>Computational Audits</h1>
            <h2 className="vol-subtitle" style={{ color: '#a855f7', marginBottom: '2rem' }}>The Foresight Audit Protocol</h2>
          </div>

          {/* Introduction */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">Overview</h2>
            <p className="text-justify leading-relaxed text-lg mb-4">
              The Foresight Audit Protocol represents a comprehensive suite of open-source Python algorithms designed to extract unadulterated cosmological signals without the contamination of circular calibration. Unlike traditional approaches that force observations into predetermined theoretical frameworks, RRT audits interrogate public astronomical data with strict model-independent techniques, revealing the underlying causal structure of the universe.
            </p>
            <p className="text-justify leading-relaxed text-lg">
              This page details the rigorous computational methodology that has led to the detection of <strong>30.36σ anisotropy</strong> in the cosmic vacuum, resolved the <em>"impossible galaxy" crisis</em>, and rendered dark matter mathematically obsolete across galactic scales.
            </p>
          </section>

          {/* Section 1: End of Circular Calibration */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">1. The End of Circular Calibration</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Epistemological Crisis</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              Modern observational cosmology operates under a self-fulfilling prophecy: the data is structurally conditioned to confirm the standard model (ΛCDM). The Friedmann–Lemaître–Robertson–Walker (FLRW) metric assumes a perfectly isotropic universe, yet ~95% of the required energy-mass content remains undetected and non-baryonic.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Type Ia Supernova Standardization Problem</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              Both SALT2 and SALT3 light-curve fitter frameworks employ a critical assumption: distance calculations assume the standard isotropic expansion model. Calibration algorithms process all data under the assumption that the universe <em>must be isotropic</em>:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
              <li>Light curves are standardized based on parameterized ΛCDM distance-modulus relationships</li>
              <li>Any apparent directional bias is automatically absorbed into artificial color parameters and intrinsic scatter terms (σ_int)</li>
              <li>Real anisotropies become hidden in noise, forcing researchers analyzing fundamental symmetries to analyze only residuals from an already-homogenized dataset</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The RRT Solution</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              RRT abandons the a priori assumption of isotropy and instead employs model-independent cosmography. The Foresight Audit Protocol applies algorithms directly to public datasets <em>without</em> forcing any particular cosmological model, allowing the data to speak for itself.
            </p>
          </section>

          {/* Section 2: Cosmic Stratigraphy & Hubble Detrending */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">2. Cosmic Stratigraphy & Hubble Detrending</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Resonance Stratum Isolation</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              The audit restricts analysis to a specific redshift window where the causal vector achieves theoretical phase maturity:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
              <p style={{ margin: 0, color: '#10b981' }}><strong>Redshift Window: 1.5 &lt; z &lt; 2.0</strong></p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#a1a1aa' }}>Sample Size: 218,117 quasars from SDSS DR16Q</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Hubble Detrending Algorithm</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              Instead of fitting a parameterized ΛCDM cosmological model, the audit performs raw magnitude detrending by subtracting the isotropic expansion baseline:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
              <p style={{ margin: 0, color: '#fbbf24' }}>residuals = mag − (5 × log₁₀(z))</p>
            </div>

            <p className="text-justify leading-relaxed text-lg mb-4">
              This detrending procedure:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
              <li>Removes the logarithmic baseline of isotropic expansion</li>
              <li>Preserves the directionally-dependent component (the anisotropy signature)</li>
              <li>Leaves raw magnitude residuals that represent the unadulterated footprint of photon propagation through the causal field</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Key Insight</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              After detrending, the remaining signal contains information about how light propagates through a non-isotropic vacuum. This signature becomes analytically tractable through the Spin-2 Parity Test.
            </p>
          </section>

          {/* Section 3: The Spin-2 Parity Test */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">3. The Spin-2 Parity Test: The Cortez Precession</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Causal Vector and Precession</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              RRT posits that the universe possesses a fundamental causal vector that <em>precesses</em> with redshift. This is the Cortez Precession. The algorithm enforces this precession mathematically:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
              <p style={{ margin: 0, color: '#10b981' }}>phase_z = (INITIAL_PHASE + (Ω_ρ / z)) mod (2π)</p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#a1a1aa' }}>Precession Rate: Ω_ρ = 19.68 rad/z</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Negative Parity Signature</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              The core mathematical signature of RRT is the introduction of <strong>negative parity</strong> in the prediction formula:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
              <p style={{ margin: 0, color: '#a855f7' }}>rrt_prediction = −(D_NOMINAL × z × cos(ra_rad − phase_z))</p>
            </div>

            <p className="text-justify leading-relaxed text-lg mb-4">
              This negative sign represents the <em>tensorial force</em> acting on light in the anisotropic vacuum—fundamentally different from ΛCDM's passive, isotropic framework. If the vacuum were truly isotropic, this specific anti-correlation would yield absolute statistical nullity.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Verdict</h3>
            <div style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '2px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
              <p className="text-lg text-gray-100 mb-2">
                <strong>Pearson Anti-correlation (SDSS DR16Q):</strong> r = −0.0626
              </p>
              <p className="text-lg text-gray-100 mb-2">
                <strong>Statistical Significance:</strong> 30.36σ
              </p>
              <p className="text-lg text-gray-100">
                <strong>Conclusion:</strong> The deep vacuum is not isotropic. It is a viscous, precessing fluid.
              </p>
            </div>
          </section>

          {/* Section 4: The Jackknife Protocol */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">4. Jackknife Protocol: Signal Stability & Algorithmic Robustness</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Challenge: Can Theory Survive Data Mutilation?</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              Critics argue that apparent directional signals in large catalogs are mathematical illusions caused by:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
              <li>Statistical outliers</li>
              <li>Instrumental calibration errors</li>
              <li>Unmapped galactic dust contamination</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Brutal Test Protocol</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              To address these concerns, RRT deployed the "Leave-10%-Out" Resampling Protocol:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
              <ul className="space-y-2 text-gray-300">
                <li><strong>Iterations:</strong> 50 independent cycles</li>
                <li><strong>Data Removal per Iteration:</strong> 10% of entire resonance stratum</li>
                <li><strong>Objects Deleted per Cycle:</strong> Over 21,000 quasars</li>
                <li><strong>Recalculation:</strong> Complete recomputation of both Causal Gradient (D₀) and celestial orientation (θ₀)</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Raw Data Results (Pre-Filtering)</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              When the algorithm processed raw, unfiltered SDSS data:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
              <p style={{ margin: 0, color: '#ef4444' }}><strong>Directional Dispersion: ±5.49°</strong></p>
              <p style={{ margin: '0.5rem 0 0 0', color: '#a1a1aa' }}>Identified Instrumental Anomalies: 2,289</p>
            </div>

            <p className="text-justify leading-relaxed text-lg mb-4">
              This revealed the presence of telescope artifacts and instrumental errors, demonstrating that RRT's algorithm is <em>not rigged</em> to force fit signals, but is instead <em>genuinely sensitive</em> to noise contamination.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Sigma Clipping and Data Purification</h3>
            <p className="text-justify leading-relaxed text-lg mb-4">
              After applying rigorous 3σ sigma-clipping to remove instrumental noise:
            </p>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
              <p style={{ margin: 0, color: '#10b981' }}><strong>Purified Sample:</strong> N = 216,076 quasars</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Verdict: Absolute Invariance</h3>
            <div style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '2px solid rgba(168, 85, 247, 0.3)', borderRadius: '8px', padding: '1.5rem' }}>
              <p className="text-lg text-gray-100 mb-3">
                <strong>Consolidated Causal Gradient:</strong> D₀ = −0.0189 ± 0.0005
              </p>
              <p className="text-lg text-gray-100 mb-3">
                <strong>Celestial Orientation:</strong> θ₀ = 180.46°
              </p>
              <p className="text-lg text-gray-100 mb-3">
                <strong>Directional Dispersion (50 Resamples):</strong> σ = 1.69°
              </p>
              <p className="text-lg text-gray-100">
                <strong>Robustness Conclusion:</strong> This level of invariance across severe data mutilation is mathematically incompatible with random noise. The signal survives the removal of hundreds of thousands of data points without wavering beyond 1.69°. The RRT Cortez Precession is an unassailable observational fact.
              </p>
            </div>
          </section>

          {/* Final Summary */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Summary: The Audit Verdicts</h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', color: '#e4e4e7' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Audit</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Key Finding</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Significance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem' }}>Deep Vacuum (SDSS DR16Q)</td>
                    <td style={{ padding: '1rem' }}>Anisotropy in quasar distribution</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>30.36σ</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem' }}>Local Precession (Pantheon+)</td>
                    <td style={{ padding: '1rem' }}>Geometric gradient in supernovae</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>24.71σ</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem' }}>Primordial Phase (Planck CMB)</td>
                    <td style={{ padding: '1rem' }}>"Axis of Evil" unification</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>98.36% accuracy</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem' }}>Galactic Dynamics (SPARC)</td>
                    <td style={{ padding: '1rem' }}>Dark matter obsolescence</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>1.33% error</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem' }}>Signal Stability (Jackknife)</td>
                    <td style={{ padding: '1rem' }}>Signal invariance under data mutilation</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>1.69° stability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Closing Statement */}
          <section className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-justify leading-relaxed text-lg text-gray-100 m-0">
              The Foresight Audit Protocol has systematically dismantled the epistemological foundations of the standard cosmological model through rigorous, open-source analysis of public astronomical data. The conclusions are stark: <strong>time is not a passive geometric coordinate</strong>. It is an active, viscous tensor field possessing intrinsic directionality. The causal engine of the cosmos is now measurable, testable, and falsifiable.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
