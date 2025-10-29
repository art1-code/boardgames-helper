import { useState } from 'react'
import DiceSection from './components/DiceSection'
import LifeCounterSection from './components/LifeCounterSection'
import AIWordsSection from './components/AIWordsSection'
import HomeSection from './components/HomeSection'
import './styles.css'

const TABS = [
  { id: 'home', label: 'Início' },
  { id: 'dados', label: 'Dados' },
  { id: 'vida', label: 'Vida' },
  { id: 'ia', label: 'IA (Mock)' },
] as const

type TabId = typeof TABS[number]['id']

export default function App() {
  const [tab, setTab] = useState<TabId>('home')

  return (
    <div className="container">
      <div className="header">
        <div className="title">Auxílio a Jogos de Mesa</div>
        <div className="nav">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'home' && <HomeSection onNavigate={(t) => setTab(t)} />}
      {tab === 'dados' && <DiceSection />}
      {tab === 'vida' && <LifeCounterSection />}
      {tab === 'ia' && <AIWordsSection />}
    </div>
  )
}
