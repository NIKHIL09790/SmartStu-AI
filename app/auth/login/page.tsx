import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <form className="glass w-full max-w-md space-y-4 p-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 outline-none ring-skyPrimary/40 focus:ring dark:border-white/20 dark:bg-white/5"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 outline-none ring-skyPrimary/40 focus:ring dark:border-white/20 dark:bg-white/5"
          />
        </div>
        <button className="w-full rounded-xl bg-skyPrimary py-2.5 text-sm font-semibold text-white">Login</button>
        <p className="text-center text-sm text-slate-500 dark:text-slate-300">
          New here?{" "}
          <Link href="/auth/signup" className="text-midBlue dark:text-skyPrimary">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}
