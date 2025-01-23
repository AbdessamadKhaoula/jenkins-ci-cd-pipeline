# Pipeline CI/CD avec Jenkins, Docker et SonarQube

## Description
Ce projet met en place un pipeline CI/CD complet pour une application web Laravel. Il comprend :
- **Build** : Compilation du code source.
- **Tests** : Exécution des tests unitaires et d'intégration.
- **Analyse de Code** : Utilisation de SonarQube pour vérifier la qualité du code.
- **Déploiement** : Conteneurisation avec Docker et déploiement sur un serveur de production.

## Architecture
![Diagramme](docs/architecture.png)

## Prérequis
- AWS CLI
- Jenkins
- Docker & Docker Compose
- SonarQube
- Git

## Installation
1. Clonez le projet :
   ```bash
   git clone https://github.com/AbdessamadKhaoula/pipelineCI-CD-nodejs.git
   cd pipelineCI-CD-nodejs

