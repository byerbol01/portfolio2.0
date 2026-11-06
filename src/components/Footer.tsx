"use client";

import { useLanguage } from "./LanguageProvider";
import { dict, tr } from "@/lib/translations";
import { personal } from "@/lib/data";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-fg-muted sm:flex-row">
        <span>
          © {year} {personal.name} — {tr(dict.footer.rights, lang)}
        </span>
        <span>{tr(dict.footer.builtWith, lang)}</span>
      </div>
    </footer>
  );
}
