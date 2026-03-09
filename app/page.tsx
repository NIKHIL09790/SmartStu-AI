import Link from "next/link";
import StudyCard from "@/components/StudyCard";
import { featureCards } from "@/lib/data";

export default function LandingPage() {
  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-[24px] bg-hero-gradient px-6 py-14 md:px-10">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-skyPrimary/20 blur-2xl" />
        <p className="mb-3 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-midBlue dark:bg-white/10">
          AI-powered learning for modern students
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Learn smarter with <span className="title-gradient">SmartStudy AI</span>
        </h1>
        <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          Plan, revise, quiz, and track your progress in one focused workspace.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/auth/signup" className="rounded-xl bg-skyPrimary px-5 py-3 text-sm font-semibold text-white">
            Start Free
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold dark:border-white/20 dark:bg-white/10"
          >
            View Demo
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold md:text-3xl">Core Features</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((f) => (
            <StudyCard key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
