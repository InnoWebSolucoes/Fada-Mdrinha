/**
 * Os seis serviços apresentados no site.
 * `icon` corresponde a uma chave em src/components/Icon.astro.
 * `tone` escolhe a cor do ícone (ver global.css: .tone-*).
 * `priceCategory` liga ao id em src/data/pricing.ts.
 */
export type Service = {
  id: string;
  title: string;
  short: string;
  long: string;
  icon: 'home' | 'building' | 'drop' | 'layout' | 'tools' | 'sofa';
  tone: 'blue' | 'blue-deep' | 'pink' | 'gold' | 'plum' | 'ink';
  priceCategory: string;
};

export const services: Service[] = [
  {
    id: 'residencial',
    title: 'Limpeza Residencial',
    short: 'Limpezas pontuais ou periódicas para casas e apartamentos, com o cuidado de quem trata do próprio lar.',
    long: 'Casas e apartamentos sempre limpos, organizados e acolhedores. Seguimos uma sequência oficial por divisão — sala, quartos, cozinha e casas de banho — de cima para baixo e do mais limpo para o mais sujo, e terminamos sempre com uma inspecção final.',
    icon: 'home',
    tone: 'blue',
    priceCategory: 'residencial',
  },
  {
    id: 'empresarial',
    title: 'Limpeza Empresarial',
    short: 'Contratos mensais para escritórios, clínicas e espaços comerciais, com discrição e pontualidade.',
    long: 'Escritórios e empresas com ambientes profissionais e higienizados. Planos recorrentes com frequência à medida, equipa identificada, supervisão e confidencialidade absoluta sobre tudo o que vemos no seu espaço.',
    icon: 'building',
    tone: 'blue-deep',
    priceCategory: 'empresarial',
  },
  {
    id: 'higienizacao',
    title: 'Higienização Especializada',
    short: 'Tratamento profundo de superfícies e ambientes que exigem atenção redobrada.',
    long: 'Para quando limpar não chega. Tratamento profundo de superfícies com produtos especializados e foco nos pontos de maior contacto — ideal para clínicas, espaços com crianças ou depois de períodos de doença.',
    icon: 'drop',
    tone: 'pink',
    priceCategory: 'higienizacao',
  },
  {
    id: 'organizacao',
    title: 'Organização de Espaços',
    short: 'Arrumação e organização que deixam cada divisão mais funcional, leve e acolhedora.',
    long: 'Closets, cozinhas, escritórios ou a casa inteira. Criamos sistemas de arrumação que fazem sentido para a sua rotina e são fáceis de manter — porque um espaço organizado poupa tempo todos os dias.',
    icon: 'layout',
    tone: 'gold',
    priceCategory: 'organizacao',
  },
  {
    id: 'pos-obra',
    title: 'Limpeza Pós-Obra',
    short: 'Remoção completa de resíduos e poeira fina, entregando o espaço pronto a habitar.',
    long: 'Seguimos sempre a mesma ordem: remoção de resíduos, aspiração completa, poeira fina, vidros, cozinha, casas de banho, pavimentos e revisão final. O espaço é entregue pronto a usar.',
    icon: 'tools',
    tone: 'plum',
    priceCategory: 'pos-obra',
  },
  {
    id: 'estofos',
    title: 'Limpeza de Sofás e Estofos',
    short: 'Aspiração, pré-tratamento e extracção profissional que devolvem vida ao tecido.',
    long: 'Sofás, colchões e carpetes limpos a fundo. Identificamos o tecido, tratamos as manchas, aspiramos, escovamos, extraímos e neutralizamos — para mais frescura e mais saúde em casa.',
    icon: 'sofa',
    tone: 'ink',
    priceCategory: 'estofos',
  },
];
