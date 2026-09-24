/**
 * PREÇOS, EXTRAS, FREQUÊNCIAS E FAQ
 * ---------------------------------------------------------------------------
 * TODO (cliente): TODOS os valores abaixo foram criados pela equipa comercial da
 * Innoweb para o protótipo e NÃO estão confirmados pela Fada Madrinha.
 * Alterar aqui é suficiente: as tabelas, o estimador e as FAQ leem deste ficheiro.
 *
 * Formato de moeda usado em todo o site: "25.000 Kz".
 * ---------------------------------------------------------------------------
 */

export type Plan = {
  id: string;
  name: string;
  /** Linha pequena por baixo do nome (dimensão, tipologia…). */
  unit: string;
  /** Preço em Kz. `null` = "Sob consulta". */
  price: number | null;
  /** Sufixo depois do preço, ex. "/mês". */
  per?: string;
  popular?: boolean;
  includes: string[];
};

export type PriceCategory = {
  id: string;
  title: string;
  /** Nota à direita do título, ex. "Preço por visita". */
  note: string;
  /** Pergunta usada no passo 2 do estimador. */
  sizeQuestion: string;
  /** Se falso, os extras e a frequência não se aplicam (ex.: sofás). */
  allowsExtras: boolean;
  allowsFrequency: boolean;
  plans: Plan[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: 'residencial',
    title: 'Limpeza Residencial',
    note: 'Preço por visita',
    sizeQuestion: 'Qual o tamanho da sua casa?',
    allowsExtras: true,
    allowsFrequency: true,
    plans: [
      {
        id: 'res-pequeno',
        name: 'Apartamento Pequeno',
        unit: 'T1 / T2 — até 80 m²',
        price: 15000,
        includes: ['Sala, quarto(s) e cozinha', 'Casa de banho completa', 'Pó, chão e superfícies', 'Equipa de 1 pessoa'],
      },
      {
        id: 'res-medio',
        name: 'Apartamento Médio',
        unit: 'T3 — até 150 m²',
        price: 25000,
        popular: true,
        includes: ['Tudo do plano Pequeno', 'Varanda e área de serviço', 'Interior de vidros', 'Equipa de 1–2 pessoas'],
      },
      {
        id: 'res-grande',
        name: 'Moradia Grande',
        unit: '150 m² ou mais',
        price: 40000,
        includes: ['Tudo do plano Médio', 'Múltiplos pisos e quartos', 'Áreas exteriores cobertas', 'Equipa de 2+ pessoas'],
      },
    ],
  },
  {
    id: 'empresarial',
    title: 'Limpeza Empresarial',
    note: 'Contrato mensal, frequência a combinar',
    sizeQuestion: 'Qual a dimensão do espaço?',
    allowsExtras: true,
    allowsFrequency: false,
    plans: [
      {
        id: 'emp-pequeno',
        name: 'Escritório Pequeno',
        unit: 'Até 100 m²',
        price: 30000,
        per: '/mês',
        includes: ['1× por semana', 'Áreas comuns e casas de banho', 'Recolha de lixo'],
      },
      {
        id: 'emp-medio',
        name: 'Escritório Médio',
        unit: '100–300 m²',
        price: 60000,
        per: '/mês',
        popular: true,
        includes: ['2–3× por semana', 'Copa / kitchenette', 'Vidros interiores'],
      },
      {
        id: 'emp-grande',
        name: 'Espaço Comercial Grande',
        unit: '300 m² ou mais',
        price: null,
        includes: ['Equipa dedicada', 'Plano à medida da operação', 'Supervisão semanal'],
      },
    ],
  },
  {
    id: 'higienizacao',
    title: 'Higienização Especializada',
    note: 'Preço por serviço',
    sizeQuestion: 'Que abrangência pretende?',
    allowsExtras: false,
    allowsFrequency: false,
    plans: [
      {
        id: 'hig-parcial',
        name: 'Higienização Parcial',
        unit: '1 divisão',
        price: 12000,
        includes: ['Tratamento profundo de superfícies', 'Produtos especializados'],
      },
      {
        id: 'hig-completa',
        name: 'Higienização Completa',
        unit: 'Casa ou escritório inteiro',
        price: 35000,
        includes: ['Todas as divisões', 'Foco em pontos de maior contacto'],
      },
    ],
  },
  {
    id: 'organizacao',
    title: 'Organização de Espaços',
    note: 'Preço por serviço',
    sizeQuestion: 'Que abrangência pretende?',
    allowsExtras: false,
    allowsFrequency: false,
    plans: [
      {
        id: 'org-parcial',
        name: 'Organização Parcial',
        unit: '1 divisão (closet, cozinha…)',
        price: 18000,
        includes: ['Arrumação funcional', 'Sugestões de optimização'],
      },
      {
        id: 'org-completa',
        name: 'Organização Completa',
        unit: 'Casa inteira',
        price: 45000,
        includes: ['Todas as divisões', 'Sistema de arrumação duradouro'],
      },
    ],
  },
  {
    id: 'pos-obra',
    title: 'Limpeza Pós-Obra',
    note: 'Preço por serviço',
    sizeQuestion: 'Qual a área do espaço?',
    allowsExtras: false,
    allowsFrequency: false,
    plans: [
      {
        id: 'obra-100',
        name: 'Até 100 m²',
        unit: 'Apartamento pequeno',
        price: 45000,
        includes: ['Remoção de resíduos de obra', 'Poeira fina em todas as superfícies'],
      },
      {
        id: 'obra-250',
        name: '100–250 m²',
        unit: 'Casa ou escritório',
        price: 80000,
        popular: true,
        includes: ['Tudo do plano anterior', 'Vidros e caixilhos'],
      },
      {
        id: 'obra-250plus',
        name: '250 m² ou mais',
        unit: 'Espaço grande',
        price: 130000,
        includes: ['Equipa alargada', 'Entrega faseada por área'],
      },
    ],
  },
  {
    id: 'estofos',
    title: 'Limpeza de Sofás e Estofos',
    note: 'Preço por peça',
    sizeQuestion: 'Que peça pretende limpar?',
    allowsExtras: false,
    allowsFrequency: false,
    plans: [
      {
        id: 'sofa-2',
        name: 'Sofá 2 Lugares',
        unit: 'Por peça',
        price: 10000,
        includes: ['Aspiração e pré-tratamento', 'Extracção profissional'],
      },
      {
        id: 'sofa-3',
        name: 'Sofá 3 Lugares',
        unit: 'Por peça',
        price: 14000,
        includes: ['Aspiração e pré-tratamento', 'Extracção profissional'],
      },
      {
        id: 'sofa-canto',
        name: 'Sofá de Canto / Colchão',
        unit: 'Por peça',
        price: 18000,
        includes: ['Aspiração e pré-tratamento', 'Extracção profissional'],
      },
    ],
  },
];

export type Extra = { id: string; label: string; price: number; note?: string };

/** Extras aplicáveis a serviços residenciais e empresariais. */
export const extras: Extra[] = [
  { id: 'armarios', label: 'Limpeza interior de armários', price: 5000 },
  { id: 'frigorifico', label: 'Interior do frigorífico', price: 4000 },
  { id: 'ferro', label: 'Passar roupa a ferro', price: 8000, note: 'por hora' },
  { id: 'vidros-ext', label: 'Limpeza de vidros exteriores', price: 6000 },
];

export type Frequency = { id: string; label: string; discount: number; hint?: string };

/** Frequência (o desconto aplica-se ao total de cada visita). */
export const frequencies: Frequency[] = [
  { id: 'pontual', label: 'Serviço pontual', discount: 0 },
  { id: 'quinzenal', label: 'Quinzenal (recorrente)', discount: 0.08, hint: '−8% no total' },
  { id: 'mensal', label: 'Mensal (recorrente)', discount: 0.15, hint: '−15% no total' },
];

export const estimatorDisclaimer =
  'Estimativa indicativa. Proposta final confirmada após avaliação do espaço.';

/** Perguntas frequentes (página Serviços). TODO (cliente): confirmar as respostas. */
export const faq = [
  {
    q: 'Os preços são fixos?',
    a: 'São valores de referência. O preço final é confirmado depois de conhecermos o estado e a dimensão exacta do espaço — sem surpresas na hora de pagar.',
  },
  {
    q: 'Como faço o pagamento?',
    // TODO (cliente): confirmar métodos de pagamento aceites.
    a: 'Aceitamos transferência bancária e pagamento em numerário no momento do serviço. Para contratos mensais, combinamos consigo o ciclo de facturação mais conveniente.',
  },
  {
    q: 'Preciso de fornecer produtos de limpeza?',
    a: 'Não. A nossa equipa leva todos os produtos e equipamentos profissionais necessários, já incluídos no preço do serviço.',
  },
  {
    q: 'Com quanta antecedência devo agendar?',
    // TODO (cliente): confirmar prazo de agendamento.
    a: 'Recomendamos 2 a 3 dias de antecedência. Para pedidos urgentes, fale connosco pelo WhatsApp e verificamos a disponibilidade.',
  },
  {
    q: 'O serviço é supervisionado?',
    a: 'Sim. Cada serviço segue o Método Fada Madrinha e termina com uma inspecção final, feita com o cliente sempre que possível, antes de o considerarmos concluído.',
  },
  {
    q: 'E se algo não ficar como esperava?',
    a: 'Fale connosco. Se a responsabilidade for nossa, corrigimos sem custos adicionais e confirmamos depois se ficou resolvido. O nosso objectivo é recuperar a sua confiança, não apenas resolver o problema.',
  },
];

/** Formata um valor em Kz: 25000 → "25.000 Kz". */
export function formatKz(value: number): string {
  return `${Math.round(value).toLocaleString('de-DE')} Kz`;
}
