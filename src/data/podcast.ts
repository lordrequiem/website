export const podcast = {
  name: 'QG Qualité',
  tagline: 'The voice of QA that matters',
  coverArt: '/website/podcast-cover.jpg',
  primaryUrl: 'https://linktr.ee/QGQualite',
  platforms: [
    { name: 'Spotify', url: 'https://open.spotify.com/show/2RXVnPct46dACBJNkEoIQe?si=7f63470c19e84415' },
    { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/fr/podcast/qg-qualit%C3%A9/id1759317786' },
    { name: 'YouTube', url: 'https://www.youtube.com/@SSID_Testing' },
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
