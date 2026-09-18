import { useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  const [view, setView] = useState('home')

  if (view === 'login') {
    return <LoginPage onNavigateHome={() => setView('home')} />
  }

  return <LandingPage onNavigateLogin={() => setView('login')} />
}

export default App
