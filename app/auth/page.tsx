import Link from "next/link";

export default function AuthIndex() {
  return (
    <section className="mx-auto flex max-w-md flex-col gap-4 pt-10">
      <h1 className="text-3xl font-bold">Welcome back</h1>
      <p className="text-sm text-slate-600 dark:text-slate-300">Choose an option to continue.</p>
      <Link href="/auth/login" className="rounded-xl bg-skyPrimary px-5 py-3 text-center text-sm font-semibold text-white">
        Login
      </Link>
      <Link
        href="/auth/signup"
        className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold dark:border-white/20"
      >
        Create Account
      </Link>
    </section>
  );
}
