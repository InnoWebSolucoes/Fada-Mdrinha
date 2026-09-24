# Checklist: pontos a confirmar com a Fada Madrinha

Itens marcados `TODO (cliente)` no código. Nada disto impede o site de ir para o ar, mas deve ser validado antes do lançamento.

## Contactos e identidade (`src/config/site.ts`)
- [ ] E-mail: `fadamadrinha7@gmail.com` ou `geral@fadamadrinha.com` (placeholder do brand book)
- [ ] Handle do Instagram (`@fadamadrinha`)
- [ ] Domínio `www.fadamadrinha.com`: DNS apontado para a Netlify
- [ ] Morada exacta (o site mostra apenas "Talatona, Luanda, Angola")

## Logótipo e fontes
- [ ] Enviar ficheiros **vectoriais** do logótipo (SVG/AI). Os PNG actuais foram extraídos do PDF de identidade.
- [ ] Validar a versão para fundos claros (palavra "Madrinha" em preto), que não existe no manual de identidade
- [ ] Licença de webfont da **Century Gothic** (Monotype). Até lá o site usa Jost.

## Conteúdo
- [ ] **Missão:** o brand book fala em "ambientes corporativos"; o site usa "espaços de trabalho e de vida" para abranger clientes residenciais
- [ ] **Ortografia:** o site segue o Acordo Ortográfico (como o brand book): "Diretora". A apresentação institucional usa "Directora". Confirmar a preferência.
- [ ] Bios curtas de cada membro da equipa (as actuais foram escritas a partir dos cargos)
- [ ] Fotografia do **Jorge Hilário** em alta resolução (a actual vem do PDF, cerca de 330 px)
- [ ] Texto "Como trabalhamos" de cada serviço (`src/data/services.ts`), escrito a partir do manual operacional
- [ ] FAQ (`src/data/faq.ts`): antecedência de agendamento (2 a 3 dias) e restantes respostas

## Fotografia
- [ ] Fotografias reais da equipa uniformizada (as actuais são de banco de imagens e do brand book; uma mostra fardas bordô, que não são as da marca)
- [ ] Pares **antes e depois** com autorização dos clientes. A secção já está construída e desligada (`features.beforeAfter`)

## Funcionalidades propostas no brand book (desligadas)
- [ ] **Clube Encanto** (fidelização): confirmar benefícios antes de activar (`features.loyalty`)
- [ ] **Programa de Indicação**: idem
- [ ] Testemunhos de clientes: não incluídos (ainda não existem; não inventar)
- [ ] Blog / conteúdos educativos (sugerido no brand book): fora do âmbito desta fase
