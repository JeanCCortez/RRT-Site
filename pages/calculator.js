import Layout from '../components/Layout';
import Head from 'next/head';

export default function Calculator() {
  return (
    <Layout>
      <Head>
        <title>RRT - Cosmological Engine</title>
      </Head>
      
      <main className="page-transition" style={{ paddingBottom: '4rem' }}>
        {/* Content Container - same width as other pages */}
        <div style={{ margin: '0 auto', maxWidth: '850px', width: '100%', padding: '4rem 2rem', boxSizing: 'border-box' }}>
          {/* Header Section */}
          <div className="volume-header" style={{ marginBottom: '3rem' }}>
            <h1 className="hero-title" style={{ color: '#10b981' }}>RRT Engine</h1>
            <h2 className="vol-subtitle" style={{ color: '#10b981', marginBottom: '2rem' }}>Real-Time Cosmological Calculator & Auditor</h2>
          </div>

          {/* Introduction Section */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">About the RRT Engine</h2>
            <p className="text-justify leading-relaxed text-lg mb-4">
              The <strong>RRT Cosmological Engine (Referential Relativity Theory)</strong> is an interactive calculation and auditing tool that allows you to test the predictive equations of Referential Relativity Theory against real astronomical data. This engine implements the mathematical formalisms described in the four volumes of RRT theory.
            </p>
            <p className="text-justify leading-relaxed text-lg mb-4">
              Through this intuitive interface, you can:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
              <li><strong>Calculate anisotropy gradients</strong> for galaxy and supernova catalogs</li>
              <li><strong>Predict corrected magnitude</strong> based on causal coupling (D₀ · z)</li>
              <li><strong>Audit astronomical datasets</strong> such as SDSS, Pantheon+, DES, and CASTLES</li>
              <li><strong>Validate the Law of Linear Causal Coupling</strong> in real-time</li>
              <li><strong>Compare RRT vs ΛCDM residuals</strong> visually</li>
              <li><strong>Estimate statistical significance</strong> of cosmological signals</li>
            </ul>
            <p className="text-justify leading-relaxed text-lg">
              The tool is built with <strong>Python Streamlit</strong> and performs real-time calculations on high-quality data. All algorithms reflect the rigorous formalism presented in the technical volumes of RRT, ensuring reproducibility and scientific transparency.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-10 bg-gray-50 p-6 rounded-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Key Features:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-md border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📊 SDSS DR16Q Auditor</h3>
                <p className="text-gray-700">Analyze the catalog of 750k quasars with 30.36σ significance for cosmic anisotropy detection.</p>
              </div>
              <div className="bg-white p-4 rounded-md border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Pantheon+ Supernovae</h3>
                <p className="text-gray-700">Calculate magnitude residuals confirmed at 23.24σ with the causal gradient.</p>
              </div>
              <div className="bg-white p-4 rounded-md border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🌌 Planck CMB</h3>
                <p className="text-gray-700">Validate the 98.36% alignment between RRT prediction and CMB kinematic dipole.</p>
              </div>
              <div className="bg-white p-4 rounded-md border-l-4 border-amber-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🌀 SPARC Galaxies</h3>
                <p className="text-gray-700">Test galactic dynamics model with error reduced to just 1.33%.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Iframe Section - Widscreen on Desktop */}
        <section className="calculator-iframe-section">
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ margin: '0 auto', maxWidth: '850px', width: '100%', padding: '0 2rem', boxSizing: 'border-box' }}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900" style={{ color: '#10b981' }}>RRT Engine Calculator</h2>
              <p className="text-lg text-gray-700 mb-6">
                Use the calculator below to explore calculations and audit astronomical data in real-time. The tool is fully interactive and responds to custom dataset uploads.
              </p>
            </div>
            
            <iframe 
              src="https://rrt-motor.streamlit.app/?embed=true" 
              width="100%" 
              style={{ 
                minHeight: '1000px', 
                border: 'none', 
                borderRadius: '12px', 
                marginTop: '20px',
                display: 'block'
              }} 
              title="RRT Cosmological Engine"
              allowFullScreen
            />
          </div>
        </section>

        {/* Footer Section */}
        <div style={{ margin: '0 auto', maxWidth: '850px', width: '100%', padding: '0 2rem', boxSizing: 'border-box' }}>
          <section className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-center text-gray-600 text-sm italic">
              RRT Engine v1.0 | Referential Relativity Theory © 2026 | Real-time calculations with Python Streamlit
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
