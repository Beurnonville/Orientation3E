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
      duree: "3 ans (2<sup>de</sup>, 1<sup>re</sup>, Terminale)",
      lieu: "Lycée Général et Technologique (LGT)",
      description: "La voie générale et technologique s'adresse aux élèves désireux de poursuivre des études supérieures longues ou courtes (Universités, BTS, BUT, Classes Préparatoires, Écoles d'ingénieurs, de commerce ou spécialisées). Elle permet d'acquérir une culture générale solide et des méthodes de travail rigoureuses.",
      pourQui: [
        "Élèves à l'aise avec les apprentissages théoriques, la rédaction et l'analyse.",
        "Curieux, autonomes dans leur travail personnel quotidien (devoirs, révisions).",
        "Projet d'études supérieures post-bac d'au moins 2 à 5 ans."
      ],
      organisation: [
        "Classe de 2<sup>de</sup> générale et technologique commune (tronc commun + enseignements optionnels).",
        "En fin de 2<sup>de</sup> : choix d'orientation vers la 1<sup>re</sup> Générale (choix de 3 spécialités) OU vers une 1<sup>re</sup> Technologique (choix d'une série : STMG, STI2D, ST2S, STL, STD2A, STAV, STHR).",
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
        "Bac Professionnel (3 ans) : 2<sup>de</sup> pro organisée par grandes 'familles de métiers' ou spécialités, puis 1<sup>re</sup> et Terminale pro. Comprend 18 à 22 semaines de stage (PFMP) réparties sur les 3 ans.",
        "CAP (2 ans) : formation pratique ciblée sur un métier précis avec 12 à 14 semaines de stage en entreprise.",
        "Rémunération : gratification versée par l'État pour chaque semaine de stage en entreprise effectuée."
      ],
      debouches: [
        "Insertion directe sur le marché de l'emploi (diplôme qualifiant reconnu).",
        "Poursuite d'études après le Bac Pro : BTS / BTSA (places réservées), Certificats de Spécialisation (CS), voire BUT.",
        "Poursuite après le CAP : intégration en 1<sup>re</sup> Bac Pro (passerelle), BP (Brevet Professionnel), Mention Complémentaire."
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
        "Jeunes dès 15 ans (s'ils ont terminé la 3<sup>ème</sup>) très motivés pour entrer dans le monde du travail.",
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
      title: "2<sup>de</sup> Générale et Technologique",
      cycle: "Année de détermination (1 an)",
      public: "Élèves issus de 3<sup>ème</sup> ayant un avis favorable du conseil de classe",
      programme: "Tronc commun : Français (4h), Histoire-Géo (3h), LVA et LVB (5h30), Mathématiques (4h), Physique-Chimie (3h), SVT (1h30), EPS (2h), SES (1h30), Sciences Numériques & Technologie - SNT (1h30), EMC (18h/an). + 2 enseignements optionnels possibles.",
      rythme: "Env. 28h30 à 31h30 de cours par semaine + séquence d'observation obligatoire de 2 semaines en fin d'année (juin).",
      objectif: "Tester ses intérêts et choisir son orientation en fin d'année : 1<sup>re</sup> Générale (choix de 3 spécialités) OU 1<sup>re</sup> Technologique (choix de la série).",
      passerelles: "Possibilité de réorientation vers une 1<sup>re</sup> Pro si l'élève souhaite changer de voie."
    },
    "seconde-sthr": {
      id: "seconde-sthr",
      voieId: "voie-gt",
      title: "2<sup>de</sup> Spécifique STHR (Hôtellerie-Restauration)",
      cycle: "Classe de seconde spécifique",
      public: "Élèves passionnés par les métiers de l'hôtellerie et de la restauration",
      programme: "Dès la 2<sup>de</sup>, enseignements technologiques spécifiques de cuisine, service et gestion hôtelière en plus de l'enseignement général.",
      rythme: "Environ 32h par semaine avec ateliers pratiques et stages.",
      objectif: "Poursuite directe en 1<sup>re</sup> STHR puis Terminale STHR vers le Bac Technologique STHR.",
      passerelles: "Possibilité de bifurquer vers le Bac Pro cuisine/service si besoin."
    },
    "premiere-tle-generale": {
      id: "premiere-tle-generale",
      voieId: "voie-gt",
      title: "Cycle Terminal Général (1<sup>re</sup> & Terminale)",
      cycle: "2 ans vers le Baccalauréat Général",
      public: "Après une 2<sup>de</sup> générale et technologique",
      programme: "Tronc commun + 3 spécialités choisies en 1<sup>re</sup> (4h chacune) dont 2 conservées en Terminale (6h chacune) parmi : Maths, Physique-Chimie, SVT, SES, HGGSP, HLP, LLCER, NSI, SI, Arts, etc.",
      rythme: "Environ 28h de cours hebdomadaires avec épreuves du Baccalauréat réparties en contrôle continu (40%) et épreuves terminales (60% dont le Grand Oral et la Philo).",
      objectif: "Obtention du Bac Général ouvrant vers l'enseignement supérieur universitaire ou sélectif.",
      passerelles: "Passerelle possible vers une 1<sup>re</sup> ou Terminale technologique en cas de repositionnement."
    },
    "premiere-tle-techno": {
      id: "premiere-tle-techno",
      voieId: "voie-gt",
      title: "Cycle Terminal Technologique (1<sup>re</sup> & Terminale)",
      cycle: "2 ans vers le Baccalauréat Technologique",
      public: "Après une 2<sup>de</sup> générale et technologique (ou 2<sup>de</sup> STHR)",
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
      programme: "Évaluation sur la base du contrôle continu (40%) et des 5 épreuves terminales (60% : Français anticipé en 1<sup>re</sup>, 2 spécialités au printemps, Philosophie et Grand Oral en juin).",
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
      title: "2<sup>de</sup> Professionnelle (Lycée Pro)",
      cycle: "1<sup>re</sup> année du cycle Bac Pro en 3 ans",
      public: "Élèves de 3<sup>ème</sup> ayant un projet de formation professionnelle",
      programme: "Organisation par 'famille de métiers' ou spécialité directe. Enseignement pro en atelier/plateau technique + enseignement général adapté + accompagnement personnalisé.",
      rythme: "Environ 30h par semaine en lycée + 6 semaines de stages en entreprise (PFMP) réparties dans l'année.",
      objectif: "Acquérir les compétences communes d'un secteur avant de choisir sa spécialité précise en fin de 2<sup>de</sup> pour la 1<sup>re</sup> pro.",
      passerelles: "Passerelle possible vers une 1<sup>re</sup> technologique en fin d'année pour les élèves ayant d'excellents résultats."
    },
    "premiere-tle-pro": {
      id: "premiere-tle-pro",
      voieId: "voie-pro",
      title: "1<sup>re</sup> & Terminale Professionnelle",
      cycle: "Approfondissement du métier et préparation au Bac Pro",
      public: "Après une 2<sup>de</sup> professionnelle ou après un CAP (sur passerelle)",
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
      public: "Élèves de 3<sup>ème</sup> souhaitant apprendre rapidement un métier très concret",
      programme: "1<sup>re</sup> et 2<sup>e</sup> année de CAP : enseignement professionnel dominant (ateliers pratiques, gestes métiers, sécurité) complété par un enseignement général adapté.",
      rythme: "Environ 30h par semaine en lycée + 12 à 14 semaines de stages en entreprise (PFMP) sur les 2 ans.",
      objectif: "Devenir ouvrier ou employé qualifié dans un métier précis (Boulanger, Électricien, Coiffeur, Petite enfance, Mécanique...).",
      passerelles: "Passerelle vers la 1<sup>re</sup> Bac Pro pour continuer ses études, ou Mention Complémentaire (CS) en 1 an."
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
      programme: "Après un Bac Pro : BTS/BTSA (formations en 2 ans très prisées des recruteurs, avec quotas de places garanties) ; Certificats de Spécialisation (CS) ; FCIL. Après un CAP : CS, Brevet Professionnel (BP), ou passerelle vers 1<sup>re</sup> Bac Pro.",
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
      public: "Jeunes dès 15 ans sortant de 3<sup>ème</sup> ayant signé un contrat d'apprentissage",
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
      public: "Après la 3<sup>ème</sup> avec contrat d'apprentissage, ou après une 2<sup>de</sup> pro en lycée via bascule",
      programme: "Même référentiel d'examen que le Bac Pro scolaire, mais dispensé en alternance rythmée (ex : 2 semaines entreprise / 1 semaine CFA).",
      rythme: "Contrat de travail de 3 ans avec 5 semaines de congés payés par an. Salaire mensuel progressif de la 1<sup>re</sup> à la 3<sup>e</sup> année.",
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
      title: "Passerelle CAP ➔ 1<sup>re</sup> Bac Pro",
      description: "Un élève diplômé d'un CAP qui a obtenu de bons résultats et souhaite poursuivre ses études peut entrer directement en classe de 1<sup>re</sup> professionnelle pour préparer son Bac Pro en 2 ans au lieu de 3.",
      conditions: "Avis favorable de l'équipe pédagogique et dossier de candidature académique."
    },
    {
      id: "passerelle-seconde-pro-techno",
      from: "seconde-pro",
      to: "premiere-tle-techno",
      title: "Passerelle 2<sup>de</sup> Pro ➔ 1<sup>re</sup> Technologique",
      description: "Un élève de 2<sup>de</sup> professionnelle qui révèle un profil plus théorique et obtient de très bons résultats dans les matières générales peut demander une réorientation vers une classe de 1<sup>re</sup> technologique correspondante (ex: STI2D, STMG, ST2S).",
      conditions: "Avis du conseil de classe du lycée professionnel et accord du proviseur du lycée d'accueil."
    },
    {
      id: "passerelle-seconde-gt-pro",
      from: "seconde-gt",
      to: "premiere-tle-pro",
      title: "Passerelle 2<sup>de</sup> GT ➔ 1<sup>re</sup> Pro ou 2<sup>de</sup> Pro",
      description: "Un élève de 2<sup>de</sup> générale et technologique qui se sent mal à l'aise dans le théorique pur peut demander une passerelle vers la voie professionnelle, soit directement en 1<sup>re</sup> pro, soit en reprenant une 2<sup>de</sup> pro spécialisée.",
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
      gt: "2 semaines d'observation en fin de 2<sup>de</sup>",
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
      question: "Que faire si je ne sais pas encore quelle voie choisir ?",
      reponse: "Pas de panique, c'est tout à fait normal d'hésiter en 3<sup>ème</sup> ! L'orientation se construit pas à pas. Pour t'aider à y voir plus clair, voici 4 démarches concrètes à mener :<br><br>• <strong>Fais le point sur tes envies :</strong> Préfères-tu les cours théoriques ou les apprentissages concrets et pratiques en atelier ? As-tu envie d'études longues (Bac+3 à Bac+5) ou d'apprendre rapidement un métier ? N'hésite pas à faire notre test d'affinités en haut de page pour identifier les voies qui te correspondent.<br><br>• <strong>Découvre les formations sur le terrain :</strong> Participe aux Journées Portes Ouvertes (JPO) des lycées généraux, technologiques, professionnels et des CFA de ton secteur. Tu peux aussi demander à ton collège de réaliser un mini-stage d'immersion d'une journée en lycée pro ou agricole.<br><br>• <strong>Fais-toi accompagner :</strong> Prends rendez-vous avec le ou la Psychologue de l'Éducation nationale (Psy-EN) au collège ou directement au CIO (Centre d'Information et d'Orientation de Troyes). Échange également avec ton professeur principal, qui connaît bien tes compétences et ton rythme.<br><br>• <strong>Garde des portes ouvertes si tu hésites :</strong> La 2<sup>de</sup> générale et technologique t'offre un an de réflexion supplémentaire tout en consolidant ta culture générale. De même, les familles de métiers en 2<sup>de</sup> pro te permettent de tester un grand domaine d'activité pendant un an avant de choisir ta spécialité en 1<sup>re</sup> pro."
    },
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
      reponse: "Oui ! En 2<sup>de</sup> générale et technologique, vous suivez un tronc commun, mais dès la fin de 2<sup>de</sup>, c'est vous qui composez votre cursus en choisissant 3 enseignements de spécialité en 1<sup>re</sup> (maths, SVT, physique, SES, humanités, arts...) puis vous en gardez 2 en Terminale."
    },
    {
      question: "Peut-on changer de voie si on s'est trompé après la 3<sup>ème</sup> ?",
      reponse: "Tout à fait. Des 'passerelles' officielles existent : un élève de 2<sup>de</sup> générale peut se réorienter vers la voie pro, un élève de 2<sup>de</sup> pro peut rejoindre une 1<sup>re</sup> technologique s'il a d'excellents résultats, et un titulaire de CAP peut intégrer une 1<sup>re</sup> Bac Pro pour obtenir son Bac."
    },
    {
      question: "Qui paye la formation en apprentissage ?",
      reponse: "Pour l'apprenti et sa famille, la formation en CFA est 100% gratuite ! Elle est financée par les opérateurs de compétences (OPCO) des entreprises et l'employeur. De plus, l'apprenti perçoit un salaire mensuel."
    },
    {
      question: "Qu'est-ce qu'une 'famille de métiers' en 2<sup>de</sup> professionnelle ?",
      reponse: "En 2<sup>de</sup> pro, beaucoup de filières regroupent plusieurs spécialités proches (ex: métiers de la relation client, métiers de la construction durable). Cela permet à l'élève d'explorer le secteur pendant un an avant de choisir sa spécialité définitive pour la 1<sup>re</sup> et Terminale pro."
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
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-relation-client",
    "description": "En 2de pro MRC, vous apprenez les fondamentaux de l'accueil, de la communication commerciale, du conseil client, de l'animation d'un espace de vente et de la prospection commerciale.",
    "bacsPros": [
      {
        "titre": "Bac Pro Métiers du commerce et de la vente - Option A : Animation et gestion de l'espace commercial (AGEC)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial",
        "focus": "Gestion de rayon, approvisionnement, mise en valeur des produits, conseil et encaissement en point de vente."
      },
      {
        "titre": "Bac Pro Métiers du commerce et de la vente - Option B : Prospection clientèle et valorisation de l'offre commerciale (PCVOC)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale",
        "focus": "Prospection de nouveaux clients, négociation commerciale, vente conseil itinérante ou à distance, fidélisation."
      },
      {
        "titre": "Bac Pro Métiers de l'accueil",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-accueil",
        "focus": "Accueil physique et téléphonique, gestion des flux de visiteurs, information, médiation et relations publiques."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Marie de Champagne",
        "siteWeb": "https://lyc-marie-de-champagne.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
          },
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
          }
        ],
        "capacite": 36,
        "demandes": {
          "2025": 124,
          "2024": 135,
          "2023": 144
        },
        "details": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial) • Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)"
      },
      {
        "nom": "Lycée professionnel Gabriel Voisin",
        "siteWeb": "https://lyc-voisin.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
          },
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
          },
          {
            "titre": "Bac Pro Métiers de l'accueil",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-accueil"
          }
        ],
        "capacite": 72,
        "demandes": {
          "2025": 31,
          "2024": 39,
          "2023": 22
        },
        "details": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial) • Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale) • Bac Pro Métiers de l'accueil"
      },
      {
        "nom": "Lycée professionnel Denis Diderot",
        "siteWeb": "https://lpdiderot10.fr/",
        "commune": "Romilly-sur-Seine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers du commerce et de la vente",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
          }
        ],
        "capacite": 36,
        "demandes": {
          "2025": 37,
          "2024": 46,
          "2023": 59
        },
        "details": "Bac Pro Métiers du commerce et de la vente"
      },
      {
        "nom": "Lycée polyvalent Gaston Bachelard",
        "siteWeb": "https://cite-bachelard.monbureaunumerique.fr/",
        "commune": "Bar-sur-Aube",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
          }
        ],
        "capacite": 18,
        "demandes": {
          "2025": 33,
          "2024": 28,
          "2023": 17
        },
        "details": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)"
      },
      {
        "nom": "Lycée professionnel Léonie Aviat",
        "siteWeb": "https://www.lycee-aviat.com/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
          },
          {
            "titre": "Bac Pro Métiers de l'accueil",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-accueil"
          }
        ],
        "capacite": 54,
        "demandes": {
          "2025": 11,
          "2024": 27,
          "2023": 21
        },
        "details": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial) • Bac Pro Métiers de l'accueil"
      },
      {
        "nom": "Lycée professionnel La Salle",
        "siteWeb": "https://lasalle-troyes.fr/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
          }
        ],
        "capacite": 24,
        "demandes": {
          "2025": 20,
          "2024": 27,
          "2023": 25
        },
        "details": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)"
      }
    ]
  },
  {
    "id": "gatl",
    "nom": "Métiers de la gestion administrative, du transport et de la logistique",
    "sigle": "GATL",
    "categorie": "tertiaire",
    "badgeColor": "#0284c7",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-gestion-administrative-du-transport-et-de-la-logistique",
    "description": "En 2de pro GATL, vous découvrez la gestion des flux de documents, la relation avec les fournisseurs et clients, le suivi des stocks et l'organisation logistique et administrative.",
    "bacsPros": [
      {
        "titre": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites",
        "focus": "Gestion administrative des relations externes, administration du personnel, suivi financier et comptable."
      },
      {
        "titre": "Bac Pro Métiers de la logistique",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-logistique",
        "focus": "Réception, stockage, préparation des commandes, expédition des marchandises, utilisation de chariots et gestion informatisée des stocks."
      },
      {
        "titre": "Bac Pro Organisation de transport de marchandises",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-organisation-de-transport-de-marchandises",
        "focus": "Planification des tournées, affrètement, suivi des opérations de transport multimodal et dédouanement."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Marie de Champagne",
        "siteWeb": "https://lyc-marie-de-champagne.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
          }
        ],
        "capacite": 56,
        "demandes": {
          "2025": 40,
          "2024": 65,
          "2023": 44
        },
        "details": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
      },
      {
        "nom": "Lycée professionnel Denis Diderot",
        "siteWeb": "https://lpdiderot10.fr/",
        "commune": "Romilly-sur-Seine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
          }
        ],
        "capacite": 36,
        "demandes": {
          "2025": 7,
          "2024": 15,
          "2023": 17
        },
        "details": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
      },
      {
        "nom": "Lycée professionnel Jeanne Mance",
        "siteWeb": "https://lycee-jeanne-mance.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers de la logistique",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-logistique"
          }
        ],
        "capacite": 18,
        "demandes": {
          "2025": 8,
          "2024": 12,
          "2023": 14
        },
        "details": "Bac Pro Métiers de la logistique"
      },
      {
        "nom": "Lycée professionnel La Salle",
        "siteWeb": "https://lasalle-troyes.fr/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
          }
        ],
        "capacite": 18,
        "demandes": {
          "2025": 7,
          "2024": 6,
          "2023": 8
        },
        "details": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
      },
      {
        "nom": "Lycée professionnel Léonie Aviat",
        "siteWeb": "https://www.lycee-aviat.com/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
          }
        ],
        "capacite": 18,
        "demandes": {
          "2025": 3,
          "2024": 12,
          "2023": 8
        },
        "details": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
      }
    ]
  },
  {
    "id": "tne",
    "nom": "Métiers des transitions numérique et énergétique",
    "sigle": "MTNE",
    "categorie": "industrie",
    "badgeColor": "#059669",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-des-transitions-numerique-et-energetique",
    "description": "En 2de pro MTNE, vous manipulez les circuits électriques, configurez des réseaux informatiques, raccordez des équipements connectés et installez des systèmes d'énergie renouvelable.",
    "bacsPros": [
      {
        "titre": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique",
        "focus": "Sécurisation des réseaux, maintenance informatique, déploiement d'objets connectés et électronique embarquée."
      },
      {
        "titre": "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-installateur-en-chauffage-climatisation-et-energies-renouvelables",
        "focus": "Pose de pompes à chaleur, chaudières biomasse, panneaux solaires thermiques et systèmes de régulation thermique."
      },
      {
        "titre": "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes",
        "focus": "Installations électriques industrielles, domotique résidentielle, colonnes de recharge électrique et photovoltaïque."
      },
      {
        "titre": "Bac Pro Métiers du froid et des énergies renouvelables (MFER)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-froid-et-des-energies-renouvelables2",
        "focus": "Mise en service et maintenance des chambres froides industrielles, climatiseurs réversibles et fluides frigorigènes."
      },
      {
        "titre": "Bac Pro Maintenance et efficacité énergétique (MEE)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-et-efficacite-energetique2",
        "focus": "Dépannage, optimisation de consommation et conduite des installations de génie climatique."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Les Lombards",
        "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-installateur-en-chauffage-climatisation-et-energies-renouvelables"
          },
          {
            "titre": "Bac Pro Maintenance et efficacité énergétique (MEE)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-et-efficacite-energetique2"
          },
          {
            "titre": "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
          },
          {
            "titre": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique"
          }
        ],
        "capacite": 84,
        "demandes": {
          "2025": 83,
          "2024": 92,
          "2023": 110
        },
        "details": "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER) • Bac Pro Maintenance et efficacité énergétique (MEE) • Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC) • Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)"
      },
      {
        "nom": "Lycée polyvalent Gaston Bachelard",
        "siteWeb": "https://cite-bachelard.monbureaunumerique.fr/",
        "commune": "Bar-sur-Aube",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 13,
          "2024": 15,
          "2023": 18
        },
        "details": "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)"
      },
      {
        "nom": "Lycée professionnel La Salle",
        "siteWeb": "https://lasalle-troyes.fr/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique"
          },
          {
            "titre": "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
          },
          {
            "titre": "Bac Pro Métiers du froid et des énergies renouvelables (MFER)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-froid-et-des-energies-renouvelables2"
          }
        ],
        "capacite": 60,
        "demandes": {
          "2025": 28,
          "2024": 29,
          "2023": 35
        },
        "details": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL) • Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC) • Bac Pro Métiers du froid et des énergies renouvelables (MFER)"
      }
    ]
  },
  {
    "id": "mmv",
    "nom": "Métiers de la maintenance des matériels et des véhicules",
    "sigle": "MMV",
    "categorie": "industrie",
    "badgeColor": "#059669",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-maintenance-des-materiels-et-des-vehicules",
    "description": "En 2de pro MMV, vous développez un socle de compétences en diagnostic mécanique, hydraulique, pneumatique et électronique sur des moteurs et engins modernes.",
    "bacsPros": [
      {
        "titre": "Bac Pro Maintenance des véhicules - Option A : Voitures particulières",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-legers",
        "focus": "Diagnostic, révision et dépannage mécanique/électronique des véhicules légers et hybrides/électriques."
      },
      {
        "titre": "Bac Pro Maintenance des véhicules - Option B : Véhicules de transport routier",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-de-transport-routier",
        "focus": "Maintenance des poids lourds, autocars et semi-remorques : systèmes de freinage pneumatique et dépollution."
      },
      {
        "titre": "Bac Pro Maintenance des véhicules - Option C : Motocycles",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-motocycles",
        "focus": "Entretien, diagnostic et préparation des motos, scooters, quads et engins motorisés à 2 ou 3 roues."
      },
      {
        "titre": "Bac Pro Maintenance des matériels - Option A : Matériels agricoles",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-materiels-option-a-materiels-agricoles",
        "focus": "Intervention de pointe sur tracteurs, moissonneuses-batteuses et machines agricoles de haute technologie."
      },
      {
        "titre": "Bac Pro Maintenance des matériels - Option B : Matériels de construction et de manutention",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-materiels-option-b-materiels-de-construction-et-de-manutention",
        "focus": "Entretien et réparation d'engins de chantier TP (pelleteuses, grues, chargeuses) et chariots élévateurs."
      },
      {
        "titre": "Bac Pro Maintenance des matériels - Option C : Matériels d'espaces verts",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-materiels-option-c-materiels-d-espaces-verts",
        "focus": "Maintenance du matériel de parcs et jardins : tondeuses professionnelles, tronçonneuses, microtracteurs."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée professionnel du Val Moré",
        "siteWeb": "https://lyc-val-more.monbureaunumerique.fr/",
        "commune": "Bar-sur-Seine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Maintenance des matériels (Options Agricoles, Travaux publics, Espaces verts)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-materiels-option-a-materiels-agricoles"
          },
          {
            "titre": "Bac Pro Maintenance des véhicules (Options Véhicules de transport routier & Motocycles)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-de-transport-routier"
          }
        ],
        "capacite": 72,
        "demandes": {
          "2025": 57,
          "2024": 74,
          "2023": 69
        },
        "details": "Bac Pro Maintenance des matériels (Options Agricoles, Travaux publics, Espaces verts) • Bac Pro Maintenance des véhicules (Options Véhicules de transport routier & Motocycles)"
      },
      {
        "nom": "Lycée professionnel Gabriel Voisin",
        "siteWeb": "https://lyc-voisin.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Maintenance des véhicules (Option A : voitures particulières)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-legers"
          }
        ],
        "capacite": 30,
        "demandes": {
          "2025": 33,
          "2024": 37,
          "2023": 38
        },
        "details": "Bac Pro Maintenance des véhicules (Option A : voitures particulières)"
      }
    ]
  },
  {
    "id": "ctrm",
    "nom": "Conducteur transport routier marchandises (CTRM)",
    "sigle": "CTRM",
    "categorie": "industrie",
    "badgeColor": "#059669",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conducteur-routier-de-marchandises",
    "description": "Spécialité en accès direct dès la 2de professionnelle : préparation aux permis C et EC, maîtrise de la conduite éco-responsable, de la sécurité routière et de la logistique de livraison.",
    "bacsPros": [
      {
        "titre": "Bac Pro Conducteur routier de marchandises",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conducteur-routier-de-marchandises",
        "focus": "Conduite de poids lourds et véhicules articulés, gestion administrative du transport et arrimage des marchandises."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée professionnel du Val Moré",
        "siteWeb": "https://lyc-val-more.monbureaunumerique.fr/",
        "commune": "Bar-sur-Seine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Conducteur transport routier marchandises (CTRM)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conducteur-routier-de-marchandises"
          }
        ],
        "capacite": 24,
        "demandes": {
          "2025": 54,
          "2024": 42,
          "2023": 48
        },
        "details": "Bac Pro Conducteur transport routier marchandises (CTRM)"
      }
    ]
  },
  {
    "id": "pmia",
    "nom": "Métiers du pilotage et de la maintenance d'installations automatisées",
    "sigle": "PMIA",
    "categorie": "industrie",
    "badgeColor": "#059669",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-du-pilotage-et-de-la-maintenance-d-installations-automatisees",
    "description": "En 2de pro PMIA, vous apprenez la surveillance des lignes robotisées, la programmation d'automates, la maintenance corrective et préventive et le contrôle qualité.",
    "bacsPros": [
      {
        "titre": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes",
        "focus": "Dépannage mécanique, électrique et pneumatique des lignes de production industrielle connectées."
      },
      {
        "titre": "Bac Pro Pilote de ligne de production",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-pilote-de-ligne-de-production",
        "focus": "Conduite et réglage d'installations automatisées industrielles (agroalimentaire, cosmétique, métallurgie)."
      },
      {
        "titre": "Bac Pro Procédés de la chimie, de l’eau et des papiers-cartons",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-procedes-de-la-chimie-de-l-eau-et-des-papiers-cartons",
        "focus": "Contrôle des réacteurs chimiques, traitement des eaux potables et usées, fabrication papetière."
      },
      {
        "titre": "Bac Pro Technicien de scierie",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-de-scierie",
        "focus": "Pilotage des lignes automatisées de sciage du bois, affûtage des outils de coupe et cubage des grumes."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Les Lombards",
        "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 10,
          "2024": 15,
          "2023": 21
        },
        "details": "Bac Pro Maintenance des systèmes de production connectés (MSPC)"
      },
      {
        "nom": "Lycée professionnel Denis Diderot",
        "siteWeb": "https://lpdiderot10.fr/",
        "commune": "Romilly-sur-Seine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 15,
          "2024": 16,
          "2023": 17
        },
        "details": "Bac Pro Maintenance des systèmes de production connectés (MSPC)"
      }
    ]
  },
  {
    "id": "alimentation-bioind",
    "nom": "Alimentation, bio-industries et laboratoire (ABIL)",
    "sigle": "ABIL",
    "categorie": "industrie",
    "badgeColor": "#059669",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-alimentation-bio-industries-et-laboratoire",
    "description": "En 2de pro ABIL (filière agricole & industrielle), vous apprenez les procédés de transformation biologique, les normes d'hygiène et les protocoles de bio-analyse en salle propre.",
    "bacsPros": [
      {
        "titre": "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-production-en-industries-pharmaceutiques-alimentaires-et-cosmetiques",
        "focus": "Fabrication de médicaments, vaccins, soins cosmétiques et produits alimentaires selon les BPF (Bonnes Pratiques de Fabrication)."
      },
      {
        "titre": "Bac Pro Laboratoire contrôle qualité",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-laboratoire-controle-qualite",
        "focus": "Analyses physico-chimiques et microbiologiques pour certifier la conformité des produits avant commercialisation."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Les Lombards",
        "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-production-en-industries-pharmaceutiques-alimentaires-et-cosmetiques"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 12,
          "2024": 15,
          "2023": 17
        },
        "details": "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)"
      }
    ]
  },
  {
    "id": "cdbtp",
    "nom": "Métiers de la construction durable, du bâtiment et des travaux publics",
    "sigle": "CDBTP",
    "categorie": "batiment",
    "badgeColor": "#d97706",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-construction-durable-du-batiment-et-des-travaux-publics",
    "description": "En 2de pro CDBTP, vous découvrez l'implantation de chantier, les techniques de maçonnerie, de plâtrerie-peinture, d'ossature et de gros œuvre du bâtiment.",
    "bacsPros": [
      {
        "titre": "Bac Pro Aménagement et finition du bâtiment (AFB)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-amenagement-et-finition-du-batiment",
        "focus": "Peinture, plâtrerie, pose de faux plafonds, revêtements de sols souples et parquets, amélioration thermique des parois intérieures."
      },
      {
        "titre": "Bac Pro Interventions sur le patrimoine bâti (options Maçonnerie, Charpente, Couverture)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-interventions-sur-le-patrimoine-bati-option-a-maconnerie",
        "focus": "Restauration, consolidation et réhabilitation des édifices anciens et monuments historiques."
      },
      {
        "titre": "Bac Pro Menuiserie aluminium-verre",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-menuiserie-aluminium-verre",
        "focus": "Fabrication et pose de façades vitrées, verrières, baies coulissantes et vérandas en aluminium."
      },
      {
        "titre": "Bac Pro Ouvrages du bâtiment : métallerie",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-ouvrages-du-batiment-metallerie",
        "focus": "Fabrication et pose de garde-corps, escaliers métalliques, serrures, blindages et charpentes légères."
      },
      {
        "titre": "Bac Pro Travaux publics",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-travaux-publics",
        "focus": "Construction de routes, pose de canalisations, terrassement, réseaux d'eau et génie civil."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Les Lombards",
        "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Aménagement et finition du bâtiment (AFB)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-amenagement-et-finition-du-batiment"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 23,
          "2024": 15,
          "2023": 23
        },
        "details": "Bac Pro Aménagement et finition du bâtiment (AFB)"
      }
    ]
  },
  {
    "id": "mnb",
    "nom": "Métiers des études et de la modélisation numérique du bâtiment",
    "sigle": "MNB",
    "categorie": "batiment",
    "badgeColor": "#d97706",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-des-etudes-et-de-la-modelisation-numerique-du-batiment",
    "description": "En 2de pro MNB, vous maîtrisez les logiciels de CAO/DAO 3D (BIM), le relevé topographique de terrain, la lecture de plans d'architecte et le chiffrage de chantiers.",
    "bacsPros": [
      {
        "titre": "Bac Pro Technicien d'études du bâtiment - Option A : Études et économie",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-a-etudes-et-economie",
        "focus": "Métrés, estimation des coûts de construction, rédaction des cahiers des charges et suivi financier de chantier."
      },
      {
        "titre": "Bac Pro Technicien d'études du bâtiment - Option B : Assistant en architecture",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-b-assistant-en-architecture",
        "focus": "Dessin de plans d'architecte, modélisation BIM 3D, maquettes numériques et montage des dossiers de permis de construire."
      },
      {
        "titre": "Bac Pro Géomètre",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-geometre",
        "focus": "Mesures géodésiques sur le terrain avec GPS/stations totales, délimitation parcellaire et topographie."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Les Lombards",
        "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Technicien d'études du bâtiment (Option A : études et économie)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-a-etudes-et-economie"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 10,
          "2024": 15,
          "2023": 21
        },
        "details": "Bac Pro Technicien d'études du bâtiment (Option A : études et économie)"
      },
      {
        "nom": "Lycée professionnel La Salle",
        "siteWeb": "https://lasalle-troyes.fr/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Technicien d'études du bâtiment (Option B : assistant en architecture)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-b-assistant-en-architecture"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 12,
          "2024": 15,
          "2023": 17
        },
        "details": "Bac Pro Technicien d'études du bâtiment (Option B : assistant en architecture)"
      }
    ]
  },
  {
    "id": "agencement-bois",
    "nom": "Métiers de l'agencement, de la menuiserie et de l'ameublement",
    "sigle": "AGENCEMENT / BOIS",
    "categorie": "batiment",
    "badgeColor": "#d97706",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-l-agencement-de-la-menuiserie-et-de-l-ameublement",
    "description": "En 2de pro Agencement-Bois, vous apprenez la découpe du bois, le travail des composites, l'usinage à commande numérique, le ferrage et l'assemblage de mobilier sur mesure.",
    "bacsPros": [
      {
        "titre": "Bac Pro Technicien menuisier agenceur (TMA)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-menuisier-agenceur",
        "focus": "Fabrication en atelier et pose sur chantier d'escaliers, cuisines, parquets, portes, placards et fenêtres sur mesure."
      },
      {
        "titre": "Bac Pro Étude et réalisation d’agencement (ERA)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-etude-et-realisation-d-agencement",
        "focus": "Agencement de commerces, d'hôtels, de bureaux ou de résidences privées, de la conception 3D à la coordination de pose."
      },
      {
        "titre": "Bac Pro Technicien de fabrication bois et matériaux associés",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-de-fabrication-bois-et-materiaux-associes",
        "focus": "Production industrielle en série d'éléments en bois, programmation de centres d'usinage à commande numérique."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Les Lombards",
        "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Technicien menuisier agenceur (TMA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-menuisier-agenceur"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 19,
          "2024": 15,
          "2023": 21
        },
        "details": "Bac Pro Technicien menuisier agenceur (TMA)"
      },
      {
        "nom": "Lycée professionnel La Salle",
        "siteWeb": "https://lasalle-troyes.fr/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Étude et réalisation d'agencement (ERA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-etude-et-realisation-d-agencement"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 14,
          "2024": 15,
          "2023": 17
        },
        "details": "Bac Pro Étude et réalisation d'agencement (ERA)"
      }
    ]
  },
  {
    "id": "mhr",
    "nom": "Métiers de l'hôtellerie-restauration",
    "sigle": "MHR",
    "categorie": "services-sante",
    "badgeColor": "#7c3aed",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-l-hotellerie-restauration",
    "description": "En 2de pro MHR, vous découvrez à la fois les techniques culinaires et les arts du service en salle avant de vous spécialiser en 1re pro soit en cuisine, soit en service.",
    "bacsPros": [
      {
        "titre": "Bac Pro Cuisine",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cuisine",
        "focus": "Techniques culinaires de pointe, gestion des approvisionnements, dressage gastronomique et respect rigoureux de la chaîne du froid."
      },
      {
        "titre": "Bac Pro Commercialisation et services en restauration (CSR)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-commercialisation-et-services-en-restauration",
        "focus": "Accueil de la clientèle, arts de la table, sommellerie, découpe et flambage devant le client, gestion du restaurant."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Édouard Herriot",
        "siteWeb": "https://lycee-edouard-herriot.com/",
        "commune": "Sainte-Savine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Cuisine",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cuisine"
          },
          {
            "titre": "Bac Pro Commercialisation et services en restauration (CSR)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-commercialisation-et-services-en-restauration"
          }
        ],
        "capacite": 48,
        "demandes": {
          "2025": 48,
          "2024": 65,
          "2023": 62
        },
        "details": "Bac Pro Cuisine • Bac Pro Commercialisation et services en restauration (CSR)"
      }
    ]
  },
  {
    "id": "mode",
    "nom": "Métiers de la couture et de la confection",
    "sigle": "MODE / COUTURE",
    "categorie": "services-sante",
    "badgeColor": "#7c3aed",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-couture-et-de-la-confection",
    "description": "Spécialité en accès direct dès la 2de pro, ancrée dans la tradition bonnetière et textile auboise : patronage, coupe, assemblage et confection de pièces haut de gamme.",
    "bacsPros": [
      {
        "titre": "Bac Pro Métiers de la couture et de la confection",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-couture-et-de-la-confection",
        "focus": "Industrialisation des modèles, réglage des piqueuses et automates de couture, contrôle qualité des toiles et vêtements finis."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Édouard Herriot",
        "siteWeb": "https://lycee-edouard-herriot.com/",
        "commune": "Sainte-Savine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers de la couture et de la confection",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-couture-et-de-la-confection"
          }
        ],
        "capacite": 15,
        "demandes": {
          "2025": 14,
          "2024": 15,
          "2023": 18
        },
        "details": "Bac Pro Métiers de la couture et de la confection"
      }
    ]
  },
  {
    "id": "sante-social",
    "nom": "Accompagnement, soins et services à la personne & Animation-enfance",
    "sigle": "ASSP / AEPA",
    "categorie": "services-sante",
    "badgeColor": "#7c3aed",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne",
    "description": "Spécialités en accès direct dès la 2de pro, dédiées au secteur sanitaire, médicosocial et socio-éducatif : soins d'hygiène, soutien à l'autonomie et projets d'animation.",
    "bacsPros": [
      {
        "titre": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne",
        "focus": "Soins d'hygiène et de confort, aide aux actes de la vie quotidienne, accueil en structures hospitalières, EHPAD ou à domicile."
      },
      {
        "titre": "Bac Pro Animation-Enfance et personnes âgées (AEPA)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-animation-enfance-et-personnes-agees",
        "focus": "Conception et animation d'activités socioculturelles, éducatives et de maintien de l'autonomie en ALSH ou résidences seniors."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée polyvalent Marie de Champagne",
        "siteWeb": "https://lyc-marie-de-champagne.monbureaunumerique.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne"
          },
          {
            "titre": "Bac Pro Animation-Enfance et personnes âgées (AEPA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-animation-enfance-et-personnes-agees"
          }
        ],
        "capacite": 68,
        "demandes": {
          "2025": 117,
          "2024": 122,
          "2023": 130
        },
        "details": "Bac Pro Accompagnement, soins et services à la personne (ASSP) • Bac Pro Animation-Enfance et personnes âgées (AEPA)"
      },
      {
        "nom": "Lycée professionnel Jeanne Mance",
        "siteWeb": "https://lycee-jeanne-mance.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne"
          }
        ],
        "capacite": 30,
        "demandes": {
          "2025": 25,
          "2024": 30,
          "2023": 35
        },
        "details": "Bac Pro Accompagnement, soins et services à la personne (ASSP)"
      }
    ]
  },
  {
    "id": "sapat",
    "nom": "Services aux personnes et animation dans les territoires (SAPAT)",
    "sigle": "SAPAT",
    "categorie": "services-sante",
    "badgeColor": "#7c3aed",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires",
    "description": "Spécialité agricole en accès direct dès la 2de pro : accompagnement des publics fragiles en milieu rural, valorisation touristique et développement territorial.",
    "bacsPros": [
      {
        "titre": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires",
        "focus": "Aide à la personne, animation locale, accueil touristique, organisation d'événements et médiation en milieu rural."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée agricole Charles Baltet",
        "siteWeb": "https://campusterresdelaube.fr/presentation-du-campus/lycee-charles-baltet",
        "commune": "Saint-Pouange",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires"
          }
        ],
        "capacite": 32,
        "demandes": {
          "2025": 28,
          "2024": 35,
          "2023": 30
        },
        "details": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)"
      },
      {
        "nom": "Lycée privé des Cordeliers",
        "siteWeb": "https://lescordeliers.fr/",
        "commune": "Arcis-sur-Aube",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires"
          }
        ],
        "capacite": 24,
        "demandes": {
          "2025": 16,
          "2024": 20,
          "2023": 18
        },
        "details": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)"
      }
    ]
  },
  {
    "id": "securite",
    "nom": "Métiers de la sécurité",
    "sigle": "SÉCURITÉ",
    "categorie": "tertiaire",
    "badgeColor": "#0284c7",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite",
    "description": "Spécialité sélective en accès direct dès la 2de pro : sécurité incendie (SSIAP), secours à personnes, sûreté aéroportuaire et surveillance des biens et personnes.",
    "bacsPros": [
      {
        "titre": "Bac Pro Métiers de la sécurité",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite",
        "focus": "Prévention et lutte contre les incendies, sécurité publique (police/gendarmerie), télésurveillance et secours d'urgence."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée professionnel Denis Diderot",
        "siteWeb": "https://lpdiderot10.fr/",
        "commune": "Romilly-sur-Seine",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers de la sécurité",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite"
          }
        ],
        "capacite": 18,
        "demandes": {
          "2025": 41,
          "2024": 45,
          "2023": 40
        },
        "details": "Bac Pro Métiers de la sécurité"
      },
      {
        "nom": "Lycée professionnel Jeanne Mance",
        "siteWeb": "https://lycee-jeanne-mance.fr/",
        "commune": "Troyes",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Métiers de la sécurité",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite"
          }
        ],
        "capacite": 30,
        "demandes": {
          "2025": 35,
          "2024": 40,
          "2023": 38
        },
        "details": "Bac Pro Métiers de la sécurité"
      }
    ]
  },
  {
    "id": "productions-agricoles",
    "nom": "Productions",
    "sigle": "PRODUCTIONS",
    "categorie": "agricole",
    "badgeColor": "#15803d",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-productions",
    "description": "En 2de pro Productions (enseignement agricole), vous découvrez les cycles du vivant, l'agronomie, l'élevage et l'utilisation du machinisme agricole.",
    "bacsPros": [
      {
        "titre": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-agricole",
        "focus": "Gestion d'exploitations céréalières, de polyculture ou d'élevage : agronomie, zootechnie, gestion comptable."
      },
      {
        "titre": "Bac Pro Conduite et gestion de l'entreprise hippique (CGEH)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-hippique",
        "focus": "Travail et soins aux chevaux, gestion d'un centre équestre, d'une écurie de course ou d'un élevage équin."
      },
      {
        "titre": "Bac Pro Conduite et gestion de l'entreprise vitivinicole (CGEV)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-vitivinicole",
        "focus": "Conduite du vignoble champenois, vinification, élevage des vins, œnologie et commercialisation des cuvées."
      },
      {
        "titre": "Bac Pro Agroéquipement",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-agroequipement",
        "focus": "Conduite, réglage, entretien et gestion de parcs d'engins agricoles et viticoles de pointe."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée agricole Charles Baltet",
        "siteWeb": "https://campusterresdelaube.fr/presentation-du-campus/lycee-charles-baltet",
        "commune": "Saint-Pouange",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-agricole"
          }
        ],
        "capacite": 50,
        "demandes": {
          "2025": 26,
          "2024": 30,
          "2023": 28
        },
        "details": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)"
      },
      {
        "nom": "Lycée agricole privé Sainte-Maure",
        "siteWeb": "https://www.lyceesaintemaure.fr/",
        "commune": "Sainte-Maure",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-agricole"
          },
          {
            "titre": "Bac Pro Conduite et gestion de l'entreprise hippique (CGEH)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-hippique"
          }
        ],
        "capacite": 50,
        "demandes": {
          "2025": 20,
          "2024": 25,
          "2023": 22
        },
        "details": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA) • Bac Pro Conduite et gestion de l'entreprise hippique (CGEH)"
      }
    ]
  },
  {
    "id": "nature-foret",
    "nom": "nature-jardin-paysage-forêt (NJPF)",
    "sigle": "NJPF",
    "categorie": "agricole",
    "badgeColor": "#15803d",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-nature-jardin-paysage-foret",
    "description": "En 2de pro NJPF, vous découvrez les compétences communes aux métiers de la filière verte : travaux forestiers, génie écologique, préservation de la biodiversité et aménagements paysagers.",
    "bacsPros": [
      {
        "titre": "Bac Pro Aménagements paysagers",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-amenagements-paysagers",
        "focus": "Création, aménagement et entretien d'espaces verts, parcs, jardins paysagers et terrains de sport."
      },
      {
        "titre": "Bac Pro Forêt",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-foret",
        "focus": "Sylviculture, abattage, débardage mécanisé, régénération des massifs forestiers et vente de bois d'œuvre."
      },
      {
        "titre": "Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-gestion-des-milieux-naturels-et-de-la-faune",
        "focus": "Génie écologique, inventaires naturalistes, restauration des zones humides, aménagement de corridors écologiques."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée forestier de Crogny",
        "siteWeb": "https://campusterresdelaube.fr/presentation-du-campus/lycee-de-crogny",
        "commune": "Chaource (Les Loges-Margueron / Crogny)",
        "statut": "Public",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Forêt",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-foret"
          }
        ],
        "capacite": 32,
        "demandes": {
          "2025": 22,
          "2024": 30,
          "2023": 25
        },
        "details": "Bac Pro Forêt"
      },
      {
        "nom": "Lycée agricole privé Sainte-Maure",
        "siteWeb": "https://www.lyceesaintemaure.fr/",
        "commune": "Sainte-Maure",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-gestion-des-milieux-naturels-et-de-la-faune"
          }
        ],
        "capacite": 28,
        "demandes": {
          "2025": 16,
          "2024": 20,
          "2023": 17
        },
        "details": "Bac Pro Gestion des milieux naturels et de la faune (GMNF)"
      }
    ]
  },
  {
    "id": "conseil-vente-alimentation",
    "nom": "Conseil-vente",
    "sigle": "CONSEIL-VENTE",
    "categorie": "agricole",
    "badgeColor": "#15803d",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-conseil-vente",
    "description": "En 2de pro Conseil-vente (enseignement agricole), vous découvrez la relation client spécialisée, le merchandising de terroir et la valorisation de produits qualitatifs.",
    "bacsPros": [
      {
        "titre": "Bac Pro Technicien conseil-vente en alimentation (produits alimentaires et boissons)",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-conseil-vente-en-alimentation-produits-alimentaires-et-boissons",
        "focus": "Conseil gustatif, valorisation des circuits courts, produits du terroir, épicerie fine et commercialisation des vins."
      },
      {
        "titre": "Bac Pro Technicien conseil-vente en animalerie",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-conseil-vente-en-animalerie",
        "focus": "Conseil d'entretien des animaux de compagnie, vente d'accessoires et d'alimentation spécialisée."
      },
      {
        "titre": "Bac Pro Technicien conseil-vente univers jardinerie",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-conseil-vente-univers-jardinerie",
        "focus": "Conseil horticole, outillage de jardin, pépinière et aménagement végétalisé des extérieurs."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée privé des Cordeliers",
        "siteWeb": "https://lescordeliers.fr/",
        "commune": "Arcis-sur-Aube",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Technicien conseil-vente en alimentation (produits alimentaires et boissons)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-conseil-vente-en-alimentation-produits-alimentaires-et-boissons"
          }
        ],
        "capacite": 24,
        "demandes": {
          "2025": 0,
          "2024": 0,
          "2023": 0
        },
        "details": "Bac Pro Technicien conseil-vente en alimentation (produits alimentaires et boissons)"
      }
    ]
  },
  {
    "id": "arts-beaute",
    "nom": "Artisanat, Métiers d'art & Métiers de la beauté",
    "sigle": "ARTS / BEAUTÉ",
    "categorie": "services-sante",
    "badgeColor": "#7c3aed",
    "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-beaute-et-du-bien-etre",
    "description": "Filières créatives et de soins esthétiques : conception graphique plurimédia ou soins du visage, maquillage professionnel et conseil cosmétique.",
    "bacsPros": [
      {
        "titre": "Bac Pro Artisanat et métiers d'art - Option Communication visuelle plurimédia",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-artisanat-et-metiers-d-art-option-communication-visuelle-plurimedia",
        "focus": "Création graphique sur Illustrator/Photoshop, identité visuelle, typographie, affiches et supports digitaux."
      },
      {
        "titre": "Bac Pro Esthétique cosmétique parfumerie",
        "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-esthetique-cosmetique-parfumerie",
        "focus": "Soins du visage et du corps, manucure, maquillage artistique, vente et conseil en parfumerie de luxe."
      }
    ],
    "lyceesAube": [
      {
        "nom": "Lycée professionnel La Salle",
        "siteWeb": "https://lasalle-troyes.fr/",
        "commune": "Troyes",
        "statut": "Privé sous contrat",
        "bacsProsProposes": [
          {
            "titre": "Bac Pro Artisanat et métiers d'art (option communication visuelle plurimédia)",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-artisanat-et-metiers-d-art-option-communication-visuelle-plurimedia"
          },
          {
            "titre": "Bac Pro Esthétique cosmétique parfumerie",
            "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-esthetique-cosmetique-parfumerie"
          }
        ],
        "capacite": 30,
        "demandes": {
          "2025": 46,
          "2024": 45,
          "2023": 40
        },
        "details": "Bac Pro Artisanat et métiers d'art (option communication visuelle plurimédia) • Bac Pro Esthétique cosmétique parfumerie"
      }
    ]
  }
],

  // Glossaire complet des sigles
  glossaire: [
    { sigle: "CAP", definition: "Certificat d'Aptitude Professionnelle", description: "Diplôme national de niveau 3 qui se prépare en 2 ans après la 3<sup>e</sup> (en lycée pro ou en apprentissage). Il forme à un métier très précis." },
    { sigle: "Bac Pro", definition: "Baccalauréat Professionnel", description: "Diplôme national de niveau 4 qui se prépare en 3 ans (2<sup>de</sup>, 1<sup>re</sup>, Terminale pro). Il permet l'insertion professionnelle immédiate ou la poursuite en BTS." },
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
