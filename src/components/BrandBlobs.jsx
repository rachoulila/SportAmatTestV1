function SwooshLine({ path, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path
        d={path}
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}

function HeroBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block">
      <div className="absolute -top-16 -right-24 h-72 w-72 rounded-full bg-sa-gold" />
      <div className="absolute top-28 -right-8 h-36 w-36 rounded-full bg-sa-blue" />
      <div className="absolute top-6 right-40 h-12 w-12 rounded-full bg-sa-red" />
      <div className="absolute top-40 right-64 h-6 w-6 rounded-full bg-sa-blue" />
      <div className="absolute -bottom-6 right-16 h-10 w-10 rounded-full bg-sa-red" />
      <SwooshLine
        path="M6 74Q40 96 78 62"
        className="absolute -top-16 -right-24 h-72 w-72"
      />
      <SwooshLine
        path="M30 10Q10 40 34 58"
        className="absolute -top-16 -right-24 h-72 w-72"
      />
    </div>
  )
}

function LoginBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-28 -left-16 h-80 w-80 rounded-full bg-sa-gold" />
      <div className="absolute top-10 -right-28 h-52 w-52 rounded-full bg-sa-blue" />
      <div className="absolute top-1/2 -right-10 h-16 w-16 rounded-full bg-sa-red" />
      <div className="absolute bottom-1/3 -left-6 h-10 w-10 rounded-full bg-sa-blue" />
      <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-sa-red" />
      <div className="absolute -right-24 -bottom-16 h-60 w-60 rounded-full bg-sa-gold" />

      <SwooshLine
        path="M4 30Q34 4 62 18"
        className="absolute -top-28 -left-16 h-80 w-80"
      />
      <SwooshLine
        path="M40 92Q66 74 58 44"
        className="absolute -top-28 -left-16 h-80 w-80"
      />
      <SwooshLine
        path="M20 78Q46 96 84 70"
        className="absolute top-10 -right-28 h-52 w-52"
      />
      <SwooshLine
        path="M10 60Q40 84 76 66"
        className="absolute -bottom-32 left-1/4 h-72 w-72"
      />
      <SwooshLine
        path="M14 20Q40 6 70 24"
        className="absolute -right-24 -bottom-16 h-60 w-60"
      />
    </div>
  )
}

export { HeroBlobs, LoginBlobs }
