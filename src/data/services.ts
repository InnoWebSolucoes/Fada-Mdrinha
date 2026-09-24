/**
 * Os seis serviços apresentados no site.
 * `steps` descreve como trabalhamos em cada serviço (fonte: Manual Operacional, brand book cap. VII).
 */
export type Service = {
  id: string;
  n: string;
  title: string;
  short: string;
  long: string;
  steps: string[];
};

export const services: Service[] = [
  {
    id: 'residencial',
    n: '01',
    title: 'Limpeza Residencial',
    short: 'Limpezas pontuais ou periódicas para casas e apartamentos, com o cuidado de quem trata do próprio lar.',
    long: 'Casas e apartamentos sempre limpos, organizados e acolhedores. Seguimos uma sequência oficial por divisão e terminamos sempre com uma inspecção final feita consigo, para que nada dependa da sorte.',
    steps: [
      'Confirmamos consigo o que pretende antes de começar',
      'Sequência oficial por divisão: sala, quartos, cozinha e casas de banho',
      'De cima para baixo, do mais limpo para o mais sujo, da divisão mais distante para a saída',
      'Inspecção final e breve visita ao espaço consigo',
    ],
  },
  {
    id: 'empresarial',
    n: '02',
    title: 'Limpeza Empresarial',
    short: 'Planos recorrentes para escritórios, clínicas e espaços comerciais, com discrição e pontualidade.',
    long: 'Escritórios e empresas com ambientes profissionais e higienizados. Planos com a frequência à medida da sua operação, equipa identificada, supervisão em cada visita e confidencialidade absoluta.',
    steps: [
      'Ordem de trabalho: equipamentos, mesas e cadeiras, salas de reunião, recepção, casas de banho, copa e pavimentos',
      'Equipa identificada e supervisionada por uma Fada Líder',
      'Frequência à medida: semanal, várias vezes por semana ou diária',
      'Nada é fotografado, comentado ou partilhado',
    ],
  },
  {
    id: 'higienizacao',
    n: '03',
    title: 'Higienização Especializada',
    short: 'Tratamento profundo de superfícies e ambientes que exigem atenção redobrada.',
    long: 'Para quando limpar não chega. Tratamento profundo de superfícies com produtos especializados e foco nos pontos de maior contacto. Indicado para clínicas, espaços com crianças ou depois de períodos de doença.',
    steps: [
      'Avaliação das superfícies e dos pontos de maior contacto',
      'Produtos especializados, adequados a cada material',
      'Atenção redobrada a interruptores, puxadores, torneiras e sanitários',
      'Aromatização suave, apenas quando autorizada',
    ],
  },
  {
    id: 'organizacao',
    n: '04',
    title: 'Organização de Espaços',
    short: 'Arrumação e organização que deixam cada divisão mais funcional, leve e acolhedora.',
    long: 'Closets, cozinhas, escritórios ou a casa inteira. Criamos sistemas de arrumação que fazem sentido para a sua rotina e são fáceis de manter, porque um espaço organizado poupa tempo todos os dias.',
    steps: [
      'Ouvimos como usa o espaço no dia-a-dia',
      'Triagem e arrumação funcional, divisão a divisão',
      'Sistemas de arrumação simples de manter',
      'Sugestões de optimização entregues no final',
    ],
  },
  {
    id: 'pos-obra',
    n: '05',
    title: 'Limpeza Pós-Obra',
    short: 'Remoção completa de resíduos e poeira fina, entregando o espaço pronto a habitar.',
    long: 'Depois de uma obra ou remodelação, o espaço é entregue pronto a usar. Seguimos sempre a mesma ordem, para que a poeira fina não volte a assentar em áreas já concluídas.',
    steps: [
      'Remoção de resíduos de obra',
      'Aspiração completa e limpeza de poeira fina',
      'Vidros e caixilhos, cozinha e casas de banho',
      'Pavimentos e revisão final',
    ],
  },
  {
    id: 'estofos',
    n: '06',
    title: 'Limpeza de Sofás e Estofos',
    short: 'Aspiração, pré-tratamento e extracção profissional que devolvem vida ao tecido.',
    long: 'Sofás, colchões e carpetes limpos a fundo, com mais frescura e mais saúde em casa. Explicamos-lhe o que esperar antes de começar e fotografamos o estado inicial apenas com a sua autorização.',
    steps: [
      'Identificação do tecido e verificação de manchas',
      'Aspiração e pré-tratamento',
      'Escovagem adequada e extracção profissional',
      'Neutralização, secagem superficial e revisão final',
    ],
  },
];
