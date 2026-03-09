"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { progressData } from "@/lib/data";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Progress Tracker</h1>
      <section className="glass space-y-6 p-5 md:p-6">
        <h2 className="text-lg font-semibold">Study Hours</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.25} />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#38BDF8" strokeWidth={3} />
              <Line type="monotone" dataKey="chapters" stroke="#34D399" strokeWidth={3} />
              <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
