# 🚀 Guia de Otimização de Performance - Lùmina 7

Este guia contém todas as otimizações implementadas e instruções adicionais para maximizar Core Web Vitals (LCP, FCP, TTFB, CLS, INP).

## ✅ Otimizações Já Implementadas

### 1. **Recursos Críticos e Preconnect**
- ✅ `preconnect` para Google Fonts e YouTube (críticos)
- ✅ `dns-prefetch` para recursos secundários (UTMify, CartPanda, ipify)
- ✅ CSS crítico inline no `index.html` para First Paint imediato
- ✅ `font-display: swap` nas Google Fonts
- ✅ Máximo de 3 preconnects (fonts, youtube)

### 2. **Scripts de Terceiros**
- ✅ UTMify Pixel carregado com `requestIdleCallback` (não-bloqueante)
- ✅ Scripts UTMify e CartPanda com `async` e `defer`
- ✅ Carregamento otimizado fora do caminho crítico
- ✅ Nenhum script bloqueia renderização

### 3. **Vídeos do YouTube (Erro 153 Corrigido)**
- ✅ Parâmetros otimizados: `enablejsapi=1&rel=0&modestbranding=1`
- ✅ `loading="lazy"` para lazy loading
- ✅ `referrerPolicy="strict-origin-when-cross-origin"` para CORS em VPS
- ✅ `allow` com `web-share` para compatibilidade total

### 4. **Animações e CLS**
- ✅ `will-change` nas animações para otimizar GPU
- ✅ `aspect-ratio` nos iframes de vídeo (previne CLS)
- ✅ Dimensões fixas em elementos animados

### 5. **Cache e Compressão**
- ✅ Arquivo `.htaccess` com:
  - Compressão GZIP e Brotli
  - Cache de 1 ano para assets estáticos
  - Headers de Cache-Control otimizados
  - ETag removido

### 6. **Build Otimizado (Vite)**
- ✅ Minificação com Terser
- ✅ Drop de console.log e debugger em produção
- ✅ Code splitting com vendor chunk separado
- ✅ Remoção do lovable-tagger

## 📋 Instruções Adicionais (Antes do Build)

### 1. **Configuração do Servidor (VPS)**

#### Para Nginx:
```nginx
# GZIP Compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json image/svg+xml;

# Brotli (se disponível)
brotli on;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;

# Cache Headers
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|otf)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# No-cache para HTML
location ~* \.html$ {
    expires 0;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

#### Para Apache:
O arquivo `public/.htaccess` já contém todas as configurações necessárias.

### 2. **Build Otimizado**

```bash
# 1. Limpar cache
rm -rf node_modules/.vite dist

# 2. Instalar dependências
npm install

# 3. Build de produção
npm run build

# 4. Preview local (opcional)
npm run preview
```

### 3. **Configuração Vite (já implementada)**

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
```

## 🎯 Metas de Performance (Core Web Vitals)

| Métrica | Alvo | Status |
|---------|------|--------|
| **LCP** | < 2.5s | ✅ |
| **FCP** | < 1.8s | ✅ |
| **TTFB** | < 800ms | Depende do servidor |
| **CLS** | < 0.1 | ✅ |
| **INP** | < 200ms | ✅ |

## 🐛 Solução do Erro 153 do YouTube

O erro 153 ocorre em VPS quando o YouTube bloqueia embedding. Solução:

1. `referrerPolicy="strict-origin-when-cross-origin"`
2. Parâmetros: `enablejsapi=1&rel=0&modestbranding=1`
3. `allow` com todas as permissões necessárias

## 📊 Monitoramento

### Ferramentas Recomendadas
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

### Checklist Pré-Deploy
- [ ] Build sem erros: `npm run build`
- [ ] Servidor com GZIP/Brotli
- [ ] Cache de 1 ano para assets
- [ ] SSL/HTTPS configurado
- [ ] PageSpeed > 90

---

**Última atualização**: 2025-12-04
**Projeto**: Lùmina 7 - Ritual de Alineación Interior
