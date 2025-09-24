import DancingCat from './components/DancingCat'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Dancing Cat Paradise 🐱</h1>
        <p>Watch the magical dancing cat show!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
