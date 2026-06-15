// ============================================================================
//  Beef Back Better — SITE CONTENT
//  ----------------------------------------------------------------------------
//  This is the ONE file to edit to update the site's text, market schedules,
//  prices and contact details. You don't need to touch any other file.
//
//  ⚠️  Search this file for "TODO" to find everything that needs your real
//      information before going live.
//
//  Fields shaped like { es: "...", en: "..." } hold the Spanish and English
//  versions of the same text. Edit both.
// ============================================================================

export type Lang = 'es' | 'en';

export interface Bilingual {
  es: string;
  en: string;
}

// ---------------------------------------------------------------------------
//  Business details & contact
// ---------------------------------------------------------------------------
export const site = {
  brand: 'Beef Back Better',
  domain: 'beefbackbetter.com',

  // X / Twitter.
  x: { handle: '@beefbackbetter', url: 'https://x.com/beefbackbetter' },
  // Instagram.
  instagram: { handle: '@beefbackbettersv', url: 'https://instagram.com/beefbackbettersv' },

  // WhatsApp is the main ordering channel (international format, digits only).
  whatsapp: '50369826911',

  email: 'eat@beefbackbetter.com',

  // Payment methods you accept (shown in the Large Orders section).
  // TODO: keep only the ones that are true.
  payments: [
    { es: 'Efectivo', en: 'Cash' },
    { es: 'Bitcoin', en: 'Bitcoin' },
  ] as Bilingual[],
};

// ---------------------------------------------------------------------------
//  Farmers markets — the 3 places people can find Beef Back Better
//  TODO: replace these PLACEHOLDERS with the real markets, locations,
//        days and hours. Set mapUrl to a Google Maps link (or '' to hide it).
// ---------------------------------------------------------------------------
export interface Market {
  name: string;
  location: Bilingual;
  days: Bilingual;
  hours: string;
  mapUrl: string;
}

export const markets: Market[] = [
  {
    name: 'Surf City Market', // TODO
    location: { es: 'El Tunco, La Libertad', en: 'El Tunco, La Libertad' },
    days: { es: 'Domingos', en: 'Sundays' },
    hours: '8:00 – 13:00',
    mapUrl: 'https://maps.google.com/?q=El+Tunco+La+Libertad+El+Salvador',
  },
  {
    name: 'Mercado Tres Ceibas', // TODO
    location: { es: 'Santa Elena, Antiguo Cuscatlán', en: 'Santa Elena, Antiguo Cuscatlán' },
    days: { es: 'Sábados', en: 'Saturdays' },
    hours: '7:00 – 12:00',
    mapUrl: 'https://maps.google.com/?q=Santa+Elena+Antiguo+Cuscatlan+El+Salvador',
  },
  {
    name: 'La Placita Verde', // TODO
    location: { es: 'San Salvador', en: 'San Salvador' },
    days: { es: 'Viernes', en: 'Fridays' },
    hours: '15:00 – 19:00',
    mapUrl: 'https://maps.google.com/?q=San+Salvador+El+Salvador',
  },
];

// What's available at the market stand (smaller cuts, walk-up purchases).
// TODO: adjust to your actual cuts.
export const marketCuts: Bilingual[] = [
  { es: 'Cortes premium (lomo, ribeye, bistec)', en: 'Premium cuts (tenderloin, ribeye, steak)' },
  { es: 'Carne molida', en: 'Ground beef' },
  { es: 'Cortes para asar', en: 'Cuts for the grill' },
  { es: 'Huesos para caldo', en: 'Soup & broth bones' },
];

// ---------------------------------------------------------------------------
//  Stores that stock Beef Back Better (retail stockists)
//  TODO: replace these PLACEHOLDERS with the real shops, locations and map links.
//        Set mapUrl to a Google Maps link (or '' to hide it); note is optional.
// ---------------------------------------------------------------------------
export interface Store {
  name: string;
  location: Bilingual;
  note?: Bilingual;
  mapUrl: string;
}

export const stores: Store[] = [
  {
    name: 'Tienda placeholder #1', // TODO
    location: { es: 'San Salvador', en: 'San Salvador' },
    note: {
      es: 'Busca Beef Back Better en la sección de carnes.',
      en: 'Look for Beef Back Better in the meat section.',
    },
    mapUrl: '',
  },
  {
    name: 'Tienda placeholder #2', // TODO
    location: { es: 'Santa Tecla, La Libertad', en: 'Santa Tecla, La Libertad' },
    note: { es: '', en: '' },
    mapUrl: '',
  },
  {
    name: 'Tienda placeholder #3', // TODO
    location: { es: 'Antiguo Cuscatlán', en: 'Antiguo Cuscatlán' },
    note: { es: '', en: '' },
    mapUrl: '',
  },
];

// ---------------------------------------------------------------------------
//  Large orders — quarter cow and above are delivered, priced by weight
//  TODO: tune the approximate weights / descriptions to your operation.
// ---------------------------------------------------------------------------
export interface OrderTier {
  name: Bilingual;
  approxWeight: Bilingual;
  blurb: Bilingual;
  featured?: boolean;
}

export const orderTiers: OrderTier[] = [
  {
    name: { es: 'Cuarto de res', en: 'Quarter cow' },
    approxWeight: { es: '≈ 45–55 kg de carne', en: '≈ 100–120 lb of beef' },
    blurb: {
      es: 'Ideal para una familia. Una mezcla equilibrada de cortes para asar, moler y guisar.',
      en: 'Great for a family. A balanced mix of grilling, ground and stewing cuts.',
    },
  },
  {
    name: { es: 'Media res', en: 'Half cow' },
    approxWeight: { es: '≈ 90–110 kg de carne', en: '≈ 200–240 lb of beef' },
    blurb: {
      es: 'El favorito. El mejor valor por kilo y suficiente para varios meses.',
      en: 'The favorite. Best value per pound and enough to last several months.',
    },
    featured: true,
  },
  {
    name: { es: 'Res entera', en: 'Whole cow' },
    approxWeight: { es: '≈ 180–220 kg de carne', en: '≈ 400–480 lb of beef' },
    blurb: {
      es: 'Para compartir entre familias o llenar el congelador del año.',
      en: 'Split between families or stock the freezer for the year.',
    },
  },
];

// ---------------------------------------------------------------------------
//  UI strings (everything else on the page), per language.
// ---------------------------------------------------------------------------
export const ui: Record<Lang, {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: {
    markets: string;
    orders: string;
    about: string;
    contact: string;
    stores: string;
    menu: string; // accessible label for the mobile menu button
    homeAria: string; // accessible label for the brand/home link
    ariaPrimary: string; // accessible name for the primary nav landmark
  };
  toggleTo: string; // label of the OTHER language on the switch button
  langSwitchLabel: string; // aria-label for the language toggle, in the CURRENT language
  skipToContent: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaMarkets: string;
    ctaOrders: string;
  };
  markets: {
    title: string;
    subtitle: string;
    daysLabel: string;
    hoursLabel: string;
    mapLink: string;
    cutsTitle: string;
    cutsNote: string;
  };
  stores: {
    title: string;
    subtitle: string;
  };
  orders: {
    title: string;
    subtitle: string;
    weightNote: string;
    deliveryNote: string;
    paymentsLabel: string;
    cta: string;
    waMessage: string; // pre-filled WhatsApp message
  };
  about: { title: string; paragraphs: string[] };
  contact: {
    title: string;
    subtitle: string;
    whatsappCta: string;
    emailCta: string;
    followCta: string;
    waMessage: string;
  };
  footer: { tagline: string; rights: string; madeIn: string; ariaNav: string };
}> = {
  // ===== SPANISH (default) =================================================
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Beef Back Better — Res salvadoreña alimentada con pasto',
      description:
        'Res 100% alimentada con pasto de El Salvador. Encuéntranos en tres mercados de agricultores, o pide un cuarto de res o más con entrega a domicilio.',
    },
    nav: {
      markets: 'Mercados',
      orders: 'Pedidos grandes',
      about: 'Nosotros',
      contact: 'Contacto',
      stores: 'Tiendas',
      menu: 'Menú',
      homeAria: 'Beef Back Better — inicio',
      ariaPrimary: 'Principal',
    },
    toggleTo: 'EN',
    langSwitchLabel: 'Ver el sitio en inglés',
    skipToContent: 'Saltar al contenido',
    hero: {
      eyebrow: '🇸🇻 Res alimentada con pasto',
      title: 'Carne de res honesta,',
      titleAccent: 'criada en pasto.',
      subtitle:
        'Beef Back Better cría ganado 100% alimentado con pasto en El Salvador. Encuéntranos cada semana en tres mercados — o pide al por mayor con entrega.',
      ctaMarkets: 'Dónde encontrarnos',
      ctaOrders: 'Pedidos grandes',
    },
    markets: {
      title: 'En los mercados',
      subtitle:
        'Llevamos nuestra carne fresca a tres mercados de agricultores cada semana. Pasa a saludar y a probar la diferencia del pasto.',
      daysLabel: 'Días',
      hoursLabel: 'Horario',
      mapLink: 'Ver en el mapa',
      cutsTitle: 'En el puesto del mercado',
      cutsNote: 'Cortes listos para llevar, sin pedido previo:',
    },
    stores: {
      title: 'Encuéntranos en tiendas',
      subtitle:
        '¿No alcanzaste el mercado? Nuestra carne también se encuentra en estas tiendas.',
    },
    orders: {
      title: 'Pedidos grandes con entrega',
      subtitle:
        '¿Buscas un cuarto de res o más? Lo entregamos directamente a tu puerta. El precio varía según el precio de mercado y el peso final.',
      weightNote:
        'El precio se calcula según el precio de mercado vigente y el peso final (kilo). Los pesos mostrados son aproximados y varían en cada animal.',
      deliveryNote: 'Entrega incluida para pedidos de un cuarto de res en adelante.',
      paymentsLabel: 'Aceptamos',
      cta: 'Pedir por WhatsApp',
      waMessage: 'Hola Beef Back Better, me interesa un pedido grande (cuarto de res o más). ¿Me pueden dar más información?',
    },
    about: {
      title: 'Sobre Beef Back Better',
      paragraphs: [
        'Res salvadoreña 100% alimentada y terminada con pasto — sin hormonas, sin antibióticos y sin aditivos. Nuestro ganado pastorea libremente en las pasturas naturales de los pueblos de montaña de El Salvador, en rotación sobre tierra de primera y suplementado únicamente con sal de roca.',
        'Los animales se crían hasta los 2 o 3 años y se procesan en la finca, con el bienestar animal y la higiene como máxima prioridad, y se maduran en seco durante 7 días. Creemos en aprovechar el animal de la nariz a la cola.',
        'Fundada por Owen Gwilliam, quien trajo dos décadas de experiencia en agricultura orgánica en 15 países a El Salvador en 2022. La misión: devolverle lo mejor a la res.',
      ],
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'La forma más rápida de hacer un pedido o preguntar por disponibilidad es por WhatsApp.',
      whatsappCta: 'Escríbenos por WhatsApp',
      emailCta: 'Enviar correo',
      followCta: 'Síguenos',
      waMessage: 'Hola Beef Back Better 👋, tengo una pregunta:',
    },
    footer: {
      tagline: 'Res alimentada con pasto, criada en El Salvador.',
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho con 🤎 en El Salvador',
      ariaNav: 'Pie de página',
    },
  },

  // ===== ENGLISH ===========================================================
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Beef Back Better — Salvadoran grass-fed beef',
      description:
        '100% grass-fed beef from El Salvador. Find us at three farmers markets, or order a quarter cow or more with home delivery.',
    },
    nav: {
      markets: 'Markets',
      orders: 'Large orders',
      about: 'About',
      contact: 'Contact',
      stores: 'Stores',
      menu: 'Menu',
      homeAria: 'Beef Back Better — home',
      ariaPrimary: 'Primary',
    },
    toggleTo: 'ES',
    langSwitchLabel: 'View this site in Spanish',
    skipToContent: 'Skip to content',
    hero: {
      eyebrow: '🇸🇻 Grass-fed beef',
      title: 'Honest beef,',
      titleAccent: 'raised on pasture.',
      subtitle:
        'Beef Back Better raises 100% grass-fed cattle in El Salvador. Find us each week at three farmers markets — or order in bulk with delivery.',
      ctaMarkets: 'Where to find us',
      ctaOrders: 'Large orders',
    },
    markets: {
      title: 'At the farmers markets',
      subtitle:
        'We bring our fresh beef to three farmers markets every week. Come say hi and taste the grass-fed difference.',
      daysLabel: 'Days',
      hoursLabel: 'Hours',
      mapLink: 'View on map',
      cutsTitle: 'At the market stand',
      cutsNote: 'Ready-to-go cuts, no pre-order needed:',
    },
    stores: {
      title: 'Find us in stores',
      subtitle:
        "Can't make it to a market? You'll also find our beef stocked at these shops.",
    },
    orders: {
      title: 'Large orders, delivered',
      subtitle:
        'Looking for a quarter cow or more? We deliver it straight to your door. Price varies based on the market rate and the final weight.',
      weightNote:
        'Pricing is based on the current market rate and final weight (per pound). The weights shown are approximate and vary by animal.',
      deliveryNote: 'Delivery included on orders of a quarter cow and up.',
      paymentsLabel: 'We accept',
      cta: 'Order on WhatsApp',
      waMessage: "Hi Beef Back Better, I'm interested in a large order (quarter cow or more). Could you send me more info?",
    },
    about: {
      title: 'About Beef Back Better',
      paragraphs: [
        '100% grass-fed, grass-finished Salvadoran beef — no hormones, no antibiotics, no additives. Our cattle roam freely on the natural pastures of El Salvador’s mountain villages, rotated across prime grazing land and supplemented only with rock salt.',
        'Animals are raised to two or three years and processed on the farm, with animal welfare and hygiene as the highest priority, then dry-aged for seven days. We believe in using the whole animal, nose to tail.',
        'Founded by Owen Gwilliam, who brought two decades of organic-agriculture experience across 15 countries to El Salvador in 2022. The mission: bring the beef back better.',
      ],
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'The fastest way to place an order or ask about availability is WhatsApp.',
      whatsappCta: 'Message us on WhatsApp',
      emailCta: 'Send an email',
      followCta: 'Follow us',
      waMessage: 'Hi Beef Back Better 👋, I have a question:',
    },
    footer: {
      tagline: 'Grass-fed beef, raised in El Salvador.',
      rights: 'All rights reserved.',
      madeIn: 'Made with 🤎 in El Salvador',
      ariaNav: 'Footer',
    },
  },
};

// Build a wa.me click-to-chat URL with a pre-filled message.
export function whatsappUrl(message: string): string {
  const num = site.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
