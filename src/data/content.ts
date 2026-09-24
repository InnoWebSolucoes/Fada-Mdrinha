/**
 * Todo o texto reutilizado do site, a partir dos documentos do cliente:
 * portifolio (Como funciona, serviços), Apresentação (o problema), brand book (método, jornada, cultura).
 * Editar aqui para mudar o texto em todas as páginas.
 */
import irina from '../assets/team/irina.jpg';
import nguelengue from '../assets/team/nguelengue.jpg';
import jorge from '../assets/team/jorge.jpg';

export type IconName = 'home' | 'building' | 'drop' | 'layout' | 'tools' | 'sofa';
export type Tone = 'blue' | 'pink' | 'gold' | 'deep' | 'plum' | 'navy';

/* ---------------- Serviços ---------------- */
export const services = [
  {
    id: 'residencial', title: 'Limpeza Residencial', icon: 'home', tone: 'blue',
    short: 'Casas e apartamentos sempre limpos, organizados e acolhedores.',
    long: 'Limpezas pontuais ou periódicas com o cuidado de quem trata do próprio lar. Seguimos uma sequência oficial por divisão e terminamos sempre com uma inspecção final feita consigo.',
    steps: ['Confirmamos consigo o que pretende', 'Sala, quartos, cozinha e casas de banho, pela ordem oficial', 'De cima para baixo, do mais limpo para o mais sujo', 'Inspecção final e breve visita consigo'],
  },
  {
    id: 'empresarial', title: 'Limpeza Empresarial', icon: 'building', tone: 'deep',
    short: 'Escritórios e empresas com ambientes profissionais e higienizados.',
    long: 'Planos recorrentes com a frequência à medida da sua operação, equipa identificada, supervisão em cada visita e confidencialidade absoluta.',
    steps: ['Equipamentos, mesas e cadeiras, salas de reunião', 'Recepção, casas de banho e copa', 'Pavimentos e revisão final', 'Supervisão por uma Fada Líder'],
  },
  {
    id: 'higienizacao', title: 'Higienização Especializada', icon: 'drop', tone: 'pink',
    short: 'Tratamento profundo para espaços que pedem atenção redobrada.',
    long: 'Para quando limpar não chega. Produtos especializados e foco nos pontos de maior contacto, ideal para clínicas, espaços com crianças ou depois de períodos de doença.',
    steps: ['Avaliação das superfícies e dos pontos de maior contacto', 'Produtos especializados para cada material', 'Interruptores, puxadores, torneiras e sanitários', 'Aromatização suave, apenas quando autorizada'],
  },
  {
    id: 'organizacao', title: 'Organização de Espaços', icon: 'layout', tone: 'gold',
    short: 'Cada divisão mais funcional, leve e acolhedora.',
    long: 'Closets, cozinhas, escritórios ou a casa inteira. Criamos sistemas de arrumação que fazem sentido para a sua rotina e são fáceis de manter.',
    steps: ['Ouvimos como usa o espaço', 'Triagem e arrumação, divisão a divisão', 'Sistemas simples de manter', 'Sugestões entregues no final'],
  },
  {
    id: 'pos-obra', title: 'Limpeza Pós-Obra', icon: 'tools', tone: 'plum',
    short: 'Resíduos e poeira fina fora, espaço pronto a usar.',
    long: 'Depois de uma obra ou remodelação, seguimos sempre a mesma ordem, para que a poeira fina não volte a assentar em áreas já concluídas.',
    steps: ['Remoção de resíduos de obra', 'Aspiração completa e poeira fina', 'Vidros, cozinha e casas de banho', 'Pavimentos e revisão final'],
  },
  {
    id: 'estofos', title: 'Sofás e Estofos', icon: 'sofa', tone: 'navy',
    short: 'Sofás, colchões e carpetes limpos a fundo, com mais frescura.',
    long: 'Aspiração, pré-tratamento e extracção profissional. Explicamos o que esperar antes de começar e fotografamos o estado inicial apenas com a sua autorização.',
    steps: ['Identificação do tecido e das manchas', 'Aspiração e pré-tratamento', 'Escovagem e extracção profissional', 'Neutralização, secagem e revisão final'],
  },
] as const satisfies readonly { id: string; title: string; icon: IconName; tone: Tone; short: string; long: string; steps: readonly string[] }[];

/* ---------------- Como funciona (portifolio, "Como funciona") ---------------- */
export const howItWorks = [
  { title: 'Fale connosco', text: 'Conte-nos o que precisa pelo WhatsApp e receba uma proposta à medida, clara e sem letras pequenas.' },
  { title: 'Agendamos juntos', text: 'Escolhemos consigo a melhor data e hora. Um dia antes, recebe um lembrete com a equipa que vai.' },
  { title: 'Nós tratamos de tudo', text: 'A equipa chega a horas, de uniforme, com todos os produtos, e cuida de cada detalhe.' },
  { title: 'Verificamos consigo', text: 'Antes de sair, percorremos o espaço consigo para garantir que está tudo como espera.' },
];

/* ---------------- A limpeza de sempre vs. Fada Madrinha (Apresentação, "O Problema") ---------------- */
export const compare = {
  others: [
    'Cada visita é diferente, não há um padrão',
    'Profissionais sem formação',
    'Ninguém supervisiona o resultado',
    'Pouca confiança no mercado informal',
    'Resultados inconsistentes',
  ],
  us: [
    'Um método próprio, em cinco fases, em cada visita',
    'Equipa seleccionada e formada',
    'Supervisão e inspecção final em cada serviço',
    'Discrição e confidencialidade absolutas',
    'Se a falha for nossa, corrigimos sem custos',
  ],
};

/* ---------------- Sempre incluído (brand book) ---------------- */
export const included = [
  { title: 'Produtos e equipamentos', text: 'Levamos tudo o que é preciso. Não tem de comprar nada.', icon: 'sparkle', tone: 'blue' },
  { title: 'Equipa identificada', text: 'Uniforme impecável e crachá visível. Sabe sempre quem entra.', icon: 'badge', tone: 'pink' },
  { title: 'Supervisão', text: 'Uma Fada Líder acompanha a equipa e verifica o resultado.', icon: 'eye', tone: 'gold' },
  { title: 'Inspecção consigo', text: 'Nada é entregue sem uma breve visita ao espaço consigo.', icon: 'check', tone: 'deep' },
  { title: 'Pontualidade', text: 'Se houver um imprevisto, avisamos nós, antes de ter de ligar.', icon: 'clock', tone: 'plum' },
  { title: 'Recuperação', text: 'Se algo não ficar bem por culpa nossa, voltamos e corrigimos sem custos.', icon: 'heart', tone: 'pink' },
] as const;

/* ---------------- Método: cinco fases (Manual Operacional) ---------------- */
export const phases = [
  { title: 'Receber', text: 'Cumprimentamos, confirmamos o serviço e ouvimos o que é importante para si.' },
  { title: 'Preparar', text: 'Protegemos móveis, organizamos equipamentos e separamos os produtos certos.' },
  { title: 'Executar', text: 'Seguimos a sequência oficial, divisão a divisão, sem atalhos.' },
  { title: 'Inspecionar', text: 'Nada é entregue sem revisão. Convidamo-lo a verificar connosco.' },
  { title: 'Encantar', text: 'Almofadas alinhadas, mantas dobradas, luz natural a entrar.' },
];

/* ---------------- Jornada do cliente (brand book caps. IV e VI) ---------------- */
export const journey = [
  { moment: 'Primeiro contacto', title: 'Fale connosco. Respondemos com atenção.', text: 'Antes de falar de valores, queremos compreender o que precisa: o tipo de espaço, a dimensão, a data e qualquer necessidade especial.' },
  { moment: 'Orçamento', title: 'Uma proposta clara e fácil de compreender.', text: 'Sem linguagem técnica nem letras pequenas.', message: 'Muito obrigado pela oportunidade de apresentar a nossa proposta. Será um enorme prazer cuidar do seu espaço.' },
  { moment: 'Confirmação', title: 'Sabe sempre quem vem e quando.', text: 'Confirmamos data, hora, equipa e tempo estimado. Um dia antes, recebe um lembrete.', message: 'Passamos apenas para recordar que amanhã estaremos consigo. Estamos muito felizes por cuidar do seu espaço.' },
  { moment: 'A chegada', title: 'Os primeiros 30 segundos.', text: 'A equipa chega a horas, cumprimenta pelo nome e confirma consigo o serviço antes de começar.', message: 'Existe alguma divisão ou objecto ao qual gostaria que dedicássemos uma atenção especial?' },
  { moment: 'Durante o serviço', title: 'Silêncio elegante. Comunicação certa.', text: 'Sem pressa, sem barulho, sem telemóveis. Se deslocarmos um objecto, volta exactamente ao mesmo lugar.', message: 'Terminámos esta divisão. Gostaria de verificar antes de avançarmos?' },
  { moment: 'Inspecção final', title: 'Percorremos o espaço consigo.', text: 'Luzes, janelas, produtos recolhidos, lixo removido, objectos recolocados.' },
  { moment: 'Encantar', title: 'Mais do que limpeza, uma experiência.', text: 'Sempre que autorizar: almofadas alinhadas, mantas dobradas e um pequeno cartão de agradecimento.' },
  { moment: 'Depois do serviço', title: 'A relação não termina à porta.', text: 'Algumas horas depois, perguntamos se ficou satisfeito. Se algo não estiver bem, resolvemos primeiro e explicamos depois.', message: 'Esperamos que esteja satisfeito com o serviço realizado hoje. Muito obrigado pela confiança.' },
];

/* ---------------- Empresas ---------------- */
export const segments = ['Escritórios', 'Clínicas', 'Condomínios', 'Imobiliárias', 'Alojamento local', 'Hotéis boutique', 'Escolas', 'Lojas'];
export const officeOrder = ['Equipamentos electrónicos', 'Mesas e cadeiras', 'Salas de reunião', 'Recepção', 'Casas de banho', 'Copa', 'Pavimentos'];
export const twentyPointGroups = [
  { title: 'A equipa', points: ['Uniforme', 'Pontualidade', 'Educação', 'Organização'] },
  { title: 'O material', points: ['Produtos', 'Equipamentos'] },
  { title: 'As superfícies', points: ['Limpeza geral', 'Vidros', 'Rodapés', 'Portas', 'Interruptores'] },
  { title: 'As áreas críticas', points: ['Casas de banho', 'Cozinha e copa', 'Pavimentos'] },
  { title: 'O acabamento', points: ['Aroma', 'Organização final'] },
  { title: 'A relação consigo', points: ['Comunicação', 'Inspecção com o cliente', 'Satisfação confirmada', 'Um gesto final de cuidado'] },
];
export const commitments = [
  { title: 'Pontualidade', text: 'Horários acordados são horários cumpridos. Qualquer imprevisto é comunicado de imediato.' },
  { title: 'Supervisão', text: 'Uma Fada Líder verifica os 20 pontos de excelência antes de considerar o serviço concluído.' },
  { title: 'Confidencialidade', text: 'A equipa não fotografa, não comenta e não partilha nada do que vê.' },
  { title: 'Recuperação', text: 'Se algo não corresponder ao contratado por culpa nossa, corrigimos sem custos adicionais.' },
];
export const complaintSteps = [
  { title: 'Ouvimos', text: 'Agradecemos o contacto e ouvimos sem interromper.' },
  { title: 'Analisamos', text: 'Verificamos os factos, se necessário no local.' },
  { title: 'Resolvemos', text: 'Assumimos a responsabilidade e corrigimos, voltando ao espaço se for preciso.' },
  { title: 'Confirmamos', text: 'Verificamos consigo se ficou resolvido e registamos para não se repetir.' },
];

/* ---------------- Quem somos ---------------- */
// TODO (cliente): fotografia do Jorge Hilário em alta resolução.
export const team = [
  { name: 'Irina André', role: 'Diretora de Operações', bio: 'Cofundadora. Garante que o método e o padrão de qualidade são cumpridos em cada serviço.', photo: irina, alt: 'Irina André, Diretora de Operações, de blazer cinzento, a sorrir' },
  { name: 'Nguelengue Savinona', role: 'Diretora Financeira', bio: 'Cofundadora. Responsável pela gestão financeira e pelo crescimento sustentável da empresa.', photo: nguelengue, alt: 'Nguelengue Savinona, Diretora Financeira, de blazer cinzento' },
  { name: 'Jorge Hilário', role: 'Diretor de Marketing e Marca', bio: 'Responsável pela identidade, comunicação e posicionamento da marca.', photo: jorge, alt: 'Jorge Hilário, Diretor de Marketing e Marca, de fato escuro e gravata' },
];
export const values = [
  { title: 'Confiança', words: 'Organização, profissionalismo e limpeza em cada visita.', tone: 'blue' },
  { title: 'Excelência', words: 'Sofisticação, qualidade e valor premium.', tone: 'gold' },
  { title: 'Cuidado', words: 'Delicadeza e proximidade em cada detalhe.', tone: 'pink' },
] as const;
export const principles = [
  { title: 'Respeito em primeiro lugar', text: 'O cliente é sempre recebido com respeito, independentemente do seu perfil.' },
  { title: 'A verdade não é negociável', text: 'Errar pode acontecer. Esconder um erro, nunca.' },
  { title: 'Pontualidade é educação', text: 'Chegar a horas é respeito pelo seu tempo.' },
  { title: 'A excelência está nos detalhes', text: 'Uma almofada alinhada, uma torneira sem marcas, um espelho impecável.' },
  { title: 'Nenhuma Fada trabalha sozinha', text: 'Quando uma equipa cresce junta, o cliente sente essa união.' },
  { title: 'A privacidade é sagrada', text: 'O que vemos na sua casa ou empresa fica connosco.' },
];
export const oath =
  'Comprometo-me a representar a Fada Madrinha com honestidade, respeito e excelência. Cuidarei de cada espaço como se fosse meu, tratarei cada cliente com dignidade e honrarei a confiança depositada em mim. Prometo nunca deixar de aprender, de colaborar e de procurar a excelência em cada detalhe. Porque acredito que transformar espaços é também transformar vidas.';

/* ---------------- Perguntas frequentes (TODO cliente: confirmar) ---------------- */
export const faq = [
  { q: 'Como é definido o preço?', a: 'Cada proposta é personalizada. Tem em conta o tipo de serviço, a dimensão do espaço, a frequência e a localização. Envie-nos estes dados pelo WhatsApp, com fotografias se possível, e preparamos uma proposta clara.', empresas: true },
  { q: 'Preciso de ter produtos de limpeza em casa?', a: 'Não. A nossa equipa leva todos os produtos e equipamentos profissionais necessários.', empresas: false },
  { q: 'Com quanta antecedência devo marcar?', a: 'Recomendamos 2 a 3 dias. Para pedidos urgentes, fale connosco pelo WhatsApp e verificamos a disponibilidade.', empresas: false },
  { q: 'O serviço é supervisionado?', a: 'Sim. Cada serviço segue o Método Fada Madrinha e termina com uma inspecção final, feita consigo sempre que possível.', empresas: true },
  { q: 'O que acontece ao que a equipa vê no nosso espaço?', a: 'Fica connosco. A equipa não fotografa, não comenta e não partilha nada. Documentos e objectos ficam exactamente onde estavam.', empresas: true },
  { q: 'E se algo não ficar como esperava?', a: 'Fale connosco. Se a responsabilidade for nossa, voltamos e corrigimos sem custos adicionais, e confirmamos depois se ficou resolvido.', empresas: true },
];
