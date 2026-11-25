"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { personal } from "@/lib/data";
import { Sparkles, ArrowDown } from "lucide-react";

export default function NotionCover() {
  const { lang } = useLanguage();

  return (
    <div className="relative w-full">
      {/* Notion Cover Banner with subtle gradient and pattern */}
      <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-emerald-600/15 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-emerald-900/30 border-b border-[var(--notion-border)]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 dark:opacity-15 bg-[radial-gradient(#37352f_1px,transparent_1px)] [background-size:16px_16px]"
        />
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-[var(--notion-surface)]/80 px-2.5 py-1 text-[11px] font-mono text-[var(--notion-text-muted)] backdrop-blur border border-[var(--notion-border)]">
          <Sparkles size={11} className="text-amber-500" />
          <span>Notion Workspace · v2.5</span>
        </div>
      </div>

      {/* Page Title & Avatar Container */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="relative -mt-12 sm:-mt-14 mb-4 flex items-end justify-between">
          {/* Notion Page Avatar / Emoji */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="group relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-[var(--notion-surface)] border-2 border-[var(--notion-border)] shadow-md text-4xl sm:text-5xl select-none"
          >
            <span>👨‍💻</span>
            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-[var(--notion-surface)]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>
          </motion.div>

          {/* Quick Jump Action */}
          <a
            href="#projects"
            className="flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-[var(--notion-text-muted)] hover:bg-[var(--notion-surface-hover)] hover:text-[var(--notion-text)] border border-[var(--notion-border)] transition-colors"
          >
            <span>{tr(dict.projects.title, lang)}</span>
            <ArrowDown size={13} />
          </a>
        </div>

        {/* Page Title & Status */}
        <div className="mt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--notion-text)]">
            {personal.name}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[var(--notion-text-muted)] font-medium">
            {tr(personal.role, lang)}
          </p>
        </div>
      </div>
    </div>
  );
}
