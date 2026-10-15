# 🌟 Anup Prajapati — Professional Software Engineer Portfolio

A premium, placement-ready full-stack portfolio website built for **Anup Prajapati**, B.Tech Computer Science & Design student at **R.R. Institute of Modern Technology, Lucknow (AKTU)**, specializing in **Java, DSA, and Full-Stack MERN Stack development**.

Designed with a dark navy glassmorphic aesthetic, electric blue and purple gradient accents, interactive desktop cursor physics, working dark/light theme toggle, genuine academic & capstone project documentation, and a validated contact system.

---

## 🚀 Key Features

1. **Design & Visual Experience**:
   - **Dark Navy / Futuristic Cyber Theme**: Deep navy backgrounds (`#030712`, `#060b18`, `#0a1024`) with electric cyan (`#00f2fe`), sky blue (`#38bdf8`), and purple (`#a855f7`) gradient accents.
   - **Glassmorphism**: Backdrop blur cards with subtle glowing borders and shadow depths.
   - **Working Theme Toggle**: Seamless light and dark mode switching with `localStorage` persistence and automatic system preference detection.
   - **Responsive Layout**: Designed for mobile, tablet, laptop, and ultra-wide desktop screens.

2. **Silky Custom Cursor Experience**:
   - Small cursor dot following the mouse instantly.
   - Larger circular ring smoothly trailing with physics interpolation (`requestAnimationFrame`).
   - Gentle expansion and color shifts when hovering over buttons, links, project cards, and inputs.
   - Touch screen detection: automatically disables on mobile and touch devices.
   - `prefers-reduced-motion` detection: honors accessibility preferences.
   - Strict `pointer-events: none` on all decorative layers so clicks, text selection, and keyboard navigation are never obstructed.

3. **Featured Projects (Real Academic & Capstone Documentation)**:
   - **AI-Based CRM System**: Customer relationship management platform with Google Gemini AI integration, sales pipeline tracking, and graceful fallback handling.
   - **CareerPilot AI**: Full-stack placement readiness application with multi-format resume parser (PDF/DOCX), ATS scoring engine, and 5-criteria mock interview simulator.
   - **CloudDesk Enterprise Support**: High-performance customer support ticketing system engineered in Java 21 and Spring Boot with Spring Data JPA and MySQL.
   - **ShopNest E-Commerce**: Full-stack MERN e-commerce application with JWT authentication, real-time cart state, and order lifecycle management.
   - **Interactive Modal**: Recruiter-focused modal detailing system architecture, modules, and tech stacks for every project.

4. **Authentic Academic & Personal Profile**:
   - **Profile Photo**: Authentic professional portrait from Anup's profile.
   - **Education**: B.Tech in Computer Science & Design (2023–2027) at R.R. Group of Institutions (AKTU, Lucknow) with college emblem, plus Class XII and Class X records.
   - **Technical Skills**: Java, JavaScript, Python basics, SQL, HTML, CSS, React.js, Node.js, Express.js, MongoDB, Git, GitHub, OOP, DBMS, and DSA.
   - **Experience & Certifications**: MERN Stack Internship, Data Analytics Internship, and IBM SkillsBuild Developer Certification.
   - **Resume Viewer / Downloader**: Modal with inline PDF viewer and instant download for `Anup_Prajapati_Resume.pdf`.

5. **Interactive Validated Contact System**:
   - Form fields: Name, Email, Subject, Message.
   - Live client-side validation with real-time error feedback.
   - Express REST API (`/api/contact`) with JSON file store (`server/data/messages.json`).
   - Celebratory confetti feedback (`canvas-confetti`) on successful submission.
   - 1-Click "Copy Email" button (`anuprajprajapati123@gmail.com`) with instant toast confirmation.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite 5, Tailwind CSS, Lucide React, Canvas Confetti |
| **Backend** | Node.js, Express.js, CORS, Morgan, Dotenv |
| **Styling & Effects** | Glassmorphism, Tailwind Keyframe Animations, Canvas Confetti, Custom Cursor |
| **Language Standards** | ES6+ Modules, Semantic HTML5, CSS3 Variables |

---

## 💻 Exact Windows Terminal Commands to Run

### Step 1: Install Dependencies (All in One)
Open PowerShell or Command Prompt in the project folder:
```powershell
npm run install:all
```
*(Or install individually: `npm install && cd client && npm install && cd ../server && npm install`)*

---

### Step 2: Start Both Frontend and Backend Concurrently
Run this command from the root folder:
```powershell
npm run dev
```
- **Frontend URL**: [http://localhost:3000](http://localhost:3000)
- **Backend API URL**: [http://localhost:5000](http://localhost:5000)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

### Alternative: Run Frontend or Backend Separately

**To run only the Frontend:**
```powershell
npm run client
```

**To run only the Express Backend:**
```powershell
npm run server
```

**To Build for Production:**
```powershell
npm run build
```

---

## 📂 Project Directory Structure

```text
desktop po/
├── client/                     # React + Vite + Tailwind Frontend
│   ├── public/                 # Static Assets
│   │   ├── anup_prajapati.jpg  # Genuine Profile Photo
│   │   ├── Anup_Prajapati_Resume.pdf # Genuine PDF Resume
│   │   ├── rrimt_logo.png      # College Emblem
│   │   └── favicon.svg         # Gradient SVG Favicon
│   ├── src/
│   │   ├── components/         # Modular React Components
│   │   │   ├── About.jsx       # Academic Journey & Pillars
│   │   │   ├── Contact.jsx     # Validated Contact Form & Info
│   │   │   ├── CustomCursor.jsx# Silky Trailing Custom Cursor
│   │   │   ├── Education.jsx   # B.Tech CSD & Schooling
│   │   │   ├── Experience.jsx  # Internships & IBM Certification
│   │   │   ├── Footer.jsx      # Social Links & Copyright
│   │   │   ├── Hero.jsx        # Intro, Dynamic Roles & Badges
│   │   │   ├── Navbar.jsx      # Navigation, Theme & Resume Trigger
│   │   │   ├── ProjectModal.jsx# Case Study Architecture Modal
│   │   │   ├── Projects.jsx    # 4 Featured Project Cards
│   │   │   ├── ResumeModal.jsx # Inline Resume Viewer & Downloader
│   │   │   └── Skills.jsx      # Categorized Technical Skills
│   │   ├── context/
│   │   │   └── ThemeContext.jsx# Dark/Light Theme Provider
│   │   ├── data/               # Authentic Portfolio Data
│   │   │   ├── educationData.js
│   │   │   ├── experienceData.js
│   │   │   ├── projectsData.js
│   │   │   └── skillsData.js
│   │   ├── App.jsx             # Main Application Root
│   │   ├── index.css           # Glassmorphism & Custom Tailwind CSS
│   │   └── main.jsx            # React Entry Point
│   ├── index.html              # HTML5 Template with JetBrains & Jakarta Fonts
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js          # Proxies /api to Express on port 5000
│
├── server/                     # Node.js + Express Backend
│   ├── data/                   # JSON message store (gitignored)
│   ├── .env.example            # Environment variables sample
│   ├── package.json
│   └── server.js               # Express Server & Endpoints
│
├── .env.example                # Root environment template
├── .gitignore
├── package.json                # Root orchestration scripts
└── README.md                   # Full documentation
```

---

## 🔒 Environment Variables (`.env.example`)

Copy `.env.example` to `.env` in the root and in `server/.env`:
```env
PORT=5000
NODE_ENV=development
CONTACT_RECEIVER_EMAIL=anuprajprajapati123@gmail.com

# Optional: MongoDB URI for cloud database storage
# MONGODB_URI=mongodb://127.0.0.1:27017/anup_portfolio
```

---

## 📋 Details or Credentials to Provide (Optional)

1. **LinkedIn Custom Handle**: If you have a custom LinkedIn slug (e.g. `linkedin.com/in/anup-prajapati-csd`), update the links in `client/src/components/Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.
2. **Individual Project GitHub Repositories**: Currently, project GitHub buttons point to your verified GitHub profile (`https://github.com/kkt9519`). If you push individual public repositories (e.g. `kkt9519/ai-crm`, `kkt9519/careerpilot-ai`), simply update the `githubUrl` field in `client/src/data/projectsData.js`.
3. **MongoDB Atlas URI (Optional)**: If you'd like contact messages automatically saved to a cloud MongoDB cluster, set `MONGODB_URI` in `server/.env`. (By default, the server safely stores them in `server/data/messages.json`).
