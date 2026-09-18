import { useState } from 'react'
import heroPhoto from '../assets/photos/hero-volleyball.jpg'
import romainvilleLogo from '../assets/romainville-logo.png'
import sportAmatLogo from '../assets/sport-amat-logo.png'
import { HeroBlobs } from '../components/BrandBlobs.jsx'
import Carousel from '../components/Carousel.jsx'
import EventCard from '../components/EventCard.jsx'
import Pill from '../components/Pill.jsx'
import PhotoTile from '../components/PhotoTile.jsx'
import { LIVE_EVENTS, PAST_EVENTS, UPCOMING_EVENTS } from '../data/events.js'

const SPORTS = ['Tous les sports', 'Football', 'Basket', 'Hand', 'Gym']

function filterBySport(events, sport) {
  if (sport === 'Tous les sports') return events
  return events.filter((event) => event.sport === sport)
}

function EmptySection({ label }) {
  return (
    <p className="rounded-2xl bg-sa-blue/5 px-6 py-10 text-center text-sm text-sa-muted">
      {label}
    </p>
  )
}

function LandingPage({ onNavigateLogin }) {
  const [activeSport, setActiveSport] = useState(SPORTS[0])

  const liveEvents = filterBySport(LIVE_EVENTS, activeSport)
  const upcomingEvents = filterBySport(UPCOMING_EVENTS, activeSport)
  const pastEvents = filterBySport(PAST_EVENTS, activeSport)

  return (
    <div className="flex min-h-screen flex-col bg-sa-page">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <img src={romainvilleLogo} alt="Ville de Romainville" className="h-9 w-auto" />
          <button
            type="button"
            onClick={onNavigateLogin}
            className="text-sm font-semibold text-sa-ink hover:text-sa-blue"
          >
            Connexion
          </button>
        </div>
      </header>

      <div className="flex h-1">
        <div className="flex-1 bg-sa-red" />
        <div className="flex-1 bg-sa-gold" />
        <div className="flex-1 bg-sa-blue" />
      </div>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl">
          <HeroBlobs />
          <div className="relative flex flex-col items-start gap-8 py-6 sm:flex-row sm:items-center">
            <div className="sm:max-w-md">
              <Pill tone="gold">Direct · Replay · Photos</Pill>
              <h1 className="mt-4 text-3xl font-extrabold text-balance text-sa-ink sm:text-4xl">
                Le sport de Romainville, en direct
              </h1>
              <p className="mt-3 text-sa-muted">
                La plateforme vidéo des clubs et associations sportives de
                Romainville : matchs en direct, replays et photos des
                rencontres, au même endroit.
              </p>
            </div>
            <div className="relative mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sa-gold" />
              <div className="absolute -bottom-5 -left-5 h-14 w-14 rounded-full bg-sa-red" />
              <PhotoTile
                photo={heroPhoto}
                tint={false}
                className="relative aspect-square w-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {SPORTS.map((sport) => {
            const isActive = sport === activeSport
            return (
              <button
                key={sport}
                type="button"
                onClick={() => setActiveSport(sport)}
                className={
                  isActive
                    ? 'rounded-full bg-sa-gold px-4 py-2 text-sm font-bold text-white transition-colors'
                    : 'rounded-full border border-sa-border bg-white px-4 py-2 text-sm font-semibold text-sa-muted transition-colors hover:border-sa-gold/40 hover:text-sa-ink'
                }
              >
                {sport}
              </button>
            )
          })}
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-sa-ink">En ce moment</h2>
          <div className="mt-4">
            {liveEvents.length > 0 ? (
              <Carousel>
                {liveEvents.map((event) => (
                  <EventCard key={event.id} event={event} kind="live" />
                ))}
              </Carousel>
            ) : (
              <EmptySection label="Aucun direct en ce moment. La programmation s'ouvre sept jours à l'avance : revenez bientôt !" />
            )}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-sa-ink">Événements à venir</h2>
          <div className="mt-4">
            {upcomingEvents.length > 0 ? (
              <Carousel>
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} kind="upcoming" />
                ))}
              </Carousel>
            ) : (
              <EmptySection label="Aucun événement à venir pour ce sport." />
            )}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-sa-ink">Événements passés</h2>
          <div className="mt-4">
            {pastEvents.length > 0 ? (
              <Carousel>
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} kind="past" />
                ))}
              </Carousel>
            ) : (
              <EmptySection label="Aucun événement passé pour ce sport." />
            )}
          </div>
        </section>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-sa-blue/5 to-sa-gold/5">
          <Pill tone="muted" className="absolute top-4 right-4 normal-case">
            Publicité
          </Pill>
          <div className="flex items-center justify-center px-10 py-16">
            <img src={sportAmatLogo} alt="Sport Amat" className="w-full max-w-md" />
          </div>
        </div>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm text-sa-muted">
          <span>© {new Date().getFullYear()} Romainville</span>
          <span>
            Propulsé par <span className="font-bold text-sa-ink">SportAmat</span>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
