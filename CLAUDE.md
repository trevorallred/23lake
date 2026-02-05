# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive map application for The Church of Jesus Christ of Latter-day Saints building at 23 Lake Rd, Irvine, CA. The building is a large dual-chapel facility that can be difficult to navigate. The app displays a floor plan with room highlighting and scenario-based navigation for various meetings and events.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom Satoshi font
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

## Recent Updates (2026-02)

Major dependency updates were completed:
- **Next.js**: 14.2.3 → 16.1.6 (Turbopack enabled by default)
- **React**: 18.3.1 → 19.2.4
- **Tailwind CSS**: 3.4.3 → 4.1.18 (configuration now in CSS via `@theme` directive)
- **TypeScript**: 5.4.5 → 5.9.3

### Tailwind CSS v4 Changes

- Configuration moved from `tailwind.config.js` (now minimal) to CSS using `@theme` in `_app.css`
- PostCSS plugin changed to `@tailwindcss/postcss` (required for Next.js integration)
- Plugins now imported via `@plugin` directive in CSS
- PostCSS config is now `postcss.config.mjs` (ES module format)

### Removed

- `postcss-focus-visible` plugin (modern browsers have native :focus-visible support)
- Unused `/rooms/[rooms]` route (was a leftover template file)
