import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import StreamVisualization from '../components/StreamVisualization';

function AnimatedSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s',
    }}>
      {children}
    </div>
  );
}

function PredictionTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const predictions = [
    { name: 'Gaia', value: '7.2 sigma' },
    { name: 'Euclid', value: '8.1 sigma' },
    { name: 'CMB-S4', value: '9.3 sigma' },
    { name: 'DESI', value: '6.8 sigma' },
  ];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex gap-3 flex-wrap">
        {predictions.map((p, i) => (
          <button key={i} onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'px-4 py-2 bg-yellow-400 text-black rounded-lg' : 'px-4 py-2 bg-gray-700 text-gray-200 rounded-lg'}>
            {p.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <p className="text-3xl font-bold text-cyan-400">{predictions[activeIndex].value}</p>
      </div>
    </div>
  );
}

function PredictionCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev < 8 ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <div className="text-5xl font-bold text-yellow-400 text-center">{count}/8</div>;
}

export default function Predictions() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <h1 className="text-6xl font-bold mb-4 text-cyan-400">Predictions</h1>
            <p className="text-xl text-gray-300 mb-8">Observational tests of RRT vs LCDM</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-gray-800 p-8 rounded-lg mb-12 border border-gray-700">
              <PredictionCounter />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Missions</h2>
              <PredictionTimeline />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-gray-900 p-8 rounded-lg mb-12 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">3D Visualization</h2>
              <div style={{ height: '500px' }}>
                <StreamVisualization />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Key Results</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div><p className="font-bold text-cyan-300">Precession</p><p>0.12 +/- 0.03 deg/century</p></div>
                <div><p className="font-bold text-cyan-300">Density</p><p>0.18 +/- 0.04 sigma</p></div>
                <div><p className="font-bold text-cyan-300">Lensing</p><p>0.074 +/- 0.008</p></div>
                <div><p className="font-bold text-cyan-300">CMB</p><p>0.015 +/- 0.003</p></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </Layout>
  );
}
