/**
 * Configuração global do site.
 * TUDO o que é contacto, domínio, redes sociais e mensagens pré-preenchidas de WhatsApp
 * vive aqui. Alterar este ficheiro é suficiente para actualizar o site inteiro.
 */

export const site = {
  name: 'Fada Madrinha',
  legalName: 'Fada Madrinha',
  /** Domínio canónico (usado em canonical, Open Graph, sitemap e JSON-LD). */
  url: 'https://www.fadamadrinha.com',
  tagline: 'Transformamos espaços. Criamos bem-estar.',
  description:
    'Limpeza profissional residencial e empresarial em Talatona, Luanda. Método próprio, supervisão em cada visita e atendimento próximo. Peça o seu orçamento pelo WhatsApp.',
  locale: 'pt-AO',
  ogLocale: 'pt_AO',
  /** Imagem Open Graph por omissão (1200×630, em /public). */
  ogImage: '/og-image.jpg',
  copyrightYear: 2026,

  phone: {
    /** Formato internacional sem espaços, para tel: e JSON-LD. */
    e164: '+244975520533',
    /** Formato para mostrar no site. */
    display: '+244 975 520 533',
    /** Número usado nos links wa.me (sem "+"). */
    whatsapp: '244975520533',
  },

  // TODO (cliente): o brand book indica geral@fadamadrinha.com como placeholder.
  // Enquanto esse endereço não existir, usamos o Gmail confirmado nos documentos.
  email: 'fadamadrinha7@gmail.com',

  address: {
    display: 'Talatona, Luanda, Angola',
    locality: 'Talatona',
    region: 'Luanda',
    country: 'AO',
  },

  // TODO (cliente): confirmar o handle do Instagram.
  instagram: {
    handle: 'fadamadrinha',
    url: 'https://www.instagram.com/fadamadrinha',
  },

  /**
   * Interruptores de funcionalidades.
   * - beforeAfter: secção "Antes & Depois" na página inicial (sem fotos reais ainda).
   * - loyalty: "Clube Encanto" e "Programa de Indicação" (propostas do brand book, não confirmadas).
   */
  features: {
    beforeAfter: false,
    loyalty: false,
  },
} as const;

/** Mensagens pré-preenchidas para os links de WhatsApp. */
export const whatsappMessages = {
  geral: 'Olá! Gostaria de pedir um orçamento de limpeza.',
  empresas:
    'Bom dia! Represento uma empresa e gostaria de receber uma proposta de limpeza profissional. Tipo de espaço: ______. Área aproximada: ______. Frequência pretendida: ______.',
  precos: 'Olá! Tenho uma dúvida sobre os preços dos serviços.',
  servico: (nome: string) => `Olá! Gostaria de pedir um orçamento para ${nome}.`,
  /** Prefixo da mensagem gerada pelo estimador (o resumo é acrescentado em JS). */
  estimador: 'Olá! Fiz uma simulação no site e gostaria de confirmar um orçamento:',
} as const;

/** Constrói um link wa.me com a mensagem codificada. */
export function waLink(message: string = whatsappMessages.geral): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phone.e164}`;
export const mailLink = `mailto:${site.email}`;

/** Navegação principal (cabeçalho, menu móvel e rodapé). */
export const nav = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/servicos', label: 'Serviços & Preços' },
  { href: '/empresas', label: 'Empresas' },
  { href: '/metodo', label: 'O Nosso Método' },
  { href: '#contacto', label: 'Contacto' },
] as const;
