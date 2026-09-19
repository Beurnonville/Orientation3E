/**
 * Données pédagogiques officielles et détaillées - Orientation après la 3ème
 * Conforme aux programmes et référentiels de l'Éducation Nationale et de l'ONISEP.
 */

const ORIENTATION_DATA = {
  // Les 3 grandes voies
  voies: {
    "voie-gt": {
      id: "voie-gt",
      title: "Voie Générale & Technologique",
      subtitle: "Pour préparer un Bac général ou technologique et poursuivre des études supérieures",
      badge: "Lycée Général & Technologique",
      color: "#0284c7", // Bleu Azur
      colorLight: "#e0f2fe",
      colorDark: "#0369a1",
      icon: "graduation-cap",
      statut: "Statut scolaire (Élève lycéen)",
      duree: "3 ans (2de, 1re, Terminale)",
      lieu: "Lycée Général et Technologique (LGT)",
      description: "La voie générale et technologique s'adresse aux élèves désireux de poursuivre des études supérieures longues ou courtes (Universités, BTS, BUT, Classes Préparatoires, Écoles d'ingénieurs, de commerce ou spécialisées). Elle permet d'acquérir une culture générale solide et des méthodes de travail rigoureuses.",
      pourQui: [
        "Élèves à l'aise avec les apprentissages théoriques, la rédaction et l'analyse.",
        "Curieux, autonomes dans leur travail personnel quotidien (devoirs, révisions).",
        "Projet d'études supérieures post-bac d'au moins 2 à 5 ans."
      ],
      organisation: [
        "Classe de 2de générale et technologique commune (tronc commun + enseignements optionnels).",
        "En fin de 2de : choix d'orientation vers la 1re Générale (choix de 3 spécialités) OU vers une 1re Technologique (choix d'une série : STMG, STI2D, ST2S, STL, STD2A, STAV, STHR).",
        "Rythme hebdomadaire : environ 28 à 32 heures de cours par semaine + travail personnel régulier."
      ],
      debouches: [
        "Bac Général : Universités (Licence, Master, Doctorat), CPGE (Grandes Écoles), BUT (IUT), Écoles d'ingénieurs et de commerce post-bac.",
        "Bac Technologique : BUT (accès prioritaire avec quotas réservés), BTS/BTSA, Écoles spécialisées (santé, social, art, hôtellerie), CPGE technologiques."
      ]
    },

    "voie-pro": {
      id: "voie-pro",
      title: "Voie Professionnelle sous statut scolaire",
      subtitle: "Pour apprendre un métier concret en lycée tout en conservant le statut d'élève",
      badge: "Lycée Professionnel",
      color: "#059669", // Vert Émeraude
      colorLight: "#d1fae5",
      colorDark: "#047857",
      icon: "wrench",
      statut: "Statut scolaire (Élève lycéen)",
      duree: "2 ans (CAP) ou 3 ans (Bac Pro)",
      lieu: "Lycée Professionnel (LP) ou Lycée polyvalent",
      description: "La voie professionnelle en lycée permet d'apprendre un métier sur le terrain grâce à des ateliers pratiques équipés et des stages en entreprise (PFMP), tout en continuant à suivre des cours d'enseignement général appliqués au domaine professionnel.",
      pourQui: [
        "Élèves qui aiment la pratique, le travail manuel ou technique, le travail en équipe et les projets concrets.",
        "Désir d'avoir des semaines d'immersion dans le monde professionnel.",
        "Volonté d'entrer rapidement sur le marché du travail OU de continuer en BTS après le Bac Pro."
      ],
      organisation: [
        "Bac Professionnel (3 ans) : 2de pro organisée par grandes 'familles de métiers' ou spécialités, puis 1re et Terminale pro. Comprend 18 à 22 semaines de stage (PFMP) réparties sur les 3 ans.",
        "CAP (2 ans) : formation pratique ciblée sur un métier précis avec 12 à 14 semaines de stage en entreprise.",
        "Rémunération : gratification versée par l'État pour chaque semaine de stage en entreprise effectuée."
      ],
      debouches: [
        "Insertion directe sur le marché de l'emploi (diplôme qualifiant reconnu).",
        "Poursuite d'études après le Bac Pro : BTS / BTSA (places réservées), Certificats de Spécialisation (CS), voire BUT.",
        "Poursuite après le CAP : intégration en 1re Bac Pro (passerelle), BP (Brevet Professionnel), Mention Complémentaire."
      ]
    },

    "voie-apprentissage": {
      id: "voie-apprentissage",
      title: "Voie de l'Apprentissage (Alternance)",
      subtitle: "Pour se former à un métier avec un contrat de travail et un vrai salaire",
      badge: "CFA & Entreprise (Statut Salarié)",
      color: "#ea580c", // Orange Énergie
      colorLight: "#ffedd5",
      colorDark: "#c2410c",
      icon: "briefcase",
      statut: "Statut salarié (Apprenti avec contrat de travail)",
      duree: "1 à 3 ans selon le diplôme préparé (CAP, Bac Pro, BTS...)",
      lieu: "CFA (Centre de Formation d'Apprentis) et Entreprise d'accueil",
      description: "L'apprentissage est une formation en alternance : vous êtes salarié d'une entreprise et suivez vos cours théoriques et pratiques en CFA. Vous signez un contrat d'apprentissage, touchez un salaire chaque mois et bénéficiez des mêmes droits que n'importe quel travailleur (congés payés, protection sociale, cotisation retraite).",
      pourQui: [
        "Jeunes dès 15 ans (s'ils ont terminé la 3ème) très motivés pour entrer dans le monde du travail.",
        "Élèves matures, rigoureux, prêts à respecter les horaires et exigences d'une entreprise.",
        "Nécessite de trouver une entreprise d'accueil prête à signer un contrat d'apprentissage."
      ],
      organisation: [
        "Alternance : en moyenne 1 semaine en CFA et 2 à 3 semaines en entreprise (ou 2 jours CFA / 3 jours entreprise).",
        "35 heures de travail par semaine (CFA inclus) : 5 semaines de congés payés par an comme tout salarié.",
        "Rémunération mensuelle calculée en pourcentage du SMIC en fonction de l'âge (dès 15-17 ans) et de l'année d'apprentissage (exonérée d'impôts sur le revenu)."
      ],
      debouches: [
        "Taux d'insertion professionnelle exceptionnel : plus de 70% des apprentis trouvent un emploi dans les 6 mois suivant leur diplôme.",
        "Possibilité de poursuivre en apprentissage vers des niveaux supérieurs : Bac Pro, BTS, Licence Pro, Master, diplôme d'ingénieur."
      ]
    }
  },

  // Détails par étape et diplôme
  elements: {
    // Voie GT
    "seconde-gt": {
      id: "seconde-gt",
      voieId: "voie-gt",
      title: "2de Générale et Technologique",
      cycle: "Année de détermination (1 an)",
      public: "Élèves issus de 3ème ayant un avis favorable du conseil de classe",
      programme: "Tronc commun : Français (4h), Histoire-Géo (3h), LVA et LVB (5h30), Mathématiques (4h), Physique-Chimie (3h), SVT (1h30), EPS (2h), SES (1h30), Sciences Numériques & Technologie - SNT (1h30), EMC (18h/an). + 2 enseignements optionnels possibles.",
      rythme: "Env. 28h30 à 31h30 de cours par semaine + séquence d'observation obligatoire de 2 semaines en fin d'année (juin).",
      objectif: "Tester ses intérêts et choisir son orientation en fin d'année : 1re Générale (choix de 3 spécialités) OU 1re Technologique (choix de la série).",
      passerelles: "Possibilité de réorientation vers une 1re Pro si l'élève souhaite changer de voie."
    },
    "seconde-sthr": {
      id: "seconde-sthr",
      voieId: "voie-gt",
      title: "2de Spécifique STHR (Hôtellerie-Restauration)",
      cycle: "Classe de seconde spécifique",
      public: "Élèves passionnés par les métiers de l'hôtellerie et de la restauration",
      programme: "Dès la 2de, enseignements technologiques spécifiques de cuisine, service et gestion hôtelière en plus de l'enseignement général.",
      rythme: "Environ 32h par semaine avec ateliers pratiques et stages.",
      objectif: "Poursuite directe en 1re STHR puis Terminale STHR vers le Bac Technologique STHR.",
      passerelles: "Possibilité de bifurquer vers le Bac Pro cuisine/service si besoin."
    },
    "premiere-tle-generale": {
      id: "premiere-tle-generale",
      voieId: "voie-gt",
      title: "Cycle Terminal Général (1re & Terminale)",
      cycle: "2 ans vers le Baccalauréat Général",
      public: "Après une 2de générale et technologique",
      programme: "Tronc commun + 3 spécialités choisies en 1re (4h chacune) dont 2 conservées en Terminale (6h chacune) parmi : Maths, Physique-Chimie, SVT, SES, HGGSP, HLP, LLCER, NSI, SI, Arts, etc.",
      rythme: "Environ 28h de cours hebdomadaires avec épreuves du Baccalauréat réparties en contrôle continu (40%) et épreuves terminales (60% dont le Grand Oral et la Philo).",
      objectif: "Obtention du Bac Général ouvrant vers l'enseignement supérieur universitaire ou sélectif.",
      passerelles: "Passerelle possible vers une 1re ou Terminale technologique en cas de repositionnement."
    },
    "premiere-tle-techno": {
      id: "premiere-tle-techno",
      voieId: "voie-gt",
      title: "Cycle Terminal Technologique (1re & Terminale)",
      cycle: "2 ans vers le Baccalauréat Technologique",
      public: "Après une 2de générale et technologique (ou 2de STHR)",
      programme: "Tronc commun général + enseignements technologiques appliqués répartis en 8 séries : STMG (management/gestion), STI2D (industrie & dev. durable), ST2S (santé/social), STL (laboratoire), STD2A (design & arts), STAV (agronomie/vivant), STHR (hôtellerie), S2TMD (musique/danse).",
      rythme: "Environ 30h de cours par semaine combinant démarche de projet, travaux pratiques en labos et cours théoriques.",
      objectif: "Réussite prioritaire en filières technologiques supérieures : BUT (50% des places réservées), BTS, Écoles spécialisées.",
      passerelles: "Accès possible aux classes préparatoires technologiques (TSI, TPC, TB)."
    },
    "bac-general": {
      id: "bac-general",
      voieId: "voie-gt",
      title: "Le Baccalauréat Général",
      cycle: "Diplôme National de Niveau 4",
      public: "Délivré à l'issue de la classe de Terminale générale",
      programme: "Évaluation sur la base du contrôle continu (40%) et des 5 épreuves terminales (60% : Français anticipé en 1re, 2 spécialités au printemps, Philosophie et Grand Oral en juin).",
      rythme: "Formation académique approfondie.",
      objectif: "Poursuite d'études supérieures réussie sur Parcoursup.",
      passerelles: "Toutes filières supérieures accessibles (Universités, CPGE, Grandes Écoles, Écoles d'ingénieurs et de commerce post-bac)."
    },
    "bac-techno": {
      id: "bac-techno",
      voieId: "voie-gt",
      title: "Le Baccalauréat Technologique",
      cycle: "Diplôme National de Niveau 4",
      public: "Délivré à l'issue de la classe de Terminale technologique",
      programme: "Formation combinant enseignements généraux et technologiques appliqués à un secteur d'activité innovant.",
      rythme: "Pédagogie active par projets concrets et études de cas.",
      objectif: "Accès privilégié aux formations supérieures courtes et technologiques : 50% des places en BUT sont réservées aux bacheliers technologiques !",
      passerelles: "BTS/BTSA, CPGE technologiques, Écoles d'infirmiers, de commerce ou d'ingénieurs."
    },
    "post-bac-gt": {
      id: "post-bac-gt",
      voieId: "voie-gt",
      title: "Horizons Post-Bac (Voie GT)",
      cycle: "Enseignement Supérieur (Bac +2 à Bac +8)",
      public: "Titulaires d'un Bac Général ou Technologique",
      programme: "Panorama des poursuites d'études : Licence / Master / Doctorat à l'Université ; BUT en 3 ans en IUT ; BTS en 2 ans ; CPGE (Classes Préparatoires aux Grandes Écoles) ; Écoles d'ingénieurs ou de commerce ; Écoles spécialisées (Arts, Social, Paramédical, Architecture).",
      rythme: "Autonomie universitaire ou encadrement de type lycée (BTS/CPGE).",
      objectif: "Insertion professionnelle à niveau cadre, technicien supérieur, ingénieur ou chercheur.",
      passerelles: "Nombreuses passerelles d'équivalences de crédits ECTS entre filières universitaires, IUT et écoles."
    },

    // Voie Pro
    "seconde-pro": {
      id: "seconde-pro",
      voieId: "voie-pro",
      title: "2de Professionnelle (Lycée Pro)",
      cycle: "1re année du cycle Bac Pro en 3 ans",
      public: "Élèves de 3ème ayant un projet de formation professionnelle",
      programme: "Organisation par 'famille de métiers' ou spécialité directe. Enseignement pro en atelier/plateau technique + enseignement général adapté + accompagnement personnalisé.",
      rythme: "Environ 30h par semaine en lycée + 6 semaines de stages en entreprise (PFMP) réparties dans l'année.",
      objectif: "Acquérir les compétences communes d'un secteur avant de choisir sa spécialité précise en fin de 2de pour la 1re pro.",
      passerelles: "Passerelle possible vers une 1re technologique en fin d'année pour les élèves ayant d'excellents résultats."
    },
    "premiere-tle-pro": {
      id: "premiere-tle-pro",
      voieId: "voie-pro",
      title: "1re & Terminale Professionnelle",
      cycle: "Approfondissement du métier et préparation au Bac Pro",
      public: "Après une 2de professionnelle ou après un CAP (sur passerelle)",
      programme: "Spécialisation pointue dans le métier choisi. Réalisation d'un chef-d'œuvre (projet pluridisciplinaire d'équipe).",
      rythme: "Environ 30h par semaine + 14 à 16 semaines de PFMP (stage) sur les 2 ans. En Terminale, choix d'un parcours adapté : préparation poursuite d'études OU préparation insertion professionnelle.",
      objectif: "Obtention du Bac Professionnel et qualification ouvrière ou employée qualifiée / technicien.",
      passerelles: "Possibilité de basculer vers l'apprentissage en cours de route dans le même lycée ou en CFA."
    },
    "bac-pro": {
      id: "bac-pro",
      voieId: "voie-pro",
      title: "Le Baccalauréat Professionnel",
      cycle: "Diplôme National de Niveau 4",
      public: "Délivré à l'issue de la classe de Terminale professionnelle",
      programme: "Examen combinant épreuves écrites d'enseignement général, épreuves pratiques en atelier professionnel et évaluation des stages en entreprise.",
      rythme: "Diplôme reconnu sur tout le territoire national et dans les conventions collectives.",
      objectif: "Double débouché : insertion professionnelle immédiate OU poursuite d'études réussie en BTS/BTSA (places réservées pour les bacheliers pro).",
      passerelles: "BTS (2 ans), Certificats de Spécialisation (1 an), BUT pour les très bons dossiers."
    },
    "cap-scolaire": {
      id: "cap-scolaire",
      voieId: "voie-pro",
      title: "Le CAP sous statut scolaire (2 ans)",
      cycle: "Certificat d'Aptitude Professionnelle (Niveau 3)",
      public: "Élèves de 3ème souhaitant apprendre rapidement un métier très concret",
      programme: "1re et 2e année de CAP : enseignement professionnel dominant (ateliers pratiques, gestes métiers, sécurité) complété par un enseignement général adapté.",
      rythme: "Environ 30h par semaine en lycée + 12 à 14 semaines de stages en entreprise (PFMP) sur les 2 ans.",
      objectif: "Devenir ouvrier ou employé qualifié dans un métier précis (Boulanger, Électricien, Coiffeur, Petite enfance, Mécanique...).",
      passerelles: "Passerelle vers la 1re Bac Pro pour continuer ses études, ou Mention Complémentaire (CS) en 1 an."
    },
    "cap-3ans": {
      id: "cap-3ans",
      voieId: "voie-pro",
      title: "CAP en 3 ans (Parcours adapté)",
      cycle: "Aménagement pédagogique personnalisé",
      public: "Élèves à besoins éducatifs particuliers (ex : venant d'ULIS, SEGPA ou avec PAP)",
      programme: "Même diplôme et mêmes compétences que le CAP standard, mais cursus étalé sur 3 années pour un rythme plus progressif.",
      rythme: "Accompagnement renforcé, effectifs réduits et stages aménagés.",
      objectif: "Obtention sécurisée du CAP et insertion professionnelle réussie.",
      passerelles: "Insertion professionnelle ou poursuite adaptée."
    },
    "post-bac-pro": {
      id: "post-bac-pro",
      voieId: "voie-pro",
      title: "Horizons Post-Bac Pro & Post-CAP",
      cycle: "Insertion professionnelle ou Enseignement Supérieur court",
      public: "Titulaires d'un CAP ou d'un Bac Pro",
      programme: "Après un Bac Pro : BTS/BTSA (formations en 2 ans très prisées des recruteurs, avec quotas de places garanties) ; Certificats de Spécialisation (CS) ; FCIL. Après un CAP : CS, Brevet Professionnel (BP), ou passerelle vers 1re Bac Pro.",
      rythme: "Formations courtes professionnalisantes.",
      objectif: "Évolution vers des postes de chef d'équipe, agent de maîtrise ou création/reprise d'entreprise.",
      passerelles: "Possibilité de continuer ensuite en Licence Pro après un BTS."
    },

    // Voie Apprentissage
    "apprentissage-cap": {
      id: "apprentissage-cap",
      voieId: "voie-apprentissage",
      title: "CAP en Apprentissage (1 à 2 ans)",
      cycle: "Statut Salarié en CFA & Entreprise",
      public: "Jeunes dès 15 ans sortant de 3ème ayant signé un contrat d'apprentissage",
      programme: "Alternance continue entre le CFA (environ 12 à 15 semaines de cours par an : technologie métier, pratique, enseignement général) et l'Entreprise (tout le reste de l'année chez le patron).",
      rythme: "35 heures de travail hebdomadaire. Rémunération légale chaque mois (dès 27% à 39% du SMIC pour 15-17 ans, exonéré d'impôt et de charges salariales).",
      objectif: "Obtention du même diplôme d'État de CAP qu'en lycée, mais avec une expérience de terrain inégalée.",
      passerelles: "Embauche directe en CDI dans l'entreprise d'accueil ou poursuite en Bac Pro ou BP en apprentissage."
    },
    "apprentissage-bac-pro": {
      id: "apprentissage-bac-pro",
      voieId: "voie-apprentissage",
      title: "Bac Pro en Apprentissage (3 ans ou 2 ans)",
      cycle: "Statut Salarié en CFA & Entreprise",
      public: "Après la 3ème avec contrat d'apprentissage, ou après une 2de pro en lycée via bascule",
      programme: "Même référentiel d'examen que le Bac Pro scolaire, mais dispensé en alternance rythmée (ex : 2 semaines entreprise / 1 semaine CFA).",
      rythme: "Contrat de travail de 3 ans avec 5 semaines de congés payés par an. Salaire mensuel progressif de la 1re à la 3e année.",
      objectif: "Diplôme national de Bac Pro + 3 années complètes d'expérience professionnelle sur le CV.",
      passerelles: "Très fort taux d'embauche immédiate ou poursuite en BTS en alternance."
    },
    "post-apprentissage": {
      id: "post-apprentissage",
      voieId: "voie-apprentissage",
      title: "Horizons Post-Apprentissage",
      cycle: "Emploi qualifié ou Poursuite en Alternance Supérieure",
      public: "Titulaires d'un CAP ou Bac Pro réalisés en apprentissage",
      programme: "Poursuites d'études supérieures possibles en continuant en apprentissage : Brevet Professionnel (BP), BTS / BTSA en apprentissage, Bachelor, Licence Pro en alternance.",
      rythme: "L'alternance est possible jusqu'au niveau Bac +5 (Master, Ingénieur) !",
      objectif: "Excellente employabilité : 7 diplômés sur 10 en apprentissage sont en emploi dans les 6 mois.",
      passerelles: "Création d'entreprise facilitée par la maturité professionnelle acquise."
    }
  },

  // Passerelles entre les voies
  passerelles: [
    {
      id: "passerelle-cap-bacpro",
      from: "cap-scolaire",
      to: "premiere-tle-pro",
      title: "Passerelle CAP ➔ 1re Bac Pro",
      description: "Un élève diplômé d'un CAP qui a obtenu de bons résultats et souhaite poursuivre ses études peut entrer directement en classe de 1re professionnelle pour préparer son Bac Pro en 2 ans au lieu de 3.",
      conditions: "Avis favorable de l'équipe pédagogique et dossier de candidature académique."
    },
    {
      id: "passerelle-seconde-pro-techno",
      from: "seconde-pro",
      to: "premiere-tle-techno",
      title: "Passerelle 2de Pro ➔ 1re Technologique",
      description: "Un élève de 2de professionnelle qui révèle un profil plus théorique et obtient de très bons résultats dans les matières générales peut demander une réorientation vers une classe de 1re technologique correspondante (ex: STI2D, STMG, ST2S).",
      conditions: "Avis du conseil de classe du lycée professionnel et accord du proviseur du lycée d'accueil."
    },
    {
      id: "passerelle-seconde-gt-pro",
      from: "seconde-gt",
      to: "premiere-tle-pro",
      title: "Passerelle 2de GT ➔ 1re Pro ou 2de Pro",
      description: "Un élève de 2de générale et technologique qui se sent mal à l'aise dans le théorique pur peut demander une passerelle vers la voie professionnelle, soit directement en 1re pro, soit en reprenant une 2de pro spécialisée.",
      conditions: "Stage passerelle de découverte et validation du chef d'établissement."
    },
    {
      id: "passerelle-scolaire-apprentissage",
      from: "seconde-pro",
      to: "apprentissage-bac-pro",
      title: "Passerelle Voie Scolaire ➔ Apprentissage",
      description: "Un élève qui a débuté son Bac Pro ou CAP sous statut scolaire au lycée peut basculer sous contrat d'apprentissage dès qu'il a trouvé une entreprise d'accueil (y compris au sein du même lycée si celui-ci dispose d'une UFA).",
      conditions: "Signature d'un contrat d'apprentissage visé par le CFA et l'employeur."
    }
  ],

  // Tableau comparatif synthétique des 3 voies
  comparateur: [
    {
      critere: "Statut de l'élève",
      gt: "Élève lycéen (Statut scolaire)",
      pro: "Élève lycéen (Statut scolaire)",
      apprentissage: "Salarié de l'entreprise (Contrat d'apprentissage)"
    },
    {
      critere: "Lieu de la formation",
      gt: "Lycée général et technologique (100% en établissement)",
      pro: "Lycée professionnel (cours + ateliers techniques)",
      apprentissage: "Partagé entre le CFA (cours) et l'Entreprise (terrain)"
    },
    {
      critere: "Temps en entreprise",
      gt: "2 semaines d'observation en fin de 2de",
      pro: "18 à 22 semaines de stages (PFMP) réparties sur 3 ans (12-14 sem. en CAP)",
      apprentissage: "60% à 75% du temps total passé en entreprise toute l'année"
    },
    {
      critere: "Rémunération",
      gt: "Aucune (bourses de lycée possibles sur critères sociaux)",
      pro: "Gratification versée par l'État pour chaque semaine de stage effectuée",
      apprentissage: "Vrai salaire mensuel légal (% du SMIC selon l'âge : 27% à 67%+)"
    },
    {
      critere: "Vacances scolaires",
      gt: "16 semaines de vacances scolaires par an",
      pro: "16 semaines de vacances scolaires par an (hors périodes de stage)",
      apprentissage: "Pas de vacances scolaires : 5 semaines de congés payés par an"
    },
    {
      critere: "Diplômes préparés",
      gt: "Baccalauréat Général ou Baccalauréat Technologique",
      pro: "CAP (2 ans) ou Baccalauréat Professionnel (3 ans)",
      apprentissage: "Mêmes diplômes d'État : CAP, Bac Pro, BTS, etc."
    },
    {
      critere: "Après le diplôme",
      gt: "Études supérieures indispensables (Université, BUT, BTS, CPGE, Écoles)",
      pro: "Insertion pro directe OU poursuite d'études courtes (BTS, CS, BUT)",
      apprentissage: "Embauche directe très forte (70%+) OU poursuite en alternance (BTS...)"
    }
  ],

  // Simulateur de salaire en apprentissage (Grille légale officielle)
  smicMensuelBrut: 1801.80, // Valeur de référence
  simulateurApprentissage: {
    "15-17": {
      label: "Moins de 18 ans (15 à 17 ans)",
      annee1: { pct: 27, brut: 486.49, net: 486.49 },
      annee2: { pct: 39, brut: 702.70, net: 702.70 },
      annee3: { pct: 53, brut: 954.95, net: 954.95 }
    },
    "18-20": {
      label: "De 18 à 20 ans",
      annee1: { pct: 43, brut: 774.77, net: 774.77 },
      annee2: { pct: 51, brut: 918.92, net: 918.92 },
      annee3: { pct: 67, brut: 1207.21, net: 1207.21 }
    },
    "21-25": {
      label: "De 21 à 25 ans",
      annee1: { pct: 53, brut: 954.95, net: 954.95 },
      annee2: { pct: 61, brut: 1099.10, net: 1099.10 },
      annee3: { pct: 78, brut: 1405.40, net: 1405.40 }
    }
  },

  // Mini-Quiz interactif d'orientation (5 questions)
  quizQuestions: [
    {
      id: "q1",
      question: "Comment aimes-tu apprendre de nouvelles choses ?",
      options: [
        { text: "En écoutant, en lisant, en analysant des théories et en rédigeant des devoirs.", scores: { "voie-gt": 3, "voie-pro": 0, "voie-apprentissage": 0 } },
        { text: "En combinant des cours théoriques avec des travaux pratiques et des projets guidés.", scores: { "voie-gt": 2, "voie-pro": 2, "voie-apprentissage": 1 } },
        { text: "En manipulant du matériel réel, avec des ateliers pratiques et des gestes métiers.", scores: { "voie-gt": 0, "voie-pro": 3, "voie-apprentissage": 2 } },
        { text: "En étant directement sur le terrain, immergé en entreprise au contact de professionnels.", scores: { "voie-gt": 0, "voie-pro": 1, "voie-apprentissage": 3 } }
      ]
    },
    {
      id: "q2",
      question: "As-tu déjà une idée précise du métier que tu veux exercer ?",
      options: [
        { text: "Pas du tout, je veux garder un maximum de portes ouvertes le plus longtemps possible.", scores: { "voie-gt": 3, "voie-pro": 0, "voie-apprentissage": 0 } },
        { text: "J'ai un secteur en tête (ex: santé, informatique, commerce) mais pas encore de métier précis.", scores: { "voie-gt": 2, "voie-pro": 2, "voie-apprentissage": 1 } },
        { text: "Oui, je connais le domaine qui me plaît et je veux m'y former concrètement dès maintenant.", scores: { "voie-gt": 0, "voie-pro": 3, "voie-apprentissage": 2 } },
        { text: "Absolument ! J'ai un métier précis en tête et j'ai hâte de le pratiquer tous les jours.", scores: { "voie-gt": 0, "voie-pro": 1, "voie-apprentissage": 3 } }
      ]
    },
    {
      id: "q3",
      question: "Quel est ton rapport aux études après le Bac ?",
      options: [
        { text: "Je suis prêt(e) pour de longues études supérieures (Université, Prépa, 5 ans ou plus).", scores: { "voie-gt": 3, "voie-pro": 0, "voie-apprentissage": 0 } },
        { text: "J'envisage des études supérieures courtes et appliquées (BTS ou BUT en 2 à 3 ans).", scores: { "voie-gt": 2, "voie-pro": 2, "voie-apprentissage": 2 } },
        { text: "Je veux un diplôme rapide (CAP ou Bac Pro) pour travailler tout de suite, avec option BTS plus tard.", scores: { "voie-gt": 0, "voie-pro": 3, "voie-apprentissage": 2 } },
        { text: "Je veux être inséré dans l'emploi le plus vite possible tout en validant un diplôme reconnu.", scores: { "voie-gt": 0, "voie-pro": 1, "voie-apprentissage": 3 } }
      ]
    },
    {
      id: "q4",
      question: "Quelle importance accordes-tu à l'indépendance financière et au statut d'adulte ?",
      options: [
        { text: "Ce n'est pas ma priorité aujourd'hui, je préfère me consacrer 100% à mes cours de lycéen.", scores: { "voie-gt": 3, "voie-pro": 1, "voie-apprentissage": 0 } },
        { text: "Avoir des gratifications de stage est un vrai plus, tout en gardant les vacances scolaires.", scores: { "voie-gt": 0, "voie-pro": 3, "voie-apprentissage": 1 } },
        { text: "C'est capital : je veux toucher un salaire chaque mois et avoir mon propre budget.", scores: { "voie-gt": 0, "voie-pro": 0, "voie-apprentissage": 3 } }
      ]
    },
    {
      id: "q5",
      question: "Quel rythme de vie hebdomadaire te conviendrait le mieux ?",
      options: [
        { text: "Le rythme classique du lycée avec mes amis, cours du lundi au vendredi et devoirs le soir.", scores: { "voie-gt": 3, "voie-pro": 1, "voie-apprentissage": 0 } },
        { text: "Un équilibre entre cours au lycée et quelques semaines de stage réparties dans l'année.", scores: { "voie-gt": 0, "voie-pro": 3, "voie-apprentissage": 1 } },
        { text: "Un vrai rythme de salarié (35h, 5 semaines de congés payés, responsabilités en entreprise).", scores: { "voie-gt": 0, "voie-pro": 0, "voie-apprentissage": 3 } }
      ]
    }
  ],

  // Foire aux questions & Idées reçues
  faq: [
    {
      question: "Est-ce qu'un Bac Professionnel ferme la porte aux études supérieures ?",
      reponse: "Faux ! Aujourd'hui, près d'un bachelier professionnel sur deux poursuit ses études supérieures. La voie royale est le BTS (Brevet de Technicien Supérieur) en 2 ans, où les bacheliers professionnels bénéficient de quotas de places prioritaires. Certains continuent même ensuite en Licence Professionnelle ou en BUT."
    },
    {
      question: "L'apprentissage est-il réservé aux élèves en difficulté ?",
      reponse: "Absolument pas ! L'apprentissage est une modalité d'excellence et de maturité reconnue par toutes les entreprises. Elle existe du CAP jusqu'au diplôme d'ingénieur ou Master (Bac+5). Il exige une grande rigueur, de la ponctualité et un sens des responsabilités."
    },
    {
      question: "Si je choisis la voie générale, puis-je encore choisir mes matières ?",
      reponse: "Oui ! En 2de générale et technologique, vous suivez un tronc commun, mais dès la fin de 2de, c'est vous qui composez votre cursus en choisissant 3 enseignements de spécialité en 1re (maths, SVT, physique, SES, humanités, arts...) puis vous en gardez 2 en Terminale."
    },
    {
      question: "Peut-on changer de voie si on s'est trompé après la 3ème ?",
      reponse: "Tout à fait. Des 'passerelles' officielles existent : un élève de 2de générale peut se réorienter vers la voie pro, un élève de 2de pro peut rejoindre une 1re technologique s'il a d'excellents résultats, et un titulaire de CAP peut intégrer une 1re Bac Pro pour obtenir son Bac."
    },
    {
      question: "Qui paye la formation en apprentissage ?",
      reponse: "Pour l'apprenti et sa famille, la formation en CFA est 100% gratuite ! Elle est financée par les opérateurs de compétences (OPCO) des entreprises et l'employeur. De plus, l'apprenti perçoit un salaire mensuel."
    },
    {
      question: "Qu'est-ce qu'une 'famille de métiers' en 2de professionnelle ?",
      reponse: "En 2de pro, beaucoup de filières regroupent plusieurs spécialités proches (ex: métiers de la relation client, métiers de la construction durable). Cela permet à l'élève d'explorer le secteur pendant un an avant de choisir sa spécialité définitive pour la 1re et Terminale pro."
    }
  ],

  // =========================================================================
  // 2nde Pro : Principales Familles de Métiers et Lycées de l'Aube (10)
  // =========================================================================
  famillesMetiers: [
    {
        "id": "mrc",
        "nom": "Métiers de la relation client",
        "sigle": "MRC",
        "categorie": "tertiaire",
        "badgeColor": "#0284c7",
        "description": "En 2de pro MRC, vous apprenez les fondamentaux de l'accueil, de la communication commerciale, du conseil client, de l'animation d'un espace de vente et de la prospection commerciale.",
        "bacsPros": [
            {
                "titre": "Bac Pro Métiers du commerce et de la vente - Option A : Animation et gestion de l'espace commercial (AGEC)",
                "focus": "Gestion de rayon, approvisionnement, mise en valeur des produits, conseil et encaissement en point de vente."
            },
            {
                "titre": "Bac Pro Métiers du commerce et de la vente - Option B : Prospection clientèle et valorisation de l'offre commerciale (PCVOC)",
                "focus": "Prospection de nouveaux clients, négociation commerciale, vente conseil itinérante ou à distance, fidélisation."
            },
            {
                "titre": "Bac Pro Métiers de l'accueil (MA)",
                "focus": "Accueil physique et téléphonique, gestion des flux de visiteurs, information, médiation et relations publiques."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Marie de Champagne",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Commerce et vente (Option A + Option B)",
                "capacite": 36,
                "demandes": {
                    "2025": 124,
                    "2024": 135,
                    "2023": 144
                }
            },
            {
                "nom": "Lycée professionnel Gabriel Voisin",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Commerce et vente (Option A + Option B) et Bac Pro Métiers de l'accueil",
                "capacite": 72,
                "demandes": {
                    "2025": 31,
                    "2024": 39,
                    "2023": 22
                }
            },
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Métiers du commerce et de la vente",
                "capacite": 36,
                "demandes": {
                    "2025": 37,
                    "2024": 46,
                    "2023": 59
                }
            },
            {
                "nom": "Lycée polyvalent Gaston Bachelard",
                "commune": "Bar-sur-Aube",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Métiers du commerce et de la vente (Option A uniquement)",
                "capacite": 18,
                "demandes": {
                    "2025": 33,
                    "2024": 31,
                    "2023": 20
                }
            },
            {
                "nom": "Lycée professionnel Léonie Aviat",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MRC : Bac Pro Commerce et vente (Option A) et Bac Pro Métiers de l'accueil",
                "capacite": 54,
                "demandes": {
                    "2025": 11,
                    "2024": null,
                    "2023": null
                }
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MRC : Bac Pro Métiers du commerce et de la vente (Option B uniquement)",
                "capacite": 24,
                "demandes": {
                    "2025": 20,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "gatl",
        "nom": "Métiers de la gestion administrative, du transport et de la logistique",
        "sigle": "GATL",
        "categorie": "tertiaire",
        "badgeColor": "#0284c7",
        "description": "Gestion des flux de documents et de marchandises, organisation administrative des entreprises, gestion des commandes, comptabilité et chaîne logistique.",
        "bacsPros": [
            {
                "titre": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
                "focus": "Secrétariat, gestion du personnel, suivi commercial et financier avec progiciels de gestion intégrés (PGI)."
            },
            {
                "titre": "Bac Pro Logistique",
                "focus": "Réception, stockage, préparation de commandes, gestion d'entrepôt informatisé, expéditions et traçabilité."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Marie de Champagne",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 56,
                "demandes": {
                    "2025": 40,
                    "2024": 51,
                    "2023": 47
                }
            },
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 36,
                "demandes": {
                    "2025": 7,
                    "2024": 11,
                    "2023": 16
                }
            },
            {
                "nom": "Lycée professionnel Jeanne Mance",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro GATL : Bac Pro Logistique",
                "capacite": 18,
                "demandes": {
                    "2025": 8,
                    "2024": null,
                    "2023": null
                }
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 18,
                "demandes": {
                    "2025": 7,
                    "2024": null,
                    "2023": null
                }
            },
            {
                "nom": "Lycée professionnel Léonie Aviat",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 18,
                "demandes": {
                    "2025": 3,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "tne",
        "nom": "Métiers des transitions numérique et énergétique",
        "sigle": "MTNE / TNE",
        "categorie": "industrie",
        "badgeColor": "#059669",
        "description": "Réseaux électriques intelligents, télécommunications, domotique, génie climatique, énergies renouvelables et cybersécurité des systèmes connectés.",
        "bacsPros": [
            {
                "titre": "Bac Pro Métiers de l'électricité et de ses environnements connectés (MELEC)",
                "focus": "Installations électriques industrielles, tertiaires et résidentielles, réseaux domotiques, bornes de recharge et énergies renouvelables."
            },
            {
                "titre": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
                "focus": "Maintenance des réseaux informatiques, IoT, cybersécurité, télécommunications et électronique industrielle."
            },
            {
                "titre": "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER)",
                "focus": "Pose et raccordement des pompes à chaleur, chaudières biomasse, climatisation, ventilation et sanitaires."
            },
            {
                "titre": "Bac Pro Maintenance et efficacité énergétique (MEE)",
                "focus": "Dépannage, régulation, maintenance préventive et optimisation énergétique des systèmes thermiques et frigorifiques."
            },
            {
                "titre": "Bac Pro Métiers du froid et des énergies renouvelables (MFER)",
                "focus": "Installation et maintenance des circuits frigorifiques commerciaux et industriels et des systèmes de conditionnement d'air."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Les Lombards",
                "commune": "Troyes",
                "statut": "Public",
                "details": "Pôle départemental d'excellence : Bac Pro ICCER, MEE, MELEC et CIEL",
                "capacite": 84,
                "demandes": {
                    "2025": 83,
                    "2024": 94,
                    "2023": 93
                }
            },
            {
                "nom": "Lycée polyvalent Gaston Bachelard",
                "commune": "Bar-sur-Aube",
                "statut": "Public",
                "details": "2de Pro MTNE : Bac Pro MELEC (Électricité et environnements connectés)",
                "capacite": 15,
                "demandes": {
                    "2025": 13,
                    "2024": 13,
                    "2023": 11
                }
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MTNE : Bac Pro CIEL, MELEC et MFER (Froid & énergies renouvelables)",
                "capacite": 60,
                "demandes": {
                    "2025": 28,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "mmv",
        "nom": "Métiers de la maintenance des matériels et des véhicules",
        "sigle": "MMV",
        "categorie": "industrie",
        "badgeColor": "#059669",
        "description": "Diagnostic, entretien mécanique, hydraulique et électronique sur véhicules particuliers, poids lourds, motocycles, matériels agricoles et engins de travaux publics.",
        "bacsPros": [
            {
                "titre": "Bac Pro Maintenance des véhicules (Option A : Voitures particulières, Option B : Transport routier, Option C : Motocycles)",
                "focus": "Diagnostic électronique, moteurs thermiques/hybrides/électriques, boîtes de vitesses, freinage et sécurité."
            },
            {
                "titre": "Bac Pro Maintenance des matériels (Option A : Agricoles, Option B : Construction et manutention / TP, Option C : Espaces verts)",
                "focus": "Tracteurs, moissonneuses, pelles mécaniques, chariots élévateurs et matériels parcs et jardins."
            },
            {
                "titre": "Bac Pro Carrossier peintre automobile (accès direct post-3e)",
                "focus": "Débosselage, banc de redressage, soudure, préparation des surfaces et peinture en cabine."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée professionnel du Val Moré",
                "commune": "Bar-sur-Seine",
                "statut": "Public",
                "details": "Pôle de référence régional : Maintenance des matériels (Agricoles, TP, Espaces verts) + Maintenance des véhicules (PL, Motos)",
                "capacite": 72,
                "demandes": {
                    "2025": 57,
                    "2024": 48,
                    "2023": 55
                }
            },
            {
                "nom": "Lycée professionnel Gabriel Voisin",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro Maintenance : Bac Pro Maintenance des véhicules (Option A : Voitures particulières) [30 pl.] + Bac Pro Carrossier peintre automobile [20 pl.]",
                "capacite": 50,
                "demandes": {
                    "2025": 44,
                    "2024": 46,
                    "2023": 47
                }
            }
        ]
    },
    {
        "id": "ctrm",
        "nom": "Métiers de la conduite et du transport routier de marchandises",
        "sigle": "CTRM",
        "categorie": "industrie",
        "badgeColor": "#059669",
        "description": "Formation de conducteur routier professionnel : conduite de poids lourds, sécurité routière, éco-conduite, arrimage, procédures de chargement et réglementation européenne.",
        "bacsPros": [
            {
                "titre": "Bac Pro Conducteur transport routier marchandises (CTRM)",
                "focus": "Conduite de camions porteurs et ensembles articulés, permis C et CE, FIMO, manœuvres et logistique de livraison."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée professionnel du Val Moré",
                "commune": "Bar-sur-Seine",
                "statut": "Public",
                "details": "Lycée des métiers du transport : Bac Pro CTRM (Conducteur transport routier marchandises - Filière très demandée)",
                "capacite": 24,
                "demandes": {
                    "2025": 54,
                    "2024": 36,
                    "2023": 48
                }
            }
        ]
    },
    {
        "id": "pmia",
        "nom": "Métiers du pilotage et de la maintenance d'installations automatisées",
        "sigle": "PMIA / MSPC",
        "categorie": "industrie",
        "badgeColor": "#059669",
        "description": "Maintenance industrielle préventive et corrective sur lignes robotisées, automates programmables, capteurs connectés en usine 4.0 et électrotechnique.",
        "bacsPros": [
            {
                "titre": "Bac Pro Maintenance des systèmes de production connectés (MSPC - ex-MEI)",
                "focus": "Dépannage mécanique, électrique, pneumatique et hydraulique sur lignes de fabrication automatisées."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Les Lombards",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro PMIA : Bac Pro MSPC (Maintenance des systèmes connectés)",
                "capacite": 15,
                "demandes": {
                    "2025": 10,
                    "2024": 15,
                    "2023": 7
                }
            },
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "2de Pro PMIA : Bac Pro MSPC (Maintenance des systèmes connectés)",
                "capacite": 15,
                "demandes": {
                    "2025": 15,
                    "2024": 17,
                    "2023": 6
                }
            }
        ]
    },
    {
        "id": "alimentation-bioind",
        "nom": "Métiers de l'alimentation, des bio-industries et du laboratoire",
        "sigle": "BIO-IND / PIPAC",
        "categorie": "industrie",
        "badgeColor": "#059669",
        "description": "Conduite d'équipements en salle propre / salle blanche, stérilisation, contrôles qualité et conditionnement dans l'industrie pharmaceutique, cosmétique et agroalimentaire.",
        "bacsPros": [
            {
                "titre": "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)",
                "focus": "Fabrication de médicaments, crèmes cosmétiques et produits agroalimentaires, respect des Bonnes Pratiques de Fabrication (BPF)."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Les Lombards",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro Métiers de l'alimentation - bio-industries : Bac Pro PIPAC",
                "capacite": 15,
                "demandes": {
                    "2025": 12,
                    "2024": 12,
                    "2023": 5
                }
            }
        ]
    },
    {
        "id": "cdbtp",
        "nom": "Métiers de la construction durable, du bâtiment et des travaux publics",
        "sigle": "CDBTP / AFB",
        "categorie": "batiment",
        "badgeColor": "#d97706",
        "description": "Aménagements intérieurs et extérieurs du bâtiment : pose de cloisons sèches, finitions, revêtements de sols et murs, peintures techniques, isolation thermique et acoustique.",
        "bacsPros": [
            {
                "titre": "Bac Pro Aménagement et finition du bâtiment (AFB)",
                "focus": "Peinture, plâtrerie, pose de faux plafonds, revêtements souples et parquets, amélioration de la performance énergétique."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Les Lombards",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro CDBTP : Bac Pro AFB (Aménagement et finition du bâtiment)",
                "capacite": 15,
                "demandes": {
                    "2025": 23,
                    "2024": 17,
                    "2023": 22
                }
            }
        ]
    },
    {
        "id": "mnb",
        "nom": "Métiers des études et de la modélisation numérique du bâtiment (BIM)",
        "sigle": "MNB / TEB",
        "categorie": "batiment",
        "badgeColor": "#d97706",
        "description": "Conception de maquettes numériques de bâtiments (BIM), dessin assisté par ordinateur (DAO), plans d'architecte, métrés et études économiques de chantiers.",
        "bacsPros": [
            {
                "titre": "Bac Pro Technicien d'études du bâtiment (TEB) - Option A : Études et économie",
                "focus": "Métrés, estimation des coûts de construction, devis quantitatifs et suivi administratif de chantier."
            },
            {
                "titre": "Bac Pro Technicien d'études du bâtiment (TEB) - Option B : Assistant en architecture",
                "focus": "Plans architecturaux 2D/3D, maquettes volumiques, permis de construire et insertion paysagère."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Les Lombards",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro MNB : Bac Pro TEB Option A (Études et économie)",
                "capacite": 15,
                "demandes": {
                    "2025": 10,
                    "2024": 16,
                    "2023": 16
                }
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MNB : Bac Pro TEB Option B (Assistant en architecture)",
                "capacite": 15,
                "demandes": {
                    "2025": 12,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "agencement-bois",
        "nom": "Métiers de l'agencement, de la menuiserie et de l'ameublement",
        "sigle": "AGENCEMENT / BOIS",
        "categorie": "batiment",
        "badgeColor": "#d97706",
        "description": "Usinage du bois et matériaux dérivés sur machines numériques, fabrication de mobilier, agencement de magasins et de cuisines, pose sur chantier.",
        "bacsPros": [
            {
                "titre": "Bac Pro Technicien menuisier agenceur (TMA)",
                "focus": "Fabrication et pose d'ouvrages menuisés sur mesure : portes, fenêtres, escaliers et cloisons d'agencement."
            },
            {
                "titre": "Bac Pro Études et réalisation d'agencement (ERA)",
                "focus": "Conception technique 3D d'agencements intérieurs haut de gamme, mobilier commercial et coordination de pose."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Les Lombards",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro Agencement/Menuiserie : Bac Pro Technicien menuisier agenceur (TMA)",
                "capacite": 15,
                "demandes": {
                    "2025": 19,
                    "2024": 15,
                    "2023": 11
                }
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro Agencement/Menuiserie : Bac Pro Études et réalisation d'agencement (ERA)",
                "capacite": 15,
                "demandes": {
                    "2025": 14,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "mhr",
        "nom": "Métiers de l'hôtellerie-restauration",
        "sigle": "MHR",
        "categorie": "services-sante",
        "badgeColor": "#ea580c",
        "description": "Formation d'excellence aux techniques culinaires, à l'art du service en salle, à la sommellerie et à la relation clientèle gastronomique en restaurant d'application.",
        "bacsPros": [
            {
                "titre": "Bac Pro Cuisine",
                "focus": "Techniques de cuisson, pâtisserie de restaurant, dressage créatif, gestion des stocks et règles HACCP."
            },
            {
                "titre": "Bac Pro Commercialisation et services en restauration (CSR)",
                "focus": "Accueil, découpe en salle, flambage, sommellerie, œnologie et gestion de salle de restaurant."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Édouard Herriot",
                "commune": "Sainte-Savine",
                "statut": "Public",
                "details": "Lycée des métiers de l'hôtellerie-restauration : 2de Pro MHR ➔ Bac Pro Cuisine & Bac Pro CSR (avec restaurant d'application)",
                "capacite": 48,
                "demandes": {
                    "2025": 58,
                    "2024": 69,
                    "2023": 67
                }
            }
        ]
    },
    {
        "id": "mode",
        "nom": "Métiers de la mode et de la confection (Spécialité Aube)",
        "sigle": "MODE / COUTURE",
        "categorie": "services-sante",
        "badgeColor": "#ea580c",
        "description": "Patronnage, gradation, confection et montage de pièces d'habillement dans le berceau historique de la maille et du textile aubois.",
        "bacsPros": [
            {
                "titre": "Bac Pro Métiers de la couture et de la confection",
                "focus": "Coupe, montage, assemblage de pièces techniques, finitions haut de gamme et prêt-à-porter."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Édouard Herriot",
                "commune": "Sainte-Savine",
                "statut": "Public",
                "details": "Pôle d'excellence textile aubois : Bac Pro Métiers de la couture et de la confection",
                "capacite": 30,
                "demandes": {
                    "2025": 27,
                    "2024": 22,
                    "2023": 40
                }
            }
        ]
    },
    {
        "id": "sante-social",
        "nom": "Métiers de la santé, du soin et de l'animation (ASSP & AEPA)",
        "sigle": "ASSP / AEPA",
        "categorie": "services-sante",
        "badgeColor": "#ea580c",
        "description": "Soins d'hygiène, de confort et de sécurité, accompagnement des personnes fragilisées, personnes âgées ou enfants, et conception de projets d'animation socio-éducative.",
        "bacsPros": [
            {
                "titre": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
                "focus": "Soins d'hygiène, ergonomie, nutrition, biologie appliquée et accompagnement en EHPAD, hôpitaux, crèches ou domicile."
            },
            {
                "titre": "Bac Pro Animation-enfance et personnes âgées (AEPA)",
                "focus": "Conception d'activités culturelles, artistiques et sportives auprès des enfants et des seniors pour favoriser l'épanouissement et le lien social."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée polyvalent Marie de Champagne",
                "commune": "Troyes",
                "statut": "Public",
                "details": "Grand pôle santé-social public : Bac Pro ASSP [48 pl.] et Bac Pro AEPA (Animation-enfance) [20 pl.]",
                "capacite": 68,
                "demandes": {
                    "2025": 117,
                    "2024": 108,
                    "2023": 71
                }
            },
            {
                "nom": "Lycée professionnel Jeanne Mance",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "Bac Pro ASSP (Accompagnement, soins et services à la personne)",
                "capacite": 30,
                "demandes": {
                    "2025": 25,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "sapat",
        "nom": "Services aux personnes et animation dans les territoires (SAPAT)",
        "sigle": "SAPAT",
        "categorie": "services-sante",
        "badgeColor": "#ea580c",
        "description": "Services de proximité en milieu rural, accueil et prise en charge des publics dépendants, accompagnement médico-social et animation du développement local.",
        "bacsPros": [
            {
                "titre": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
                "focus": "Aide à la personne, animation territoriale rurale, accueil petite enfance, médiation sociale et valorisation du cadre de vie."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée agricole Charles Baltet",
                "commune": "Saint-Pouange",
                "statut": "Public agricole",
                "details": "Lycée agricole public : Bac Pro SAPAT (Services aux personnes et animation des territoires)",
                "capacite": 32,
                "demandes": {
                    "2025": 28,
                    "2024": 26,
                    "2023": 20
                }
            },
            {
                "nom": "Lycée privé des Cordeliers",
                "commune": "Arcis-sur-Aube",
                "statut": "Privé sous contrat",
                "details": "Lycée privé rural : Bac Pro SAPAT (Services aux personnes et animation des territoires)",
                "capacite": 24,
                "demandes": {
                    "2025": 16,
                    "2024": 14,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "securite",
        "nom": "Métiers de la sécurité et de la prévention",
        "sigle": "SÉCURITÉ",
        "categorie": "tertiaire",
        "badgeColor": "#0284c7",
        "description": "Préparation aux concours de la police, de la gendarmerie, des sapeurs-pompiers (SDIS), de l'armée et aux métiers de la sûreté privée, du gardiennage et de la sécurité incendie.",
        "bacsPros": [
            {
                "titre": "Bac Pro Métiers de la sécurité",
                "focus": "Sécurité incendie (SSIAP 1), secours à personnes, sûreté aéroportuaire/événementielle, télésurveillance et droit pénal."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "Bac Pro Métiers de la sécurité (Filière publique très demandée - taux de pression > 2.2)",
                "capacite": 18,
                "demandes": {
                    "2025": 41,
                    "2024": 46,
                    "2023": 53
                }
            },
            {
                "nom": "Lycée professionnel Jeanne Mance",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "Bac Pro Métiers de la sécurité",
                "capacite": 30,
                "demandes": {
                    "2025": 35,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "productions-agricoles",
        "nom": "Métiers des productions agricoles et équines",
        "sigle": "PRODUCTIONS / CGEA / CGEH",
        "categorie": "agricole",
        "badgeColor": "#16a34a",
        "description": "Conduite et gestion des exploitations agricoles en grandes cultures, polyculture-élevage ou élevage équin, agronomie durable et machinisme.",
        "bacsPros": [
            {
                "titre": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA - Grandes cultures / Polyculture élevage)",
                "focus": "Agronomie, grandes cultures, élevage, santé animale, gestion économique et environnementale d'une exploitation."
            },
            {
                "titre": "Bac Pro Conduite et gestion de l'entreprise hippique (CGEH)",
                "focus": "Soins et entraînement des équidés, travail monté/attelé, gestion d'un centre équestre ou d'un haras d'élevage."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée agricole Charles Baltet",
                "commune": "Saint-Pouange",
                "statut": "Public agricole",
                "details": "2de Pro Métiers des productions : Bac Pro CGEA (Grandes cultures / Polyculture élevage)",
                "capacite": 50,
                "demandes": {
                    "2025": 26,
                    "2024": 49,
                    "2023": 53
                }
            },
            {
                "nom": "Lycée agricole privé Sainte-Maure",
                "commune": "Sainte-Maure",
                "statut": "Privé agricole sous contrat",
                "details": "2de Pro Métiers des productions : Bac Pro CGEA (Grandes cultures / Polyculture élevage) et Bac Pro CGEH (Entreprise hippique)",
                "capacite": 50,
                "demandes": {
                    "2025": 20,
                    "2024": 18,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "nature-foret",
        "nom": "Métiers de la forêt, de la nature et de la gestion de la faune",
        "sigle": "FORÊT / GMNF",
        "categorie": "agricole",
        "badgeColor": "#16a34a",
        "description": "Gestion durable et exploitation sylvicole des forêts, aménagement des espaces naturels, préservation de la biodiversité et suivi des populations de faune sauvage.",
        "bacsPros": [
            {
                "titre": "Bac Pro Forêt",
                "focus": "Sylviculture, abattage, débardage mécanisé, régénération des massifs forestiers et vente de bois d'œuvre."
            },
            {
                "titre": "Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
                "focus": "Génie écologique, inventaires naturalistes, restauration des zones humides, aménagement de corridors écologiques."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée forestier de Crogny",
                "commune": "Chaource",
                "statut": "Public",
                "details": "2de Pro Métiers de la nature - jardin - paysage - forêt : Bac Pro Forêt",
                "capacite": 32,
                "demandes": {
                    "2025": 22,
                    "2024": 21,
                    "2023": 17
                }
            },
            {
                "nom": "Lycée agricole privé Sainte-Maure",
                "commune": "Sainte-Maure",
                "statut": "Privé agricole sous contrat",
                "details": "2de Pro Métiers de la nature - forêt : Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
                "capacite": 28,
                "demandes": {
                    "2025": 16,
                    "2024": 10,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "conseil-vente-alimentation",
        "nom": "Métiers du conseil-vente en alimentation et produits de terroir",
        "sigle": "CONSEIL-VENTE",
        "categorie": "agricole",
        "badgeColor": "#16a34a",
        "description": "Conseil culinaire et nutritionnel, valorisation marchande des produits alimentaires de terroir, vins et boissons, gestion des rayons et relation clientèle spécialisée.",
        "bacsPros": [
            {
                "titre": "Bac Pro Technicien conseil-vente en alimentation (Option produits alimentaires et boissons)",
                "focus": "Dégustation, traçabilité des produits du terroir, merchandising alimentaire, vente conseil et gestion des stocks."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée privé des Cordeliers",
                "commune": "Arcis-sur-Aube",
                "statut": "Privé sous contrat",
                "details": "2de Pro Métiers du conseil-vente : Bac Pro Technicien conseil-vente en alimentation",
                "capacite": 24,
                "demandes": {
                    "2025": 0,
                    "2024": 5,
                    "2023": null
                }
            }
        ]
    },
    {
        "id": "arts-beaute",
        "nom": "Artisanat, Métiers d'art, Beauté & Bien-être",
        "sigle": "ARTS / BEAUTÉ",
        "categorie": "services-sante",
        "badgeColor": "#ea580c",
        "description": "Création graphique plurimédia, communication visuelle et design d'édition, soins esthétiques professionnels, cosmétique, maquillage et bien-être.",
        "bacsPros": [
            {
                "titre": "Bac Pro Artisanat et métiers d'art - Option Communication visuelle plurimédia",
                "focus": "Graphisme, typographie, identité visuelle, PAO, webdesign et création de supports de communication imprimés et digitaux."
            },
            {
                "titre": "Bac Pro Esthétique cosmétique parfumerie (2de Pro Métiers de la beauté et du bien-être)",
                "focus": "Soins du visage et du corps, techniques de maquillage, conseil et vente de produits cosmétiques et parfums."
            }
        ],
        "lyceesAube": [
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "Bac Pro Artisanat & métiers d'art (Communication visuelle) [15 pl. / 26 demandes] & 2de Pro Métiers de la beauté : Bac Pro Esthétique [15 pl. / 20 demandes]",
                "capacite": 30,
                "demandes": {
                    "2025": 46,
                    "2024": null,
                    "2023": null
                }
            }
        ]
    }
],

  // Glossaire complet des sigles
  glossaire: [
    { sigle: "CAP", definition: "Certificat d'Aptitude Professionnelle", description: "Diplôme national de niveau 3 qui se prépare en 2 ans après la 3e (en lycée pro ou en apprentissage). Il forme à un métier très précis." },
    { sigle: "Bac Pro", definition: "Baccalauréat Professionnel", description: "Diplôme national de niveau 4 qui se prépare en 3 ans (2de, 1re, Terminale pro). Il permet l'insertion professionnelle immédiate ou la poursuite en BTS." },
    { sigle: "Bac GT", definition: "Bac Général et Technologique", description: "Diplôme national de niveau 4 sanctionnant la fin des études au lycée général et technologique et ouvrant sur l'enseignement supérieur." },
    { sigle: "CFA", definition: "Centre de Formation d'Apprentis", description: "Établissement qui dispense la formation générale et technique aux apprentis sous contrat de travail avec un employeur." },
    { sigle: "PFMP", definition: "Périodes de Formation en Milieu Professionnel", description: "Stages obligatoires en entreprise pour les élèves de lycée professionnel (18 à 22 semaines sur le cycle Bac Pro, 12 à 14 semaines en CAP)." },
    { sigle: "BTS / BTSA", definition: "Brevet de Technicien Supérieur (Agricole)", description: "Diplôme d'enseignement supérieur professionnel en 2 ans après le Bac, très apprécié des recruteurs et adapté aux bacheliers pro et techno." },
    { sigle: "BUT", definition: "Bachelor Universitaire de Technologie", description: "Diplôme en 3 ans dispensé en IUT (Institut Universitaire de Technologie) conférant le grade de licence. 50% des places sont réservées aux bacheliers technologiques." },
    { sigle: "CPGE", definition: "Classes Préparatoires aux Grandes Écoles", description: "Cursus sélectif en 2 ans après le Bac (Général ou Technologique) préparant aux concours des écoles d'ingénieurs, de commerce ou ENS." },
    { sigle: "STMG", definition: "Sciences et Technologies du Management et de la Gestion", description: "Série technologique axée sur le fonctionnement des organisations, le marketing, la gestion, les ressources humaines et le droit." },
    { sigle: "STI2D", definition: "Sciences et Technologies de l'Industrie et du Développement Durable", description: "Série technologique axée sur l'innovation technologique, l'écoconception, l'énergie et les systèmes d'information." },
    { sigle: "ST2S", definition: "Sciences et Technologies de la Santé et du Social", description: "Série technologique orientée vers les métiers du paramédical, du soin, de l'action sociale et de la santé publique." },
    { sigle: "STL", definition: "Sciences et Technologies de Laboratoire", description: "Série technologique scientifique basée sur les manipulations en laboratoire (biotechnologies, physique-chimie de laboratoire)." },
    { sigle: "STD2A", definition: "Sciences et Technologies du Design et des Arts Appliqués", description: "Série technologique axée sur les métiers de la création graphique, du design d'espace, d'objet ou de mode." },
    { sigle: "STAV", definition: "Sciences et Technologies de l'Agronomie et du Vivant", description: "Série technologique préparée dans les lycées agricoles, tournée vers l'environnement, l'agriculture durable et l'alimentation." },
    { sigle: "STHR", definition: "Sciences et Technologies de l'Hôtellerie et de la Restauration", description: "Série technologique débutant dès la seconde spécifique, dédiée aux métiers de l'accueil, de la cuisine et du service." },
    { sigle: "DN MADE", definition: "Diplôme National des Métiers d'Art et du Design", description: "Diplôme post-bac en 3 ans conférant le grade de licence dans les univers créatifs et du design." },
    { sigle: "CS", definition: "Certificat de Spécialisation", description: "Anciennement Mention Complémentaire (MC), formation professionnelle courte en 1 an après un CAP ou un Bac Pro pour acquérir une compétence pointue." },
    { sigle: "SMIC", definition: "Salaire Minimum Interprofessionnel de Croissance", description: "Rémunération horaire ou mensuelle plancher en France, servant de base de calcul au salaire des apprentis." }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ORIENTATION_DATA;
}
