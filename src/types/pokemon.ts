export interface PokemonBasic {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonAttack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttacks {
  fast: PokemonAttack[];
  special: PokemonAttack[];
}

export interface PokemonDimension {
  minimum: string;
  maximum: string;
}

export interface PokemonDetailed extends PokemonBasic {
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  attacks: PokemonAttacks;
  evolutions: PokemonBasic[] | null;
}
