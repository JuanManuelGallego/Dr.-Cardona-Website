# Guida Completa alle Immagini per Frontend (Next.js)

## Formati Immagine Consigliati

### WebP / AVIF
- **WebP**: Miglior formato per foto - compressione eccellente, qualità alta
- **AVIF**: Ancora migliore di WebP, ma supporto browser meno diffuso
- **Vantaggi**: File più piccoli (50-80% in meno), qualità identica
- **Next.js converte automaticamente in WebP/AVIF** se usi il componente `next/image`

### PNG
- **Uso**: Grafici con trasparenza, loghi, icone, screenshot
- **Vantaggi**: Trasparenza perfetta, qualità lossless
- **Svantaggi**: File più grandi rispetto a WebP

### JPEG
- **Uso**: Foto senza trasparenza
- **Vantaggi**: Buona compressione, supporto universale
- **Svantaggi**: No trasparenza, artefatti a alta compressione

### SVG
- **Uso**: Loghi, icone, grafici vettoriali semplici
- **Vantaggi**: Infinitamente scalabili, file piccolissimi, editabili
- **Svantaggi**: Non adatto per foto complesse

## Compressione Prima del Caricamento

### PERCHÉ Comprimere
- Riduce il peso del file del 50-80%
- Migliora la velocità di caricamento
- Riduce i costi di hosting/bandwidth
- Next.js può ottimizzare, ma partire da un file già compresso è meglio

### STRUMENTI di Compressione
- **Squoosh** (https://squoosh.app) - Gratuito, online, potente
- **TinyPNG** (https://tinypng.com) - Facile, online
- **ImageOptim** (Mac) - App desktop gratuita

### COSA significa "Ottimizza PNG"
- **Compressione lossless**: Riduce il peso senza perdere qualità
- **Rimozione metadata**: Elimina dati EXIF non necessari
- **Ottimizzazione palette**: Riduce i colori se possibile
- **NON è solo compressione**: È ottimizzazione intelligente del file

## Tag da Usare in Next.js

### Componente `next/image` (SEMPRE)
```tsx
import Image from 'next/image'

// Immagine statica in public/
<Image 
  src="/images/logo.png"
  alt="Logo Manuela Cardona"
  width={200}
  height={200}
  priority // per immagini critical
/>

// Immagine responsive con fill
<Image 
  src="/images/chi-sono.png"
  alt="Foto profilo"
  fill
  style={{ objectFit: 'cover' }}
/>
```

### MAI usare `<img>` in Next.js
- `<img>` non fa lazy loading
- `<img>` non ottimizza automaticamente
- `<img>` non converte in WebP/AVIF
- `<img>` causa layout shift

### SVG - Due modi
```tsx
// METODO 1: Componente next/image (consigliato per SVG statici)
import Image from 'next/image'
<Image src="/images/logo.svg" alt="Logo" width={200} height={200} />

// METODO 2: Import diretto (per SVG da usare come componente)
import LogoSVG from '@/images/logo.svg'
<LogoSVG className="w-20 h-20" />
```

## Proprietà Importanti di `next/image`

### `priority`
- **Cosa fa**: Carica l'immagine immediatamente, non lazy loading
- **Quando usarlo**: Immagini above-the-fold (hero, logo, immagini visibili subito)
- **Effetto**: Migliora LCP (Largest Contentful Paint), ma usa più bandwidth

### `width` e `height`
- **Obbligatori**: Evitano layout shift (CLS - Cumulative Layout Shift)
- **Next.js li usa per**: Calcolare aspect ratio, riservare spazio
- **Se usi `fill`**: Non servono width/height

### `fill`
- **Cosa fa**: L'immagine riempie il container padre
- **Richiede**: Container con `position: relative`
- **Usa con**: `objectFit: 'cover' | 'contain' | 'fill'`

### `quality`
- **Default**: 75
- **Range**: 1-100
- **Uso**: Aumenta qualità se necessario (ma aumenta peso)

## Conversione WebP - Spiegazione

### DOMANDA: Devo convertire manualmente in WebP?
**RISPOSTA: NO, Next.js lo fa automaticamente!**

- Carichi PNG/JPEG in `public/`
- Next.js converte automaticamente in WebP/AVIF al volo
- Il browser riceve il formato migliore supportato
- Tu mantieni il file originale (PNG/JPEG) in `public/`

### QUANDO convertire manualmente?
- Se hai file ENORMI (es. 10MB+)
- Se vuoi controllo totale sulla qualità
- Per favicon o immagini molto specifiche

### PERCHÉ ho detto "considera WebP"?
- Perché è il formato migliore per le foto
- Ma Next.js lo converte automaticamente se usi `next/image`
- Quindi puoi caricare JPEG/PNG e Next.js pensa a tutto

## Best Practice Next.js per Immagini

### 1. Usa SEMPRE `next/image`
```tsx
import Image from 'next/image'
// ✅ CORRETTO
<Image src="/images/foto.jpg" alt="Foto" width={500} height={300} />
// ❌ SBAGLIATO
<img src="/images/foto.jpg" alt="Foto" />
```

### 2. Specifica sempre width/height
- Evita layout shift
- Migliora Core Web Vitals (CLS)

### 3. Usa `priority` per immagini critical
- Logo in header
- Immagine hero
- Immagini visibili subito al load

### 4. Dove mettere le immagini?
- **public/images/**: File statici (foto, logo, ecc.)
- **src/assets/**: Da importare come componenti (SVG)
- **Non in src/**: Next.js non serve file da src/

### 5. Lazy loading automatico
- Next.js fa lazy loading di default
- Solo le immagini con `priority` sono caricate subito
- Le altre si caricano quando entrano in viewport

### 6. Responsive images
- Usa `fill` per immagini che devono adattarsi
- Usa `sizes` per hint al browser su dimensioni
- Next.js genera automaticamente multiple versioni

## Esempio Completo

```tsx
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      {/* Logo - priority perché è sempre visibile */}
      <Image 
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={50}
        priority
      />

      {/* Foto profilo - fill perché responsive */}
      <div className="relative w-full h-96">
        <Image 
          src="/images/chi-sono.png"
          alt="Foto profilo"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Immagine normale - lazy loading automatico */}
      <Image 
        src="/images/servizio.jpg"
        alt="Servizio"
        width={600}
        height={400}
      />
    </div>
  )
}
```

## Checklist per le Tue Immagini

### logo.png
- ✅ È un logo? Considera conversione in SVG
- ❌ Se resta PNG: comprimilo con TinyPNG
- ✅ Usa `next/image` con `priority`

### chi-sono.png
- ❌ Rinomina in minuscolo: `chi-sono.png`
- ❌ È una foto? Considera WebP (o lascia PNG, Next.js converte)
- ❌ Comprimi con TinyPNG/Squoosh
- ✅ Usa `next/image` con `fill` se responsive

### chi-sono.png
- ✅ Già ottimizzato? Comprimi ulteriormente se necessario
- ✅ Usa `next/image` nel codice (già fatto nel progetto)

## Riassunto Rapido

1. **Formato**: WebP/AVIF per foto, PNG per trasparenza, SVG per loghi
2. **Compressione**: SÌ, comprimi prima di caricare (TinyPNG, Squoosh)
3. **Tag**: Usa SEMPRE `next/image`, mai `<img>`
4. **WebP**: Next.js converte automaticamente, non serve conversione manuale
5. **Ottimizza PNG**: Compressione lossless + rimozione metadata
6. **SVG vs PNG**: Stesso tag `next/image`, ma SVG può essere importato come componente
7. **priority**: Carica immediatamente (no lazy loading) per immagini critical
