This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Key features and components include:

- Authentication: User login and registration functionalities are present.
- Admin Panel: There's a dedicated section for administrative tasks, likely including content  management (like articles).
- Blogging Platform: The project includes features for displaying and managing articles or blog posts.
- Informational Pages: Pages for solutions, pricing, contact, and support indicate a public-facing website designed to inform users about the service.
- Styling: The globals.css file suggests custom styling for various sections like testimonials, hero sections, and cards.
- Database: It uses MongoDB for data storage.

## Structure project
```
├── app # Next.js 13+ application directory
│   ├── (auth) # Route group for authentication pages
│   │   ├── admin # Admin panel pages
│   │   │   ├── article # Article management pages (list, create, edit)
│   │   │   ├── layout.tsx # Layout for admin pages
│   │   │   └── page.tsx # Admin dashboard page
│   │   ├── login # Login page
│   │   │   └── page.tsx
│   │   ├── register # Register page
│   │   │   └── page.tsx
│   │   └── layout.tsx # Layout for auth pages
│   ├── (main) # Route group for main public pages
│   │   ├── blog # Blog pages
│   │   │   ├── [id] # Individual blog post page
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx # Blog list page
│   │   ├── contact # Contact page
│   │   │   └── page.tsx
│   │   ├── price # Pricing page
│   │   │   └── page.tsx
│   │   ├── solution # Solutions page
│   │   │   └── page.tsx
│   │   ├── support # Support page
│   │   │   └── page.tsx
│   │   └── layout.tsx # Layout for main pages
│   ├── api # API routes
│   │   ├── articles # API endpoints for articles
│   │   │   ├── [id] # API endpoint for specific article
│   │   │   │   └── route.ts
│   │   │   └── route.ts # API endpoint for all articles
│   │   └── auth # API endpoints for authentication (NextAuth.js)
│   │       └── [...nextauth] # Catch-all route for NextAuth.js
│   │           └── route.ts
│   ├── globals.css # Global CSS styles
│   ├── layout.tsx # Root layout for the app
│   └── provider.tsx # Context provider component
├── layout # Reusable layout components (Footer, Navbar)
│   ├── Footer.tsx
│   └── Navbar.tsx
├── lib # Utility functions and libraries (auth, mongodb)
│   ├── auth.ts
│   └── mongodb.ts
├── models # Data models/schemas (article, user)
│   ├── article.ts
│   └── user.ts
├── public # Static assets
│   ├── images # Image files
│   └── (other static assets like svgs)
└── services # Service layer code (e.g., registration service)
    └── register.ts
```



