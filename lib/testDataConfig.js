/**
 * Test Data Configuration
 * Maps each simulation to its corresponding:
 * - Python script (testes/)
 * - Database files (banco_dados/)
 * - JSON export data (public/data/)
 */

export const testDataConfig = {
  sdss: {
    title: 'SDSS DR16Q Anisotropy Audit',
    pythonScript: 'testes/1-rrt_sdss_anisotropy_audit.py',
    dataFile: '/data/sdss.json',
    databaseSource: 'banco_dados/DR16Q_Superset_v3.fits',
    description: 'Sloan Digital Sky Survey quasar catalog analysis'
  },
  pantheon: {
    title: 'Pantheon+ Gradient Audit',
    pythonScript: 'testes/2-rrt_pantheon_gradient_audit.py',
    dataFile: '/data/pantheon.json',
    databaseSource: 'banco_dados/PantheonPlusSH0ES.csv',
    description: 'Pantheon+ supernova redshift survey'
  },
  planck: {
    title: 'Planck CMB Alignment Audit',
    pythonScript: 'testes/3-rrt_planck_cmb_alignment_audit.py',
    dataFile: '/data/planck.json',
    databaseSource: 'banco_dados/KiDS_DR4_QSO_candidates.fits',
    description: 'Planck satellite CMB alignment analysis'
  },
  sparc: {
    title: 'SPARC Rotation Audit',
    pythonScript: 'testes/4-rrt_sparc_rotation_audit.py',
    dataFile: '/data/sparc.json',
    databaseSource: 'banco_dados/Rotmod_LTG/',
    description: 'Spitzer Photometry rotation curves (186 galaxies)'
  },
  phasedrag: {
    title: 'Phase Drag Magnitude Audit',
    pythonScript: 'testes/5-rrt_phase_drag_and_magnitude_audit.py',
    dataFile: '/data/phasedrag.json',
    databaseSource: 'banco_dados/DR16Q_Superset_v3.fits',
    description: 'Phase drag effects across redshift bins'
  },
  jwst: {
    title: 'JWST High-Redshift Audit',
    pythonScript: 'testes/6-rrt_jwst_cosmos_audit.py',
    dataFile: '/data/jwst.json',
    databaseSource: 'banco_dados/KiDS_DR4_QSO_candidates.fits',
    description: 'Early universe galaxy formation timescales'
  },
  gw170817: {
    title: 'GW170817 Consistency Audit',
    pythonScript: 'testes/1-rrt_gw170817_consistency_audit.py',
    dataFile: '/data/gw170817.json',
    databaseSource: 'banco_dados/DR16Q_Superset_v3.fits',
    description: 'Multi-messenger gravitational wave event'
  },
  chronology: {
    title: 'LCDM Chronology Stress Test',
    pythonScript: 'testes/2-rrt_lcdm_chronology_audit.py',
    dataFile: '/data/chronology.json',
    databaseSource: 'banco_dados/PantheonPlusSH0ES.csv',
    description: 'Cosmic timescale consistency check'
  },
  gwmap: {
    title: 'GW Anisotropy Prediction Map',
    pythonScript: 'testes/3-rrt_gw_anisotropy_prediction_map.py',
    dataFile: '/data/gwmap.json',
    databaseSource: 'banco_dados/Rotmod_LTG/',
    description: '2D celestial divergence field'
  },
  topological: {
    title: 'Topological Alignment Test',
    pythonScript: 'testes/4-rrt_topological_anisotropy_audit.py',
    dataFile: '/data/topological.json',
    databaseSource: 'banco_dados/KiDS_DR4_QSO_candidates.fits',
    description: 'CMB + GW + Quasar axes alignment'
  },
  blackhole: {
    title: 'SMBH Growth Causality Audit',
    pythonScript: 'testes/5-rrt_blackhole_growth_causality_audit.py',
    dataFile: '/data/blackhole.json',
    databaseSource: 'banco_dados/DR16Q_Superset_v3.fits',
    description: 'Supermassive black hole formation timescales'
  },
  oracle: {
    title: 'Interactive RRT Oracle',
    pythonScript: 'testes/6-rrt_interactive_oracle.py',
    dataFile: '/data/oracle.json',
    databaseSource: 'banco_dados/PantheonPlusSH0ES.csv',
    description: 'Real-time RRT vs ΛCDM calculator'
  }
};

/**
 * Fetch test data from JSON export
 * Falls back to synthetic data if unavailable
 */
export async function fetchTestData(testId) {
  const config = testDataConfig[testId];
  if (!config) return null;

  try {
    const response = await fetch(config.dataFile);
    if (!response.ok) throw new Error(`Failed to fetch ${config.dataFile}`);
    return await response.json();
  } catch (error) {
    console.warn(`Could not load data for ${testId}:`, error);
    return generateSyntheticData(testId);
  }
}

/**
 * Generate synthetic data for visualizations
 * Used when real data files are unavailable
 */
function generateSyntheticData(testId) {
  const syntheticDataMap = {
    sparc: () => ({
      galaxies: Array.from({ length: 20 }, (_, i) => ({
        name: `NGC${3000 + i}`,
        radius_kpc: 5 + Math.random() * 30,
        velocity_km_s: 100 + Math.random() * 200,
        rrt_prediction: 120 + Math.random() * 180,
        error: 10 + Math.random() * 20
      }))
    }),
    sdss: () => ({
      quasars: Array.from({ length: 50 }, (_, i) => ({
        ra: Math.random() * 360,
        dec: Math.random() * 180 - 90,
        z: 0.5 + Math.random() * 2.5,
        magnitude: 16 + Math.random() * 4
      }))
    }),
    pantheon: () => ({
      supernovae: Array.from({ length: 30 }, (_, i) => ({
        z: 0.01 + Math.random() * 1.5,
        distance_modulus: 35 + Math.random() * 10,
        uncertainty: 0.1 + Math.random() * 0.3
      }))
    })
  };

  return syntheticDataMap[testId]?.() || { message: 'Synthetic data fallback' };
}

export default testDataConfig;
