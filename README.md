# Nom de la startup d'état

Description de la Startup d'état

## Environnement de développement

### Prérequis

- docker-compose
- python 3.11

### Technologies

- Python
- Django
- github
- Licence MIT
- Node
- Parcel
- DSFR
- honcho
- Scalingo
- Sentry
- Pytest
- Whitnoise
- Tailwind
- Dependabot
- Django-debug-toolbar

### installation & execution

Les bases de données source `MySQL` et cible `Postgres + Postgis` sont executées et mises à disposition par le gestionnaire de conteneur Docker

```sh
docker compose up
```

Création de l'environnement virtuel de votre choix (préférence pour asdf)

```sh
python -m venv .venv --prompt $(basename $(pwd))
source  .venv/bin/activate
```

Installation

```sh
pip install -r requirements.txt -r dev-requirements.txt
npm install
```

Configuration des variables d'environnement

```sh
cp .env.template .env
```

// Modifier les variables dans le fichier .env si nécessaire

Migration

```sh
python manage.py migrate
```

### Create superuser

```sh
python manage.py createsuperuser
```

### Lancement

```sh
honcho start -f Procfile.dev
```

### Ajout et modification de package pip-tools

Ajouter les dépendances aux fichiers `requirements.in` et `dev-requirements.in`

Compiler les dépendances:

```
pip-compile dev-requirements.in --generate-hashes
pip-compile requirements.in --generate-hashes
```

## Déploiement

Créer le projet sur Scalingo : [https://dashboard.scalingo.com](https://dashboard.scalingo.com)
Créer la base de données de l'application sur Scalingo
Déclarer les variables d'environnement, en prenant comme example le fichier .env.template
Suivre les instructions de la github action : [https://github.com/kolok/deploy-to-scalingo/tree/v1/](https://github.com/kolok/deploy-to-scalingo/tree/v1/)

Lors du push sur la branch main, le code sera déployé sur Scalingo
