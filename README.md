# Auxi­lio a Jogos de Mesa (React + TS)

Aplicativo somente frontend para auxiliar jogadores de Boardgames, Party Games e RPG.

## Funcionalidades
- Dados: d4, d6, d8, d10, d12, d20, d100 com histÃ³rico de rolagens.
- Vida: Até 16 jogadores, vida inicial configurÃ¡vel (10000 pontos de vida como limite), seleção de cor por jogador, controles de -/+ ao clicar na cor.
- IA (Mock): base de palavras filtráveis por categoria e busca.

## Rodando o projeto
```
npm install
npm run dev
```
Abra `http://localhost:5173` no navegador.

## Stack
- React 18 + TypeScript
- Vite

## Estrutura
- src/components/DiceSection.tsx
- src/components/LifeCounterSection.tsx
- src/components/AIWordsSection.tsx
- src/data/aiWords.ts
- src/types.ts
- src/styles.css
- src/App.tsx, src/main.tsx
