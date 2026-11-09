# Creative Grid — Legal Data Intelligence Platform

Official website for **Creative Grid** ([www.c-grid.tech](https://www.c-grid.tech)), specializing in Modern Data Platform (MDP) integration, Medallion Lakehouses, and enterprise data foundations for law firms and legal enterprises.

---

## 📌 Executive Summary & Brand Positioning

Creative Grid positions data integration as the prerequisite foundation for downstream Legal AI, BI, and reporting. Rather than building isolated chatbot prototypes, Creative Grid unifies fragmented practice management, CRM, timesheeting, and billing systems into a single, governed Azure-native Lakehouse.

* **Target Data Platforms:** Microsoft Fabric, Databricks Delta Lake, Snowflake.
* **Target Source Systems (Examples):** Aderant PMS, Elite 3E, Fulcrum, Salesforce CRM, Intapp Time, partner budgeting APIs, and custom REST endpoints.
* **Architectural Standard:** Medallion Architecture (Bronze: Raw Ingestion ➔ Silver: Schema Cleaning, Deduplication & Ethical Walls ➔ Gold: Unified Business Realization & Semantic DirectLake/Tabular Models).

---

## 🚀 Repository & Deployment Architecture

* **GitHub Repository:** [`https://github.com/aruntheja/creative-grid-site.git`](https://github.com/aruntheja/creative-grid-site.git)
* **Default Branch:** `main`
* **Hosting Platform:** **Azure Static Web Apps**
* **Azure Default URL:** [`https://kind-island-0ba1c4500.7.azurestaticapps.net/`](https://kind-island-0ba1c4500.7.azurestaticapps.net/)
* **Custom Domain:** `www.c-grid.tech` / `c-grid.tech`
* **CI/CD Pipeline:** Fully automated via GitHub Actions (`.github/workflows/azure-static-web-apps-kind-island-0ba1c4500.yml`). Every `git push` to `main` triggers a live deployment to Azure.

---

## 📂 Codebase Structure

The project is intentionally built with pure, high-performance vanilla web standards—zero heavy node frameworks, zero build tool bloat, instant fast rendering:

```text
├── .github/
│   └── workflows/
│       └── azure-static-web-apps-kind-island-0ba1c4500.yml  # Automated Azure SWA deployment
├── index.html                                                # Semantic HTML5 single-page application
├── style.css                                                 # Modular CSS3, CSS custom variables, 3D animations
├── app.js                                                    # Interactive simulator, ROI engine, AJAX form
├── staticwebapp.config.json                                  # SWA routing, security headers & CSP
└── README.md                                                 # Project context & developer guide
```

---

## 🧩 Key Components & Code Guide

### 1. Hero Section (`index.html` & `style.css`)
* **3D Ingestion Flow Visual:** A pure CSS-rendered 3D Lakehouse cylinder receiving animated streaming data packets from example source nodes (Salesforce CRM, Aderant PMS, Intapp Time, Budget APIs).
* **Responsive Spacing:** Uses `.pt-28` desktop padding and `#hero { justify-content: flex-start; padding-top: 6.5rem; }` on mobile to guarantee no overlap with the fixed top navigation bar.

### 2. Medallion Pipeline Ingestion Simulator (`app.js`)
* An interactive terminal simulating real-world lakehouse ingestions (`sh run_pipeline --name ...`).
* Simulates Bronze (raw extraction), Silver (schema mapping & ethical walls), and Gold (semantic models & realization metrics) stages with real-time log output and progress bars.

### 3. ROI Calculator (`app.js` & `index.html`)
* Dynamic client-side financial estimation calculator based on firm lawyer headcounts and billing parameters.

### 4. Contact & Diagnostic Workshop Request Form (`app.js`)
* Real AJAX submission using FormSubmit API.
* Target Recipient: **`support@c-grid.tech`**.
* Form payload includes Name, Email, Firm Name, Core Systems, and custom requirements.

### 5. Security & Configuration (`staticwebapp.config.json`)
* Enforces strict HTTP security headers: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), and Referrer-Policy.

---

## 💻 Developer Setup on a New Laptop

### The Recommended Method: Git Clone (Fastest & Best)
You do not need to manually transfer files over USB or zip drives. Since the codebase is synced to GitHub:

1. Open your terminal or command prompt on the new laptop.
2. Clone the repository:
   ```bash
   git clone https://github.com/aruntheja/creative-grid-site.git
   cd creative-grid-site
   ```
3. Open the folder in **Google Antigravity** (or your favorite editor).
4. Run locally: You can preview the website instantly by opening `index.html` in any browser or using any lightweight local static server:
   ```bash
   # Python
   python -m http.server 8080
   
   # Or Node npx
   npx serve
   ```
5. Any changes you commit and push (`git commit -m "..." && git push origin main`) will automatically deploy to Azure Static Web Apps.

---

## 🤖 Instructions for Google Antigravity on New Laptop

When opening this project in Antigravity on your new laptop, prompt Antigravity with:
> *"I have opened my Creative Grid project. Please read `README.md` to understand the architecture, domain setup, and code structure before making any changes."*

Antigravity will instantly know:
1. The site is a production Azure Static Web App deploying from `main`.
2. All CSS is vanilla (no Tailwind npm CLI dependencies).
3. Changes pushed to GitHub immediately update `c-grid.tech`.
