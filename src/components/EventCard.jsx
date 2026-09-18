import PhotoTile from './PhotoTile.jsx'

function PlayBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
        <path d="M8 5v14l11-7z" />
      </svg>
      Replay disponible
    </span>
  )
}

function EventCard({ event, kind }) {
  return (
    <div className="w-64 shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5">
      <div className="relative">
        <PhotoTile sport={event.sport} className="h-36 w-full" />

        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-sa-ink">
          {event.sport}
        </span>

        {kind === 'live' && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-sa-red px-2.5 py-1 text-[11px] font-bold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            DIRECT
          </span>
        )}

        {kind === 'past' && event.hasReplay && (
          <span className="absolute bottom-3 left-3">
            <PlayBadge />
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm leading-snug font-bold text-sa-ink">{event.title}</h3>

        {kind === 'upcoming' && (
          <p className="mt-1.5 text-xs text-sa-muted">
            {event.date} · {event.time} · {event.place}
          </p>
        )}

        {kind === 'past' && (
          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-xs text-sa-muted">{event.date}</span>
            <span className="text-sm font-bold text-sa-ink">{event.score}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventCard
