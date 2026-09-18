import romainvilleLogo from '../assets/romainville-logo.png'
import sportAmatLogo from '../assets/sport-amat-logo.png'

function CalendarOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-sa-muted/60">
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
  return (
    <div className="flex min-h-screen flex-col bg-sa-page">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="inline-flex rounded-lg border border-sa-border bg-[#e9e4d8] p-1.5">
            <img src={romainvilleLogo} alt="Ville de Romainville" className="h-9 w-auto" />
          </div>
          <button
            type="button"
            onClick={onNavigateLogin}
            className="text-sm font-medium text-sa-ink hover:text-sa-blue"
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
        <h1 className="text-3xl font-bold text-sa-ink sm:text-4xl">
          Le sport de Romainville, en direct
        </h1>
        <p className="mt-2 text-sa-muted">
          Suivez les événements sportifs de Romainville en direct.
        </p>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-sa-border bg-[#eef1f7]">
          <span className="absolute top-4 right-4 rounded-md bg-black/5 px-2 py-1 text-[10px] font-semibold tracking-wide text-sa-muted uppercase">
            Publicité
          </span>
          <div className="flex items-center justify-center px-10 py-20">
            <img src={sportAmatLogo} alt="Sport Amat" className="w-full max-w-md" />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center rounded-2xl border border-sa-border bg-white px-6 py-16 text-center">
          <CalendarOffIcon />
          <h2 className="mt-4 text-lg font-bold text-sa-ink">
            Aucun direct cette semaine
          </h2>
          <p className="mt-2 max-w-md text-sm text-sa-muted">
            La programmation s&apos;ouvre sept jours à l&apos;avance. Revenez bientôt pour
            suivre les prochaines rencontres.
          </p>
        </div>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm text-sa-muted">
          <span>© {new Date().getFullYear()} Romainville</span>
          <span>
            Propulsé par <span className="font-semibold text-sa-ink">SportAmat</span>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
