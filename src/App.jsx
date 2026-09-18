import { useCallback, useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to) => {
    window.history.pushState({}, '', to)
    setPath(to)
  }, [])

  if (path === '/login') {
    return <LoginPage onNavigateHome={() => navigate('/')} />
  }

  return <LandingPage onNavigateLogin={() => navigate('/login')} />
}

export default App
