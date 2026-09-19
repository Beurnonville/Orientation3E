import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data/formations-aube.json', encoding='utf-8') as f:
    d = json.load(f)

print(f"Total établissements : {len(d['etablissements'])}")
print(f"Total formations : {len(d['formations'])}")

for p in range(1, 7):
    p_forms = [x for x in d['formations'] if x['pagePdf'] == p]
    print(f"\n==================== PAGE {p} ({len(p_forms)} entrées) ====================")
    for x in p_forms:
        dem = f"2025: {x['demandes']['2025']}, 2024: {x['demandes']['2024']}, 2023: {x['demandes']['2023']}"
        print(f" • [{x['commune']} | {x['etablissementNom']}]")
        print(f"   Diplôme: {x['typeDiplome']} | Intitulé: {x['intitule']}")
        if x.get('familleMetiers'):
            print(f"   Famille: {x['familleMetiers']}")
            print(f"   Spécialités: {', '.join(x['specialites'])}")
        print(f"   Capacité: {x['capacite']} places | Demandes Vœu 1: {dem} | Pression 2025: {x['tauxPression2025']}")
        if x.get('remarques'):
            print(f"   Remarques: {x['remarques']}")
