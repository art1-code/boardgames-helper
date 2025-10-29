type Props = {
  onNavigate: (tab: 'dados' | 'vida' | 'ia') => void
}

export default function HomeSection({ onNavigate }: Props) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div className="hero">
        <h1 className="hero-title">Boardgames Helper</h1>
        <p className="hero-subtitle">
          Uma suíte simples para agilizar suas partidas: role dados, controle a vida de jogadores
          e consulte uma base mock de palavras para inspirações rápidas.
        </p>
      </div>

      <div className="grid" style={{ marginTop: 12 }}>
        <button className="feature-card" onClick={() => onNavigate('dados')}>
          <div className="feature-icon">🎲</div>
          <div className="feature-title">Dados</div>
          <div className="feature-desc">Role d4, d6, d8, d10, d12, d20 e d100, com histórico.</div>
        </button>

        <button className="feature-card" onClick={() => onNavigate('vida')}>
          <div className="feature-icon">❤️</div>
          <div className="feature-title">Contador de Vida</div>
          <div className="feature-desc">Gerencie vida de até 16 jogadores com cores e ajustes rápidos.</div>
        </button>

        <button className="feature-card" onClick={() => onNavigate('ia')}>
          <div className="feature-icon">✨</div>
          <div className="feature-title">IA (Mock)</div>
          <div className="feature-desc">Busque palavras por categoria em uma base mock para ideias.</div>
        </button>
      </div>
    </div>
  )
}


