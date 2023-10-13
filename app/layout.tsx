import "./globals.css";
import type { Metadata } from "next";
import { Lobster, Noto_Sans } from "next/font/google";
import NavBar from "./components/NavBar";
import Bot from "./components/Bot";

const lobser = Noto_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Elon's jigsaw",
  description: "龚一隆的个人作品集",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <head>
        <meta name="renderer" content="webkit" />
        <meta name="referrer" content="no-referrer" />
      </head>
      <body className={lobser.className}>
        <NavBar />
        <main>{children}</main>
        <Bot />
      </body>
    </html>
  );
}
