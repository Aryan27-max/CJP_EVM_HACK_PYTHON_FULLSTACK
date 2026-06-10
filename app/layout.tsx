import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PYTHON FULLSTACK - EVM HACK",
  description: "Recreating the Stitch design 1:1 inside the Next.js application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&amp;family=Inter:wght@400;500;700&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

