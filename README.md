# NuxtBook  

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root of the project and add the following:

```bash
# .env
SUPABASE_URL=<supabase_project_url>
SUPABASE_KEY=<supabase_project_key>
UNSPLASH_API_KEY=<unsplash_api_key>
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
