## Mini Events Explorer (Next.js + TypeScript)

A responsive events listing app demonstrating routing, static generation, client-side filtering, and accessible UI using Next.js 15 (App Router) and Tailwind CSS.

### Features

- Event list with 8 mock events
- Client-side filter by location
- Dynamic event detail route at `/events/[id]`
- Pre-generated static pages via `generateStaticParams`
- SEO metadata via `app/layout.tsx` and event-specific metadata
- Semantic HTML, keyboard-friendly controls, responsive design

### Tech

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4
- No external UI kit

### Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Folder Structure

```
explorer-app/
  app/
    components/
      EventCard.tsx
      FilterBar.tsx
      Layout.tsx
    data/
      events.ts
    events/
      [id]/
        page.tsx
    layout.tsx
    page.tsx
  public/
    images/
      ...mock images
  README.md
```

### Mock Data

Defined in `app/data/events.ts` with helper functions.

### Improvements (future)

- Add search by title/description
- Add pagination and sorting
- Add unit tests (React Testing Library)
- Add dark mode toggle and persisted preference
