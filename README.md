# ByteSpace — Modern Online Learning Platform

> **Assessment Submission for Doin Tech Limited**  
> **Position**: Jr. Software Engineer (Frontend)  
> **Candidate**: **Sayed Sohanul Islam**  
> **Email**: `sohanul06@gmail.com` | **Phone**: `01735736885`  
> **Tracking ID**: `0ba514a0-5786-4f49-a7b2-81272b5b96b2`  
> **Submission Deadline**: October 01, 2026  

---

## 🔗 Quick Links

- **Live Vercel Deployment**: [https://sohanuls-dointech.vercel.app](https://sohanuls-dointech.vercel.app)
- **Figma Design (Original)**: [ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)
- **Figma Design (Copy)**: [ByteSpace New Check website — Copy](https://www.figma.com/design/JYj0bdEab5llHhJ7wCD1o5/ByteSpace-New-Check-website--Copy-?node-id=0-1&t=hUDTUcYY5unIJPjT-1)
- **GitHub Repository**: [sayedsohanulislam/bytespace](https://github.com/sayedsohanulislam/bytespace)
- **Pull Request**: [Pull Request #1 (`feature/bytespace-landing-auth` ➔ `main`)](https://github.com/sayedsohanulislam/bytespace/pull/1)
- **Official Submission Portal**: [https://career.doin.tech/submit-assessment/](https://career.doin.tech/submit-assessment/)

---

## 🎯 Executive Summary & Figma Coverage (100%)

This project is a pixel-accurate, responsive, and production-ready implementation of the **ByteSpace** design from Figma. Every required, bonus, and additional screen identified across the design system has been built:

| Screen # | Figma View | Route | Status | Description |
|---|---|---|---|---|
| **Screen 1** | Landing Page | `/` | ✅ **Complete** | Full landing page with Hero, Search, Partners, Popular Courses, Categories, Mentorship, CTA, Testimonials, & Footer |
| **Screen 2** | Auth Pages | `/login` & `/signup` | ✅ **Complete** | Split-screen login & signup with form validation, course progress card, and Google auth integration |
| **Screen 3** | Courses Catalog | `/courses` | ✅ **Complete** | Dedicated catalog with 12 courses, category tabs, search filter, sorting dropdown, and pagination |
| **Screens 4, 5, 6** | Course Detail | `/courses/[id]` | ✅ **Complete** | Full course page with video preview player, sticky pricing sidebar, Overview tab, Curriculum accordion, and Reviews distribution |
| **Screen 7** | 404 Page | `/_not-found` | ✅ **Complete** | Custom branded 404 error page matching Figma Screen 7 with navigation back to home |
| **Bonus** | Google OAuth System | Global Modal | ✅ **Complete** | Interactive Google Identity Services account picker with candidate & reviewer quick login and authenticated Navbar state |

---

## 🛠️ Tech Stack & Technical Architecture

- **Framework**: [Next.js 14.2](https://nextjs.org/) (App Router architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict type definitions for all courses, reviews, curriculum modules, and auth users
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) configured with custom Figma brand tokens:
  - `brand-blue`: `#1E4FFF` (signature royal electric blue)
  - `brand-blue-dark`: `#163ec9` (deep hover tone)
  - `brand-lime`: `#D2F829` (vibrant neon chartreuse accent)
  - `brand-lime-hover`: `#bfe41e`
  - `brand-dark`: `#0F172A` (rich slate foreground)
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, lightweight iconography
- **Asset Rendering**: Native vector SVG components for 3D geometric shapes (Lime Coil, White Torus, Lime Prism, Zigzag)
- **State Management**: React Context (`AuthContext.tsx`) with `localStorage` persistence for session management

---

## 📖 Reviewer Guide: How to Review Every Feature

Follow these steps to comprehensively evaluate the application:

### 1. 🏠 Landing Page (`/`)
- **Sticky Glassmorphism Header**:
  - Scroll down the page: the header transitions seamlessly from solid royal blue to a blurred backdrop with bottom border.
  - Active links (`Home`, `Courses`, `Why Us`, `Mentors`, `Reviews`) smooth-scroll to their respective sections.
- **Hero & Interactive Search**:
  - Notice the headline, student showcase in lime circular frame, and floating animated metric badges (`4.9/5.0`, `5,000+ Courses`, `20k+ Students`).
  - Type in the search bar or click any of the trending topic pills (*Python*, *Figma*, *React*, *Data Science*) to instantly filter matching courses.
  - Custom 3D SVG decorative elements (spiral, torus, prism, zigzag) render crisply at any scale.
- **Partner Ribbon**:
  - Monochrome tech brand logos (Google, Microsoft, Amazon, Slack, Spotify, Netflix).
- **Popular Courses & Quick-View Modal**:
  - Filter courses by category tabs (*All Courses*, *Web Development*, *UI/UX Design*, *Data Science*, etc.).
  - Click on any course card to open the **Interactive Quick-View Modal** showing syllabus highlights, instructor info, and live enrollment button.
  - Click the bookmark icon on any card to toggle the interactive wishlist status.
- **Why Choose Us Grid**:
  - 6 category cards with glowing neon lime icons and micro-interactions.
- **Transformation & Live Mentorship Showcases**:
  - Two split sections showcasing curriculum metrics, 98% completion rate badge, and pulsating red `● Live Now` mentor session indicator.
- **CTA Banner & Student Testimonials**:
  - Full-width royal blue CTA card with 3D decorative shapes.
  - Carousel of verified student reviews with 5-star ratings and company badges.
- **Footer**:
  - Working newsletter subscription input with email validation and success toast.

---

### 2. 📚 Dedicated Courses Catalog (`/courses`) — Figma Screen 3
- Navigate to `/courses` via the Navbar or Hero "Explore All Courses" button.
- **Search & Filter**: Search by keyword or select category tabs.
- **Sorting**: Toggle between *Most Popular*, *Highest Rated*, *Price: Low to High*, and *Price: High to Low*.
- **Pagination**: Interactive pagination controls (Page 1, 2, 3).
- **Direct Navigation**: Clicking any course card opens the full Course Detail page (`/courses/[id]`).

---

### 3. 🎓 Course Detail Page (`/courses/[id]`) — Figma Screens 4, 5, 6
- Visit any course (e.g. `/courses/1` or `/courses/2`).
- **Video Preview Player**: Branded player frame with play button overlay, duration, and full HD badges.
- **Sticky Enrollment Sidebar**: Shows price, 40% discount badge, 30-day money-back guarantee, full course checklist, and enrollment CTA.
- **3 Interactive Tabs**:
  1. **Overview Tab (Screen 4)**: Course description, "What You Will Learn" checklist, requirements, and target audience.
  2. **Curriculum Tab (Screen 5)**: Expandable accordion modules with lesson counts, durations, and preview video links.
  3. **Reviews Tab (Screen 6)**: Aggregate rating score (4.9 / 5.0), interactive rating distribution bars (5-star to 1-star), and verified student reviews.

---

### 4. 🔐 Google OAuth Sign-Up & Sign-In (Bonus Extra Credit)
- Visit `/signup` or `/login` (or click **"Google Sign In"** in the top navbar).
- Click **"Continue with Google"**:
  - An authentic **Google Identity Services** account selection modal opens.
  - Select **Sayed Sohanul Islam** (Candidate) or **Doin Tech Reviewer** (Evaluator), or choose **"Use another account"** to enter custom credentials.
  - An authentic OAuth handshake spinner appears, after which you are redirected to the homepage as an authenticated user.
- **Authenticated Navbar Experience**:
  - The Navbar now displays your profile avatar with a Google verified badge and your name.
  - Click the profile avatar to open the dropdown menu: shows your verified email, `✓ Google Authenticated` badge, "My Enrolled Courses" link, and a **Sign Out** button.
  - Click **Sign Out** to reset the session back to logged-out state anytime.

---

### 5. 🚫 Custom 404 Page (`/not-found`) — Figma Screen 7
- Visit any invalid route, e.g. [http://localhost:3000/some-random-route](http://localhost:3000/some-random-route).
- Observe the custom 404 page matching Figma Screen 7 with bold neon lime "404", branded background, and a "Return to Homepage" button.

---

### 6. 📱 Responsive & Cross-Browser Verification
- Open Chrome DevTools (`Ctrl + Shift + I` or `Cmd + Option + I`) and toggle device toolbar (`Ctrl + Shift + M`).
- Test on:
  - **Mobile (375px - 430px)**: Hamburger menu toggles a full mobile drawer with navigation links, Google Sign-In, and Sign-Out support.
  - **Tablet (768px - 1024px)**: Grids smoothly transition from 1 to 2 columns.
  - **Desktop (1280px - 1920px)**: Full multi-column layout with sticky sidebar and floating metric cards.

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
├── README.md                         # Project documentation & review guide
├── next.config.mjs                   # Next.js production configuration & remotePatterns
├── tailwind.config.ts                # Custom Tailwind design system tokens
└── package.json                      # Project dependencies & scripts
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

# 4. Start development server
npm run dev
# Open http://localhost:3000 in your browser

# 5. Verify production build
npm run build
npm run start
```

---

## 🌿 Git Branching Strategy

In accordance with the assessment instructions (*"Follow proper Git branching: work on a separate branch, not directly on main or master"*):

1. **`main` Branch**: Contains the initial clean repository baseline.
2. **`feature/bytespace-landing-auth` Branch**: Contains all feature commits for the landing page, catalog, course detail, auth pages, and Google OAuth system.
3. **Pull Request**: [PR #1](https://github.com/sayedsohanulislam/bytespace/pull/1) created targeting `main`.

---

## 📝 Candidate & Submission Information

- **Candidate Name**: Sayed Sohanul Islam
- **Position**: Jr. Software Engineer (Frontend)
- **Tracking ID**: `0ba514a0-5786-4f49-a7b2-81272b5b96b2`
- **Email**: `sohanul06@gmail.com`
- **Phone**: `01735736885`
- **Submission Portal**: [https://career.doin.tech/submit-assessment/](https://career.doin.tech/submit-assessment/)
