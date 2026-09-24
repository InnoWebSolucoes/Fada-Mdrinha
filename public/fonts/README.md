# Webfonts licenciadas

A fonte oficial da marca é a **Century Gothic** (licença Monotype). Enquanto não houver
licença de webfont, o site usa a **Jost** (self-hosted via `@fontsource/jost`).

Para activar a Century Gothic:
1. Copiar `CenturyGothic-Regular.woff2` e `CenturyGothic-Bold.woff2` para esta pasta.
2. Descomentar o bloco `@font-face` em `src/styles/fonts.css`.

A variável `--font-brand` em `src/styles/global.css` já começa por "Century Gothic".
