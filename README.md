# Resource Efficiency Group — website

A static Jekyll site for GitHub Pages. GitHub builds it automatically, so no build
step or GitHub Action is needed. Nearly all content lives in YAML files under
`_data/`, so adding a person, paper or project means editing one file. The site
needs no external fonts, scripts or trackers, and it supports dark mode.

## Publish on GitHub Pages

1. Create the repository. For a group address such as
   `https://resource-efficiency-group.github.io`, first create a GitHub
   **organisation** called `resource-efficiency-group`, then a repository named
   exactly `resource-efficiency-group.github.io`. You can also use any repository
   name; the site will then be served at `https://<account>.github.io/<repo>/`.
2. Copy the contents of this folder to the repository root, then commit and push to `main`.
3. In the repository, open **Settings → Pages → Build and deployment**, choose
   **Deploy from a branch**, and select `main` and `/ (root)`.
4. Edit `_config.yml`: set `url`, and set `baseurl` to `""` for a `<account>.github.io`
   repository or to `"/<repo>"` for a project repository. Also fill in `email` and `github`.
5. Optional: to use a custom domain such as `reg.di.uminho.pt`, add a `CNAME` file
   containing that domain and configure DNS as described in the GitHub Pages docs.

Local preview, which needs Ruby:
`bundle install && bundle exec jekyll serve`, then open http://localhost:4000.

## Where things are

| File | What it controls |
|---|---|
| `_config.yml` | Site title, tagline, URL, contact details, author names shown in bold |
| `_data/research.yml` | The four research lines (title, summary, topics, keywords). Their `id`s tag everything else |
| `_data/team.yml` | Group leader, PhD candidates, MSc students, alumni, collaborators |
| `_data/publications.yml` | Publications. `selected: true` puts one on the home page |
| `_data/projects.yml` | Projects page |
| `_data/tools.yml` | Tools page (WAVE, HEP-Frame, …): description, features, links, how to cite |
| `_data/navigation.yml` | Top menu |
| `index.html`, `research.html`, `tools.html`, `team.html`, `publications.html`, `projects.html` | Page templates |
| `_includes/synergy.svg` | The "how the lines connect" figure on the home page |
| `assets/css/style.css` | All styling; line colours are set at the top (`--energy`, `--memory`, …) |
| `assets/img/people/` | Put photos here and reference them from `team.yml` (square, at least 300 px) |

Research-line ids are `energy`, `memory`, `architectures` and `science`. Tag each
publication, person or project with the lines it belongs to. The Research page
then lists them automatically, and the Publications page filters by line. A filter
can be linked directly, e.g. `/publications/?line=energy`.

## Things to fill in before going live

- `_config.yml`: `url`, `email`, `github`.
- `_data/team.yml`: your academic rank and photo, ORCID, Scholar and GitHub links;
  the PhD candidate's name and topic; the names of the three MSc students on Arm
  energy, carbon-aware scheduling and QUANTHOS; and the sixth MSc student, since
  the group has six but only five theses are listed.
- `_data/publications.yml`: the WAVE DOI once Springer assigns it (also in `tools.yml`), and any
  papers missing from the list (see the note below).
- `_data/projects.yml`: the QUANTHOS period and website; the EUMaster4HPC consortium URL.
- Optional: university and INESC TEC logos in the "Affiliations & partners" box
  (check each institution's brand guidelines first).

## Note on the publication list

The list was compiled from OpenAlex and Crossref metadata (November 2026).
OpenAlex merges several researchers named "André Pereira" into one profile, so the
following works were left out as belonging to someone else: high-entropy alloys
(2026), AranduFlow (2026), cicada-wing Raman spectroscopy (2025) and
ultra-compact nanophotonics (2014). Please check the borderline inclusions as
well: Berry (CPC 2024), Hilight (SPIE 2019) and the decarbonisation review
(RSER 2024). Years follow the issue date in Crossref, so the RSER and Berry
papers, published online in 2023, are listed under 2024.
