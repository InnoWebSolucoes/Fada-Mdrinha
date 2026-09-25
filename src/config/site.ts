/**
 * Configuração global do site.
 * Contactos, domínio, redes sociais e mensagens pré-preenchidas do WhatsApp vivem aqui.
 */

/**
 * Caminho interno com o prefixo do site (base em astro.config.mjs): withBase('/servicos') dá
 * '/fada-madrinha/servicos'. Usar em todos os links e ficheiros de public/.
 */
export function withBase(path: string = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? base || '/' : base + path;
}

export const site = {
  name: 'Fada Madrinha',
  // Endereço completo do início do site. (fadamadrinha.com é de outra empresa, não usar.)
  url: 'https://innoweb.agency/fada-madrinha',
  tagline: 'Transformamos espaços. Criamos bem-estar.',
  description:
    'Limpeza profissional residencial e empresarial em Talatona, Luanda. Método próprio, supervisão em cada visita e atendimento próximo. Peça o seu orçamento pelo WhatsApp.',
  locale: 'pt-AO',
  ogLocale: 'pt_AO',
  ogImage: '/og-image.jpg',
  copyrightYear: 2026,

  phone: { e164: '+244975520533', display: '+244 975 520 533', whatsapp: '244975520533' },

  // TODO (cliente): o brand book indica geral@fadamadrinha.com como placeholder.
  email: 'fadamadrinha7@gmail.com',

  address: { display: 'Talatona, Luanda, Angola', locality: 'Talatona', region: 'Luanda', country: 'AO' },

  // TODO (cliente): confirmar o handle do Instagram.
  instagram: { handle: 'fadamadrinha', url: 'https://www.instagram.com/fadamadrinha' },

  /** Brand book, "Primeiro Contacto" (padrão de atendimento). TODO (cliente): confirmar. */
  replyPromise: 'Procuramos responder em menos de 10 minutos, sempre que possível.',

  /** Barra de anúncio no topo de todas as páginas. */
  announcement: 'Limpeza profissional em Talatona e em toda a Luanda.',

  /**
   * Interruptores:
   * - fairy: a fada que voa pela página ao fazer scroll.
   * - loyalty: "Clube Encanto" (proposta do brand book, NÃO confirmada; manter false até o cliente aprovar).
   */
  features: { fairy: true, loyalty: false },
} as const;

export const whatsappMessages = {
  geral: 'Olá! Gostaria de pedir um orçamento de limpeza.',
  empresas: 'Bom dia! Represento uma empresa e gostaria de receber uma proposta de limpeza profissional.',
  servico: (nome: string) => `Olá! Gostaria de pedir um orçamento para ${nome}.`,
} as const;

export function waLink(message: string = whatsappMessages.geral): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}
export const telLink = `tel:${site.phone.e164}`;
export const mailLink = `mailto:${site.email}`;

export const nav = [
  { href: withBase('/quem-somos'), label: 'Quem Somos' },
  { href: withBase('/servicos'), label: 'Serviços' },
  { href: withBase('/empresas'), label: 'Empresas' },
  { href: withBase('/metodo'), label: 'O Nosso Método' },
] as const;
