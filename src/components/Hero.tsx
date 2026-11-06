"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { personal } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-3xl bg-bg-elevated/40" />
  ),
});

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent-blue/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent-violet/20 blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-fg-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {tr(dict.hero.available, lang)}
          </motion.span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            ERBOL
            <br />
            <span className="text-gradient">DOSANOV</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-fg-muted sm:text-xl">
            {tr(dict.hero.role, lang)}
          </p>

          <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-fg-muted sm:text-base">
            {tr(dict.hero.tagline, lang)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              {tr(dict.hero.viewWork, lang)}
            </a>
            <a
              href={personal.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent-blue"
            >
              <Download size={15} />
              {tr(dict.hero.downloadResume, lang)}
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <Mail size={15} />
              {tr(dict.hero.contactMe, lang)}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]"
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
