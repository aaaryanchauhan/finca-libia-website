# Finca Libia — Luxury Private Digital Concierge

> *"Create a cinematic, editorial-style private digital concierge that feels like an extension of a luxury property — not an app. The technology should disappear; the guest should experience the property, the destination, and the hospitality."*

---

## 🌟 Overview

**Finca Libia Digital Concierge** is a web-based private concierge application designed for ultra-luxury hospitality properties. Accessible instantly via URL or QR code with zero sign-in friction, it functions as a quiet, personal, and highly curated extension of the estate.

Rather than looking or feeling like a property-management SaaS or tech dashboard, the app embodies an aesthetic direction described as **Luxury Boutique Hotel × Private Members Club × Editorial Travel Magazine**.

---

## 🎨 Visual & Design Philosophy

The application strictly adheres to a luxury-first design ethos:

- **Editorial Layouts & Full-Screen Imagery**: Immersive photograph-driven hero sections with smooth transitions.
- **Generous Whitespace & Restraint**: One beautiful photograph, one sentence, one action. Ample breathing room over dense UI cards.
- **Curated Color Palette**:
  - **Ink (`#1a1816`)**: Deep charcoal / near-black background base.
  - **Ivory (`#f9f6ef`, `#fdfcf9`)**: Warm cream text and high-contrast editorial titles.
  - **Stone (`#7a7062`)**: Muted taupe and stone for secondary text and borders.
  - **Olive (`#6b6b42`)**: Natural green accents for status indicators.
  - **Champagne (`#b09a6e`)**: Restrained brushed gold for interactive highlights and CTA elements.
- **Sophisticated Typography**: High-contrast pairing of **Cormorant Garamond** (Serif) for headings and quotes with **Inter** (Sans-serif) for body text and navigation.
- **Micro-Interactions & Transitions**: Custom `Reveal` scroll animations, smooth fade-ins, tap-highlight suppression, and floating blur navigation.

---

## ✨ Key Features & Experience Flow

```
                     ┌────────────────────────┐
                     │   Finca Libia Mobile   │
                     └───────────┬────────────┘
                                 │
         ┌───────────────┬───────┴───────┬───────────────┐
         │               │               │               │
  ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
  │   🏡 STAY   │ │ 🌿 EXPLORE  │ │ ✦ CONCIERGE │ │ 📖 MEMORIES │
  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

### 1. 🏡 Cinematic Home Screen (`HomeView.tsx`)
- Full-screen imagery hero banner with auto-sliding backdrop visuals of the estate.
- Personalized morning greeting (*"Good morning, Aryan"*), real-time date display, and weather indicator (*"24° · Partly cloudy"*).
- Direct call-to-action to build a custom itinerary (*"You have no plans yet. Let us help you make the most of today"*).
- Discreet top bar providing access to **Pre-Arrival** and **Checkout** flows.

### 2. 🏰 The Estate & Property (`StayView.tsx`)
- **Explore the Estate**: Interactive guide to estate amenities (The Pool, The Sauna, Tennis Court, The Bar, The Gym, The Games Room) featuring operational instructions, insider tips, best visiting times, and full-screen detail views.
- **The Story**: Editorial history of the 1928 coffee estate, its architecture, design philosophy, and family heritage.
- **Meet the Residents**: Intimate portraits and stories of estate pets (Bruno the Golden Retriever and Luna the Tabby Cat).
- **Take a Digital Tour**: Sequential 18-stop guided digital tour through the estate's highlight spaces.

### 3. 🌿 Destination & Curated Insights (`ExploreView.tsx`)
- Host-curated guide to Medellín split across 6 categories: *Eat, Drink, Adventure, Culture, Family, and Our Secrets*.
- Personal host quotes, distance notes, and recommended orders instead of generic star ratings.

### 4. 🗺️ Custom Itineraries (`ItineraryView.tsx`)
- Pace selector: *Slow & Easy*, *Adventure*, *Food & Culture*, *Family*, or *A little bit of everything*.
- Interactive 3-day visual timeline with hour-by-hour schedules.

### 5. ✦ Private Digital Concierge (`ConciergeView.tsx`)
- Freeform text inquiry box (*"Where should we have dinner tonight?"*).
- One-tap quick actions (*Request towels, Housekeeping, Book a ride, Restaurant reservation, Grocery request, Something isn't working*).
- Real-time backend persistence to Supabase with live request status tracking (`pending`, `acknowledged`, `completed`).
- Floating persistent **Concierge ✦** action button accessible across all views.

### 6. ✈️ Pre-Arrival Portal (`PreArrivalView.tsx`)
- Countdown indicator (*"3 days to go"*), arrival logistics, transportation advice, and estate preparation tips.

### 7. 🔑 Checkout & Living Guestbook (`CheckoutView.tsx` & `MemoriesView.tsx`)
- Step-by-step departure checklist (checking belongings, key return, appliance turn-off).
- Integrated guest memory submission form (*Best meal*, *Best experience*, *Something discovered*, *Must-do*).
- Persistent guestbook feed showcasing memories and photos left by past guests.

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build System** | [Vite 5](https://vitejs.dev/) with PWA capabilities (`vite-plugin-pwa`) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Database & API** | [Supabase Client](https://supabase.com/) (`@supabase/supabase-js`) |
| **Fonts** | Google Fonts (`Cormorant Garamond`, `Inter`) |

---

## 📂 Project Structure

```
guestbook-i/
├── public/                 # Static assets & web manifest
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BackButton.tsx        # Standardized editorial back button
│   │   ├── FullScreenImage.tsx   # Full-screen modal lightbox component
│   │   └── Reveal.tsx            # Scroll-triggered animation wrapper
│   ├── data/
│   │   └── content.ts            # Central property content & static data
│   ├── lib/
│   │   └── supabase.ts           # Supabase client setup
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces & types
│   ├── views/                    # Primary application screens
│   │   ├── CheckoutView.tsx      # Departure checklist & guestbook submission
│   │   ├── ConciergeView.tsx     # Digital concierge chat & quick actions
│   │   ├── ExploreView.tsx       # Destination guide & recommendations
│   │   ├── HomeView.tsx          # Hero landing screen & quick nav
│   │   ├── ItineraryView.tsx     # Pace selection & 3-day timeline
│   │   ├── MemoriesView.tsx      # Living guestbook feed
│   │   ├── PreArrivalView.tsx    # Pre-stay guide & countdown
│   │   └── StayView.tsx         # Amenities, estate story, pets, digital tour
│   ├── App.tsx                   # Main layout & state-based navigation
│   ├── index.css                 # Base Tailwind styles & custom animations
│   └── main.tsx                  # React DOM entry point
├── supabase/
│   └── migrations/           # SQL database migrations for Supabase
├── index.html                # HTML entry point with font imports
├── package.json              # Project dependencies & scripts
├── tailwind.config.js        # Color palette & custom typography config
└── vite.config.ts            # Vite & PWA configuration
```

---

## 💾 Database Schema

The app uses Supabase for single-tenant, no-authentication public data persistence.

### `concierge_requests` Table
| Field | Type | Description |
| --- | --- | --- |
| `id` | `uuid` (PK) | Unique request ID (`gen_random_uuid()`) |
| `type` | `text` | Category ("custom", "towels", "housekeeping", "ride", "restaurant", "grocery", "maintenance") |
| `message` | `text` | Guest's request content |
| `status` | `text` | Request state: `'pending'`, `'acknowledged'`, or `'completed'` |
| `created_at` | `timestamptz` | Submission timestamp |

### `guestbook_entries` Table
| Field | Type | Description |
| --- | --- | --- |
| `id` | `uuid` (PK) | Unique memory ID (`gen_random_uuid()`) |
| `best_meal` | `text` | Guest recommendation for best meal |
| `best_experience` | `text` | Guest recommendation for best experience |
| `discovered` | `text` | Hidden discovery shared by guest |
| `must_do` | `text` | Top recommendation for future guests |
| `quote` | `text` | Short testimonial/quote |
| `author_name` | `text` | Guest name and location |
| `created_at` | `timestamptz` | Submission timestamp |

> **Note on Security**: Row Level Security (RLS) is enabled on both tables with policies permitting public `anon` read/write access (`USING (true)` / `WITH CHECK (true)`), matching the no-auth QR-code access model.

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd guestbook-i
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📜 NPM Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Launches Vite local development server |
| `npm run build` | Compiles TypeScript & bundles production PWA assets into `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run typecheck` | Runs TypeScript compiler checks without emitting files (`tsc --noEmit`) |
| `npm run lint` | Runs ESLint to check for code style issues |

---

## 🗄️ Supabase Migration Setup

To deploy the backend tables to a new Supabase instance:

1. Open your Supabase Dashboard SQL Editor.
2. Run the script located in [`supabase/migrations/20260813054346_create_concierge_tables.sql`](file:///Users/aryanchauhan/Downloads/guestbook-i/supabase/migrations/20260813054346_create_concierge_tables.sql).
3. Ensure RLS policies are applied for both `concierge_requests` and `guestbook_entries`.
