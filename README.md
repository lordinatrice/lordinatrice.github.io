# L’Ordinatrice, portfolio of Camille Regnault

Static Jekyll site, served by GitHub Pages. Bilingual (EN at `/`, FR at `/fr/`), light/dark theme, accessible (RGAA / WCAG 2.1 AA target).

## Edit the content

Everything visitors read lives in `_data/`, one source of truth per topic:

| File | What it holds |
| --- | --- |
| `_data/i18n/en.yml`, `fr.yml` | Interface copy (titles, buttons, hero, contact page) |
| `_data/services.yml` | The four offers |
| `_data/principles.yml` | How I work |
| `_data/experiences.yml` | Missions, newest first (omit `end` for the current one) |
| `_data/testimonials.yml` | Quotes, with `original` = language they were written in |
| `_data/writing.yml` | Newsletter, articles, podcast, talks |
| `_data/api.yml` | Endpoints of the hero API explorer |
| `_data/desktop.yml` | Icons of the retro desktop on the 404 page |

Templates are in `_layouts/` and `_includes/`, styles in `_sass/` (tokens, base, components, sections), scripts in `assets/js/` (one small ES module per feature, all optional: the site works without JS).

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

## Go live

1. Push this repo to GitHub (public repo for free GitHub Pages).
2. Settings → Pages → Source: “Deploy from a branch”, branch `main`, folder `/ (root)`.
3. Contact form: create a free access key on https://web3forms.com with the inbox that should receive messages, then paste it in `_config.yml` → `web3forms_access_key` (it is public by design and does not reveal the email).
4. Custom domain: Settings → Pages → Custom domain (GitHub adds a `CNAME` file), point the DNS records at GitHub Pages, tick “Enforce HTTPS”, then set `url:` in `_config.yml`.
