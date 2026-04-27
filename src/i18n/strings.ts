export const strings = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      work: 'Work',
      podcast: 'Podcast',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      role: '// Lead Quality Engineer',
      headline: "Tests pass. Bugs ship.",
      subCopy: 'Playwright · MCP · CLI · AI agents · TypeScript',
      status: 'Available for work',
      cta1: 'See my work',
      cta2: 'Get in touch',
    },
    about: {
      heading: 'About',
    },
    services: {
      heading: 'What I Do',
    },
    cases: {
      heading: 'Real problems. Measurable outcomes.',
    },
    philosophy: {
      heading: 'Opinions, not bullet points.',
    },
    podcast: {
      heading: 'Podcast',
      listen: '▶ Listen',
      allEpisodes: '→ All episodes',
    },
    blog: {
      heading: 'Writing',
      readMore: 'Read →',
    },
    testimonials: {
      heading: 'Testimonials',
    },
    contact: {
      heading: 'Get in touch',
      subCopy: "If you're building a QA practice or need automation that actually works, let's talk.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      built: 'Built with Astro · Deployed on GitHub Pages',
    },
    langBadge: {
      en: 'EN',
      fr: 'FR',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      services: 'Services',
      work: 'Projets',
      podcast: 'Podcast',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      role: '// Lead Quality Engineer',
      headline: "Vos tests passent. Vos bugs aussi.",
      subCopy: 'Playwright · MCP · CLI · AI agents · TypeScript',
      status: 'Disponible',
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
    },
    about: {
      heading: 'À propos',
    },
    services: {
      heading: 'Ce que je fais',
    },
    cases: {
      heading: 'Problèmes réels. Résultats mesurables.',
    },
    philosophy: {
      heading: 'Opinions, pas des listes.',
    },
    podcast: {
      heading: 'Podcast',
      listen: '▶ Écouter',
      allEpisodes: '→ Tous les épisodes',
    },
    blog: {
      heading: 'Articles',
      readMore: 'Lire →',
    },
    testimonials: {
      heading: 'Témoignages',
    },
    contact: {
      heading: 'Me contacter',
      subCopy: "Si vous construisez une pratique QA ou avez besoin d'une automatisation qui fonctionne vraiment, parlons-en.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      built: 'Construit avec Astro · Déployé sur GitHub Pages',
    },
    langBadge: {
      en: 'EN',
      fr: 'FR',
    },
  },
} as const;

export type Lang = keyof typeof strings;
export type Strings = typeof strings.en;
