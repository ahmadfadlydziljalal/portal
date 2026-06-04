# AGENTS.md - AI Agent Guide for Raya Kreasi Portal

## Project Overview
Raya Kreasi Portal is a **React 17 portfolio/showcase app** listing TMS Group's internal business systems. It's a single-page application with client-side routing, no backend API, and minimal state management.

**Tech Stack:** React 17, React Router v5, Tailwind CSS (via Craco), Headless UI, Heroicons

---

## Architecture & Key Components

### Layout Structure
- **MainLayout** (`src/layouts/MainLayout.js`): Wrapper around all pages with fixed header, nav, footer
  - Renders `<Nav>` (responsive mobile menu via Headless Disclosure)
  - Dynamic `<Header>` (title derived from pathname via `withRouter` HOC)
  - Footer with credits
  
### Pages
- **Home** (`src/pages/Home.js`): Modern portal interface with search, filter, and Card grid
  - Hero section with gradient background and description
  - Real-time search functionality (searches title, description, tags)
  - Category filter system (Operasional, Analytics, Manajemen, Compliance, etc.)
  - Results counter showing filtered vs total systems
  - Data structure: Object with system configs (title, URL, description, tags, colors, category)
  - No API calls—data is hardcoded
- **About** (`src/pages/About.js`): Placeholder page
- **NotFound** (`src/pages/NotFound.js`): Catch-all route

### Component Patterns
- **Card** (`src/components/Card.js`): Reusable project card with external link, tags, dynamic colors
  - Accepts `props` object with `background`, `textColor`, `title`, `url`, `description`, `tags`
  - Uses older `class=""` attributes (should be `className=""`)
- **Nav** (`src/components/Nav.js`): Responsive navbar with navigation array
  - Uses `NavLink` with `activeClassName` for active states
  - Hardcoded navigation items in array (non-configurable)

---

## Developer Workflows

### Local Development
```bash
yarn install          # Install dependencies
yarn start           # Start dev server at http://localhost:3000 (hot reload enabled)
yarn build           # Build for production to `/build` folder
yarn test            # Run test runner in watch mode
craco start/build    # Direct craco commands (CRA build customization)
```

### Build System Notes
- **Craco** (Create React App Configuration Override) is used instead of ejecting CRA
  - Enables Tailwind CSS via PostCSS (tailwindcss, autoprefixer plugins)
  - Config in `craco.config.js`—do not eject CRA
- **Tailwind CSS** uses PostCSS 7 compat package (legacy)
  - Purges unused styles from files in `src/**/*.js` and `public/index.html`
  - Configured in `tailwind.config.js`

### Docker Workflow
- **Development**: `docker-compose up` + Dockerfile.dev
- **Production**: Builds via Dockerfile.prod
- Base image: `node:14-alpine` (legacy, consider upgrading on next major update)

---

## Key Conventions & Code Patterns

### Data-Driven Components
- **Home.js** exemplifies data-driven render: object of card configs → mapped to `<Card>` components
- Adding new systems: Add entry to `cards` object in Home.js (no DB, no API)

### Routing
- React Router v5 pattern: `<Switch>` with `<Route>` components
- `exact` path required for "/" to avoid matching "/about"
- NavLink uses `activeClassName` prop (React Router v5 specific, not v6)

### Styling Conventions
- **Tailwind-only**: No CSS modules, styled-components, or Sass
- **Dark theme**: Primary background is `bg-gray-900`/`bg-gray-800`; content uses colored cards with dynamic `textColor`
- **Responsive breakpoints**: Use Tailwind prefixes (`hidden md:block`, `md:grid-cols-2`, etc.)
  - Example: Home grid is `grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3`
- **Color scheme**: Hardcoded in data objects (e.g., `bg-yellow-200`, `text-dark`)

### Quirks & Technical Debt
1. **Mixed JSX syntax**: Some components use lowercase `class=""` (Card.js line 7-24) instead of `className=""`
   - Fix by converting to `className=""`
2. **Header component**: Uses `withRouter` HOC instead of modern `useLocation` hook
   - Works but is React Router v5 legacy pattern
3. **Navigation hardcoded**: Nav items in array, not configurable—adding routes requires Nav.js changes
4. **No state management**: No Redux/Context—everything is prop-drilled or hardcoded

### File Organization
```
src/
├── components/     # Reusable UI components (Card, Nav, Header, Footer)
├── layouts/        # Page layout wrappers (MainLayout)
├── pages/          # Page components corresponding to routes (Home, About, NotFound)
├── App.js          # Router definition
├── index.js        # ReactDOM render
└── index.css       # Global styles (Tailwind directives)
```

---

## Integration Points & External Dependencies

### npm Dependencies
- **@headlessui/react** v1.2.0: Unstyled, accessible components (Disclosure for mobile nav)
- **@heroicons/react** v1.0.1: Outline SVG icons (BellIcon, MenuIcon, XIcon, HeartIcon, ExternalLinkIcon)
- **react-router-dom** v5.2.0: Client-side routing (devDependency—unusual placement)
- **tailwindcss** (PostCSS 7 compat): CSS framework

### No Backend Integration
- App is fully static—displays hardcoded content
- External `url` fields in card data redirect to external systems (TMS-hosted apps on rayakreasi.xyz, dzil.my.id, etc.)
- No API calls, no environment variables for backend URLs

---

## Common Tasks for Agents

### Adding a New System to Portal
1. Add entry to `cards` object in `src/pages/Home.js` with keys: `background`, `textColor`, `title`, `url`, `description`, `tags`
2. Use Tailwind color classes for `background` (e.g., `bg-blue-500`) and `textColor` (e.g., `text-white`)
3. Set external `url` to the system's hosted location

### Fixing Responsive Issues
- Edit Tailwind class strings in components (e.g., MainLayout grid, Card layout)
- Test with responsive design mode in browser DevTools (no explicit mobile viewport tests)

### Updating Navigation
- Edit `navigation` array in `Nav.js` and corresponding route logic in App.js conditional renders

---

## Important Notes for AI Agents
- **No linting config found**: ESLint extends `react-app` preset but no .eslintrc override file; follow CRA conventions
- **No testing infrastructure**: @testing-library dependencies exist but no test files—add tests before refactoring
- **Legacy stack**: React 17, React Router v5, PostCSS 7 compat—upgrading requires testing
- **No environment configuration**: Hardcoded URLs and colors; no .env file usage
