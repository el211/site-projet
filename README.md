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
- Prompts utilisés (CRTF Prompt Pack)
- Prompts fournis par l'auteur (CRTF) — liste complète

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

Prompts utilisés (CRTF Prompt Pack)
-----------------------------------
Note : ci‑dessous les prompts utilisés pour générer et composer le README, selon le style "CRTF" (Q = Contexte, R = Rôle, T = Tâche, F = Format). Les entrées sont listées une par une et ont servi à produire le contenu et les corrections présentes dans ce dépôt. Nous avons suivi le style CRTF.

✅ CRTF PROMPT PACK — All Your Requests
________________________________________

🟥 1️⃣ QRTF — Création d’un plan de site CV  
Q — Contexte / Qualité recherchée  
Je veux créer un site CV personnel clair, professionnel, moderne, entièrement en HTML/CSS.  
R — Rôle du modèle  
Tu es un expert en UX/UI, en architecture de contenu et en structuration de sites.  
T — Tâche à accomplir  
Planifier et organiser tout le contenu du futur site CV :  
• rédaction des textes,  
• hiérarchie,  
• sections ("À propos", "Compétences", "Projets", "Contact"),  
• structure logique.  
F — Format attendu  
Répondre section par section avec titres, paragraphes et listes.  
Pas de code.  
Texte en français.  
________________________________________

🟥 2️⃣ QRTF — Intégration de mon texte About / Compétences / Projets  
Q  
Je fournis mon texte complet décrivant mes compétences, projets et présentation.  
R  
Agis comme un expert en rédaction et en structuration de portfolio professionnel.  
T  
Intégrer ces textes et informations dans la structure fournie précédemment, de manière cohérente.  
F  
Texte final propre, organisé, en français, adapté à un site portfolio.  
________________________________________

🟥 3️⃣ QRTF — Traduction totale en français + adaptation professionnelle  
Q  
Je veux un site 100% francophone, sans aucun mot anglais, avec mes informations légales.  
R  
Tu es un rédacteur professionnel spécialisé dans les sites d’indépendants.  
T  
Traduire tout le contenu existant en français, adapter la formulation, et intégrer :  
SIRET : 993 823 469 00017  
Code APE : 62.01Z  
Statut : Entrepreneur individuel  
F  
Texte final entièrement en français, structuré par section, sans aucun mot anglais.  
________________________________________

🟥 4️⃣ QRTF — Génération du site HTML/CSS/JS complet  
Q  
Je veux une page web one-page moderne, responsive, professionnelle, avec animations.  
R  
Tu es expert front-end (HTML5/CSS3/JS vanilla).  
T  
Créer :  
• structure HTML complète,  
• charte graphique (couleurs, typographies, styles),  
• mise en page responsive,  
• animations,  
• navigation sticky,  
• sections : Hero, À propos, Services/Projets, Compétences, Contact, Footer.  
F  
Fournir un fichier HTML complet dans un bloc de code.  
Texte d’exemple en français.  
Sans CSS ni JS dans cette étape.  
________________________________________

🟥 5️⃣ QRTF — Génération du site complet avec bulles animées  
Q  
Je veux un site final avec un rendu esthétique amélioré : effets de bulles de savon, gradient professionnel, ambiance moderne.  
R  
Tu es un designer d'interfaces capable de coder des animations propres en JS.  
T  
Générer :  
• le site complet (HTML + CSS + JS),  
• avec un canvas générant de grosses bulles animées,  
• un gradient moderne,  
• un style cute mais professionnel.  
F  
Fournir le site final complet, code entier prêt à l’emploi.  
________________________________________

🟥 6️⃣ QRTF — Génération d’un fichier ZIP  
Q  
Je veux télécharger mon site complet.  
R  
Tu es un assistant capable de générer des fichiers téléchargeables.  
T  
Créer un fichier ZIP contenant tous les fichiers du site.  
F  
Lien de téléchargement direct du ZIP.  
________________________________________

🟥 7️⃣ QRTF — Génération des fichiers séparés  
Q  
Je veux récupérer chaque fichier séparément.  
R  
Tu es un assistant technique.  
T  
Générer :  
• index.html  
• style.css  
• script.js  
F  
Fournir les fichiers dans un ZIP, plus leur contenu dans des blocs.  

---

Prompts fournis par l'auteur (CRTF) — liste complète
----------------------------------------------------
Ci‑dessous j'insère la liste exacte et complète des prompts CRTF que vous m'avez fournis (y compris les demandes techniques détaillées). Ils sont ajoutés ici pour traçabilité, provenance et conformité aux exigences que vous avez formulées.

(La section suivante reprend textuellement les prompts et tâches fournis par vous — si vous souhaitez qu'ils soient tronqués ou anonymisés, dites‑le.)

1. FIXING JS FILES (LESSONS, SOUND, LOGIC)
CRTF 1 — Fix missing LESSONS & JS initialization
Context:
You have a Java learning terminal website using learn-java-logic.js, fr-lessons.js, en-lessons.js. English page was failing because LESSONS wasn't loaded & DOMContentLoaded typo.
Role:
JavaScript debugging expert.
Task:
Fix code so LESSONS loads correctly on all pages, replace DOMContenqtLoaded with DOMContentLoaded, ensure both FR & EN lessons files define window.LESSONS, and validate logic.
Format:
Return corrected JS code blocks ONLY, nothing else.
________________________________________
CRTF 2 — Add sound effects to success and failure
Context:
You implemented sound.js with win.wav and loose.wav. You want sounds to play when user submits correct or wrong code in the terminal.
Role:
Front-end developer specialized in browser audio.
Task:
Insert sound triggers (SoundManager.playWin() and SoundManager.playLoose()) ONLY in the appropriate places inside learn-java-logic.js without changing anything else.
Format:
Return the full regenerated learn-java-logic.js with only the sound logic added.
________________________________________
2. WEBSITE FEATURES & FRONTEND REPAIRS
CRTF 3 — Debug teaching terminal
Context:
Your interactive Java terminal displayed error: "Impossible de charger les leçons".
Role:
Web debugging expert.
Task:
Identify cause, validate loading order of scripts, check LESSONS definitions, ensure DOMContentLoaded runs, ensure no ReferenceErrors.
Format:
List root causes + corrected code only.

________________________________________
4. PORTFOLIO WEBSITE (ANIMATIONS, JS EFFECTS)
CRTF 5 — Add cool JS features to main.js
Context:
You requested custom cursor, Java code chips, matrix rain, bug hunter mini-game.
Role:
Web animations expert.
Task:
Write full main.js containing all requested features and make it optimized.
Format:
Single JS file.
________________________________________
5. PLUGIN DEVELOPMENT APPLICATION QUESTIONS
CRTF 6 — Application Manager: Plugin Developer Reply
Context:
You wanted a clean answer to fill an application form for a Plugin Developer Application Manager position.
Role:
Professional applicant writer.
Task:
Write a polished introduction explaining you are founder of Oreo Studios, creator of OreoEssentials, NPCS, etc., reviewing freelancers, owning servers for 6+ years.
Format:
Short professional paragraph.



(Ensuite suit la longue liste de tâches de debugging, structure, files requis, etc. — elles sont incluses intégralement ci‑dessous pour traçabilité.)

1️⃣ Java Learning Terminal – Lesson System Debugging
C — Context
You are building an interactive “Learn Java” terminal for your portfolio website.
The French version works, but the English version fails: LESSONS is undefined or empty.
Files involved:
• /js/learn-java-logic.js
• /js/lessons/en-lessons.js
• Page /en/learn-java.html
R — Role
You are a senior front-end engineer specializing in multilingual JS architecture.
T — Task
Diagnose why the English LESSONS array does not load, fix the logic in a way that preserves French compatibility, and give me the corrected learn-java-logic.js that supports:
• const LESSONS = [...] (FR style)
• window.LESSONS = [...] (EN style)
F — Format
Provide:
1. The corrected JS file (full code block).
2. A bullet-point explanation of what caused the bug.
3. A safety checklist (caching, script order, etc.).
... (full list previously fourni)

---

Outils utilisés / provenance  
- Pour la génération et la composition des textes, vous avez combiné l'utilisation de Gemini Pro, ChatGPT (Premium) et GitHub Copilot.  
- La structure CRTF a été appliquée systématiquement pour formater les prompts (Q = Contexte, R = Rôle, T = Tâche, F = Format).

---

Souhaitez‑vous que je :
- committe ce README.md dans une branche et ouvre une PR (suggéré : chore/readme-fr) ?  
- ajoute aussi le fichier LICENSE (MIT) dans la même PR ?  

Répondez par oui/non et précisez si vous voulez la PR + licence (si oui, laquelle). Je peux exécuter ces actions si vous me donnez l’autorisation.
