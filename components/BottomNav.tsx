"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, House, MessageSquare, Trophy, UserRound } from "lucide-react";

const tabs = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/planner", label: "Planner", icon: CalendarCheck },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/quiz", label: "Quiz", icon: Trophy },
  { href: "/auth", label: "Profile", icon: UserRound }
];

export default function BottomNav() {
  const pathname = usePathname();
  if (pathname === "/" || pathname.startsWith("/auth")) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="glass mx-auto grid max-w-md grid-cols-5 p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] transition ${
                active
                  ? "bg-skyPrimary/20 text-midBlue dark:bg-skyPrimary/25 dark:text-skyPrimary"
                  : "text-slate-500 dark:text-slate-300"
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
