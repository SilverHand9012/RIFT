import re

log_path = r"C:\Users\Nightfall9012\.gemini\antigravity\brain\7a2d1ae6-f4fd-4133-9061-644c46c0632f\.system_generated\logs\overview.txt"
svg_path = r"C:\Users\Nightfall9012\.gemini\antigravity\scratch\RIFT\src\assets\images\transition-brand.svg"

with open(log_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the last occurrence of the SVG tag
matches = list(re.finditer(r'(<svg width="1920" height="1080" viewBox="0 0 1920 1080".*?</svg>)', content, re.DOTALL))

if matches:
    # Get the last match which should be the user's latest request
    svg_content = matches[-1].group(1)
    with open(svg_path, 'w', encoding='utf-8') as out_f:
        out_f.write(svg_content)
    print("Successfully extracted SVG to", svg_path)
else:
    print("SVG not found in the logs.")
