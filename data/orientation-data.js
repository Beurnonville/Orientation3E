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
      id: "mrc",
      nom: "Métiers de la relation client",
      sigle: "MRC",
      categorie: "tertiaire",
      badgeColor: "#0284c7",
      description: "En 2de pro MRC, vous apprenez les fondamentaux de l'accueil, de la communication commerciale, du conseil client, de l'animation d'un espace de vente et de la fidélisation.",
      bacsPros: [
        {
          titre: "Bac Pro Métiers du commerce et de la vente - Option A : Animation et gestion de l'espace commercial (AGEC)",
          focus: "Gestion de rayon, approvisionnement, mise en valeur des produits, vente et conseil en magasin."
        },
        {
          titre: "Bac Pro Métiers du commerce et de la vente - Option B : Prospection clientèle et valorisation de l'offre commerciale (PCVOC)",
          focus: "Démarchage, prospection de nouveaux clients, négociation commerciale, fidélisation B2B ou B2C."
        },
        {
          titre: "Bac Pro Métiers de l'accueil (MA)",
          focus: "Accueil physique et téléphonique, gestion des flux de visiteurs, médiation et relations publiques."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée professionnel Gabriel Voisin",
          commune: "Troyes",
          statut: "Public",
          details: "Options A et B (Commerce/Vente) + Bac Pro Métiers de l'accueil"
        },
        {
          nom: "Lycée professionnel Denis Diderot",
          commune: "Romilly-sur-Seine",
          statut: "Public",
          details: "Option A (Animation et gestion de l'espace commercial)"
        },
        {
          nom: "Lycée polyvalent Gaston Bachelard",
          commune: "Bar-sur-Aube",
          statut: "Public",
          details: "Options A et B (Commerce et vente)"
        },
        {
          nom: "Lycée professionnel Léonie Aviat",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Options A et B + Métiers de l'accueil"
        },
        {
          nom: "Lycée professionnel Saint-Joseph La Salle",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Options A et B (Commerce et vente)"
        }
      ]
    },

    {
      id: "tne",
      nom: "Métiers des transitions numérique et énergétique",
      sigle: "TNE",
      categorie: "industrie",
      badgeColor: "#059669",
      description: "En 2de pro TNE, vous découvrez les réseaux électriques intelligents, les télécommunications, la domotique, les énergies renouvelables et le génie climatique.",
      bacsPros: [
        {
          titre: "Bac Pro Métiers de l'électricité et de ses environnements connectés (MELEC)",
          focus: "Installations électriques industrielles, tertiaires et résidentielles, réseaux domotiques et énergies nouvelles."
        },
        {
          titre: "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL - ex-SN)",
          focus: "Maintenance des réseaux informatiques, IoT, cybersécurité, télécoms et cartes électroniques."
        },
        {
          titre: "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER - ex-TISEC)",
          focus: "Pose et raccordement des pompes à chaleur, chaudières biomasse, climatisation et ventilation."
        },
        {
          titre: "Bac Pro Maintenance et efficacité énergétique (MEE - ex-TMSEC)",
          focus: "Dépannage, réglage et optimisation énergétique des systèmes de chauffage et de réfrigération."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée polyvalent Les Lombards",
          commune: "Troyes",
          statut: "Public",
          details: "Pôle d'excellence : Bac Pro MELEC, CIEL, ICCER et MEE"
        },
        {
          nom: "Lycée polyvalent Gaston Bachelard",
          commune: "Bar-sur-Aube",
          statut: "Public",
          details: "Bac Pro MELEC (Électricité connectée)"
        },
        {
          nom: "Lycée professionnel Saint-Joseph La Salle",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Bac Pro MELEC et Bac Pro CIEL (Cybersécurité & réseaux)"
        }
      ]
    },

    {
      id: "mmv",
      nom: "Métiers de la maintenance des matériels et des véhicules",
      sigle: "MMV",
      categorie: "industrie",
      badgeColor: "#059669",
      description: "Apprentissage du diagnostic, de l'entretien et de la réparation mécanique, électronique et hydraulique sur véhicules légers, poids lourds ou engins.",
      bacsPros: [
        {
          titre: "Bac Pro Maintenance des véhicules - Option A : Voitures particulières",
          focus: "Diagnostic électronique, révision mécanique, freinage, trains roulants et motorisations hybrides/électriques."
        },
        {
          titre: "Bac Pro Réparation des carrosseries & Peinture automobile",
          focus: "Redressage, banc de mesure, soudure, préparation des surfaces et peinture en cabine."
        },
        {
          titre: "Bac Pro Maintenance des matériels (agricoles, TP ou espaces verts)",
          focus: "Tracteurs, machines de récolte, engins de terrassement et robotique agricole."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée professionnel Gabriel Voisin",
          commune: "Troyes",
          statut: "Public",
          details: "Lycée des métiers de l'automobile : Maintenance VP + Réparation des carrosseries"
        },
        {
          nom: "Lycée agricole de Sainte-Maure",
          commune: "Sainte-Maure (Agglo Troyes)",
          statut: "Public agricole",
          details: "Bac Pro Agroéquipement / Maintenance des matériels agricoles"
        }
      ]
    },

    {
      id: "gatl",
      nom: "Métiers de la gestion administrative, du transport et de la logistique",
      sigle: "GATL",
      categorie: "tertiaire",
      badgeColor: "#0284c7",
      description: "Gestion des flux de marchandises, organisation des expéditions, gestion administrative des dossiers d'entreprise, comptabilité et relations fournisseurs/clients.",
      bacsPros: [
        {
          titre: "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA - ex-GA)",
          focus: "Secrétariat, gestion du personnel, suivi commercial et financier avec progiciels de gestion intégrés (PGI)."
        },
        {
          titre: "Bac Pro Logistique",
          focus: "Réception, stockage, préparation de commandes, gestion d'entrepôt automatisé et expédition."
        },
        {
          titre: "Bac Pro Organisation de transport de marchandises (OTM)",
          focus: "Planification des tournées de transport routier, affrètement, suivi douanier et réglementaire."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée professionnel Léonie Aviat",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Bac Pro AGOrA (Gestion administrative des organisations)"
        },
        {
          nom: "Lycée professionnel Jeanne Mance",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Bac Pro Logistique"
        },
        {
          nom: "Lycée professionnel Denis Diderot",
          commune: "Romilly-sur-Seine",
          statut: "Public",
          details: "Secteur tertiaire / gestion administrative"
        }
      ]
    },

    {
      id: "mba",
      nom: "Métiers du bois et de l'ameublement",
      sigle: "MBA",
      categorie: "batiment",
      badgeColor: "#d97706",
      description: "Travail du bois et des matériaux composites : usinage sur commande numérique, fabrication de mobilier, pose d'agencements intérieurs et menuiserie du bâtiment.",
      bacsPros: [
        {
          titre: "Bac Pro Technicien menuisier agenceur (TMA)",
          focus: "Fabrication et pose de fenêtres, escaliers, cuisines équipées, mobilier sur mesure et agencement de magasins."
        },
        {
          titre: "Bac Pro Étude et réalisation d'agencement (ERA)",
          focus: "Conception 3D, plans de fabrication, coordination des chantiers d'agencement intérieur haut de gamme."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée polyvalent Les Lombards",
          commune: "Troyes",
          statut: "Public",
          details: "Bac Pro Technicien menuisier agenceur (TMA)"
        },
        {
          nom: "Lycée professionnel Saint-Joseph La Salle",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Bac Pro Métiers du bois et Études et réalisation d'agencement"
        },
        {
          nom: "Lycée professionnel Denis Diderot",
          commune: "Romilly-sur-Seine",
          statut: "Public",
          details: "Pôle bois / ameublement et ébénisterie"
        }
      ]
    },

    {
      id: "cdbtp-mnb",
      nom: "Métiers de la construction durable et du modélisme numérique du bâtiment",
      sigle: "CDBTP / MNB",
      categorie: "batiment",
      badgeColor: "#d97706",
      description: "Organisation de chantiers, conception de maquettes numériques BIM (Building Information Modeling), finitions, plâtrerie, peinture et génie civil.",
      bacsPros: [
        {
          titre: "Bac Pro Aménagement et finition du bâtiment (AFB)",
          focus: "Peinture, revêtements de sols et murs, cloisons sèches, isolation thermique et acoustique."
        },
        {
          titre: "Bac Pro Technicien d'études du bâtiment (TEB - Option Architecture / Économie)",
          focus: "Dessin assisté par ordinateur (DAO/BIM), plans d'architecte, métrés et devis de travaux."
        },
        {
          titre: "Bac Pro Technicien du bâtiment : organisation et réalisation du gros œuvre (ORGO)",
          focus: "Béton armé, maçonnerie de structures, gestion des équipes de coffrage et de grutage."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée polyvalent Les Lombards",
          commune: "Troyes",
          statut: "Public",
          details: "Bac Pro AFB (Aménagement & Finition) et Bac Pro TEB (Technicien d'études du bâtiment)"
        }
      ]
    },

    {
      id: "pmia-remi",
      nom: "Pilotage d'installations automatisées et réalisations industrielles",
      sigle: "PMIA / REMI",
      categorie: "industrie",
      badgeColor: "#059669",
      description: "Maintenance préventive et corrective sur lignes automatisées, robotique, fabrication d'ensembles mécaniques, chaudronnerie et procédés pharmaceutiques/cosmétiques.",
      bacsPros: [
        {
          titre: "Bac Pro Maintenance des systèmes de production connectés (MSPC - ex-MEI)",
          focus: "Dépannage mécanique, pneumatique, électrotechnique et capteurs connectés en usine 4.0."
        },
        {
          titre: "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)",
          focus: "Conduite d'équipements en salle blanche, stérilisation, contrôles qualité et conditionnement."
        },
        {
          titre: "Bac Pro Technicien en réalisation de produits mécaniques (TRPM)",
          focus: "Usinage de précision sur machines-outils à commande numérique (tournage, fraisage 5 axes)."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée polyvalent Les Lombards",
          commune: "Troyes",
          statut: "Public",
          details: "Bac Pro MSPC (Maintenance connectée) et Bac Pro PIPAC (Pharmacie/Cosmétique)"
        },
        {
          nom: "Lycée professionnel Denis Diderot",
          commune: "Romilly-sur-Seine",
          statut: "Public",
          details: "Bac Pro MSPC (Maintenance des systèmes connectés)"
        }
      ]
    },

    {
      id: "mhr",
      nom: "Métiers de l'hôtellerie-restauration",
      sigle: "MHR",
      categorie: "services-sante",
      badgeColor: "#ea580c",
      description: "Formation d'excellence aux techniques culinaires, à l'art du service en salle, à la sommellerie et à la relation clientèle gastronomique.",
      bacsPros: [
        {
          titre: "Bac Pro Cuisine",
          focus: "Techniques de cuisson, pâtisserie de restaurant, dressage créatif, gestion des stocks et règles HACCP."
        },
        {
          titre: "Bac Pro Commercialisation et services en restauration (CSR)",
          focus: "Accueil, découpe en salle, flambage, sommellerie, œnologie et gestion de salle de restaurant."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée polyvalent Édouard Herriot",
          commune: "Sainte-Savine (Agglo Troyes)",
          statut: "Public",
          details: "Lycée des métiers de l'hôtellerie-restauration : Bac Pro Cuisine et Bac Pro CSR (avec restaurant d'application)"
        }
      ]
    },

    {
      id: "mode",
      nom: "Métiers de la mode et du vêtement (Spécialité Aube)",
      sigle: "MODE",
      categorie: "services-sante",
      badgeColor: "#ea580c",
      description: "Patronnage, gradation, confection industrielle et artisanale dans le berceau historique de la maille et du textile troyen (Lacoste, Petit Bateau, etc.).",
      bacsPros: [
        {
          titre: "Bac Pro Métiers de la mode - vêtements (MMV)",
          focus: "Conception assistée par ordinateur (CAO), coupe, assemblage, contrôle qualité des prototypes."
        },
        {
          titre: "Bac Pro Métiers de la couture et de la confection",
          focus: "Montage de pièces techniques, finitions haute facture et prêt-à-porter."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée polyvalent Édouard Herriot",
          commune: "Sainte-Savine (Agglo Troyes)",
          statut: "Public",
          details: "Lycée des métiers de la mode : Bac Pro Métiers de la mode - vêtements et filières textiles réputées"
        }
      ]
    },

    {
      id: "sante-social",
      nom: "Métiers de la santé, du social et des services à la personne",
      sigle: "ASSP / SAPAT",
      categorie: "services-sante",
      badgeColor: "#ea580c",
      description: "Accompagnement des personnes fragilisées, soins d'hygiène et de confort, animation auprès des enfants, personnes âgées ou en situation de handicap.",
      bacsPros: [
        {
          titre: "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
          focus: "Soins d'hygiène, ergonomie, nutrition, animation en EHPAD, hôpitaux, crèches ou maintien à domicile."
        },
        {
          titre: "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
          focus: "Services de proximité en milieu rural, accueil petite enfance, aide médico-sociale et animation locale."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée professionnel Jeanne Mance",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Bac Pro ASSP (Accompagnement, soins et services à la personne)"
        },
        {
          nom: "Lycée agricole de Sainte-Maure",
          commune: "Sainte-Maure (Agglo Troyes)",
          statut: "Public agricole",
          details: "Bac Pro SAPAT (Services aux personnes et animation des territoires)"
        }
      ]
    },

    {
      id: "securite",
      nom: "Métiers de la sécurité et de la prévention",
      sigle: "SÉCURITÉ",
      categorie: "tertiaire",
      badgeColor: "#0284c7",
      description: "Préparation aux concours de la police, de la gendarmerie, des sapeurs-pompiers (SDIS), de l'armée et aux métiers de la sûreté privée et de la cybersécurité.",
      bacsPros: [
        {
          titre: "Bac Pro Métiers de la sécurité",
          focus: "Sécurité incendie (SSIAP 1), secours à personnes, sûreté aéroportuaire/événementielle, télésurveillance et droit pénal."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée professionnel Denis Diderot",
          commune: "Romilly-sur-Seine",
          statut: "Public",
          details: "Bac Pro Métiers de la sécurité (Filière sélective reconnue)"
        },
        {
          nom: "Lycée professionnel Jeanne Mance",
          commune: "Troyes",
          statut: "Privé sous contrat",
          details: "Bac Pro Métiers de la sécurité"
        }
      ]
    },

    {
      id: "viticulture-agricole",
      nom: "Métiers de la vigne, du vin et de l'agriculture (Spécificité Champagne auboise)",
      sigle: "VITICOLE",
      categorie: "agricole",
      badgeColor: "#16a34a",
      description: "Conduite des vignobles champenois, vinification, œnologie, machinisme agricole et gestion d'exploitation dans l'un des plus grands terroirs du monde.",
      bacsPros: [
        {
          titre: "Bac Pro Conduite et gestion de l'entreprise vitivinicole (CGEVV)",
          focus: "Travail de la vigne, vendanges, pressurage, vinification du champagne, commercialisation et dégustation."
        },
        {
          titre: "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
          focus: "Grandes cultures, élevage, gestion économique et agronomie durable."
        }
      ],
      lyceesAube: [
        {
          nom: "Lycée viticole et agricole de Bar-sur-Seine (EPLEFPA de l'Aube)",
          commune: "Bar-sur-Seine",
          statut: "Public agricole",
          details: "Pôle vitivinicole de la Côte des Bar : Bac Pro CGEVV (Vigne & Vin de Champagne)"
        },
        {
          nom: "Lycée agricole de Sainte-Maure",
          commune: "Sainte-Maure (Agglo Troyes)",
          statut: "Public agricole",
          details: "Bac Pro CGEA (Grandes cultures / Élevage) et Agroéquipement"
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
