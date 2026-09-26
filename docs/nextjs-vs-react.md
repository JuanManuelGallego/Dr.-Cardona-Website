# Next.js vs React - Guida Completa

## Panoramica

**React** è una library JavaScript per costruire interfacce utente.  
**Next.js** è un framework React full-stack che fornisce funzionalità aggiuntive per applicazioni production-ready.

---

## 1. Routing

### React
Richiede librerie esterne come React Router. Il routing è client-side.

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Next.js (App Router)
Routing file-based basato sulla struttura delle cartelle `app/`.

```
app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   ├── page.tsx      → /blog
│   └── [id]/
│       └── page.tsx  → /blog/123
└── layout.tsx        → Layout condiviso
```

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>;
}

// app/blog/[id]/page.tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <div>Blog post: {params.id}</div>;
}
```

---

## 2. Rendering

### React
Solo **Client-Side Rendering (CSR)**. Tutto viene renderizzato nel browser.

```tsx
// React - CSR
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

### Next.js
Supporta **SSR, SSG, ISR, e CSR**.

#### Server-Side Rendering (SSR)
Renderizza ogni richiesta sul server.

```tsx
// app/users/[id]/page.tsx
async function getUser(id: string) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  return <div>{user.name}</div>;
}
```

#### Static Site Generation (SSG)
Genera HTML statico al build time.

```tsx
// app/blog/page.tsx
export const dynamic = 'force-static';

async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

#### Incremental Static Regeneration (ISR)
Rigenera pagine statiche periodicamente.

```tsx
// app/products/page.tsx
export const revalidate = 3600; // Rigenera ogni ora

async function getProducts() {
  const res = await fetch('https://api.example.com/products');
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <div>{/* ... */}</div>;
}
```

#### Client Components
Per interattività (useState, useEffect, event listeners).

```tsx
// app/components/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

---

## 3. Ottimizzazione Performance

### React
Devi configurare manualmente code splitting e lazy loading.

```tsx
// React - Code splitting manuale
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Next.js
Code splitting **automatico** per ogni route. Ottimizzazioni built-in.

#### Image Optimization
```tsx
import Image from 'next/image';

export default function Page() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={800}
      height={600}
      priority // Per above-the-fold images
    />
  );
}
```

#### Font Optimization
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

#### Dynamic Imports
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Opzionale: solo client-side
});
```

---

## 4. SEO

### React
SPA tradizionale con SEO limitato. Richiede configurazione extra.

```tsx
// React - Richiede react-helmet o simili
import { Helmet } from 'react-helmet';

function BlogPost({ title, description }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <article>{/* content */}</article>
    </>
  );
}
```

### Next.js
SEO nativo con SSR/SSG. Meta tags facili da gestire.

```tsx
// app/blog/[id]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: [post.ogImage],
    },
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  return <article>{/* content */}</article>;
}
```

---

## 5. API Routes

### React
Serve un backend separato (Express, Node, etc.).

```javascript
// server.js (Express separato)
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John' }]);
});

app.listen(3000);
```

### Next.js
API Routes **built-in** nella stessa applicazione.

```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [{ id: 1, name: 'John' }];
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  // Process data...
  return NextResponse.json({ success: true });
}
```

---

## 6. Data Fetching

### React
useEffect, useState, o librerie come React Query.

```tsx
// React
function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### Next.js
Server Components con fetch nativo, caching automatico.

```tsx
// app/users/page.tsx
async function getUsers() {
  const res = await fetch('https://api.example.com/users', {
    next: { revalidate: 60 } // Cache per 60 secondi
  });
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### No fetch? Usa Server Actions
```tsx
// app/actions.ts
'use server';

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

// app/users/page.tsx
import { getUsers } from './actions';

export default async function UsersPage() {
  const users = await getUsers();
  return <ul>{/* ... */}</ul>;
}
```

---

## 7. Struttura del Progetto

### React
Struttura libera, decidi tu l'organizzazione.

```
my-react-app/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── App.tsx
├── public/
└── package.json
```

### Next.js
Convenzioni specifiche e strutturate.

```
my-nextjs-app/
├── app/              # App Router (Next.js 13+)
│   ├── layout.tsx    # Layout root
│   ├── page.tsx      # Homepage (/)
│   ├── about/
│   │   └── page.tsx  # /about
│   ├── api/          # API Routes
│   │   └── users/
│   │       └── route.ts
│   └── globals.css   # CSS globale
├── components/       # Componenti riutilizzabili
├── lib/              # Utility functions
├── public/           # Asset statici
├── next.config.ts    # Configurazione Next.js
└── package.json
```

---

## 8. Server vs Client Components

### React
Tutto è client-side per definizione.

### Next.js
Distinzione tra Server e Client Components.

#### Server Components (Default)
- Non possono usare hooks (useState, useEffect)
- Non possono usare event listeners
- Renderizzati sul server
- Accesso diretto a database, file system

```tsx
// app/users/page.tsx (Server Component di default)
import prisma from '@/lib/prisma';

export default async function UsersPage() {
  const users = await prisma.user.findMany();
  return <div>{/* ... */}</div>;
}
```

#### Client Components
- Marcati con `'use client'`
- Possono usare hooks e interattività
- Renderizzati nel browser

```tsx
// components/InteractiveButton.tsx
'use client';

import { useState } from 'react';

export default function InteractiveButton() {
  const [clicked, setClicked] = useState(false);
  return <button onClick={() => setClicked(true)}>{clicked ? 'Clicked!' : 'Click me'}</button>;
}
```

#### Composizione
```tsx
// app/page.tsx (Server Component)
import InteractiveButton from '@/components/InteractiveButton';

export default function Page() {
  return (
    <div>
      <h1>Server Component</h1>
      <InteractiveButton /> {/* Client Component */}
    </div>
  );
}
```

---

