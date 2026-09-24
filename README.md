# Fada Madrinha — website

Site institucional estático da **Fada Madrinha** (limpeza profissional, Talatona, Luanda), desenvolvido pela Innoweb.

- **Stack:** [Astro](https://astro.build) (output estático), CSS puro com variáveis, JavaScript mínimo.
- **Sem backend:** nenhum formulário envia dados para servidores. Todo o contacto é feito por links de WhatsApp (`wa.me`), `mailto:` e `tel:`.
- **Deploy:** Netlify (ver `netlify.toml`).

## Como correr

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera /dist
npm run preview   # serve o /dist localmente
```

Requer Node 22+.

## Onde está cada coisa

| Quero alterar… | Ficheiro |
|---|---|
| Telefone, WhatsApp, e-mail, morada, Instagram, domínio | `src/config/site.ts` |
| Mensagens pré-preenchidas do WhatsApp | `src/config/site.ts` → `whatsappMessages` |
| Ligar/desligar "Antes & Depois" e "Clube Encanto" | `src/config/site.ts` → `features` |
| **Preços, extras, descontos por frequência, FAQ** | `src/data/pricing.ts` |
| Os 6 serviços (título, descrição, ícone, cor) | `src/data/services.ts` |
| Equipa, princípios, juramento | `src/data/team.ts` |
| Cinco fases, diferenciadores, jornada do cliente | `src/data/method.ts` |
| Segmentos, 20 pontos, compromissos, protocolo de reclamações | `src/data/empresas.ts` |
| Cores, tipografia, botões, espaçamentos | `src/styles/global.css` (tokens em `:root`) |
| Texto das páginas | `src/pages/*.astro` |
| Cabeçalho / rodapé / botão flutuante | `src/components/Header.astro`, `Footer.astro`, `WhatsAppFloat.astro` |

### Páginas

| URL | Ficheiro |
|---|---|
| `/` | `src/pages/index.astro` |
| `/quem-somos` | `src/pages/quem-somos.astro` |
| `/servicos` | `src/pages/servicos.astro` (tabelas + estimador + FAQ) |
| `/empresas` | `src/pages/empresas.astro` |
| `/metodo` | `src/pages/metodo.astro` |
| `/404` | `src/pages/404.astro` |

A secção **Contacto** (`src/components/ContactSection.astro`) aparece no fim de todas as páginas com o id `#contacto`; não existe página separada.

## Editar preços

Abrir `src/data/pricing.ts`. Cada categoria tem `plans` com `price` em Kz (número inteiro) ou `null` para "Sob consulta". Os `extras` e as `frequencies` (desconto em fracção: `0.15` = 15 %) alimentam tanto as tabelas como o estimador. O formato "25.000 Kz" é gerado automaticamente por `formatKz()`.

> Os valores actuais são os do protótipo comercial e **não estão confirmados pelo cliente** (ver `CHECKLIST-CLIENTE.md`).

## Estimador

`src/components/Estimator.astro`. 100 % client-side, 4 passos (serviço → tamanho → extras & frequência → resultado). Se a categoria não admite extras nem frequência, o passo 3 é saltado. O botão "Enviar para WhatsApp" abre `wa.me` com um resumo das escolhas. Funciona por teclado e leitor de ecrã (fieldsets, `aria-live`, foco no título de cada passo). Sem JavaScript, as tabelas de preços continuam visíveis.

## Fontes (Century Gothic)

A fonte da marca é a **Century Gothic** (licença Monotype). Enquanto não houver licença de webfont, o site usa **Jost** (self-hosted via `@fontsource/jost`). Para activar a Century Gothic:

1. Colocar `CenturyGothic-Regular.woff2` e `CenturyGothic-Bold.woff2` em `public/fonts/`.
2. Descomentar o bloco `@font-face` em `src/styles/fonts.css`.

A pilha `--font-brand` em `global.css` já começa por `"Century Gothic"`, pelo que não é preciso mais nada. Os rótulos em maiúsculas usam `--font-label` (Bahnschrift do sistema → Barlow Semi Condensed).

## Logótipo

Os ficheiros em `public/logo/` foram **extraídos do PDF de identidade visual** (raster, com transparência):

- `fada-madrinha-logo-on-dark.png` — versão oficial (para fundos escuros)
- `fada-madrinha-logo-on-light.png` — a mesma arte com a palavra "Madrinha" em preto, para fundos claros
- `fada-madrinha-mark.png` — só o símbolo (usado no favicon, padrão de fundo e 404)
- `*-sm.png` — versões reduzidas usadas no cabeçalho/rodapé

Quando o cliente enviar os ficheiros vectoriais (SVG), basta substituir estes ficheiros mantendo os nomes, ou apontar `src/components/Logo.astro` para os novos. O favicon (`public/favicon.ico`, `public/icons/`, `public/apple-touch-icon.png`) e a imagem Open Graph (`public/og-image.jpg`) devem ser regenerados a partir do SVG.

## Imagens

As fotografias estão em `src/assets/photos/` (redimensionadas a 2400 px) e `src/assets/team/`. São servidas através de `<Picture>` do Astro, que gera AVIF/WebP e tamanhos responsivos no build. Para trocar uma foto, substituir o ficheiro e ajustar o `alt` na página correspondente.

## Activar "Antes & Depois"

1. Colocar pares de fotos em `src/assets/antes-depois/`.
2. Em `src/pages/index.astro`, importar as imagens e preencher `beforeAfterPairs` (há um exemplo comentado).
3. Em `src/config/site.ts`, mudar `features.beforeAfter` para `true`.

O componente (`src/components/BeforeAfter.astro`) é um comparador com `input type="range"` (acessível por teclado); sem JS mostra as fotos lado a lado.

## Activar "Clube Encanto" / Programa de Indicação

Confirmar os benefícios com o cliente, ajustar o texto em `src/components/Loyalty.astro` e mudar `features.loyalty` para `true` em `src/config/site.ts`. A secção aparece na página inicial.

## SEO

Títulos e descrições únicos por página (prop `title`/`description` do layout `Base.astro`), canonical, Open Graph/Twitter, JSON-LD `CleaningService`/`LocalBusiness` só com dados reais, `sitemap-index.xml` (gerado por `@astrojs/sitemap`) e `robots.txt`. O domínio canónico está em `src/config/site.ts` **e** em `astro.config.mjs` (`site`) — manter iguais.

## Deploy na Netlify

1. Ligar o repositório GitHub à Netlify (New site → Import from Git).
2. Build command: `npm run build` · Publish directory: `dist` (já em `netlify.toml`).
3. Definir o domínio `www.fadamadrinha.com` em *Domain management* e activar HTTPS.

O `netlify.toml` define cache imutável para `/_astro/*` e `/fonts/*`, cabeçalhos de segurança e redireccionamentos dos URLs antigos do protótipo (`*.html`).
