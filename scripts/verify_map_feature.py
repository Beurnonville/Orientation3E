import json
import os
import re

print("Running full integration verification...")

# 1. Check Leaflet files
assert os.path.exists("assets/vendor/leaflet/leaflet.js"), "leaflet.js missing"
assert os.path.exists("assets/vendor/leaflet/leaflet.css"), "leaflet.css missing"
print("Leaflet vendor files verified.")

# 2. Check data/formations-aube.json
with open("data/formations-aube.json", "r", encoding="utf-8") as f:
    data = json.load(f)

etabs = data["etablissements"]
assert len(etabs) == 14, f"Expected 14 etabs, got {len(etabs)}"

troyes_etabs = [e for e in etabs if e["zoneCarte"] == "Troyes"]
aube_etabs = [e for e in etabs if e["zoneCarte"] == "Aube"]

assert len(troyes_etabs) == 7, f"Expected 7 Troyes etabs, got {len(troyes_etabs)}"
assert len(aube_etabs) == 7, f"Expected 7 Aube etabs, got {len(aube_etabs)}"

for e in etabs:
    assert e.get("lat") is not None and e.get("lon") is not None, f"Missing coords for {e['nom']}"
    assert len(e["formations"]) > 0, f"No formations for {e['nom']}"
    print(f"  OK [{e['zoneCarte']}] {e['nom']} ({e['commune']}) -> {len(e['formations'])} formations, Cap={e['capaciteTotale']}, Dem2025={e['demandes2025Totale']}")

print("All 14 establishments and their formations verified.")

# 3. Check index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

assert 'id="carteSection"' in html
assert 'id="tabMapTroyes"' in html
assert 'id="tabMapAube"' in html
assert 'id="interactiveMap"' in html
assert 'id="mapSchoolSheet"' in html
assert 'id="mapQuicklistGrid"' in html
assert 'assets/vendor/leaflet/leaflet.css' in html
assert 'assets/vendor/leaflet/leaflet.js' in html
assert 'data/formations-aube.js' in html
assert 'scripts/map.js' in html

print("index.html structure and scripts verified.")

# 4. Check main.css
with open("styles/main.css", "r", encoding="utf-8") as f:
    css = f.read()

assert ".map-interactive-wrapper" in css
assert ".custom-map-pin" in css
assert ".map-school-sheet" in css
assert ".interactive-map" in css

print("styles/main.css styles verified.")
print("ALL TESTS PASSED SUCCESSFULLY!")
