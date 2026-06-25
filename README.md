# DPLN Dark Mode

Thème sombre pour [Dofus pour les Noobs](https://www.dofuspourlesnoobs.com/), compatible avec toutes les pages du site (donjons, quêtes, tutoriels, outils...).

![Version](https://img.shields.io/badge/version-16.4-blue)

## Fonctionnalités

- Dark mode complet sur tout le site
- Bouton toggle (soleil/lune) pour basculer entre les thèmes
- Préférence sauvegardée entre les sessions
- Masquage des pubs en mode sombre
- Remapping dynamique des couleurs de texte pour la lisibilité
- Aucun conflit avec le CSS natif du site

## Installation

Trois versions disponibles selon ton navigateur.

### Chrome / Edge / Brave / Opera (extension)

L'extension injecte le CSS avant le rendu de la page, donc pas de flash blanc.

1. [Télécharger le `.zip` Chrome](https://github.com/BurN-30/dpln-dark-mode/releases/latest), ou cloner ce repo et utiliser le dossier `extension-chrome/`
2. Extraire le dossier
3. Ouvrir `chrome://extensions/`
4. Activer le **Mode développeur** (en haut à droite)
5. Cliquer sur **« Charger l'extension non empaquetée »**
6. Sélectionner le dossier

### Firefox / Zen (extension signée)

Firefox refuse les extensions non signées : il faut le paquet **signé par Mozilla** (`.xpi`).

1. [Télécharger le `.xpi` signé](https://github.com/BurN-30/dpln-dark-mode/releases/latest)
2. Ouvrir le fichier `.xpi` dans Firefox / Zen (ou `about:addons`, puis ⚙ → **Installer un module depuis un fichier**)
3. Confirmer **Ajouter**

> Code source dans `extension-firefox/`. Pour (re)construire et signer le `.xpi`, voir [FIREFOX-BUILD.md](FIREFOX-BUILD.md).

### Userscript (Tampermonkey / Violentmonkey)

Plus simple et multi-navigateur, mais un léger flash blanc peut apparaître au chargement.

1. Installer un gestionnaire de userscripts : [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/)
2. **[Installer le script en 1 clic](https://github.com/BurN-30/dpln-dark-mode/raw/main/dpln-dark-mode.user.js)** : le gestionnaire affiche une page de confirmation, cliquer **« Installer »**

Le script se met à jour automatiquement.

## Structure du repo

| Chemin | Rôle |
|---|---|
| `extension-chrome/` | Extension MV3 pour navigateurs Chromium (Chrome, Edge, Brave, Opera) |
| `extension-firefox/` | Extension MV3 pour Firefox / Zen (manifeste + clés `gecko`) |
| `dpln-dark-mode.user.js` | Userscript Tampermonkey / Violentmonkey |
| `FIREFOX-BUILD.md` | Construction et prérequis de validation / signature AMO |

Le code (`css/`, `js/`, `icons/`) est identique entre les deux extensions ; seul le `manifest.json` diffère (Firefox ajoute le bloc `browser_specific_settings`).

## Utilisation

Rendez-vous sur [dofuspourlesnoobs.com](https://www.dofuspourlesnoobs.com/). Le dark mode est activé par défaut. Bouton soleil/lune en haut à droite pour basculer.

## Désinstallation

- **Extension Chrome :** `chrome://extensions/`
- **Extension Firefox :** `about:addons`
- **Userscript :** dashboard Tampermonkey / Violentmonkey
