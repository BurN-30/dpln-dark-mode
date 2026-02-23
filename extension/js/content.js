(function() {
    'use strict';

    const isDark = localStorage.getItem('dpln-dark-mode') !== 'false';
    if (isDark) document.documentElement.classList.add('dpln-dark');

    const iconSun = '<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"/></svg>';
    const iconMoon = '<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/></svg>';

    function init() {
        const body = document.body;
        if (isDark) body.classList.add('dpln-dark');

        const toggleBtn = document.createElement('div');
        toggleBtn.id = 'dpln-theme-toggle';
        toggleBtn.innerHTML = isDark ? iconSun : iconMoon;
        body.appendChild(toggleBtn);

        function remapFontColors() {
            if (!document.documentElement.classList.contains('dpln-dark')) return;
            document.querySelectorAll('font[color]').forEach(function(el) {
                var raw = el.getAttribute('color').trim().toLowerCase();
                var r, g, b;
                if (/^#[0-9a-f]{3}$/i.test(raw)) {
                    r = parseInt(raw[1]+raw[1], 16);
                    g = parseInt(raw[2]+raw[2], 16);
                    b = parseInt(raw[3]+raw[3], 16);
                } else if (/^#[0-9a-f]{6,}$/i.test(raw)) {
                    r = parseInt(raw.slice(1,3), 16);
                    g = parseInt(raw.slice(3,5), 16);
                    b = parseInt(raw.slice(5,7), 16);
                } else {
                    var named = {red:[255,0,0],blue:[0,0,255],green:[0,128,0],black:[0,0,0],gray:[128,128,128],brown:[165,42,42],yellow:[255,255,0],white:[255,255,255]};
                    var n = named[raw];
                    if (!n) return;
                    r = n[0]; g = n[1]; b = n[2];
                }
                var max = Math.max(r, g, b);
                var min = Math.min(r, g, b);
                var l = (max + min) / 2 / 255;
                if (l < 0.08) {
                    r = 200; g = 200; b = 200;
                } else if (l < 0.45) {
                    var boost = 0.65 / Math.max(l, 0.01);
                    r = Math.min(255, Math.round(r * boost));
                    g = Math.min(255, Math.round(g * boost));
                    b = Math.min(255, Math.round(b * boost));
                } else if (l < 0.6) {
                    r = Math.min(255, r + 60);
                    g = Math.min(255, g + 60);
                    b = Math.min(255, b + 60);
                }
                var hex = '#' + [r,g,b].map(function(c) { return c.toString(16).padStart(2,'0'); }).join('');
                el.style.setProperty('--font-color-remap', hex);
            });
        }
        remapFontColors();

        var rotation = 0;
        toggleBtn.addEventListener('click', function() {
            var dark = document.documentElement.classList.toggle('dpln-dark');
            body.classList.toggle('dpln-dark');
            localStorage.setItem('dpln-dark-mode', dark);

            rotation += 180;
            toggleBtn.innerHTML = dark ? iconSun : iconMoon;

            var svg = toggleBtn.querySelector('svg');
            if (svg) {
                svg.style.transform = 'rotate(' + rotation + 'deg)';
                svg.style.transition = 'transform 0.4s ease';
            }
            remapFontColors();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
