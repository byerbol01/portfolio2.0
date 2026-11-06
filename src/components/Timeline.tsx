"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { timeline } from "@/lib/data";

export default function Timeline() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {tr(dict.timeline.title, lang)}
        </motion.h2>

        <div className="relative mt-12 border-l border-border pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet" />
              <span className="text-xs font-semibold uppercase tracking-wide text-accent-blue">
                {tr(item.year, lang)}
              </span>
              <h3 className="mt-1 text-lg font-semibold">
                {tr(item.title, lang)}
              </h3>
              <p className="text-sm text-fg-muted">{tr(item.place, lang)}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">
                {tr(item.description, lang)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
