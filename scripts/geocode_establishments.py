import urllib.request
import urllib.parse
import json
import time

addresses = [
    ('lpo-les-lombards-troyes', '14 Avenue des Lombards, 10000 Troyes, France'),
    ('lp-gabriel-voisin-troyes', '1 Rue Marie Curie, 10000 Troyes, France'),
    ('lpo-marie-de-champagne-troyes', '30 Rue de la Reine Blanche, 10000 Troyes, France'),
    ('lp-la-salle-troyes', '11 Rue de la Trinité, 10000 Troyes, France'),
    ('lp-jeanne-mance-troyes', '42 Rue Jeanne Mance, 10000 Troyes, France'),
    ('lp-leonie-aviat-troyes', '11 Rue des Terrasses, 10000 Troyes, France'),
    ('lpo-edouard-herriot-sainte-savine', '31 Rue Edouard Herriot, 10300 Sainte-Savine, France'),
    ('lp-denis-diderot-romilly', '64 Rue Paul Cézanne, 10100 Romilly-sur-Seine, France'),
    ('lp-val-more-bar-sur-seine', 'Rue du Val Moré, 10110 Bar-sur-Seine, France'),
    ('lpo-gaston-bachelard-bar-sur-aube', '3 Rue Gaston Bachelard, 10200 Bar-sur-Aube, France'),
    ('lycee-forestier-crogny-chaource', 'Crogny, 10210 Les Loges-Margueron, France'),
    ('lycee-agricole-charles-baltet-st-pouange', 'Route de Villy-le-Maréchal, 10120 Saint-Pouange, France'),
    ('lycee-agricole-sainte-maure', '1 Route de Méry, 10150 Sainte-Maure, France'),
    ('lycee-prive-cordeliers-arcis', '6 Rue des Cordeliers, 10700 Arcis-sur-Aube, France')
]

headers = {'User-Agent': 'Orientation3E-MapBuilder/1.0'}
coords = {}

for etab_id, addr in addresses:
    url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + urllib.parse.quote(addr)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            if data:
                lat = float(data[0]['lat'])
                lon = float(data[0]['lon'])
                coords[etab_id] = {'lat': lat, 'lon': lon, 'addr': addr}
                print(f"OK {etab_id}: lat={lat}, lon={lon}")
            else:
                # Fallback on town
                town = addr.split(',')[-2].strip()
                url_town = 'https://nominatim.openstreetmap.org/search?format=json&q=' + urllib.parse.quote(town)
                req_town = urllib.request.Request(url_town, headers=headers)
                with urllib.request.urlopen(req_town, timeout=10) as resp2:
                    d2 = json.loads(resp2.read().decode())
                    lat = float(d2[0]['lat'])
                    lon = float(d2[0]['lon'])
                    coords[etab_id] = {'lat': lat, 'lon': lon, 'addr': addr}
                    print(f"FALLBACK {etab_id}: lat={lat}, lon={lon}")
    except Exception as e:
        print(f"ERR {etab_id}: {e}")
    time.sleep(1)

with open('data/etablissements-coords.json', 'w', encoding='utf-8') as f:
    json.dump(coords, f, ensure_ascii=False, indent=2)

print("Coordinates saved to data/etablissements-coords.json")
