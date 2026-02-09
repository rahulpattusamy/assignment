# ValoCoach

**Elite Performance Tracking for Valorant**

ValoCoach is a sophisticated dashboard designed for competitive Valorant players to track their performance, analyze match history, and visualize key metrics.

## Features

- **Player Profile**: Comprehensive overview including rank, account level, and peak performance stats.
- **Statistical Analysis**: Deep dive into your gameplay with metrics like Headshot %, K/D Ratio, Average Combat Score (ACS), and Win Rate.
- **Match History**: Detailed log of recent matches with round-by-round performance breakdown.
- **Performance Visualization**: Interactive charts to track your progress over time.
- **Agent & Map Metrics**: Insights into your best agents and maps.

## Tech Stack

This project is built with a modern, high-performance web stack:

- **[Next.js 16](https://nextjs.org/)**: React framework for production.
- **[React 19](https://react.dev/)**: For building interactive user interfaces.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: For type safety and better developer experience.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open(https://valocoach-mauve.vercel.app/) with your browser to see the result.

## Project Structure

- `app/`: Contains the application routes and components.
- `app/components/`: Reusable UI components like `Dashboard`, `PlayerProfile`, `StatsOverview`, etc.
- `public/`: Static assets including `player.json` (mock data).
- `types/`: TypeScript type definitions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
