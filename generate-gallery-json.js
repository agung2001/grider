const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'gallery');
const outputFile = path.join(__dirname, 'gallery.json');
const imageExtensions = ['.webp', '.jpg', '.jpeg', '.png', '.gif'];

fs.readdir(galleryDir, (err, files) => {
    if (err) {
        console.error('Error reading gallery directory:', err);
        return;
    }

    const imageFiles = files
        .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => `gallery/${file}`);

    fs.writeFile(outputFile, JSON.stringify(imageFiles, null, 4), (err) => {
        if (err) {
            console.error('Error writing gallery.json:', err);
            return;
        }
        console.log('gallery.json generated successfully.');
    });
});