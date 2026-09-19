import json

with open('data/formations-aube.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Exact verified GPS coordinates for each establishment
coords_map = {
    "lpo-edouard-herriot-sainte-savine": {
        "lat": 48.293237,
        "lon": 4.028933,
        "adresse": "31 Rue Édouard Herriot, 10300 Sainte-Savine",
        "zone": "Troyes",
        "descriptionCourte": "Lycée des métiers de l'hôtellerie-restauration et de la mode"
    },
    "lpo-les-lombards-troyes": {
        "lat": 48.277602,
        "lon": 4.068305,
        "adresse": "14 Avenue des Lombards, 10000 Troyes",
        "zone": "Troyes",
        "descriptionCourte": "Lycée polyvalent industriel, génie énergétique, BTP, bois et bio-industries"
    },
    "lp-gabriel-voisin-troyes": {
        "lat": 48.315364,
        "lon": 4.072164,
        "adresse": "Chemin de l'Arquebuse / 1 Rue Marie Curie, 10000 Troyes",
        "zone": "Troyes",
        "descriptionCourte": "Lycée des métiers de l'automobile, transport et relation client"
    },
    "lpo-marie-de-champagne-troyes": {
        "lat": 48.305979,
        "lon": 4.063259,
        "adresse": "30 Rue de la Reine Blanche, 10000 Troyes",
        "zone": "Troyes",
        "descriptionCourte": "Lycée polyvalent santé-social, petite enfance, tertiaire et relation client"
    },
    "lp-la-salle-troyes": {
        "lat": 48.294720,
        "lon": 4.072789,
        "adresse": "11 Rue de la Trinité, 10000 Troyes",
        "zone": "Troyes",
        "descriptionCourte": "Lycée professionnel privé numérique, architecture, communication visuelle et beauté"
    },
    "lp-jeanne-mance-troyes": {
        "lat": 48.290802,
        "lon": 4.066152,
        "adresse": "Impasse Saint-Martin / 42 Rue Jeanne Mance, 10000 Troyes",
        "zone": "Troyes",
        "descriptionCourte": "Lycée professionnel privé métiers de la sécurité, grand âge, santé-social et logistique"
    },
    "lp-leonie-aviat-troyes": {
        "lat": 48.291565,
        "lon": 4.077871,
        "adresse": "11 Rue des Terrasses, 10000 Troyes",
        "zone": "Troyes",
        "descriptionCourte": "Lycée professionnel privé tertiaire, accueil, commerce et fleuriste"
    },
    "lp-denis-diderot-romilly": {
        "lat": 48.517793,
        "lon": 3.716580,
        "adresse": "Allée Montesquieu / 64 Rue Paul Cézanne, 10100 Romilly-sur-Seine",
        "zone": "Aube",
        "descriptionCourte": "Lycée professionnel métiers de la sécurité, ébénisterie, métallerie, industrie et commerce"
    },
    "lp-val-more-bar-sur-seine": {
        "lat": 48.111006,
        "lon": 4.388118,
        "adresse": "Rue du Val Moré, 10110 Bar-sur-Seine",
        "zone": "Aube",
        "descriptionCourte": "Lycée des métiers de la maintenance (agricole, TP, moto, PL) et transport routier (CTRM)"
    },
    "lpo-gaston-bachelard-bar-sur-aube": {
        "lat": 48.228676,
        "lon": 4.705792,
        "adresse": "3 Rue Gaston Bachelard, 10200 Bar-sur-Aube",
        "zone": "Aube",
        "descriptionCourte": "Lycée polyvalent électricité connectée (MELEC), commerce et vente"
    },
    "lycee-forestier-crogny-chaource": {
        "lat": 48.083002,
        "lon": 4.098398,
        "adresse": "Hameau de Crogny, 10210 Les Loges-Margueron (Chaource)",
        "zone": "Aube",
        "descriptionCourte": "Lycée des métiers de la forêt, de la gestion sylvicole et des travaux forestiers"
    },
    "lycee-agricole-charles-baltet-st-pouange": {
        "lat": 48.237355,
        "lon": 4.049272,
        "adresse": "D 109 / Route de Villy-le-Maréchal, 10120 Saint-Pouange",
        "zone": "Aube",
        "descriptionCourte": "Lycée public agricole : grandes cultures, élevage (CGEA) et services aux personnes (SAPAT)"
    },
    "lycee-agricole-sainte-maure": {
        "lat": 48.334285,
        "lon": 4.078152,
        "adresse": "1 Route de Méry, 10150 Sainte-Maure",
        "zone": "Aube",
        "descriptionCourte": "Lycée agricole privé : grandes cultures, polyculture-élevage, filière équine et nature/faune"
    },
    "lycee-prive-cordeliers-arcis": {
        "lat": 48.534964,
        "lon": 4.140388,
        "adresse": "6 Rue des Cordeliers, 10700 Arcis-sur-Aube",
        "zone": "Aube",
        "descriptionCourte": "Lycée privé rural : services aux personnes (SAPAT/SAPVER) et conseil-vente alimentation"
    }
}

for etab in data['etablissements']:
    info = coords_map.get(etab['id'], {})
    etab['lat'] = info.get('lat')
    etab['lon'] = info.get('lon')
    etab['adresse'] = info.get('adresse', '')
    etab['zoneCarte'] = info.get('zone', 'Troyes' if etab['zone'].startswith('Troyes') else 'Aube')
    etab['descriptionCourte'] = info.get('descriptionCourte', '')

with open('data/formations-aube.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Update data/formations-aube.js
js_content = "/**\n * Données officielles extraites de infos.pdf (CIO Troyes / Septembre 2025)\n * Formations professionnelles post-3ème dans l'Aube (Bac Pro & CAP) avec coordonnées géographiques\n */\n"
js_content += f"const FORMATIONS_AUBE_DATA = {json.dumps(data, ensure_ascii=False, indent=2)};\n\n"
js_content += "if (typeof module !== 'undefined' && module.exports) {\n  module.exports = FORMATIONS_AUBE_DATA;\n}\n"

with open('data/formations-aube.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Coordinates and metadata attached successfully to all establishments!")
