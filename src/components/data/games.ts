export type Platform = 'PlayStation' | 'Xbox' | 'PC' | 'Nintendo';

export interface Game {
    id: number;
    title: string;
    description: string;
    platforms: Platform[];
}

export const games: Game[] = [
    { id: 1, title: 'Juego 1', description: 'Descripción breve del juego 1', platforms: ['PlayStation', 'PC'] },
    { id: 2, title: 'Juego 2', description: 'Descripción breve del juego 2', platforms: ['Xbox'] },
    { id: 3, title: 'Juego 3', description: 'Descripción breve del juego 3', platforms: ['Nintendo', 'PC'] },
    { id: 4, title: 'Juego 4', description: 'Descripción breve del juego 4', platforms: ['PlayStation', 'Xbox'] },
];
