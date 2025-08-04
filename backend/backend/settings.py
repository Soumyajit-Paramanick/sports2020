"""
Django settings for backend project.
"""

import os
from pathlib import Path

# Build paths inside the project
BASE_DIR = Path(__file__).resolve().parent.parent

# ✅ Environment-based config for production safety
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'tp(n1hfh0ouf@24_vx818at$bx9xy_3__9z^uu!mfh_2@x^07^')  # fallback only for local dev
DEBUG = os.environ.get('DEBUG', 'True') == 'True'
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '*').split(',')

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'products',
    'django_filters',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # ✅ MUST be at the top
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# Database (keep as SQLite for now unless using Railway Postgres)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Kolkata'
USE_I18N = True
USE_TZ = True

# Static files
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# ✅ CORS setup (ALLOW frontend → backend requests)
CORS_ALLOWED_ORIGINS = [
    "https://sports2020-production.up.railway.app",      # ✅ Your backend
    "https://content-emotion-production.up.railway.app",              # ✅ Railway frontend
    "https://paramanick.xyz",                                         # ✅ your domain root
    "https://www.paramanick.xyz",                                     # ✅ your domain www
    "http://localhost:3000",                                          # ✅ local React dev
]

# ✅ CSRF trusted origins (for POST/PUT/DELETE from frontend)
CSRF_TRUSTED_ORIGINS = [
    "https://sports2020-production.up.railway.app",
    "https://content-emotion-production.up.railway.app",
    "https://paramanick.xyz",
    "https://www.paramanick.xyz",
]

