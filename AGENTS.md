# AGENTS.md

This file provides guidance to coding agents (Claude Code and others) when working with code in this repository.

## Project Overview

This is an interactive map application for The Church of Jesus Christ of Latter-day Saints building at 23 Lake Rd, Irvine, CA. The building is a large dual-chapel facility that can be difficult to navigate. The app displays a floor plan with room highlighting and scenario-based navigation for various meetings and events.

## Tech Stack

- **Framework**: Next.js 16 (Pages Router, Turbopack enabled by default)
- **Language**: TypeScript 6.x (strict mode) — see TypeScript Notes below before bumping to a 7.x release
- **Styling**: Tailwind CSS v4 (configured via `@theme` in `src/pages/_app.css`) with custom Satoshi font
- **Interactive Map**: react-svg-pan-zoom for pan/zoom functionality
- **Deployment**: Vercel (https://23lake.vercel.app/)

## Development Commands

Uses `pnpm` as the package manager:

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
```

**Note**: This project uses `nvm` for Node.js version management. Run `nvm use` before working.

## Architecture

### Map Rendering System

The core of the application is an SVG-based floor plan renderer:

- **src/components/map/data.ts**: Single source of truth for building layout
  - `buildingData` contains all room coordinates, labels, and hallways
  - `scenarios` defines meeting times and room assignments
  - Room coordinates use pixel-based positioning system
  - Colors are defined by HSL hue values for different room types

- **src/components/map/Building.tsx**: Main SVG composition
  - Renders halls, rooms, and labels as SVG elements
  - Handles room selection logic based on active scenario
  - Fixed canvas size: 1178x900px

- **src/components/Viewer.tsx**: Pan/zoom wrapper
  - Uses react-svg-pan-zoom for interactive navigation
  - Dynamically sized to window dimensions
  - Configured zoom limits: 0.2x to 2x

### Component Structure

- **src/pages/index.tsx**: Main page with scenario toggle
  - Dynamically imports Viewer (SSR disabled for SVG pan/zoom)
  - Manages scenario selection state
  - Shows scenario list or interactive map

- **src/components/ScenarioList.tsx**: Meeting schedule display
  - Lists all available meeting scenarios
  - Allows users to select and highlight specific events

- **src/components/map/Room.tsx**: Individual room rendering
  - SVG rect with HSL-based coloring
  - Font size variants for different room sizes
  - Selection state changes room appearance

### Path Aliases

Uses `@/*` as alias for `src/*` (configured in tsconfig.json)

## Key Implementation Details

### Room Data Structure

Each room in `buildingData.rooms` requires:
- `dimensions`: {left, top, right, bottom} in pixels
- `color`: HSL hue value (0-360)
- `name`: Display label (optional for walls/spacers)
- `id`: Optional unique identifier
- `fontSize`: Optional 'sm' or 'lg' for label sizing

### Color System

Room colors use HSL hue values for semantic grouping:
- Bishop offices: 1-40
- Kitchen: 80
- Library: 110
- Chapels: 40-160
- Bathrooms: 200
- Nursery: 230-240
- Primary: 240
- Classrooms: 250

### Scenario Highlighting

When a scenario is active, rooms listed in `scenario.rooms` are rendered with selection styling. Room matching uses exact string comparison against the `name` field.

## Development Notes

- The blueprint image (public/blueprint.jpeg) is used as a visual reference but not rendered in production
- Room coordinates were likely measured from the blueprint and need precise pixel values
- Adding new rooms requires updating the `buildingData.rooms` array in data.ts
- The building has two sides: "Ocean Side" and "Creek Side" (labeled in the map)

### TypeScript Notes

- TypeScript is pinned to the 6.x line, not the native-compiler 7.x line. As of TS 7.0.2, `typescript-eslint` (the parser/plugin behind `eslint-config-next`'s TS linting) still declares `peerDependencies.typescript: <6.1.0` and its maintainers closed cross-tracking issues for TS7 as not planned, since TS 7.0 ships without the stable programmatic compiler API that typescript-estree depends on — installing TS7 here makes ESLint crash on startup. Re-check `npm view @typescript-eslint/eslint-plugin peerDependencies` before attempting a 7.x upgrade.
- `tsconfig.json`'s `"types": ["node"]` is required, not optional: TypeScript 6.0 changed the default `types` array from "all installed `@types/*` packages" to `[]`, so anything relying on ambient global types (e.g. `process.env` in `src/components/utils.ts`) needs its `@types/*` package listed explicitly here.
- Component files that annotate a return type as `JSX.Element` must `import { JSX } from 'react'`. React 19's `@types/react` no longer merges a bare global `JSX` namespace (it only lives under `React.JSX`), and TypeScript 6.0 dropped whatever back-compat behavior let the bare reference resolve anyway.

### Tailwind CSS v4 Notes

- `tailwind.config.js` is now minimal; theme config lives in CSS via `@theme` in `src/pages/_app.css`.
- PostCSS uses `@tailwindcss/postcss` (see `postcss.config.mjs`, ES module format); plugins are imported via `@plugin` directive in CSS.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
