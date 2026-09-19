import urllib.request
import urllib.parse
import json

queries = [
    ('lpo-marie-de-champagne-troyes', 'Lycée Marie de Champagne, Troyes'),
    ('lp-jeanne-mance-troyes', 'Lycée Jeanne Mance, Troyes'),
    ('lp-gabriel-voisin-troyes', 'Lycée Gabriel Voisin, Troyes'),
    ('lpo-edouard-herriot-sainte-savine', 'Lycée Edouard Herriot, Sainte-Savine'),
    ('lp-denis-diderot-romilly', 'Lycée Denis Diderot, Romilly-sur-Seine'),
    ('lp-val-more-bar-sur-seine', 'Lycée Val Moré, Bar-sur-Seine'),
    ('lycee-agricole-charles-baltet-st-pouange', 'Lycée Charles Baltet, Saint-Pouange')
]
headers = {'User-Agent': 'Orientation3E-Verify/1.0'}
for etab_id, q in queries:
    url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + urllib.parse.quote(q)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            if data:
                print(etab_id, ':', data[0]['lat'], data[0]['lon'], '->', data[0]['display_name'][:50])
            else:
                print(etab_id, ': NOT FOUND')
    except Exception as e:
        print(etab_id, ':', e)
