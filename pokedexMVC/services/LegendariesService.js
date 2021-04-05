const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendaries: () => {
        const mew = new LegendaryModel(
            1, 
            'Mew', 
            "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.", 
            'Psychic',
            '/images/images/mew.svg',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',);
        const moltres = new LegendaryModel(
            2,
            'Moltres',
            "It's one of the legendary bird Pokémon.",
            'Flame',
            '/images/images/moltres.svg',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',

        );
        const articuno = new LegendaryModel(
            3,
            'Articuno',
            "It's one of the legendary bird Pokémon.",
            'Ice',
            '/images/images/articuno.svg',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',

        );
        const zapdos = new LegendaryModel(
            4,
            'Zapdos',
            "It's one of the legendary bird Pokémon.",
            'Eletric',
            '/images/images/zapdos.svg',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',

        );
        const diancie = new LegendaryModel(
            5,
            'Diancie',
            "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
            'Jewel',
            '/images/images/diancie.svg',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',

        );
        const xerneas = new LegendaryModel(
            6,
            'Xerneas',
            "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
            'Life',
            '/images/images/xerneas.svg',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',
            '100,000',

        );
            return [mew, moltres, articuno, zapdos, diancie, xerneas];
    },
    listPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.listLegendaries();
        const pokemon = pokemonList.find(item => item.name === pokemonName);
        return pokemon;
    }
}

module.exports = LegendariesService;