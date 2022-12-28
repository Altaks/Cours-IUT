**Cours liés :**
- [[cat - Afficher le contenu d'un fichier]]
- [[head - Lire le début d'un fichier]]
- [[tail - Lire la fin d'un fichier]]

La commande `grep` (global regular expression print) est un outil de recherche de chaînes de caractères dans des fichiers ou dans l'output d'autres commandes. Elle peut être utilisée pour rechercher des chaînes de caractères spécifiques dans un ou plusieurs fichiers, ou pour filtrer l'output d'autres commandes en ne conservant que les lignes qui correspondent à une expression régulière donnée.

Voici comment utiliser la commande `grep` avec quelques exemples :

Pour rechercher une chaîne de caractères spécifique dans un fichier, vous pouvez utiliser la syntaxe suivante :

```bash
grep "pattern" file
```

Par exemple, pour rechercher la chaîne `example` dans le fichier `test.txt`, vous pouvez utiliser la commande suivante :

```bash
grep "example" test.txt
```

Lorsque vous exécutez cette commande, `grep` affiche toutes les lignes du fichier qui contiennent la chaîne `example`.

```ad-info
title: Arguments
La commande `grep` prend également en charge plusieurs options qui vous permettent de contrôler son comportement :

-   `-i` : ignore la casse lors de la recherche (ne fait pas la différence entre majuscules et minuscules).
  
-   `-n` : affiche le numéro de ligne devant chaque ligne de sortie.
-   `-v` : inverse le processus de recherche, et affiche tous les fichiers qui ne disposent pas de la chaine de caractère spécifiée
-  `-l` : ne affiche que les noms des fichiers qui contiennent la chaîne de caractères recherchée.
-   `-c` : affiche le nombre de lignes qui correspondent à la chaîne de caractères recherchée pour chaque fichier.
-   `-r` : effectue la recherche de manière récursive dans tous les sous-répertoires.
-   `-o` : ne affiche que les parties des lignes qui correspondent à la chaîne de caractères recherchée.
```

Voici quelques exemples d'utilisation de ces options :

```bash
# Ignore la casse lors de la recherche
grep -i "example" test.txt

# Affiche le numéro de ligne devant chaque ligne de sortie
grep -n "example" test.txt

# Affiche uniquement les lignes qui ne contiennent pas la chaîne de caractères recherchée
grep -v "example" test.txt

# Affiche uniquement les noms des fichiers qui contiennent la chaîne de caractères recherchée
grep -l "example" ./
```

