export const podcast = {
  name: 'QG Qualité',
  tagline: 'The voice of QA that matters',
  coverArt: '/website/podcast-cover.jpg',
  primaryUrl: 'https://linktr.ee/QGQualite',
  platforms: [
    { name: 'Spotify', url: 'https://open.spotify.com/show/2RXVnPct46dACBJNkEoIQe?si=7f63470c19e84415' },
    { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/fr/podcast/qg-qualit%C3%A9/id1759317786' },
    { name: 'YouTube', url: 'https://www.youtube.com/@SSID_Testing' },
    { name: 'Deezer', url: 'https://www.deezer.com/fr/show/1001657181' },
    { name: 'Amazon Podcasts', url: 'https://music.amazon.fr/podcasts/d202faec-5056-4e0d-8ed7-3d37039e39f2/qg-qualit%C3%A9' },
  ],
  episodes: [
    {
      number: 16,
      title: 'Comprendre enfin les tests de performance',
      guest: 'Matthieu Leroux-Huet',
      duration: '72 min',
      url: 'https://open.spotify.com/episode/2RkYsenNhSwNuUexamKIYR?si=lAx3724UStWAvyABR0EneQ',
    },
    {
      number: 15,
      title: "Solopreneur QA : mission + contenu = crédibilité",
      guest: 'Jean-François Fresi',
      duration: '59 min',
      url: 'https://open.spotify.com/episode/1muSsjsHREH8hIcbK4kpeo?si=uYFqXIzST2CfAfmS6MHfhw',
    },
    {
      number: 14,
      title: "Tester avec l'IA, comprendre l'IA et survivre à l'IA",
      guest: 'Bruno Legeard',
      duration: '63 min',
      url: 'https://open.spotify.com/episode/5zoMZwRSvGHIXwKb6syVEx?si=D0_YoqBlQUa6szvuEQ5Dtw',
    },
  ],
} as const;
