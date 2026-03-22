const fs = require('fs');
const path = require('path');

const sourceDir = 'D:\\Downloads\\images';
const targetDir = 'c:\\Users\\Admin\\uix\\public\\gallery';

if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

let files = [];
try {
    files = fs.readdirSync(sourceDir).filter(f => f.match(/\.(jpg|jpeg|png|webp|gif)$/i));
} catch(e) {
    console.error("Could not read directory", e);
    process.exit(1);
}

if (files.length === 0) {
    console.error("No images found.");
    process.exit(1);
}

const imagePaths = [];
files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `img-${index + 1}${ext}`;
    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, newName));
    imagePaths.push(`/gallery/${newName}`);
});

// Randomize array to scatter images nicely across identical items
imagePaths.sort(() => Math.random() - 0.5);

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let i = 0;
    const regex = /https:\/\/images\.unsplash\.com\/[^'"`]+/g;
    const newContent = content.replace(regex, () => {
        const replacement = imagePaths[i % imagePaths.length];
        i++;
        return replacement;
    });
    fs.writeFileSync(filePath, newContent);
    console.log(`Replaced ${i} occurrences in ${path.basename(filePath)}`);
}

replaceInFile('c:\\Users\\Admin\\uix\\src\\components\\InfiniteScrollRows.tsx');
replaceInFile('c:\\Users\\Admin\\uix\\src\\pages\\Gallery.tsx');
replaceInFile('c:\\Users\\Admin\\uix\\src\\data\\styles.ts');
replaceInFile('c:\\Users\\Admin\\uix\\src\\pages\\Detail.tsx');
