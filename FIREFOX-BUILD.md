# Build & validation Firefox (AMO)

Notes pour empaqueter et faire **signer** l'extension par Mozilla, afin qu'elle s'installe de façon permanente dans Firefox / Zen.

## Pourquoi une version Firefox distincte ?

Firefox **release** (et Zen, qui en dérive) **refuse toute extension non signée** par Mozilla en installation permanente : pas de « mode développeur » persistant comme sur Chrome, et `xpinstall.signatures.required = false` ne fonctionne que sur Developer Edition / Nightly / ESR, pas sur release. Il faut donc faire signer le paquet via AMO (gratuit).

## Prérequis du manifeste (sinon la validation AMO échoue)

| Exigence | Détail |
|---|---|
| `manifest_version: 3` | MV3, supporté par Firefox 109+ |
| `browser_specific_settings.gecko.id` | **Obligatoire** pour la signature. Format e-mail ou `{GUID}`. Ici : `dpln-dark-mode@burn30` |
| `browser_specific_settings.gecko.data_collection_permissions` | **Obligatoire depuis 2025** (politique Mozilla). Déclarer `{"required": ["none"]}` si l'extension ne collecte aucune donnée, sinon la validation renvoie l'erreur `the "data_collection_permissions" property is missing` |
| `gecko.strict_min_version` | Recommandé. Version minimale de Firefox supportée |
| Code non minifié / non obfusqué | Sinon Mozilla exige de joindre le **code source** à la soumission |
| Taille du paquet < 200 Mo | Au-delà, échec de validation |

Seul le bloc `browser_specific_settings` distingue le manifeste Firefox du manifeste Chrome (Chrome ignore cette clé, donc le même code fonctionne des deux côtés).

## Empaquetage

Zipper le **contenu** du dossier (le `manifest.json` doit être à la racine du zip, pas dans un sous-dossier) :

```bash
cd extension-firefox
zip -r ../dpln-dark-mode-firefox.zip . -x "*.DS_Store"
```

## Signature en distribution « unlisted » (self-distribution)

1. [addons.mozilla.org/developers](https://addons.mozilla.org/developers/), se connecter (compte Mozilla gratuit)
2. **Submit a New Add-on**
3. Distribution : choisir **« On your own »** (unlisted). Surtout pas « On this site » (review publique de plusieurs jours)
4. Uploader le `.zip`
5. Validation automatique : les *warnings* jaunes sont tolérés, seules les *erreurs* rouges bloquent
6. Code source : non requis si le JS est lisible
7. Mozilla **signe automatiquement** (quelques minutes en général, jusqu'à 24 h)
8. Télécharger le **`.xpi` signé** depuis la page de la version

Installation du `.xpi` signé : `about:addons` → ⚙ → **Installer un module depuis un fichier**.

## Alternative en ligne de commande

Avec [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) et des [clés API AMO](https://addons.mozilla.org/developers/addon/api/key/) :

```bash
web-ext sign --channel=unlisted --api-key=<JWT_ISSUER> --api-secret=<JWT_SECRET> --source-dir=extension-firefox
```

## Sources

- [Submitting an add-on (Firefox Extension Workshop)](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [Signing and distribution overview](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
- [Updated Add-on policies, 2025 (Mozilla Add-ons Blog)](https://blog.mozilla.org/addons/2025/06/23/updated-add-on-policies-simplified-clarified/)
