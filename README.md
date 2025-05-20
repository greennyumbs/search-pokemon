## Author
Thanatat Sincharoen

## Getting Started
First, run:
```bash
npm install
# or
yarn install
```

Then run development server:
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with browser to see the application.

## Project Structure

```bash
src/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with Apollo Provider
│   └── page.tsx          # Home page with Pokemon list and search
├── components/           # React components
│   ├── ErrorMessage.tsx  # Error display component
│   ├── NoResultsFound.tsx# No search results component
│   ├── PokemonCard.tsx   # Pokemon card component for the list
│   ├── PokemonDetail.tsx # Detailed Pokemon information component
│   └── SearchBar.tsx     # Search input component
├── lib/                  # Utility functions and configurations
│   ├── apollo-client.ts  # Apollo Client setup
│   └── graphql-queries.ts# GraphQL query definitions
└── types/                # TypeScript type definitions
    └── pokemon.ts        # Pokemon data interfaces
```

## Testing
Run the test with:
```bash
npm test
```