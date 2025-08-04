# Overview

Botnet Billionaire is a cyberpunk-themed idle clicker game built with modern web technologies. The project combines a React frontend with Three.js 3D capabilities, Express.js backend, and PostgreSQL database. The game features a hacker terminal aesthetic with green monospace fonts and allows players to build a botnet empire by clicking to earn "Packets" and purchasing automated botnet nodes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **3D Graphics**: Three.js integration via @react-three/fiber and @react-three/drei for potential 3D visualizations
- **UI Components**: Radix UI component library providing accessible, customizable components
- **Styling**: Tailwind CSS for utility-first styling with custom design tokens
- **State Management**: Zustand for lightweight, performant state management
- **Game Logic**: Phaser 3 integration for game rendering and mechanics (evident from index.html)
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement via Vite integration in development mode
- **Production**: Compiled to single JavaScript bundle via esbuild

## Data Storage
- **Primary Database**: PostgreSQL via Neon serverless database
- **ORM**: Drizzle ORM with migrations support in ./migrations directory
- **Schema**: Centralized in shared/schema.ts for type consistency across client/server
- **Local Storage**: Browser localStorage for game progress persistence (clicker game saves)

## Authentication & Authorization
- **User System**: Basic username/password authentication schema defined
- **Session Storage**: PostgreSQL-backed sessions for persistent login state
- **Shared Types**: Zod validation schemas for type-safe data validation

## Development & Build Process
- **Type Checking**: Strict TypeScript configuration with path aliases
- **Development Server**: Vite dev server with HMR and error overlay
- **Production Build**: Separate client (Vite) and server (esbuild) builds
- **Database Management**: Drizzle Kit for schema migrations and database operations

# External Dependencies

## Core Frameworks
- **Phaser 3**: Game engine for clicker game mechanics and rendering
- **React 18**: Frontend framework with @react-three/fiber for 3D capabilities
- **Express.js**: Backend web framework with TypeScript support

## Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Styling
- **Radix UI**: Comprehensive accessible component library
- **Tailwind CSS**: Utility-first CSS framework
- **@fontsource/inter**: Self-hosted Inter font family

## Development Tools
- **Vite**: Build tool with TypeScript and React plugins
- **esbuild**: Fast JavaScript bundler for server builds
- **TypeScript**: Static type checking and modern JavaScript features
- **Zod**: Runtime type validation and schema definition

## State & Data Management
- **Zustand**: Lightweight state management for game state
- **@tanstack/react-query**: Data fetching and caching library
- **date-fns**: Date manipulation and formatting utilities

## 3D Graphics (Optional Features)
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers and abstractions for Three.js
- **@react-three/postprocessing**: Post-processing effects for 3D scenes