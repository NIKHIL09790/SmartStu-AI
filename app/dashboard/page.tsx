"use client";

import ProgressCard from "@/components/ProgressCard";
import StudyCard from "@/components/StudyCard";
import { todaysPlan } from "@/lib/data";
import { useStudyStore } from "@/hooks/useStudyStore";

export default function DashboardPage() {
  const { streak, completedHours } = useStudyStore();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <ProgressCard label="Today's Progress" value={68} />
        <StudyCard title="Study Streak" description={`${streak} day consistency streak`} badge="Mint" />
        <StudyCard title="Hours Studied" description={`${completedHours} hrs completed today`} badge="On Track" />
      </div>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Today's Study Plan</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {todaysPlan.map((item) => (
            <StudyCard
              key={item.id}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          ))}
        </div>
      </section>
      <StudyCard title="Upcoming Tasks" description="Physics assignment, chemistry flashcards, and weekly mock quiz." />
    </div>
  );
}
