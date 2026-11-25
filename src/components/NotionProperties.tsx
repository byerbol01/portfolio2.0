"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { personal } from "@/lib/data";
import {
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  Mail,
  Send,
  Github,
  FileDown,
  Copy,
  Check,
  ExternalLink,
  Box,
} from "lucide-react";

const NotionScene3D = dynamic(() => import("./NotionScene3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-44 w-44 animate-pulse rounded-2xl bg-[var(--notion-surface-hover)] border border-[var(--notion-border)]" />
    </div>
  ),
});

export default function NotionProperties() {
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
    <div className="mx-auto max-w-5xl px-4 sm:px-8 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Notion Database Properties & Callout (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Properties Table Container */}
          <div className="space-y-2 border-b border-[var(--notion-border)] pb-6 text-sm">
            {/* Property: Role */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <Briefcase size={14} />
                <span>{tr(dict.properties.role, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9 flex flex-wrap gap-1.5">
                <span className="notion-badge-blue px-2 py-0.5 rounded text-xs font-medium">
                  React
                </span>
                <span className="notion-badge-purple px-2 py-0.5 rounded text-xs font-medium">
                  Next.js
                </span>
                <span className="notion-badge-green px-2 py-0.5 rounded text-xs font-medium">
                  TypeScript
                </span>
                <span className="notion-badge-orange px-2 py-0.5 rounded text-xs font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Property: Status */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <CheckCircle2 size={14} />
                <span>{tr(dict.properties.status, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9">
                <span className="inline-flex items-center gap-1.5 notion-badge-green px-2.5 py-0.5 rounded-full text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {tr(personal.status, lang)}
                </span>
              </div>
            </div>

            {/* Property: Location */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <MapPin size={14} />
                <span>{tr(dict.properties.location, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9 text-xs sm:text-sm text-[var(--notion-text)]">
                {personal.location}
              </div>
            </div>

            {/* Property: Age */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <Calendar size={14} />
                <span>{tr(dict.properties.age, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9 text-xs sm:text-sm text-[var(--notion-text)]">
                {personal.age} {lang === "ru" ? "лет" : "y.o."}
              </div>
            </div>

            {/* Property: Email */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <Mail size={14} />
                <span>{tr(dict.properties.email, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9 flex items-center gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs sm:text-sm text-[var(--notion-accent)] hover:underline font-mono"
                >
                  {personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex h-5 items-center gap-1 rounded bg-[var(--notion-surface-hover)] px-1.5 text-[11px] text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] transition-colors"
                >
                  {copiedEmail ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                  <span>{copiedEmail ? tr(dict.properties.copied, lang) : tr(dict.properties.copyEmail, lang)}</span>
                </button>
              </div>
            </div>

            {/* Property: Telegram */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <Send size={14} />
                <span>{tr(dict.properties.telegram, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9">
                <a
                  href={personal.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-[var(--notion-accent)] hover:underline font-mono"
                >
                  <span>{personal.telegramHandle}</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Property: GitHub */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <Github size={14} />
                <span>{tr(dict.properties.github, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm text-[var(--notion-accent)] hover:underline font-mono"
                >
                  <span>{personal.githubUser}</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Property: Resume PDF */}
            <div className="grid grid-cols-12 items-center py-1 gap-2">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-1.5 text-xs text-[var(--notion-text-muted)]">
                <FileDown size={14} />
                <span>{tr(dict.properties.resume, lang)}</span>
              </div>
              <div className="col-span-8 sm:col-span-9">
                <a
                  href={personal.resumeFile}
                  download
                  className="inline-flex items-center gap-1.5 rounded-md bg-[var(--notion-text)] px-3 py-1 text-xs font-medium text-[var(--notion-bg)] hover:opacity-90 transition-opacity"
                >
                  <FileDown size={13} />
                  <span>{tr(dict.properties.downloadResume, lang)}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Notion Callout Block: Summary */}
          <div className="notion-callout p-4 flex items-start gap-3 bg-[var(--notion-surface)]">
            <span className="text-xl select-none">💡</span>
            <div className="text-xs sm:text-sm leading-relaxed text-[var(--notion-text)]">
              <p className="font-semibold text-[var(--notion-text)] mb-1">
                {tr(dict.callouts.summaryTitle, lang)}
              </p>
              <p className="text-[var(--notion-text-muted)]">
                {tr(personal.summary, lang)}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Notion Monolith Canvas (5 cols) */}
        <div className="lg:col-span-5 h-[340px] sm:h-[380px] w-full notion-card rounded-2xl relative overflow-hidden flex flex-col">
          {/* 3D Header Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-[var(--notion-surface)]/85 px-2.5 py-1 text-[11px] font-mono text-[var(--notion-text-muted)] border border-[var(--notion-border)] backdrop-blur">
            <Box size={12} className="text-blue-500" />
            <span>{tr(dict.scene3d.badge, lang)}</span>
          </div>

          {/* Canvas */}
          <div className="flex-1 w-full h-full">
            <NotionScene3D />
          </div>

          {/* 3D Bottom Hint */}
          <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
            <span className="text-[10px] font-mono text-[var(--notion-text-muted)] bg-[var(--notion-surface)]/80 px-2 py-0.5 rounded-full border border-[var(--notion-border)]">
              {tr(dict.scene3d.hint, lang)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
