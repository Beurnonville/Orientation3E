import sys
import json
import fitz

doc = fitz.open('infos.pdf')

with open('scripts/pdf_inspection_utf8.txt', 'w', encoding='utf-8') as f:
    for pno in range(len(doc)):
        page = doc[pno]
        f.write(f"\n============================== PAGE {pno+1} ==============================\n")
        d = page.get_text('dict')
        for bno, block in enumerate(d['blocks']):
            if 'lines' in block:
                f.write(f"--- Block {bno} (bbox: {block['bbox']}) ---\n")
                for lno, line in enumerate(block['lines']):
                    spans_out = []
                    for s in line['spans']:
                        col = f"#{s['color']:06x}"
                        text = s['text']
                        bold = "B" if (s['flags'] & 16 or "Bold" in s['font']) else ""
                        spans_out.append(f"[{text} | col={col} | {bold}]")
                    f.write("  " + " ".join(spans_out) + "\n")
