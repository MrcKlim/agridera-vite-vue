# Agridera — Vite + Vue 3 (PR #8)

## Локально

1. Встанови [Node.js LTS](https://nodejs.org/) (щоб працювали `node` і `npm` у терміналі).
2. У папці проєкту:

```bash
npm install
npm run dev
```

3. Збірка (ті самі файли для GitHub Pages):

```bash
npm run build
```

Результат - папка `dist/`. 

## GitHub Pages

У репозиторії є workflow `.github/workflows/pages.yml`: при пуші в `main` виконується `npm ci` і `npm run build` (Vite), на Pages потрапляє лише вміст `dist/`.

**Налаштування на GitHub:** Settings → Pages → Build and deployment → **Source: GitHub Actions** (обери запропонований workflow «Deploy GitHub Pages», якщо GitHub покаже вибір).

Вручну заливати копію `dist/` в інший репо не потрібно, якщо використовуєш цей workflow.

## Важливо (перевірка «без зайвих HTML»)

- У **репозиторії з кодом** має бути **лише один** `index.html` (корінь проєкту, точка входу Vite). Окремих `tomato.html`, `contact.html` і т.п. **немає** — усі «сторінки» це Vue-компоненти та маршрути `vue-router`.
- Після `npm run build` у `dist/` з’являється знову **один** `index.html` і папка `assets/` — це нормальний артефакт збірки, не мультисторінковий сайт.

## Важливо

- Якщо `npm install` падає з `ENOSPC` — на диску закінчилося місце: звільни місце і повтори.
- Репозиторій на GitHub: **без** папки `node_modules` (вона в `.gitignore`).

`base` у `vite.config.js` — `./`, щоб посилання на скрипти й стилі коректно працювали на Pages (у т.ч. для проєкту `user.github.io/repo-name/`).
