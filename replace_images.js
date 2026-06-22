const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app')
];

const unsplashImages = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
];

let imgIndex = 0;

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex = /https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_\-\/]+/g;
      
      let modified = false;
      content = content.replace(regex, (match) => {
        modified = true;
        const replacement = unsplashImages[imgIndex % unsplashImages.length];
        imgIndex++;
        return replacement;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated images in: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(processDirectory);
console.log('Done replacing images.');
