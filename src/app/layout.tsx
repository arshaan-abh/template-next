import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/utils/cn";
import "./globals.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Next.js Template",
  description: "The description you want...",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface Layout {
  children: ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
};

export default Layout;

/* TODOs
stylelint
stylelint-config-prettier
https://stylelint.io/user-guide/customize#strictness
https://medium.com/tbc-engineering/why-and-how-to-lint-like-a-pro-173fc4a73899

migrate eslint to v9

Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
*/
