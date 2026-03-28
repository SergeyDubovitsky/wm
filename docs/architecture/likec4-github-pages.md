# LikeC4 on GitHub Pages

Статический LikeC4-site публикуется в GitHub Pages из ветки `gh-pages`.

Такой режим не зависит от GitHub Actions workflow и подходит для project site
репозитория `SergeyDubovitsky/wm`.

## Источник публикации

- Pages source: ветка `gh-pages`
- Pages path: `/`
- base path для LikeC4 build: `/wm/`

## Публичный URL

Для текущего репозитория `SergeyDubovitsky/wm` ожидаемый URL:
[https://sergeydubovitsky.github.io/wm/](https://sergeydubovitsky.github.io/wm/).

## Локальная проверка

Из директории [`arch`](/Users/srgi0/projects/web-monitoring/arch):

```bash
npm run validate
npm run build -- --base /wm/
```

Команда `build -- --base /wm/` воспроизводит project-site base path,
который GitHub Pages использует для репозитория `wm`.

## Обновление публикации

Чтобы опубликовать новую версию сайта, нужно:

1. собрать свежий static output в [`arch/dist`](/Users/srgi0/projects/web-monitoring/arch/dist)
2. синхронизировать содержимое `arch/dist/` в корень ветки `gh-pages`
3. оставить в ветке `gh-pages` файл `.nojekyll`, чтобы GitHub Pages раздавал site как обычную статику
