import { useEffect, useMemo, useState } from 'react'
import { AI_WORDS } from '../data/aiWords'

export default function AIWordsSection() {
  const [category, setCategory] = useState<'imagem' | 'acao' | 'geral'>('imagem')
  const [difficulty, setDifficulty] = useState<'muito fácil' | 'fácil' | 'médio' | 'difícil'>('muito fácil')
  const [generated, setGenerated] = useState<{ id: number; text: string } | null>(null)

  useEffect(() => {
    // Resetar resultado ao mudar categoria/dificuldade
    setGenerated(null)
  }, [category, difficulty])

  // Apenas para contagem de opções disponíveis no gerador
  const generatorPoolCount = useMemo(() => {
    return AI_WORDS.filter((w) => w.category === category && w.difficulty === difficulty).length
  }, [category, difficulty])

  function handleGenerate() {
    const pool = AI_WORDS.filter((w) => w.category === category && w.difficulty === difficulty)
    if (pool.length === 0) {
      setGenerated(null)
      return
    }
    const idx = Math.floor(Math.random() * pool.length)
    setGenerated({ id: pool[idx].id, text: pool[idx].text })
  }

  return (
    <div className="card">
      <div className="section-title">Gerador de Palavras (Mock)</div>
      <div className="row wrap" style={{ gap: 8, marginBottom: 12 }}>
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value as 'imagem' | 'acao' | 'geral')}
          style={{ width: 180 }}
        >
          <option value="imagem">Imagem</option>
          <option value="acao">Ação</option>
          <option value="geral">Geral</option>
        </select>
        <select
          className="select"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as 'muito fácil' | 'fácil' | 'médio' | 'difícil')}
          style={{ width: 160 }}
        >
          <option value="muito fácil">Dificuldade: Muito Fácil</option>
          <option value="fácil">Dificuldade: Fácil</option>
          <option value="médio">Dificuldade: Médio</option>
          <option value="difícil">Dificuldade: Difícil</option>
        </select>
        <button className="btn primary" onClick={handleGenerate} disabled={generatorPoolCount === 0}>Gerar</button>
        <div className="badge">Opções: {generatorPoolCount}</div>
      </div>

      <div className="card" style={{ padding: 16, textAlign: 'center' }}>
        {generated ? (
          <div style={{ fontSize: 18, fontWeight: 700 }}>{generated.text}</div>
        ) : (
          <div style={{ color: 'var(--muted)' }}>Clique em "Gerar" para obter uma sugestão aleatória.</div>
        )}
      </div>
    </div>
  )
}
