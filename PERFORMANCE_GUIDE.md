# Guia de Otimização - Lùmina 7

## Otimizações Implementadas

### 1. HTML/Head
- **2 preconnects críticos** (fontes apenas):
  - `fonts.googleapis.com`
  - `fonts.gstatic.com`
- **DNS-prefetch** para recursos secundários:
  - `www.youtube.com`, `cdn.utmify.com.br`, `tracking.utmify.com.br`, `assets.mycartpanda.com`
- **Preload da fonte principal** (Playfair Display woff2)
- **Google Fonts com media="print" + onload** para não bloquear renderização
- CSS crítico inline no `<head>` para First Paint imediato
- Conteúdo pré-renderizado no `#root` para LCP

### 2. React Otimizado
- **Lazy loading** de todas as páginas exceto Index (rota principal)
- **React.memo** em componentes decorativos (MysticalBackground, DecorativeElements, PageHeader)
- **Suspense** com fallback mínimo
- **QueryClient** com cache otimizado

### 3. CSS Performance
- **contain: layout paint style** em elementos animados
- **transform: translate3d()** para GPU acceleration
- **Sem will-change** desnecessário
- Design system compacto via CSS variables

### 4. Scripts de Terceiros
- UTMify Pixel via `requestIdleCallback` com timeout de 2s
- UTMify Tracking + CartPanda carregados após interação do usuário
- Fallback de 4s para garantir carregamento
- Todos com `async` apenas (sem defer para não bloquear)

### 5. Semantic HTML
- Tags semânticas: `<main>`, `<header>`, `<section>`, `<article>`, `<blockquote>`, `<cite>`
- `aria-hidden="true"` em elementos decorativos
- `aria-label` em seções importantes

---

## Configuração de Servidor

### Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name rituallumina7.com;

    root /var/www/lumina7/dist;
    index index.html;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 256;
    gzip_types text/plain text/css text/javascript application/javascript application/json image/svg+xml font/woff2;

    # Cache 1 ano
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Build

```bash
npm install
npm run build
```

---

## Métricas Alvo

| Métrica | Alvo |
|---------|------|
| LCP | < 1.0s |
| FCP | < 0.8s |
| CLS | < 0.05 |
| TTFB | < 200ms |
| TBT | < 100ms |
| Speed Index | < 1.5s |

---

## Checklist Final

- [x] Preload fonte crítica
- [x] Google Fonts não bloqueia renderização
- [x] CSS crítico inline
- [x] Conteúdo LCP pré-renderizado
- [x] Lazy loading de rotas
- [x] memo() em componentes decorativos
- [x] GPU acceleration nas animações
- [x] contain: CSS para isolamento
- [x] Scripts terceiros deferidos
- [x] Semantic HTML
