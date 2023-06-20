function embedVenueUrl(url) {
    window.onload = function() {
        var iframe = document.createElement('iframe');

        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        iframe.setAttribute('frameborder', '0');
        iframe.className = 'styled-iframe';

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.2/js/iframeResizer.min.js';
        document.body.appendChild(script);

        script.onload = function() {
            iFrameResize({ log: true }, '.styled-iframe');
        };

        document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
    };
}
