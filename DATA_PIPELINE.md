# RRT Simulation Engine - Data Pipeline

## Arquitetura de Dados

```
banco_dados/              → Scripts Python           → JSON Exports        → React Components
(Raw Data Files)          (testes/*.py)              (public/data/*.json)  (3D Visualizations)
```

## Mapeamento de Testes e Dados

### Core Audits (Testes 1-6)

#### 1️⃣ SDSS Anisotropy (`sdss`)
- **Banco de Dados**: `banco_dados/DR16Q_Superset_v3.fits`
- **Script Python**: `testes/1-rrt_sdss_anisotropy_audit.py`
- **JSON Export**: `public/data/sdss.json`
- **Dados**: ~750.000 quasares com RA, Dec, Redshift
- **Visualização**: Nuvem de 12.000 pontos com gradiente de anisotropia

#### 2️⃣ Pantheon+ Gradient (`pantheon`)
- **Banco de Dados**: `banco_dados/PantheonPlusSH0ES.csv`
- **Script Python**: `testes/2-rrt_pantheon_gradient_audit.py`
- **JSON Export**: `public/data/pantheon.json`
- **Dados**: ~800 supernovas Pantheon+ com redshift e distância
- **Visualização**: Distribuição 3D de absorbância de luz

#### 3️⃣ Planck CMB Alignment (`planck`)
- **Banco de Dados**: `banco_dados/KiDS_DR4_QSO_candidates.fits`
- **Script Python**: `testes/3-rrt_planck_cmb_alignment_audit.py`
- **JSON Export**: `public/data/planck.json`
- **Dados**: CMB dipole vectors vs RRT predictions
- **Visualização**: Esfera com dois eixos de alinhamento + grid de divergência

#### 4️⃣ SPARC Rotation (`sparc`)
- **Banco de Dados**: `banco_dados/Rotmod_LTG/` (186 galáxias .dat)
- **Script Python**: `testes/4-rrt_sparc_rotation_audit.py`
- **JSON Export**: `public/data/sparc.json`
- **Dados**: Curvas de rotação de galáxias (raio vs velocidade)
- **Visualização**: 20.000 pontos em espiral galáctico

#### 5️⃣ Phase Drag (`phasedrag`)
- **Banco de Dados**: `banco_dados/DR16Q_Superset_v3.fits`
- **Script Python**: `testes/5-rrt_phase_drag_and_magnitude_audit.py`
- **JSON Export**: `public/data/phasedrag.json`
- **Dados**: Efeitos de phase drag em bins de redshift
- **Visualização**: 500 pontos com gradiente de magnitude

#### 6️⃣ JWST High-z (`jwst`)
- **Banco de Dados**: `banco_dados/KiDS_DR4_QSO_candidates.fits`
- **Script Python**: `testes/6-rrt_jwst_cosmos_audit.py`
- **JSON Export**: `public/data/jwst.json`
- **Dados**: Galáxias high-redshift do Early Universe
- **Visualização**: 200 galáxias em distribuição cosmológica

### Falsification Tests (Testes 7-12)

#### 7️⃣ GW170817 Consistency (`gw170817`)
- **Banco de Dados**: Multi-messenger (LIGO/Virgo)
- **Script Python**: `testes/1-rrt_gw170817_consistency_audit.py`
- **JSON Export**: `public/data/gw170817.json` ✅ Created
- **Dados**: 10 eventos sintéticos de onda gravitacional (z: 0.005-1.5)
- **Visualização**: Série temporal de divergência de distância

#### 8️⃣ LCDM Chronology (`chronology`)
- **Banco de Dados**: `banco_dados/PantheonPlusSH0ES.csv`
- **Script Python**: `testes/2-rrt_lcdm_chronology_audit.py`
- **JSON Export**: `public/data/chronology.json`
- **Dados**: Timeline cosmológica ΛCDM vs RRT
- **Visualização**: Diagrama de idade do universo por redshift

#### 9️⃣ GW Anisotropy Map (`gwmap`)
- **Banco de Dados**: `banco_dados/Rotmod_LTG/`
- **Script Python**: `testes/3-rrt_gw_anisotropy_prediction_map.py`
- **JSON Export**: `public/data/gwmap.json` ✅ Created
- **Dados**: Grid 360×180 de divergência celestial (subamostrado)
- **Visualização**: Projeção Mollweide 3D com heatmap

#### 🔟 Topological Alignment (`topological`)
- **Banco de Dados**: `banco_dados/KiDS_DR4_QSO_candidates.fits`
- **Script Python**: `testes/4-rrt_topological_anisotropy_audit.py`
- **JSON Export**: `public/data/topological.json`
- **Dados**: Alinhamento CMB + GW + Quasar axes
- **Visualização**: Três vetores 3D com medida de alinhamento

#### 1️⃣1️⃣ SMBH Causality (`blackhole`)
- **Banco de Dados**: `banco_dados/DR16Q_Superset_v3.fits`
- **Script Python**: `testes/5-rrt_blackhole_growth_causality_audit.py`
- **JSON Export**: `public/data/blackhole.json`
- **Dados**: ~500 AGN com idade vs redshift
- **Visualização**: Scatter plot 3D com superfície ΛCDM constraint

#### 1️⃣2️⃣ Interactive Oracle (`oracle`)
- **Banco de Dados**: `banco_dados/PantheonPlusSH0ES.csv`
- **Script Python**: `testes/6-rrt_interactive_oracle.py`
- **JSON Export**: `public/data/oracle.json`
- **Dados**: Lookup tables para predições RRT vs ΛCDM
- **Visualização**: Calculadora interativa (user input → predictions)

## Fluxo de Dados

### 1. **Raw Data** (banco_dados/)
```
FITS files (quasares SDSS, KiDS)
CSV files (Pantheon+ supernovas)
DAT files (curvas de rotação SPARC)
```

### 2. **Python Processing** (testes/*.py)
```python
# Exemplo: testes/1-rrt_sdss_anisotropy_audit.py
import numpy as np
import json

# Carregar dados do banco_dados
data = fits.open('../banco_dados/DR16Q_Superset_v3.fits')

# Processar com RRT
results = compute_rrt_anisotropy(data)

# Exportar JSON
with open('../public/data/sdss.json', 'w') as f:
    json.dump(results, f)
```

### 3. **JSON Exports** (public/data/)
```json
{
  "metadata": {
    "test": "SDSS Anisotropy Audit",
    "dataset": "DR16Q Quasar Sample",
    "objects": 750000,
    "significant_deviation_sigma": 30.36
  },
  "quasars": [
    { "ra": 197.45, "dec": -23.38, "z": 0.0099, "magnitude": 16.5 },
    ...
  ],
  "rrt_vector": { "x": 10.2, "y": -5.3, "z": 8.7 },
  "cortez_axis": { "ra": 168, "dec": -7 }
}
```

### 4. **React Components** (pages/simulations.js)
```javascript
import { useTestData } from '../lib/useTestData';

function QuasarCloud() {
  const { data, loading } = useTestData('sdss');
  
  // Renderizar 12.000 pontos no Three.js
  if (data) visualizeQuasars(data.quasars);
  else useDefaultSyntheticData();
}
```

## Como Executar o Pipeline

### Opção 1: Executar Scripts Individualmente
```bash
cd banco_dados
python ../testes/1-rrt_sdss_anisotropy_audit.py
python ../testes/2-rrt_pantheon_gradient_audit.py
python ../testes/3-rrt_planck_cmb_alignment_audit.py
python ../testes/4-rrt_sparc_rotation_audit.py
python ../testes/5-rrt_phase_drag_and_magnitude_audit.py
python ../testes/6-rrt_jwst_cosmos_audit.py
```

### Opção 2: Usar a Aplicação Next.js
```bash
npm run dev
# Acesso em http://localhost:3000/simulations
# Os dados JSON são carregados automaticamente via fetch()
```

## Estrutura de Pastas

```
site_rrt/
├── banco_dados/
│   ├── DR16Q_Superset_v3.fits        (750k quasares)
│   ├── PantheonPlusSH0ES.csv          (800 supernovas)
│   ├── KiDS_DR4_QSO_candidates.fits   (QSO candidates)
│   ├── asi.orb.lageos2.251220_sp3     (LAGEOS orbital)
│   └── Rotmod_LTG/                    (186 curvas de rotação SPARC)
├── testes/
│   ├── 1-rrt_sdss_anisotropy_audit.py
│   ├── 2-rrt_pantheon_gradient_audit.py
│   ├── 3-rrt_planck_cmb_alignment_audit.py
│   ├── 4-rrt_sparc_rotation_audit.py
│   ├── 5-rrt_phase_drag_and_magnitude_audit.py
│   ├── 6-rrt_jwst_cosmos_audit.py
│   ├── [Falsification tests 7-12]
│   └── ...
├── public/data/
│   ├── sdss.json                      (Processed quasar data)
│   ├── pantheon.json                  (Processed SNe data)
│   ├── planck.json                    (CMB vectors)
│   ├── sparc.json                     (Rotation curves)
│   ├── phasedrag.json                 (Phase effects)
│   ├── jwst.json                      (High-z galaxies)
│   ├── gw170817.json ✅               (10 GW events)
│   ├── gwmap.json ✅                  (Divergence field)
│   └── [oracle, topological, etc]
├── lib/
│   ├── testDataConfig.js              (Test ↔ Data mapping)
│   └── useTestData.js                 (React hook for fetching)
└── pages/
    └── simulations.js                 (Main UI with dropdowns)
```

## Próximos Passos

✅ Menu com dropdowns - CONCLUÍDO
✅ Integração testDataConfig - CONCLUÍDO
✅ Hook useTestData - CONCLUÍDO
⏳ Executar scripts Python com numpy/scipy
⏳ Gerar JSON exports para todos 12 testes
⏳ Validar 3D renderings com dados reais
⏳ Implementar "banco_dados" em análises SPARC

---

**Status**: 6/12 testes com dados; 2/12 com JSON exports criados (GW170817, GWmap)
