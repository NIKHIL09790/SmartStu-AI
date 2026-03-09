"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showTopNav = !pathname.startsWith("/auth");

  return (
    <>
      {showTopNav && <Navbar />}
      <main className="content-shell">{children}</main>
      <BottomNav />
    </>
  );
}
