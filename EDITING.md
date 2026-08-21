# Editing This Homepage

This site is a static GitHub Pages homepage.

## Files to Edit

- `index.html`: all visible text, section order, buttons, publication links, and CV links.
- `styles.css`: layout, spacing, colors, font sizes, and responsive behavior.
- `script.js`: email-copy interaction.
- `assets/`: photo and CV files.

## Common Updates

- Change the homepage title: edit the `<h1>` text in `index.html`.
- Change Research Focus: edit the `<h2>Research Focus</h2>` section in `index.html`.
- Replace Chinese CV: copy the new PDF to `assets/cv-zezhuang-liu-cn.pdf`.
- Replace photo: copy the new image to `assets/zezhuang-liu.jpg`.

## Publish Changes

Run these commands in PowerShell:

```powershell
cd "D:\research\research articles\已发表\personal_website"
git status
git add index.html styles.css script.js assets EDITING.md
git commit -m "Update academic profile homepage"
git push origin main
```

GitHub Actions will deploy the site automatically. Wait 1-3 minutes, then open:

```text
https://zezhuangliu.github.io/
```
