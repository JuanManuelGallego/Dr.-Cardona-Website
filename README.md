# Dott.ssa Manuela Cardona - Website Next.js

Una versione Next.js moderna del sito web professionale per la Dott.ssa Manuela Cardona, psicologa a Torino.

## 🚀 Caratteristiche

### SEO e Performance
- **SEO Avanzato**: Meta tags completi, Schema.org JSON-LD, OpenGraph, Twitter Cards
- **Core Web Vitals ottimizzati**: Next.js Image optimization, lazy loading, code splitting
- **Sitemap dinamica** e robots.txt per motori di ricerca
- **Structured Data** per massima visibilità su Google e AI search agents

### Tecnologie Utilizzate
- **Next.js 15** con App Router
- **TypeScript** per type safety
- **Tailwind CSS** per styling responsive
- **Lucide React** per icone moderne
- **Next SEO** per ottimizzazione avanzata

### Funzionalità Principali
- **Design Responsive** mobile-first
- **Modal interattivi** per casi di studio dei servizi
- **Menu mobile** con hamburger menu
- **CTA ottimizzate** per conversioni
- **Contatti multipli**: telefono, email, WhatsApp
- **Prenotazione online** integrata

## 📁 Struttura del Progetto

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── layout.tsx      # Root layout con SEO
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Stili globali
│   ├── sitemap.ts      # Sitemap dinamica
│   └── robots.txt/     # Robots.txt dinamico
├── components/          # Componenti React
│   ├── Header.tsx      # Navigazione principale
│   ├── Hero.tsx        # Sezione hero
│   ├── About.tsx       # Sezione chi sono
│   ├── Services.tsx    # Servizi con modal
│   ├── Where.tsx       # Dove ricevo
│   ├── Patients.tsx    # Per chi
│   ├── Prices.tsx      # Tariffe
│   ├── Contact.tsx     # Contatti
│   └── Footer.tsx      # Footer
├── data/               # Dati strutturati
│   ├── services.ts     # Lista servizi
│   └── modal-texts.ts  # Testi modal
└── lib/                # Utilities
    └── utils.ts        # Utility functions
```

## 🎨 Design System

### Colori
- **Primary**: #4682B4 (Steel Blue) - Professionalità e fiducia
- **Secondary**: #3CB371 (Medium Sea Green) - Crescita e benessere  
- **Accent**: #e66657 (Coral) - Call-to-action e elementi interattivi

### Componenti
- **shadcn/ui** ready (configurato ma non ancora utilizzato)
- **Tailwind CSS** per styling consistente
- **CSS custom properties** per compatibilità con design originale

## 🔧 Configurazioni

### Performance
- **Image optimization** con WebP/AVIF
- **Code splitting** automatico
- **Lazy loading** per immagini
- **Bundle optimization** in produzione

### SEO
- **Metadata API** di Next.js 13+
- **Schema.org JSON-LD** per structured data
- **Canonical URLs** e sitemap
- **Meta tags ottimizzati** per social sharing

### Security
- **Security headers** configurati
- **Content Security Policy** ready
- **HTTPS-first** approach

## 🚀 Deployment

### Preparazione
1. Configurare il dominio in `src/app/layout.tsx`
2. Aggiornare URLs in sitemap e robots.txt  
3. Configurare analytics (Google Analytics/Plausible)

### Build
```bash
npm run build
npm run start
```

### Deploy su Vercel
```bash
vercel --prod
```

## 📊 SEO Checklist

- [x] **Title tags** ottimizzati per ogni sezione
- [x] **Meta descriptions** descrittive e coinvolgenti  
- [x] **Schema.org** markup per LocalBusiness
- [x] **OpenGraph** tags per social sharing
- [x] **JSON-LD** structured data
- [x] **Sitemap XML** dinamica
- [x] **Robots.txt** ottimizzato
- [x] **Core Web Vitals** ottimizzati
- [x] **Mobile-first** responsive design
- [x] **Semantic HTML** markup
- [x] **Alt text** per tutte le immagini
- [x] **Local SEO** ottimizzato per Torino

## 🔮 Miglioramenti Futuri

### Quando necessario:
- **Autenticazione**: Logto integration
- **Form management**: React Hook Form + Zod
- **State management**: Zustand per stato complesso  
- **API integration**: TanStack Query per chiamate server
- **CMS integration**: per gestione contenuti dinamici
- **Analytics**: Google Analytics 4 o Plausible
- **A/B Testing**: per ottimizzazione conversioni

## 🛠️ Sviluppo

### Installazione
```bash
npm install
npm run dev
```

### Scripts disponibili
- `npm run dev` - Development server
- `npm run build` - Build di produzione
- `npm run start` - Server di produzione
- `npm run lint` - ESLint check

### Convenzioni di Codice
- **Components**: PascalCase (es. `Header.tsx`)
- **Files**: kebab-case per cartelle
- **Functions**: camelCase  
- **Constants**: UPPER_SNAKE_CASE
- **TypeScript strict mode** attivo

## 📞 Contatti

**Dott.ssa Manuela Cardona**
- 📱 +39 334 307 1131
- 📧 psi.manuela.cardona@gmail.com  
- 📍 Via Roma, 123 - 10100 Torino (TO)

---

*Sito web professionale ottimizzato per SEO e performance, sviluppato con Next.js 15 e TypeScript.*
