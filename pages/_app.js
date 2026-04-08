import '../styles/globals.css'
import 'katex/dist/katex.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Fundo Cósmico / Dark Matter */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: -1, pointerEvents: 'none', backgroundColor: '#030305'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop')",
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.65,
          mixBlendMode: 'screen'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(3,3,5,0.1), rgba(3,3,5,0.8) 80%, #030305)'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Component {...pageProps} />
      </div>

      {/* Substituição global de estilos para o efeito Glassmorphism */}
      <style jsx global>{`
        body {
          color: #e5e7eb !important;
        }
        .bg-white {
          background-color: rgba(15, 15, 20, 0.6) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5) !important;
        }
        .bg-gray-50, .bg-gray-100 {
          background-color: rgba(25, 25, 30, 0.4) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        .bg-blue-50, .bg-yellow-50, .bg-orange-50 {
          background-color: rgba(20, 30, 50, 0.5) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .text-gray-900, .text-gray-800, .text-black {
          color: #f3f4f6 !important;
        }
        .text-gray-700, .text-gray-600, .text-gray-500 {
          color: #d1d5db !important;
        }
        .text-blue-900, .text-blue-800 {
          color: #93c5fd !important;
        }
        .border-gray-800, .border-gray-200, .border-gray-300, .border-gray-400 {
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        table {
          background-color: rgba(0, 0, 0, 0.3) !important;
        }
        thead.bg-gray-50, thead {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        tbody.bg-white {
          background-color: transparent !important;
        }
        tbody tr {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        .katex {
          color: #f9fafb !important;
          text-shadow: 0 0 2px rgba(255,255,255,0.2);
        }
      `}</style>
    </>
  )
}