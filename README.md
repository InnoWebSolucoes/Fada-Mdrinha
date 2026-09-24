# Fada Madrinha, website

Site institucional estático da **Fada Madrinha** (limpeza profissional, Talatona, Luanda), desenvolvido pela Innoweb.

- **Stack:** [Astro](https://astro.build) (output estático), CSS puro com variáveis, JavaScript mínimo (menu móvel e animação de entrada).
- **Sem backend:** nenhum formulário envia dados para servidores. Todo o contacto é feito por links de WhatsApp (`wa.me`), `mailto:` e `tel:`.
- **Sem preços:** o site apresenta serviços e método; o orçamento é sempre pedido por WhatsApp.
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
| Mensagens pré-preenchidas do WhatsApp | `src/config/site.ts` (`whatsappMessages`) |
| Ligar/desligar "Antes e depois" e "Clube Encanto" | `src/config/site.ts` (`features`) |
| Os 6 serviços (título, descrição, "como trabalhamos") | `src/data/services.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| Equipa, princípios, juramento | `src/data/team.ts` |
| Cinco fases, compromissos, jornada do cliente | `src/data/method.ts` |
| Segmentos, 20 pontos, compromissos, protocolo de reclamações | `src/data/empresas.ts` |
| Cores, tipografia, botões, primitivas de layout | `src/styles/global.css` (tokens em `:root`) |
| Texto das páginas | `src/pages/*.astro` |
| Cabeçalho, rodapé, botão flutuante | `src/components/Header.astro`, `Footer.astro`, `WhatsAppFloat.astro` |

### Páginas

| URL | Ficheiro |
|---|---|
| `/` | `src/pages/index.astro` |
| `/quem-somos` | `src/pages/quem-somos.astro` |
| `/servicos` | `src/pages/servicos.astro` |
| `/empresas` | `src/pages/empresas.astro` |
| `/metodo` | `src/pages/metodo.astro` |
| `/404` | `src/pages/404.astro` |

A secção **Contacto** (`src/components/ContactSection.astro`) aparece no fim de todas as páginas com o id `#contacto`; não existe página separada.

## Sistema visual

Primitivas em `global.css` usadas em todas as páginas:

- `.kicker`: rótulo em maiúsculas com linha curta (fonte de rótulos).
- `.numeral` / `.num`: numerais grandes e pequenos em dourado.
- `.ledger`: lista com linhas finas (`.ledger__row` para número + texto).
- `.cols .cols--2/3/4/5`: colunas editoriais, cada uma com uma linha no topo.
- `.split`: duas colunas com apontamento fixo à esquerda (`.split__aside`).
- `.bleed` / `.bleed--left`: texto alinhado à grelha e fotografia até à margem do ecrã (`.bleed__copy`, `.bleed__media`).
- `.pull`: citação em destaque. `.inline-list`, `.dot-list`: listas sem ícones.

Não há cartões com fundo branco e cantos arredondados; a hierarquia é feita com linhas, escala tipográfica e cor de fundo por secção.

## Fontes (Century Gothic)

A fonte da marca é a **Century Gothic** (licença Monotype). Enquanto não houver licença de webfont, o site usa **Jost** (self-hosted via `@fontsource/jost`). Para activar a Century Gothic:

1. Colocar `CenturyGothic-Regular.woff2` e `CenturyGothic-Bold.woff2` em `public/fonts/`.
2. Descomentar o bloco `@font-face` em `src/styles/fonts.css`.

A pilha `--font-brand` em `global.css` já começa por `"Century Gothic"`. Os rótulos em maiúsculas usam `--font-label` (Bahnschrift do sistema, depois Barlow Semi Condensed).

## Logótipo

Os ficheiros em `public/logo/` foram **extraídos do PDF de identidade visual** (raster, com transparência):

- `fada-madrinha-logo-on-dark.png`: versão oficial (para fundos escuros)
- `fada-madrinha-logo-on-light.png`: a mesma arte com a palavra "Madrinha" em preto, para fundos claros
- `fada-madrinha-mark.png`: só o símbolo (favicon, padrão de fundo, marca de água)
- `*-sm.png`: versões reduzidas usadas no cabeçalho e rodapé

Quando o cliente enviar os ficheiros vectoriais (SVG), basta substituir estes ficheiros mantendo os nomes. O favicon (`public/favicon.ico`, `public/icons/`, `public/apple-touch-icon.png`) e a imagem Open Graph (`public/og-image.jpg`) devem ser regenerados a partir do SVG.

## Imagens

Fotografias em `src/assets/photos/` (redimensionadas a 2400 px) e `src/assets/team/`. São servidas através de `<Picture>` do Astro, que gera AVIF/WebP e tamanhos responsivos no build. Para trocar uma foto, substituir o ficheiro e ajustar o `alt` na página correspondente.

## Activar "Antes e depois"

1. Colocar pares de fotos em `src/assets/antes-depois/`.
2. Em `src/pages/index.astro`, importar as imagens e preencher `beforeAfterPairs` (há um exemplo comentado).
3. Em `src/config/site.ts`, mudar `features.beforeAfter` para `true`.

## Activar "Clube Encanto" / Programa de Indicação

Confirmar os benefícios com o cliente, ajustar o texto em `src/components/Loyalty.astro` e mudar `features.loyalty` para `true` em `src/config/site.ts`.

## SEO

Títulos e descrições únicos por página (props `title`/`description` do layout `Base.astro`), canonical, Open Graph/Twitter, JSON-LD `CleaningService`/`LocalBusiness` só com dados reais, `sitemap-index.xml` (gerado por `@astrojs/sitemap`) e `robots.txt`. O domínio canónico está em `src/config/site.ts` **e** em `astro.config.mjs` (`site`); manter iguais.

## Deploy na Netlify

1. Ligar o repositório GitHub à Netlify (New site, Import from Git).
2. Build command: `npm run build`. Publish directory: `dist` (já em `netlify.toml`).
3. Definir o domínio `www.fadamadrinha.com` em *Domain management* e activar HTTPS.

O `netlify.toml` define cache imutável para `/_astro/*` e `/fonts/*`, cabeçalhos de segurança e redireccionamentos dos URLs antigos do protótipo (`*.html`).
