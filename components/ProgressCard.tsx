type ProgressCardProps = {
  label: string;
  value: number;
};

export default function ProgressCard({ label, value }: ProgressCardProps) {
  return (
    <section className="glass p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-medium">{label}</h3>
        <span className="text-sm font-semibold text-mint">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-mint to-skyPrimary transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </section>
  );
}
