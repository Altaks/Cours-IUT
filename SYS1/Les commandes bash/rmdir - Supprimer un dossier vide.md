**Cours liés :**
- [[rm - Supprimer des fichiers, dossiers]]

La commande `rmdir` est un utilitaire en ligne de commande qui permet de supprimer des répertoires vides sur un système de fichiers Linux. Cette commande ne peut être utilisée que pour supprimer des répertoires qui ne contiennent aucun fichier ou sous-répertoire. Si le répertoire à supprimer n'est pas vide, `rmdir` affiche une erreur et refuse de le supprimer.

Voici comment utiliser la commande `rmdir` :

```bash
rmdir [options] répertoire
```

La commande `rmdir` prend en argument le nom du répertoire à supprimer, qui peut être un répertoire local ou un répertoire sur un système de fichiers distant (via un protocole de partage de fichiers comme NFS ou SMB).

```ad-info
title: Arguments
Voici quelques options couramment utilisées avec la commande `rmdir` :

-   `-p` : permet de supprimer également les répertoires parent qui sont vides, jusqu'à ce qu'un répertoire non vide soit rencontré.
  
-   `-v` : affiche des messages de confirmation pour chaque répertoire supprimé.
```

Voici un exemple de suppression du répertoire `répertoire1` et de tous les répertoires parent vides :

```bash
rmdir -p répertoire1
```

Il est important de noter que la commande `rmdir` ne peut pas être utilisée pour supprimer des répertoires qui contiennent des fichiers ou des sous-répertoires. Dans ce cas, vous devez utiliser une commande comme `rm` ou `rm -r` pour supprimer ces répertoires et leur contenu.

Il est également important de noter que la suppression d'un répertoire peut entraîner la perte de données irréversible si vous n'avez pas de sauvegarde de ces données. Il est recommandé de vérifier le contenu du répertoire avant de le supprimer et de faire une sauvegarde de ses données importantes si nécessaire.