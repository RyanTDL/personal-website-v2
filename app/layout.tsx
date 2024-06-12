import type { Metadata } from "next";
import { type ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "Introducing me!",
};

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
  navbar: ReactNode;
  hero: ReactNode;
  intro: ReactNode;
  work: ReactNode;
  projects: ReactNode;
  contact: ReactNode;
};

export default function RootLayout(props : RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex w-full h-full flex-col gap-4 px-6 pt-6">
          {/* {props.navbar} */}
          {props.hero}
        </main>

      </body>
    </html>
  );
}
