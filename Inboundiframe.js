window.embedVenueUrl = function(venueUrl) {
    // Create the style element and define the CSS
    var style = document.createElement('style');
    style.innerHTML = '.styled-iframe { border: none; }';
    document.head.appendChild(style);

    // Create the iframe element
    var iframe = document.createElement('iframe');
    iframe.className = 'styled-iframe';
    iframe.src = venueUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    document.body.appendChild(iframe);

    // Load the script for iframe resizing
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js';
    document.body.appendChild(script);

    // Wait for the script to load before calling the resize function
    script.onload = function() {
        iFrameResize({ log: true }, '.styled-iframe');
    };
}