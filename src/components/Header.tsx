"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";

const sections = [
  { id: "about", key: "about" as const },
  { id: "stack", key: "stack" as const },
  { id: "projects", key: "projects" as const },
  { id: "experience", key: "experience" as const },
  { id: "contact", key: "contact" as const },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl glass px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-fg sm:text-base"
        >
          ERBOL<span className="text-accent-blue">.</span>DEV
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {tr(dict.nav[s.key], lang)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="flex h-9 items-center gap-1 rounded-full border border-border px-3 text-xs font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <Languages size={14} />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted md:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-sm font-semibold">ERBOL.DEV</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
              >
                <X size={16} />
              </button>
            </div>
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06 } },
              }}
              className="mt-8 flex flex-col items-center gap-6"
            >
              {sections.map((s) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  variants={{
                    closed: { opacity: 0, y: 10 },
                    open: { opacity: 1, y: 0 },
                  }}
                  className="text-xl font-medium text-fg"
                >
                  {tr(dict.nav[s.key], lang)}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
