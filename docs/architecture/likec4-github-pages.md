# LikeC4 on GitHub Pages

Публикация статического LikeC4-site настроена через workflow
[`deploy-likec4-pages.yml`](/Users/srgi0/projects/web-monitoring/.github/workflows/deploy-likec4-pages.yml).

## Что делает workflow

- запускается при push в `main`, если изменилось что-то внутри `arch/`
- позволяет вручную запустить деплой через `workflow_dispatch`
- собирает static site из `arch/` через официальный `likec4/actions@v1`
- передаёт `base_path` из `actions/configure-pages`, чтобы project site корректно открывался под `/wm/`
- деплоит артефакт в GitHub Pages environment `github-pages`

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
