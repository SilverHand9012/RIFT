const fs = require('fs');

function getWebPSize(path) {
  const buffer = fs.readFileSync(path);
  // VP8X header check
  if (buffer.toString('utf8', 0, 4) === 'RIFF' && buffer.toString('utf8', 8, 12) === 'WEBP') {
    const chunkHeader = buffer.toString('utf8', 12, 16);
    if (chunkHeader === 'VP8X') {
      const width = buffer.readUIntLE(24, 3) + 1;
      const height = buffer.readUIntLE(27, 3) + 1;
      return { width, height };
    } else if (chunkHeader === 'VP8 ') {
       const width = buffer.readInt16LE(26) & 0x3fff;
       const height = buffer.readInt16LE(28) & 0x3fff;
       return { width, height };
    } else if (chunkHeader === 'VP8L') {
       const w = buffer.readUInt16LE(21);
       const h = buffer.readUInt16LE(23);
       const width = (w & 0x3fff) + 1;
       const height = ((h >> 2) & 0x3fff) + 1;
       return { width, height };
    }
  }
  return null;
}

console.log('ainex:', getWebPSize('src/assets/images/event-cards/ainex.webp'));
console.log('katha:', getWebPSize('src/assets/images/event-cards/katha.webp'));
