import { useMemo, useState } from 'react'
import type { DieType } from '../types'

const DICE: DieType[] = [4, 6, 8, 10, 12, 20, 100]

function rollDie(sides: DieType): number {
  return Math.floor(Math.random() * sides) + 1
}

export default function DiceSection() {
  const [lastDie, setLastDie] = useState<DieType | null>(null)
  const [lastRoll, setLastRoll] = useState<number | null>(null)
  const [history, setHistory] = useState<{ die: DieType; value: number; ts: number }[]>([])

  const totalRolls = useMemo(() => history.length, [history])

  function handleRoll(die: DieType) {
    const value = rollDie(die)
    setLastDie(die)
    setLastRoll(value)
    setHistory((h) => [{ die, value, ts: Date.now() }, ...h].slice(0, 20))
  }

  function clearHistory() {
    setHistory([])
  }

  return (
    <div className="card">
      <div className="row between" style={{ marginBottom: 12 }}>
        <div className="section-title">Dados</div>
        <div className="badge">Histórico: {totalRolls}</div>
      </div>

      <div className="dice-grid" style={{ marginBottom: 12 }}>
        {DICE.map((d) => (
          <button key={d} className="die" onClick={() => handleRoll(d)}>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>d{d}</div>
            <div className="roll">🎲</div>
          </button>
        ))}
      </div>

      <div className="divider" />

      <div className="row between" style={{ marginBottom: 8 }}>
        <div className="row" style={{ gap: 12 }}>
          <div className="badge">Último dado: {lastDie ? `d${lastDie}` : '-'}</div>
          <div className="badge">Resultado: {lastRoll ?? '-'}</div>
        </div>
        <button className="btn danger" onClick={clearHistory} disabled={history.length === 0}>
          Limpar histórico
        </button>
      </div>

      <div className="history">
        {history.map((h) => (
          <div key={h.ts} className="item">d{h.die}: {h.value}</div>
        ))}
      </div>
    </div>
  )
}
