# Automate Website Testing and Deployment

## How to Run Locally
1. Clone: `git clone https://github.com/adewunmivictor5/automated-website-deploy.git`
2. Open `index.html` in a browser or use Live Server in VS Code.
3. For lint/test: `npm install`, then `npm run lint` and `npm test`

## Workflow Explained
When code is pushed to `main`:
1. GitHub Actions triggers on push
2. Runs HTML lint and tests
3. If both pass, the site is deployed to GitHub Pages
4. The live site updates automatically

Pull requests to `main` run the lint and test job only (no deploy).

## Tech Stack
HTML/CSS/JS, Git, GitHub Actions, GitHub Pages, HTMLHint