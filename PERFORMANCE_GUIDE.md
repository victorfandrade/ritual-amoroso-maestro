# Guia de Otimização - Lùmina 7

## Otimizações Implementadas

### 1. HTML/Head
- **3 preconnects críticos** (máximo recomendado):
  - `fonts.googleapis.com`
  - `fonts.gstatic.com`
  - `www.youtube.com`
- **DNS-prefetch** para recursos secundários:
  - `cdn.utmify.com.br`, `tracking.utmify.com.br`
  - `assets.mycartpanda.com`, `i.ytimg.com`
- CSS crítico inline para First Paint

### 2. Fontes
- Google Fonts com `display=swap`
- Pesos otimizados: Playfair (400,600,700) + Inter (400,500,600)

### 3. Scripts de Terceiros
- UTMify Pixel via `requestIdleCallback`
- UTMify Tracking + CartPanda carregados após interação do usuário
- Fallback de 3s para garantir carregamento
- Todos com `async` + `defer`

### 4. YouTube Embeds
- `loading="lazy"` em todos iframes
- `referrerPolicy="strict-origin-when-cross-origin"` (resolve erro 153)
- Parâmetros: `?enablejsapi=1&rel=0&modestbranding=1`

### 5. CSS/Animações
- `will-change` em animações frequentes
- Design system via variáveis CSS

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
    gzip_min_length 1024;
    gzip_types text/plain text/css text/javascript application/javascript application/json image/svg+xml;

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

### Apache
Arquivo `public/.htaccess` já configurado com GZIP e cache.

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
| LCP | < 1.5s |
| FCP | < 1.0s |
| CLS | < 0.1 |
| TTFB | < 200ms |

---

## Troubleshooting

### Erro 153 YouTube
Já corrigido com `referrerPolicy="strict-origin-when-cross-origin"`.

### PageSpeed não carrega preview
URLs de preview podem ser bloqueadas. Teste após deploy no domínio final.
