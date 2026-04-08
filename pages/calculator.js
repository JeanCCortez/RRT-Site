import Layout from '../components/Layout';
import Head from 'next/head';

export default function Calculator() {
  return (
    <Layout>
      <Head>
        <title>RRT - Motor Cosmológico</title>
      </Head>
      
      <main className="container page-transition" style={{ paddingBottom: '4rem' }}>
        {/* Header Section */}
        <div className="volume-header" style={{ marginBottom: '3rem' }}>
          <h1 className="hero-title" style={{ color: '#10b981' }}>Motor TRR</h1>
          <h2 className="vol-subtitle" style={{ color: '#10b981', marginBottom: '2rem' }}>Calculadora e Auditor Cosmológico em Tempo Real</h2>
        </div>

        {/* Introduction Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-0">Sobre o Motor TRR</h2>
          <p className="text-justify leading-relaxed text-lg mb-4">
            O <strong>Motor Cosmológico TRR (Referential Relativity Theory)</strong> é uma ferramenta interativa de cálculo e auditoria que permite testar as equações predicativas da Teoria da Relatividade Referencial contra dados astronômicos reais. Este motor implementa os formalismos matemáticos descritos nos quatro volumes da teoria RRT.
          </p>
          <p className="text-justify leading-relaxed text-lg mb-4">
            Através desta interface intuitiva, você pode:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 mb-6">
            <li><strong>Calcular gradientes de anisotropia</strong> para catálogos de galáxias e supernovas</li>
            <li><strong>Predizer magnitude corrigida</strong> baseada no acoplamento causal (D₀ · z)</li>
            <li><strong>Auditar datasets astronômicos</strong> como SDSS, Pantheon+, DES e CASTLES</li>
            <li><strong>Validar a Lei de Acoplamento Causal Linear</strong> em tempo real</li>
            <li><strong>Comparar resíduos RRT vs ΛCDM</strong> visualmente</li>
            <li><strong>Estimar significância estatística</strong> de sinais cosmológicos</li>
          </ul>
          <p className="text-justify leading-relaxed text-lg">
            A ferramenta é construída com <strong>Python Streamlit</strong> e executa cálculos em tempo real sobre dados de alta qualidade. Todos os algoritmos refletem o formalismo rigoroso apresentado nos volumes técnicos da RRT, garantindo reprodutibilidade e transparência científica.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-10 bg-gray-50 p-6 rounded-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Recursos Principais:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📊 Auditor SDSS DR16Q</h3>
              <p className="text-gray-700">Analyse o catálogo de 750k quasares com significância de 30.36σ para detecção de anisotropia cósmica.</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Supernovas Pantheon+</h3>
              <p className="text-gray-700">Calcule resíduos de magnitude confirmados em 23.24σ com o gradiente causal.</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🌌 Planck CMB</h3>
              <p className="text-gray-700">Valide o alinhamento de 98.36% entre a previsão RRT e o dipolo cinemático do CMB.</p>
            </div>
            <div className="bg-white p-4 rounded-md border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🌀 SPARC Galaxies</h3>
              <p className="text-gray-700">Teste o modelo de dinâmica galáctica com erro reduzido a apenas 1.33%.</p>
            </div>
          </div>
        </section>

        {/* Iframe Section */}
        <section className="mt-12">
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900" style={{ color: '#10b981' }}>Acesso ao Motor TRR</h2>
            <p className="text-lg text-gray-700 mb-6">
              Utilize a calculadora abaixo para explorar os cálculos e auditar dados astronômicos em tempo real. A ferramenta é completamente interativa e responde a uploads de datasets customizados.
            </p>
            
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
              title="Motor Cosmológico TRR"
              allowFullScreen
            />
          </div>
        </section>

        {/* Footer Section */}
        <section className="mt-16 pt-8 border-t border-gray-300">
          <p className="text-center text-gray-600 text-sm italic">
            Motor TRR v1.0 | Referential Relativity Theory © 2026 | Cálculos em tempo real com Python Streamlit
          </p>
        </section>
      </main>
    </Layout>
  );
}
