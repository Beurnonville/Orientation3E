import json
import re

# Read the complete original orientation-data.js
with open('data/orientation-data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Load the exact verified PDF data
with open('data/formations-aube.json', 'r', encoding='utf-8') as f:
    pdf_data = json.load(f)

# Define the new, 100% faithful famillesMetiers array
familles_metiers = [
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
                "demandes": {"2025": 124, "2024": 135, "2023": 144}
            },
            {
                "nom": "Lycée professionnel Gabriel Voisin",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Commerce et vente (Option A + Option B) et Bac Pro Métiers de l'accueil",
                "capacite": 72,
                "demandes": {"2025": 31, "2024": 39, "2023": 22}
            },
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Métiers du commerce et de la vente",
                "capacite": 36,
                "demandes": {"2025": 37, "2024": 46, "2023": 59}
            },
            {
                "nom": "Lycée polyvalent Gaston Bachelard",
                "commune": "Bar-sur-Aube",
                "statut": "Public",
                "details": "2de Pro MRC : Bac Pro Métiers du commerce et de la vente (Option A uniquement)",
                "capacite": 18,
                "demandes": {"2025": 33, "2024": 31, "2023": 20}
            },
            {
                "nom": "Lycée professionnel Léonie Aviat",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MRC : Bac Pro Commerce et vente (Option A) et Bac Pro Métiers de l'accueil",
                "capacite": 54,
                "demandes": {"2025": 11, "2024": None, "2023": None}
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MRC : Bac Pro Métiers du commerce et de la vente (Option B uniquement)",
                "capacite": 24,
                "demandes": {"2025": 20, "2024": None, "2023": None}
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
                "demandes": {"2025": 40, "2024": 51, "2023": 47}
            },
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 36,
                "demandes": {"2025": 7, "2024": 11, "2023": 16}
            },
            {
                "nom": "Lycée professionnel Jeanne Mance",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro GATL : Bac Pro Logistique",
                "capacite": 18,
                "demandes": {"2025": 8, "2024": None, "2023": None}
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 18,
                "demandes": {"2025": 7, "2024": None, "2023": None}
            },
            {
                "nom": "Lycée professionnel Léonie Aviat",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro GATL : Bac Pro AGOrA (Gestion administrative des organisations)",
                "capacite": 18,
                "demandes": {"2025": 3, "2024": None, "2023": None}
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
                "demandes": {"2025": 83, "2024": 94, "2023": 93}
            },
            {
                "nom": "Lycée polyvalent Gaston Bachelard",
                "commune": "Bar-sur-Aube",
                "statut": "Public",
                "details": "2de Pro MTNE : Bac Pro MELEC (Électricité et environnements connectés)",
                "capacite": 15,
                "demandes": {"2025": 13, "2024": 13, "2023": 11}
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MTNE : Bac Pro CIEL, MELEC et MFER (Froid & énergies renouvelables)",
                "capacite": 60,
                "demandes": {"2025": 28, "2024": None, "2023": None}
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
                "demandes": {"2025": 57, "2024": 48, "2023": 55}
            },
            {
                "nom": "Lycée professionnel Gabriel Voisin",
                "commune": "Troyes",
                "statut": "Public",
                "details": "2de Pro Maintenance : Bac Pro Maintenance des véhicules (Option A : Voitures particulières) [30 pl.] + Bac Pro Carrossier peintre automobile [20 pl.]",
                "capacite": 50,
                "demandes": {"2025": 44, "2024": 46, "2023": 47}
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
                "demandes": {"2025": 54, "2024": 36, "2023": 48}
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
                "demandes": {"2025": 10, "2024": 15, "2023": 7}
            },
            {
                "nom": "Lycée professionnel Denis Diderot",
                "commune": "Romilly-sur-Seine",
                "statut": "Public",
                "details": "2de Pro PMIA : Bac Pro MSPC (Maintenance des systèmes connectés)",
                "capacite": 15,
                "demandes": {"2025": 15, "2024": 17, "2023": 6}
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
                "demandes": {"2025": 12, "2024": 12, "2023": 5}
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
                "demandes": {"2025": 23, "2024": 17, "2023": 22}
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
                "demandes": {"2025": 10, "2024": 16, "2023": 16}
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro MNB : Bac Pro TEB Option B (Assistant en architecture)",
                "capacite": 15,
                "demandes": {"2025": 12, "2024": None, "2023": None}
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
                "demandes": {"2025": 19, "2024": 15, "2023": 11}
            },
            {
                "nom": "Lycée professionnel La Salle",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "2de Pro Agencement/Menuiserie : Bac Pro Études et réalisation d'agencement (ERA)",
                "capacite": 15,
                "demandes": {"2025": 14, "2024": None, "2023": None}
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
                "demandes": {"2025": 58, "2024": 69, "2023": 67}
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
                "demandes": {"2025": 27, "2024": 22, "2023": 40}
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
                "demandes": {"2025": 117, "2024": 108, "2023": 71}
            },
            {
                "nom": "Lycée professionnel Jeanne Mance",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "Bac Pro ASSP (Accompagnement, soins et services à la personne)",
                "capacite": 30,
                "demandes": {"2025": 25, "2024": None, "2023": None}
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
                "demandes": {"2025": 28, "2024": 26, "2023": 20}
            },
            {
                "nom": "Lycée privé des Cordeliers",
                "commune": "Arcis-sur-Aube",
                "statut": "Privé sous contrat",
                "details": "Lycée privé rural : Bac Pro SAPAT (Services aux personnes et animation des territoires)",
                "capacite": 24,
                "demandes": {"2025": 16, "2024": 14, "2023": None}
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
                "demandes": {"2025": 41, "2024": 46, "2023": 53}
            },
            {
                "nom": "Lycée professionnel Jeanne Mance",
                "commune": "Troyes",
                "statut": "Privé sous contrat",
                "details": "Bac Pro Métiers de la sécurité",
                "capacite": 30,
                "demandes": {"2025": 35, "2024": None, "2023": None}
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
                "demandes": {"2025": 26, "2024": 49, "2023": 53}
            },
            {
                "nom": "Lycée agricole privé Sainte-Maure",
                "commune": "Sainte-Maure",
                "statut": "Privé agricole sous contrat",
                "details": "2de Pro Métiers des productions : Bac Pro CGEA (Grandes cultures / Polyculture élevage) et Bac Pro CGEH (Entreprise hippique)",
                "capacite": 50,
                "demandes": {"2025": 20, "2024": 18, "2023": None}
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
                "demandes": {"2025": 22, "2024": 21, "2023": 17}
            },
            {
                "nom": "Lycée agricole privé Sainte-Maure",
                "commune": "Sainte-Maure",
                "statut": "Privé agricole sous contrat",
                "details": "2de Pro Métiers de la nature - forêt : Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
                "capacite": 28,
                "demandes": {"2025": 16, "2024": 10, "2023": None}
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
                "demandes": {"2025": 0, "2024": 5, "2023": None}
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
                "demandes": {"2025": 46, "2024": None, "2023": None}
            }
        ]
    }
]

# Now let's replace the famillesMetiers array in orientation-data.js
# We replace from 'famillesMetiers: [' up to '  // Glossaire'
familles_json = json.dumps(familles_metiers, ensure_ascii=False, indent=4)
pattern = r'(famillesMetiers:\s*)\[[\s\S]*?\n  \],\n\n  // Glossaire'
replacement = r'\1' + familles_json + ',\n\n  // Glossaire'

new_js = re.sub(pattern, replacement, js_content)

with open('data/orientation-data.js', 'w', encoding='utf-8') as out_f:
    out_f.write(new_js)

print("orientation-data.js successfully updated!")
