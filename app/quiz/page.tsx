"use client";

import { useState } from "react";
import QuizCard from "@/components/QuizCard";
import { quizQuestions } from "@/lib/data";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = quizQuestions[index];

  const next = () => {
    if (selected === current.answer) setScore((s) => s + 1);
    if (index + 1 >= quizQuestions.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Quiz</h1>
      {done ? (
        <section className="glass mx-auto max-w-xl space-y-3 p-6 text-center">
          <h2 className="text-2xl font-semibold">Quiz Complete</h2>
          <p className="text-lg">
            Score: <span className="font-bold text-mint">{score}</span> / {quizQuestions.length}
          </p>
          <button
            onClick={() => {
              setDone(false);
              setIndex(0);
              setScore(0);
              setSelected(null);
            }}
            className="rounded-xl bg-skyPrimary px-5 py-2.5 text-sm font-semibold text-white"
          >
            Retry
          </button>
        </section>
      ) : (
        <QuizCard
          question={current.question}
          options={current.options}
          selected={selected}
          onSelect={setSelected}
          onNext={next}
          isLast={index === quizQuestions.length - 1}
        />
      )}
    </div>
  );
}
