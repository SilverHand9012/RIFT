const fs = require('fs');

const logPath = String.raw`C:\Users\Nightfall9012\.gemini\antigravity\brain\7a2d1ae6-f4fd-4133-9061-644c46c0632f\.system_generated\logs\overview.txt`;
const svgPath = String.raw`C:\Users\Nightfall9012\.gemini\antigravity\scratch\RIFT\src\assets\images\transition-brand.svg`;

try {
  const content = fs.readFileSync(logPath, 'utf-8');
  const matches = [...content.matchAll(/(<svg width="1920" height="1080" viewBox="0 0 1920 1080"[\s\S]*?<\/svg>)/g)];
  
  if (matches.length > 0) {
    const svgContent = matches[matches.length - 1][1];
    fs.writeFileSync(svgPath, svgContent, 'utf-8');
    console.log("Successfully extracted SVG to " + svgPath);
  } else {
    console.log("SVG not found in the logs.");
  }
} catch (err) {
  console.error("Error reading logs:", err.message);
}
