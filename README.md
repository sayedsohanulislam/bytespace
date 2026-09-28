# ByteSpace - Online Learning Platform

> Assessment submission for **Doin Tech Limited** — **Jr. Software Engineer (Frontend)** position.  
> Candidate: **Sayed Sohanul Islam**  
> Candidate Email: `sohanul06@gmail.com`  
> Phone: `01735736885`  
> Tracking ID: `0ba514a0-5786-4f49-a7b2-81272b5b96b2`

---

## 🚀 Live Demo & Links
- **Figma Design Reference**: [ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)
- **Live Deployment**: Deployed on Vercel
- **GitHub Repository**: [SayedSohan/bytespace-assessment](https://github.com/SayedSohan/bytespace-assessment)
- **Pull Request**: Dedicated feature branch `feature/bytespace-landing-auth` created with Pull Request targeting `main`.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server & Client Components)
- **Language**: TypeScript (strict type checking enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom design system token palette matching the Figma specs:
  - `brand-blue`: `#1E4FFF` (signature royal electric blue)
  - `brand-lime`: `#D2F829` (neon chartreuse accent)
  - `brand-dark`: `#0F172A` (deep slate)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual Assets**: Vector SVGs for 3D playful geometric brand shapes (coils, torus, prism, zig-zag) & high-resolution imagery.

---

## 📋 Features Implemented

### 1. Full Landing Page (`/`) — Required
- **Navigation Bar**: Sticky header with glassmorphism backdrop blur on scroll, active section anchors, brand logo mark, auth CTA pills, and mobile responsive drawer menu.
- **Hero Section**:
  - High-impact headline: *"Get Access to 5000+ Courses Available"*.
  - Interactive search bar with quick trending topic chips that instantly filter courses.
  - Custom 3D geometric SVG elements (Lime Coil, White Torus, Lime Prism, Zigzag).
  - Central visual showcase featuring a high-res student graphic with animated floating metrics:
    - ⭐ `4.9 / 5.0 (12k+ Reviews)`
    - 📚 `5,000+ Available Courses`
    - 🎓 `Over 20k+ Active Students`
- **Partner Logos Bar**: Clean monochrome tech brand marks (*Google, Microsoft, Amazon, Slack, Spotify, Netflix*).
- **Popular & Top Rated Courses**:
  - Category filter tabs (*All Courses, Web Development, UI/UX Design, Data Science, Digital Marketing, Graphic Design, Mobile Dev*).
  - Rich course cards featuring category badge, wishlist toggle, ratings, lessons & duration, instructor avatar & title, price with discount, and enrollment action.
  - **Interactive Quick-View Modal**: Clicking any card opens a detailed modal with syllabus breakdown, learning outcomes, instructor credentials, and live enrollment simulation.
- **Why Choose Us / Categories Grid**: 6 distinct feature categories (*Expert Mentors, Lifetime Access, 1-on-1 Mentorship, Accredited Certificates, Flexible Learning, Active Tech Community*) with neon lime icons.
- **Career Transformation Spotlight**: Split showcase detailing industry curriculum, hands-on portfolio projects, completion rate badges (98%), and career services.
- **Live Mentorship Section**: Live session showcase with animated pulsating session badge, instructor cards, and platform metrics (*250+ Mentors, 99% Satisfaction*).
- **Interactive Blue CTA Banner**: Royal blue card with playful 3D shapes, key value badges, and one-click signup links.
- **Student Testimonials**: Verified student outcome stories with 5-star ratings, company designations (*Stripe, Figma, CloudScale*), and review highlights.
- **Comprehensive Modern Footer**: Weekly newsletter subscription with live validation, multi-column navigation, copyright, and social links.

### 2. Login Page (`/login`) — Bonus / Extra Credit
- Split-screen branded experience with signature ByteSpace royal blue accent panel, 3D decorative shapes, and live student progress preview card.
- Form controls with email & password, interactive password show/hide eye toggle, remember me checkbox, Google & GitHub quick-fill shortcuts, form validation, and animated success feedback.

### 3. Sign Up Page (`/signup`) — Bonus / Extra Credit
- Matching split-screen design highlighting 30-day trial benefits and platform perks.
- Complete registration form with full name, email, password, terms agreement checkbox, social auth integration, and welcome feedback screen.

### 4. 404 Not Found Page (`/not-found`) — Extra Figma Screen
- Faithfully reproduces Screen 7 from the Figma canvas with bold neon lime "404", branded backdrop, and a return-to-home navigation pill.

---

## 🏃 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SayedSohan/bytespace-assessment.git
   cd bytespace-assessment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run a production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌿 Git Branching & Submission Details

- **Default Branch**: `main`
- **Feature Branch**: `feature/bytespace-landing-auth`
- **Candidate Name**: Sayed Sohanul Islam
- **Tracking ID**: `0ba514a0-5786-4f49-a7b2-81272b5b96b2`
- **Submission Portal**: [https://career.doin.tech/submit-assessment/](https://career.doin.tech/submit-assessment/)
