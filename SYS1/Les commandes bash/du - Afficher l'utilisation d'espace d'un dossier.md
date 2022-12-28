**Cours liés :**
- [[ls - Lister les fichiers]]
- [[df - Afficher l'utilisation du disque dur]]

La commande `du` est un utilitaire en ligne de commande qui permet de calculer l'espace disque occupé par les répertoires et les fichiers d'un système de fichiers Linux. Cette commande est très utile pour surveiller l'espace disque occupé par les fichiers et les répertoires sur un système et pour trouver les fichiers ou les répertoires qui occupent le plus d'espace disque.

Voici comment utiliser la commande `du` :

```bash
du [options] [répertoire]
```

La commande `du` prend en argument le répertoire à analyser, qui peut être un répertoire local ou un répertoire sur un système de fichiers distant (via un protocole de partage de fichiers comme NFS ou SMB). Si aucun répertoire n'est spécifié, `du` analyse l'ensemble du système de fichiers.

Voici quelques options couramment utilisées avec la commande `du` :

> [!info] Options
> -   `-a` : affiche l'espace disque occupé par chaque fichier et répertoire, en plus de l'espace disque occupé par l'ensemble du répertoire.
> -   `-h` : affiche l'espace disque occupé en unités lisibles par l'homme (Go, Mo, Ko, etc.).
> -   `-s` : affiche seulement l'espace disque occupé par l'ensemble du répertoire, pas par chaque fichier et sous-répertoire.
> -   `-c` : affiche le total de l'espace disque occupé par tous les répertoires analysés.
> -   `-L n` : suit les liens symboliques jusqu'à n niveaux de profondeur.

Voici un exemple d'utilisation de la commande `du` pour afficher l'espace disque occupé par l'ensemble du système de fichiers, en utilisant des unités lisibles par l'homme et en incluant l'espace disque occupé par chaque fichier et répertoire :

```bash
du -ah
```

Voici un exemple de sortie de la commande `du` :

```
4.0K    ./répertoire1
12K     ./répertoire1/fichier1
8.0K    ./répertoire1/fichier2
4.0K    ./répertoire2
12K     ./répertoire2/sous-répertoire1
12K     ./répertoire2/sous-répertoire1/fichier3
8.0K    ./répertoire2/sous-répertoire1/fichier4
4.0K    ./répertoire2/sous-répertoire2
12K     ./répertoire2/sous-répertoire2/fichier5
8.0K    ./répertoire2/sous-répertoire2/fichier6
48K     .
```

Dans cet exemple, `du` affiche l'espace disque occupé par chaque fichier et répertoire du système de fichiers, ainsi que l'espace disque occupé par l'ensemble du répertoire. Les répertoires sont affichés avec l'espace disque occupé par leur contenu, et les fichiers sont affichés avec leur taille en octets.

Il est important de noter que la commande `du` peut être relativement lente pour analyser de grands systèmes de fichiers ou de nombreux répertoires. Il est recommandé de limiter l'analyse à des répertoires spécifiques si possible, ou d'utiliser des options comme `-s` ou `-L` pour limiter la profondeur de l'analyse.