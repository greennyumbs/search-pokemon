'use client';

import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-lg shadow-sm">
      <div className="flex items-center">
        <p className="text-red-700 font-medium">
          Error loading Pokémon: {message}
        </p>
      </div>
    </div>
  );
}
