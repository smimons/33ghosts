export type GameStatus =
  | 'live'
  | 'awaiting-launch'
  | 'in-development'
  | 'prototype'
  | 'concept'

export interface StatusMeta {
  label: string
  description: string
}

export const STATUS_META: Record<GameStatus, StatusMeta> = {
  live: {
    label: 'Live',
    description: 'Finished and playable',
  },
  'awaiting-launch': {
    label: 'Launch Pending',
    description: 'Live build, not yet announced',
  },
  'in-development': {
    label: 'In Development',
    description: 'Actively being built.',
  },
  prototype: {
    label: 'Prototype',
    description: 'Rough proof of concept',
  },
  concept: {
    label: 'Concept',
    description: 'Idea only, nothing to show yet',
  },
}

export interface Game {
  id: string
  name: string
  subtitle: string
  url: string | null
  status: GameStatus
}

// Edit this list to reflect what you're actually working on.
// `url` can be `null` for anything without a live artifact yet.
export const games: Game[] = [
  {
    id: 'math-path',
    name: 'Math Path',
    subtitle: 'A daily puzzle game where every step counts. For fans of: Countdown Numbers',
    url: 'https://playmathpath.com',
    status: 'live',
  },
  {
    id: 'four-word',
    name: 'FourWord',
    subtitle: 'Find the word that connects four random clues. For fans of: Connections.',
    url: 'https://playfourword.com',
    status: 'live',
  },
  {
    id: 'dwindle',
    name: 'Dwindle (Demo)',
    subtitle: 'A deductive grid-clearing puzzle. For fans: of Rush Hour, Klotski',
    url: 'https://dwindle.surge.sh',
    status: 'in-development',
  },
  {
    id: 'ten-tiles',
    name: 'Ten Tiles (Demo)',
    subtitle: 'A mini crossword without the clues. For fans of Scrabble, Boggle',
    url: 'https://tentiles.surge.sh',
    status: 'prototype',
  },
  {
    id: 'twindle',
    name: 'Twindle',
    subtitle: 'A logical-thinking placement puzzle. For fans of: Sudoku, KenKen',
    url: 'https://twindle.surge.sh',
    status: 'prototype',
  },
]
