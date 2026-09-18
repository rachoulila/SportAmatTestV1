import basketPhoto from '../assets/photos/basket.jpg'
import footballPhoto from '../assets/photos/football.jpg'
import gymPhoto from '../assets/photos/gym.jpg'
import handPhoto from '../assets/photos/hand.jpg'

const SPORT_PHOTOS = {
  Football: footballPhoto,
  Basket: basketPhoto,
  Hand: handPhoto,
  Gym: gymPhoto,
}

const SPORT_TINTS = {
  Football: 'bg-sa-blue/25',
  Basket: 'bg-sa-gold/25',
  Hand: 'bg-sa-red/25',
  Gym: 'bg-sa-blue/25',
}

function PhotoTile({ sport, photo, tint, className = '' }) {
  const src = photo ?? SPORT_PHOTOS[sport]
  const tintClass = tint === false ? '' : (tint ?? SPORT_TINTS[sport] ?? 'bg-sa-blue/20')

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt="" className="h-full w-full object-cover" />
      {tintClass && <div className={`absolute inset-0 ${tintClass}`} />}
    </div>
  )
}

export default PhotoTile
