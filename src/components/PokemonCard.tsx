"use client";

import Image from "next/image";
import { PokemonBasic } from "@/types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonBasic;
  onClick: () => void;
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const getTypeColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      Normal: "bg-gray-300",
      Fire: "bg-red-500",
      Water: "bg-blue-500",
      Electric: "bg-yellow-400",
      Grass: "bg-green-500",
      Ice: "bg-blue-200",
      Fighting: "bg-red-700",
      Poison: "bg-purple-500",
      Ground: "bg-yellow-600",
      Flying: "bg-indigo-300",
      Psychic: "bg-pink-500",
      Bug: "bg-lime-500",
      Rock: "bg-yellow-700",
      Ghost: "bg-purple-700",
      Dragon: "bg-indigo-700",
      Dark: "bg-gray-800",
      Steel: "bg-gray-400",
      Fairy: "bg-pink-300",
    };

    return typeColors[type] || "bg-gray-300";
  };

  return (
    <div
      className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden cursor-pointer transition duration-300 hover:bg-gray-100 border border-gray-100"
      onClick={onClick}
    >
      <div className="relative h-52 w-full flex items-center justify-center">
        <span className="absolute top-3 left-3 text-xs font-bold bg-gray-800 text-white rounded-full px-3 py-1 shadow-sm z-20">
          #{pokemon.number}
        </span>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
          priority={pokemon.number <= "10"}
          className="pokemon-image"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold truncate capitalize mb-3">
          {pokemon.name}
        </h2>
        <div className="flex flex-wrap gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`${getTypeColor(
                type
              )} px-3 py-1 text-xs font-medium text-white rounded-full shadow-sm`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
