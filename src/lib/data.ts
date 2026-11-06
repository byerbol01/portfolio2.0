export type Lang = "en" | "ru";

export const personal = {
  name: "Erbol Dosanov",
  github: "https://github.com/byerbol01",
  telegram: "https://t.me/Erbol_ORG",
  email: "erboldosanov767@gmail.com",
  phone: "+998 94 635 90 36",
  location: "Tashkent, Uzbekistan",
  previousPortfolio: "https://portfolio-ashen-eight-52.vercel.app/",
  resumeFile: "/Erbol_Dosanov_Resume.pdf",
};

export const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "CSS3",
  "React Router",
  "Axios",
  "Ant Design",
  "Swiper",
  "Vite",
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
];

export interface Project {
  id: string;
  title: { en: string; ru: string };
  subtitle: { en: string; ru: string };
  description: { en: string; ru: string };
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "upgrade",
    title: { en: "Upgrade", ru: "Upgrade" },
    subtitle: {
      en: "Personal web project",
      ru: "Личный веб-проект",
    },
    description: {
      en: "A personal website with multiple page layouts, navigation and responsive styling. Used to practice login, sign-up, cart and order flows, review UI issues across pages, and work through real Vercel deployment and build errors.",
      ru: "Личный сайт с несколькими макетами страниц, навигацией и адаптивной вёрсткой. Здесь отрабатывались флоу логина, регистрации, корзины и заказов, проверялись UI-баги на разных страницах, а также реальный деплой на Vercel и исправление ошибок сборки.",
    },
    tech: ["React", "Vercel", "GitHub", "Responsive UI"],
    liveUrl: "https://upgrade-one-gold.vercel.app/",
  },
  {
    id: "admin-panel",
    title: { en: "Admin Panel", ru: "Admin Panel" },
    subtitle: {
      en: "React coursework project",
      ru: "Учебный проект (курс)",
    },
    description: {
      en: "An admin dashboard with separate pages for users, products, orders and categories. Built with React and React Router, uses Axios and DummyJSON for API data, Ant Design and Tailwind CSS for consistent, reusable UI across screens.",
      ru: "Админ-панель с отдельными страницами для пользователей, товаров, заказов и категорий. Сделана на React и React Router, данные — через Axios и DummyJSON, интерфейс — на Ant Design и Tailwind CSS с переиспользуемыми компонентами.",
    },
    tech: ["React", "React Router", "Axios", "Ant Design", "Tailwind CSS"],
  },
  {
    id: "product-catalog",
    title: { en: "Product Catalog", ru: "Product Catalog" },
    subtitle: {
      en: "React coursework project",
      ru: "Учебный проект (курс)",
    },
    description: {
      en: "A product catalog with keyword search, price sorting, product detail pages and loading indicators. Products are fetched from DummyJSON, routing is handled with React Router, and the layout is styled mobile-first with Tailwind CSS.",
      ru: "Каталог товаров с поиском по ключевым словам, сортировкой по цене, страницами товара и индикаторами загрузки. Данные — с DummyJSON, маршрутизация — React Router, вёрстка — mobile-first на Tailwind CSS.",
    },
    tech: ["React", "React Router", "Tailwind CSS", "DummyJSON"],
  },
];

export const timeline = [
  {
    year: { en: "Ongoing", ru: "Сейчас" },
    title: { en: "Independent Frontend Practice", ru: "Самостоятельная практика фронтенда" },
    place: { en: "~1 year", ru: "~1 год" },
    description: {
      en: "Building and improving practice projects with JavaScript, React, Vite and Next.js; using Git, GitHub and browser dev tools to debug and improve page behavior.",
      ru: "Создание и доработка учебных проектов на JavaScript, React, Vite и Next.js; использование Git, GitHub и инструментов разработчика в браузере для отладки.",
    },
  },
  {
    year: { en: "Completed", ru: "Завершено" },
    title: { en: "PDP Junior — Frontend Development Course", ru: "PDP Junior — курс Frontend Development" },
    place: { en: "PDP Junior", ru: "PDP Junior" },
    description: {
      en: "Practical training in JavaScript, React and frontend development through project-based learning.",
      ru: "Практическое обучение JavaScript, React и фронтенд-разработке через проектную работу.",
    },
  },
];
