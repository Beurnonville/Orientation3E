# 🎓 Cap Après la 3ème : Les 3 Voies de Formation en France

> Application web interactive, responsive et pédagogique conçue pour aider les élèves de 3ème, leurs parents et les équipes éducatives à explorer les parcours de formation post-collège.

---

## 🌟 Points Forts du Projet

1. **Schéma Vectoriel SVG Haute Définition & Interactif** :
   - **3 colonnes distinctes** : 
     - 🔵 **Voie Générale & Technologique** (Bleu Azur - Statut scolaire en LGT)
     - 🟢 **Voie Professionnelle scolaire** (Vert Émeraude - Statut scolaire en LP avec PFMP)
     - 🟠 **Voie de l'Apprentissage** (Orange Énergie - Statut salarié avec alternance CFA & Entreprise)
   - **Mise en lumière & Estompage** : un simple clic sur un filtre ou une voie isole celle-ci et estompe les deux autres.
   - **Panneau descriptif coulissant** : un clic sur n'importe quel diplôme (Bac GT, Bac Pro, CAP, Seconde, etc.) ouvre une fiche détaillée (Pour qui, rythme, stages, débouchés, diplômes visés).
   - **Passerelles interactives** : visualisation claire des réorientations et continuités de parcours (P1 : CAP ➔ 1re Pro, P2 : 2de Pro ➔ 1re Techno, P3 : 2de GT ➔ 1re Pro, P4 : Voie scolaire ➔ Apprentissage).
   - **Outils pour la classe** : Mode **Plein Écran** (idéal pour vidéoprojection TNI / VPI), téléchargement SVG direct et bouton d'impression propre.

2. **Mode Mobile Intelligent** :
   - Zoom et déplacement tactile fluide sur le schéma SVG.
   - Bouton de bascule vers une **vue en cartes / timeline verticale**, parfaitement optimisée pour les smartphones des collégiens.

3. **Modules Pédagogiques Complémentaires** :
   - 📊 **Tableau Comparatif des 3 Voies** : statut, rythme, lieu, stages, rémunération, vacances, diplômes.
   - 🏭 **2nde Pro : Principales Familles de Métiers & Lycées de l'Aube (10)** :
     - Présentation détaillée des 12 grandes familles de métiers (Relation Client, Numérique/Énergie, Véhicules, Construction BIM, Bois, Hôtellerie, Textile/Mode, ASSP, Viticulture/Agriculture...).
     - Liste des spécialités de Bac Pro associées à chaque famille.
     - Cartographie des lycées professionnels de l'Aube (Troyes, Romilly-sur-Seine, Bar-sur-Aube, Bar-sur-Seine, Sainte-Savine, Sainte-Maure), avec distinction Public / Privé sous contrat.
     - Barre de recherche en temps réel et filtres thématiques (Tertiaire, Industrie, Bâtiment, Santé/Services, Agricole).
   - 🧭 **Mini-Quiz d'Orientation (5 questions)** : calcule le profil de l'élève et recommande la voie la plus adaptée.
   - 💰 **Simulateur de Rémunération en Apprentissage** : calcul instantané du salaire net légal selon l'âge (15-17 ans, 18-20 ans, 21 ans+) et l'année du contrat.
   - 💡 **Idées Reçues & FAQ** : réponses concrètes aux clichés sur la voie pro et l'apprentissage.
   - 🔍 **Glossaire des Sigles avec Recherche Dynamique** : décodage en direct des sigles (CAP, PFMP, CFA, BUT, BTS, STMG, STI2D, etc.).

---

## 🚀 Comment tester en local

Ce projet est un site statique moderne pur (HTML5, CSS3, JavaScript ES6) : **aucune installation de Node.js ou compilation n'est requise** !

### Méthode 1 : Ouvrir directement dans votre navigateur
Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans Chrome, Firefox, Edge ou Safari.

### Méthode 2 : Lancer un serveur local Python (recommandé)
Ouvrez un terminal dans le dossier du projet et tapez :
```bash
python -m http.server 8000
```
Puis ouvrez votre navigateur sur [http://localhost:8000](http://localhost:8000).

---

## 🌐 Déploiement sur GitHub Pages (Gratuit en 2 clics)

Le projet est conçu pour être publié immédiatement sur **GitHub Pages** :

### Méthode simple (via l'interface GitHub) :
1. Créez un dépôt sur votre compte GitHub (ex: `Apres3EME`) et poussez les fichiers du projet.
2. Sur la page de votre dépôt GitHub, cliquez sur **Settings** (Paramètres).
3. Dans le menu de gauche, cliquez sur **Pages**.
4. Sous **Build and deployment** > **Source** :
   - Choisissez **Deploy from a branch**.
   - Sélectionnez la branche `main` (ou `master`), dossier `/ (root)`, puis cliquez sur **Save**.
5. Après 1 à 2 minutes, votre site est en ligne à l'adresse : `https://<votre-pseudo>.github.io/Apres3EME/` !

### Méthode automatique (GitHub Actions) :
Un workflow automatisé est déjà inclus dans `.github/workflows/deploy.yml`. Si vous choisissez dans GitHub Pages **Source: GitHub Actions**, le déploiement se fera automatiquement à chaque modification.

---

## 📂 Structure des Fichiers

```
Apres3EME/
├── index.html                   # Page principale intégrant le SVG et tous les modules
├── styles/
│   └── main.css                 # Design system responsive, variables CSS et styles print
├── scripts/
│   ├── app.js                   # Logique applicative (tiroir, quiz, simulateur, FAQ, recherche)
│   ├── diagram.js               # Contrôleur d'interactivité SVG (focus/dim, pan-zoom, plein écran)
│   └── orientation-data.js      # Données pédagogiques structurées (fiches, questions, barèmes)
├── assets/
│   └── schema-post3eme.svg      # Schéma vectoriel autonome téléchargeable
├── .github/
│   └── workflows/
│       └── deploy.yml           # Configuration CI/CD GitHub Pages
└── README.md                    # Documentation du projet
```

---

## ✏️ Personnalisation des données

Pour enrichir ou modifier les informations, éditez simplement le fichier [`data/orientation-data.js`](data/orientation-data.js) :
- Modifiez les textes des formations ou ajoutez des spécialités dans `ORIENTATION_DATA.elements`.
- Mettez à jour le montant du SMIC ou les grilles dans `ORIENTATION_DATA.simulateurApprentissage`.
- Ajoutez de nouvelles questions dans `ORIENTATION_DATA.quizQuestions`.
- Ajoutez des sigles supplémentaires dans `ORIENTATION_DATA.glossaire`.

---

## 📄 Licence et Sources
- Données pédagogiques et schémas conformes aux référentiels du **Ministère de l'Éducation Nationale et de la Jeunesse** et de l'**ONISEP**.
- Projet libre et réutilisable dans un cadre pédagogique et éducatif.
