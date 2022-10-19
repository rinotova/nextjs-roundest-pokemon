// src/server/router/_app.ts
import { router } from '../trpc';

import { pokemonRouter } from './';

export const appRouter = router({
  pokemon: pokemonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
