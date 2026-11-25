"use client";

import { useEffect } from "react";
import { Project } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--notion-surface)] border border-[var(--notion-border)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--notion-border)] bg-[var(--notion-surface)]/95 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-2 text-xs text-[var(--notion-text-muted)]">
            <Layers size={13} />
            <span>{tr(project.type, lang)}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-[var(--notion-surface-hover)] text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Title */}
          <div>
            <span className="text-3xl select-none mb-2 block">📄</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--notion-text)]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--notion-text-muted)]">
              {tr(project.summary, lang)}
            </p>
          </div>

          {/* Properties Grid */}
          <div className="space-y-2 border-y border-[var(--notion-border)] py-4 text-xs sm:text-sm">
            <div className="grid grid-cols-12 gap-2 items-center">
              <span className="col-span-4 text-[var(--notion-text-muted)]">
                {tr(dict.projects.colStatus, lang)}
              </span>
              <div className="col-span-8">
                <span className="inline-flex items-center gap-1.5 notion-badge-green px-2 py-0.5 rounded text-xs font-medium">
                  <CheckCircle2 size={12} />
                  {project.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 items-start">
              <span className="col-span-4 text-[var(--notion-text-muted)] pt-0.5">
                {tr(dict.projects.colTech, lang)}
              </span>
              <div className="col-span-8 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="notion-badge-gray px-2 py-0.5 rounded text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-12 gap-2 items-center pt-1">
              <span className="col-span-4 text-[var(--notion-text-muted)]">
                {tr(dict.projects.colLinks, lang)}
              </span>
              <div className="col-span-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--notion-accent)] hover:underline font-medium"
                  >
                    <ExternalLink size={13} />
                    <span>{tr(dict.projects.liveDemo, lang)}</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--notion-accent)] hover:underline font-medium"
                  >
                    <Github size={13} />
                    <span>{tr(dict.projects.sourceCode, lang)}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Highlights Callout */}
          <div className="notion-callout p-4 flex items-start gap-3 bg-[var(--notion-surface)]">
            <Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-[var(--notion-text)] mb-0.5">
                {tr(dict.projects.highlights, lang)}
              </p>
              <p className="text-[var(--notion-text-muted)] leading-relaxed">
                {tr(project.highlights, lang)}
              </p>
            </div>
          </div>

          {/* Detailed Points */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--notion-text-muted)]">
              {tr(dict.projects.achievements, lang)}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--notion-text)] leading-relaxed">
              {project.details[lang].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--notion-accent)] font-bold">▪</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--notion-border)]">
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-[var(--notion-text)] px-3.5 py-1.5 text-xs font-semibold text-[var(--notion-bg)] hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={13} />
                  <span>{tr(dict.projects.liveDemo, lang)}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--notion-border)] px-3.5 py-1.5 text-xs font-medium text-[var(--notion-text)] hover:bg-[var(--notion-surface-hover)] transition-colors"
                >
                  <Github size={13} />
                  <span>{tr(dict.projects.sourceCode, lang)}</span>
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-xs text-[var(--notion-text-muted)] hover:text-[var(--notion-text)]"
            >
              Esc to close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
