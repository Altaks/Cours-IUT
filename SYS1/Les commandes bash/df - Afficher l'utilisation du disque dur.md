**Cours liés :**
- [[touch - Créer des fichiers]]
- [[mkdir - Créer des répertoires]]
- [[rm - Supprimer des fichiers, dossiers]]
- [[rmdir - Supprimer un dossier vide]]

La commande `df` est un utilitaire en ligne de commande qui permet d'afficher les informations sur l'espace disque utilisé et libre sur les systèmes de fichiers montés sur un système Linux. Cette commande est très utile pour surveiller l'espace disque disponible sur un système et pour détecter les problèmes d'espace disque manquant.

Voici comment utiliser la commande `df` :

```bash
df [options] [système de fichiers]
```

La commande `df` prend en argument le système de fichiers à afficher, qui peut être un système de fichiers local ou un système de fichiers sur un serveur distant (via un protocole de partage de fichiers comme NFS ou SMB). Si aucun système de fichiers n'est spécifié, `df` affiche les informations sur tous les systèmes de fichiers montés sur le système.

Voici quelques options couramment utilisées avec la commande `df` :

> [!info] Options
> -   `-a` : affiche également les systèmes de fichiers qui n'ont pas de partition montée, comme les répertoires virtuels `/proc` et `/sys`.
> -   `-h` : affiche les informations sur l'espace disque en unités lisibles par l'homme (Go, Mo, Ko, etc.).
> -   `-i` : affiche les informations sur le nombre de fichiers et d'inodes utilisés et disponibles.
> -   `-t` : affiche seulement les informations sur les systèmes de fichiers du type spécifié. Par exemple, `-t ext4` affiche seulement les informations sur les systèmes de fichiers de type `ext4`.

Voici un exemple d'utilisation de la commande `df` pour afficher les informations sur l'espace disque utilisé et libre de tous les systèmes de fichiers montés, en utilisant des unités lisibles par l'homme :

```bash
df -h
```

Voici un exemple de sortie de la commande `df` :

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        20G   12G  7.5G  62% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
udev            3.9G  4.0K  3.9G   1% /dev
tmpfs           787M  1.4M  786M   1% /run
none            5.0M     0  5.0M   0% /run/lock
none            3.9G  104K  3.9G   1% /run/shm
none            100M   44K  100M   1% /run/user
/dev/sdb1        30G   22G  7.9G  74% /mnt/disque2
```

Dans cet exemple, `df` affiche les informations sur l'espace disque utilisé et libre de chaque système de fichiers monté sur le système, ainsi que le pourcentage d'espace disque utilisé. Les colonnes affichées sont :

-   `Filesystem` : le nom du système de fichiers.
-   `Size` : la taille totale du système de fichiers en unités lisibles par l'homme.
-   `Used` : la quantité d'espace disque utilisée en unités lisibles
-  `Avail` : la quantité d'espace disque disponible en unités lisibles
-  `Use%` : le pourcentage d'espace disque utilisé
-  `Mounted on` : le disque sur lequel le système de fichier est situé

**Cours à voir :**
- [[du - Afficher l'utilisation d'espace d'un dossier]]