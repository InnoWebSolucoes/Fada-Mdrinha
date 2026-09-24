/**
 * O Método Fada Madrinha — conteúdo do brand book (caps. IV, VI e VII),
 * reescrito para o cliente (não é o manual interno).
 */

/** As cinco fases de cada serviço (Manual Operacional, cap. VII). */
export const phases = [
  { n: '01', title: 'Receber', text: 'Cumprimentamos, confirmamos consigo o que foi contratado e ouvimos o que é importante para si.' },
  { n: '02', title: 'Preparar', text: 'Protegemos móveis, organizamos equipamentos e separamos os produtos certos para cada superfície.' },
  { n: '03', title: 'Executar', text: 'Seguimos a sequência oficial, divisão a divisão, sem atalhos. De cima para baixo, do mais limpo para o mais sujo.' },
  { n: '04', title: 'Inspecionar', text: 'Nada é entregue sem revisão. Percorremos o espaço uma última vez e convidamo-lo a verificar connosco.' },
  { n: '05', title: 'Encantar', text: 'Almofadas alinhadas, mantas dobradas, luz natural a entrar. Um pequeno gesto que transforma limpeza em experiência.' },
];

/** Diferenciadores (página inicial). */
export const differentiators = [
  { title: 'Método próprio', text: 'Cada serviço segue as mesmas cinco fases, para que a qualidade nunca dependa da sorte.' },
  { title: 'Supervisão em cada visita', text: 'Uma Fada Líder acompanha a equipa e faz a inspecção final antes de considerarmos o trabalho concluído.' },
  { title: 'Pontualidade', text: 'Chegar a horas é uma forma de respeito. Se houver um imprevisto, avisamos nós — antes de ter de ligar.' },
  { title: 'Discrição e confidencialidade', text: 'Nada sai da sua casa ou empresa. Nada entra sem autorização. O que vemos, fica connosco.' },
  { title: 'Atendimento próximo', text: 'Acompanhamos antes, durante e depois do serviço. Uma mensagem, uma confirmação, um agradecimento.' },
  { title: 'Compromisso de recuperação', text: 'Se algo não ficar como esperava e a responsabilidade for nossa, corrigimos sem custos adicionais.' },
];

export type JourneyStep = {
  n: string;
  eyebrow: string;
  title: string;
  text: string;
  /** Frase em destaque (citação do brand book ou exemplo de mensagem). */
  quote?: string;
  bullets?: string[];
};

/** A jornada do cliente, do primeiro contacto ao pós-serviço (caps. IV e VI). */
export const journey: JourneyStep[] = [
  {
    n: '01',
    eyebrow: 'Primeiro contacto',
    title: 'Fale connosco. Respondemos com atenção.',
    text: 'Envia uma mensagem ou telefona. O nosso compromisso é responder o mais rapidamente possível e, antes de falar de preços, compreender o que precisa.',
    bullets: ['Que tipo de espaço pretende limpar?', 'Qual a dimensão?', 'Quando gostaria de realizar o serviço?', 'Existe alguma necessidade especial?'],
  },
  {
    n: '02',
    eyebrow: 'Orçamento',
    title: 'Uma proposta clara, elegante e fácil de compreender.',
    text: 'Sem linguagem técnica nem letras pequenas. Recebe uma proposta personalizada, acompanhada de uma mensagem nossa, e todo o tempo para esclarecer dúvidas.',
    quote: 'Muito obrigado pela oportunidade de apresentar a nossa proposta. Será um enorme prazer cuidar do seu espaço.',
  },
  {
    n: '03',
    eyebrow: 'Confirmação',
    title: 'Sabe sempre quem vem, quando e por quanto tempo.',
    text: 'Depois de aceitar, confirmamos a data, a hora, a equipa e o tempo estimado. Um dia antes, recebe um lembrete. Quando a equipa chegar ao local, avisamos.',
    quote: 'Estamos muito felizes por cuidar do seu espaço. A nossa equipa chegará pontualmente e preparada.',
  },
  {
    n: '04',
    eyebrow: 'A chegada',
    title: 'Os primeiros 30 segundos.',
    text: 'A equipa chega a horas, de uniforme impecável e crachá visível. Cumprimenta pelo nome, apresenta-se e confirma consigo os serviços contratados antes de começar.',
    quote: 'Existe alguma divisão ou objecto ao qual gostaria que dedicássemos uma atenção especial?',
  },
  {
    n: '05',
    eyebrow: 'Durante o serviço',
    title: 'Silêncio elegante. Comunicação certa.',
    text: 'Trabalhamos com serenidade: sem pressa, sem barulho, sem telemóveis. Nunca deslocamos um objecto sem necessidade e, se o fizermos, volta exactamente ao mesmo lugar. Vamos comunicando consigo à medida que avançamos.',
    quote: 'Terminámos esta divisão. Gostaria de verificar antes de avançarmos?',
  },
  {
    n: '06',
    eyebrow: 'Inspecção final',
    title: 'O Padrão Ouro.',
    text: 'Antes de sair, a equipa percorre o espaço uma última vez — luzes, janelas, produtos recolhidos, lixo removido, objectos recolocados — e convida-o a fazer uma breve visita connosco.',
    quote: '“Se esta fosse a minha casa, eu ficaria satisfeito com este resultado?” Se a resposta for não, o serviço ainda não terminou.',
  },
  {
    n: '07',
    eyebrow: 'Encantar',
    title: 'Mais do que limpeza, uma experiência.',
    text: 'Sempre que autorizar, deixamos as almofadas alinhadas, as mantas dobradas, as cortinas ajustadas para a luz natural e um pequeno cartão de agradecimento. Um aroma suave, se gostar.',
  },
  {
    n: '08',
    eyebrow: 'Depois do serviço',
    title: 'A relação não termina à porta.',
    text: 'Algumas horas depois, enviamos uma mensagem para saber se ficou satisfeito. A sua opinião é o que nos faz melhorar. E se algo não estiver como esperava, resolvemos primeiro e explicamos depois.',
    quote: 'Esperamos que esteja satisfeito com o serviço realizado hoje. Muito obrigado pela confiança depositada na Fada Madrinha.',
  },
];

/** O que pode esperar, sempre (brand book, "A Promessa da Marca"). */
export const promise = [
  'Atendimento elegante',
  'Comunicação clara',
  'Equipas preparadas',
  'Respeito absoluto pelo espaço',
  'Transparência',
  'Pontualidade',
];
