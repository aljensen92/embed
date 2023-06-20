function embedVenueUrl(url) {
    // Ensure the code runs after the window is loaded
    window.onload = function() {
        // Create a new iframe element
        var iframe = document.createElement('iframe');

        // Set iframe attributes
        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        iframe.setAttribute('frameborder', '0');
        iframe.className = 'styled-iframe';

        // Load the iFrameResizer library
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js';
        document.body.appendChild(script);

        // Use iFrameResizer to adjust the iframe's dimensions
        script.onload = function() {
            iFrameResize({ log: true }, '.styled-iframe');
        };

        // Add the iframe just before the script tag itself
        document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
    };
}
