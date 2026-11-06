"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { techStack } from "@/lib/data";

export default function TechStack() {
  const { lang } = useLanguage();
  const items = [...techStack, ...techStack];

  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {tr(dict.stack.title, lang)}
        </motion.h2>
        <p className="mt-3 max-w-md text-sm text-fg-muted sm:text-base">
          {tr(dict.stack.subtitle, lang)}
        </p>
      </div>

      <div className="marquee-wrapper relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32" />

        <div className="flex w-max gap-4 animate-marquee">
          {items.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              title={tech}
              className="group glass flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-fg-muted transition-colors hover:border-accent-blue hover:text-fg"
            >
              <Code2 size={16} className="text-accent-blue" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
