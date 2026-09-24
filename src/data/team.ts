import irina from '../assets/team/irina.jpg';
import nguelengue from '../assets/team/nguelengue.jpg';
import jorge from '../assets/team/jorge.jpg';

/**
 * Equipa (fonte: Apresentacao_RoseneMaura.pdf).
 * TODO (cliente): a fotografia do Jorge Hilário foi extraída do PDF em baixa resolução;
 * pedir um retrato original.
 */
export const team = [
  {
    name: 'Irina André',
    role: 'Diretora de Operações',
    bio: 'Cofundadora. Garante que o Método Fada Madrinha e o padrão de qualidade são cumpridos em cada serviço.',
    photo: irina,
    alt: 'Irina André, Diretora de Operações da Fada Madrinha, de blazer cinzento, a sorrir',
  },
  {
    name: 'Nguelengue Savinona',
    role: 'Diretora Financeira',
    bio: 'Cofundadora. Responsável pela gestão financeira e pelo crescimento sustentável da empresa.',
    photo: nguelengue,
    alt: 'Nguelengue Savinona, Diretora Financeira da Fada Madrinha, de blazer cinzento',
  },
  {
    name: 'Jorge Hilário',
    role: 'Diretor de Marketing e Marca',
    bio: 'Responsável pela identidade, comunicação e posicionamento da marca Fada Madrinha.',
    photo: jorge,
    alt: 'Jorge Hilário, Diretor de Marketing e Marca da Fada Madrinha, de fato escuro e gravata',
  },
];

/** Princípios seleccionados dos "12 Princípios da Equipa" (brand book, cap. VIII). */
export const principles = [
  { title: 'Respeito em primeiro lugar', text: 'O cliente é sempre recebido com respeito, independentemente do seu perfil.' },
  { title: 'A verdade não é negociável', text: 'Errar pode acontecer. Esconder um erro, nunca.' },
  { title: 'Pontualidade é uma forma de educação', text: 'Chegar a horas é uma demonstração de respeito pelo seu tempo.' },
  { title: 'A excelência está nos detalhes', text: 'Uma almofada alinhada, uma torneira sem marcas, um espelho impecável.' },
  { title: 'Trabalhamos em equipa', text: 'Nenhuma Fada trabalha sozinha. Quando uma equipa cresce junta, o cliente sente essa união.' },
  { title: 'Respeitamos a privacidade', text: 'O que vemos na sua casa ou empresa permanece confidencial.' },
];

/** O Juramento Fada Madrinha (brand book, cap. VIII). */
export const oath =
  'Comprometo-me a representar a Fada Madrinha com honestidade, respeito e excelência. Cuidarei de cada espaço como se fosse meu, tratarei cada cliente com dignidade e honrarei a confiança depositada em mim. Prometo nunca deixar de aprender, de colaborar e de procurar a excelência em cada detalhe. Porque acredito que transformar espaços é também transformar vidas.';
