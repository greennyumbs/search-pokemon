import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import PokemonDetail from '@/components/PokemonDetail';
import { getClient } from '@/lib/apollo-server';
import { GET_POKEMON } from '@/lib/graphql-queries';
import { PokemonDetailed } from '@/types/pokemon';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ name: string }> | { name: string } 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const pokemonName = decodeURIComponent(resolvedParams.name);
  
  return {
    title: `${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} | Pokémon Search App`,
    description: `Information about the Pokémon ${pokemonName}`,
  };
}

export default async function PokemonPage({ 
  params 
}: { 
  params: Promise<{ name: string }> | { name: string } 
}) {
  const resolvedParams = await params;
  const pokemonName = decodeURIComponent(resolvedParams.name);
  
  const { data } = await getClient().query({
    query: GET_POKEMON,
    variables: { name: pokemonName },
  });
  
  if (!data.pokemon) {
    redirect('/');
  }
  
  return <PokemonDetail pokemon={data.pokemon as PokemonDetailed} />;
}
