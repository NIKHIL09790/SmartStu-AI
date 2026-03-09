"use client";

import { useEffect, useMemo, useState } from "react";

const START_TIME = 25 * 60;

export default function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(START_TIME);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (secondsLeft === 0) setRunning(false);
  }, [secondsLeft]);

  const formatted = useMemo(() => {
    const min = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const sec = String(secondsLeft % 60).padStart(2, "0");
    return `${min}:${sec}`;
  }, [secondsLeft]);

  return (
    <section className="glass mx-auto max-w-xl space-y-6 p-6 text-center">
      <h2 className="text-xl font-semibold">Focus Session</h2>
      <p className="text-6xl font-bold tracking-tight text-midBlue dark:text-skyPrimary">{formatted}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setRunning((v) => !v)}
          className="rounded-xl bg-skyPrimary px-5 py-2.5 text-sm font-semibold text-white"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setSecondsLeft(START_TIME);
          }}
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold dark:border-white/20"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
