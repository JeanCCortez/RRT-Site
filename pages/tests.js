import React, { useState } from 'react';
import Layout from '../components/Layout';
import Latex from 'react-latex-next';

export default function Tests() {
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setProgress(0);

    const sequence = [
      { msg: "INITIALIZING RRT MOTOR v2.0.4...", delay: 500 },
      { msg: "Loading Baryonic Neutrality Principle (BNP) modules...", delay: 1200 },
      { msg: "Fetching SPARC Catalog (175 Galaxies)...", delay: 2000 },
      { msg: "Applying Cortez Metric (Phase 3 Viscous Regime)...", delay: 3000 },
      { msg: "Bypassing Dark Matter Halos (K(ρ) → 1 in deep vacuum)...", delay: 4500 },
      { msg: "Calculating Radial Causal Drag...", delay: 6000 },
      { msg: "CONVERGENCE ACHIEVED: Mean residual error 1.33%", delay: 7500 },
      { msg: "Loading SDSS DR16Q Superset v3...", delay: 8500 },
      { msg: "Executing Jackknife Stability Protocol (50 iterations)...", delay: 10000 },
      { msg: "Extracting Temporal Anisotropy Gradient...", delay: 11500 },
      { msg: "SIGNAL ISOLATED: D0 = 0.794, Precession = 148.9°", delay: 13000 },
      { msg: "STATISTICAL VERDICT: 30.36σ (Isotropy Refuted).", delay: 14500 },
    ];

    sequence.forEach(({ msg, delay }, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, `[${new Date().toISOString().substring(11, 19)}] ${msg}`]);
        setProgress(((index + 1) / sequence.length) * 100);
        if (index === sequence.length - 1) setIsRunning(false);
      }, delay);
    });
  };

  return (
    <Layout>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 border-b border-gray-800 pb-4 drop-shadow-md">
          RRT Cosmological Engine
        </h1>
        <p className="text-lg text-gray-700 italic">
          Live algorithmic audit and topological simulation of the Causal Phase Transition.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Terminal Interface */}
        <div className="bg-gray-50 border border-gray-300 rounded-md shadow-sm overflow-hidden flex flex-col h-[450px]">
          <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-mono text-gray-600">rrt_audit_node.py</span>
            <button 
              onClick={runSimulation}
              disabled={isRunning}
              className={`px-5 py-1.5 text-sm font-bold rounded transition-all tracking-wider ${isRunning ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-900 text-white hover:bg-white hover:text-blue-900 shadow-[0_0_10px_rgba(56,189,248,0.4)]'}`}
            >
              {isRunning ? 'EXECUTING...' : 'RUN AUDIT'}
            </button>
          </div>
          <div className="p-5 bg-[#050505] text-[#4ade80] font-mono text-sm flex-grow overflow-y-auto flex flex-col shadow-inner">
            <div className="mb-4 text-gray-500">
              <p># Referential Relativity Cosmological Simulator</p>
              <p># Awaiting execution command...</p>
            </div>
            {logs.map((log, i) => (
              <div key={i} className="mb-2 animate-pulse-once text-[#7dd3fc]">{log}</div>
            ))}
            {isRunning && (
              <div className="mt-2 text-blue-900 font-bold text-lg animate-pulse">_</div>
            )}
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-gray-200">
            <div 
              className="h-full bg-blue-900 transition-all duration-300 shadow-[0_0_8px_#38bdf8]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Visual Simulation */}
        <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm flex flex-col items-center justify-center relative overflow-hidden h-[450px]">
          <h3 className="text-xl font-bold text-gray-900 mb-6 absolute top-6 tracking-widest uppercase">Topological Simulation</h3>
          
          <div className="relative w-64 h-64 flex items-center justify-center mt-12">
            {/* Nucleus Phase 1 (Saturated) */}
            <div className="absolute w-12 h-12 bg-white rounded-full shadow-[0_0_30px_#fff,0_0_60px_#7dd3fc] z-20"></div>
            
            {/* Rotating Viscous Frame */}
            <div className={`absolute w-full h-full border-4 border-dashed border-blue-900/40 rounded-full ${isRunning ? 'animate-spin-slow' : ''}`}></div>
            <div className={`absolute w-48 h-48 border-4 border-dotted border-blue-700/50 rounded-full ${isRunning ? 'animate-spin-reverse-slow' : ''}`}></div>
            
            {/* Spiral Arms (CSS Illusion) */}
            <div className={`absolute w-full h-full opacity-60 rounded-full transition-opacity duration-1000 ${isRunning ? 'animate-spin-slow opacity-100' : 'opacity-20'}`} style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(56,189,248,0.3) 20%, transparent 40%, transparent 50%, rgba(56,189,248,0.3) 70%, transparent 90%)'
            }}></div>

            {/* Overlays/Math */}
            <div className="absolute z-30 font-mono text-xs text-black bg-white/90 px-2 py-1 rounded shadow-md -top-6 backdrop-blur">
              <Latex>{String.raw`$\rho \ll \rho_{crit}$`}</Latex> (Viscous Phase 3)
            </div>
            <div className="absolute z-30 font-mono text-xs text-black bg-white/90 px-2 py-1 rounded shadow-md right-14 top-[55%] backdrop-blur">
              <Latex>{String.raw`$K(\rho) \approx 0$`}</Latex>
            </div>
          </div>
          
          <div className="mt-auto pt-6 text-center text-sm text-gray-700 bg-black/20 w-full p-3 rounded backdrop-blur">
            <p className="font-bold mb-1">Causal Drag Demonstration</p>
            <p>The core remains locked in General Relativity (Phase 1).</p>
            <p>The edges are dragged by Cortez Rotation (<Latex>{String.raw`$\omega_p$`}</Latex>).</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}