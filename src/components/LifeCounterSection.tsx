import { useState } from 'react'
import type { Player } from '../types'

const MAX_PLAYERS = 16
const DEFAULT_START = 20

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

const PALETTE = [
  '#ef4444','#f59e0b','#10b981','#06b6d4','#3b82f6','#8b5cf6','#ec4899','#84cc16',
  '#f97316','#14b8a6','#22c55e','#60a5fa','#a855f7','#eab308','#f87171','#34d399'
]

export default function LifeCounterSection() {
  const [playerCount, setPlayerCount] = useState<number>(4)
  const [startLife, setStartLife] = useState<number>(DEFAULT_START)
  const [players, setPlayers] = useState<Player[]>(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Jogador ${i + 1}`,
      color: PALETTE[i % PALETTE.length],
      life: DEFAULT_START,
      controlsOpen: false,
    }))
  )

  function applyPlayerCount(count: number) {
    const next = clamp(count, 1, MAX_PLAYERS)
    setPlayerCount(next)
    setPlayers((prev) => {
      const base = Array.from({ length: next }, (_, i) => {
        const existing = prev[i]
        if (existing) return existing
        return {
          id: i + 1,
          name: `Jogador ${i + 1}`,
          color: PALETTE[i % PALETTE.length],
          life: startLife,
          controlsOpen: false,
        }
      })
      return base
    })
  }

  function applyStartLife(value: number) {
    const next = clamp(value, 0, 10000)
    setStartLife(next)
    setPlayers((prev) => prev.map((p) => ({ ...p, life: next })))
  }

  function setColor(id: number, color: string) {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, color } : p)))
  }

  function toggleControls(id: number) {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, controlsOpen: !p.controlsOpen } : p)))
  }

  function changeLife(id: number, delta: number) {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, life: clamp(p.life + delta, 0, 10000) } : p)))
  }

  return (
    <div className="card">
      <div className="section-title">Contador de Vida</div>

      <div className="row wrap" style={{ gap: 8, marginBottom: 12 }}>
        <div className="row" style={{ gap: 8 }}>
          <label className="badge">Jogadores</label>
          <input
            className="input"
            type="number"
            min={1}
            max={MAX_PLAYERS}
            value={playerCount}
            onChange={(e) => applyPlayerCount(Number(e.target.value))}
            style={{ width: 110 }}
          />
        </div>
        <div className="row" style={{ gap: 8 }}>
          <label className="badge">Vida Inicial</label>
          <input
            className="input"
            type="number"
            min={0}
            max={10000}
            value={startLife}
            onChange={(e) => applyStartLife(Number(e.target.value))}
            style={{ width: 130 }}
          />
        </div>
      </div>

      <div className="grid">
        {players.slice(0, playerCount).map((p) => (
          <div key={p.id} className="card" style={{ padding: 12 }}>
            <div className="player-card">
              <div
                className="color-dot"
                title="Clique para abrir os controles"
                style={{ background: p.color }}
                onClick={() => toggleControls(p.id)}
              />
              <div>
                <div className="row between" style={{ marginBottom: 6 }}>
                  <input
                    className="input"
                    value={p.name}
                    onChange={(e) => setPlayers((prev) => prev.map((pl) => (pl.id === p.id ? { ...pl, name: e.target.value } : pl)))}
                  />
                  <div className="life">{p.life}</div>
                </div>

                {p.controlsOpen && (
                  <div className="row between" style={{ gap: 8 }}>
                    <div className="controls">
                      <button className="btn" onClick={() => changeLife(p.id, -10)}>-10</button>
                      <button className="btn" onClick={() => changeLife(p.id, -1)}>-1</button>
                      <button className="btn" onClick={() => changeLife(p.id, +1)}>+1</button>
                      <button className="btn" onClick={() => changeLife(p.id, +10)}>+10</button>
                    </div>
                    <select className="select" value={p.color} onChange={(e) => setColor(p.id, e.target.value)} style={{ maxWidth: 130 }}>
                      {PALETTE.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
