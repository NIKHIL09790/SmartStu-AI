import type { Metadata } from "next";
import "./globals.css";
import AppFrame from "@/components/AppFrame";

export const metadata: Metadata = {
  title: "SmartStudy AI",
  description: "AI-powered study assistant frontend"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}
