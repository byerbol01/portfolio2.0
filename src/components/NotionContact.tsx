"use client";

import { useState } from "react";
import { personal } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import {
  Send,
  Github,
  Mail,
  Copy,
  Check,
  FileDown,
  Sparkles,
} from "lucide-react";

export default function NotionContact() {
  const { lang } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-8 mt-16 scroll-mt-20">
      <div className="notion-card rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-[var(--notion-surface)] to-[var(--notion-surface-hover)] border border-[var(--notion-border)]">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full notion-badge-blue px-2.5 py-1 text-xs font-mono font-medium">
            <Sparkles size={12} className="text-blue-500" />
            <span>{tr(dict.contact.badge, lang)}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--notion-text)]">
            {tr(dict.contact.title, lang)}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--notion-text-muted)] leading-relaxed">
            {tr(dict.contact.subtitle, lang)}
          </p>
        </div>

        {/* Action Grid */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* Telegram Button */}
          <a
            href={personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--notion-text)] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[var(--notion-bg)] hover:opacity-90 transition-opacity"
          >
            <Send size={15} />
            <span>{tr(dict.contact.telegramBtn, lang)}</span>
          </a>

          {/* GitHub Button */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--notion-border)] bg-[var(--notion-surface)] px-4 py-2.5 text-xs sm:text-sm font-medium text-[var(--notion-text)] hover:bg-[var(--notion-surface-hover)] transition-colors"
          >
            <Github size={15} />
            <span>{tr(dict.contact.githubBtn, lang)}</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--notion-border)] bg-[var(--notion-surface)] px-4 py-2.5 text-xs sm:text-sm font-medium text-[var(--notion-text)] hover:bg-[var(--notion-surface-hover)] transition-colors"
          >
            {copiedEmail ? <Check size={15} className="text-emerald-500" /> : <Mail size={15} />}
            <span>{copiedEmail ? tr(dict.properties.copied, lang) : personal.email}</span>
          </button>

          {/* Download Resume PDF */}
          <a
            href={personal.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--notion-border)] bg-[var(--notion-surface)] px-4 py-2.5 text-xs sm:text-sm font-medium text-[var(--notion-text)] hover:bg-[var(--notion-surface-hover)] transition-colors"
          >
            <FileDown size={15} />
            <span>{tr(dict.contact.downloadResumeBtn, lang)}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
