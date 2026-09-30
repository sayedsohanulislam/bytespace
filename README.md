<div align="center">

# ⚡ ByteSpace — Online Tech Learning Platform

**Production-grade, pixel-accurate implementation of the ByteSpace Figma design system.**  
Built for the **Doin Tech Limited** Frontend Software Engineer Assessment.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Deployment-sohanuls--dointech.vercel.app-1E4FFF?style=for-the-badge&logo=vercel&logoColor=white)](https://sohanuls-dointech.vercel.app)
[![Pull Request](https://img.shields.io/badge/Pull_Request-#1_Ready-D2F829?style=for-the-badge&logo=github&logoColor=black)](https://github.com/sayedsohanulislam/bytespace/pull/1)
[![Figma Coverage](https://img.shields.io/badge/Figma_Coverage-100%25_Complete-10B981?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1)

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-Latest-F56565?style=flat-square)](https://lucide.dev/)

</div>

---


---

## 🚀 Key Links at a Glance

| Resource | Direct Link |
|---|---|
| 🌐 **Live Vercel Website** | **[https://sohanuls-dointech.vercel.app](https://sohanuls-dointech.vercel.app)** |
| 🔀 **Pull Request (PR #1)** | **[sayedsohanulislam/bytespace/pull/1](https://github.com/sayedsohanulislam/bytespace/pull/1)** |
| 📂 **GitHub Repository** | **[https://github.com/sayedsohanulislam/bytespace](https://github.com/sayedsohanulislam/bytespace)** |
| 🎨 **Figma Design (Original)** | **[ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)** |
| 🎨 **Figma Design (Copy)** | **[ByteSpace New Check website — Copy](https://www.figma.com/design/JYj0bdEab5llHhJ7wCD1o5/ByteSpace-New-Check-website--Copy-?node-id=0-1&t=hUDTUcYY5unIJPjT-1)** |
| 📖 **Reviewer Guide** | **[`REVIEW_GUIDE.md`](./REVIEW_GUIDE.md)** |

---

## 🎯 100% Figma Screen Coverage

Every screen, tab, modal, and state specified across the design canvas has been developed:

| Figma Screen | View / Scope | Live Production Link | Status | Key Highlights |
|---|---|---|:---:|---|
| **Screen 1** | **Landing Page** | [Explore Landing Page](https://sohanuls-dointech.vercel.app) | ✅ **100%** | Hero with animated badges, search with quick tags, 3D geometric SVGs, partner logos, popular courses with category tabs & quick-view modal, 6 category cards, live mentor session indicator, CTA card, testimonials, and newsletter footer. |
| **Screen 2** | **Sign Up Page** | [Explore Sign Up](https://sohanuls-dointech.vercel.app/signup) | ✅ **100%** | Split-screen layout, course progress card (`68% completed`), field validation, password show/hide eye toggle, and Google OAuth trigger. |
| **Screen 2** | **Login Page** | [Explore Login](https://sohanuls-dointech.vercel.app/login) | ✅ **100%** | Split-screen layout, remember me checkbox, interactive validation, quick credentials, and Google auth. |
| **Screen 3** | **Courses Catalog** | [Explore Courses](https://sohanuls-dointech.vercel.app/courses) | ✅ **100%** | Dedicated catalog with 12 courses, keyword search, category filter pills, sorting dropdown (*Most Popular, Highest Rated, Price*), and pagination controls. |
| **Screens 4, 5, 6** | **Course Detail** | [Explore Course Detail](https://sohanuls-dointech.vercel.app/courses/1) | ✅ **100%** | Branded video preview player, sticky pricing sidebar with 40% discount, and **3 interactive tabs**: Overview (Screen 4), Curriculum accordion (Screen 5), and Reviews distribution (Screen 6). |
| **Screen 7** | **404 Not Found** | [Explore 404 Page](https://sohanuls-dointech.vercel.app/404-test) | ✅ **100%** | Custom branded 404 error page matching Screen 7 with neon lime "404" heading and return home button. |
| **Bonus** | **Google OAuth Modal** | [Try on Sign Up](https://sohanuls-dointech.vercel.app/signup) | ✅ **100%** | Google Identity Services account selector with 1-click candidate profile login, reviewer login, custom account option, and authenticated Navbar state with sign out. |

---

## 🎨 Design System & Token Palette

The application strictly matches the typography, spacing, and chromatic system of the Figma designs:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  Brand Color Tokens                                                         │
│                                                                             │
│  🟦 brand-blue      #1E4FFF   Primary brand blue, hero accents, CTAs        │
│  🟦 brand-blue-dark #163ec9   Interactive hover & dark accent states        │
│  🟩 brand-lime      #D2F829   Neon chartreuse badges, buttons, highlights   │
│  🟩 brand-lime-hover#bfe41e   Hover micro-interaction state for lime pills  │
│  ⬛ brand-dark      #0F172A   Deep slate typography & high contrast borders │
│  ⬜ surface         #FFFFFF   Crisp card backgrounds and clean paneling     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3D Geometric Vector Assets
Hand-crafted vector SVG components (`src/components/DecorativeShapes.tsx`) for pixel-crisp rendering at all resolutions:
- 🌀 **Lime Spiral / Coil** (Hero visual centerpiece)
- 🍩 **White Torus Ring** (Playful floating 3D donut)
- 📐 **Lime Prism** (Isometric prism shape)
- ⚡ **White Zigzag** (Dynamic energetic line element)

---

## 💎 Key Feature Highlights

### 1. Interactive Course Search & Real-Time Filtering
- Type any keyword in the hero search bar (e.g., `"Python"`, `"React"`, `"Design"`) to filter courses instantly.
- One-tap quick filter tags (*Python*, *Figma*, *React*, *Data Science*) immediately update the catalog.

### 2. Interactive Quick-View Course Modal
- Clicking on any course card opens a rich modal dialog with full course overview, curriculum highlights, instructor credentials, and an enrollment action.

### 3. Dedicated Course Detail Page with 3 Multi-Tabs
- **Tab 1: Overview (Screen 4)** — Comprehensive course description, "What You Will Learn" checklist, prerequisites, and target audience.
- **Tab 2: Curriculum (Screen 5)** — Expandable/collapsible accordion modules with lesson counts, video preview pills, and durations.
- **Tab 3: Reviews (Screen 6)** — Aggregate rating score (4.9 / 5.0), interactive rating distribution bars (5★ down to 1★), and verified student reviews.

### 4. Interactive Google OAuth 2.0 System
- Clicking **"Continue with Google"** on `/signup` or `/login` triggers an authentic **Google Identity Services** account selector.
- **1-Click Candidate Profile**: `Sayed Sohanul Islam` (`sohanul06@gmail.com`).
- **1-Click Evaluator Profile**: `Doin Tech Reviewer` (`reviewer@doin.tech`).
- **Custom Account**: Ability to test with any custom name & Gmail address.
- **Authenticated Navbar Experience**: Displays user avatar with Google verified badge, candidate name, and dropdown menu with "My Enrolled Courses" and "Sign Out" actions.

---

## 📖 Step-by-Step Reviewer Walkthrough

Follow these simple steps to evaluate the live deployment:

1. **Visit the Live URL**: **[https://sohanuls-dointech.vercel.app](https://sohanuls-dointech.vercel.app)**
2. **Scroll the Landing Page**:
   - Verify that the header transitions from solid blue to a blurred glassmorphic header on scroll.
   - Test the category tabs on the Popular Courses grid.
   - Click any course card to open the **Quick-View Modal**.
   - Type in the hero search bar to test real-time course filtering.
3. **Explore the Courses Catalog (`/courses`)**:
   - Click "Courses" in the navigation bar.
   - Test sorting (*Most Popular*, *Highest Rated*, *Price: Low to High*, *Price: High to Low*).
   - Test the interactive pagination buttons (1, 2, 3).
4. **Inspect Course Details (`/courses/1`)**:
   - Click any course to open the detail view.
   - Click between the **Overview**, **Curriculum** (expand accordion modules), and **Reviews** tabs.
5. **Test Google OAuth Sign-In**:
   - Go to [`/signup`](https://sohanuls-dointech.vercel.app/signup) or click "Google Sign In" in the navbar.
   - Click **"Continue with Google"** and select **Sayed Sohanul Islam** or **Doin Tech Reviewer**.
   - Notice the handshake animation and redirect. The navbar now displays your authenticated avatar and dropdown menu!
6. **Test Custom 404 Page**:
   - Visit [`/404-test`](https://sohanuls-dointech.vercel.app/404-test) to verify the custom Figma Screen 7 error page.
7. **Test Mobile Responsiveness**:
   - Toggle Mobile View (375px — 430px) in Chrome DevTools (`Ctrl + Shift + M`).
   - Tap the hamburger menu to open the mobile drawer with full navigation, Google sign-in, and sign-out controls.

---

## 📁 Project Directory Structure

```text
bytespace/
├── public/
│   ├── icon.svg                      # Custom vector ByteSpace favicon
│   └── images/                       # Optimized static assets
├── src/
│   ├── app/
│   │   ├── courses/
│   │   │   ├── page.tsx              # Courses Catalog (Figma Screen 3)
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Course Detail with 3 tabs (Figma Screens 4, 5, 6)
│   │   ├── login/
│   │   │   └── page.tsx              # Split-screen Login page (Figma Screen 2)
│   │   ├── signup/
│   │   │   └── page.tsx              # Split-screen Sign-up page (Figma Screen 2)
│   │   ├── not-found.tsx             # Custom 404 error page (Figma Screen 7)
│   │   ├── layout.tsx                # Root layout with AuthProvider & GoogleAuthModal
│   │   ├── page.tsx                  # Full Landing page (Figma Screen 1)
│   │   └── globals.css               # Global styles & custom scrollbars
│   ├── components/
│   │   ├── Navbar.tsx                # Responsive navigation with auth profile menu
│   │   ├── Footer.tsx                # Platform footer with newsletter validation
│   │   ├── CourseModal.tsx           # Quick-view course syllabus modal
│   │   ├── GoogleAuthModal.tsx       # Google Identity Services OAuth modal
│   │   └── DecorativeShapes.tsx      # Vector 3D geometric shapes (Lime Coil, Torus, Prism)
│   └── context/
│       └── AuthContext.tsx           # Auth state management with localStorage persistence
├── vercel.json                       # Vercel project configuration (sohanuls-dointech)
├── next.config.mjs                   # Next.js configuration & remotePatterns
├── tailwind.config.ts                # Custom Tailwind design system tokens
├── REVIEW_GUIDE.md                   # Dedicated evaluator review guide
└── README.md                         # Comprehensive documentation
```

---

## 🏃 Local Setup & Development

```bash
# 1. Clone the repository
git clone https://github.com/sayedsohanulislam/bytespace.git
cd bytespace

# 2. Switch to the feature branch (where all work is committed)
git checkout feature/bytespace-landing-auth

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
# Server running at http://localhost:3000

# 5. Build for production (verifies 0 errors / 0 warnings)
npm run build
npm run start
```

---

## 🌿 Git Branching & Pull Request

In accordance with assessment instructions (*"Follow proper Git branching: work on a separate branch, not directly on main or master. Create a Pull Request (PR) for your work."*):

- **Baseline Branch**: `main` (clean Next.js setup)
- **Feature Branch**: `feature/bytespace-landing-auth` (all feature commits)
- **Pull Request**: **[Pull Request #1](https://github.com/sayedsohanulislam/bytespace/pull/1)** targeting `main`.

---

<div align="center">

**Submitted with ❤️ by Sayed Sohanul Islam for Doin Tech Limited**  
[Live Deployment](https://sohanuls-dointech.vercel.app) • [Pull Request #1](https://github.com/sayedsohanulislam/bytespace/pull/1) • [GitHub Repo](https://github.com/sayedsohanulislam/bytespace)

</div>
