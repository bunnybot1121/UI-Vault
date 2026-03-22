import fs from 'fs';

const files = [
  'src/components/InlineText.tsx',
  'src/components/InfiniteScrollRows.tsx',
  'src/pages/Dashboard.tsx',
  'src/pages/Detail.tsx',
  'src/pages/Gallery.tsx',
  'src/components/Navbar.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Safe swap wrapper for white <-> black
  content = content.replace(/text-white/g, 'text-[TMP_BLACK]');
  content = content.replace(/text-black/g, 'text-white');
  content = content.replace(/text-\[TMP_BLACK\]/g, 'text-black');

  content = content.replace(/border-white/g, 'border-[TMP_BLACK]');
  content = content.replace(/border-black/g, 'border-white');
  content = content.replace(/border-\[TMP_BLACK\]/g, 'border-black');

  content = content.replace(/bg-white\//g, 'bg-[TMP_BLACK]/');
  content = content.replace(/bg-black\//g, 'bg-white/');
  content = content.replace(/bg-\[TMP_BLACK\]\//g, 'bg-black/');

  content = content.replace(/from-black\//g, 'from-white/');

  content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-[#f5f5f5]');
  content = content.replace(/bg-\[\#050505\]/g, 'bg-[#ffffff]');
  
  fs.writeFileSync(file, content);
});
console.log("Theme classes inverted successfully.");
