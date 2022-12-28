**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `find` est un outil de recherche de fichiers dans un système de fichiers. Elle peut être utilisée pour rechercher des fichiers en fonction de leur nom, de leur type, de leur propriétaire, de leur groupe, de leur date de modification ou de tout autre critère. Elle peut également être utilisée pour exécuter des actions sur les fichiers trouvés, comme les afficher, les supprimer, les renommer, etc.

Voici comment utiliser la commande `find` avec quelques exemples :

Pour rechercher des fichiers dans un répertoire donné, vous pouvez utiliser la syntaxe suivante :

```bash
find path -name "pattern"
```

Par exemple, pour rechercher tous les fichiers qui ont pour nom `test.txt` dans le répertoire `/home/user/documents`, vous pouvez utiliser la commande suivante :

```bash
find /home/user/documents -name "test.txt"
```

La commande `find` prend également en charge plusieurs options qui vous permettent de contrôler sa recherche :

> [!info] Options
> -   `-type` : permet de spécifier le type de fichier à rechercher (fichier régulier, répertoire, lien symbolique, etc.).
> -   `-mtime` : permet de spécifier le nombre de jours depuis la dernière modification du fichier.
> -   `-user` : permet de spécifier le propriétaire du fichier.
> -   `-group` : permet de spécifier le groupe propriétaire du fichier.

Voici quelques exemples d'utilisation de ces options :

```bash
# Recherche les fichiers réguliers qui ont pour nom "test.txt"
find /home/user/documents -type f -name "test.txt"

# Recherche les fichiers qui ont été modifiés il y a moins de 3 jours
find /home/user/documents -mtime -3

# Recherche les fichiers qui appartiennent à l'utilisateur "user"
find /home/user/documents -user "user"

# Recherche les fichiers qui appartiennent au groupe "users"
find /home/user/documents -group "users"
```

Il est également possible d'utiliser la commande `find` pour exécuter des actions sur les fichiers trouvés.

Pour exécuter des actions sur les fichiers trouvés avec la commande `find`, vous pouvez utiliser l'option `-exec` suivie de la commande à exécuter et de `{}` qui seront remplacés par le nom du fichier trouvé. Par exemple, pour afficher le nom de tous les fichiers trouvés, vous pouvez utiliser la commande suivante :

```bash
find /home/user/documents -exec echo {} \;
```

Pour supprimer tous les fichiers trouvés, vous pouvez utiliser la commande `rm` à la place de `echo` :

```bash
find /home/user/documents -exec rm {} \;
```

Il est important de noter que cette commande peut être dangereuse si elle est utilisée de manière imprudente, car elle peut supprimer des fichiers importantes. Assurez-vous de bien comprendre ce que vous faites avant d'utiliser cette commande.

Voici quelques exemples supplémentaires d'utilisation de la commande `find` :

-   Recherche les fichiers qui ont été modifiés il y a plus de 3 jours et les affiche :

```bash
find /home/user/documents -mtime +3 -exec echo {} \;
```

-   Recherche les fichiers qui ont été modifiés il y a moins de 3 jours et les renomme en ajoutant la date de modification à leur nom :

```bash
find /home/user/documents -mtime -3 -exec sh -c 'mv "$1" "$1-$(date -r "$1" +%Y%m%d)"' -- {} \;
```

-   Recherche les fichiers qui ont été modifiés il y a moins de 3 jours et les copie dans le répertoire `/backup` :

```bash
find /home/user/documents -mtime -3 -exec cp {} /backup \;
```
