# Fada Madrinha, website

Site institucional estático da **Fada Madrinha** (limpeza profissional, Talatona, Luanda), desenvolvido pela Innoweb.

- **Stack:** Astro (output estático), CSS com variáveis, JavaScript mínimo.
- **Sem backend:** todo o contacto é feito por WhatsApp (`wa.me`), `tel:` e `mailto:`.
- **Sem preços:** o orçamento é sempre pedido por WhatsApp.
- **Deploy:** Vercel, publicado em https://innoweb.agency/fada-madrinha (`vercel.json`).

## Correr

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera /dist
npm run preview   # serve o /dist
```

## Onde está cada coisa

| Quero alterar… | Ficheiro |
|---|---|
| Telefone, WhatsApp, e-mail, morada, Instagram, domínio, barra de anúncio | `src/config/site.ts` |
| Mensagens pré-preenchidas do WhatsApp | `src/config/site.ts` (`whatsappMessages`) |
| Ligar/desligar a fada animada e o Clube Encanto | `src/config/site.ts` (`features`) |
| Todo o texto reutilizado: serviços, "como funciona", comparação, incluído, método, jornada, empresas, equipa, valores, FAQ | `src/data/content.ts` |
| Cores, tipografia, botões | `src/styles/global.css` (`:root`) |
| Texto das páginas | `src/pages/*.astro` |

## Animações

| Animação | Onde |
|---|---|
| A fada que voa pela página ao fazer scroll (bate as asas, vira-se, deixa brilhos) | `src/components/FairyFlight.astro` |
| Título do hero palavra a palavra, fotografias e autocolante | `src/pages/index.astro` (secção HERO) |
| Faixa de serviços em movimento | `src/components/Marquee.astro` |
| Secções que aparecem ao fazer scroll (`.reveal`) | `src/styles/global.css` + script em `src/layouts/Base.astro` |
| Riscado animado em "A limpeza de sempre" | `src/pages/index.astro` (`.strike`) |
| Estrelas a cintilar, formas a flutuar | `src/components/Star.astro`, `.float` em `global.css` |
| FAQ com abertura animada | `src/components/Faq.astro` |

Todas respeitam `prefers-reduced-motion` (a fada desaparece e o resto fica estático).

A fada é a figura do próprio símbolo da marca, extraída de `reference/Identidade_visual_Final.pdf` (p. 4) para `public/fairy/fada.png`. As asas são animadas recortando a mesma imagem em duas partes (`clip-path` em `FairyFlight.astro`). Quando o cliente enviar o logótipo em SVG, substituir por uma versão vectorial.

## Fontes

Century Gothic (licença Monotype) ainda não licenciada para web; usa-se Jost. Para activar: colocar os `.woff2` em `public/fonts/` e descomentar `src/styles/fonts.css`.

## Logótipo e imagens

`public/logo/` (logótipo extraído do manual, PNG/WebP), `public/fairy/`, `src/assets/photos/`, `src/assets/team/`. As fotografias passam por `<Picture>` (AVIF/WebP responsivo).

## Deploy (Vercel, em innoweb.agency/fada-madrinha)

O site é servido em **https://innoweb.agency/fada-madrinha**. Este repositório faz deploy no projecto Vercel `fada-mdrinha`; o site do innoweb.agency (repositório `innoweb-agency`, `next.config.js`) reencaminha `/fada-madrinha/*` para `https://fada-mdrinha.vercel.app/fada-madrinha/*`.

- `base: '/fada-madrinha'` em `astro.config.mjs`, e o build vai para `dist/fada-madrinha`, para os caminhos serem iguais nos dois sítios.
- Links internos e ficheiros de `public/` usam sempre `withBase()` (`src/config/site.ts`); um `href="/..."` directo parte o site.
- `vercel.json` redirecciona o endereço antigo (`fada-mdrinha.vercel.app/...`) para o innoweb.agency.
- Para mudar para um domínio próprio: alterar `site`/`base` em `astro.config.mjs`, `site.url` em `src/config/site.ts` e os redirects em `vercel.json`.
- Nota: `fadamadrinha.com` pertence a outra empresa (confeitaria no Brasil).
