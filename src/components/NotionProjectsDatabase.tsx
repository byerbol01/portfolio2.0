"use client";

import { useState, useMemo } from "react";
import { projects, Project } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import ProjectModal from "./ProjectModal";
import {
  LayoutGrid,
  Table as TableIcon,
  ExternalLink,
  Github,
  Filter,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";

export default function NotionProjectsDatabase() {
  const { lang } = useLanguage();
  const [view, setView] = useState<"gallery" | "table">("gallery");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => tags.add(t)));
    return ["All", "React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS"];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((p) =>
      p.tech.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
    );
  }, [selectedTag]);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-8 mt-14 scroll-mt-20">
      {/* Database Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-[var(--notion-border)]">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--notion-text-muted)] mb-1">
            <span className="h-2 w-2 rounded-sm bg-purple-500" />
            <span>{tr(dict.projects.badge, lang)}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--notion-text)]">
            {tr(dict.projects.title, lang)}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--notion-text-muted)] mt-1">
            {tr(dict.projects.subtitle, lang)}
          </p>
        </div>

        {/* View Switcher Controls (Gallery / Table) */}
        <div className="flex items-center gap-1 rounded-lg border border-[var(--notion-border)] p-1 bg-[var(--notion-surface)]">
          <button
            onClick={() => setView("gallery")}
            aria-label="Gallery View"
            className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              view === "gallery"
                ? "bg-[var(--notion-surface-hover)] text-[var(--notion-text)] shadow-xs"
                : "text-[var(--notion-text-muted)] hover:text-[var(--notion-text)]"
            }`}
          >
            <LayoutGrid size={13} />
            <span>{tr(dict.projects.galleryView, lang)}</span>
          </button>
          <button
            onClick={() => setView("table")}
            aria-label="Table View"
            className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              view === "table"
                ? "bg-[var(--notion-surface-hover)] text-[var(--notion-text)] shadow-xs"
                : "text-[var(--notion-text-muted)] hover:text-[var(--notion-text)]"
            }`}
          >
            <TableIcon size={13} />
            <span>{tr(dict.projects.tableView, lang)}</span>
          </button>
        </div>
      </div>

      {/* Tech Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar text-xs">
        <Filter size={12} className="text-[var(--notion-text-muted)] shrink-0 ml-1 mr-0.5" />
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-md px-2.5 py-1 text-xs font-mono transition-colors shrink-0 ${
              selectedTag === tag
                ? "bg-[var(--notion-text)] text-[var(--notion-bg)] font-semibold"
                : "bg-[var(--notion-surface)] border border-[var(--notion-border)] text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] hover:bg-[var(--notion-surface-hover)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* View Content: Gallery View */}
      {view === "gallery" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="notion-card group relative flex flex-col justify-between rounded-xl p-5 cursor-pointer"
            >
              <div>
                {/* Header item icon + type */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl select-none">💻</span>
                  <span className="notion-badge-gray px-2 py-0.5 rounded text-[11px] font-medium">
                    {tr(project.type, lang)}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--notion-text)] group-hover:text-[var(--notion-accent)] transition-colors flex items-center gap-1.5">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[var(--notion-accent)]"
                  />
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[var(--notion-text-muted)] line-clamp-3 leading-relaxed">
                  {tr(project.summary, lang)}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--notion-border)] space-y-3">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="notion-badge-blue px-1.5 py-0.5 rounded text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="notion-badge-gray px-1.5 py-0.5 rounded text-[10px] font-mono">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer action bar */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[11px] text-[var(--notion-text-muted)] flex items-center gap-1 font-mono">
                    <Maximize2 size={11} />
                    {tr(dict.projects.openModal, lang)}
                  </span>

                  <div
                    className="flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Source code"
                        className="text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Content: Table View */}
      {view === "table" && (
        <div className="notion-card rounded-xl overflow-hidden mt-2 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[var(--notion-border)] bg-[var(--notion-surface-hover)]/60 text-[var(--notion-text-muted)] font-medium">
                <th className="py-2.5 px-4">{tr(dict.projects.colName, lang)}</th>
                <th className="py-2.5 px-4 hidden sm:table-cell">{tr(dict.projects.colType, lang)}</th>
                <th className="py-2.5 px-4">{tr(dict.projects.colTech, lang)}</th>
                <th className="py-2.5 px-4 hidden md:table-cell">{tr(dict.projects.colStatus, lang)}</th>
                <th className="py-2.5 px-4 text-right">{tr(dict.projects.colLinks, lang)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--notion-border)]">
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="hover:bg-[var(--notion-surface-hover)] cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-semibold text-[var(--notion-text)]">
                    <div className="flex items-center gap-2">
                      <span>📄</span>
                      <span className="hover:underline">{project.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-[var(--notion-text-muted)] hidden sm:table-cell">
                    {tr(project.type, lang)}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="notion-badge-gray px-1.5 py-0.5 rounded text-[10px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    <span className="notion-badge-green px-2 py-0.5 rounded text-[11px] font-medium">
                      {project.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--notion-accent)] hover:underline flex items-center gap-0.5 font-medium"
                        >
                          <ExternalLink size={12} />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--notion-text-muted)] hover:text-[var(--notion-text)] ml-1"
                        >
                          <Github size={13} />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
