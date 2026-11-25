import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Erbol Dosanov — Junior Frontend Developer (Notion 3D Portfolio)",
  description:
    "Erbol Dosanov — Junior Frontend Developer from Tashkent, Uzbekistan. Specializing in React, Next.js, TypeScript, Tailwind CSS, and 3D Web interfaces.",
  openGraph: {
    title: "Erbol Dosanov — Junior Frontend Developer",
    description:
      "Interactive Notion-style 3D Portfolio of Erbol Dosanov. React, Next.js, TypeScript, Tailwind CSS.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[var(--notion-bg)] text-[var(--notion-text)]">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
