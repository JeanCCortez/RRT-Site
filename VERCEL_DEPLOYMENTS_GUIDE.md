# 🔍 GUIA VISUAL - Encontrar & Deletar Deployments na Vercel

## ⚠️ PROBLEMA DO THREE-MESH-BVH (RESOLVIDO)

O aviso `npm warn deprecated three-mesh-bvh@0.7.8` é apenas um **aviso** que o @react-three/drei usa uma versão antiga dessa biblioteca. **Seu código funciona perfeitamente** (comprovado com build local e npm start).

Use na próxima vez:
```bash
npm ci --legacy-peer-deps
npm run build
```

---

## 🎯 ACESSAR VERCEL DEPLOYMENTS (4 Cliques)

### **PASSO 1: Ir para Vercel Dashboard**

**URL DIRETA:**
```
https://vercel.com/dashboard
```

Ou manualmente:
1. Acesse https://vercel.com
2. Clique **"Login"** (canto superior direito)
3. Faça login com sua conta

### **PASSO 2: Encontrar seu projeto**

Na Vercel Dashboard você verá:

```
My Projects
├── [RRT-Site]  ← Clique aqui (ou "site_rrt" dependendo nome)
├── [Outro projeto]
└── [...]
```

**Clique sobre "RRT-Site"** para entrar no projeto

### **PASSO 3: Ir para "Deployments" tab**

Quando abrir o projeto, você verá abas no topo:

```
┌─────────────────────────────────┐
│ Overview | Deployments | Settings │ Logs │
│          ▲
│          Clique AQUI
└─────────────────────────────────┘
```

Clique em **"Deployments"**

### **PASSO 4: Ver Lista de Deployments**

Você verá algo assim:

```
PRODUCTION                          (Barra azul/verde)
    ↓ Commit: 764a10f "Docs: Add detailed..." 
    ✓ Ready | Apr 8, 2026 1:21 AM | [3 dots menu]

(Deployments anteriores)
    ↓ Commit: 45eb68f "Fix: Remove vercel..." 
    ✗ Error | Apr 8, 2026 1:15 AM | [3 dots menu]  ← ESTE provavelmente

    ↓ Commit: d73dc19 "Fix: Remove duplicate..."
    ? Building | Apr 8, 2026 1:10 AM | [3 dots menu]

    ↓ Commit: c7433d1 "Fix: Correcao de..."
    ✓ Ready | Apr 7, 2026 11:45 PM | [3 dots menu]
```

---

## 🗑️ DELETAR DEPLOYMENT COM 404

### **Localize o deployment com ✗ (Error ou Failed)**

Estes são os candidatos ao 404:
- Status: ❌ **Error**
- ou ❌ **Failed** 
- ou qual estiver fora de "Production"

### **Clique nos 3 Pontos (...)**

Ao lado do deployment que quer deletar:

```
↓ Commit: 45eb68f "Fix: Remove..."
✗ Error | Apr 8 | [...]  ← Clique AQUI
```

Vai aparecer menu:

```
┌─────────────────┐
│ Promote Build   │ (cinzento/desativado)
│ View Build Logs │
│ Redeploy        │
│ ─────────────── │
│ Delete          │ ← Clique AQUI
│ View Source     │
└─────────────────┘
```

### **Selecione "Delete"**

Vai pedir confirmação:

```
⚠️ Delete Deployment
"Are you sure you want to delete this deployment?"
[Cancel] [Delete]
```

Clique em **"Delete"** para confirmar

### **Deployment vai desaparecer**

Após deletar, a lista será atualizada e o deployment não aparecerá mais.

---

## 🔄 FAZER REDEPLOY (Após deletar)

### **Selecione o deployment MAIS RECENTE**

Procure por:
```
Commit: 764a10f "Docs: Add detailed Vercel 404 resolution guide"
Status: ✓ Ready
```

### **Clique nos 3 Pontos (...)**

```
↓ Commit: 764a10f "Docs: Add detailed..."
✓ Ready | [...]  ← Clique AQUI
```

### **Selecione "Redeploy"**

```
┌─────────────────┐
│ Promote Build   │ (se tiver staging)
│ View Build Logs │
│ Redeploy        │ ← Clique AQUI
│ ─────────────── │
│ Delete          │
│ View Source     │
└─────────────────┘
```

### **Aguarde o Build**

Vai aparecer:

```
↓ Commit: 764a10f "Docs: Add detailed..."
⏳ Building...  (Loading spinner)
```

**Isso pode levar 2-3 minutos.** Aguarde até ficar **✓ Ready**

---

## ✅ VERIFICAR SE FUNCIONOU

Quando muda de ⏳ Building para ✓ Ready:

1. Acesse seu URL (geralmente `https://[seu-projeto].vercel.app/`)
2. Se carregar sem 404 = SUCESSO! 🎉
3. Se continuar 404 = pode tentar deletar mais um deployment antigo

---

## 🔴 Debugar: Ver Logs de Build

Se quiser ver POR QUE deu erro:

1. Vá para Deployments
2. Clique em um deployment
3. Clique em "View Build Logs"
4. Procure por mensagens de erro em vermelho

---

## 📞 Resumo Visual Rápido

```
vercel.com/dashboard 
    ↓
Clique em "RRT-Site"
    ↓
Clique aba "Deployments"
    ↓
Localize deployment com ❌ Error
    ↓
Clique 3 pontos (...) → Delete
    ↓
Localize deployment ✓ Ready mais recente
    ↓
Clique 3 pontos (...) → Redeploy
    ↓
Aguarde ⏳ virar ✓ Ready
    ↓
Teste a URL
```

**Sucesso! Site deve estar funcionando agora! 🚀**
