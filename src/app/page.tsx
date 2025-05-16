'use client';

import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { GET_POKEMONS } from '@/lib/graphql-queries';
import { PokemonBasic } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import SearchBar from '@/components/SearchBar';
import ErrorMessage from '@/components/ErrorMessage';
import NoResultsFound from '@/components/NoResultsFound';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonBasic[]>([]);

  const allPokemonAmount = 151;
  
  useEffect(() => {
    getPokemons({ variables: { first: allPokemonAmount } });
  }, [getPokemons]);
  
  useEffect(() => {
    if (data?.pokemons) {
      if (searchQuery) {
        const filtered = data.pokemons.filter((pokemon: PokemonBasic) => 
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPokemons(filtered);
      } else {
        setFilteredPokemons(data.pokemons);
      }
    }
  }, [data, searchQuery]);
  
  const handleSearch = (query: string) => {
    const params = new URLSearchParams();
    if (query) {
      params.set('search', query);
    }
    router.push(`/?${params.toString()}`);
  };
  
  const handlePokemonClick = (name: string) => {
    router.push(`/pokemon/${encodeURIComponent(name.toLowerCase())}`);
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <main className="container mx-auto px-4 py-8 sm:py-16"><div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-600 tracking-tight">
            Pokémon Search
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Search and discover your favorite Pokémon.
            View detailed information about each Pokémon&apos;s stats, attacks, and evolutions.
          </p>
        </div>
        
        <div className="mb-12">
          <SearchBar initialValue={searchQuery} onSearch={handleSearch} />
        </div>
          {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
            <p className="text-gray-600 mt-2">Loading Pokémon data...</p>
          </div>
        )}
        
        {error && (
          <ErrorMessage message={error.message} />
        )}
        
        {!loading && !error && filteredPokemons.length === 0 && (
          <NoResultsFound 
            searchQuery={searchQuery} 
            onReset={() => handleSearch('')}
          />
        )}
        
        {!loading && filteredPokemons.length > 0 && (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {searchQuery ? `Search results for "${searchQuery}"` : 'All Pokémon'}
              </h2>
              <p className="text-gray-600">{filteredPokemons.length} Pokémon found</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredPokemons.map((pokemon: PokemonBasic) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => handlePokemonClick(pokemon.name)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
