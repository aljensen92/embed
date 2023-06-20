function embedVenueUrl(url) {
    // Fetch the iframe using its class name
    var iframe = document.querySelector('.styled-iframe');

    // Set the source and styling of the iframe
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';

    // Load the iFrameResizer library
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js';
    document.body.appendChild(script);

    // Use iFrameResizer to adjust the iframe's dimensions
    script.onload = function() {
        iFrameResize({ log: true }, '.styled-iframe');
    };
}
