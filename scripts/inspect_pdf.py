import sys
import json
import fitz

sys.stdout.reconfigure(encoding='utf-8')

doc = fitz.open('infos.pdf')

for pno, page in enumerate(doc):
    print(f"==================== PAGE {pno+1} ====================")
    d = page.get_text('dict')
    for bno, block in enumerate(d['blocks']):
        if 'lines' in block:
            print(f"--- Block {bno} ---")
            for lno, line in enumerate(block['lines']):
                spans_info = []
                for s in line['spans']:
                    color_hex = f"#{s['color']:06x}"
                    spans_info.append(f"'{s['text']}' (font={s['font']}, sz={s['size']:.1f}, col={color_hex}, flags={s['flags']})")
                print("  LINE:", " | ".join(spans_info))
