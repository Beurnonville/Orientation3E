import json

with open('index.html', encoding='utf-8') as f:
    html = f.read()

assert 'id="famillesGrid"' in html
assert 'id="famillesSearchInput"' in html
assert 'data/orientation-data.js' in html
print("index.html contains all required elements!")

with open('data/orientation-data.js', encoding='utf-8') as f:
    js = f.read()

assert 'famillesMetiers:' in js
print("data/orientation-data.js is properly structured!")
