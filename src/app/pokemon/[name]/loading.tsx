export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-6 flex items-center text-primary animate-pulse">
        <span className="font-medium">{"< "}Back to list</span>
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 flex flex-col md:flex-row gap-8 items-center animate-pulse">
          <div className="relative h-72 w-72 flex items-center justify-center">
            <div className="h-40 w-40 bg-gray-100 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center"></div>
          </div>
          <div className="flex-1 space-y-6 w-full">
            <div className="h-10 w-1/3 bg-gray-200 rounded-lg"></div>

            <div className="flex flex-wrap gap-2 py-2">
              <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
            </div>

            <div className="bg-gray-50/60 backdrop-blur-sm p-5 rounded-lg border border-gray-100 space-y-6">
              <div className="h-6 w-full bg-gray-200 rounded"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex px-2">
            <div className="px-6 py-4 text-sm font-medium border-b-2 border-primary bg-white rounded-t-lg text-primary">
              Loading...
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="bg-gray-50/70 rounded-xl p-6 space-y-4 animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
