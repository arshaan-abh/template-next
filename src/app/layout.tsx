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
// https://prettier.io/docs/en/install.html#eslint-and-other-linters
// https://prettier.io/docs/en/install.html#git-hooks
// README.md
// LICENSE.txt
