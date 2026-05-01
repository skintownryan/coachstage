import fs from 'fs';
import path from 'path';

const drillsDir = './drills';

if (!fs.existsSync(drillsDir)) {
  fs.mkdirSync(drillsDir);
}

const files = fs.readdirSync(drillsDir)
  .filter(f => f.endsWith('.md'))
  .sort();

fs.writeFileSync(
  path.join(drillsDir, 'index.json'),
  JSON.stringify(files, null, 2)
);

console.log(`Built index with ${files.length} drills:`, files);
