**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `chmod` (change mode) est un outil qui permet de changer les permissions d'accès aux fichiers et répertoires dans un système de fichiers. Elle permet de définir qui peut lire, écrire ou exécuter un fichier, ainsi que de définir les permissions du propriétaire du fichier, du groupe propriétaire du fichier et de tous les autres utilisateurs.

Voici comment utiliser la commande `chmod` avec quelques exemples :

Pour changer les permissions d'un fichier ou d'un répertoire, vous pouvez utiliser la syntaxe suivante :

```bash
chmod mode file
```

Par exemple, pour donner les permissions de lecture et d'écriture au propriétaire du fichier `test.txt` et de lecture seulement au groupe propriétaire et à tous les autres utilisateurs, vous pouvez utiliser la commande suivante :

```bash
chmod 644 test.txt
```

```ad-info
title: Arguments
Voici la suite des options disponibles pour la commande `chmod` :

-   `-R` : permet de changer les permissions de manière récursive, c'est-à-dire de manière à inclure tous les sous-répertoires.
  
-   `-f` : permet de forcer le changement de permissions même si des erreurs sont détectées.
-   `-v` : permet d'afficher une trace des fichiers pour lesquels les permissions ont été modifiées.
```

Voici quelques exemples d'utilisation de ces options :

```bash
# Change les permissions de manière récursive pour tous les fichiers et répertoires du répertoire "documents"
chmod -R 644 documents

# Force le changement de permissions même si des erreurs sont détectées
chmod -f 644 test.txt

# Affiche une trace des fichiers pour lesquels les permissions ont été modifiées
chmod -v 644 test.txt
```

Il est important de noter que la commande `chmod` nécessite des permissions de superutilisateur (root) pour changer les permissions de certains fichiers ou répertoires protégés.

**Cours à voir :**
- [[La notation alphabétique]]
- [[La notation octale]]