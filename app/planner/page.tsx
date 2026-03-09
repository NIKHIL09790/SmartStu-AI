"use client";

import ProgressCard from "@/components/ProgressCard";
import { plannerItems } from "@/lib/data";
import { useStudyStore } from "@/hooks/useStudyStore";

export default function PlannerPage() {
  const { doneTasks, toggleTask } = useStudyStore();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Study Planner</h1>
      <section className="grid gap-4 md:grid-cols-2">
        {plannerItems.map((item) => (
          <article key={item.subject} className="glass space-y-4 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{item.subject}</h2>
              <span className="text-xs text-slate-500 dark:text-slate-300">{item.slot}</span>
            </div>
            <ProgressCard label="Completion" value={item.progress} />
            <button
              onClick={() => toggleTask(item.subject)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                doneTasks[item.subject]
                  ? "bg-mint/20 text-emerald-700 dark:text-emerald-300"
                  : "bg-skyPrimary text-white"
              }`}
            >
              {doneTasks[item.subject] ? "Completed" : "Mark as done"}
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
