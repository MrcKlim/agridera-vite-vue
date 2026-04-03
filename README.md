# Agridera — Vite + Vue 3 (PR #8)

## Локально

1. Установи [Node.js LTS](https://nodejs.org/) (щоб працювали `node` і `npm` у терміналі).
2. У папці проєкту:

```bash
npm install
npm run dev
```

3. Збірка для GitHub Pages:

```bash
npm run build
```

Результат у папці `dist/`. Завантаж **вміст** `dist/` у GitHub Pages (гілка `gh-pages` або налаштування Pages з `dist`).

## Важливо

- Якщо `npm install` падає з `ENOSPC` — на диску закінчилося місце: звільни місце і повтори.
- Репозиторій на GitHub: **без** папки `node_modules` (вона в `.gitignore`).

## Сторінки (multi-page)

- `index.html` — головна
- `tomato.html` — каталог
- `tomato-one.html` — картка товару (`#id` у хеші)
- `contact.html` — корзина + форма

`base` у `vite.config.js` виставлено на `./` для зручного деплою статики.
