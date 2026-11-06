# Erbol Dosanov — Portfolio 2.0

Премиальный 3D-портфолио сайт на Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Стек

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS v4
- Framer Motion — анимации и переходы
- React Three Fiber + Drei (Three.js) — 3D-объект в Hero
- lucide-react — иконки

## Запуск локально

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Проверка перед деплоем

```bash
npm run lint
npm run typecheck
npm run build
```

## Что нужно добавить вручную

1. **Фото** — положите файл в `public/photo.jpg` и раскомментируйте `<Image />`
   в `src/components/About.tsx` вместо плейсхолдера.
2. **Резюме** — уже лежит в `public/Erbol_Dosanov_Resume.pdf` (из загруженного PDF).
   Если резюме обновится — просто замените файл с тем же именем.
3. **Скриншоты проектов** — в коде их нет (не было доступных файлов/скриншотов).
   При желании добавьте `image` в `src/lib/data.ts` → `projects[]` и выведите
   в карточке в `src/components/Projects.tsx`.

## Деплой на Vercel (вручную)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Или через сайт vercel.com: Import Project → выбрать репозиторий
`erbol-portfolio-v2` → Deploy. Framework Preset определится как Next.js
автоматически.

## Публикация на GitHub (вручную)

```bash
git init
git add .
git commit -m "Initial commit: Erbol Portfolio 2.0"
git branch -M main
git remote add origin https://github.com/byerbol767/erbol-portfolio-v2.git
git push -u origin main
```

## Структура

```
src/
  app/            # layout, page, globals.css
  components/     # Header, Hero, HeroScene (3D), About, TechStack,
                   # Projects, Timeline, Contact, Footer,
                   # ThemeProvider, LanguageProvider
  lib/            # data.ts (факты из резюме), translations.ts (EN/RU)
public/
  Erbol_Dosanov_Resume.pdf
  favicon.svg
```
