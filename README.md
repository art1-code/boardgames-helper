# Auxi­lio a Jogos de Mesa (React + TS)

Aplicativo somente frontend para auxiliar jogadores (principalmente minha esposa) de Boardgames, Party Games e RPG.

## Motivação

Minha esposa adora jogar Imagem&Ação, poderem não temos boardgamem nem conseguimos comprar. Então resolvi escrever esse
programinha simples, porém que resolve o que minha esposa desejava. Agora ela pode gerar palavras aleatorias, escolhendo
o nível de dificuldade, sem precisar baixar mais um app cheio de propagandas e com palavras limitadas.

## Funcionalidades
- Dados: d4, d6, d8, d10, d12, d20, d100 com histÃ³rico de rolagens.
- Vida: Até 16 jogadores, vida inicial configurÃ¡vel (10000 pontos de vida como limite), seleção de cor por jogador, controles de -/+ ao clicar na cor.
- IA (Mock): base de palavras filtráveis por categoria e busca. A maior solicitação da minha esposa era uma base imensa de palavras aleatorias e dei isso a ela. Aliás, podemos colocar ainda mais palavras dentro

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
