import { useState } from 'react'
import romainvilleLogo from '../assets/romainville-logo.png'
import sportAmatLogo from '../assets/sport-amat-logo.png'
import { HeroBlobs } from '../components/BrandBlobs.jsx'
import Pill from '../components/Pill.jsx'

const SPORTS = ['Tous les sports', 'Football', 'Basket', 'Hand', 'Gym']

function CalendarOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-sa-blue">
      <path
        d="M8 2v3M16 2v3M3.5 8h13M20.5 8v9a2.5 2.5 0 01-2.5 2.5H6A2.5 2.5 0 013.5 17V6.5A2.5 2.5 0 016 4h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 11.5l5 5m0-5l-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LandingPage({ onNavigateLogin }) {
  const [activeSport, setActiveSport] = useState(SPORTS[0])

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
          <div className="relative py-6 sm:max-w-lg">
            <Pill tone="gold">Diffusion en direct</Pill>
            <h1 className="mt-4 text-3xl font-extrabold text-balance text-sa-ink sm:text-4xl">
              Le sport de Romainville, en direct
            </h1>
            <p className="mt-3 text-sa-muted">
              Suivez les événements sportifs de Romainville en direct.
            </p>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-2xl border border-sa-border bg-white">
          <Pill tone="muted" className="absolute top-4 right-4 normal-case">
            Publicité
          </Pill>
          <div className="flex items-center justify-center px-10 py-16">
            <img src={sportAmatLogo} alt="Sport Amat" className="w-full max-w-md" />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-bold text-sa-ink">Programme de la semaine</h2>

          <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="mt-4 flex flex-col items-center rounded-2xl border border-sa-border bg-white px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sa-blue/10">
              <CalendarOffIcon />
            </div>
            <h3 className="mt-4 text-lg font-bold text-sa-ink">
              Aucun direct cette semaine
            </h3>
            <p className="mt-2 max-w-md text-sm text-sa-muted">
              La programmation s&apos;ouvre sept jours à l&apos;avance. Revenez bientôt pour
              suivre les prochaines rencontres.
            </p>
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
