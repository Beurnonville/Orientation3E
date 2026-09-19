import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')

# Load the exact PDF data
with open('data/formations-aube.json', encoding='utf-8') as f:
    pdf_data = json.load(f)

# Read orientation-data.js
with open('data/orientation-data.js', encoding='utf-8') as f:
    js_text = f.read()

# Let's inspect the famillesMetiers array in orientation-data.js
# We can evaluate it with node or parse with python
