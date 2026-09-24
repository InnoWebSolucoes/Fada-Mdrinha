# Webfonts licenciadas

A fonte oficial da marca é a **Century Gothic** (Monotype). É uma fonte licenciada e
**não** pode ser carregada de fontes não autorizadas. Enquanto a licença de webfont não
existir, o site usa a **Jost** (self-hosted via `@fontsource/jost`) como alternativa
geométrica mais próxima.

## Como activar a Century Gothic

1. Obter a licença de webfont (Monotype / MyFonts) e os ficheiros `.woff2`.
2. Copiar para esta pasta com estes nomes:
   - `CenturyGothic-Regular.woff2`
   - `CenturyGothic-Bold.woff2`
   - (opcional) `CenturyGothic-Italic.woff2`, `CenturyGothic-BoldItalic.woff2`
3. Abrir `src/styles/fonts.css` e descomentar o bloco `@font-face` da Century Gothic.
4. Não é preciso alterar mais nada: a variável `--font-brand` em `src/styles/global.css`
   já tem `"Century Gothic"` em primeiro lugar na pilha; quando o `@font-face` existir,
   o browser passa a usá-la e a Jost fica como fallback.

Os rótulos pequenos em maiúsculas usam **Bahnschrift** quando existe no sistema
(Windows 10+) e, caso contrário, a **Barlow Semi Condensed** (self-hosted).
