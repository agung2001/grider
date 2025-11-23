document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const imageExtensions = ['.webp', '.jpg', '.jpeg', '.png', '.gif'];

    fetch('gallery.json')
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                const extension = file.substring(file.lastIndexOf('.')).toLowerCase();
                if (imageExtensions.includes(extension)) {
                    const img = document.createElement('img');
                    img.src = file;
                    gallery.appendChild(img);
                }
            });
        });

    function adjustColumns() {
        const zoom = window.devicePixelRatio;
        let columns;

        if (zoom <= 0.25) {
            columns = 50;
        } else if (zoom > 0.25 && zoom < 1) {
            // Interpolate between 50 and 10 columns
            const zoomRatio = (zoom - 0.25) / 0.75;
            columns = 50 + zoomRatio * (-40);
        } else if (zoom === 1) {
            columns = 10;
        } else if (zoom > 1 && zoom < 5) {
            // Interpolate between 10 and 3 columns
            const zoomRatio = (zoom - 1) / 4;
            columns = 10 + zoomRatio * (-7);
        } else { // zoom >= 5
            columns = 3;
        }

        gallery.style.setProperty('--max-columns', Math.round(columns));
    }

    window.addEventListener('resize', adjustColumns);
    adjustColumns(); // Initial call
});