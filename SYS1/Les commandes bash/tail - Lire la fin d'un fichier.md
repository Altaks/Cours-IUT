**Cours liés :**
- [[cat - Afficher le contenu d'un fichier]]

La commande `tail` est un outil en ligne de commande disponible sur de nombreux systèmes d'exploitation, y compris Linux et Unix. Elle permet d'afficher les dernières lignes d'un fichier ou d'un flux de données. Cette commande est particulièrement utile pour afficher rapidement la fin d'un fichier volumineux sans avoir à ouvrir l'ensemble du fichier.

Voici comment utiliser la commande `tail` :

Pour afficher les 10 dernières lignes d'un fichier, il suffit de taper `tail` suivi du nom du fichier :

```bash
tail mon_fichier.txt
```

Vous pouvez également utiliser l'option `-n` pour spécifier le nombre de lignes à afficher :

```bash
tail -n 5 mon_fichier.txt
```

Cela affichera les 5 dernières lignes de `mon_fichier.txt`.

Vous pouvez également utiliser la commande `tail` avec plusieurs fichiers à la fois :

```bash
tail fichier1.txt fichier2.txt fichier3.txt
```

Dans ce cas, `tail` affichera les 10 dernières lignes de chaque fichier.

Il existe plusieurs autres options utiles pour la commande `tail`. Par exemple, vous pouvez utiliser l'option `-f` pour suivre en temps réel un fichier qui est en cours d'écriture (par exemple, un fichier de journal). Vous pouvez également utiliser l'option `-c` pour afficher un certain nombre de caractères au lieu de lignes.

Voici un exemple de script qui utilise la commande `tail` avec différentes options :

```bash
#!/bin/bash

# Affiche les 5 dernières lignes de fichier1.txt et fichier2.txt
tail -n 5 fichier1.txt fichier2.txt

# Affiche les 10 derniers caractères de fichier3.txt
tail -c 10 fichier3.txt

# Suis en temps réel le fichier de journal /var/log/syslog
tail -f /var/log/syslog
```

```ad-info
title: Arguments
Voici les options principales de la commande `tail` :

-   `-n <nombre>` : permet de spécifier le nombre de lignes à afficher. Par exemple, `tail -n 5 mon_fichier.txt` affichera les 5 dernières lignes de `mon_fichier.txt`.
  
-   `-c <nombre>` : permet de spécifier le nombre de caractères à afficher. Par exemple, `tail -c 10 mon_fichier.txt` affichera les 10 derniers caractères de `mon_fichier.txt`.
-   `-f` : permet de suivre en temps réel un fichier qui est en cours d'écriture (par exemple, un fichier de journal).
-   `-q` : masque les noms de fichier lors de l'affichage de plusieurs fichiers.
-   `-v` : affiche les noms de fichier même si vous ne spécifiez qu'un seul fichier.
-   `-h` ou `--help` : affiche l'aide de la commande `tail`.
-   `--version` : affiche la version de `tail`.
```

Il existe également plusieurs options avancées pour la commande `tail`, telles que `--bytes`, `--lines`, `--follow`, `--retry` et `--max-unchanged-stats`, qui permettent de contrôler la façon dont `tail` traite les données. Pour plus d'informations sur ces options, vous pouvez consulter la documentation de la commande `tail` en utilisant la commande `man tail` ou en consultant la documentation en ligne.

En résumé, la commande `tail` est un outil utile pour afficher rapidement la fin d'un fichier ou d'un flux de données. Elle prend en charge plusieurs options pour contrôler la façon dont les données sont affichées et peut être utilisée avec un ou plusieurs fichiers à la fois.