"use client";

type QuizCardProps = {
  question: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
  onNext: () => void;
  isLast: boolean;
};

export default function QuizCard({
  question,
  options,
  selected,
  onSelect,
  onNext,
  isLast
}: QuizCardProps) {
  return (
    <article className="glass space-y-4 p-5 md:p-6">
      <h2 className="text-xl font-semibold">{question}</h2>
      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
              selected === opt
                ? "border-skyPrimary bg-skyPrimary/15 text-midBlue dark:text-skyPrimary"
                : "border-slate-200 hover:border-skyPrimary/60 dark:border-white/15"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={!selected}
        className="rounded-xl bg-skyPrimary px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLast ? "Finish Quiz" : "Next"}
      </button>
    </article>
  );
}
