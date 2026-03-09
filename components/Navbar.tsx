"use client";

import Link from "next/link";
import { BrainCircuit, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    const root = document.documentElement;
    const next = !dark;
    setDark(next);
    root.classList.toggle("dark", next);
  };

  return (
    <header className="sticky top-3 z-40 px-4 md:px-6">
      <nav className="glass mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <BrainCircuit className="h-5 w-5 text-midBlue" />
          <span>SmartStudy AI</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/planner">Planner</Link>
          <Link href="/chat">Chat</Link>
          <Link href="/quiz">Quiz</Link>
          <Link href="/progress">Progress</Link>
        </div>
        <button
          onClick={toggleDark}
          className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/10"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </header>
  );
}
