"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import {
  Sun,
  Moon,
  Share2,
  Check,
  Star,
  FileText,
  Layers,
  FolderGit2,
  Cpu,
  Mail,
  Languages,
} from "lucide-react";

export default function NotionHeader() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [starred, setStarred] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // ignore
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--notion-border)] bg-[var(--notion-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Notion Breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
          <span className="flex items-center gap-1 hover:text-[var(--notion-text)]">
            <Layers size={13} />
            {tr(dict.nav.workspace, lang)}
          </span>
          <span className="opacity-40">/</span>
          <span className="hidden sm:inline hover:text-[var(--notion-text)]">
            {tr(dict.nav.developers, lang)}
          </span>
          <span className="hidden opacity-40 sm:inline">/</span>
          <span className="flex items-center gap-1 font-medium text-[var(--notion-text)]">
            <span>👨‍💻</span> Erbol Dosanov
          </span>
        </div>

        {/* Quick Nav Anchors & Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Section links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 text-xs text-[var(--notion-text-muted)] mr-2">
            <a
              href="#projects"
              className="px-2 py-1 rounded hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] transition-colors"
            >
              {tr(dict.nav.projects, lang)}
            </a>
            <a
              href="#skills"
              className="px-2 py-1 rounded hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] transition-colors"
            >
              {tr(dict.nav.skills, lang)}
            </a>
            <a
              href="#experience"
              className="px-2 py-1 rounded hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] transition-colors"
            >
              {tr(dict.nav.experience, lang)}
            </a>
            <a
              href="#contact"
              className="px-2 py-1 rounded hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] transition-colors"
            >
              {tr(dict.nav.contact, lang)}
            </a>
          </nav>

          {/* Star Button */}
          <button
            onClick={() => setStarred(!starred)}
            aria-label="Star page"
            className="flex h-7 w-7 items-center justify-center rounded hover:bg-[var(--notion-surface-hover)] text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] transition-colors"
          >
            <Star
              size={14}
              className={starred ? "fill-amber-400 text-amber-400" : ""}
            />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            aria-label="Share page"
            className="flex h-7 items-center gap-1 rounded px-2 text-xs font-medium text-[var(--notion-text-muted)] hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] transition-colors"
          >
            {copied ? <Check size={13} className="text-emerald-500" /> : <Share2 size={13} />}
            <span className="hidden sm:inline">
              {copied ? tr(dict.header.copyLinkSuccess, lang) : tr(dict.header.share, lang)}
            </span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex h-7 items-center gap-1 rounded px-2 text-xs font-mono font-medium border border-[var(--notion-border)] hover:bg-[var(--notion-surface-hover)] text-[var(--notion-text)] transition-colors"
          >
            <Languages size={12} />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-7 w-7 items-center justify-center rounded border border-[var(--notion-border)] hover:bg-[var(--notion-surface-hover)] text-[var(--notion-text)] transition-colors"
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>
        </div>
      </div>
    </header>
  );
}
