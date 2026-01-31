# Ukrainian Community in Nanaimo (Jekyll)

Small bilingual Jekyll site for the Ukrainian community in Nanaimo, Canada.

## Quick edits
- Update text in `index.md`, `about.md`, `events.md`, `donate.md`, `contact.md`.
- Replace the email address in `contact.md` and `_includes/footer.html`.
- Replace the PayPal link in `donate.md` with your official URL.

## Language toggle
English and Ukrainian blocks are wrapped with `data-lang="en"` and
`data-lang="uk"` attributes. The toggle is implemented in
`assets/js/main.js`, and visibility is controlled by CSS in
`assets/css/styles.css`.

## GitHub Pages
This site is compatible with GitHub Pages.

If you are using a project site (not a user site), update `baseurl` in
`_config.yml` to match the repository name, for example:

```
baseurl: "/CANUG"
```

Then in GitHub, go to Settings -> Pages and select the branch to deploy.


jekyll serve --livereload