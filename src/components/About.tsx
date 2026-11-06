"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { personal } from "@/lib/data";

export default function About() {
  const { lang } = useLanguage();
  const f = dict.about.facts;

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {tr(dict.about.title, lang)}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass flex aspect-square w-full max-w-[280px] items-center justify-center rounded-3xl"
          >
            {/*
              Photo placeholder.
              Replace with: <Image src="/photo.jpg" alt={personal.name} fill className="rounded-3xl object-cover" />
            */}
            <div className="flex flex-col items-center gap-2 text-fg-muted">
              <User size={40} />
              <span className="text-xs">{personal.name}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="max-w-2xl text-sm leading-relaxed text-fg-muted sm:text-base">
              {tr(dict.about.summary, lang)}
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-fg-muted">
              {tr(dict.about.factsTitle, lang)}
            </h3>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Fact label={tr(f.location, lang)} value={personal.location} />
              <Fact
                label={tr(f.experience, lang)}
                value={tr(f.experienceValue, lang)}
              />
              <Fact
                label={tr(f.education, lang)}
                value={tr(f.educationValue, lang)}
              />
              <Fact
                label={tr(f.languages, lang)}
                value={tr(f.languagesValue, lang)}
              />
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <dt className="text-xs uppercase tracking-wide text-fg-muted">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-fg">{value}</dd>
    </div>
  );
}
