type StudyCardProps = {
  title: string;
  description: string;
  badge?: string;
};

export default function StudyCard({ title, description, badge }: StudyCardProps) {
  return (
    <article className="glass p-5 transition duration-300 hover:-translate-y-0.5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {badge && (
          <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </article>
  );
}
