import { trpc } from '../utils/trpc';

const Home = () => {
  const { data: pokemonPair, isLoading } = trpc.pokemon.getPokemonById.useQuery(
    undefined,
    {
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  if (!pokemonPair || isLoading) {
    return;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-center text-2xl">Which Pokemon is Rounder</div>
      <div className="p-2" />
      <div className="flex max-w-2xl items-center justify-between rounded border p-8">
        <div className="h-16 w-16 bg-red-800">
          {pokemonPair.firstPokemon.name}
        </div>
        <div className="p-8">Vs</div>
        <div className="h-16 w-16 bg-red-800">
          {pokemonPair.secondPokemon.name}
        </div>
      </div>
    </div>
  );
};

export default Home;
