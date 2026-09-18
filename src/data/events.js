// Données de démonstration en attendant le branchement sur les vraies
// programmations et archives (voir retours de refonte : pas d'événement en
// cours cette semaine dans les vraies données, donc LIVE_EVENTS reste vide).

const LIVE_EVENTS = []

const UPCOMING_EVENTS = [
  {
    id: 'up-1',
    sport: 'Football',
    title: 'AS Romainville vs US Bondy',
    place: 'Stade Paul-Éluard',
    date: 'Sam. 27 sept.',
    time: '15h00',
  },
  {
    id: 'up-2',
    sport: 'Basket',
    title: 'Romainville Basket Club vs Pantin BC',
    place: 'Gymnase Marcel-Cachin',
    date: 'Dim. 28 sept.',
    time: '11h00',
  },
  {
    id: 'up-3',
    sport: 'Hand',
    title: 'US Romainville Hand vs Noisy Handball',
    place: 'Gymnase Youri-Gagarine',
    date: 'Mer. 1 oct.',
    time: '20h30',
  },
  {
    id: 'up-4',
    sport: 'Gym',
    title: 'Gala de gymnastique — saison 2026',
    place: 'Gymnase Marcel-Cachin',
    date: 'Sam. 4 oct.',
    time: '14h00',
  },
]

const PAST_EVENTS = [
  {
    id: 'past-1',
    sport: 'Football',
    title: 'AS Romainville vs Bobigny FC',
    score: '2 – 1',
    date: 'Sam. 20 sept.',
    hasReplay: true,
  },
  {
    id: 'past-2',
    sport: 'Basket',
    title: 'Romainville Basket Club vs Drancy BC',
    score: '58 – 64',
    date: 'Dim. 14 sept.',
    hasReplay: true,
  },
  {
    id: 'past-3',
    sport: 'Hand',
    title: 'US Romainville Hand vs Aulnay Hand',
    score: '27 – 24',
    date: 'Mer. 10 sept.',
    hasReplay: false,
  },
  {
    id: 'past-4',
    sport: 'Football',
    title: 'AS Romainville vs Le Raincy AC',
    score: '0 – 0',
    date: 'Sam. 6 sept.',
    hasReplay: true,
  },
]

export { LIVE_EVENTS, UPCOMING_EVENTS, PAST_EVENTS }
