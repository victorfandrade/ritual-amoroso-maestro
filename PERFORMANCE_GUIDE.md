# 🚀 Guia de Otimização de Performance - Lùmina 7

Este guia contém todas as otimizações implementadas e instruções adicionais para maximizar Core Web Vitals (LCP, FCP, TTFB, CLS, INP).

## ✅ Otimizações Implementadas

### 1. **Cache & Header Strategy**
- ✅ `public/.htaccess` - Apache com cache 1 ano + immutable
- ✅ `public/_headers` - Netlify/Cloudflare Pages
- ✅ `netlify.toml` - Configuração completa Netlify
- ✅ `vercel.json` - Configuração completa Vercel
- ✅ Cache-Control: `public, max-age=31536000, immutable` para assets estáticos
- ✅ HTML sem cache (`no-cache, no-store, must-revalidate`)

### 2. **Code Splitting & Lazy Loading**
- ✅ Rotas lazy-loaded com `React.lazy()` e `Suspense`
- ✅ Apenas a página Index é carregada imediatamente
- ✅ Outras páginas (Quiz, Diagnosis, Delivery, etc.) são carregadas sob demanda
- ✅ Chunks separados: `vendor`, `ui`, `query`
- ✅ Target ES2020 para bundles menores

### 3. **Scripts de Terceiros (Lazy Loading)**
- ✅ UTMify, CartPanda e Pixel carregados apenas após interação do usuário
- ✅ Scripts carregam apenas em páginas que precisam (/, /quiz, /diagnosis, /delivery)
- ✅ Fallback com `requestIdleCallback` + timeout de 4s
- ✅ Todos scripts com `async` e `defer`

### 4. **LCP Optimization**
- ✅ Fonts críticas (Playfair Display, Inter) preloaded no `<head>`
- ✅ CSS crítico inline no HTML
- ✅ H1 otimizado com `contentVisibility: auto`
- ✅ Classe `.lcp-text` para otimização do elemento LCP
- ✅ Google Fonts não-bloqueante com `media="print" onload`

### 5. **CLS Prevention**
- ✅ Dimensões fixas em todos elementos animados
- ✅ `contain: layout style paint` em elementos decorativos
- ✅ `containIntrinsicSize` em elementos com contentVisibility
- ✅ `min-height` em containers de ícones
- ✅ `#root` com `contain: layout style`

### 6. **Animações Compostas (GPU)**
- ✅ Todas animações usam apenas `transform` + `opacity`
- ✅ `will-change: transform` em elementos animados
- ✅ `backface-visibility: hidden` para GPU acceleration
- ✅ `translateZ(0)` para forçar composição GPU
- ✅ Nenhuma animação baseada em `height`, `width`, `top`, `left`

### 7. **Long Tasks Mitigation**
- ✅ Scripts terceiros movidos para `requestIdleCallback`
- ✅ Componentes memoizados com `React.memo()`
- ✅ Terser com 2 passes de compressão
- ✅ Remoção de console.log/debug/warn em produção

### 8. **Build Optimizations (Vite/Terser)**
- ✅ Minificação com Terser (2 passes)
- ✅ Drop de console.*, debugger
- ✅ Remoção de comentários
- ✅ Code splitting automático por dependência
- ✅ Target ES2020 para bundles menores
- ✅ Safari10 compatibility

## 📋 Instruções para Build

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

## 🎯 Metas de Performance (Core Web Vitals)

| Métrica | Alvo | Otimizações |
|---------|------|-------------|
| **LCP** | < 2.5s | Preload fonts, inline CSS, contentVisibility |
| **FCP** | < 1.8s | Critical CSS inline, non-blocking fonts |
| **TTFB** | < 800ms | Depende do servidor |
| **CLS** | < 0.1 | Fixed dimensions, contain, no reflow |
| **INP** | < 200ms | Lazy scripts, memo components |

## 🔧 Arquivos de Configuração por Plataforma

| Plataforma | Arquivo |
|------------|---------|
| Apache | `public/.htaccess` |
| Nginx | Ver configuração abaixo |
| Netlify | `netlify.toml` + `public/_headers` |
| Vercel | `vercel.json` |
| Cloudflare Pages | `public/_headers` |

### Nginx Configuration
```nginx
# GZIP Compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/json image/svg+xml;

# Cache Headers
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|otf)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# No-cache para HTML
location ~* \.html$ {
    expires 0;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## 📊 Checklist Pré-Deploy

- [ ] `npm run build` sem erros
- [ ] Arquivos de cache configurados para sua plataforma
- [ ] GZIP/Brotli ativado no servidor
- [ ] SSL/HTTPS configurado
- [ ] Testar no PageSpeed Insights
- [ ] Verificar Network tab - nenhum script bloqueante

---

**Última atualização**: 2025-12-04
**Projeto**: Lùmina 7 - Ritual de Alineación Interior
