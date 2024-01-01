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
// 1. package.json metadata
// 2. strict
// 3. npx eslint-config-prettier
// 4. stylelint
// 5. stylelint-config-prettier
// 6. self made stuff
