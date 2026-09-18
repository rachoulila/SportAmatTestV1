import { useState } from 'react'
import sportAmatLogo from './assets/sport-amat-logo.png'
import romainvilleLogo from './assets/romainville-logo.png'

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Vidéos', href: '#videos' },
  { label: 'Événements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
]

const FEATURES = [
  {
    title: 'Partage tes exploits',
    description:
      'Filme et publie les temps forts de tes matchs pour les faire vivre à ta communauté.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M15 10l4.55-2.4A1 1 0 0121 8.5v7a1 1 0 01-1.45.9L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Suis les événements locaux',
    description:
      'Retrouve les rencontres et tournois amateurs organisés près de chez toi, en un coup d’œil.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M8 2v4M16 2v4M3.5 9h17M5 4.5h14a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 20V6A1.5 1.5 0 015 4.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Rejoins la communauté',
    description:
      'Connecte-toi avec d’autres sportifs amateurs, clubs et associations de ta ville.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M17 20v-1.5a3.5 3.5 0 00-3.5-3.5h-5A3.5 3.5 0 005 18.5V20M20 20v-1.5a3.5 3.5 0 00-2.5-3.36M14.5 7.5a3 3 0 11-6 0 3 3 0 016 0zM17 4.14a3 3 0 010 5.72"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#accueil" className="shrink-0">
          <img src={sportAmatLogo} alt="Sport Amat" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sa-ink/70 transition-colors hover:text-sa-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-sa-red px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 md:inline-block"
        >
          Rejoindre
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-sa-ink/80 hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-sa-red px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Rejoindre
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-sa-ink">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sa-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sa-red/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-24 text-center md:py-32">
        <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase">
          Le sport amateur en vidéo
        </span>

        <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Capture, partage et vis
          <span className="text-sa-gold"> le sport amateur</span>
        </h1>

        <p className="max-w-xl text-lg text-white/70">
          Sport Amat rassemble les vidéos, résultats et événements des clubs
          et sportifs amateurs de ta région, au même endroit.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#videos"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sa-red px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M8 5v14l11-7z" />
            </svg>
            Voir les vidéos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Nous rejoindre
          </a>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-sa-ink sm:text-4xl">
          Tout le sport amateur, réuni
        </h2>
        <p className="mt-3 text-sa-ink/60">
          Une plateforme pensée pour les clubs, les sportifs et leurs
          supporters.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sa-blue/10 text-sa-blue">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-sa-ink">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-sa-ink/60">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section id="evenements" className="border-y border-black/5 bg-black/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="mb-8 text-xs font-semibold tracking-widest text-sa-ink/40 uppercase">
          Ils nous soutiennent
        </p>
        <div className="flex items-center justify-center">
          <img
            src={romainvilleLogo}
            alt="Ville de Romainville"
            className="h-12 w-auto opacity-90 grayscale transition-all hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-sa-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <img
          src={sportAmatLogo}
          alt="Sport Amat"
          className="h-8 w-auto brightness-0 invert"
        />
        <p className="max-w-md text-sm text-white/60">
          Une initiative pour donner de la visibilité au sport amateur, en
          partenariat avec la Ville de Romainville.
        </p>
        <div className="flex gap-6 text-sm text-white/70">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Sport Amat. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
