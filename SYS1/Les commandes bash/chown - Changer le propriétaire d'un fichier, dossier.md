**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `chown` (change owner) est un outil qui permet de changer le propriétaire d'un fichier ou d'un répertoire dans un système de fichiers. Elle permet de définir l'utilisateur et le groupe propriétaire d'un fichier ou d'un répertoire, ainsi que de changer les permissions associées.

Voici comment utiliser la commande `chown` avec quelques exemples :

Pour changer le propriétaire d'un fichier ou d'un répertoire, vous pouvez utiliser la syntaxe suivante:

```bash
chown owner:group file
```

Par exemple, pour changer le propriétaire de `test.txt` en `user` et son groupe propriétaire en `members`, vous pouvez utiliser la commande suivante :

```bash
chown user:members test.txt
```

La commande `chown` prend également en charge plusieurs options qui vous permettent de contrôler son comportement :

```ad-info
title: Arguments
-   `-R` : permet de changer le propriétaire de manière récursive, c'est-à-dire de manière à inclure tous les sous-répertoires.
  
-   `-f` : permet de forcer le changement de propriétaire même si des erreurs sont détectées.
-   `-v` : permet d'afficher une trace des fichiers pour lesquels le propriétaire a été modifié.
```

Voici quelques exemples d'utilisation de ces options :

```bash
# Change le propriétaire de manière récursive pour tous les fichiers et répertoires du répertoire "documents"
chown -R user:users documents

# Force le changement de propriétaire même si des erreurs sont détectées
chown -f user:members test.txt

# Affiche une trace des fichiers pour lesquels le propriétaire a été modifié
chown -v user:members test.txt
```

Il est important de noter que la commande `chown` nécessite des permissions de superutilisateur (root) pour changer le propriétaire de certains fichiers ou répertoires protégés.

**Cours à voir :**
- [[Un utilisateur, c'est quoi]]
- [[Un groupe, c'est quoi]]