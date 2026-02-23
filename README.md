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

Deux méthodes au choix :

---

### Méthode 1 — Extension Chrome (recommandée)

L'extension injecte le CSS avant le rendu de la page, ce qui élimine le flash blanc lors du chargement.

1. **[Télécharger le .zip](https://github.com/BurN-30/dpln-dark-mode/releases/latest/download/dpln-dark-mode-extension.zip)**
2. Dézipper le dossier
3. Ouvrir `chrome://extensions/` dans Chrome
4. Activer le **Mode développeur** (en haut à droite)
5. Cliquer sur **"Charger l'extension non empaquetée"**
6. Sélectionner le dossier dézippé

> Fonctionne aussi sur les navigateurs basés sur Chromium (Edge, Brave, Opera...).

---

### Méthode 2 — Userscript (Tampermonkey)

Plus simple à installer, mais un léger flash blanc peut apparaître au chargement des pages.

#### 1. Installer Tampermonkey

| Navigateur | Lien |
|---|---|
| Chrome | [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Firefox | [Firefox Add-ons](https://addons.mozilla.org/fr/firefox/addon/tampermonkey/) |
| Edge | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) |

#### 2. Installer le script

**En 1 clic :** [Cliquer ici pour installer](https://github.com/BurN-30/dpln-dark-mode/raw/main/dpln-dark-mode.user.js)

Tampermonkey affichera une page de confirmation, il suffit de cliquer sur **"Installer"**. Le script se met à jour automatiquement.

---

### C'est tout

Rendez-vous sur [dofuspourlesnoobs.com](https://www.dofuspourlesnoobs.com/). Le dark mode est activé par défaut. Utilisez le bouton en haut à droite pour basculer.

## Aperçu

| Mode sombre | Bouton toggle |
|---|---|
| Fond `#1a1b20` avec texte clair | Icône soleil/lune en haut à droite |

## Désinstallation

- **Extension :** Supprimer depuis `chrome://extensions/`
- **Userscript :** Supprimer depuis le dashboard Tampermonkey
