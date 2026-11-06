"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { projects, type Project } from "@/lib/data";

export default function Projects() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {tr(dict.projects.title, lang)}
        </motion.h2>
        <p className="mt-3 max-w-md text-sm text-fg-muted sm:text-base">
          {tr(dict.projects.subtitle, lang)}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col rounded-3xl p-6"
            >
              <div
                aria-hidden
                className="absolute -top-10 right-6 h-24 w-24 rounded-full bg-accent-blue/20 blur-2xl transition-opacity group-hover:opacity-80"
              />
              <h3 className="text-lg font-semibold">
                {tr(project.title, lang)}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-fg-muted">
                {tr(project.subtitle, lang)}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">
                {tr(project.description, lang).slice(0, 120)}
                {tr(project.description, lang).length > 120 ? "…" : ""}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setActive(project)}
                  className="text-sm font-medium text-accent-blue hover:underline"
                >
                  {tr(dict.projects.details, lang)}
                </button>
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title.en} live demo`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title.en} source code`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-bg-elevated p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {tr(active.title, lang)}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-fg-muted">
                    {tr(active.subtitle, lang)}
                  </p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label={tr(dict.projects.close, lang)}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border"
                >
                  <X size={14} />
                </button>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-fg-muted">
                {tr(active.description, lang)}
              </p>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-wide text-fg-muted">
                {tr(dict.projects.tech, lang)}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg"
                  >
                    {tr(dict.projects.liveDemo, lang)}
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {active.githubUrl && (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium"
                  >
                    {tr(dict.projects.code, lang)}
                    <Github size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
