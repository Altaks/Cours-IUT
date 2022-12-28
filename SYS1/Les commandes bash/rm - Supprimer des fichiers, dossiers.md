**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `rm` (remove) est utilisée pour supprimer des fichiers et des dossiers dans un système de fichiers.

Voici comment utiliser la commande `rm` avec quelques exemples :

Pour supprimer un fichier, vous pouvez utiliser la syntaxe suivante :

```bash
rm file
```

Par exemple, pour supprimer le fichier `test.txt`, vous pouvez utiliser la commande suivante :

```bash
rm test.txt
```


Pour supprimer un dossier, vous pouvez utiliser la syntaxe suivante :

```bash
rm -r directory
```

Par exemple, pour supprimer le dossier `documents`, vous pouvez utiliser la commande suivante :

```bash
rm -r documents
```

La commande `rm` prend également en charge plusieurs options qui vous permettent de contrôler son comportement :

-   `-f` : ignore toutes les erreurs et force la suppression du fichier ou du dossier.
-   `-i` : demande une confirmation avant de supprimer le fichier ou le dossier.
-   `-v` : affiche les noms des fichiers et des dossiers qui sont supprimés.

Voici quelques exemples d'utilisation de ces options :

```bash
# Demande une confirmation avant de supprimer le fichier
rm -i test.txt

# Force la suppression du fichier même s'il n'existe pas
rm -f test.txt

# Affiche les noms des fichiers et des dossiers supprimés
rm -v test.txt documents/
```

Il est également possible d'utiliser la commande `rm` pour supprimer plusieurs fichiers ou dossiers en même temps en les spécifiant tous comme arguments :

```bash
rm file1 file2 file3
```

Dans ce cas, les fichiers `file1`, `file2` et `file3` seront supprimés.

Il est important de noter que la commande `rm` ne déplace pas les fichiers ou les dossiers dans la corbeille avant de les supprimer, mais les supprime définitivement du système de fichiers. Cela signifie qu'il n'est pas possible de récupérer les fichiers ou les dossiers supprimés avec cette commande.