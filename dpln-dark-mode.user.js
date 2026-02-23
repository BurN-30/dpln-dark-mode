// ==UserScript==
// @name         Dofus pour les Noobs - Dark Mode
// @namespace    http://tampermonkey.net/
// @version      14.3
// @description  Thème sombre complet pour DPLN avec bouton toggle.
// @author       BurN-30
// @match        *://www.dofuspourlesnoobs.com/*
// @icon         https://www.dofuspourlesnoobs.com/favicon.ico
// @updateURL    https://gist.githubusercontent.com/BurN-30/b1d9272c3183299bdae24336506c8f71/raw/dpln-dark-mode.user.js
// @downloadURL  https://gist.githubusercontent.com/BurN-30/b1d9272c3183299bdae24336506c8f71/raw/dpln-dark-mode.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        body.dpln-dark {
            --bg-main: #1a1b20;
            --bg-sec: #24252b;
            --bg-ter: #2c2d35;
            --text-main: #d1cdc7;
            --text-accent: #e6734a;
            --border-color: #33343d;
        }

        /* === NUCLEAR: écraser TOUT fond clair === */
        body.dpln-dark,
        body.dpln-dark.wsite-background,
        body.dpln-dark.wsite-background.wsite-custom-background,
        body.dpln-dark.wsite-theme-light {
            background: var(--bg-main) none !important;
            color: var(--text-main) !important;
        }

        body.dpln-dark *:not(img):not(svg):not(path):not(iframe):not(video) {
            background-color: transparent !important;
            background-image: none !important;
        }

        body.dpln-dark #header-wrap {
            background: var(--bg-sec) none !important;
        }
        body.dpln-dark #header-wrap .banner-wrap {
            display: none !important;
        }
        body.dpln-dark #nav-wrap,
        body.dpln-dark #wsite-page-wrapper,
        body.dpln-dark #wsite-content,
        body.dpln-dark #main-wrap,
        body.dpln-dark .wsite-background,
        body.dpln-dark .wsite-custom-background {
            background: var(--bg-main) none !important;
        }

        /* === TEXTE: forcer partout === */
        body.dpln-dark,
        body.dpln-dark *:not(a) {
            color: var(--text-main) !important;
        }
        body.dpln-dark h1,
        body.dpln-dark h2,
        body.dpln-dark h3,
        body.dpln-dark h4,
        body.dpln-dark .wsite-content-title,
        body.dpln-dark strong,
        body.dpln-dark b {
            color: #f4f4f5 !important;
        }
        body.dpln-dark a strong,
        body.dpln-dark a b {
            color: inherit !important;
        }

        /* === LIENS === */
        body.dpln-dark a,
        body.dpln-dark .wsite-not-footer h2.wsite-content-title a,
        body.dpln-dark .wsite-not-footer .paragraph a,
        body.dpln-dark .wsite-not-footer blockquote a,
        body.dpln-dark #blogTable .blog-sidebar a,
        body.dpln-dark #blogTable .blog-comments a,
        body.dpln-dark .wsite-footer .paragraph a,
        body.dpln-dark .wsite-not-footer .wsite-multicol a {
            color: var(--text-accent) !important;
            transition: color 0.2s ease;
        }
        body.dpln-dark a:hover,
        body.dpln-dark .wsite-not-footer h2.wsite-content-title a:hover,
        body.dpln-dark .wsite-not-footer .paragraph a:hover,
        body.dpln-dark .wsite-not-footer blockquote a:hover,
        body.dpln-dark #blogTable .blog-sidebar a:hover,
        body.dpln-dark #blogTable .blog-comments a:hover,
        body.dpln-dark .wsite-footer .paragraph a:hover,
        body.dpln-dark .wsite-not-footer .wsite-multicol a:hover {
            color: #f09070 !important;
        }

        /* === FONT COLOR (pages quêtes) === */
        body.dpln-dark font[color="#ff0000"],
        body.dpln-dark font[color="#f00"],
        body.dpln-dark font[color="#fd0000"] {
            color: #ff6b6b !important;
        }
        body.dpln-dark font[color="#3a96b8"],
        body.dpln-dark font[color="#3387a2"] {
            color: #5bbce0 !important;
        }
        body.dpln-dark font[color="#5fa233"] {
            color: #7cc956 !important;
        }
        body.dpln-dark font[color="#5848b7"] {
            color: #8a7ef0 !important;
        }
        body.dpln-dark font[color="#a85f2e"] {
            color: #d4894e !important;
        }
        body.dpln-dark font[color="#3f3f3f"] {
            color: #a0a0a0 !important;
        }

        /* === NAV === */
        body.dpln-dark #nav-wrap {
            background: var(--bg-sec) none !important;
            border-bottom: 1px solid var(--border-color) !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        body.dpln-dark #nav-wrap .container,
        body.dpln-dark #nav-wrap table,
        body.dpln-dark #nav-wrap td {
            background: var(--bg-sec) none !important;
        }
        body.dpln-dark .wsite-menu-default a {
            color: var(--text-main) !important;
            transition: color 0.2s ease;
        }
        body.dpln-dark .wsite-menu-default a:hover {
            color: #fff !important;
        }
        body.dpln-dark li#active > a,
        body.dpln-dark li#active .wsite-menu-item {
            color: var(--text-accent) !important;
        }

        /* === NAV SOUS-MENUS === */
        body.dpln-dark .wsite-menu-wrap {
            background: var(--bg-sec) none !important;
            border: 1px solid var(--border-color) !important;
        }
        body.dpln-dark .wsite-menu-wrap .wsite-menu {
            background: var(--bg-sec) none !important;
        }
        body.dpln-dark .wsite-menu-wrap .wsite-menu li {
            background: var(--bg-sec) none !important;
        }
        body.dpln-dark .wsite-menu-wrap .wsite-menu a {
            color: var(--text-main) !important;
            background: var(--bg-sec) none !important;
        }
        body.dpln-dark .wsite-menu-wrap .wsite-menu li:hover {
            background: #353640 none !important;
        }
        body.dpln-dark .wsite-menu-wrap .wsite-menu a:hover {
            color: #fff !important;
            background: #353640 none !important;
        }

        /* === GRILLE DONJONS === */
        body.dpln-dark .dungeon-article {
            background: var(--bg-ter) none !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
            border: 1px solid var(--border-color) !important;
        }
        body.dpln-dark .dungeon-article:hover {
            box-shadow: 0 8px 22px rgba(0,0,0,0.5) !important;
        }
        body.dpln-dark .dj-article-tt {
            color: var(--text-main) !important;
        }
        body.dpln-dark .dungeon-related a {
            color: inherit !important;
        }

        /* === BLOG SIDEBAR === */
        body.dpln-dark .blog-sidebar {
            background: var(--bg-sec) none !important;
            border-color: var(--border-color) !important;
        }

        /* === PRODUCT BLOCKS === */
        body.dpln-dark .product-block {
            background: var(--bg-ter) none !important;
            border: 1px solid var(--border-color) !important;
        }

        /* === IMAGES === */
        body.dpln-dark img {
            filter: brightness(0.85);
            transition: filter 0.3s ease;
        }
        body.dpln-dark img:hover { filter: brightness(1.0); }
        body.dpln-dark .dungeon-article img,
        body.dpln-dark #jssor_1 img {
            filter: brightness(0.9) !important;
            border-radius: 0 !important;
        }

        /* === PUBS === */
        body.dpln-dark .akcelo-wrapper,
        body.dpln-dark .promo,
        body.dpln-dark .promobis,
        body.dpln-dark .promo3,
        body.dpln-dark .promo4 { display: none !important; }

        /* === FOOTER === */
        body.dpln-dark #footer-wrap {
            background: var(--bg-sec) none !important;
            border-top: 1px solid var(--border-color) !important;
        }

        /* === SCROLL TO TOP === */
        body.dpln-dark .scrollToTop {
            border: none !important;
            box-shadow: none !important;
            outline: none !important;
        }
        body.dpln-dark .scrollToTop img {
            filter: brightness(3) invert(0) !important;
        }

        /* === TOGGLE BUTTON === */
        #dpln-theme-toggle {
            position: fixed !important;
            top: 90px !important;
            right: 20px !important;
            width: 44px !important;
            height: 44px !important;
            padding: 0 !important;
            margin: 0 !important;
            z-index: 99999 !important;
            background: rgba(255, 255, 255, 0.9) !important;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;
            backdrop-filter: blur(5px) !important;
            color: #333 !important;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        }
        body.dpln-dark #dpln-theme-toggle {
            background: rgba(36, 37, 43, 0.9) !important;
            border-color: rgba(255, 255, 255, 0.1) !important;
            color: #d1cdc7 !important;
            box-shadow: 0 4px 10px rgba(0,0,0,0.4) !important;
        }
        #dpln-theme-toggle:hover { transform: scale(1.1) !important; }
        #dpln-theme-toggle svg {
            width: 22px !important;
            height: 22px !important;
            fill: currentColor !important;
            display: block !important;
        }
    `;
    GM_addStyle(css);

    const body = document.body;

    const iconSun = `<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"/></svg>`;
    const iconMoon = `<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/></svg>`;

    const savedMode = localStorage.getItem('dpln-dark-mode');
    const isDark = savedMode !== 'false';
    if (isDark) body.classList.add('dpln-dark');

    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'dpln-theme-toggle';
    toggleBtn.innerHTML = isDark ? iconSun : iconMoon;
    body.appendChild(toggleBtn);

    let rotation = 0;
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dpln-dark');
        const currentlyDark = body.classList.contains('dpln-dark');
        localStorage.setItem('dpln-dark-mode', currentlyDark);

        rotation += 180;
        toggleBtn.innerHTML = currentlyDark ? iconSun : iconMoon;

        const svg = toggleBtn.querySelector('svg');
        if(svg) {
            svg.style.transform = `rotate(${rotation}deg)`;
            svg.style.transition = 'transform 0.4s ease';
        }
    });
})();
