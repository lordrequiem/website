export const podcast = {
  name: 'QG Qualité',
  tagline: 'The voice of QA that matters',
  coverArt: '/website/podcast-cover.jpg',
  primaryUrl: 'https://...',
  platforms: [
    { name: 'Spotify', url: 'https://...' },
    { name: 'Apple Podcasts', url: 'https://...' },
    { name: 'YouTube', url: 'https://...' },
  ],
  episodes: [
    {
      number: 3,
      title: '[ Episode title ]',
      guest: '[ Guest name ]',
      duration: '42 min',
      url: 'https://...',
    },
    {
      number: 2,
      title: '[ Episode title ]',
      guest: '[ Guest name ]',
      duration: '38 min',
      url: 'https://...',
    },
    {
      number: 1,
      title: '[ Episode title ]',
      guest: '[ Guest name ]',
      duration: '51 min',
      url: 'https://...',
    },
  ],
} as const;
