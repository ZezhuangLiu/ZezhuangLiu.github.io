# Zezhuang Liu Academic Homepage

This repository hosts the personal academic homepage of Zezhuang Liu:

https://zezhuangliu.github.io/

The homepage is a static GitHub Pages site for prospective PhD applications. It summarizes research interests, selected publications, technical skills, independent project experience, honors, a Chinese CV, and contact information.

## Site Structure

- `index.html` - homepage content
- `styles.css` - responsive styling
- `script.js` - email copy interaction
- `assets/zezhuang-liu.jpg` - profile photo
- `assets/cv-zezhuang-liu-cn.pdf` - Chinese CV
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow
- `EDITING.md` - local editing and publishing notes

## Updating the Homepage

Edit `index.html` for content changes, replace the Chinese CV or photo in `assets/`, then run:

```powershell
git add index.html styles.css script.js assets README.md EDITING.md
git commit -m "Update academic profile homepage"
git push origin main
```

GitHub Actions will publish the updated site automatically.
