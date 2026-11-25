"use client";

import { notionTimeline, personal } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { GraduationCap, Briefcase, Languages as LangIcon } from "lucide-react";

export default function NotionExperience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 sm:px-8 mt-16 scroll-mt-20">
      <div className="pb-3 border-b border-[var(--notion-border)] mb-6">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--notion-text-muted)] mb-1">
          <GraduationCap size={13} className="text-emerald-500" />
          <span>{tr(dict.timeline.badge, lang)}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--notion-text)]">
          {tr(dict.timeline.title, lang)}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--notion-text-muted)] mt-1">
          {tr(dict.timeline.subtitle, lang)}
        </p>
      </div>

      <div className="space-y-6">
        {/* Experience & Education List */}
        <div className="space-y-4">
          {notionTimeline.map((item, idx) => (
            <div
              key={idx}
              className="notion-card rounded-xl p-5 sm:p-6 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl select-none">
                    {idx === 0 ? "💻" : "🎓"}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--notion-text)]">
                      {tr(item.title, lang)}
                    </h3>
                    <p className="text-xs text-[var(--notion-text-muted)] font-medium">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="notion-badge-gray px-2 py-0.5 rounded text-[11px] font-mono">
                    {tr(item.period, lang)}
                  </span>
                  <span className="notion-badge-green px-2 py-0.5 rounded text-[11px] font-medium">
                    {tr(item.badge, lang)}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--notion-text)] pt-2 border-t border-[var(--notion-border)]">
                {item.points[lang].map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span className="text-[var(--notion-text-muted)] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Spoken Languages Card */}
        <div className="notion-card rounded-xl p-5 sm:p-6 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <LangIcon size={16} className="text-purple-500" />
            <h3 className="text-sm font-bold text-[var(--notion-text)]">
              {tr(dict.languages.title, lang)}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {personal.languages.map((l, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-[var(--notion-surface-hover)]/60 border border-[var(--notion-border)]/60 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-[var(--notion-text)]">
                  <span>{tr(l.name, lang)}</span>
                  <span className="text-[11px] text-[var(--notion-text-muted)] font-mono">
                    {l.proficiency}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[var(--notion-border)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--notion-accent)] rounded-full"
                    style={{ width: `${l.proficiency}%` }}
                  />
                </div>
                <p className="text-[11px] text-[var(--notion-text-muted)] pt-0.5">
                  {tr(l.level, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
