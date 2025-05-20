import { Suspense } from "react";
import PokemonDisplay from "@/components/PokemonDisplay";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-gray-600 mt-2">Loading Page...</p>
        </div>
      }
    >
      <PokemonDisplay />
    </Suspense>
  );
}
