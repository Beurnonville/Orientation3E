import json
import os

data = {
    "metadata": {
        "source": "infos.pdf - Document C.I.O Troyes / Académie de Reims",
        "date": "Septembre 2025",
        "description": "Recensement exhaustif des formations professionnelles post-3ème (Bac Pro, CAP, CAPA) proposées dans le département de l'Aube (10) avec capacités d'accueil et historique des demandes en Vœu 1 (2025, 2024, 2023).",
        "departement": "Aube (10)",
        "totalEtablissements": 14,
        "anneesHistorique": ["2025", "2024", "2023"]
    },
    "etablissements": [
        {
            "id": "lpo-edouard-herriot-sainte-savine",
            "nom": "Lycée Polyvalent Édouard Herriot",
            "commune": "Sainte-Savine",
            "statut": "Public",
            "secteur": "public",
            "zone": "Troyes et agglomération",
            "type": "Lycée polyvalent des métiers de l'hôtellerie-restauration et de la mode"
        },
        {
            "id": "lpo-les-lombards-troyes",
            "nom": "Lycée Polyvalent Les Lombards",
            "commune": "Troyes",
            "statut": "Public",
            "secteur": "public",
            "zone": "Troyes et agglomération",
            "type": "Lycée polyvalent industriel, bâtiment, énergie, sciences appliquées"
        },
        {
            "id": "lp-gabriel-voisin-troyes",
            "nom": "Lycée Professionnel Gabriel Voisin",
            "commune": "Troyes",
            "statut": "Public",
            "secteur": "public",
            "zone": "Troyes et agglomération",
            "type": "Lycée des métiers de l'automobile, du transport et de la relation client"
        },
        {
            "id": "lpo-marie-de-champagne-troyes",
            "nom": "Lycée Polyvalent Marie de Champagne",
            "commune": "Troyes",
            "statut": "Public",
            "secteur": "public",
            "zone": "Troyes et agglomération",
            "type": "Lycée polyvalent santé-social, tertiaire, gestion, relation client"
        },
        {
            "id": "lp-denis-diderot-romilly",
            "nom": "Lycée Professionnel Denis Diderot",
            "commune": "Romilly-sur-Seine",
            "statut": "Public",
            "secteur": "public",
            "zone": "Hors Troyes et agglomération",
            "type": "Lycée professionnel métiers de la sécurité, industrie, bois, tertiaire"
        },
        {
            "id": "lp-val-more-bar-sur-seine",
            "nom": "Lycée Professionnel du Val Moré",
            "commune": "Bar-sur-Seine",
            "statut": "Public",
            "secteur": "public",
            "zone": "Hors Troyes et agglomération",
            "type": "Lycée des métiers de la maintenance (agricole, TP, moto, PL) et du transport routier"
        },
        {
            "id": "lpo-gaston-bachelard-bar-sur-aube",
            "nom": "Lycée Polyvalent Gaston Bachelard",
            "commune": "Bar-sur-Aube",
            "statut": "Public",
            "secteur": "public",
            "zone": "Hors Troyes et agglomération",
            "type": "Lycée polyvalent tertiaire, commerce, transitions numérique et énergétique"
        },
        {
            "id": "lycee-forestier-crogny-chaource",
            "nom": "Lycée Forestier de Crogny",
            "commune": "Chaource (Les Loges-Margueron / Crogny)",
            "statut": "Public",
            "secteur": "public",
            "zone": "Hors Troyes et agglomération",
            "type": "Lycée des métiers de la forêt, de la nature et de l'environnement"
        },
        {
            "id": "lycee-agricole-charles-baltet-st-pouange",
            "nom": "Lycée Agricole Charles Baltet",
            "commune": "Saint-Pouange",
            "statut": "Public agricole",
            "secteur": "public",
            "zone": "Troyes et agglomération (Péri-urbain)",
            "type": "Établissement public local d'enseignement agricole (EPLEFPA)"
        },
        {
            "id": "lycee-agricole-sainte-maure",
            "nom": "Lycée Agricole Privé Sainte-Maure",
            "commune": "Sainte-Maure",
            "statut": "Privé agricole sous contrat",
            "secteur": "prive",
            "zone": "Troyes et agglomération (Péri-urbain)",
            "type": "Lycée agricole privé (CNEAP) grandes cultures, élevage, filière équine, nature"
        },
        {
            "id": "lycee-prive-cordeliers-arcis",
            "nom": "Lycée Privé des Cordeliers",
            "commune": "Arcis-sur-Aube",
            "statut": "Privé sous contrat",
            "secteur": "prive",
            "zone": "Hors Troyes et agglomération",
            "type": "Lycée privé rural services aux personnes, conseil-vente en alimentation"
        },
        {
            "id": "lp-la-salle-troyes",
            "nom": "Lycée Professionnel La Salle (Saint-Joseph)",
            "commune": "Troyes",
            "statut": "Privé sous contrat",
            "secteur": "prive",
            "zone": "Troyes et agglomération",
            "type": "Lycée professionnel privé numérique, énergie, architecture, communication visuelle, beauté"
        },
        {
            "id": "lp-jeanne-mance-troyes",
            "nom": "Lycée Professionnel Jeanne Mance",
            "commune": "Troyes",
            "statut": "Privé sous contrat",
            "secteur": "prive",
            "zone": "Troyes et agglomération",
            "type": "Lycée professionnel privé sécurité, santé-social, grand âge, logistique"
        },
        {
            "id": "lp-leonie-aviat-troyes",
            "nom": "Lycée Professionnel Léonie Aviat",
            "commune": "Troyes",
            "statut": "Privé sous contrat",
            "secteur": "prive",
            "zone": "Troyes et agglomération",
            "type": "Lycée professionnel privé tertiaire, accueil, commerce, fleuriste"
        }
    ],
    "formations": [
        # =========================================================================
        # PAGE 1 : Bac Pro Publics (Troyes et Agglo)
        # =========================================================================
        {
            "id": "p1-herriot-couture",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Métiers de la couture et de la confection",
            "specialites": ["Bac Pro Métiers de la couture et de la confection"],
            "etablissementId": "lpo-edouard-herriot-sainte-savine",
            "capacite": 30,
            "demandes": {"2025": 27, "2024": 22, "2023": 40},
            "tauxPression2025": round(27 / 30, 2),
            "remarques": ""
        },
        {
            "id": "p1-herriot-hotellerie-restauration",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de l’hôtellerie et de la restauration",
            "intitule": "2de Pro Métiers de l’hôtellerie et de la restauration",
            "specialites": [
                "Bac Pro Cuisine",
                "Bac Pro Commercialisation et services en restauration (CSR)"
            ],
            "etablissementId": "lpo-edouard-herriot-sainte-savine",
            "capacite": 48,
            "demandes": {"2025": 58, "2024": 69, "2023": 67},
            "tauxPression2025": round(58 / 48, 2),
            "remarques": "Donne accès en 1ère Pro soit au Bac Pro Cuisine, soit au Bac Pro CSR."
        },
        {
            "id": "p1-lombards-alimentation-bio-ind",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de l’alimentation - bio-industries - laboratoire",
            "intitule": "2de Pro Métiers de l’alimentation - bio-industries - laboratoire",
            "specialites": [
                "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)"
            ],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 12, "2024": 12, "2023": 5},
            "tauxPression2025": round(12 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p1-lombards-construction-durable",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la construction durable, du bâtiment et des travaux publics",
            "intitule": "2de Pro Métiers de la construction durable, du bâtiment et des travaux publics",
            "specialites": [
                "Bac Pro Aménagement et finition du bâtiment (AFB)"
            ],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 23, "2024": 17, "2023": 22},
            "tauxPression2025": round(23 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p1-lombards-pilotage-maintenance",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers du pilotage et de la maintenance d’installations automatisées",
            "intitule": "2de Pro Métiers du pilotage et de la maintenance d’installations automatisées",
            "specialites": [
                "Bac Pro Maintenance des systèmes de production connectés (MSPC)"
            ],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 10, "2024": 15, "2023": 7},
            "tauxPression2025": round(10 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p1-lombards-agencement-menuiserie",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de l’agencement, de la menuiserie et de l’ameublement",
            "intitule": "2de Pro Métiers de l’agencement, de la menuiserie et de l’ameublement",
            "specialites": [
                "Bac Pro Technicien menuisier agenceur (TMA)"
            ],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 19, "2024": 15, "2023": 11},
            "tauxPression2025": round(19 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p1-lombards-etudes-modelisation",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des études et de la modélisation numérique du bâtiment",
            "intitule": "2de Pro Métiers des études et de la modélisation numérique du bâtiment",
            "specialites": [
                "Bac Pro Technicien d’études du bâtiment (TEB) - Option A : Études et économie"
            ],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 10, "2024": 16, "2023": 16},
            "tauxPression2025": round(10 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p1-lombards-transitions-num-energ",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des transitions numérique et énergétique (MTNE)",
            "intitule": "2de Pro Métiers des transitions numérique et énergétique",
            "specialites": [
                "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER)",
                "Bac Pro Maintenance et efficacité énergétique (MEE)",
                "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)",
                "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)"
            ],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 84,
            "demandes": {"2025": 83, "2024": 94, "2023": 93},
            "tauxPression2025": round(83 / 84, 2),
            "remarques": "Pôle d'excellence regroupant 4 spécialités majeures du numérique, de l'énergie et du génie climatique."
        },
        {
            "id": "p1-voisin-maintenance-vehicules",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la maintenance des matériels et des véhicules",
            "intitule": "2de Pro Métiers de la maintenance des matériels et des véhicules",
            "specialites": [
                "Bac Pro Maintenance des véhicules (Option A : voitures particulières)"
            ],
            "etablissementId": "lp-gabriel-voisin-troyes",
            "capacite": 30,
            "demandes": {"2025": 33, "2024": 39, "2023": 34},
            "tauxPression2025": round(33 / 30, 2),
            "remarques": ""
        },
        {
            "id": "p1-voisin-carrossier-peintre",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Carrossier peintre automobile",
            "specialites": ["Bac Pro Carrossier peintre automobile"],
            "etablissementId": "lp-gabriel-voisin-troyes",
            "capacite": 20,
            "demandes": {"2025": 11, "2024": 7, "2023": 13},
            "tauxPression2025": round(11 / 20, 2),
            "remarques": ""
        },
        {
            "id": "p1-voisin-relation-client",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la relation client (MRC)",
            "intitule": "2de Pro Métiers de la relation client",
            "specialites": [
                "Bac Pro Métiers de l’accueil",
                "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial + Option B : prospection clientèle et valorisation de l'offre commerciale)"
            ],
            "etablissementId": "lp-gabriel-voisin-troyes",
            "capacite": 72,
            "demandes": {"2025": 31, "2024": 39, "2023": 22},
            "tauxPression2025": round(31 / 72, 2),
            "remarques": ""
        },
        {
            "id": "p1-marie-champagne-assp",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
            "specialites": ["Bac Pro Accompagnement, soins et services à la personne (ASSP)"],
            "etablissementId": "lpo-marie-de-champagne-troyes",
            "capacite": 48,
            "demandes": {"2025": 81, "2024": 83, "2023": 71},
            "tauxPression2025": round(81 / 48, 2),
            "remarques": "Filière très demandée (taux de pression 1.69 en 2025)."
        },
        {
            "id": "p1-marie-champagne-aepa",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Animation-enfance et personnes âgées (AEPA)",
            "specialites": ["Bac Pro Animation-enfance et personnes âgées (AEPA)"],
            "etablissementId": "lpo-marie-de-champagne-troyes",
            "capacite": 20,
            "demandes": {"2025": 36, "2024": 25, "2023": None},
            "tauxPression2025": round(36 / 20, 2),
            "remarques": "Filière sélective et attractive (taux de pression 1.80 en 2025)."
        },
        {
            "id": "p1-marie-champagne-relation-client",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la relation client (MRC)",
            "intitule": "2de Pro Métiers de la relation client",
            "specialites": [
                "Bac Pro Métiers du commerce et de la vente (Option A + Option B)"
            ],
            "etablissementId": "lpo-marie-de-champagne-troyes",
            "capacite": 36,
            "demandes": {"2025": 124, "2024": 135, "2023": 144},
            "tauxPression2025": round(124 / 36, 2),
            "remarques": "Très forte attractivité historique (taux de pression > 3.44 en 2025)."
        },
        {
            "id": "p1-marie-champagne-gestion-admin",
            "pagePdf": 1,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
            "intitule": "2de Pro Métiers de la gestion administrative, du transport et de la logistique",
            "specialites": [
                "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
            ],
            "etablissementId": "lpo-marie-de-champagne-troyes",
            "capacite": 56,
            "demandes": {"2025": 40, "2024": 51, "2023": 47},
            "tauxPression2025": round(40 / 56, 2),
            "remarques": ""
        },

        # =========================================================================
        # PAGE 2 : CAP Publics (Troyes et Agglo)
        # =========================================================================
        {
            "id": "p2-lombards-platre-isolation",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Métiers du plâtre et de l’isolation",
            "specialites": ["CAP Métiers du plâtre et de l’isolation"],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 17, "2024": 19, "2023": 11},
            "tauxPression2025": round(17 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p2-lombards-peintre-applicateur",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Peintre applicateur de revêtements",
            "specialites": ["CAP Peintre applicateur de revêtements"],
            "etablissementId": "lpo-les-lombards-troyes",
            "capacite": 15,
            "demandes": {"2025": 18, "2024": 16, "2023": 19},
            "tauxPression2025": round(18 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p2-voisin-equipier-commerce",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Équipier polyvalent du commerce (EPC)",
            "specialites": ["CAP Équipier polyvalent du commerce"],
            "etablissementId": "lp-gabriel-voisin-troyes",
            "capacite": 30,
            "demandes": {"2025": 39, "2024": 28, "2023": 27},
            "tauxPression2025": round(39 / 30, 2),
            "remarques": ""
        },
        {
            "id": "p2-voisin-maintenance-vl",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Maintenance des véhicules : véhicules légers",
            "specialites": ["CAP Maintenance des véhicules : véhicules légers"],
            "etablissementId": "lp-gabriel-voisin-troyes",
            "capacite": 10,
            "demandes": {"2025": 22, "2024": 31, "2023": 32},
            "tauxPression2025": round(22 / 10, 2),
            "remarques": "Forte demande (taux de pression 2.20 en 2025)."
        },
        {
            "id": "p2-voisin-peintre-auto",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Peintre automobile",
            "specialites": ["CAP Peintre automobile"],
            "etablissementId": "lp-gabriel-voisin-troyes",
            "capacite": 20,
            "demandes": {"2025": 14, "2024": 11, "2023": 7},
            "tauxPression2025": round(14 / 20, 2),
            "remarques": ""
        },
        {
            "id": "p2-marie-champagne-aepe",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Accompagnant éducatif petite enfance (AEPE)",
            "specialites": ["CAP Accompagnant éducatif petite enfance"],
            "etablissementId": "lpo-marie-de-champagne-troyes",
            "capacite": 15,
            "demandes": {"2025": 41, "2024": 51, "2023": 55},
            "tauxPression2025": round(41 / 15, 2),
            "remarques": "Priorité accordée aux élèves issus de 3ème générale, 3ème Prépa-Métiers et 3ème de l’enseignement agricole. Taux de pression élevé (2.73 en 2025)."
        },
        {
            "id": "p2-herriot-hcr",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Commercialisation et services en hôtel-café-restaurant (HCR)",
            "specialites": ["CAP Commercialisation et services en hôtel-café-restaurant"],
            "etablissementId": "lpo-edouard-herriot-sainte-savine",
            "capacite": 36,
            "demandes": {"2025": 16, "2024": 24, "2023": 19},
            "tauxPression2025": round(16 / 36, 2),
            "remarques": ""
        },
        {
            "id": "p2-herriot-cuisine",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Cuisine",
            "specialites": ["CAP Cuisine"],
            "etablissementId": "lpo-edouard-herriot-sainte-savine",
            "capacite": 24,
            "demandes": {"2025": 32, "2024": 37, "2023": 26},
            "tauxPression2025": round(32 / 24, 2),
            "remarques": ""
        },
        {
            "id": "p2-herriot-psr",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Production et service en restaurations (rapide, collective, cafétéria)",
            "specialites": ["CAP Production et service en restaurations (rapide, collective, cafétéria)"],
            "etablissementId": "lpo-edouard-herriot-sainte-savine",
            "capacite": 12,
            "demandes": {"2025": 11, "2024": 12, "2023": 12},
            "tauxPression2025": round(11 / 12, 2),
            "remarques": ""
        },
        {
            "id": "p2-herriot-mode-flou",
            "pagePdf": 2,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Métiers de la mode - vêtement flou",
            "specialites": ["CAP Métiers de la mode - vêtement flou"],
            "etablissementId": "lpo-edouard-herriot-sainte-savine",
            "capacite": 15,
            "demandes": {"2025": 13, "2024": 8, "2023": 9},
            "tauxPression2025": round(13 / 15, 2),
            "remarques": ""
        },

        # =========================================================================
        # PAGE 3 : Bac Pro Publics Hors Troyes & Agglo
        # =========================================================================
        {
            "id": "p3-diderot-relation-client",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la relation client (MRC)",
            "intitule": "2de Pro Métiers de la relation client",
            "specialites": [
                "Bac Pro Métiers du commerce et de la vente"
            ],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 36,
            "demandes": {"2025": 37, "2024": 46, "2023": 59},
            "tauxPression2025": round(37 / 36, 2),
            "remarques": ""
        },
        {
            "id": "p3-diderot-gestion-admin",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
            "intitule": "2de Pro Métiers de la gestion administrative, du transport et de la logistique",
            "specialites": [
                "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
            ],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 36,
            "demandes": {"2025": 7, "2024": 11, "2023": 16},
            "tauxPression2025": round(7 / 36, 2),
            "remarques": ""
        },
        {
            "id": "p3-diderot-pilotage-maintenance",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers du pilotage et de la maintenance d’installations automatisées",
            "intitule": "2de Pro Métiers du pilotage et de la maintenance d’installations automatisées",
            "specialites": [
                "Bac Pro Maintenance des systèmes de production connectés (MSPC)"
            ],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 15,
            "demandes": {"2025": 15, "2024": 17, "2023": 6},
            "tauxPression2025": round(15 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p3-diderot-securite",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Métiers de la sécurité",
            "specialites": ["Bac Pro Métiers de la sécurité"],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 18,
            "demandes": {"2025": 41, "2024": 46, "2023": 53},
            "tauxPression2025": round(41 / 18, 2),
            "remarques": "Filière très demandée (taux de pression 2.28 en 2025)."
        },
        {
            "id": "p3-val-more-transport-routier",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Conducteur transport routier marchandises (CTRM)",
            "specialites": ["Bac Pro Conducteur transport routier marchandises (CTRM)"],
            "etablissementId": "lp-val-more-bar-sur-seine",
            "capacite": 24,
            "demandes": {"2025": 54, "2024": 36, "2023": 48},
            "tauxPression2025": round(54 / 24, 2),
            "remarques": "Filière très attractive (taux de pression 2.25 en 2025)."
        },
        {
            "id": "p3-val-more-maintenance-mat-veh",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la maintenance des matériels et des véhicules",
            "intitule": "2de Pro Métiers de la maintenance des matériels et des véhicules",
            "specialites": [
                "Bac Pro Maintenance des matériels (Option A : agricoles, Option B : construction et manutention, Option C : espaces verts)",
                "Bac Pro Maintenance des véhicules (Option B : transport routier, Option C : motocycles)"
            ],
            "etablissementId": "lp-val-more-bar-sur-seine",
            "capacite": 72,
            "demandes": {"2025": 57, "2024": 48, "2023": 55},
            "tauxPression2025": round(57 / 72, 2),
            "remarques": "Pôle de référence départemental pour la maintenance agricole, travaux publics, poids lourds et motos."
        },
        {
            "id": "p3-bachelard-relation-client",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la relation client (MRC)",
            "intitule": "2de Pro Métiers de la relation client",
            "specialites": [
                "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)"
            ],
            "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
            "capacite": 18,
            "demandes": {"2025": 33, "2024": 31, "2023": 20},
            "tauxPression2025": round(33 / 18, 2),
            "remarques": ""
        },
        {
            "id": "p3-bachelard-transitions-num-energ",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des transitions numérique et énergétique (MTNE)",
            "intitule": "2de Pro Métiers des transitions numérique et énergétique",
            "specialites": [
                "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)"
            ],
            "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
            "capacite": 15,
            "demandes": {"2025": 13, "2024": 13, "2023": 11},
            "tauxPression2025": round(13 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p3-crogny-foret",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la nature – jardin – paysage – forêt",
            "intitule": "2de Pro Métiers de la nature – jardin – paysage – forêt",
            "specialites": [
                "Bac Pro Forêt"
            ],
            "etablissementId": "lycee-forestier-crogny-chaource",
            "capacite": 32,
            "demandes": {"2025": 22, "2024": 21, "2023": 17},
            "tauxPression2025": round(22 / 32, 2),
            "remarques": "Établissement forestier emblématique en lisière de forêt de Chaource."
        },
        {
            "id": "p3-baltet-productions-agricoles",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des productions (Agricoles)",
            "intitule": "2de Pro Métiers des productions",
            "specialites": [
                "Bac Pro Conduite et gestion de l’entreprise agricole - CGEA (grandes cultures, polyculture élevage)"
            ],
            "etablissementId": "lycee-agricole-charles-baltet-st-pouange",
            "capacite": 50,
            "demandes": {"2025": 26, "2024": 49, "2023": 53},
            "tauxPression2025": round(26 / 50, 2),
            "remarques": "Lycée public agricole de référence de l'Aube."
        },
        {
            "id": "p3-baltet-sapat",
            "pagePdf": 3,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
            "specialites": ["Bac Pro Services aux personnes et animation dans les territoires (SAPAT)"],
            "etablissementId": "lycee-agricole-charles-baltet-st-pouange",
            "capacite": 32,
            "demandes": {"2025": 28, "2024": 26, "2023": 20},
            "tauxPression2025": round(28 / 32, 2),
            "remarques": ""
        },

        # =========================================================================
        # PAGE 4 : CAP Publics Hors Troyes & Agglo
        # =========================================================================
        {
            "id": "p4-diderot-ebeniste",
            "pagePdf": 4,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Ébéniste",
            "specialites": ["CAP Ébéniste"],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 24,
            "demandes": {"2025": 21, "2024": 16, "2023": 16},
            "tauxPression2025": round(21 / 24, 2),
            "remarques": "Priorité accordée aux élèves de 3ème générale, 3ème Prépa-Métiers et 3ème de l’enseignement agricole."
        },
        {
            "id": "p4-diderot-equipier-commerce",
            "pagePdf": 4,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Équipier polyvalent du commerce (EPC)",
            "specialites": ["CAP Équipier polyvalent du commerce"],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 15,
            "demandes": {"2025": 29, "2024": 17, "2023": 21},
            "tauxPression2025": round(29 / 15, 2),
            "remarques": "Taux de pression 1.93 en 2025."
        },
        {
            "id": "p4-diderot-metallier",
            "pagePdf": 4,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Métallier",
            "specialites": ["CAP Métallier"],
            "etablissementId": "lp-denis-diderot-romilly",
            "capacite": 15,
            "demandes": {"2025": 17, "2024": 11, "2023": 15},
            "tauxPression2025": round(17 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p4-val-more-op-service-livraison",
            "pagePdf": 4,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Opérateur de service - relation client et livraison",
            "specialites": ["CAP Opérateur de service - relation client et livraison"],
            "etablissementId": "lp-val-more-bar-sur-seine",
            "capacite": 14,
            "demandes": {"2025": 15, "2024": 13, "2023": None},
            "tauxPression2025": round(15 / 14, 2),
            "remarques": ""
        },
        {
            "id": "p4-bachelard-equipier-commerce",
            "pagePdf": 4,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Équipier polyvalent du commerce (EPC)",
            "specialites": ["CAP Équipier polyvalent du commerce"],
            "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
            "capacite": 15,
            "demandes": {"2025": 10, "2024": 7, "2023": 9},
            "tauxPression2025": round(10 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p4-crogny-capa-travaux-forestiers",
            "pagePdf": 4,
            "typeDiplome": "CAPA",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAPA Travaux forestiers",
            "specialites": ["CAPA Travaux forestiers"],
            "etablissementId": "lycee-forestier-crogny-chaource",
            "capacite": 19,
            "demandes": {"2025": 12, "2024": 5, "2023": 12},
            "tauxPression2025": round(12 / 19, 2),
            "remarques": ""
        },

        # =========================================================================
        # PAGE 5 : Formations Établissements Agricoles Privés
        # =========================================================================
        {
            "id": "p5-sainte-maure-productions",
            "pagePdf": 5,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des productions (Agricoles & Équines)",
            "intitule": "2de Pro Métiers des productions",
            "specialites": [
                "Bac Pro Conduite et gestion de l’entreprise agricole (CGEA) - Grandes cultures",
                "Bac Pro Conduite et gestion de l’entreprise agricole (CGEA) - Polyculture élevage",
                "Bac Pro Conduite et gestion de l’entreprise hippique (CGEH)"
            ],
            "etablissementId": "lycee-agricole-sainte-maure",
            "capacite": 50,
            "demandes": {"2025": 20, "2024": 18, "2023": None},
            "tauxPression2025": round(20 / 50, 2),
            "remarques": "Spécificité équestre et agricole sur vaste domaine d'apprentissage."
        },
        {
            "id": "p5-sainte-maure-nature-faune",
            "pagePdf": 5,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la nature - jardin - paysage - forêt",
            "intitule": "2de Pro Métiers de la nature - jardin - paysage - forêt",
            "specialites": [
                "Bac Pro Gestion des milieux naturels et de la faune (GMNF)"
            ],
            "etablissementId": "lycee-agricole-sainte-maure",
            "capacite": 28,
            "demandes": {"2025": 16, "2024": 10, "2023": None},
            "tauxPression2025": round(16 / 28, 2),
            "remarques": ""
        },
        {
            "id": "p5-cordeliers-sapat",
            "pagePdf": 5,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
            "specialites": ["Bac Pro Services aux personnes et animation dans les territoires (SAPAT)"],
            "etablissementId": "lycee-prive-cordeliers-arcis",
            "capacite": 24,
            "demandes": {"2025": 16, "2024": 14, "2023": None},
            "tauxPression2025": round(16 / 24, 2),
            "remarques": ""
        },
        {
            "id": "p5-cordeliers-conseil-vente",
            "pagePdf": 5,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers du conseil-vente (Alimentation)",
            "intitule": "2de Pro Métiers du conseil-vente",
            "specialites": [
                "Bac Pro Technicien conseil-vente en alimentation (Option produits alimentaires et boissons)"
            ],
            "etablissementId": "lycee-prive-cordeliers-arcis",
            "capacite": 24,
            "demandes": {"2025": 0, "2024": 5, "2023": None},
            "tauxPression2025": round(0 / 24, 2),
            "remarques": ""
        },
        {
            "id": "p5-cordeliers-capa-sapver",
            "pagePdf": 5,
            "typeDiplome": "CAPA",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAPA Services aux personnes et vente en espace rural (SAPVER)",
            "specialites": ["CAPA Services aux personnes et vente en espace rural"],
            "etablissementId": "lycee-prive-cordeliers-arcis",
            "capacite": 24,
            "demandes": {"2025": 12, "2024": 10, "2023": None},
            "tauxPression2025": round(12 / 24, 2),
            "remarques": ""
        },

        # =========================================================================
        # PAGE 6 : Formations Établissements Privés sous Contrat
        # =========================================================================
        {
            "id": "p6-la-salle-artisanat-art",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Artisanat et métiers d’art, option communication visuelle plurimédia",
            "specialites": ["Bac Pro Artisanat et métiers d’art, communication visuelle plurimédia"],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 15,
            "demandes": {"2025": 26, "2024": None, "2023": None},
            "tauxPression2025": round(26 / 15, 2),
            "remarques": "Taux de pression 1.73 en 2025."
        },
        {
            "id": "p6-la-salle-agora",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
            "intitule": "2de Pro Métiers de la gestion administrative, du transport et de la logistique",
            "specialites": [
                "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
            ],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 18,
            "demandes": {"2025": 7, "2024": None, "2023": None},
            "tauxPression2025": round(7 / 18, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-beaute-bien-etre",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la beauté et du bien-être",
            "intitule": "2de Pro Métiers de la beauté et du bien-être",
            "specialites": [
                "Bac Pro Esthétique cosmétique parfumerie"
            ],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 15,
            "demandes": {"2025": 20, "2024": None, "2023": None},
            "tauxPression2025": round(20 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-agencement",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de l’agencement, de la menuiserie et de l’ameublement",
            "intitule": "2de Pro Métiers de l’agencement, de la menuiserie et de l’ameublement",
            "specialites": [
                "Bac Pro Études et réalisation d’agencement (ERA)"
            ],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 15,
            "demandes": {"2025": 14, "2024": None, "2023": None},
            "tauxPression2025": round(14 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-relation-client",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la relation client (MRC)",
            "intitule": "2de Pro Métiers de la relation client",
            "specialites": [
                "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)"
            ],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 24,
            "demandes": {"2025": 20, "2024": None, "2023": None},
            "tauxPression2025": round(20 / 24, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-transitions-num-energ",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des transitions numérique et énergétique (MTNE)",
            "intitule": "2de Pro Métiers des transitions numérique et énergétique",
            "specialites": [
                "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
                "Bac Pro Métiers de l’électricité et de ses environnements connectés (MELEC)",
                "Bac Pro Métiers du froid et des énergies renouvelables (MFER)"
            ],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 60,
            "demandes": {"2025": 28, "2024": None, "2023": None},
            "tauxPression2025": round(28 / 60, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-modelisation-batiment",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers des études et de la modélisation numérique du bâtiment",
            "intitule": "2de Pro Métiers des études et de la modélisation numérique du bâtiment",
            "specialites": [
                "Bac Pro Technicien d’études du bâtiment (Option B : Assistant en architecture)"
            ],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 15,
            "demandes": {"2025": 12, "2024": None, "2023": None},
            "tauxPression2025": round(12 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-cap-electricien",
            "pagePdf": 6,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Électricien",
            "specialites": ["CAP Électricien"],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 15,
            "demandes": {"2025": 3, "2024": None, "2023": None},
            "tauxPression2025": round(3 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p6-la-salle-cap-thermique",
            "pagePdf": 6,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Monteur en installations thermiques",
            "specialites": ["CAP Monteur installations thermiques"],
            "etablissementId": "lp-la-salle-troyes",
            "capacite": 15,
            "demandes": {"2025": 2, "2024": None, "2023": None},
            "tauxPression2025": round(2 / 15, 2),
            "remarques": ""
        },

        # LP Léonie Aviat (Troyes)
        {
            "id": "p6-aviat-gestion-admin",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
            "intitule": "2de Pro Métiers de la gestion administrative, du transport et de la logistique",
            "specialites": [
                "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)"
            ],
            "etablissementId": "lp-leonie-aviat-troyes",
            "capacite": 18,
            "demandes": {"2025": 3, "2024": None, "2023": None},
            "tauxPression2025": round(3 / 18, 2),
            "remarques": ""
        },
        {
            "id": "p6-aviat-relation-client",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la relation client (MRC)",
            "intitule": "2de Pro Métiers de la relation client",
            "specialites": [
                "Bac Pro Métiers de l’accueil",
                "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)"
            ],
            "etablissementId": "lp-leonie-aviat-troyes",
            "capacite": 54,
            "demandes": {"2025": 11, "2024": None, "2023": None},
            "tauxPression2025": round(11 / 54, 2),
            "remarques": ""
        },
        {
            "id": "p6-aviat-cap-equipier-commerce",
            "pagePdf": 6,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Équipier polyvalent du commerce (EPC)",
            "specialites": ["CAP Équipier polyvalent du commerce"],
            "etablissementId": "lp-leonie-aviat-troyes",
            "capacite": 15,
            "demandes": {"2025": 6, "2024": None, "2023": None},
            "tauxPression2025": round(6 / 15, 2),
            "remarques": ""
        },
        {
            "id": "p6-aviat-cap-fleuriste",
            "pagePdf": 6,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Fleuriste",
            "specialites": ["CAP Fleuriste"],
            "etablissementId": "lp-leonie-aviat-troyes",
            "capacite": 15,
            "demandes": {"2025": 9, "2024": None, "2023": None},
            "tauxPression2025": round(9 / 15, 2),
            "remarques": ""
        },

        # LP Jeanne Mance (Troyes)
        {
            "id": "p6-mance-assp",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
            "specialites": ["Bac Pro Accompagnement, soins et services à la personne (ASSP)"],
            "etablissementId": "lp-jeanne-mance-troyes",
            "capacite": 30,
            "demandes": {"2025": 25, "2024": None, "2023": None},
            "tauxPression2025": round(25 / 30, 2),
            "remarques": ""
        },
        {
            "id": "p6-mance-logistique",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "2de Pro Famille de métiers",
            "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
            "intitule": "2de Pro Métiers de la gestion administrative, du transport et de la logistique",
            "specialites": [
                "Bac Pro Logistique"
            ],
            "etablissementId": "lp-jeanne-mance-troyes",
            "capacite": 18,
            "demandes": {"2025": 8, "2024": None, "2023": None},
            "tauxPression2025": round(8 / 18, 2),
            "remarques": ""
        },
        {
            "id": "p6-mance-securite",
            "pagePdf": 6,
            "typeDiplome": "Bac Pro",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "Bac Pro Métiers de la sécurité",
            "specialites": ["Bac Pro Métiers de la sécurité"],
            "etablissementId": "lp-jeanne-mance-troyes",
            "capacite": 30,
            "demandes": {"2025": 35, "2024": None, "2023": None},
            "tauxPression2025": round(35 / 30, 2),
            "remarques": "Taux de pression 1.17 en 2025."
        },
        {
            "id": "p6-mance-cap-grand-age",
            "pagePdf": 6,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Agent accompagnant au grand âge (2AGA)",
            "specialites": ["CAP Agent accompagnement au grand âge"],
            "etablissementId": "lp-jeanne-mance-troyes",
            "capacite": 30,
            "demandes": {"2025": 10, "2024": None, "2023": None},
            "tauxPression2025": round(10 / 30, 2),
            "remarques": ""
        },
        {
            "id": "p6-mance-cap-operateur-logistique",
            "pagePdf": 6,
            "typeDiplome": "CAP",
            "voieEntree": "Directe",
            "familleMetiers": None,
            "intitule": "CAP Opérateur/opératrice logistique",
            "specialites": ["CAP Opérateur/opératrice logistique"],
            "etablissementId": "lp-jeanne-mance-troyes",
            "capacite": 12,
            "demandes": {"2025": 3, "2024": None, "2023": None},
            "tauxPression2025": round(3 / 12, 2),
            "remarques": ""
        }
    ]
}

# Attach etablissement details to formations for instant lookup
etab_map = {e["id"]: e for e in data["etablissements"]}
for f in data["formations"]:
    etab = etab_map[f["etablissementId"]]
    f["etablissementNom"] = etab["nom"]
    f["commune"] = etab["commune"]
    f["statut"] = etab["statut"]
    f["secteur"] = etab["secteur"]
    f["zone"] = etab["zone"]

# Also attach formations list to each establishment
for etab in data["etablissements"]:
    etab["formations"] = [f for f in data["formations"] if f["etablissementId"] == etab["id"]]
    etab["formationsCount"] = len(etab["formations"])
    etab["capaciteTotale"] = sum(f["capacite"] for f in etab["formations"])
    etab["demandes2025Totale"] = sum(f["demandes"]["2025"] for f in etab["formations"] if f["demandes"]["2025"] is not None)

# Compute global stats
data["statsGlobales"] = {
    "totalFormations": len(data["formations"]),
    "totalBacPro": len([f for f in data["formations"] if f["typeDiplome"] == "Bac Pro"]),
    "totalCAP": len([f for f in data["formations"] if f["typeDiplome"] in ["CAP", "CAPA"]]),
    "capaciteTotaleAube": sum(f["capacite"] for f in data["formations"]),
    "demandes2025TotaleAube": sum(f["demandes"]["2025"] for f in data["formations"] if f["demandes"]["2025"] is not None),
    "totalPublic": len([f for f in data["formations"] if f["secteur"] == "public"]),
    "totalPrive": len([f for f in data["formations"] if f["secteur"] == "prive"])
}

# Save as JSON
os.makedirs("data", exist_ok=True)
with open("data/formations-aube.json", "w", encoding="utf-8") as out_json:
    json.dump(data, out_json, ensure_ascii=False, indent=2)

# Save as JS file for direct web inclusion
js_content = "/**\n * Données officielles extraites de infos.pdf (CIO Troyes / Septembre 2025)\n * Formations professionnelles post-3ème dans l'Aube (Bac Pro & CAP)\n */\n"
js_content += f"const FORMATIONS_AUBE_DATA = {json.dumps(data, ensure_ascii=False, indent=2)};\n\n"
js_content += "if (typeof module !== 'undefined' && module.exports) {\n  module.exports = FORMATIONS_AUBE_DATA;\n}\n"

with open("data/formations-aube.js", "w", encoding="utf-8") as out_js:
    out_js.write(js_content)

print(f"Extraction completed successfully!")
print(f"Total Établissements : {len(data['etablissements'])}")
print(f"Total Formations : {len(data['formations'])}")
print(f"  - Bac Pro : {data['statsGlobales']['totalBacPro']}")
print(f"  - CAP / CAPA : {data['statsGlobales']['totalCAP']}")
print(f"Capacité totale d'accueil : {data['statsGlobales']['capaciteTotaleAube']} places")
print(f"Demandes totales Vœu 1 en 2025 : {data['statsGlobales']['demandes2025TotaleAube']}")
