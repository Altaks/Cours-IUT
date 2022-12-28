**Cours liés :**
- [[cat - Afficher le contenu d'un fichier]]

La commande `head` est un outil en ligne de commande disponible sur de nombreux systèmes d'exploitation, y compris Linux et Unix. Elle permet d'afficher les premières lignes d'un fichier ou d'un flux de données. Cette commande est particulièrement utile pour afficher rapidement le début d'un fichier volumineux sans avoir à ouvrir l'ensemble du fichier.

Voici comment utiliser la commande `head` :

Pour afficher les 10 premières lignes d'un fichier, il suffit de taper `head` suivi du nom du fichier :

```bash
head mon_fichier.txt
```

Vous pouvez également utiliser l'option `-n` pour spécifier le nombre de lignes à afficher :

```bash
head -n 5 mon_fichier.txt
```

Cela affichera les 5 premières lignes de `mon_fichier.txt`.

Vous pouvez également utiliser la commande `head` avec plusieurs fichiers à la fois :

```bash
head fichier1.txt fichier2.txt fichier3.txt
```

Dans ce cas, `head` affichera les 10 premières lignes de chaque fichier.

```ad-info
title: Arguments
Voici les options principales de la commande `head` :

-   `-n <nombre>` : permet de spécifier le nombre de lignes à afficher. 
Par exemple, `head -n 5 mon_fichier.txt` affichera les 5 premières lignes de `mon_fichier.txt`.
  
-   `-c <nombre>` : permet de spécifier le nombre de caractères à afficher. Par exemple, `head -c 10 mon_fichier.txt` affichera les 10 premiers caractères de `mon_fichier.txt`.
-   `-q` : masque les noms de fichier lors de l'affichage de plusieurs fichiers.
-   `-v` : affiche les noms de fichier même si vous ne spécifiez qu'un seul fichier.
-   `-h` ou `--help` : affiche l'aide de la commande `head`.
-   `--version` : affiche la version de `head`.
```

Il existe également plusieurs options avancées pour la commande `head`, telles que `--bytes`, `--lines`, `--max-lines` et `--max-bytes`, qui permettent de contrôler la façon dont `head` traite les données. Pour plus d'informations sur ces options, vous pouvez consulter la documentation de la commande `head` en utilisant la commande `man head` ou en consultant la documentation en ligne.

En résumé, la commande `head` est un outil utile pour afficher rapidement le début d'un fichier ou d'un flux de données. Elle prend en charge plusieurs options pour contrôler la façon dont les données sont affichées et peut être utilisée avec un ou plusieurs fichiers à la fois.