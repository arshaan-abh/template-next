import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "The description you want...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// TODO list:
// 1. strict
// 2. npx eslint-config-prettier
// 3. stylelint
// 4. stylelint-config-prettier
// 5. self made stuff
