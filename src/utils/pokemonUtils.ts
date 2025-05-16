import { PokemonDetailed } from '../types/pokemon';

// Check if a Pokemon has a specific type
export function hasPokemonType(pokemon: PokemonDetailed, type: string): boolean {
  return pokemon.types.includes(type);
}
