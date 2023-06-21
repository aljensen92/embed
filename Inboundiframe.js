function embedVenueUrl(url) {
    window.onload = function() {
        var iframe = document.getElementById('venue-iframe'); // Get the existing iframe by its ID
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = 'venue-iframe'; // Assign an ID to the iframe
            document.body.appendChild(iframe); // Append the iframe to the body
        }

        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        iframe.setAttribute('frameborder', '0');
        iframe.className = 'styled-iframe';

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js';
        document.body.appendChild(script);

        script.onload = function() {
            iFrameResize({ log: true, autoResize: false }, '#venue-iframe'); // Use the ID of the iframe and set autoResize to false
        };
    };
};
