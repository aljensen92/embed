function embedVenueUrl(url) {
    window.onload = function() {
        var iframe = document.getElementsByClassName('styled-iframe')[0]; // Get the first iframe with the class 'styled-iframe'
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.className = 'styled-iframe'; // Assign the class to the iframe
            document.body.appendChild(iframe); // Append the iframe to the body
        }

        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        iframe.setAttribute('frameborder', '0');

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js';
        document.body.appendChild(script);

        script.onload = function() {
            iFrameResize({ log: true, autoResize: false }, '.styled-iframe'); // Use the class of the iframe and set autoResize to false
        };
    };
};
