# Chatbot Backend (TypeScript)

## Description

Le projet **chatbot-backend-ts** est une architecture backend générique conçue pour gérer des chatbots basés sur des questions-réponses préenregistrées ou des modèles IA avancés. Développé en TypeScript avec Node.js et Express, ce projet peut être facilement adapté à divers cas d'utilisation de chatbot en fonction des besoins d'intégration avec un frontend spécifique. Il inclut des structures prêtes à l'emploi pour gérer les requêtes, les réponses, et les données de chatbot, tout en restant suffisamment flexible pour évoluer vers des intégrations plus complexes à l'avenir.

## Fonctionnalités

- **Backend générique** : conçu pour être réutilisable et adaptable à différents projets.
- **Support des questions-réponses préenregistrées** : permet de gérer un ensemble de réponses statiques.
- **Extensible** : peut être connecté à des modèles de langage avancés.
- **Facile à configurer et à utiliser** : gestion simplifiée des routes API et des services backend.
- **Conception modulaire** : claire séparation entre les routes, services et données.

## Structure du projet

```
/src
  /routes
    chat.ts                 # Routes API du chatbot
  /services
    responseGenerator.ts    # Service pour la gestion des réponses du chatbot
  /data
    questionsData.ts        # Fichier contenant les questions et réponses préenregistrées
  server.ts                 # Fichier principal de configuration du serveur
.env                        # Fichier d'exemple des variables d'environnement
README.md                   # Documentation du projet
```

## Installation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/Axel93183/chatbot-backend-ts.git
   ```

2. **Accéder au répertoire du projet** :

   ```bash
   cd chatbot-backend-ts
   ```

3. **Installer les dépendances** :

   ```bash
   npm install
   ```

4. **Configurer les variables d'environnement** :

   Modifier les valeurs du fichiers `.env` selon les besoins.

5. **Lancer le projet en mode développement** :

   ```bash
   npm run dev
   ```

   Cela démarrera le serveur en mode surveillance avec **nodemon**.

## Utilisation

L'API est disponible à l'adresse `http://localhost:5000/api/chat`.

### Tester avec Postman :

1. Ouvrez **Postman** et créez une nouvelle requête.
2. Sélectionnez le type de requête : **POST**.
3. Entrez l'URL : `http://localhost:5000/api/chat`.
4. Allez dans l'onglet **Body**, sélectionnez **raw** et **JSON**, puis ajoutez le JSON suivant :
   ```json
   {
     "question": "What is your name?"
   }
   ```
5. Dans l'onglet Headers, ajoutez une nouvelle clé `Content-Type` avec la valeur `application/json`.
6. Envoyez la requête en cliquant sur le bouton **Send**.

### Tester avec cURL :

Vous pouvez également tester l'API en utilisant **cURL** depuis la ligne de commande :

```bash
curl -X POST http://localhost:5000/api/chat -H "Content-Type: application/json" -d "{\"question\": \"What is your name?\"}" -v
```

## Personnalisation

Pour personnaliser les réponses du chatbot avec des questions-réponses préenregistrées, modifie le fichier `src/data/questionsData.ts` avec les paires de questions-réponses souhaitées.

Exemple de structure pour le fichier `questionsData.ts` :

```ts
[
  {
    question: "What is your name?",
    answer: "I am a generic chatbot.",
  },
  {
    question: "How are you?",
    answer: "I am fine, thank you! And you?",
  },
  // Ajoutez plus de paires question-réponse si nécessaire
];
```

## Déploiement

Pour construire l'application pour la production, utilise la commande :

```bash
npm run build
```

Le serveur démarrera ensuite avec :

```bash
npm start
```

## Technologies utilisées

- **Node.js** : environnement d'exécution JavaScript.
- **TypeScript** : superset de JavaScript typé.
- **Express** : framework web minimaliste pour Node.js.
- **Nodemon** : outil pour surveiller les modifications des fichiers et redémarrer le serveur automatiquement.

## Contribuer

Les contributions sont les bienvenues ! Si tu souhaites contribuer à ce projet, merci de suivre ces étapes :

1. Fork le projet.
2. Crée une branche pour ta fonctionnalité (`git checkout -b feature/new-feature`).
3. Commit tes changements (`git commit -m 'Add some feature'`).
4. Pousse ta branche (`git push origin feature/new-feature`).
5. Ouvre une pull request.

## Auteur

- **Nom de l'auteur** : [Axel93183](https://github.com/Axel93183)

## Licence

Ce projet est sous licence MIT. Tu peux consulter les détails dans le fichier `LICENSE`.
