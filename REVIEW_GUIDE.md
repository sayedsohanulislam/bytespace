# ByteSpace — Evaluator & Reviewer Guide

> **Candidate**: **Sayed Sohanul Islam**  
> **Position**: Jr. Software Engineer (Frontend) — Doin Tech Limited  
> **Tracking ID**: `0ba514a0-5786-4f49-a7b2-81272b5b96b2`  
> **Repository**: [sayedsohanulislam/bytespace](https://github.com/sayedsohanulislam/bytespace)  
> **Pull Request**: [Pull Request #1](https://github.com/sayedsohanulislam/bytespace/pull/1)  

---

## ⚡ Fast Evaluation Checklist

Use this checklist for rapid assessment of the implementation against all requirements:

| # | Requirement | Status | Verification Route |
|---|---|---|---|
| 1 | **Full Landing Page (Required)** | ✅ **100% Complete** | `/` |
| 2 | **Bonus Login Page (Extra Credit)** | ✅ **100% Complete** | `/login` |
| 3 | **Bonus Signup Page (Extra Credit)** | ✅ **100% Complete** | `/signup` |
| 4 | **Courses Catalog (Figma Screen 3)** | ✅ **100% Complete** | `/courses` |
| 5 | **Course Detail Overview Tab (Figma Screen 4)** | ✅ **100% Complete** | `/courses/1` |
| 6 | **Course Detail Curriculum Tab (Figma Screen 5)** | ✅ **100% Complete** | `/courses/1` (Click "Curriculum" tab) |
| 7 | **Course Detail Reviews Tab (Figma Screen 6)** | ✅ **100% Complete** | `/courses/1` (Click "Reviews" tab) |
| 8 | **Custom 404 Page (Figma Screen 7)** | ✅ **100% Complete** | `/_not-found` (or any non-existent URL) |
| 9 | **Google OAuth Sign-Up & Sign-In** | ✅ **100% Complete** | `/signup` or `/login` ➔ Click "Google" |
| 10 | **Git Branching & Pull Request** | ✅ **100% Complete** | Branch `feature/bytespace-landing-auth` ➔ `main` |

---

## 🗺️ Complete Route & Feature Map

### 1. Route `/` — Landing Page (Figma Screen 1)
- **Header**: Sticky glassmorphism header with navigation anchors, auth CTAs, and mobile drawer.
- **Hero Section**:
  - Main headline: *"Get Access to 5000+ Courses Available"*.
  - Student photo framed in neon lime circular badge.
  - Floating metric badges (`⭐ 4.9/5.0`, `📚 5,000+ Courses`, `🎓 20k+ Students`).
  - Interactive search bar with instant keyword matching and trending filter tags (*Python*, *Figma*, *React*, *Data Science*).
  - 3D geometric SVG shapes (Lime Coil, White Torus, Lime Prism, Zigzag).
- **Partner Brands**: Monochrome partner logos (Google, Microsoft, Amazon, Slack, Spotify, Netflix).
- **Popular Courses Grid**:
  - Filter by category tabs (*All Courses*, *Web Development*, *UI/UX Design*, *Data Science*, etc.).
  - Interactive wishlist toggle (heart icon).
  - **Click any card**: Opens the **Quick-View Modal** with syllabus highlights, instructor info, and live enrollment button.
- **Why Us Categories**: 6 neon lime feature cards.
- **Mentorship Showcases**: Split sections with 98% completion rate badge and animated live mentor session badge.
- **CTA Banner**: Royal electric blue CTA card with 3D decorative shapes.
- **Testimonials**: Verified student outcome reviews with 5-star rating stars.
- **Footer**: Newsletter subscription with real-time email format validation and success feedback.

---

### 2. Route `/courses` — Dedicated Courses Catalog (Figma Screen 3)
- Accessible from the Navbar "Courses" link or Hero "Explore All Courses" button.
- **Catalog Controls**:
  - Search input with clear button.
  - Category filter pills.
  - Sorting dropdown (*Most Popular*, *Highest Rated*, *Price: Low to High*, *Price: High to Low*).
- **Grid of 12 Courses**: Each card displays category, rating, duration, lessons count, instructor avatar, price, and discount badge.
- **Pagination**: Interactive pagination buttons (1, 2, 3) with next/previous controls.
- **Card Click**: Navigates to the full Course Detail page (`/courses/[id]`).

---

### 3. Route `/courses/[id]` — Course Detail with 3 Tabs (Figma Screens 4, 5, 6)
- **Top Video Preview Player**: Branded player frame with play button overlay, video duration, and resolution badges.
- **Sticky Right Sidebar**: Price tag ($49.99), 40% OFF discount pill, 30-day money-back guarantee, feature bullet list, and "Enroll Now" CTA.
- **Interactive Multi-Tab Interface**:
  - **Tab 1: Overview (Screen 4)**:
    - Detailed course summary and prerequisites.
    - "What You Will Learn" 6-point checklist with checkmark icons.
    - Target audience description.
  - **Tab 2: Curriculum (Screen 5)**:
    - Modular course curriculum breakdown.
    - Expandable/collapsible accordion sections.
    - Lesson items with video preview tags and duration badges.
  - **Tab 3: Reviews (Screen 6)**:
    - Aggregate rating card (4.9 / 5.0 based on 2,840 ratings).
    - Five rating progress bars (5★: 82%, 4★: 12%, 3★: 4%, 2★: 1%, 1★: 1%).
    - Verified student review testimonials with timestamps and helpful counts.

---

### 4. Route `/signup` & `/login` — Split-Screen Auth & Google OAuth
- Split-screen layout matching Figma Screen 2.
- **Left Panel (Royal Blue)**:
  - ByteSpace brand mark.
  - 3D geometric visual shapes.
  - Interactive course progress preview card (`Introduction to UI/UX Design`, 68% complete).
  - Platform perks checklist.
- **Right Panel (Form)**:
  - Form validation for required fields, email format, and password minimum length.
  - Password visibility toggle (eye / eye-off icon).
  - Terms of service checkbox.
- **Google OAuth Flow (Interactive)**:
  - Clicking **"Continue with Google"** opens the **Google Identity Services** account selector.
  - Select **Sayed Sohanul Islam** (Candidate) or **Doin Tech Reviewer** (Evaluator).
  - Notice the simulated OAuth handshake spinner, followed by redirect to the homepage.
  - In the Navbar, notice the authenticated user avatar with Google badge, candidate name, and dropdown menu with "My Enrolled Courses" and "Sign Out" actions.

---

### 5. Route `/_not-found` — Custom 404 Page (Figma Screen 7)
- Visit any invalid route, e.g. [http://localhost:3000/404-test](http://localhost:3000/404-test).
- Faithfully reproduces Screen 7 with bold neon lime "404", branded background, and "Back to Homepage" navigation pill.

---

## 🔍 How to Test Responsiveness

| Screen Size | Target Viewport | Key Elements to Verify |
|---|---|---|
| **Mobile** | 375px — 430px (iPhone / Pixel) | Hamburger menu opens full drawer with nav links & Google Sign In. Hero stacks vertically. Grids collapse to 1 column. Sticky sidebar relocates naturally below content. |
| **Tablet** | 768px — 1024px (iPad) | 2-column course grid. Navbar expands gracefully. Quick-view modal scales to viewport width. |
| **Desktop** | 1280px — 1920px (MacBook / FHD) | Full multi-column layout, sticky course sidebar, animated floating hero badges, side-by-side split auth panels. |

---

## 💻 Local Code Verification

```powershell
# Check current branch
git branch -vv
# Expected: * feature/bytespace-landing-auth [origin/feature/bytespace-landing-auth]

# Verify build with zero errors
npm run build

# Start local server
npm run dev
# Visit http://localhost:3000
```
