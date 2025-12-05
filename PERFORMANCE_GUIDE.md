# 🚀 Guia de Otimização de Performance

Este guia contém todas as otimizações implementadas e instruções adicionais para maximizar Core Web Vitals (LCP, FCP, TTFB, CLS).

## ✅ Otimizações Já Implementadas

### 1. **Recursos Críticos e Preconnect**
- ✅ `preconnect` para Google Fonts, UTMify, YouTube, e APIs
- ✅ `dns-prefetch` para APIs de IP (ipify)
- ✅ CSS crítico inline no `index.html` para First Paint
- ✅ `font-display: swap` nas Google Fonts

### 2. **Scripts de Terceiros**
- ✅ UTMify Pixel carregado com `requestIdleCallback` (não-bloqueante)
- ✅ Scripts UTMify com `async` e `defer`
- ✅ Carregamento otimizado fora do caminho crítico

### 3. **Vídeos do YouTube (Erro 153 Corrigido)**
- ✅ Parâmetros otimizados: `enablejsapi=1&rel=0&modestbranding=1`
- ✅ `loading="lazy"` para lazy loading
- ✅ `referrerPolicy="strict-origin-when-cross-origin"` para CORS
- ✅ `allow` com `web-share` para compatibilidade

### 4. **Animações e CLS**
- ✅ `will-change` nas animações para otimizar GPU
- ✅ `aspect-ratio` nos iframes de vídeo (previne CLS)
- ✅ Dimensões fixas em elementos animados

### 5. **Cache e Compressão**
- ✅ Arquivo `.htaccess` criado com:
  - Compressão GZIP e Brotli
  - Cache de 1 ano para assets estáticos
  - Headers de Cache-Control otimizados

## 📋 Instruções Adicionais (Antes do Build)

### 1. **Configuração do Servidor (VPS)**

#### Para Nginx:
Adicione ao seu `nginx.conf` ou ao bloco `server`:

```nginx
# GZIP Compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json image/svg+xml;
gzip_disable "msie6";

# Brotli Compression (se disponível)
brotli on;
brotli_types text/plain text/css application/javascript application/json image/svg+xml application/xml+rss;

# Cache Headers para Assets Estáticos
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
O arquivo `.htaccess` já foi criado em `public/.htaccess` com todas as configurações necessárias.

### 2. **Build Otimizado**

Antes de rodar `npm run build`, certifique-se:

```bash
# 1. Limpar cache
npm cache clean --force

# 2. Instalar dependências limpas
rm -rf node_modules package-lock.json
npm install

# 3. Build de produção
npm run build

# 4. Analisar bundle (opcional)
npx vite-bundle-visualizer
```

### 3. **Configuração do Vite (já otimizada)**

O `vite.config.ts` já está configurado, mas você pode adicionar:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-slot']
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
```

### 4. **Métricas Core Web Vitals**

Após o deploy, meça com:
- **Lighthouse**: `npm run build && npx serve dist`
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/

### 5. **Checklist Final**

Antes do deploy em produção:

- [ ] `.htaccess` ou configuração Nginx aplicada
- [ ] Build de produção criado (`npm run build`)
- [ ] Assets comprimidos (GZIP/Brotli habilitado)
- [ ] Headers de cache configurados (1 ano para assets)
- [ ] Fontes com `font-display: swap`
- [ ] Scripts de terceiros com `async/defer`
- [ ] Vídeos com `loading="lazy"`
- [ ] CSS crítico inline
- [ ] Sem redirecionamentos desnecessários

## 🎯 Metas de Performance

Com as otimizações aplicadas, você deve atingir:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FCP (First Contentful Paint)**: < 1.8s
- **TTFB (Time to First Byte)**: < 600ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID (First Input Delay)**: < 100ms

## 🐛 Solução do Erro 153 do YouTube

O erro 153 foi corrigido com:
1. Parâmetros corretos de embedding (`enablejsapi=1`, `rel=0`)
2. `referrerPolicy="strict-origin-when-cross-origin"`
3. `allow` com todas as permissões necessárias
4. `loading="lazy"` para performance

## 📊 Monitoramento Contínuo

Configure monitoramento com:
- **Google Analytics 4**: Para métricas de usuários reais
- **Search Console**: Para Core Web Vitals reais
- **Sentry**: Para erros de runtime

---

**Última atualização**: 2025-12-01
**Versão**: 1.0.0
