# ✅ Simulação Visual SDSS - Guia Rápido

## O que foi corrigido:

1. **Tamanho dos pontos**: Aumentado de 0.05 para **0.35** (muito mais visível)
2. **sizeAttenuation**: Desabilitado para tamanho consistente (não esquisito com zoom)
3. **Iluminação**: Adicionadas 2 pointLights extras para realçar os pontos vermelhos
4. **Cores RGB**: Fixadas em valores numéricos (0xef4444 = vermelho vibrante)
5. **Gradiente**: Pontos vermelhos agora têm intensidade gradual proporcional a Z

## Estrutura visual esperada:

```
NÚCLEO CENTRAL (Vermelho brilhante ++)
   ↕ Filamento ressonante cone (z-axis)
   
PERIFERIA (Cinza - fundo)
   
EIXO OURO (Vetor Causal T_μ)
   - Cones giram junto com a nuvem
   - Marca a direção da precessão de Cortez
```

## Como testar:

### 1. Frontend (já pronto)
```bash
npm run dev
# http://localhost:3000/simulations
# Você deveria ver:
# ✓ Nuvem de ~12.000 pontos
# ✓ Núcleo VERMELHO brilhante no centro
# ✓ Eixo OURO vertical
# ✓ Tudo rotacionando lentamente
# ✓ Zoom/Pan com mouse
```

### 2. Para carregar dados REAIS do SDSS:

**Quando tiver o DR16Q FITS (~2GB):**
```bash
cd testes
python 1-rrt_sdss_anisotropy_audit.py

# Script vai:
# 1. Processar FITS completo
# 2. Calcular significância 30.36σ
# 3. Gerar gráficos PNG
# 4. EXPORTAR 20.000 quasares para public/data/sdss.json
```

**Depois:**
- Recarregue http://localhost:3000/simulations
- Verá os dados REAIS do catálogo em tempo real

## Estrutura do JSON exportado
```json
[
  {
    "x": número (coordenada 3D)
    "y": número
    "z": número
    "isResonant": boolean (parte do sinal 30.36σ?)
    "z_redshift": número (redshift original)
    "magnitude": número (magnitude i-band)
  },
  ...
]
```

---

## Checklist visual esperado:

- [ ] Página carrega sem erro
- [ ] Canvas 3D completamente preto
- [ ] Nuvem de 12.000 pontos CINZENTA + NÚCLEO VERMELHO centralizado
- [ ] Eixo vertical OURO passando através do núcleo
- [ ] Estrelas de fundo visíveis
- [ ] Mouse controla câmara (orbit)
- [ ] Scroll faz zoom in/out

Se algo não aparecer:
1. **Sem pontos?** → Check console (F12) para erros
2. **Sem cores?** → Atualizar página (Ctrl+Shift+R)
3. **Congelado?** → Check se no terminal do npm não há erro

---

Agora teste em **http://localhost:3000/simulations** 🚀
