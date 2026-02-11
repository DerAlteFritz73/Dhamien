/**
 * Make image maps responsive by scaling coordinates
 */
(function() {
    'use strict';

    // Original width that the coordinates are based on
    const ORIGINAL_WIDTH = 650;

    function resizeImageMaps() {
        const images = document.querySelectorAll('img[usemap]');

        images.forEach(img => {
            const mapName = img.getAttribute('usemap').substring(1);
            const map = document.querySelector(`map[name="${mapName}"]`);

            if (!map) return;

            // Get current image width
            const currentWidth = img.offsetWidth;
            const scale = currentWidth / ORIGINAL_WIDTH;

            // Scale all area coordinates
            const areas = map.querySelectorAll('area');
            areas.forEach(area => {
                // Store original coords if not already stored
                if (!area.dataset.originalCoords) {
                    area.dataset.originalCoords = area.getAttribute('coords');
                }

                // Get original coordinates and scale them
                const originalCoords = area.dataset.originalCoords;
                const coords = originalCoords.split(',').map(coord => {
                    return Math.round(parseFloat(coord) * scale);
                });

                area.setAttribute('coords', coords.join(','));
            });
        });
    }

    // Run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resizeImageMaps);
    } else {
        resizeImageMaps();
    }

    // Run on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeImageMaps, 100);
    });

    // Run when images load
    window.addEventListener('load', resizeImageMaps);
})();
