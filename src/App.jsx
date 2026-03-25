import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import './index.css'

function App() {
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Simulate real-time updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Dashboard lastUpdate={lastUpdate} />
    </div>
  )
}

export default App
