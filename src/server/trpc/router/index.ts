import { router, publicProcedure } from '../trpc';

import { PokemonClient } from 'pokenode-ts';
import { getOptionsForVote } from '../../../utils/getRandomPokemon';

export const pokemonRouter = router({
  getPokemonById: publicProcedure.query(async () => {
    const [first, second] = getOptionsForVote();
    const api = new PokemonClient();
    const firstPokemon = await api.getPokemonById(first);
    const secondPokemon = await api.getPokemonById(second);
    return { firstPokemon, secondPokemon };
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
