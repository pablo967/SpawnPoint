export type Platform = 'PlayStation' | 'Xbox' | 'PC' | 'Nintendo';

export interface Game {
    id: number;
    title: string;
    description: string;
    platforms: Platform[];
    image: string;
    price: number;
}

export function getGameById(id: number): Game | undefined {
    const allGames = [...recommendedGames, ...upcomingReleases, ...topRatedGames];
    return allGames.find(game => game.id === id);
}

export const recommendedGames: Game[] = [
    { id: 1, title: 'Monster Hunter: World - Iceborne Master Edition', description: 'Aventura épica de caza en un vasto mundo abierto lleno de desafíos.', platforms: ['PlayStation', 'PC'], price: 49.99, image: "/images/monster.jpg" },
    { id: 2, title: 'Metaphor: ReFantazio', description: 'Un juego de rol y fantasía con un impresionante mundo de diseño único.', platforms: ['Xbox'], price: 59.99, image: "/images/meta.jpg" },
    { id: 3, title: 'Darksiders Genesis', description: 'Acción intensa en un universo postapocalíptico, controlando a dos jinetes del apocalipsis.', platforms: ['Nintendo', 'PC'], price: 39.99, image: "/images/dark.jpg" },
    { id: 4, title: 'Murky Divers', description: 'Explora el misterioso mundo submarino y descubre sus secretos.', platforms: ['PlayStation', 'Xbox'], price: 29.99, image: "/images/Murky Divers.jpg" },
    { id: 5, title: 'Steelrising', description: 'Un desafiante RPG en una historia alternativa de la Revolución Francesa.', platforms: ['PlayStation', 'PC'], price: 54.99, image: "/images/Steelrising.jpg"},
    { id: 6, title: 'Banishers: Ghosts of New Eden', description: 'Sumérgete en un juego de aventuras con espíritus y criaturas sobrenaturales.', platforms: ['Xbox'], price: 44.99, image: "/images/Banishers.jpg" },
    { id: 7, title: 'Farming Simulator 25', description: 'Experimenta la vida de granjero con gráficos realistas y mecánicas de simulación.', platforms: ['Nintendo', 'PC'], price: 34.99, image: "/images/Farming.jpg" },
    { id: 8, title: 'God of War: Ragnarök', description: 'Kratos y Atreus vuelven en una épica continuación de su saga mitológica.', platforms: ['PlayStation', 'Xbox'], price: 69.99, image: "/images/God.jpg" },
];

export const upcomingReleases: Game[] = [
    { id: 9, title: 'Planet Coaster 2', description: 'Crea y gestiona el parque de diversiones definitivo con herramientas avanzadas.', platforms: ['PlayStation', 'PC'], price: 49.99, image: "/images/planet.jpg" },
    { id: 10, title: 'Taiko no Tatsujin', description: 'Disfruta de este juego de ritmo con tambores y música al estilo japonés.', platforms: ['Xbox'], price: 29.99, image: "/images/taiko.jpg" },
    { id: 11, title: 'Assassins Creed Shadows', description: 'Una nueva historia en el mundo de Assassin\'s Creed, cargada de intriga y aventura.', platforms: ['Nintendo', 'PC'], price: 59.99, image: "/images/assa.jpg" },
    { id: 12, title: 'Hades 2', description: 'Continúa la aventura en el inframundo con nuevos desafíos y dioses.', platforms: ['PlayStation', 'Xbox'], price: 49.99, image: "/images/hades.jpg" },
    { id: 13, title: 'Sonic Rumble', description: 'El veloz erizo azul vuelve en una aventura de plataformas vibrante.', platforms: ['Nintendo', 'PC'], price: 39.99, image: "/images/sonic.jpg" },
    { id: 14, title: 'The Vigilante Diaries', description: 'Sumérgete en la acción como un vigilante en una ciudad oscura y peligrosa.', platforms: ['PlayStation', 'Xbox'], price: 44.99, image: "/images/the.png"  },
    { id: 15, title: 'Ark 2', description: 'Sobrevive en un mundo prehistórico lleno de dinosaurios y peligros naturales.', platforms: ['Nintendo', 'PC'], price: 59.99, image: "/images/ark.jpg" },
    { id: 16, title: 'Dying Light 2', description: 'Supervivencia en un mundo postapocalíptico lleno de zombies y acción de parkour.', platforms: ['PlayStation', 'Xbox'], price: 69.99, image: "/images/Dying.jpg" },
];

export const topRatedGames: Game[] = [
    { id: 17, title: 'The Witcher 3: Wild Hunt', description: 'Únete a Geralt en un vasto mundo de fantasía lleno de monstruos y misterios.', platforms: ['PlayStation', 'PC'], price: 29.99, image: "/images/wit.jpg"  },
    { id: 18, title: 'Halo Infinite', description: 'Master Chief regresa en una nueva misión para salvar la humanidad.', platforms: ['Xbox'], price: 59.99, image: "/images/halo.jpg" },
    { id: 19, title: 'Breath of the Wild', description: 'Una aventura épica en el vasto mundo abierto de Hyrule.', platforms: ['Nintendo', 'PC'], price: 49.99, image: "/images/breath.jpg" },
    { id: 20, title: 'Red Dead Redemption 2', description: 'Explora el salvaje oeste en esta épica historia de forajidos.', platforms: ['PlayStation', 'Xbox'], price: 39.99, image: "/images/red.jpg" },
    { id: 21, title: 'Cyberpunk 2077', description: 'Una historia inmersiva en un mundo futurista distópico.', platforms: ['PlayStation', 'PC'], price: 44.99, image: "/images/cyberpunk.jpg" },
    { id: 22, title: 'Forza Horizon 5', description: 'Corre a través de hermosos paisajes en el festival de autos definitivo.', platforms: ['Xbox'], price: 59.99, image: "/images/forza.jpg" },
    { id: 23, title: 'Super Smash Bros. Ultimate', description: 'El juego de lucha definitivo con personajes icónicos de Nintendo.', platforms: ['Nintendo', 'PC'], price: 59.99, image: "/images/super.jpg" },
    { id: 24, title: 'Elden Ring', description: 'Un vasto mundo abierto con combates intensos y exploración.', platforms: ['PlayStation', 'Xbox'], price: 69.99, image: "/images/elden.jpg" },
];