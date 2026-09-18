const TONES = {
  gold: 'border-sa-gold/30 bg-sa-gold/10 text-[#b06b00]',
  blue: 'border-sa-blue/30 bg-sa-blue/10 text-sa-blue',
  red: 'border-sa-red/30 bg-sa-red/10 text-sa-red',
  muted: 'border-black/10 bg-black/[0.04] text-sa-muted',
}

function Pill({ tone = 'gold', children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-wide uppercase ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Pill
