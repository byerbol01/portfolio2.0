export type Lang = "en" | "ru";

export interface PersonalInfo {
  name: string;
  role: { en: string; ru: string };
  status: { en: string; ru: string };
  location: string;
  age: number;
  email: string;
  phone: string;
  telegram: string;
  telegramHandle: string;
  github: string;
  githubUser: string;
  resumeFile: string;
  summary: { en: string; ru: string };
  education: {
    institution: string;
    course: { en: string; ru: string };
    status: { en: string; ru: string };
    description: { en: string; ru: string };
  };
  languages: {
    name: { en: string; ru: string };
    level: { en: string; ru: string };
    proficiency: number;
  }[];
}

export const personal: PersonalInfo = {
  name: "Erbol Dosanov",
  role: {
    en: "Junior Frontend Developer (React · Next.js · TypeScript)",
    ru: "Junior Frontend Developer (React · Next.js · TypeScript)",
  },
  status: {
    en: "Available for Hire & Projects",
    ru: "Открыт к предложениям и проектам",
  },
  location: "Tashkent, Uzbekistan",
  age: 17,
  email: "erboldosanov767@gmail.com",
  phone: "+998 94 635 90 36",
  telegram: "https://t.me/Erbol_ORG",
  telegramHandle: "@Erbol_ORG",
  github: "https://github.com/byerbol01",
  githubUser: "byerbol01",
  resumeFile: "/Erbol_Dosanov_Resume.pdf",
  summary: {
    en: "Junior Frontend Developer with around one year of hands-on practice through personal projects and frontend coursework. I build responsive websites and React applications using JavaScript, TypeScript, React, Next.js, and Tailwind CSS. Experienced in building product catalogs, admin dashboards, REST API integrations, and multi-page layouts with clean reusable architecture.",
    ru: "Junior Frontend Developer с опытом практической разработки около 1 года (личные проекты и курс разработки). Разрабатываю адаптивные сайты и React/Next.js веб-приложения на JavaScript, TypeScript, React и Tailwind CSS. Создавал каталоги товаров, дашборды админ-панелей, интеграции с REST API и многостраничные интерфейсы с упором на чистую компонентную архитектуру и отзывчивый UI.",
  },
  education: {
    institution: "PDP Junior",
    course: {
      en: "Frontend Development Course",
      ru: "Курс Frontend Development",
    },
    status: {
      en: "Completed",
      ru: "Завершено",
    },
    description: {
      en: "Comprehensive practical training in JavaScript, React, responsive design, and project-based frontend development, including reusable components, multi-section layouts, and API requests.",
      ru: "Практическое обучение JavaScript, React, адаптивной вёрстке и разработке на реальных проектах, включая модульную архитектуру, многосекционные макеты и работу с REST API.",
    },
  },
  languages: [
    {
      name: { en: "Russian", ru: "Русский" },
      level: { en: "Fluent (Native proficiency)", ru: "Свободный (Родной)" },
      proficiency: 100,
    },
    {
      name: { en: "Uzbek", ru: "Узбекский" },
      level: { en: "Conversational", ru: "Разговорный" },
      proficiency: 80,
    },
    {
      name: { en: "English", ru: "Английский" },
      level: { en: "Basic / Technical Documentation", ru: "Базовый / Чтение документации" },
      proficiency: 50,
    },
  ],
};

export interface Project {
  id: string;
  title: string;
  type: { en: string; ru: string };
  badgeColor: "blue" | "green" | "purple" | "orange" | "pink" | "gray";
  summary: { en: string; ru: string };
  details: { en: string[]; ru: string[] };
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: { en: string; ru: string };
  status: "Completed" | "In Production" | "Active Practice";
}

export const projects: Project[] = [
  {
    id: "notion-portfolio",
    title: "Portfolio 3D (Notion Workspace)",
    type: { en: "Personal Production Portfolio", ru: "Личное продакшн-портфолио" },
    badgeColor: "purple",
    status: "In Production",
    highlights: {
      en: "Interactive 3D Three.js scene, Notion document aesthetic, Gallery/Table views, dual theme & language switcher.",
      ru: "Интерактивная 3D-сцена на Three.js, эстетика Notion, переключатель видов Gallery/Table, темная/светлая тема и 2 языка.",
    },
    summary: {
      en: "A Notion-style 3D developer portfolio featuring an interactive WebGL canvas, smooth micro-interactions, responsive database views, and dark/light modes.",
      ru: "Интерактивное 3D-портфолио разработчика в эстетике Notion с WebGL-сценой, микроинтеракциями, переключателем видов базы данных и полной адаптивностью.",
    },
    details: {
      en: [
        "Interactive 3D geometry monolith reacting to mouse cursor tilt and physics",
        "Notion-style database view toggle: Gallery Cards vs Clean Table View",
        "Full bilingual support (Russian & English) with instant toggle",
        "Built-in theme toggle with refined Notion Light and Notion Dark palettes",
        "Direct PDF resume download and contact copying",
      ],
      ru: [
        "Интерактивная 3D-сцена, реагирующая на курсор и физику наклона",
        "Переключатель представлений как в Notion: галерея карточек / табличный вид",
        "Двуязычный интерфейс (русский / английский) с мгновенным переключением",
        "Темы оформления: фирменная светлая и тёмная палитры Notion",
        "Быстрое скачивание PDF-резюме и копирование контактов",
      ],
    },
    tech: ["Next.js", "React", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio2-0-gamma-snowy.vercel.app",
    githubUrl: "https://github.com/byerbol01/portfolio2.0",
  },
  {
    id: "upgrade",
    title: "Upgrade — Multi-Page Web Platform",
    type: { en: "Personal Web Project", ru: "Личный веб-проект" },
    badgeColor: "blue",
    status: "Completed",
    highlights: {
      en: "Multi-page layouts, auth flows, shopping cart, Vercel production deployment.",
      ru: "Многостраничный сайт, авторизация, корзина заказов, деплой на Vercel.",
    },
    summary: {
      en: "A modern responsive web application featuring custom layouts, authentication flow, product browsing, interactive cart, and verified production deployment.",
      ru: "Многостраничный адаптивный веб-проект с навигацией, логикой корзины, страницами авторизации/регистрации и решением реальных задач деплоя на Vercel.",
    },
    details: {
      en: [
        "Implemented multi-page routing and responsive mobile-first navigation",
        "Developed user login, sign-up, cart calculation and order checkout flows",
        "Conducted thorough cross-browser and cross-device testing to resolve UI bugs",
        "Configured continuous deployment pipeline on Vercel with automated builds",
      ],
      ru: [
        "Реализована многостраничная маршрутизация и адаптивная мобильная навигация",
        "Разработаны экраны входа, регистрации, подсчёта корзины и оформления заказа",
        "Проведено тестирование на различных экранах и исправлены баги адаптивности",
        "Настроен непрерывный деплой на платформе Vercel с устранением ошибок сборки",
      ],
    },
    tech: ["React", "JavaScript", "Vercel", "Tailwind CSS", "Responsive UI"],
    liveUrl: "https://upgrade-one-gold.vercel.app/",
  },
  {
    id: "admin-panel",
    title: "Admin Dashboard Panel",
    type: { en: "Coursework Project", ru: "Курсовой проект" },
    badgeColor: "green",
    status: "Completed",
    highlights: {
      en: "Modular dashboard with users, products, orders & categories with DummyJSON API.",
      ru: "Дашборд с разделами пользователей, товаров, заказов и категорий через DummyJSON API.",
    },
    summary: {
      en: "Comprehensive administrative dashboard managing products, user accounts, orders, and product categories using React Router and Axios.",
      ru: "Административная панель управления с раздельными разделами для товаров, пользователей, заказов и категорий с интеграцией DummyJSON REST API.",
    },
    details: {
      en: [
        "Integrated DummyJSON REST API using Axios with proper async error/loading states",
        "Created organized data tables with search, sorting, and pagination via Ant Design",
        "Implemented protected layout routes, basic authentication tokens, and form handling",
        "Built modular component structure separating API services from presentation UI",
      ],
      ru: [
        "Интеграция с REST API DummyJSON через Axios с обработкой загрузки и ошибок",
        "Таблицы данных с поиском, сортировкой и пагинацией на базе Ant Design",
        "Маршрутизация через React Router, базовая работа с токенами и формами",
        "Модульная компонентная структура с переиспользованием интерфейсных элементов",
      ],
    },
    tech: ["React", "React Router", "Axios", "Ant Design", "Tailwind CSS", "DummyJSON API"],
  },
  {
    id: "product-catalog",
    title: "Interactive Product Catalog",
    type: { en: "Coursework Project", ru: "Курсовой проект" },
    badgeColor: "orange",
    status: "Completed",
    highlights: {
      en: "Live search, sorting by price, dynamic detail pages, async state handling.",
      ru: "Живой поиск, сортировка по цене, детальные страницы, асинхронные состояния.",
    },
    summary: {
      en: "Fast-loading eCommerce product catalog featuring real-time keyword search, sorting mechanisms, dynamic product detail routing, and mobile-friendly UI.",
      ru: "Каталог товаров с живым поиском по ключевым словам, сортировкой по цене, детальными страницами товара и адаптивными карточками продуктов.",
    },
    details: {
      en: [
        "Built live search filter and multi-condition price sorting (asc/desc)",
        "Configured dynamic route parameters (`/product/:id`) fetching single item details",
        "Designed skeleton loaders and empty state fallbacks for smooth UX",
        "Styled mobile-first reusable product card components with Tailwind CSS",
      ],
      ru: [
        "Реализован фильтр поиска в реальном времени и сортировка по цене (возрастание/убывание)",
        "Динамические маршруты для просмотра детальной информации о каждом товаре",
        "Индикаторы загрузки (skeleton) и обработка пустых результатов поиска",
        "Адаптивные переиспользуемые карточки товаров с чистой вёрсткой на Tailwind CSS",
      ],
    },
    tech: ["React", "React Router", "Tailwind CSS", "Axios", "DummyJSON"],
  },
  {
    id: "leangroup-layout",
    title: "LEANGROUP Website Layout",
    type: { en: "Figma to Code Recreation", ru: "Вёрстка по макету из Figma" },
    badgeColor: "pink",
    status: "Completed",
    highlights: {
      en: "Pixel-perfect Figma conversion, interactive Swiper carousels, modular structure.",
      ru: "Точное соответствие макету Figma, слайдеры Swiper, модульная структура.",
    },
    summary: {
      en: "Pixel-perfect recreation of a corporate multi-section Figma layout with custom sliders, responsive grid layouts, and interactive form blocks.",
      ru: "Вёрстка корпоративного многосекционного сайта по макету из Figma: Hero Banner, О компании, Сертификаты, Продукция и формы обратной связи.",
    },
    details: {
      en: [
        "Deconstructed complex Figma artboards into clean React component hierarchy",
        "Configured responsive Swiper sliders for products and certificates showcases",
        "Maintained exact typography scale, color tokens, and layout spacing",
        "Optimized bundle size and fast dev startup with modern Vite build tool",
      ],
      ru: [
        "Декомпозиция сложного макета Figma на независимые React-компоненты",
        "Настройка интерактивных каруселей Swiper для секций сертификатов и продукции",
        "Строгое соответствие отступам, шрифтовой шкале и фирменной палитре макета",
        "Быстрая сборка и оптимизация ассетов с помощью Vite",
      ],
    },
    tech: ["React", "Vite", "Tailwind CSS", "Swiper", "Figma Design"],
  },
  {
    id: "independent-practice",
    title: "1+ Year Independent Practice",
    type: { en: "Practical Engineering Milestone", ru: "Практический инженерный опыт" },
    badgeColor: "gray",
    status: "Active Practice",
    highlights: {
      en: "Continuous hands-on coding, debugging, reading docs, Git version control.",
      ru: "Постоянное написание кода, отладка, чтение документации, контроль версий в Git.",
    },
    summary: {
      en: "Over a year of daily programming practice building real frontend projects, mastering TypeScript, modern React hooks, and browser debugging workflows.",
      ru: "Более года непрерывной ежедневной практики фронтенд-разработки, освоение TypeScript, хуков React, инструментов разработчика в браузере и Git.",
    },
    details: {
      en: [
        "Daily practice writing clean JavaScript (ES6+) and typed TypeScript applications",
        "Proficient use of Chrome DevTools (Elements, Network, Console, Performance)",
        "Version control hygiene with Git, GitHub branching, and automated deployments",
        "Consistent habit of reading official technical documentation and adopting best practices",
      ],
      ru: [
        "Ежедневная практика написания чистого кода на JavaScript (ES6+) и типизированном TypeScript",
        "Уверенное владение инструментами Chrome DevTools (Network, Console, Elements)",
        "Опыт работы с Git, структурой репозиториев GitHub и автоматическим деплоем",
        "Привычка глубоко изучать официальную документацию и внедрять актуальные подходы",
      ],
    },
    tech: ["JavaScript", "TypeScript", "React", "Next.js", "Git", "GitHub", "Chrome DevTools"],
  },
];

export interface SkillCategory {
  name: { en: string; ru: string };
  icon: string;
  items: { name: string; level?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Core Languages", ru: "Основные языки" },
    icon: "🔤",
    items: [
      { name: "JavaScript (ES6+)", level: "Advanced DOM, Async/Await, Array Methods" },
      { name: "TypeScript", level: "Types, Interfaces, Typed Props, Generics" },
      { name: "HTML5", level: "Semantic Elements, Accessibility, Forms" },
      { name: "CSS3", level: "Flexbox, CSS Grid, Media Queries, Variables" },
    ],
  },
  {
    name: { en: "Frontend Frameworks", ru: "Фреймворки и экосистема" },
    icon: "⚛️",
    items: [
      { name: "React.js", level: "Hooks, Custom Hooks, Component Lifecycle" },
      { name: "Next.js", level: "App Router, SSR, Server Components, Optimization" },
      { name: "React Router", level: "Client-side routing, Dynamic routes, Guards" },
    ],
  },
  {
    name: { en: "Styling & UI Systems", ru: "Стилизация и UI" },
    icon: "🎨",
    items: [
      { name: "Tailwind CSS", level: "Utility-first, Custom Themes, Responsive" },
      { name: "Ant Design", level: "Data Tables, Forms, Layouts, Feedback UI" },
      { name: "Framer Motion", level: "Spring Animations, Page Transitions, Gestures" },
      { name: "Swiper.js", level: "Touch Carousels, Slider Breakpoints" },
      { name: "Figma", level: "Reading Specs, Typography, Adapting Layouts" },
    ],
  },
  {
    name: { en: "3D & Creative Web", ru: "3D и интерактив" },
    icon: "🌐",
    items: [
      { name: "Three.js", level: "Geometries, Materials, Lights, Camera" },
      { name: "@react-three/fiber", level: "Declarative Three.js in React" },
      { name: "@react-three/drei", level: "Float, Shaders, Environments" },
    ],
  },
  {
    name: { en: "APIs, Data & Architecture", ru: "API и работа с данными" },
    icon: "🔌",
    items: [
      { name: "REST APIs", level: "Endpoints, Status Codes, Payload handling" },
      { name: "Axios", level: "Interceptors, Headers, Instance Config" },
      { name: "JSON & Async", level: "Promises, Async/Await, Error Boundaries" },
      { name: "Swagger / OpenAPI", level: "API Specs and Testing" },
    ],
  },
  {
    name: { en: "Tools & Deployment", ru: "Инструменты и деплой" },
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: "Branching, Commit Hygiene, Pull Requests" },
      { name: "Vercel", level: "Production Deployment, Build Error Fixing" },
      { name: "Vite", level: "Fast Bundling, Plugins, Environment Config" },
      { name: "Chrome DevTools", level: "Network, Elements, Console Debugging" },
      { name: "npm & Node.js", level: "Package Management, Scripts" },
    ],
  },
];

export const notionTimeline = [
  {
    period: { en: "Ongoing · 2025 – Present", ru: "Текущий этап · 2025 – Сейчас" },
    title: { en: "Independent Frontend Practice", ru: "Самостоятельная практическая разработка" },
    organization: "Independent Learning",
    badge: { en: "Practice (~1 Year)", ru: "Практика (~1 Год)" },
    points: {
      en: [
        "Building full-stack and frontend React/Next.js applications",
        "Deepening TypeScript type safety and component architectural patterns",
        "Exploring 3D web interfaces with Three.js and creative interaction design",
        "Refining Git workflows, code reviews, and automated Vercel deployments",
      ],
      ru: [
        "Создание практических веб-приложений на React и Next.js",
        "Углубление в строгую типизацию TypeScript и компонентные паттерны",
        "Изучение 3D-интерфейсов на Three.js и креативного веб-дизайна",
        "Постоянная работа с Git, ревью кода и деплой на Vercel",
      ],
    },
  },
  {
    period: { en: "Completed", ru: "Завершено" },
    title: { en: "Frontend Development Course", ru: "Курс Frontend Development" },
    organization: "PDP Junior",
    badge: { en: "Course Completed", ru: "Курс окончен" },
    points: {
      en: [
        "Intensive project-based training in modern JavaScript and React",
        "Hands-on building of multi-page layouts, REST API integrations, and state handling",
        "Mastering responsive UI, mobile-first layouts, and cross-browser compatibility",
        "Working in a team environment with structured feedback and code evaluation",
      ],
      ru: [
        "Интенсивное практическое обучение современному JavaScript и React на проектах",
        "Разработка многостраничных интерфейсов, интеграция REST API и стейт-менеджмент",
        "Освоение адаптивной mobile-first вёрстки и кроссбраузерной совместимости",
        "Защита курсовых проектов и отработка лучших практик фронтенда",
      ],
    },
  },
];
