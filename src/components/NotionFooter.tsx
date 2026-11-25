"use client";

import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { ArrowUp } from "lucide-react";

export default function NotionFooter() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-8 py-12 mt-16 border-t border-[var(--notion-border)] text-xs text-[var(--notion-text-muted)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-medium text-[var(--notion-text)]">
            Erbol Dosanov · Notion 3D Portfolio
          </p>
          <p className="mt-1">
            {tr(dict.footer.builtWith, lang)}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--notion-border)] hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] transition-colors font-mono"
        >
          <span>Top</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
