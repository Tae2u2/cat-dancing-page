import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const DancingCat = () => {
  const [isDancing, setIsDancing] = useState(false)

  const toggleDancing = () => {
    setIsDancing(!isDancing)
  }

  return (
    <div className="dancing-cat-container">
      <div className="stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isDancing ? 'dancing' : ''}`}
        />

        <div className="sparkles">
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          <div className="sparkle sparkle-4"></div>
          <div className="sparkle sparkle-5"></div>
          <div className="sparkle sparkle-6"></div>
        </div>
      </div>

      <div className="controls">
        <button
          onClick={toggleDancing}
          className={`dance-button ${isDancing ? 'stop' : 'start'}`}
        >
          {isDancing ? '⏸️ Stop Dancing' : '💃 Start Dancing'}
        </button>

        <div className="music-note">
          {isDancing && <span className="note">♪♫♪♫</span>}
        </div>
      </div>
    </div>
  )
}

export default DancingCat