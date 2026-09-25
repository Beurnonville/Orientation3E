/**
 * Données officielles extraites de infos.pdf (CIO Troyes / Septembre 2025)
 * Formations professionnelles post-3ème dans l'Aube (Bac Pro & CAP) avec coordonnées géographiques
 */
const FORMATIONS_AUBE_DATA = {
  "metadata": {
    "source": "infos.pdf - Document C.I.O Troyes / Académie de Reims",
    "date": "Septembre 2025",
    "description": "Recensement exhaustif des formations professionnelles post-3ème (Bac Pro, CAP, CAPA) proposées dans le département de l'Aube (10) avec capacités d'accueil et historique des demandes en Vœu 1 (2025, 2024, 2023).",
    "departement": "Aube (10)",
    "totalEtablissements": 14,
    "anneesHistorique": [
      "2025",
      "2024",
      "2023"
    ]
  },
  "etablissements": [
    {
      "id": "lpo-edouard-herriot-sainte-savine",
      "nom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération",
      "type": "Lycée polyvalent des métiers de l'hôtellerie-restauration et de la mode",
      "formations": [
        {
          "id": "p1-herriot-couture",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Métiers de la couture et de la confection",
          "specialites": [
            {
              "nom": "Bac Pro Métiers de la couture et de la confection",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-couture-et-de-la-confection"
            }
          ],
          "etablissementId": "lpo-edouard-herriot-sainte-savine",
          "capacite": 30,
          "demandes": {
            "2025": 27,
            "2024": 22,
            "2023": 40
          },
          "tauxPression2025": 0.9,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Édouard Herriot",
          "commune": "Sainte-Savine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-couture-et-de-la-confection"
        },
        {
          "id": "p1-herriot-hotellerie-restauration",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de l’hôtellerie et de la restauration",
          "intitule": "Bacs Pros Cuisine & Commercialisation et services en restauration (CSR)",
          "specialites": [
            {
              "nom": "Bac Pro Cuisine",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cuisine"
            },
            {
              "nom": "Bac Pro Commercialisation et services en restauration (CSR)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-commercialisation-et-services-en-restauration"
            }
          ],
          "etablissementId": "lpo-edouard-herriot-sainte-savine",
          "capacite": 48,
          "demandes": {
            "2025": 58,
            "2024": 69,
            "2023": 67
          },
          "tauxPression2025": 1.21,
          "remarques": "Donne accès en 1ère Pro soit au Bac Pro Cuisine, soit au Bac Pro CSR.",
          "etablissementNom": "Lycée Polyvalent Édouard Herriot",
          "commune": "Sainte-Savine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-l-hotellerie-restauration"
        },
        {
          "id": "p2-herriot-hcr",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Commercialisation et services en hôtel-café-restaurant (HCR)",
          "specialites": [
            {
              "nom": "CAP Commercialisation et services en hôtel-café-restaurant",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-commercialisation-et-services-en-hotel-cafe-restaurant"
            }
          ],
          "etablissementId": "lpo-edouard-herriot-sainte-savine",
          "capacite": 36,
          "demandes": {
            "2025": 16,
            "2024": 24,
            "2023": 19
          },
          "tauxPression2025": 0.44,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Édouard Herriot",
          "commune": "Sainte-Savine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-commercialisation-et-services-en-hotel-cafe-restaurant"
        },
        {
          "id": "p2-herriot-cuisine",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Cuisine",
          "specialites": [
            {
              "nom": "CAP Cuisine",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-cuisine"
            }
          ],
          "etablissementId": "lpo-edouard-herriot-sainte-savine",
          "capacite": 24,
          "demandes": {
            "2025": 32,
            "2024": 37,
            "2023": 26
          },
          "tauxPression2025": 1.33,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Édouard Herriot",
          "commune": "Sainte-Savine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-cuisine"
        },
        {
          "id": "p2-herriot-psr",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Production et service en restaurations (rapide, collective, cafétéria)",
          "specialites": [
            {
              "nom": "CAP Production et service en restaurations (rapide, collective, cafétéria)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-production-et-service-en-restaurations-rapide-collective-cafeteria"
            }
          ],
          "etablissementId": "lpo-edouard-herriot-sainte-savine",
          "capacite": 12,
          "demandes": {
            "2025": 11,
            "2024": 12,
            "2023": 12
          },
          "tauxPression2025": 0.92,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Édouard Herriot",
          "commune": "Sainte-Savine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-production-et-service-en-restaurations-rapide-collective-cafeteria"
        },
        {
          "id": "p2-herriot-mode-flou",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Métiers de la mode - vêtement flou",
          "specialites": [
            {
              "nom": "CAP Métiers de la mode - vêtement flou",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-metiers-de-la-mode-vetement-flou"
            }
          ],
          "etablissementId": "lpo-edouard-herriot-sainte-savine",
          "capacite": 15,
          "demandes": {
            "2025": 13,
            "2024": 8,
            "2023": 9
          },
          "tauxPression2025": 0.87,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Édouard Herriot",
          "commune": "Sainte-Savine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-metiers-de-la-mode-vetement-flou"
        }
      ],
      "formationsCount": 6,
      "capaciteTotale": 165,
      "demandes2025Totale": 157,
      "lat": 48.293237,
      "lon": 4.028933,
      "adresse": "31 Rue Édouard Herriot, 10300 Sainte-Savine",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée des métiers de l'hôtellerie-restauration et de la mode",
      "siteWeb": "https://lycee-edouard-herriot.com/"
    },
    {
      "id": "lpo-les-lombards-troyes",
      "nom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération",
      "type": "Lycée polyvalent industriel, bâtiment, énergie, sciences appliquées",
      "formations": [
        {
          "id": "p1-lombards-alimentation-bio-ind",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de l’alimentation - bio-industries - laboratoire",
          "intitule": "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)",
          "specialites": [
            {
              "nom": "Bac Pro Production en industries pharmaceutiques, alimentaires et cosmétiques (PIPAC)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-production-en-industries-pharmaceutiques-alimentaires-et-cosmetiques"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 12,
            "2024": 12,
            "2023": 5
          },
          "tauxPression2025": 0.8,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-production-en-industries-pharmaceutiques-alimentaires-et-cosmetiques"
        },
        {
          "id": "p1-lombards-construction-durable",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la construction durable, du bâtiment et des travaux publics",
          "intitule": "Bac Pro Aménagement et finition du bâtiment (AFB)",
          "specialites": [
            {
              "nom": "Bac Pro Aménagement et finition du bâtiment (AFB)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-amenagement-et-finition-du-batiment"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 23,
            "2024": 17,
            "2023": 22
          },
          "tauxPression2025": 1.53,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-amenagement-et-finition-du-batiment"
        },
        {
          "id": "p1-lombards-pilotage-maintenance",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers du pilotage et de la maintenance d’installations automatisées",
          "intitule": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
          "specialites": [
            {
              "nom": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 10,
            "2024": 15,
            "2023": 7
          },
          "tauxPression2025": 0.67,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes"
        },
        {
          "id": "p1-lombards-agencement-menuiserie",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de l’agencement, de la menuiserie et de l’ameublement",
          "intitule": "Bac Pro Technicien menuisier agenceur (TMA)",
          "specialites": [
            {
              "nom": "Bac Pro Technicien menuisier agenceur (TMA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-menuisier-agenceur"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 19,
            "2024": 15,
            "2023": 11
          },
          "tauxPression2025": 1.27,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-menuisier-agenceur"
        },
        {
          "id": "p1-lombards-etudes-modelisation",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des études et de la modélisation numérique du bâtiment",
          "intitule": "Bac Pro Technicien d'études du bâtiment (TEB - Option A : Études et économie)",
          "specialites": [
            {
              "nom": "Bac Pro Technicien d'études du bâtiment (Option A : études et économie)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-a-etudes-et-economie"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 10,
            "2024": 16,
            "2023": 16
          },
          "tauxPression2025": 0.67,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-a-etudes-et-economie"
        },
        {
          "id": "p1-lombards-transitions-num-energ",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des transitions numérique et énergétique (MTNE)",
          "intitule": "Bacs Pros Transitions numérique et énergétique (ICCER, MEE, MELEC, CIEL)",
          "specialites": [
            {
              "nom": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique"
            },
            {
              "nom": "Bac Pro Métiers de l'électricité et de ses environnements connectés (MELEC)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
            },
            {
              "nom": "Bac Pro Installateur en chauffage, climatisation et énergies renouvelables (ICCER)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-installateur-en-chauffage-climatisation-et-energies-renouvelables"
            },
            {
              "nom": "Bac Pro Maintenance et efficacité énergétique (MEE)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-et-efficacite-energetique2"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 84,
          "demandes": {
            "2025": 83,
            "2024": 94,
            "2023": 93
          },
          "tauxPression2025": 0.99,
          "remarques": "Pôle d'excellence regroupant 4 spécialités majeures du numérique, de l'énergie et du génie climatique.",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-des-transitions-numerique-et-energetique"
        },
        {
          "id": "p2-lombards-platre-isolation",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Métiers du plâtre et de l’isolation",
          "specialites": [
            {
              "nom": "CAP Métiers du plâtre et de l'isolation",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-metiers-du-platre-et-de-l-isolation"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 17,
            "2024": 19,
            "2023": 11
          },
          "tauxPression2025": 1.13,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-metiers-du-platre-et-de-l-isolation"
        },
        {
          "id": "p2-lombards-peintre-applicateur",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Peintre applicateur de revêtements",
          "specialites": [
            {
              "nom": "CAP Peintre applicateur de revêtements",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-peintre-applicateur-de-revetements"
            }
          ],
          "etablissementId": "lpo-les-lombards-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 18,
            "2024": 16,
            "2023": 19
          },
          "tauxPression2025": 1.2,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Les Lombards",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-peintre-applicateur-de-revetements"
        }
      ],
      "formationsCount": 8,
      "capaciteTotale": 189,
      "demandes2025Totale": 192,
      "lat": 48.277602,
      "lon": 4.068305,
      "adresse": "14 Avenue des Lombards, 10000 Troyes",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée polyvalent industriel, génie énergétique, BTP, bois et bio-industries",
      "siteWeb": "https://lyc-les-lombards.monbureaunumerique.fr/"
    },
    {
      "id": "lp-gabriel-voisin-troyes",
      "nom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération",
      "type": "Lycée des métiers de l'automobile, du transport et de la relation client",
      "formations": [
        {
          "id": "p1-voisin-maintenance-vehicules",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la maintenance des matériels et des véhicules",
          "intitule": "Bac Pro Maintenance des véhicules (Option A : voitures particulières)",
          "specialites": [
            {
              "nom": "Bac Pro Maintenance des véhicules (Option A : voitures particulières)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-legers"
            }
          ],
          "etablissementId": "lp-gabriel-voisin-troyes",
          "capacite": 30,
          "demandes": {
            "2025": 33,
            "2024": 39,
            "2023": 34
          },
          "tauxPression2025": 1.1,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Gabriel Voisin",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-legers"
        },
        {
          "id": "p1-voisin-carrossier-peintre",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Carrossier peintre automobile",
          "specialites": [
            {
              "nom": "Bac Pro Carrossier peintre automobile",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-carrossier-peintre-automobile"
            }
          ],
          "etablissementId": "lp-gabriel-voisin-troyes",
          "capacite": 20,
          "demandes": {
            "2025": 11,
            "2024": 7,
            "2023": 13
          },
          "tauxPression2025": 0.55,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Gabriel Voisin",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-carrossier-peintre-automobile"
        },
        {
          "id": "p1-voisin-relation-client",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la relation client (MRC)",
          "intitule": "Bacs Pros Métiers du commerce et de la vente (Options A & B) & Métiers de l'accueil",
          "specialites": [
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
            },
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
            },
            {
              "nom": "Bac Pro Métiers de l'accueil",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-accueil"
            }
          ],
          "etablissementId": "lp-gabriel-voisin-troyes",
          "capacite": 72,
          "demandes": {
            "2025": 31,
            "2024": 39,
            "2023": 22
          },
          "tauxPression2025": 0.43,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Gabriel Voisin",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-relation-client"
        },
        {
          "id": "p2-voisin-equipier-commerce",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Équipier polyvalent du commerce (EPC)",
          "specialites": [
            {
              "nom": "CAP Équipier polyvalent du commerce",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
            }
          ],
          "etablissementId": "lp-gabriel-voisin-troyes",
          "capacite": 30,
          "demandes": {
            "2025": 39,
            "2024": 28,
            "2023": 27
          },
          "tauxPression2025": 1.3,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Gabriel Voisin",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
        },
        {
          "id": "p2-voisin-maintenance-vl",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Maintenance des véhicules : véhicules légers",
          "specialites": [
            {
              "nom": "CAP Maintenance des véhicules : véhicules légers",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-maintenance-des-vehicules-option-vehicules-legers"
            }
          ],
          "etablissementId": "lp-gabriel-voisin-troyes",
          "capacite": 10,
          "demandes": {
            "2025": 22,
            "2024": 31,
            "2023": 32
          },
          "tauxPression2025": 2.2,
          "remarques": "Forte demande (taux de pression 2.20 en 2025).",
          "etablissementNom": "Lycée Professionnel Gabriel Voisin",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-maintenance-des-vehicules-option-vehicules-legers"
        },
        {
          "id": "p2-voisin-peintre-auto",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Peintre automobile",
          "specialites": [
            {
              "nom": "CAP Peintre automobile",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-peintre-automobile"
            }
          ],
          "etablissementId": "lp-gabriel-voisin-troyes",
          "capacite": 20,
          "demandes": {
            "2025": 14,
            "2024": 11,
            "2023": 7
          },
          "tauxPression2025": 0.7,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Gabriel Voisin",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-peintre-automobile"
        }
      ],
      "formationsCount": 6,
      "capaciteTotale": 182,
      "demandes2025Totale": 150,
      "lat": 48.315364,
      "lon": 4.072164,
      "adresse": "Chemin de l'Arquebuse / 1 Rue Marie Curie, 10000 Troyes",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée des métiers de l'automobile, transport et relation client",
      "siteWeb": "https://lyc-voisin.monbureaunumerique.fr/"
    },
    {
      "id": "lpo-marie-de-champagne-troyes",
      "nom": "Lycée Polyvalent Marie de Champagne",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération",
      "type": "Lycée polyvalent santé-social, tertiaire, gestion, relation client",
      "formations": [
        {
          "id": "p1-marie-champagne-assp",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
          "specialites": [
            {
              "nom": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne"
            }
          ],
          "etablissementId": "lpo-marie-de-champagne-troyes",
          "capacite": 48,
          "demandes": {
            "2025": 81,
            "2024": 83,
            "2023": 71
          },
          "tauxPression2025": 1.69,
          "remarques": "Filière très demandée (taux de pression 1.69 en 2025).",
          "etablissementNom": "Lycée Polyvalent Marie de Champagne",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne"
        },
        {
          "id": "p1-marie-champagne-aepa",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Animation-enfance et personnes âgées (AEPA)",
          "specialites": [
            {
              "nom": "Bac Pro Animation-enfance et personnes âgées (AEPA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-animation-enfance-et-personnes-agees"
            }
          ],
          "etablissementId": "lpo-marie-de-champagne-troyes",
          "capacite": 20,
          "demandes": {
            "2025": 36,
            "2024": 25,
            "2023": null
          },
          "tauxPression2025": 1.8,
          "remarques": "Filière sélective et attractive (taux de pression 1.80 en 2025).",
          "etablissementNom": "Lycée Polyvalent Marie de Champagne",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-animation-enfance-et-personnes-agees"
        },
        {
          "id": "p1-marie-champagne-relation-client",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la relation client (MRC)",
          "intitule": "Bac Pro Métiers du Commerce et de la Vente (Options A et B)",
          "specialites": [
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
            },
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
            }
          ],
          "etablissementId": "lpo-marie-de-champagne-troyes",
          "capacite": 36,
          "demandes": {
            "2025": 124,
            "2024": 135,
            "2023": 144
          },
          "tauxPression2025": 3.44,
          "remarques": "Très forte attractivité historique (taux de pression > 3.44 en 2025).",
          "etablissementNom": "Lycée Polyvalent Marie de Champagne",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-relation-client"
        },
        {
          "id": "p1-marie-champagne-gestion-admin",
          "pagePdf": 1,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
          "intitule": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
          "specialites": [
            {
              "nom": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
            }
          ],
          "etablissementId": "lpo-marie-de-champagne-troyes",
          "capacite": 56,
          "demandes": {
            "2025": 40,
            "2024": 51,
            "2023": 47
          },
          "tauxPression2025": 0.71,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Marie de Champagne",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
        },
        {
          "id": "p2-marie-champagne-aepe",
          "pagePdf": 2,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Accompagnant éducatif petite enfance (AEPE)",
          "specialites": [
            {
              "nom": "CAP Accompagnant éducatif petite enfance",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-accompagnant-educatif-petite-enfance"
            }
          ],
          "etablissementId": "lpo-marie-de-champagne-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 41,
            "2024": 51,
            "2023": 55
          },
          "tauxPression2025": 2.73,
          "remarques": "Priorité accordée aux élèves issus de 3ème générale, 3ème Prépa-Métiers et 3ème de l’enseignement agricole. Taux de pression élevé (2.73 en 2025).",
          "etablissementNom": "Lycée Polyvalent Marie de Champagne",
          "commune": "Troyes",
          "statut": "Public",
          "secteur": "public",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-accompagnant-educatif-petite-enfance"
        }
      ],
      "formationsCount": 5,
      "capaciteTotale": 175,
      "demandes2025Totale": 322,
      "lat": 48.305979,
      "lon": 4.063259,
      "adresse": "30 Rue de la Reine Blanche, 10000 Troyes",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée polyvalent santé-social, petite enfance, tertiaire et relation client",
      "siteWeb": "https://lyc-marie-de-champagne.monbureaunumerique.fr/"
    },
    {
      "id": "lp-denis-diderot-romilly",
      "nom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération",
      "type": "Lycée professionnel métiers de la sécurité, industrie, bois, tertiaire",
      "formations": [
        {
          "id": "p3-diderot-relation-client",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la relation client (MRC)",
          "intitule": "Bac Pro Métiers du commerce et de la vente",
          "specialites": [
            {
              "nom": "Bac Pro Métiers du commerce et de la vente",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 36,
          "demandes": {
            "2025": 37,
            "2024": 46,
            "2023": 59
          },
          "tauxPression2025": 1.03,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
        },
        {
          "id": "p3-diderot-gestion-admin",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
          "intitule": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
          "specialites": [
            {
              "nom": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 36,
          "demandes": {
            "2025": 7,
            "2024": 11,
            "2023": 16
          },
          "tauxPression2025": 0.19,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
        },
        {
          "id": "p3-diderot-pilotage-maintenance",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers du pilotage et de la maintenance d’installations automatisées",
          "intitule": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
          "specialites": [
            {
              "nom": "Bac Pro Maintenance des systèmes de production connectés (MSPC)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 15,
          "demandes": {
            "2025": 15,
            "2024": 17,
            "2023": 6
          },
          "tauxPression2025": 1.0,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-systemes-de-production-connectes"
        },
        {
          "id": "p3-diderot-securite",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Métiers de la sécurité",
          "specialites": [
            {
              "nom": "Bac Pro Métiers de la sécurité",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 18,
          "demandes": {
            "2025": 41,
            "2024": 46,
            "2023": 53
          },
          "tauxPression2025": 2.28,
          "remarques": "Filière très demandée (taux de pression 2.28 en 2025).",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite"
        },
        {
          "id": "p4-diderot-ebeniste",
          "pagePdf": 4,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Ébéniste",
          "specialites": [
            {
              "nom": "CAP Ébéniste",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-ebeniste"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 24,
          "demandes": {
            "2025": 21,
            "2024": 16,
            "2023": 16
          },
          "tauxPression2025": 0.88,
          "remarques": "Priorité accordée aux élèves de 3ème générale, 3ème Prépa-Métiers et 3ème de l’enseignement agricole.",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-ebeniste"
        },
        {
          "id": "p4-diderot-equipier-commerce",
          "pagePdf": 4,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Équipier polyvalent du commerce (EPC)",
          "specialites": [
            {
              "nom": "CAP Équipier polyvalent du commerce",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 15,
          "demandes": {
            "2025": 29,
            "2024": 17,
            "2023": 21
          },
          "tauxPression2025": 1.93,
          "remarques": "Taux de pression 1.93 en 2025.",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
        },
        {
          "id": "p4-diderot-metallier",
          "pagePdf": 4,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Métallier",
          "specialites": [
            {
              "nom": "CAP Métallier",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-metallier"
            }
          ],
          "etablissementId": "lp-denis-diderot-romilly",
          "capacite": 15,
          "demandes": {
            "2025": 17,
            "2024": 11,
            "2023": 15
          },
          "tauxPression2025": 1.13,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Denis Diderot",
          "commune": "Romilly-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-metallier"
        }
      ],
      "formationsCount": 7,
      "capaciteTotale": 159,
      "demandes2025Totale": 167,
      "lat": 48.517793,
      "lon": 3.71658,
      "adresse": "Allée Montesquieu / 64 Rue Paul Cézanne, 10100 Romilly-sur-Seine",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée professionnel métiers de la sécurité, ébénisterie, métallerie, industrie et commerce",
      "siteWeb": "https://lpdiderot10.fr/"
    },
    {
      "id": "lp-val-more-bar-sur-seine",
      "nom": "Lycée Professionnel du Val Moré",
      "commune": "Bar-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération",
      "type": "Lycée des métiers de la maintenance (agricole, TP, moto, PL) et du transport routier",
      "formations": [
        {
          "id": "p3-val-more-transport-routier",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Conducteur transport routier marchandises (CTRM)",
          "specialites": [
            {
              "nom": "Bac Pro Conducteur transport routier marchandises (CTRM)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conducteur-routier-de-marchandises"
            }
          ],
          "etablissementId": "lp-val-more-bar-sur-seine",
          "capacite": 24,
          "demandes": {
            "2025": 54,
            "2024": 36,
            "2023": 48
          },
          "tauxPression2025": 2.25,
          "remarques": "Filière très attractive (taux de pression 2.25 en 2025).",
          "etablissementNom": "Lycée Professionnel du Val Moré",
          "commune": "Bar-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conducteur-routier-de-marchandises"
        },
        {
          "id": "p3-val-more-maintenance-mat-veh",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la maintenance des matériels et des véhicules",
          "intitule": "Bacs Pros Maintenance des matériels & Maintenance des véhicules",
          "specialites": [
            {
              "nom": "Bac Pro Maintenance des matériels (Options Agricoles, Travaux publics, Espaces verts)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-materiels-option-a-materiels-agricoles"
            },
            {
              "nom": "Bac Pro Maintenance des véhicules (Options Véhicules de transport routier & Motocycles)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-maintenance-des-vehicules-option-vehicules-de-transport-routier"
            }
          ],
          "etablissementId": "lp-val-more-bar-sur-seine",
          "capacite": 72,
          "demandes": {
            "2025": 57,
            "2024": 48,
            "2023": 55
          },
          "tauxPression2025": 0.79,
          "remarques": "Pôle de référence départemental pour la maintenance agricole, travaux publics, poids lourds et motos.",
          "etablissementNom": "Lycée Professionnel du Val Moré",
          "commune": "Bar-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-maintenance-des-materiels-et-des-vehicules"
        },
        {
          "id": "p4-val-more-op-service-livraison",
          "pagePdf": 4,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Opérateur de service - relation client et livraison",
          "specialites": [
            {
              "nom": "CAP Opérateur de service - relation client et livraison",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-operateur-operatrice-de-service-relation-client-et-livraison"
            }
          ],
          "etablissementId": "lp-val-more-bar-sur-seine",
          "capacite": 14,
          "demandes": {
            "2025": 15,
            "2024": 13,
            "2023": null
          },
          "tauxPression2025": 1.07,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel du Val Moré",
          "commune": "Bar-sur-Seine",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-operateur-operatrice-de-service-relation-client-et-livraison"
        }
      ],
      "formationsCount": 3,
      "capaciteTotale": 110,
      "demandes2025Totale": 126,
      "lat": 48.111006,
      "lon": 4.388118,
      "adresse": "Rue du Val Moré, 10110 Bar-sur-Seine",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée des métiers de la maintenance (agricole, TP, moto, PL) et transport routier (CTRM)",
      "siteWeb": "https://lyc-val-more.monbureaunumerique.fr/"
    },
    {
      "id": "lpo-gaston-bachelard-bar-sur-aube",
      "nom": "Lycée Polyvalent Gaston Bachelard",
      "commune": "Bar-sur-Aube",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération",
      "type": "Lycée polyvalent tertiaire, commerce, transitions numérique et énergétique",
      "formations": [
        {
          "id": "p3-bachelard-relation-client",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la relation client (MRC)",
          "intitule": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
          "specialites": [
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
            }
          ],
          "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
          "capacite": 18,
          "demandes": {
            "2025": 33,
            "2024": 31,
            "2023": 20
          },
          "tauxPression2025": 1.83,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Gaston Bachelard",
          "commune": "Bar-sur-Aube",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
        },
        {
          "id": "p3-bachelard-transitions-num-energ",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des transitions numérique et énergétique (MTNE)",
          "intitule": "Bac Pro Métiers de l'électricité et de ses environnements connectés (MELEC)",
          "specialites": [
            {
              "nom": "Bac Pro Métiers de l'électricité et de ses environnements connectés (MELEC)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
            }
          ],
          "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
          "capacite": 15,
          "demandes": {
            "2025": 13,
            "2024": 13,
            "2023": 11
          },
          "tauxPression2025": 0.87,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Gaston Bachelard",
          "commune": "Bar-sur-Aube",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
        },
        {
          "id": "p4-bachelard-equipier-commerce",
          "pagePdf": 4,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Équipier polyvalent du commerce (EPC)",
          "specialites": [
            {
              "nom": "CAP Équipier polyvalent du commerce",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
            }
          ],
          "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
          "capacite": 15,
          "demandes": {
            "2025": 10,
            "2024": 7,
            "2023": 9
          },
          "tauxPression2025": 0.67,
          "remarques": "",
          "etablissementNom": "Lycée Polyvalent Gaston Bachelard",
          "commune": "Bar-sur-Aube",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
        }
      ],
      "formationsCount": 3,
      "capaciteTotale": 48,
      "demandes2025Totale": 56,
      "lat": 48.228676,
      "lon": 4.705792,
      "adresse": "3 Rue Gaston Bachelard, 10200 Bar-sur-Aube",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée polyvalent électricité connectée (MELEC), commerce et vente",
      "siteWeb": "https://cite-bachelard.monbureaunumerique.fr/"
    },
    {
      "id": "lycee-forestier-crogny-chaource",
      "nom": "Lycée Forestier de Crogny",
      "commune": "Chaource (Les Loges-Margueron / Crogny)",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération",
      "type": "Lycée des métiers de la forêt, de la nature et de l'environnement",
      "formations": [
        {
          "id": "p3-crogny-foret",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la nature – jardin – paysage – forêt",
          "intitule": "Bac Pro Forêt",
          "specialites": [
            {
              "nom": "Bac Pro Forêt",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-foret"
            }
          ],
          "etablissementId": "lycee-forestier-crogny-chaource",
          "capacite": 32,
          "demandes": {
            "2025": 22,
            "2024": 21,
            "2023": 17
          },
          "tauxPression2025": 0.69,
          "remarques": "Établissement forestier emblématique en lisière de forêt de Chaource.",
          "etablissementNom": "Lycée Forestier de Crogny",
          "commune": "Chaource (Les Loges-Margueron / Crogny)",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-foret"
        },
        {
          "id": "p4-crogny-capa-travaux-forestiers",
          "pagePdf": 4,
          "typeDiplome": "CAPA",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAPA Travaux forestiers",
          "specialites": [
            {
              "nom": "CAPA Travaux forestiers",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/capa-travaux-forestiers"
            }
          ],
          "etablissementId": "lycee-forestier-crogny-chaource",
          "capacite": 19,
          "demandes": {
            "2025": 12,
            "2024": 5,
            "2023": 12
          },
          "tauxPression2025": 0.63,
          "remarques": "",
          "etablissementNom": "Lycée Forestier de Crogny",
          "commune": "Chaource (Les Loges-Margueron / Crogny)",
          "statut": "Public",
          "secteur": "public",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/capa-travaux-forestiers"
        }
      ],
      "formationsCount": 2,
      "capaciteTotale": 51,
      "demandes2025Totale": 34,
      "lat": 48.083002,
      "lon": 4.098398,
      "adresse": "Hameau de Crogny, 10210 Les Loges-Margueron (Chaource)",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée des métiers de la forêt, de la gestion sylvicole et des travaux forestiers",
      "siteWeb": "https://campusterresdelaube.fr/presentation-du-campus/lycee-de-crogny"
    },
    {
      "id": "lycee-agricole-charles-baltet-st-pouange",
      "nom": "Lycée Agricole Charles Baltet",
      "commune": "Saint-Pouange",
      "statut": "Public agricole",
      "secteur": "public",
      "zone": "Troyes et agglomération (Péri-urbain)",
      "type": "Établissement public local d'enseignement agricole (EPLEFPA)",
      "formations": [
        {
          "id": "p3-baltet-productions-agricoles",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des productions (Agricoles)",
          "intitule": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
          "specialites": [
            {
              "nom": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-agricole"
            }
          ],
          "etablissementId": "lycee-agricole-charles-baltet-st-pouange",
          "capacite": 50,
          "demandes": {
            "2025": 26,
            "2024": 49,
            "2023": 53
          },
          "tauxPression2025": 0.52,
          "remarques": "Lycée public agricole de référence de l'Aube.",
          "etablissementNom": "Lycée Agricole Charles Baltet",
          "commune": "Saint-Pouange",
          "statut": "Public agricole",
          "secteur": "public",
          "zone": "Troyes et agglomération (Péri-urbain)",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-agricole"
        },
        {
          "id": "p3-baltet-sapat",
          "pagePdf": 3,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
          "specialites": [
            {
              "nom": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires"
            }
          ],
          "etablissementId": "lycee-agricole-charles-baltet-st-pouange",
          "capacite": 32,
          "demandes": {
            "2025": 28,
            "2024": 26,
            "2023": 20
          },
          "tauxPression2025": 0.88,
          "remarques": "",
          "etablissementNom": "Lycée Agricole Charles Baltet",
          "commune": "Saint-Pouange",
          "statut": "Public agricole",
          "secteur": "public",
          "zone": "Troyes et agglomération (Péri-urbain)",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires"
        }
      ],
      "formationsCount": 2,
      "capaciteTotale": 82,
      "demandes2025Totale": 54,
      "lat": 48.237355,
      "lon": 4.049272,
      "adresse": "D 109 / Route de Villy-le-Maréchal, 10120 Saint-Pouange",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée public agricole : grandes cultures, élevage (CGEA) et services aux personnes (SAPAT)",
      "siteWeb": "https://campusterresdelaube.fr/presentation-du-campus/lycee-charles-baltet"
    },
    {
      "id": "lycee-agricole-sainte-maure",
      "nom": "Lycée Agricole Privé Sainte-Maure",
      "commune": "Sainte-Maure",
      "statut": "Privé agricole sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération (Péri-urbain)",
      "type": "Lycée agricole privé (CNEAP) grandes cultures, élevage, filière équine, nature",
      "formations": [
        {
          "id": "p5-sainte-maure-productions",
          "pagePdf": 5,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des productions (Agricoles & Équines)",
          "intitule": "Bacs Pros Agricoles : CGEA (Grandes cultures / Élevage) & CGEH (Entreprise hippique)",
          "specialites": [
            {
              "nom": "Bac Pro Conduite et gestion de l'entreprise agricole (CGEA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-agricole"
            },
            {
              "nom": "Bac Pro Conduite et gestion de l'entreprise hippique (CGEH)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-conduite-et-gestion-de-l-entreprise-hippique"
            }
          ],
          "etablissementId": "lycee-agricole-sainte-maure",
          "capacite": 50,
          "demandes": {
            "2025": 20,
            "2024": 18,
            "2023": null
          },
          "tauxPression2025": 0.4,
          "remarques": "Spécificité équestre et agricole sur vaste domaine d'apprentissage.",
          "etablissementNom": "Lycée Agricole Privé Sainte-Maure",
          "commune": "Sainte-Maure",
          "statut": "Privé agricole sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération (Péri-urbain)",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-productions"
        },
        {
          "id": "p5-sainte-maure-nature-faune",
          "pagePdf": 5,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la nature - jardin - paysage - forêt",
          "intitule": "Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
          "specialites": [
            {
              "nom": "Bac Pro Gestion des milieux naturels et de la faune (GMNF)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-gestion-des-milieux-naturels-et-de-la-faune"
            }
          ],
          "etablissementId": "lycee-agricole-sainte-maure",
          "capacite": 28,
          "demandes": {
            "2025": 16,
            "2024": 10,
            "2023": null
          },
          "tauxPression2025": 0.57,
          "remarques": "",
          "etablissementNom": "Lycée Agricole Privé Sainte-Maure",
          "commune": "Sainte-Maure",
          "statut": "Privé agricole sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération (Péri-urbain)",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-gestion-des-milieux-naturels-et-de-la-faune"
        }
      ],
      "formationsCount": 2,
      "capaciteTotale": 78,
      "demandes2025Totale": 36,
      "lat": 48.334285,
      "lon": 4.078152,
      "adresse": "1 Route de Méry, 10150 Sainte-Maure",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée agricole privé : grandes cultures, polyculture-élevage, filière équine et nature/faune",
      "siteWeb": "https://www.lyceesaintemaure.fr/"
    },
    {
      "id": "lycee-prive-cordeliers-arcis",
      "nom": "Lycée Privé des Cordeliers",
      "commune": "Arcis-sur-Aube",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Hors Troyes et agglomération",
      "type": "Lycée privé rural services aux personnes, conseil-vente en alimentation",
      "formations": [
        {
          "id": "p5-cordeliers-sapat",
          "pagePdf": 5,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
          "specialites": [
            {
              "nom": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires"
            }
          ],
          "etablissementId": "lycee-prive-cordeliers-arcis",
          "capacite": 24,
          "demandes": {
            "2025": 16,
            "2024": 14,
            "2023": null
          },
          "tauxPression2025": 0.67,
          "remarques": "",
          "etablissementNom": "Lycée Privé des Cordeliers",
          "commune": "Arcis-sur-Aube",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-services-aux-personnes-et-animation-dans-les-territoires"
        },
        {
          "id": "p5-cordeliers-conseil-vente",
          "pagePdf": 5,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers du conseil-vente (Alimentation)",
          "intitule": "Bac Pro Technicien conseil-vente en alimentation",
          "specialites": [
            {
              "nom": "Bac Pro Technicien conseil-vente en alimentation (produits alimentaires et boissons)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-conseil-vente-en-alimentation-produits-alimentaires-et-boissons"
            }
          ],
          "etablissementId": "lycee-prive-cordeliers-arcis",
          "capacite": 24,
          "demandes": {
            "2025": 0,
            "2024": 5,
            "2023": null
          },
          "tauxPression2025": 0.0,
          "remarques": "",
          "etablissementNom": "Lycée Privé des Cordeliers",
          "commune": "Arcis-sur-Aube",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-conseil-vente-en-alimentation-produits-alimentaires-et-boissons"
        },
        {
          "id": "p5-cordeliers-capa-sapver",
          "pagePdf": 5,
          "typeDiplome": "CAPA",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAPA Services aux personnes et vente en espace rural (SAPVER)",
          "specialites": [
            {
              "nom": "CAPA Services aux personnes et vente en espace rural",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/capa-services-aux-personnes-et-vente-en-espace-rural"
            }
          ],
          "etablissementId": "lycee-prive-cordeliers-arcis",
          "capacite": 24,
          "demandes": {
            "2025": 12,
            "2024": 10,
            "2023": null
          },
          "tauxPression2025": 0.5,
          "remarques": "",
          "etablissementNom": "Lycée Privé des Cordeliers",
          "commune": "Arcis-sur-Aube",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Hors Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/capa-services-aux-personnes-et-vente-en-espace-rural"
        }
      ],
      "formationsCount": 3,
      "capaciteTotale": 72,
      "demandes2025Totale": 28,
      "lat": 48.534964,
      "lon": 4.140388,
      "adresse": "6 Rue des Cordeliers, 10700 Arcis-sur-Aube",
      "zoneCarte": "Aube",
      "descriptionCourte": "Lycée privé rural : services aux personnes (SAPAT/SAPVER) et conseil-vente alimentation",
      "siteWeb": "https://lescordeliers.fr/"
    },
    {
      "id": "lp-la-salle-troyes",
      "nom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération",
      "type": "Lycée professionnel privé numérique, énergie, architecture, communication visuelle, beauté",
      "formations": [
        {
          "id": "p6-la-salle-artisanat-art",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Artisanat et métiers d’art, option communication visuelle plurimédia",
          "specialites": [
            {
              "nom": "Bac Pro Artisanat et métiers d'art (option communication visuelle plurimédia)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-artisanat-et-metiers-d-art-option-communication-visuelle-plurimedia"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 26,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 1.73,
          "remarques": "Taux de pression 1.73 en 2025.",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-artisanat-et-metiers-d-art-option-communication-visuelle-plurimedia"
        },
        {
          "id": "p6-la-salle-agora",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
          "intitule": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
          "specialites": [
            {
              "nom": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 18,
          "demandes": {
            "2025": 7,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.39,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
        },
        {
          "id": "p6-la-salle-beaute-bien-etre",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la beauté et du bien-être",
          "intitule": "Bac Pro Esthétique cosmétique parfumerie",
          "specialites": [
            {
              "nom": "Bac Pro Esthétique cosmétique parfumerie",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-esthetique-cosmetique-parfumerie"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 20,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 1.33,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-esthetique-cosmetique-parfumerie"
        },
        {
          "id": "p6-la-salle-agencement",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de l’agencement, de la menuiserie et de l’ameublement",
          "intitule": "Bac Pro Études et réalisation d'agencement (ERA)",
          "specialites": [
            {
              "nom": "Bac Pro Étude et réalisation d'agencement (ERA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-etude-et-realisation-d-agencement"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 14,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.93,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-etude-et-realisation-d-agencement"
        },
        {
          "id": "p6-la-salle-relation-client",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la relation client (MRC)",
          "intitule": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
          "specialites": [
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option B : prospection clientèle et valorisation de l'offre commerciale)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 24,
          "demandes": {
            "2025": 20,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.83,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-b-prospection-clientele-et-valorisation-de-l-offre-commerciale"
        },
        {
          "id": "p6-la-salle-transitions-num-energ",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des transitions numérique et énergétique (MTNE)",
          "intitule": "Bacs Pros Transitions numérique et énergétique (CIEL, MELEC, MFER)",
          "specialites": [
            {
              "nom": "Bac Pro Cybersécurité, informatique et réseaux, électronique (CIEL)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique"
            },
            {
              "nom": "Bac Pro Métiers de l'électricité et de ses environnements connectés (MELEC)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-electricite-et-de-ses-environnements-connectes"
            },
            {
              "nom": "Bac Pro Métiers du froid et des énergies renouvelables (MFER)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-froid-et-des-energies-renouvelables2"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 60,
          "demandes": {
            "2025": 28,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.47,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-des-transitions-numerique-et-energetique"
        },
        {
          "id": "p6-la-salle-modelisation-batiment",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers des études et de la modélisation numérique du bâtiment",
          "intitule": "Bac Pro Technicien d'études du bâtiment (Option B : Assistant en architecture)",
          "specialites": [
            {
              "nom": "Bac Pro Technicien d'études du bâtiment (Option B : assistant en architecture)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-b-assistant-en-architecture"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 12,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.8,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-technicien-d-etudes-du-batiment-option-b-assistant-en-architecture"
        },
        {
          "id": "p6-la-salle-cap-electricien",
          "pagePdf": 6,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Électricien",
          "specialites": [
            {
              "nom": "CAP Électricien",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-electricien"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 3,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.2,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-electricien"
        },
        {
          "id": "p6-la-salle-cap-thermique",
          "pagePdf": 6,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Monteur en installations thermiques",
          "specialites": [
            {
              "nom": "CAP Monteur en installations thermiques",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-monteur-en-installations-thermiques"
            }
          ],
          "etablissementId": "lp-la-salle-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 2,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.13,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-monteur-en-installations-thermiques"
        }
      ],
      "formationsCount": 9,
      "capaciteTotale": 192,
      "demandes2025Totale": 132,
      "lat": 48.29472,
      "lon": 4.072789,
      "adresse": "11 Rue de la Trinité, 10000 Troyes",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée professionnel privé numérique, architecture, communication visuelle et beauté",
      "siteWeb": "https://lasalle-troyes.fr/"
    },
    {
      "id": "lp-jeanne-mance-troyes",
      "nom": "Lycée Professionnel Jeanne Mance",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération",
      "type": "Lycée professionnel privé sécurité, santé-social, grand âge, logistique",
      "formations": [
        {
          "id": "p6-mance-assp",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
          "specialites": [
            {
              "nom": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne"
            }
          ],
          "etablissementId": "lp-jeanne-mance-troyes",
          "capacite": 30,
          "demandes": {
            "2025": 25,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.83,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Jeanne Mance",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-accompagnement-soins-et-services-a-la-personne"
        },
        {
          "id": "p6-mance-logistique",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
          "intitule": "Bac Pro Logistique",
          "specialites": [
            {
              "nom": "Bac Pro Métiers de la logistique",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-logistique"
            }
          ],
          "etablissementId": "lp-jeanne-mance-troyes",
          "capacite": 18,
          "demandes": {
            "2025": 8,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.44,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Jeanne Mance",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-logistique"
        },
        {
          "id": "p6-mance-securite",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "Bac Pro Métiers de la sécurité",
          "specialites": [
            {
              "nom": "Bac Pro Métiers de la sécurité",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite"
            }
          ],
          "etablissementId": "lp-jeanne-mance-troyes",
          "capacite": 30,
          "demandes": {
            "2025": 35,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 1.17,
          "remarques": "Taux de pression 1.17 en 2025.",
          "etablissementNom": "Lycée Professionnel Jeanne Mance",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite"
        },
        {
          "id": "p6-mance-cap-grand-age",
          "pagePdf": 6,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Agent accompagnant au grand âge (2AGA)",
          "specialites": [
            {
              "nom": "CAP Agent accompagnant au grand âge",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-agent-accompagnant-au-grand-age"
            }
          ],
          "etablissementId": "lp-jeanne-mance-troyes",
          "capacite": 30,
          "demandes": {
            "2025": 10,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.33,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Jeanne Mance",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-agent-accompagnant-au-grand-age"
        },
        {
          "id": "p6-mance-cap-operateur-logistique",
          "pagePdf": 6,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Opérateur/opératrice logistique",
          "specialites": [
            {
              "nom": "CAP Opérateur/opératrice logistique",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-operateur-operatrice-logistique"
            }
          ],
          "etablissementId": "lp-jeanne-mance-troyes",
          "capacite": 12,
          "demandes": {
            "2025": 3,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.25,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Jeanne Mance",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-operateur-operatrice-logistique"
        }
      ],
      "formationsCount": 5,
      "capaciteTotale": 120,
      "demandes2025Totale": 81,
      "lat": 48.290802,
      "lon": 4.066152,
      "adresse": "Impasse Saint-Martin / 42 Rue Jeanne Mance, 10000 Troyes",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée professionnel privé métiers de la sécurité, grand âge, santé-social et logistique",
      "siteWeb": "https://lycee-jeanne-mance.fr/"
    },
    {
      "id": "lp-leonie-aviat-troyes",
      "nom": "Lycée Professionnel Léonie Aviat",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération",
      "type": "Lycée professionnel privé tertiaire, accueil, commerce, fleuriste",
      "formations": [
        {
          "id": "p6-aviat-gestion-admin",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la gestion administrative, du transport et de la logistique (GATL)",
          "intitule": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
          "specialites": [
            {
              "nom": "Bac Pro Assistance à la gestion des organisations et de leurs activités (AGOrA)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
            }
          ],
          "etablissementId": "lp-leonie-aviat-troyes",
          "capacite": 18,
          "demandes": {
            "2025": 3,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.17,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Léonie Aviat",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-assistance-a-la-gestion-des-organisations-et-de-leurs-activites"
        },
        {
          "id": "p6-aviat-relation-client",
          "pagePdf": 6,
          "typeDiplome": "Bac Pro",
          "voieEntree": "2de Pro Famille de métiers",
          "familleMetiers": "Métiers de la relation client (MRC)",
          "intitule": "Bacs Pros Métiers du commerce et de la vente (Option A) & Métiers de l'accueil",
          "specialites": [
            {
              "nom": "Bac Pro Métiers du commerce et de la vente (Option A : animation et gestion de l'espace commercial)",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-du-commerce-et-de-la-vente-option-a-animation-et-gestion-de-l-espace-commercial"
            },
            {
              "nom": "Bac Pro Métiers de l'accueil",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-l-accueil"
            }
          ],
          "etablissementId": "lp-leonie-aviat-troyes",
          "capacite": 54,
          "demandes": {
            "2025": 11,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.2,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Léonie Aviat",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/classe-de-2de-professionnelle-metiers-de-la-relation-client"
        },
        {
          "id": "p6-aviat-cap-equipier-commerce",
          "pagePdf": 6,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Équipier polyvalent du commerce (EPC)",
          "specialites": [
            {
              "nom": "CAP Équipier polyvalent du commerce",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
            }
          ],
          "etablissementId": "lp-leonie-aviat-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 6,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.4,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Léonie Aviat",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-equipier-polyvalent-du-commerce"
        },
        {
          "id": "p6-aviat-cap-fleuriste",
          "pagePdf": 6,
          "typeDiplome": "CAP",
          "voieEntree": "Directe",
          "familleMetiers": null,
          "intitule": "CAP Fleuriste",
          "specialites": [
            {
              "nom": "CAP Fleuriste",
              "url": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-fleuriste"
            }
          ],
          "etablissementId": "lp-leonie-aviat-troyes",
          "capacite": 15,
          "demandes": {
            "2025": 9,
            "2024": null,
            "2023": null
          },
          "tauxPression2025": 0.6,
          "remarques": "",
          "etablissementNom": "Lycée Professionnel Léonie Aviat",
          "commune": "Troyes",
          "statut": "Privé sous contrat",
          "secteur": "prive",
          "zone": "Troyes et agglomération",
          "onisepUrl": "https://www.onisep.fr/ressources/univers-formation/formations/lycees/cap-fleuriste"
        }
      ],
      "formationsCount": 4,
      "capaciteTotale": 102,
      "demandes2025Totale": 29,
      "lat": 48.291565,
      "lon": 4.077871,
      "adresse": "11 Rue des Terrasses, 10000 Troyes",
      "zoneCarte": "Troyes",
      "descriptionCourte": "Lycée professionnel privé tertiaire, accueil, commerce et fleuriste",
      "siteWeb": "https://www.lycee-aviat.com/"
    }
  ],
  "formations": [
    {
      "id": "p1-herriot-couture",
      "pagePdf": 1,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Métiers de la couture et de la confection",
      "specialites": [
        "Bac Pro Métiers de la couture et de la confection"
      ],
      "etablissementId": "lpo-edouard-herriot-sainte-savine",
      "capacite": 30,
      "demandes": {
        "2025": 27,
        "2024": 22,
        "2023": 40
      },
      "tauxPression2025": 0.9,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 58,
        "2024": 69,
        "2023": 67
      },
      "tauxPression2025": 1.21,
      "remarques": "Donne accès en 1ère Pro soit au Bac Pro Cuisine, soit au Bac Pro CSR.",
      "etablissementNom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 12,
        "2024": 12,
        "2023": 5
      },
      "tauxPression2025": 0.8,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 23,
        "2024": 17,
        "2023": 22
      },
      "tauxPression2025": 1.53,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 10,
        "2024": 15,
        "2023": 7
      },
      "tauxPression2025": 0.67,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 19,
        "2024": 15,
        "2023": 11
      },
      "tauxPression2025": 1.27,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 10,
        "2024": 16,
        "2023": 16
      },
      "tauxPression2025": 0.67,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 83,
        "2024": 94,
        "2023": 93
      },
      "tauxPression2025": 0.99,
      "remarques": "Pôle d'excellence regroupant 4 spécialités majeures du numérique, de l'énergie et du génie climatique.",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 33,
        "2024": 39,
        "2023": 34
      },
      "tauxPression2025": 1.1,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p1-voisin-carrossier-peintre",
      "pagePdf": 1,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Carrossier peintre automobile",
      "specialites": [
        "Bac Pro Carrossier peintre automobile"
      ],
      "etablissementId": "lp-gabriel-voisin-troyes",
      "capacite": 20,
      "demandes": {
        "2025": 11,
        "2024": 7,
        "2023": 13
      },
      "tauxPression2025": 0.55,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 31,
        "2024": 39,
        "2023": 22
      },
      "tauxPression2025": 0.43,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p1-marie-champagne-assp",
      "pagePdf": 1,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
      "specialites": [
        "Bac Pro Accompagnement, soins et services à la personne (ASSP)"
      ],
      "etablissementId": "lpo-marie-de-champagne-troyes",
      "capacite": 48,
      "demandes": {
        "2025": 81,
        "2024": 83,
        "2023": 71
      },
      "tauxPression2025": 1.69,
      "remarques": "Filière très demandée (taux de pression 1.69 en 2025).",
      "etablissementNom": "Lycée Polyvalent Marie de Champagne",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p1-marie-champagne-aepa",
      "pagePdf": 1,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Animation-enfance et personnes âgées (AEPA)",
      "specialites": [
        "Bac Pro Animation-enfance et personnes âgées (AEPA)"
      ],
      "etablissementId": "lpo-marie-de-champagne-troyes",
      "capacite": 20,
      "demandes": {
        "2025": 36,
        "2024": 25,
        "2023": null
      },
      "tauxPression2025": 1.8,
      "remarques": "Filière sélective et attractive (taux de pression 1.80 en 2025).",
      "etablissementNom": "Lycée Polyvalent Marie de Champagne",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 124,
        "2024": 135,
        "2023": 144
      },
      "tauxPression2025": 3.44,
      "remarques": "Très forte attractivité historique (taux de pression > 3.44 en 2025).",
      "etablissementNom": "Lycée Polyvalent Marie de Champagne",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 40,
        "2024": 51,
        "2023": 47
      },
      "tauxPression2025": 0.71,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Marie de Champagne",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-lombards-platre-isolation",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Métiers du plâtre et de l’isolation",
      "specialites": [
        "CAP Métiers du plâtre et de l’isolation"
      ],
      "etablissementId": "lpo-les-lombards-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 17,
        "2024": 19,
        "2023": 11
      },
      "tauxPression2025": 1.13,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-lombards-peintre-applicateur",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Peintre applicateur de revêtements",
      "specialites": [
        "CAP Peintre applicateur de revêtements"
      ],
      "etablissementId": "lpo-les-lombards-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 18,
        "2024": 16,
        "2023": 19
      },
      "tauxPression2025": 1.2,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Les Lombards",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-voisin-equipier-commerce",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Équipier polyvalent du commerce (EPC)",
      "specialites": [
        "CAP Équipier polyvalent du commerce"
      ],
      "etablissementId": "lp-gabriel-voisin-troyes",
      "capacite": 30,
      "demandes": {
        "2025": 39,
        "2024": 28,
        "2023": 27
      },
      "tauxPression2025": 1.3,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-voisin-maintenance-vl",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Maintenance des véhicules : véhicules légers",
      "specialites": [
        "CAP Maintenance des véhicules : véhicules légers"
      ],
      "etablissementId": "lp-gabriel-voisin-troyes",
      "capacite": 10,
      "demandes": {
        "2025": 22,
        "2024": 31,
        "2023": 32
      },
      "tauxPression2025": 2.2,
      "remarques": "Forte demande (taux de pression 2.20 en 2025).",
      "etablissementNom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-voisin-peintre-auto",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Peintre automobile",
      "specialites": [
        "CAP Peintre automobile"
      ],
      "etablissementId": "lp-gabriel-voisin-troyes",
      "capacite": 20,
      "demandes": {
        "2025": 14,
        "2024": 11,
        "2023": 7
      },
      "tauxPression2025": 0.7,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Gabriel Voisin",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-marie-champagne-aepe",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Accompagnant éducatif petite enfance (AEPE)",
      "specialites": [
        "CAP Accompagnant éducatif petite enfance"
      ],
      "etablissementId": "lpo-marie-de-champagne-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 41,
        "2024": 51,
        "2023": 55
      },
      "tauxPression2025": 2.73,
      "remarques": "Priorité accordée aux élèves issus de 3ème générale, 3ème Prépa-Métiers et 3ème de l’enseignement agricole. Taux de pression élevé (2.73 en 2025).",
      "etablissementNom": "Lycée Polyvalent Marie de Champagne",
      "commune": "Troyes",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-herriot-hcr",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Commercialisation et services en hôtel-café-restaurant (HCR)",
      "specialites": [
        "CAP Commercialisation et services en hôtel-café-restaurant"
      ],
      "etablissementId": "lpo-edouard-herriot-sainte-savine",
      "capacite": 36,
      "demandes": {
        "2025": 16,
        "2024": 24,
        "2023": 19
      },
      "tauxPression2025": 0.44,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-herriot-cuisine",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Cuisine",
      "specialites": [
        "CAP Cuisine"
      ],
      "etablissementId": "lpo-edouard-herriot-sainte-savine",
      "capacite": 24,
      "demandes": {
        "2025": 32,
        "2024": 37,
        "2023": 26
      },
      "tauxPression2025": 1.33,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-herriot-psr",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Production et service en restaurations (rapide, collective, cafétéria)",
      "specialites": [
        "CAP Production et service en restaurations (rapide, collective, cafétéria)"
      ],
      "etablissementId": "lpo-edouard-herriot-sainte-savine",
      "capacite": 12,
      "demandes": {
        "2025": 11,
        "2024": 12,
        "2023": 12
      },
      "tauxPression2025": 0.92,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p2-herriot-mode-flou",
      "pagePdf": 2,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Métiers de la mode - vêtement flou",
      "specialites": [
        "CAP Métiers de la mode - vêtement flou"
      ],
      "etablissementId": "lpo-edouard-herriot-sainte-savine",
      "capacite": 15,
      "demandes": {
        "2025": 13,
        "2024": 8,
        "2023": 9
      },
      "tauxPression2025": 0.87,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Édouard Herriot",
      "commune": "Sainte-Savine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Troyes et agglomération"
    },
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
      "demandes": {
        "2025": 37,
        "2024": 46,
        "2023": 59
      },
      "tauxPression2025": 1.03,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 7,
        "2024": 11,
        "2023": 16
      },
      "tauxPression2025": 0.19,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 15,
        "2024": 17,
        "2023": 6
      },
      "tauxPression2025": 1.0,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p3-diderot-securite",
      "pagePdf": 3,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Métiers de la sécurité",
      "specialites": [
        "Bac Pro Métiers de la sécurité"
      ],
      "etablissementId": "lp-denis-diderot-romilly",
      "capacite": 18,
      "demandes": {
        "2025": 41,
        "2024": 46,
        "2023": 53
      },
      "tauxPression2025": 2.28,
      "remarques": "Filière très demandée (taux de pression 2.28 en 2025).",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p3-val-more-transport-routier",
      "pagePdf": 3,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Conducteur transport routier marchandises (CTRM)",
      "specialites": [
        "Bac Pro Conducteur transport routier marchandises (CTRM)"
      ],
      "etablissementId": "lp-val-more-bar-sur-seine",
      "capacite": 24,
      "demandes": {
        "2025": 54,
        "2024": 36,
        "2023": 48
      },
      "tauxPression2025": 2.25,
      "remarques": "Filière très attractive (taux de pression 2.25 en 2025).",
      "etablissementNom": "Lycée Professionnel du Val Moré",
      "commune": "Bar-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 57,
        "2024": 48,
        "2023": 55
      },
      "tauxPression2025": 0.79,
      "remarques": "Pôle de référence départemental pour la maintenance agricole, travaux publics, poids lourds et motos.",
      "etablissementNom": "Lycée Professionnel du Val Moré",
      "commune": "Bar-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 33,
        "2024": 31,
        "2023": 20
      },
      "tauxPression2025": 1.83,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Gaston Bachelard",
      "commune": "Bar-sur-Aube",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 13,
        "2024": 13,
        "2023": 11
      },
      "tauxPression2025": 0.87,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Gaston Bachelard",
      "commune": "Bar-sur-Aube",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 22,
        "2024": 21,
        "2023": 17
      },
      "tauxPression2025": 0.69,
      "remarques": "Établissement forestier emblématique en lisière de forêt de Chaource.",
      "etablissementNom": "Lycée Forestier de Crogny",
      "commune": "Chaource (Les Loges-Margueron / Crogny)",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 26,
        "2024": 49,
        "2023": 53
      },
      "tauxPression2025": 0.52,
      "remarques": "Lycée public agricole de référence de l'Aube.",
      "etablissementNom": "Lycée Agricole Charles Baltet",
      "commune": "Saint-Pouange",
      "statut": "Public agricole",
      "secteur": "public",
      "zone": "Troyes et agglomération (Péri-urbain)"
    },
    {
      "id": "p3-baltet-sapat",
      "pagePdf": 3,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
      "specialites": [
        "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)"
      ],
      "etablissementId": "lycee-agricole-charles-baltet-st-pouange",
      "capacite": 32,
      "demandes": {
        "2025": 28,
        "2024": 26,
        "2023": 20
      },
      "tauxPression2025": 0.88,
      "remarques": "",
      "etablissementNom": "Lycée Agricole Charles Baltet",
      "commune": "Saint-Pouange",
      "statut": "Public agricole",
      "secteur": "public",
      "zone": "Troyes et agglomération (Péri-urbain)"
    },
    {
      "id": "p4-diderot-ebeniste",
      "pagePdf": 4,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Ébéniste",
      "specialites": [
        "CAP Ébéniste"
      ],
      "etablissementId": "lp-denis-diderot-romilly",
      "capacite": 24,
      "demandes": {
        "2025": 21,
        "2024": 16,
        "2023": 16
      },
      "tauxPression2025": 0.88,
      "remarques": "Priorité accordée aux élèves de 3ème générale, 3ème Prépa-Métiers et 3ème de l’enseignement agricole.",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p4-diderot-equipier-commerce",
      "pagePdf": 4,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Équipier polyvalent du commerce (EPC)",
      "specialites": [
        "CAP Équipier polyvalent du commerce"
      ],
      "etablissementId": "lp-denis-diderot-romilly",
      "capacite": 15,
      "demandes": {
        "2025": 29,
        "2024": 17,
        "2023": 21
      },
      "tauxPression2025": 1.93,
      "remarques": "Taux de pression 1.93 en 2025.",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p4-diderot-metallier",
      "pagePdf": 4,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Métallier",
      "specialites": [
        "CAP Métallier"
      ],
      "etablissementId": "lp-denis-diderot-romilly",
      "capacite": 15,
      "demandes": {
        "2025": 17,
        "2024": 11,
        "2023": 15
      },
      "tauxPression2025": 1.13,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Denis Diderot",
      "commune": "Romilly-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p4-val-more-op-service-livraison",
      "pagePdf": 4,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Opérateur de service - relation client et livraison",
      "specialites": [
        "CAP Opérateur de service - relation client et livraison"
      ],
      "etablissementId": "lp-val-more-bar-sur-seine",
      "capacite": 14,
      "demandes": {
        "2025": 15,
        "2024": 13,
        "2023": null
      },
      "tauxPression2025": 1.07,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel du Val Moré",
      "commune": "Bar-sur-Seine",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p4-bachelard-equipier-commerce",
      "pagePdf": 4,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Équipier polyvalent du commerce (EPC)",
      "specialites": [
        "CAP Équipier polyvalent du commerce"
      ],
      "etablissementId": "lpo-gaston-bachelard-bar-sur-aube",
      "capacite": 15,
      "demandes": {
        "2025": 10,
        "2024": 7,
        "2023": 9
      },
      "tauxPression2025": 0.67,
      "remarques": "",
      "etablissementNom": "Lycée Polyvalent Gaston Bachelard",
      "commune": "Bar-sur-Aube",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p4-crogny-capa-travaux-forestiers",
      "pagePdf": 4,
      "typeDiplome": "CAPA",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAPA Travaux forestiers",
      "specialites": [
        "CAPA Travaux forestiers"
      ],
      "etablissementId": "lycee-forestier-crogny-chaource",
      "capacite": 19,
      "demandes": {
        "2025": 12,
        "2024": 5,
        "2023": 12
      },
      "tauxPression2025": 0.63,
      "remarques": "",
      "etablissementNom": "Lycée Forestier de Crogny",
      "commune": "Chaource (Les Loges-Margueron / Crogny)",
      "statut": "Public",
      "secteur": "public",
      "zone": "Hors Troyes et agglomération"
    },
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
      "demandes": {
        "2025": 20,
        "2024": 18,
        "2023": null
      },
      "tauxPression2025": 0.4,
      "remarques": "Spécificité équestre et agricole sur vaste domaine d'apprentissage.",
      "etablissementNom": "Lycée Agricole Privé Sainte-Maure",
      "commune": "Sainte-Maure",
      "statut": "Privé agricole sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération (Péri-urbain)"
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
      "demandes": {
        "2025": 16,
        "2024": 10,
        "2023": null
      },
      "tauxPression2025": 0.57,
      "remarques": "",
      "etablissementNom": "Lycée Agricole Privé Sainte-Maure",
      "commune": "Sainte-Maure",
      "statut": "Privé agricole sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération (Péri-urbain)"
    },
    {
      "id": "p5-cordeliers-sapat",
      "pagePdf": 5,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)",
      "specialites": [
        "Bac Pro Services aux personnes et animation dans les territoires (SAPAT)"
      ],
      "etablissementId": "lycee-prive-cordeliers-arcis",
      "capacite": 24,
      "demandes": {
        "2025": 16,
        "2024": 14,
        "2023": null
      },
      "tauxPression2025": 0.67,
      "remarques": "",
      "etablissementNom": "Lycée Privé des Cordeliers",
      "commune": "Arcis-sur-Aube",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Hors Troyes et agglomération"
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
      "demandes": {
        "2025": 0,
        "2024": 5,
        "2023": null
      },
      "tauxPression2025": 0.0,
      "remarques": "",
      "etablissementNom": "Lycée Privé des Cordeliers",
      "commune": "Arcis-sur-Aube",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p5-cordeliers-capa-sapver",
      "pagePdf": 5,
      "typeDiplome": "CAPA",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAPA Services aux personnes et vente en espace rural (SAPVER)",
      "specialites": [
        "CAPA Services aux personnes et vente en espace rural"
      ],
      "etablissementId": "lycee-prive-cordeliers-arcis",
      "capacite": 24,
      "demandes": {
        "2025": 12,
        "2024": 10,
        "2023": null
      },
      "tauxPression2025": 0.5,
      "remarques": "",
      "etablissementNom": "Lycée Privé des Cordeliers",
      "commune": "Arcis-sur-Aube",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Hors Troyes et agglomération"
    },
    {
      "id": "p6-la-salle-artisanat-art",
      "pagePdf": 6,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Artisanat et métiers d’art, option communication visuelle plurimédia",
      "specialites": [
        "Bac Pro Artisanat et métiers d’art, communication visuelle plurimédia"
      ],
      "etablissementId": "lp-la-salle-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 26,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 1.73,
      "remarques": "Taux de pression 1.73 en 2025.",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 7,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.39,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 20,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 1.33,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 14,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.93,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 20,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.83,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 28,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.47,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 12,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.8,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-la-salle-cap-electricien",
      "pagePdf": 6,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Électricien",
      "specialites": [
        "CAP Électricien"
      ],
      "etablissementId": "lp-la-salle-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 3,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.2,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-la-salle-cap-thermique",
      "pagePdf": 6,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Monteur en installations thermiques",
      "specialites": [
        "CAP Monteur installations thermiques"
      ],
      "etablissementId": "lp-la-salle-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 2,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.13,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel La Salle (Saint-Joseph)",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
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
      "demandes": {
        "2025": 3,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.17,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Léonie Aviat",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 11,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.2,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Léonie Aviat",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-aviat-cap-equipier-commerce",
      "pagePdf": 6,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Équipier polyvalent du commerce (EPC)",
      "specialites": [
        "CAP Équipier polyvalent du commerce"
      ],
      "etablissementId": "lp-leonie-aviat-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 6,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.4,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Léonie Aviat",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-aviat-cap-fleuriste",
      "pagePdf": 6,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Fleuriste",
      "specialites": [
        "CAP Fleuriste"
      ],
      "etablissementId": "lp-leonie-aviat-troyes",
      "capacite": 15,
      "demandes": {
        "2025": 9,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.6,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Léonie Aviat",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-mance-assp",
      "pagePdf": 6,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Accompagnement, soins et services à la personne (ASSP)",
      "specialites": [
        "Bac Pro Accompagnement, soins et services à la personne (ASSP)"
      ],
      "etablissementId": "lp-jeanne-mance-troyes",
      "capacite": 30,
      "demandes": {
        "2025": 25,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.83,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Jeanne Mance",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
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
      "demandes": {
        "2025": 8,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.44,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Jeanne Mance",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-mance-securite",
      "pagePdf": 6,
      "typeDiplome": "Bac Pro",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "Bac Pro Métiers de la sécurité",
      "specialites": [
        "Bac Pro Métiers de la sécurité"
      ],
      "etablissementId": "lp-jeanne-mance-troyes",
      "capacite": 30,
      "demandes": {
        "2025": 35,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 1.17,
      "remarques": "Taux de pression 1.17 en 2025.",
      "etablissementNom": "Lycée Professionnel Jeanne Mance",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-mance-cap-grand-age",
      "pagePdf": 6,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Agent accompagnant au grand âge (2AGA)",
      "specialites": [
        "CAP Agent accompagnement au grand âge"
      ],
      "etablissementId": "lp-jeanne-mance-troyes",
      "capacite": 30,
      "demandes": {
        "2025": 10,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.33,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Jeanne Mance",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    },
    {
      "id": "p6-mance-cap-operateur-logistique",
      "pagePdf": 6,
      "typeDiplome": "CAP",
      "voieEntree": "Directe",
      "familleMetiers": null,
      "intitule": "CAP Opérateur/opératrice logistique",
      "specialites": [
        "CAP Opérateur/opératrice logistique"
      ],
      "etablissementId": "lp-jeanne-mance-troyes",
      "capacite": 12,
      "demandes": {
        "2025": 3,
        "2024": null,
        "2023": null
      },
      "tauxPression2025": 0.25,
      "remarques": "",
      "etablissementNom": "Lycée Professionnel Jeanne Mance",
      "commune": "Troyes",
      "statut": "Privé sous contrat",
      "secteur": "prive",
      "zone": "Troyes et agglomération"
    }
  ],
  "statsGlobales": {
    "totalFormations": 65,
    "totalBacPro": 42,
    "totalCAP": 23,
    "capaciteTotaleAube": 1725,
    "demandes2025TotaleAube": 1564,
    "totalPublic": 42,
    "totalPrive": 23
  }
};

if (typeof window !== 'undefined') {
  window.FORMATIONS_AUBE_DATA = FORMATIONS_AUBE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FORMATIONS_AUBE_DATA;
}
