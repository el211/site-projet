```markdown
# Oreo Studios — site-projet

Site portfolio statique et micro-site pour "Oreo Studios · Elias" (site multilingue HTML + petit serveur Node pour tests locaux).  
Ce dépôt contient un site portfolio statique (EN/FR/ES/DE) avec des démos interactives sur le thème Java (Developer Arcade, terminal Apprendre Java), des animations JS et un serveur Node minimal pour tests locaux.

---

Table des matières
- À propos
- Fonctionnalités
- Stack & composition linguistique
- Structure du projet
- Lancer en local
- Déploiement
- Hébergement (actuel)
- Notes de développement & sécurité
- Contribuer
- Licence

---

À propos
-----
Ce dépôt héberge un site statique multilingue pour un développeur (Elias / "Oreo Studios"). Les pages HTML sont organisées par langue (par exemple `/fr/index.html`, `/es/index.html`) et partagent des ressources communes dans `/js`, `/css`, etc. Un petit serveur Node (`index.js`) est inclus pour faciliter les tests locaux.

Fonctionnalités
--------
- Site statique multilingue (EN / FR / ES / DE)
- Terminal interactif "Apprendre Java" — 100 leçons chargées depuis des fichiers JS par langue
- Developer Arcade — mini-jeux Canvas en JavaScript
- Extraits de code Java animés (logo, panneaux hero)
- Animations personnalisées : bulles canvas, pluie de code, pulsations au clic, "code-chips"
- Petit serveur statique Node (`index.js`) sans dépendances externes pour tests locaux
- Gestion sonore simple via `SoundManager` (référence aux fichiers audio dans `/audio`)

Stack technique & composition linguistique
-------------------------------
- HTML — contenu principal (pages du site)  
- JavaScript — interactions, logique de jeux, i18n, serveur
- CSS — mise en page et animations

Composition détectée (métadonnées du dépôt) :  
- HTML : ~62.5%  
- JavaScript : ~29.7%  
- CSS : ~7.8%

Structure du projet (vue d'ensemble)
------------------------------
- / (racine)
  - index.js                — petit serveur statique Node (sans dépendances)
  - js/                     — modules JS partagés et logique des pages
    - main.js
    - i18n.js
    - code-animations.js
    - sound.js
    - learn-java-logic.js / learn-java.js
    - lessons/
      - en-lessons.js
      - fr-lessons.js
      - ... (fichiers de leçons par langue, définissent LESSONS avec fonctions de validation)
    - games/                 — scripts des jeux de l'arcade
  - css/                    — feuilles de style (base, layout, animations, learn.css, arcade.css)
  - fr/, es/, en/, de/      — pages HTML par langue (index.html, learn-java.html, arcade.html, pages projets)
  - audio/                  — sons win/loose (référencés par sound.js)
  - public/ (optionnel)     — index.js sert preferentiellement ./public si présent

Lancer le site en local
--------------------
Option A — Serveur Node inclus
1. Installer Node (v14+ ; v18+ recommandé).
2. Depuis la racine du dépôt :
   - Démarrer :
     ```bash
     node index.js
     ```
   - Le serveur écoute par défaut sur le port 19164. Pour changer le port :
     ```bash
     PORT=3000 node index.js
     ```
   - Ouvrir : http://localhost:19164 (la racine est redirigée vers `/<lang>/index.html`, langue par défaut `en`)

Option B — Tout autre serveur statique
- Servez la racine du dépôt (ou `public/` si vous déplacez les fichiers compilés).
- Exemples :
  - Avec npx serve :
    ```bash
    npx serve .
    ```
  - Avec Python 3 :
    ```bash
    python -m http.server 8000
    ```
  - Remarque : le site utilise des chemins absolus débutant par `/`. Si vous servez sous un sous-chemin, les chemins devront être ajustés ou vous devrez utiliser un domaine racine.

Script npm recommandé (optionnel)
- Vous pouvez ajouter un package.json simple et un script start :
  ```json
  {
    "name": "site-projet",
    "version": "1.0.0",
    "scripts": {
      "start": "node index.js"
    }
  }
  ```
- Puis lancer :
  ```bash
  npm start
  ```

Déploiement
----------------
- Hébergement statique (préféré) :
  - GitHub Pages, Netlify, Vercel, Surge, etc. — le site est statique HTML/CSS/JS.
  - Attention GitHub Pages : si vous hébergez sous `https://username.github.io/repo/` (pages de projet), les chemins absolus commençant par `/` pointeront vers la racine du domaine et casseront les liens (ex. `/fr/index.html`). Pour éviter cela :
    - Utiliser un domaine personnalisé ou
    - Utiliser un site utilisateur/organisation (servi à la racine) ou
    - Convertir les chemins absolus en chemins relatifs / ajouter une étape de build qui injecte une base.
- Déploiement du serveur Node :
  - Le fichier `index.js` est adapté pour des tests rapides et peut tourner sur des services Node (Fly, Render, Railway, etc.). Pour une mise en production réelle, l’hébergement statique reste recommandé.

Hébergement (actuel)
--------------------
- Hébergement actuel : le site est hébergé sur un serveur dédié.
- Accès public : vous pouvez accéder au site à l'adresse suivante :
  - https://portfolio.eliassaire.fr
- Remarques :
  - Si vous utilisez un domaine pointant vers votre serveur (comme ci‑dessus), assurez-vous que les certificats TLS/HTTPS sont en place (Let's Encrypt recommandé).
  - Le serveur Node inclus (index.js) est utile pour des tests locaux, mais en production vous pouvez servir les fichiers statiques via Nginx/Apache (reverse-proxy) ou un service d'hébergement statique si vous préférez ne pas exécuter Node en continu sur la machine.

Notes importantes & sécurité
--------------------------------------------
- Leçons et fonctions de validation :
  - Les fichiers de leçons (ex. `js/lessons/fr-lessons.js`) définissent `LESSONS` et des fonctions `validation` exécutées côté client lors du clic sur "Exécuter". Ces validations effectuent principalement des vérifications de chaîne (input.includes(...)).
  - Si vous permettez plus tard des leçons éditables par des tiers ou un traitement côté serveur, soyez prudent : du code JavaScript malveillant pourrait s'exécuter dans le navigateur des visiteurs. Ne pas évaluer du JS utilisateur côté serveur sans sandboxing / sanitation.
- Audio : `js/sound.js` tente de charger `/audio/win.wav` et `/audio/loose.wav`. Vérifiez la présence de ces fichiers avant déploiement.
- i18n / redirection : `js/i18n.js` sauvegarde la préférence de langue dans localStorage et redirige `/` vers `/<lang>/index.html`. Si vous servez sous un sous-répertoire, la logique de redirection devra être adaptée.

Fichiers recommandés à ajouter
----------------------------
- LICENSE — choisissez et ajoutez une licence (MIT recommandée si vous voulez permissif).
- .gitignore — node_modules (si package.json ajouté), .DS_Store, .env, etc.
- package.json — pour facilité (scripts, metadata)
- Workflow CI léger (optionnel) — GitHub Actions pour lint JS/HTML/CSS

Contribuer
------------
- Si vous attendez des contributions externes :
  - Ajouter CONTRIBUTING.md (procédure PR, formatage, tests)
  - Ajouter CODE_OF_CONDUCT.md si nécessaire

Licence
-------
- Aucun fichier de licence détecté dans cette version du dépôt. Si vous voulez, je peux ajouter une licence (MIT, Apache-2.0, GPL-3.0, etc.) — dites-moi votre préférence.

---

Je peux ensuite, selon votre choix :
- Committer ce README.md dans une nouvelle branche et ouvrir une PR,
- Ajouter un package.json minimal et un .gitignore,
- Ajouter un fichier LICENSE (MIT par défaut),
- Convertir les chemins absolus `/` en chemins relatifs pour une compatibilité GitHub Pages (ou fournir un script de build).

Dites-moi quelle action vous voulez que je fasse ensuite.
```
```
