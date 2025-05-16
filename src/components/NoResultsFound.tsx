"use client";

import React from "react";

interface NoResultsFoundProps {
  searchQuery: string;
  onReset: () => void;
}

export default function NoResultsFound({
  searchQuery,
  onReset,
}: NoResultsFoundProps) {
  return (
    <div className="text-center py-16 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
      <p className="text-2xl text-gray-500 font-medium">
        No Pokémon found matching &apos;{searchQuery}&apos;
      </p>
      <button
        onClick={onReset}
        className="mt-4 px-5 py-2 rounded-md bg-blue-400 text-white cursor-pointer hover:bg-blue-500 transition duration-300"
      >
        Back to all Pokémon
      </button>
    </div>
  );
}
