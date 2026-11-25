import { Lang } from "./data";

export interface DictItem {
  en: string;
  ru: string;
}

export function tr(item: DictItem | { en: string; ru: string }, lang: Lang): string {
  return item[lang] || item.en;
}

export const dict = {
  nav: {
    workspace: { en: "Workspace", ru: "Воркспейс" },
    developers: { en: "Developers", ru: "Разработчики" },
    projects: { en: "Projects", ru: "Проекты" },
    skills: { en: "Skills", ru: "Навыки" },
    experience: { en: "Experience", ru: "Опыт" },
    contact: { en: "Contact", ru: "Контакты" },
  },
  header: {
    statusBadge: { en: "Open to Work", ru: "Ищу работу / проекты" },
    share: { en: "Share", ru: "Поделиться" },
    copyLinkSuccess: { en: "Link copied!", ru: "Ссылка скопирована!" },
    switchLang: { en: "Language", ru: "Язык" },
    theme: { en: "Theme", ru: "Тема" },
  },
  properties: {
    sectionTitle: { en: "Page Properties", ru: "Свойства страницы" },
    role: { en: "Role", ru: "Роль" },
    status: { en: "Status", ru: "Статус" },
    location: { en: "Location", ru: "Локация" },
    age: { en: "Age", ru: "Возраст" },
    email: { en: "Email", ru: "Почта" },
    telegram: { en: "Telegram", ru: "Телеграм" },
    github: { en: "GitHub", ru: "Гитхаб" },
    resume: { en: "Resume", ru: "Резюме" },
    downloadResume: { en: "Download PDF", ru: "Скачать PDF" },
    copyEmail: { en: "Copy Email", ru: "Скопировать Email" },
    copied: { en: "Copied!", ru: "Скопировано!" },
  },
  callouts: {
    summaryBadge: { en: "Summary", ru: "Обо мне" },
    summaryTitle: { en: "Frontend Developer Profile", ru: "Профиль Frontend-разработчика" },
    focusBadge: { en: "Focus", ru: "Фокус" },
    focusText: {
      en: "Specializing in React, Next.js, and TypeScript. Passionate about clean architecture, responsive design, and interactive 3D web experiences.",
      ru: "Специализируюсь на React, Next.js и TypeScript. Уделяю особое внимание чистой архитектуре, адаптивной вёрстке и современным 3D-интерфейсам.",
    },
  },
  scene3d: {
    badge: { en: "Interactive 3D", ru: "Интерактивный 3D" },
    title: { en: "Notion Monolith 3D", ru: "3D Монолит Notion" },
    hint: { en: "Move cursor or touch to rotate scene", ru: "Двигайте курсор или коснитесь для вращения" },
  },
  projects: {
    badge: { en: "Database View", ru: "База данных" },
    title: { en: "Projects Database", ru: "Проекты и разработки" },
    subtitle: {
      en: "Curated collection of production applications, coursework projects, and layout recreations.",
      ru: "Коллекция практических веб-приложений, курсовых проектов и вёрстки по макетам.",
    },
    galleryView: { en: "Gallery View", ru: "Галерея" },
    tableView: { en: "Table View", ru: "Таблица" },
    filterAll: { en: "All Stack", ru: "Все технологии" },
    colName: { en: "Project Name", ru: "Название" },
    colType: { en: "Category", ru: "Категория" },
    colTech: { en: "Tech Stack", ru: "Стек" },
    colStatus: { en: "Status", ru: "Статус" },
    colLinks: { en: "Links", ru: "Ссылки" },
    openModal: { en: "Inspect Page", ru: "Открыть страницу" },
    liveDemo: { en: "Live Demo", ru: "Демонстрация" },
    sourceCode: { en: "Source Code", ru: "Исходный код" },
    highlights: { en: "Highlights", ru: "Ключевые особенности" },
    achievements: { en: "Detailed Breakdown", ru: "Что сделано" },
  },
  skills: {
    badge: { en: "Tech Matrix", ru: "Стек технологий" },
    title: { en: "Skills & Technical Stack", ru: "Навыки и стек" },
    subtitle: {
      en: "Core languages, frameworks, UI libraries, and developer tools applied in real code.",
      ru: "Языки, фреймворки, библиотеки компонентов и инструменты разработки.",
    },
  },
  timeline: {
    badge: { en: "Journey", ru: "Опыт и учёба" },
    title: { en: "Education & Practice", ru: "Образование и опыт" },
    subtitle: {
      en: "Coursework training, independent milestones, and hands-on developer growth.",
      ru: "Обучение на курсах, этапы самостоятельной разработки и профессиональный рост.",
    },
  },
  languages: {
    badge: { en: "Communication", ru: "Языки общения" },
    title: { en: "Languages", ru: "Владение языками" },
  },
  contact: {
    badge: { en: "Get In Touch", ru: "Связаться со мной" },
    title: { en: "Let's Build Something Together", ru: "Давайте работать вместе" },
    subtitle: {
      en: "I am ready to join your team as a Junior Frontend Developer or collaborate on projects.",
      ru: "Я открыт к предложениям на позицию Junior Frontend Developer и проектной работе.",
    },
    telegramBtn: { en: "Message on Telegram", ru: "Написать в Telegram" },
    githubBtn: { en: "Check GitHub Profile", ru: "Перейти в GitHub" },
    downloadResumeBtn: { en: "Download Resume (PDF)", ru: "Скачать резюме (PDF)" },
  },
  footer: {
    builtWith: {
      en: "Crafted with Next.js, React, TypeScript, Three.js & Tailwind CSS in Notion Aesthetic.",
      ru: "Создано с любовью на Next.js, React, TypeScript, Three.js и Tailwind CSS в эстетике Notion.",
    },
    rights: { en: "All rights reserved.", ru: "Все права защищены." },
  },
};
