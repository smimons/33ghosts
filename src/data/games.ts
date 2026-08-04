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
    name: 'FourWord',
    subtitle: 'A lateral thinking word puzzle: find what connects four random clues',
    url: 'https://playfourword.com',
    status: 'live',
  },
  {
    id: 'dwindle',
    name: 'Dwindle (Demo)',
    subtitle: 'Clear the board. How hard can it be?',
    url: 'https://dwindle.surge.sh',
    status: 'in-development',
  },
  {
    id: 'ten-tiles',
    name: 'Ten Tiles (Demo)',
    subtitle: 'A mini crossword, just without the clues',
    url: 'https://tentiles.surge.sh',
    status: 'prototype',
  },
  {
    id: 'lg-square',
    name: 'Codename: Twindle',
    subtitle: 'A grid puzzle with many layers',
    url: null,
    status: 'concept',
  },
]
