"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PokemonDetailed, PokemonAttack } from "@/types/pokemon";

interface PokemonDetailProps {
  pokemon: PokemonDetailed;
}

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"info" | "attacks" | "evolutions">(
    "info"
  );

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

  const handleEvolutionClick = (name: string) => {
    router.push(`/pokemon/${encodeURIComponent(name.toLowerCase())}`);
  };
  const renderAttack = (attack: PokemonAttack) => (
    <div
      key={attack.name}
      className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center border border-gray-100 hover:bg-gray-100"
    >
      <div className="flex items-center mb-3 sm:mb-0">
        <div>
          <span className="font-bold text-gray-900 text-lg">{attack.name}</span>
          <div className="flex items-center mt-1">
            <span
              className={`${getTypeColor(
                attack.type
              )} px-3 py-1 rounded-md text-sm font-medium text-white`}
            >
              {attack.type}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center border border-gray-200">
          <span className="font-bold text-lg text-gray-800">
            {attack.damage}
          </span>
          <span className="text-xs text-gray-500 ml-1">DMG</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <button
        onClick={() => router.push("/")}
        className="mb-6 flex items-center text-primary hover:text-primary-hover transition-colors"
      >
        <span className="font-medium cursor-pointer"> {"< "}Back to list</span>
      </button>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {" "}
            <div className="relative h-72 w-72 flex items-center justify-center">
              <div
                className={`absolute -bottom-2 -right-2 w-14 h-14 rounded-full ${
                  pokemon.types.length > 0
                    ? getTypeColor(pokemon.types[0])
                    : "bg-gray-700"
                } shadow-lg flex items-center justify-center text-white font-bold text-xs z-20`}
              >
                #{pokemon.number}
              </div>{" "}
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
                priority
                className="pokemon-image z-10"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold mb-4 capitalize">
                {pokemon.name}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className={`${getTypeColor(
                      type
                    )} px-4 py-2 text-sm font-medium text-white rounded-full shadow-sm`}
                  >
                    {type}
                  </span>
                ))}
              </div>
              <div className="bg-gray-50/60 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-gray-100 mb-4">
                <div className="text-gray-800 mb-4 pb-2 border-b border-gray-100">
                  <span className="font-bold text-lg">Classification:</span>{" "}
                  {pokemon.classification}
                </div>{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Height:</span>
                    {pokemon.height.minimum} - {pokemon.height.maximum}
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Weight:</span>
                    {pokemon.weight.minimum} - {pokemon.weight.maximum}
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Max CP:</span>
                    {pokemon.maxCP}
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Max HP:</span>
                    {pokemon.maxHP}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nav tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <nav className="flex px-2">
            <button
              onClick={() => setActiveTab("info")}
              className={`px-6 py-4 text-sm font-medium cursor-pointer ${
                activeTab === "info"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                  : "text-gray-500"
              }`}
            >
              Info
            </button>
            <button
              onClick={() => setActiveTab("attacks")}
              className={`px-6 py-4 text-sm font-medium cursor-pointer ${
                activeTab === "attacks"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                  : "text-gray-500"
              }`}
            >
              Attacks
            </button>
            {pokemon.evolutions && pokemon.evolutions.length > 0 && (
              <button
                onClick={() => setActiveTab("evolutions")}
                className={`px-6 py-4 text-sm font-medium cursor-pointer ${
                  activeTab === "evolutions"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                    : "text-gray-500"
                }`}
              >
                Evolutions
              </button>
            )}
          </nav>
        </div>

        {/* Tab content */}
        <div className="p-8">
          {activeTab === "info" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Strengths & Weaknesses
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50/70 to-transparent p-6 rounded-xl shadow-sm border border-green-100">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-green-800">
                    Resistant to
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {pokemon.resistant.map((type) => (
                      <span
                        key={type}
                        className={`${getTypeColor(
                          type
                        )} px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50/70 to-transparent p-6 rounded-xl shadow-sm border border-red-100">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-red-800">
                    Weak to
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {pokemon.weaknesses.map((type) => (
                      <span
                        key={type}
                        className={`${getTypeColor(
                          type
                        )} px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50/70 to-transparent rounded-xl border border-blue-100 shadow-sm">
                <p className="flex items-center text-gray-800">
                  <span className="font-medium mr-2">Flee Rate:</span>
                  <span className="text-lg font-semibold text-blue-800">
                    {pokemon.fleeRate}
                  </span>
                </p>
              </div>
            </div>
          )}
          {activeTab === "attacks" && (
            <div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Fast Attacks</h2>
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                  {pokemon.attacks.fast.map(renderAttack)}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Special Attacks</h2>
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                  {pokemon.attacks.special.map(renderAttack)}
                </div>
              </div>
            </div>
          )}
          {activeTab === "evolutions" && pokemon.evolutions && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Evolution Chain</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pokemon.evolutions.map((evolution) => (
                  <div
                    key={evolution.id}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 "
                    onClick={() => handleEvolutionClick(evolution.name)}
                  >
                    <div className="relative h-40 w-40 mb-4 flex items-center justify-center">
                      <Image
                        src={evolution.image}
                        alt={evolution.name}
                        width={140}
                        height={140}
                        style={{ objectFit: "contain" }}
                        className="pokemon-image"
                      />
                    </div>
                    <p className="text-gray-700 font-medium mb-2">
                      #{evolution.number}
                    </p>
                    <p className="font-bold text-lg text-center capitalize mb-3">
                      {evolution.name}
                    </p>
                    <div className="flex gap-2">
                      {evolution.types.map((type) => (
                        <span
                          key={type}
                          className={`${getTypeColor(
                            type
                          )} px-3 py-1.5 text-sm font-medium text-white rounded-md shadow-sm`}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
