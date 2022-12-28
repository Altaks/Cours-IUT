**Cours liés :**
- [[chmod - Changer les permissions d'un fichier, dossier]]
- [[chown - Changer le propriétaire d'un fichier, dossier]]
- [[Une vue globale]]

Sur un système d'exploitation Linux, les droits d'accès des fichiers et répertoires peuvent être modifiés en utilisant la commande `chmod` et en spécifiant les droits souhaités sous forme d'un code octal.

Le code octal est une notation qui permet de représenter les droits d'accès de manière compacte en utilisant un nombre octal. Chaque chiffre du nombre octal correspond à un type de droit pour un type de parties (propriétaire, groupe et tous).

```ad-info
title: Notation octale
Voici comment les chiffres du code octal sont interprétés :

-   `0` - pas de droit
-   `1` - droit d'exécution
-   `2` - droit d'écriture
-   `3` - droits d'exécution et d'écriture (`1` + `2`)
-   `4` - droit de lecture
-   `5` - droits de lecture et d'exécution (`4` + `1`)
-   `6` - droits de lecture et d'écriture (`4` + `2`)
-   `7` - droits de lecture, d'écriture et d'exécution (`4` + `2` + `1`)
```

Par exemple, pour donner au propriétaire les droits de lecture et d'écriture, au groupe les droits de lecture et aux autres utilisateurs aucun droit sur un fichier, on peut utiliser la commande suivante :

```bash
chmod 640 fichier
```

Le code octal `664` correspond à `rw-r--r--`, c'est-à-dire que le propriétaire a les droits de lecture et d'écriture (`6`), le groupe a le droit de lecture (`4`) et les autres utilisateurs n'ont aucun droit (`0`).

Par rapport à la notation alphabétique, la notation octale dispose d'un tableau d'équivalence : 

```ad-important
title: Tableau de correspondance : Accès $\Leftrightarrow$ Octal
| Accès   | --- | --x | -w- | -wx | r-- | r-x | rw- | rwx |
| ------- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Binaire | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
| Octal   |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  | 
```

Il est recommandé de se familiariser avec cette notation pour pouvoir utiliser efficacement la commande `chmod` et gérer les droits d'accès sur un système Linux.