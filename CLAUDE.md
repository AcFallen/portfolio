# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with hot reload (accessible on network)
- `npm run preview` - Preview production build (accessible on network)

### Build & Quality
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint on all files

## Architecture

This is a React + TypeScript portfolio website built with Vite, featuring:

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom brand colors (primary: #0ea5e9, secondary: #9333ea)
- **Internationalization**: i18next with browser language detection (English/Spanish)
- **UI Components**: Lucide React icons, Framer Motion animations
- **Code Quality**: ESLint with TypeScript and React hooks rules

### Project Structure
- **src/components/**: All React components (Navbar, Hero, Experience, Projects, Skills, Contact)
- **src/i18n.ts**: Internationalization configuration with English/Spanish translations
- **src/App.tsx**: Main app component with automatic language detection
- **public/**: Static assets including profile image

### Key Features
- **Bilingual Support**: Automatic browser language detection with fallback to English
- **Responsive Design**: Tailwind CSS with mobile-first approach
- **Component Architecture**: Modular component structure following React best practices
- **Type Safety**: Full TypeScript integration with strict configuration

### Internationalization
The app uses i18next with browser language detection. Translations are stored in src/i18n.ts with support for English and Spanish. Language detection follows this order: navigator → querystring → cookie → localStorage → sessionStorage → path → subdomain.

### Development Notes
- Components use React hooks and functional component patterns
- ESLint is configured for TypeScript with React-specific rules
- Vite dev server runs with --host flag for network accessibility
- No testing framework is currently configured