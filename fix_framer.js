const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app')
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const original = content;
      // Replace animate={isVisible} with animate={isVisible ? "animate" : "initial"}
      content = content.replace(/animate=\{isVisible\}/g, 'animate={isVisible ? "animate" : "initial"}');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed framer motion in: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(processDirectory);
console.log('Done fixing framer motion bugs.');
