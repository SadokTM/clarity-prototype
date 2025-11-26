# Krysselista - Digital henteløsning for barnehager

## 📋 Om prosjektet

Krysselista er en sikker og brukervennlig applikasjon for barnehager som digitaliserer henteprosessen. Foreldre sender henteforespørsler digitalt, og barnehagepersonalet godkjenner disse før barn utleveres.

## ✨ Hovedfunksjoner

- **For foreldre**: Send henteforespørsel med valg av hvem som skal hente
- **For ansatte**: Oversikt over ventende forespørsler og godkjenning
- **Sikkerhet**: RBAC (rollebasert tilgang), RLS (Row Level Security), GDPR-compliant
- **Sanntid**: Real-time notifikasjoner når forespørsler godkjennes

## 🏗️ Teknologier

### Frontend
- **React 18** med TypeScript
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui** (design system)
- **React Router** (navigasjon)
- **React Query** (data fetching)

### Backend (Lovable Cloud / Supabase)
- **PostgreSQL** database
- **Supabase Auth** (autentisering)
- **Row Level Security** (RLS policies)
- **Edge Functions** (serverless)
- **Realtime** (sanntids-oppdateringer)

## 📊 Database-struktur

- `profiles` - Brukerprofiler
- `user_roles` - Roller (parent/employee/admin)
- `children` - Barn i barnehagen
- `parent_children` - Forelder-barn-relasjoner
- `authorized_pickups` - Godkjente hentepersoner
- `pickup_logs` - Henteforespørsler og status

## 🚀 Kom i gang

### Forutsetninger
- Node.js (anbefalt via [nvm](https://github.com/nvm-sh/nvm))
- npm eller bun

### Installasjon

```bash
# Klon repositoriet
git clone https://github.com/Aleks1712/clarity-prototype.git

# Gå til prosjektmappen
cd clarity-prototype

# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev
```

Appen kjører på `http://localhost:8080`

### Miljøvariabler

Prosjektet bruker Lovable Cloud, så følgende variabler er forhåndskonfigurert i `.env`:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

For lokal utvikling: disse hentes automatisk fra Lovable Cloud.

## 👥 Brukerroller og testing

### Opprett testbrukere
1. Registrer deg på `/auth`
2. Velg rolle på `/onboarding`:
   - **Parent** (forelder)
   - **Employee** (ansatt)
   - **Admin** (administrator)
3. Gå til `/demo-setup` for å generere testdata

### Testflyt
1. **Som forelder**: Velg barn → Velg hvem som henter → Send forespørsel
2. **Som ansatt**: Se ventende forespørsler → Godkjenn
3. **Som forelder**: Få sanntids-notifikasjon om godkjenning

## 🔐 Sikkerhet

- ✅ GDPR-compliant datalagring i EU
- ✅ Passord hashet via Supabase Auth
- ✅ RBAC (Role-Based Access Control)
- ✅ RLS policies på alle databasetabeller
- ✅ Logging av alle hentinger
- ✅ Ingen produksjonsdata i kodebase

## 📁 Prosjektstruktur

```
clarity-prototype/
├── src/
│   ├── components/      # UI-komponenter (shadcn)
│   ├── contexts/        # React contexts (AuthContext)
│   ├── hooks/           # Custom hooks
│   ├── integrations/    # Supabase client
│   ├── pages/           # Sider (Auth, Dashboard, etc.)
│   └── lib/             # Utilities
├── supabase/
│   ├── functions/       # Edge functions
│   ├── migrations/      # Database migrations
│   └── config.toml      # Supabase config
└── public/              # Statiske filer
```

## 🛠️ Utvikling

### Tilgjengelige scripts
```bash
npm run dev          # Start utviklingsserver
npm run build        # Bygg for produksjon
npm run preview      # Preview production build
npm run lint         # Kjør ESLint
```

### Kode-konvensjoner
- **TypeScript** for type-sikkerhet
- **Tailwind** semantic tokens (bruk design system fra `index.css`)
- **shadcn/ui** komponenter (ikke vanlig CSS)
- **React Query** for server state

## 🚢 Deployment

Prosjektet deployes automatisk via Lovable:
1. Gå til [Lovable-editoren](https://lovable.dev/projects/6e79645e-7a75-4009-ad18-25d94ea849e5)
2. Klikk **Share** → **Publish**
3. Frontend publiseres automatisk
4. Backend (edge functions, migrations) deployes automatisk

## 🤝 Bidra

Dette er et studentprosjekt for fullstack-utvikling. Kontakt eier for tilgang.

## 📝 Lisens

Privat prosjekt - Ikke for kommersiell bruk

## 🔗 Lenker

- **Lovable Project**: [https://lovable.dev/projects/6e79645e-7a75-4009-ad18-25d94ea849e5](https://lovable.dev/projects/6e79645e-7a75-4009-ad18-25d94ea849e5)
- **Live demo**: Publiser via Lovable for offentlig URL

---

**Laget med ❤️ ved hjelp av Lovable**
