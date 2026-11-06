import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const siteUrl = "https://erbol-portfolio-v2.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Erbol Dosanov — Frontend Developer",
  description:
    "Erbol Dosanov — Junior Frontend Developer from Tashkent, Uzbekistan. React, Next.js, TypeScript, Tailwind CSS.",
  openGraph: {
    title: "Erbol Dosanov — Frontend Developer",
    description:
      "Junior Frontend Developer from Tashkent, Uzbekistan. React, Next.js, TypeScript, Tailwind CSS.",
    url: siteUrl,
    siteName: "Erbol Dosanov Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erbol Dosanov — Frontend Developer",
    description:
      "Junior Frontend Developer from Tashkent, Uzbekistan. React, Next.js, TypeScript, Tailwind CSS.",
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
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
