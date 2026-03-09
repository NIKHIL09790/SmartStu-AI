# SmartStudy AI

SmartStudy AI is a responsive, Apple-inspired frontend for an AI-powered study assistant built with Next.js 14, React, TypeScript, TailwindCSS, Zustand, and Recharts.

## Features

- Minimal, elegant, glassmorphism-based UI
- Light and dark mode support
- Responsive layout (mobile-first)
- Bottom navigation for mobile
- Smooth transitions and rounded card-based design
- Placeholder data (no backend required)

## Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- TailwindCSS
- Zustand
- Recharts
- Lucide Icons

## Pages

- `/` Landing page
- `/auth/login` Login
- `/auth/signup` Signup
- `/dashboard` Dashboard
- `/planner` Study Planner
- `/chat` AI Tutor Chat
- `/quiz` Quiz (MCQ flow + result)
- `/progress` Progress Tracker (charts)
- `/pomodoro` Pomodoro Timer

## Components

- `components/Navbar.tsx`
- `components/BottomNav.tsx`
- `components/StudyCard.tsx`
- `components/ProgressCard.tsx`
- `components/ChatMessage.tsx`
- `components/QuizCard.tsx`
- `components/Timer.tsx`

## Project Structure

```txt
app/
  auth/
    login/page.tsx
    signup/page.tsx
    page.tsx
  chat/page.tsx
  dashboard/page.tsx
  planner/page.tsx
  pomodoro/page.tsx
  progress/page.tsx
  quiz/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
hooks/
lib/
styles/
tailwind.config.ts
postcss.config.mjs
next.config.mjs
tsconfig.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Open in browser

Go to:

```txt
http://localhost:3000
```

## Notes

- This is currently frontend-only with placeholder/mock data.
- You can extend the Zustand store and connect APIs later.
