import { useState } from 'react'
import romainvilleLogo from '../assets/romainville-logo.png'
import { LoginBlobs } from '../components/BrandBlobs.jsx'

function LoginPage({ onNavigateHome }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-sa-page px-4 py-10">
      <LoginBlobs />

      <div className="relative w-full max-w-sm rounded-2xl border border-sa-border bg-white p-8 shadow-sm">
        <button
          type="button"
          onClick={onNavigateHome}
          className="mb-6 inline-flex rounded-lg border border-sa-border bg-[#e9e4d8] p-1.5"
        >
          <img src={romainvilleLogo} alt="Ville de Romainville" className="h-8 w-auto" />
        </button>

        <h1 className="text-2xl font-extrabold text-sa-ink">Romainville</h1>
        <p className="mt-2 text-sm text-sa-muted">
          Suivez les événements sportifs de Romainville en direct.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-sa-ink">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-sa-border px-3.5 py-2.5 text-sm text-sa-ink outline-none transition-colors focus:border-sa-blue"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-sa-ink">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-sa-border px-3.5 py-2.5 text-sm text-sa-ink outline-none transition-colors focus:border-sa-blue"
            />
            <a
              href="#mot-de-passe-oublie"
              className="mt-2 block text-right text-sm font-medium text-sa-blue hover:text-sa-ink"
            >
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-sa-gold py-3 text-sm font-bold text-white transition-colors hover:brightness-95"
          >
            Se connecter
          </button>
        </form>
      </div>

      <p className="relative mt-6 text-xs font-medium text-sa-muted">
        Sportivement poussé par SPORT AMAT
      </p>
    </div>
  )
}

export default LoginPage
