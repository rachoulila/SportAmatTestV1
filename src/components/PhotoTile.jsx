import { AthleteIcon, SPORT_ICONS } from './SportIcons.jsx'

const TILE_BG = {
  Football: 'bg-sa-blue',
  Basket: 'bg-sa-gold',
  Hand: 'bg-sa-red',
  Gym: 'bg-sa-blue',
}

function PhotoTile({ sport, className = '', iconClassName = 'h-14 w-14' }) {
  const Icon = SPORT_ICONS[sport] ?? AthleteIcon
  const bgClass = TILE_BG[sport] ?? 'bg-sa-blue'

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${bgClass} ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <path d="M-10 75Q35 105 115 35" stroke="white" strokeOpacity="0.22" strokeWidth="2.5" />
        <path d="M-10 40Q20 15 60 30" stroke="white" strokeOpacity="0.14" strokeWidth="2" />
      </svg>
      <Icon className={`relative text-white/30 ${iconClassName}`} />
    </div>
  )
}

export default PhotoTile
