import type { Lang } from "./data";

export const dict = {
  nav: {
    about: { en: "About", ru: "Обо мне" },
    stack: { en: "Stack", ru: "Технологии" },
    projects: { en: "Projects", ru: "Проекты" },
    experience: { en: "Experience", ru: "Опыт" },
    contact: { en: "Contact", ru: "Контакты" },
  },
  hero: {
    role: { en: "Frontend Developer", ru: "Frontend Developer" },
    tagline: {
      en: "I build fast, clean React & Next.js interfaces — and I'm always looking for ways to make them feel better to use.",
      ru: "Создаю быстрые и аккуратные интерфейсы на React и Next.js — и постоянно ищу способы сделать их удобнее.",
    },
    viewWork: { en: "View My Work", ru: "Мои проекты" },
    downloadResume: { en: "Download Resume", ru: "Скачать резюме" },
    contactMe: { en: "Contact Me", ru: "Связаться" },
    available: { en: "Available for opportunities", ru: "Открыт для предложений" },
  },
  about: {
    title: { en: "About Me", ru: "Обо мне" },
    summary: {
      en: "Junior Frontend Developer with around one year of hands-on experience building websites and React applications through independent practice and course projects. Comfortable with JavaScript, TypeScript, React, Next.js and Tailwind CSS. I've worked on product pages, dashboards, API integration and responsive layouts, and I enjoy fixing UI issues and improving how sites work across devices.",
      ru: "Junior Frontend Developer с опытом около одного года — создаю сайты и React-приложения через самостоятельную практику и учебные проекты. Уверенно работаю с JavaScript, TypeScript, React, Next.js и Tailwind CSS. Делал страницы товаров, дашборды, интеграцию API и адаптивную вёрстку — люблю находить и чинить UI-баги и улучшать работу сайтов на разных устройствах.",
    },
    factsTitle: { en: "Quick facts", ru: "Коротко" },
    facts: {
      location: { en: "Location", ru: "Локация" },
      experience: { en: "Experience", ru: "Опыт" },
      experienceValue: { en: "~1 year, hands-on", ru: "~1 год, практика" },
      education: { en: "Education", ru: "Образование" },
      educationValue: { en: "PDP Junior — Frontend", ru: "PDP Junior — Frontend" },
      languages: { en: "Languages", ru: "Языки" },
      languagesValue: {
        en: "Russian (fluent), Uzbek (conversational), English (basic)",
        ru: "Русский (свободно), узбекский (разговорный), английский (базовый)",
      },
    },
  },
  stack: {
    title: { en: "Tech Stack", ru: "Технологии" },
    subtitle: {
      en: "Tools and technologies I actually use.",
      ru: "Инструменты и технологии, с которыми я реально работаю.",
    },
  },
  projects: {
    title: { en: "Selected Projects", ru: "Избранные проекты" },
    subtitle: {
      en: "A few projects from coursework and independent practice.",
      ru: "Несколько проектов из учебы и самостоятельной практики.",
    },
    liveDemo: { en: "Live Demo", ru: "Открыть" },
    code: { en: "Code", ru: "Код" },
    details: { en: "View details", ru: "Подробнее" },
    close: { en: "Close", ru: "Закрыть" },
    tech: { en: "Technologies", ru: "Технологии" },
  },
  timeline: {
    title: { en: "Experience & Education", ru: "Опыт и образование" },
  },
  contact: {
    title: { en: "Let's Talk", ru: "Давайте общаться" },
    subtitle: {
      en: "Open to junior frontend opportunities — reach out any time.",
      ru: "Открыт для позиций junior-разработчика — пишите в любое время.",
    },
    copy: { en: "Copy email", ru: "Скопировать" },
    copied: { en: "Copied!", ru: "Скопировано!" },
  },
  footer: {
    rights: { en: "All rights reserved.", ru: "Все права защищены." },
    builtWith: { en: "Built with Next.js & Tailwind CSS.", ru: "Сделано на Next.js и Tailwind CSS." },
  },
  theme: {
    light: { en: "Light", ru: "Светлая" },
    dark: { en: "Dark", ru: "Тёмная" },
  },
};

export function tr(field: { en: string; ru: string }, lang: Lang): string {
  return field[lang];
}
