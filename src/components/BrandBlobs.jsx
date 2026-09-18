function SwooshLine({ path, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path
        d={path}
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

function HeroBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block">
      <div className="absolute -top-16 -right-24 h-72 w-72 rounded-full bg-sa-gold" />
      <div className="absolute top-28 -right-8 h-36 w-36 rounded-full bg-sa-blue" />
      <SwooshLine
        path="M6 74Q40 96 78 62"
        className="absolute -top-16 -right-24 h-72 w-72"
      />
    </div>
  )
}

function LoginBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sa-gold" />
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sa-blue" />
      <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sa-red" />
      <div className="absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-sa-gold" />
      <SwooshLine
        path="M8 46Q34 12 70 22"
        className="absolute -top-24 -left-24 h-72 w-72"
      />
      <SwooshLine
        path="M20 82Q50 96 88 66"
        className="absolute -right-20 -bottom-28 h-72 w-72"
      />
    </div>
  )
}

export { HeroBlobs, LoginBlobs }
