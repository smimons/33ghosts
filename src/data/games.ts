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
    subtitle: 'A daily puzzle game where every step counts.',
    url: 'https://playmathpath.com',
    status: 'live',
  },
  {
    id: 'four-word',
    name: 'Four Word',
    subtitle: 'A lateral thing word puzzle: four clues, no context',
    url: 'https://playfourword.com',
    status: 'awaiting-launch',
  },
  {
    id: 'dwindle',
    name: 'Dwindle',
    subtitle: 'A match-3 you have to think about.',
    url: 'https://dwindle.surge.sh',
    status: 'prototype',
  },
  {
    id: 'mini-scrabble',
    name: 'Codename: Tessera',
    subtitle: 'A crossword without the clues',
    url: null,
    status: 'concept',
  },
  {
    id: 'lg-square',
    name: 'Codename: Sudotwo',
    subtitle: 'A grid puzzle with many layers',
    url: null,
    status: 'concept',
  },
]
