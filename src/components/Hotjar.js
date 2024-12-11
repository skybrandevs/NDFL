// Hotjar.js

import React, { useEffect } from 'react';

const Hotjar = () => {
    useEffect(() => {
        // Insert Hotjar tracking code into the head section
        const script = document.createElement('script');
        script.innerHTML = `
               (function (c, s, q, u, a, r, e) {
        c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
        c._hjSettings = { hjid: a };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
    })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5203589);
        `;
        document.head.appendChild(script);

        return () => {
            // Cleanup if necessary
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default Hotjar;