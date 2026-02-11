/**
 * Center accordion section before opening/closing
 */
(function() {
    'use strict';

    function centerSection(section, isOpening = false) {
        return new Promise((resolve) => {
            const sectionRect = section.getBoundingClientRect();

            // If opening, we need to estimate the final height
            // Check if this section will have a submenu
            let targetHeight = sectionRect.height;

            if (isOpening) {
                // Estimate: main image (~170px at 1200px width) + submenu image (~650px at 1200px width)
                // But we need to calculate based on actual width
                const container = document.querySelector('.mx-auto');
                const containerWidth = container ? container.offsetWidth : 650;
                const scale = containerWidth / 650; // original width

                // Original heights: main image = 91px, submenu varies (~354px for musique)
                // Estimate full opened height
                targetHeight = (91 + 354) * scale;
            }

            const sectionTop = sectionRect.top + window.pageYOffset;
            const sectionCenter = sectionTop + (targetHeight / 2);
            const viewportCenter = window.pageYOffset + (window.innerHeight / 2);
            const scrollTarget = sectionCenter - (window.innerHeight / 2);

            // Only scroll if we need to move more than 10px
            const currentScroll = window.pageYOffset;
            if (Math.abs(scrollTarget - currentScroll) > 10) {
                // Instant scroll to position
                window.scrollTo({
                    top: scrollTarget,
                    behavior: 'auto'
                });
                resolve();
            } else {
                resolve();
            }
        });
    }

    function centerOpenedSection() {
        // Find the section that has a submenu-wrapper (the opened one)
        const openedSection = document.querySelector('section:has(.submenu-wrapper)');
        if (openedSection) {
            // For already opened sections, use actual height
            const sectionRect = openedSection.getBoundingClientRect();
            const sectionTop = sectionRect.top + window.pageYOffset;
            const sectionCenter = sectionTop + (sectionRect.height / 2);
            const scrollTarget = sectionCenter - (window.innerHeight / 2);

            window.scrollTo({
                top: scrollTarget,
                behavior: 'auto'
            });
        }
    }

    function initAccordionLinks() {
        // Find all section links that open/close accordions
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const links = section.querySelectorAll('a[href]');

            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Check if this is an accordion toggle link (not a submenu link)
                    const isToggleLink = !link.closest('.submenu-wrapper');

                    if (isToggleLink) {
                        e.preventDefault();
                        const href = link.getAttribute('href');

                        // Check if we're opening (no submenu currently) or closing (has submenu)
                        const isOpening = !section.querySelector('.submenu-wrapper');

                        // Center the section first, then navigate
                        centerSection(section, isOpening).then(() => {
                            window.location.href = href;
                        });
                    }
                });
            });

            // Add click handler to close accordion when clicking outside links
            section.addEventListener('click', function(e) {
                // Check if section has submenu (is open)
                const submenuWrapper = section.querySelector('.submenu-wrapper');
                if (!submenuWrapper) return;

                // Check if click was on a link or inside a link
                if (e.target.tagName === 'A' || e.target.closest('a')) return;

                // Check if click was on an area element (image map)
                if (e.target.tagName === 'AREA') return;

                // Click was outside links - close the accordion
                e.preventDefault();
                window.location.href = '/';
            });
        });
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initAccordionLinks();
            centerOpenedSection();
        });
    } else {
        initAccordionLinks();
        centerOpenedSection();
    }

    // Also run on window load for safety
    window.addEventListener('load', function() {
        centerOpenedSection();
    });
})();
