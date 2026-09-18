function FootballIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 7.5l3.5 2.6-1.3 4.1h-4.4l-1.3-4.1L12 7.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 3v4.5M6 9l-2.8-1M18 9l2.8-1M8.8 14.2L6.5 20M15.2 14.2l2.3 5.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function BasketballIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5.3 5.3a9 9 0 000 13.4M18.7 5.3a9 9 0 010 13.4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function HandballIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 3.6c2 1.8 3.2 4.9 3.2 8.4s-1.2 6.6-3.2 8.4c-2-1.8-3.2-4.9-3.2-8.4S10 5.4 12 3.6z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M3.4 9.5h17.2M3.4 14.5h17.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function GymRingsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 3v6M18 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="6" cy="14" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="14" r="4.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function AthleteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="14.5" cy="4.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 21l2.4-6.2L7 12.4l1.6-4.6 4-1 2.4 3 3.6 1.2-.8 2.3-3.4-1-1 2.7 3.6 3.2-1.6 1.9-3.8-3.4-1.6 4.3H8z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

const SPORT_ICONS = {
  Football: FootballIcon,
  Basket: BasketballIcon,
  Hand: HandballIcon,
  Gym: GymRingsIcon,
}

const SPORT_COLORS = {
  Football: 'sa-blue',
  Basket: 'sa-gold',
  Hand: 'sa-red',
  Gym: 'sa-blue',
}

export { SPORT_ICONS, SPORT_COLORS, AthleteIcon }
