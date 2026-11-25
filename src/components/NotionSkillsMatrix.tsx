"use client";

import { skillCategories } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { Cpu } from "lucide-react";

export default function NotionSkillsMatrix() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 sm:px-8 mt-16 scroll-mt-20">
      <div className="pb-3 border-b border-[var(--notion-border)] mb-6">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--notion-text-muted)] mb-1">
          <Cpu size={13} className="text-blue-500" />
          <span>{tr(dict.skills.badge, lang)}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--notion-text)]">
          {tr(dict.skills.title, lang)}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--notion-text-muted)] mt-1">
          {tr(dict.skills.subtitle, lang)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="notion-card rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl select-none">{category.icon}</span>
                <h3 className="text-sm font-bold text-[var(--notion-text)]">
                  {tr(category.name, lang)}
                </h3>
              </div>

              <div className="space-y-2 mt-3">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-2 rounded-lg bg-[var(--notion-surface-hover)]/60 text-xs border border-[var(--notion-border)]/60"
                  >
                    <span className="font-semibold text-[var(--notion-text)]">
                      {item.name}
                    </span>
                    {item.level && (
                      <span className="text-[11px] text-[var(--notion-text-muted)] mt-0.5">
                        {item.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
