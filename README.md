# Sports2020 Full-Stack Web Application

## 🧾 Project Overview

This project is a fully functional full-stack web application built with:

* **Frontend**: React
* **Backend**: Django + Django REST Framework
* **Database**: SQLite (easily switchable to PostgreSQL or MySQL)
* **Deployment**: Railway (frontend & backend deployed separately)
* **Custom Domains**: Configured with subdomains for API and frontend access

---

## 🛠️ Features Implemented

### Frontend (React)

* Responsive user interface using React components
* Axios for API calls
* API base URL configured dynamically in `config.js`:

  ```js
  const BASE_URL = "https://api.domainname.xyz";

  const API = {
    PRODUCTS: `${BASE_URL}/api/products/`,
    PRODUCT_DETAIL: (id) => `${BASE_URL}/api/products/${id}/`,
    CATEGORIES: `${BASE_URL}/api/categories/`,
    BANNERS: `${BASE_URL}/api/promotional-banners/`,
    GALLERY: `${BASE_URL}/api/gallery-images/`,
    HOMEPAGE_BANNERS: `${BASE_URL}/api/homepage-banners/`,
  };

  export default API;
  ```
* Production build command used:

  ```bash
  CI='' npm install && npm run build
  ```

### Backend (Django)

* REST API development using Django REST Framework
* Models, Serializers, Views, and API endpoints for products, categories, banners, etc.
* CORS and CSRF configured for cross-origin frontend support:

  ```python
  CORS_ALLOWED_ORIGINS = [
      "https://api.domainname.xyz",
      "https://fulfilling-adventure-production.up.railway.app",
      "https://domainname.xyz",
      "https://www.domainname.xyz",
      "http://localhost:3000",
  ]

  CSRF_TRUSTED_ORIGINS = [
      "https://api.domainname.xyz",
      "https://fulfilling-adventure-production.up.railway.app",
      "https://domainname.xyz",
      "https://www.domainname.xyz",
  ]
  ```
* Static files collected with:

  ```bash
  pip install -r requirements.txt && python manage.py collectstatic --noinput
  ```
* Start command:

  ```bash
  gunicorn backend.wsgi
  ```

### Database

* Started with SQLite (for cost-saving)
* Can be upgraded to PostgreSQL/MySQL by editing the `DATABASES` section in `settings.py`

---

## 🚀 Deployment Process

### Step 1: GitHub Setup

* Pushed both frontend and backend code into a single GitHub repository with structured folders:

  ```
  /frontend
  /backend
    └── requirements.txt
  README.md
  ```

### Step 2: Railway Deployment

* Created two separate services on Railway:

  * One for **backend**: Root directory set to `/backend`
  * One for **frontend**: Root directory set to `/frontend`

* Configured environment variables and custom domains:

  * Backend: `https://api.domainname.xyz`
  * Frontend: `https://www.domainname.xyz`

### Step 3: Domain & CORS Configuration

* React frontend connects to backend via `config.js`
* Django backend allows frontend domains via `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS`

---

## 🌐 Live Application

* **Frontend**: [https://www.domainname.xyz](https://www.domainname.xyz)
* **Backend API**: [https://api.domainname.xyz](https://api.domainname.xyz)

---

## 🎥 Demo Video

<details>
<summary>Click to view project demo</summary>

<video width="100%" controls>
  <source src="demo/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

</details>

---

## 🔄 Future Improvements

* Add PostgreSQL or MySQL support for production
* Implement CI (Continuous Integration) with GitHub Actions to run automated tests
* Add login/authentication
* Expand UI and add more interactivity

---

## 📌 Key Takeaways

This project showcases:

* Full-stack development
* CI/CD-style deployment with Railway
* Custom domain & CORS setup
* Environment management & production-ready setup

> Built with ❤️ by Soumyajit Paramanick
