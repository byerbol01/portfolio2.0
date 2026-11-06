"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Mail, Send } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { personal } from "@/lib/data";

export default function Contact() {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable; ignore
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {tr(dict.contact.title, lang)}
        </motion.h2>
        <p className="mt-3 text-sm text-fg-muted sm:text-base">
          {tr(dict.contact.subtitle, lang)}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={copyEmail}
            className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent-blue"
          >
            <Mail size={15} />
            {personal.email}
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <Send size={14} />
            Telegram
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
