import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4 text-center max-w-2xl">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-12 border border-gray-100">
        <div className="relative h-44 w-44 mx-auto mb-8">
          <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
            alt="Confused Psyduck"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="pokemon-image"
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Pokémon Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, we couldn&apos;t find the Pokémon you were looking for.</p>
        
        <Link href="/" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors inline-flex items-center">
          Return to main
        </Link>
      </div>
    </div>
  );
}
