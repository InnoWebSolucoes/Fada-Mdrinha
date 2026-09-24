/**
 * Conteúdo da página Empresas (brand book: "Cliente Empresarial", cap. VII e cap. IX).
 */

export const segments = [
  { title: 'Escritórios', text: 'Postos de trabalho, salas de reunião, recepção e copa.' },
  { title: 'Clínicas', text: 'Higienização com foco nos pontos de maior contacto.' },
  { title: 'Condomínios', text: 'Áreas comuns, entradas e escadas com frequência regular.' },
  { title: 'Imobiliárias', text: 'Imóveis prontos a mostrar e a entregar.' },
  { title: 'Alojamento local', text: 'Rotação entre hóspedes com padrão hoteleiro.' },
  { title: 'Hotéis boutique', text: 'Discrição e detalhe para espaços de hospitalidade.' },
  { title: 'Escolas', text: 'Ambientes seguros para crianças e educadores.' },
  { title: 'Lojas', text: 'Montras, expositores e áreas de atendimento impecáveis.' },
];

/** Ordem de trabalho em escritórios (Manual Operacional). */
export const officeOrder = [
  'Equipamentos electrónicos',
  'Mesas e cadeiras',
  'Salas de reunião',
  'Recepção',
  'Casas de banho',
  'Copa',
  'Pavimentos',
];

/** Os 20 Pontos de Excelência (apresentados como padrão de qualidade). */
export const twentyPoints = [
  'Uniforme', 'Pontualidade', 'Educação', 'Organização', 'Produtos',
  'Equipamentos', 'Limpeza', 'Vidros', 'Rodapés', 'Portas',
  'Interruptores', 'Casas de banho', 'Cozinha e copa', 'Pavimentos', 'Aroma',
  'Organização final', 'Comunicação', 'Inspecção', 'Cliente satisfeito', 'Momento final',
];

export const commitments = [
  {
    title: 'Pontualidade',
    text: 'Horários acordados são horários cumpridos. Qualquer imprevisto é comunicado de imediato. Nunca espera que seja a sua empresa a ligar.',
  },
  {
    title: 'Supervisão',
    text: 'Cada serviço é acompanhado por uma Fada Líder, que verifica os 20 pontos de excelência antes de o considerar concluído.',
  },
  {
    title: 'Confidencialidade',
    text: 'A equipa não fotografa, não comenta e não partilha nada do que vê. Documentos, equipamentos e informação ficam exactamente onde estavam.',
  },
  {
    title: 'Compromisso de recuperação',
    text: 'Se algo não corresponder ao contratado e a responsabilidade for nossa, corrigimos sem custos adicionais e confirmamos depois se ficou resolvido.',
  },
];

/** Protocolo de reclamações, simplificado a partir do R.E.S.O.L.V.E.R. (cap. IX). */
export const complaintSteps = [
  { title: 'Ouvimos', text: 'Agradecemos o contacto e ouvimos sem interromper.' },
  { title: 'Analisamos', text: 'Verificamos os factos, se necessário no local.' },
  { title: 'Resolvemos', text: 'Assumimos a responsabilidade e corrigimos, voltando ao espaço sempre que for preciso.' },
  { title: 'Confirmamos', text: 'Verificamos consigo se a solução foi satisfatória e registamos para não se repetir.' },
];
