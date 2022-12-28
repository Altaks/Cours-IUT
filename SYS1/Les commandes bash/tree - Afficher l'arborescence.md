**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `tree` est un utilitaire en ligne de commande qui permet d'afficher la structure hiérarchique des répertoires et des fichiers d'un système de fichiers de manière visuelle, sous forme d'arborescence. Cette commande est très utile pour avoir une vue d'ensemble des répertoires et des fichiers d'un système et pour comprendre comment ils sont organisés.

Voici comment utiliser la commande `tree` :

```bash
tree [options] [répertoire]
```

La commande `tree` prend en argument le répertoire à afficher, qui peut être un répertoire local ou un répertoire sur un système de fichiers distant (via un protocole de partage de fichiers comme NFS ou SMB). Si aucun répertoire n'est spécifié, `tree` affiche la structure de l'ensemble du système de fichiers.

```ad-info
title: Arguments
Voici quelques options couramment utilisées avec la commande `tree` :

-   `-a` : affiche également les fichiers cachés (qui ont un nom commençant par un point).
  
-   `-d` : affiche seulement les répertoires, pas les fichiers.
-   `-L n` : affiche seulement les n premiers niveaux de l'arborescence.
-   `-f` : affiche le chemin complet des fichiers et répertoires à chaque niveau de l'arborescence.
-   `-i` : n'affiche pas les identifiants des fichiers et répertoires.
-   `-s` : affiche la taille des répertoires en additionnant la taille de leur contenu.
```

Voici un exemple d'utilisation de la commande `tree` pour afficher la structure de l'ensemble du système de fichiers, en incluant les fichiers cachés et en affichant la taille des répertoires :

```bash
tree -a -s
```

Voici un exemple de sortie de la commande `tree` :

```
.
├── répertoire1
│   ├── fichier1
│   └── fichier2
└── répertoire2
    ├── sous-répertoire1
    │   ├── fichier3
    │   └── fichier4
    └── sous-répertoire2
        ├── fichier5
        └── fichier6

5 directories, 6 files
```

Dans cet exemple, `tree` affiche l'arborescence des répertoires et fichiers du système de fichiers, en utilisant des lignes verticales et des croisements pour indiquer les relations de parenté entre les répertoires et les fichiers. Les fichiers sont affichés à la fin de chaque branche de l'arborescence, et les répertoires sont affichés avec la taille de leur contenu (en octets).

Il est important de noter que la commande `tree` n'est pas présente par défaut sur tous les systèmes Linux. Pour l'installer, vous pouvez utiliser votre gestionnaire de paquets habituel, par exemple `apt-get` sur Ubuntu ou `yum` sur CentOS.