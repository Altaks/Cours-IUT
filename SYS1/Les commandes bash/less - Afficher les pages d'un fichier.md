**Cours liés :**
- [[cat - Afficher le contenu d'un fichier]]

La commande `less` est un visualiseur de fichiers utilisé pour afficher le contenu d'un fichier dans le terminal de manière paginée. Elle permet de parcourir le contenu du fichier de manière interactive en utilisant des commandes de navigation.

Voici comment utiliser la commande `less` avec quelques exemples :

Pour afficher le contenu d'un fichier avec la commande `less`, vous pouvez utiliser la syntaxe suivante :

```bash
less file
```

Par exemple, pour afficher le contenu du fichier `test.txt`, vous pouvez utiliser la commande suivante :

```bash
less test.txt
```

Lorsque vous exécutez cette commande, le contenu du fichier est affiché dans le terminal de manière paginée, c'est-à-dire par tranches de quelques lignes à la fois. Vous pouvez utiliser les flèches du haut et du bas pour naviguer dans le fichier, ou bien utiliser la touche `Page Up` et `Page Down` pour avancer ou reculer d'une page à la fois.

La commande `less` prend également en charge plusieurs options qui vous permettent de contrôler son comportement :

-   `-N` : affiche le numéro de ligne devant chaque ligne de sortie.
-   `-S` : ne pas couper les lignes trop longues, mais les afficher sur plusieurs lignes.
-   `-X` : ne pas afficher l'historique de la navigation lorsque vous quittez `less`.

Voici quelques exemples d'utilisation de ces options :

```bash
# Affiche le numéro de ligne devant chaque ligne de sortie
less -N test.txt

# Ne pas couper les lignes trop longues, mais les afficher sur plusieurs lignes
less -S test.txt

# Ne pas afficher l'historique de la navigation lorsque vous quittez less
less -X test.txt
```

Il est également possible de rechercher du texte dans le fichier en utilisant la commande `/` suivie de la chaîne de caractères à rechercher.

Voici quelques exemples supplémentaires d'utilisation de la commande `less` :

-  Afficher le contenu du fichier `file.txt` en commençant à la 10ème ligne :

```bash
less +10 file.txt
```

-   Afficher le contenu du fichier `file.txt` en commençant à la ligne contenant la chaîne de caractères `example` :

```bash
less +/example file.txt
```

-   Afficher le contenu du fichier `file.txt` en utilisant la commande `less` pour lire le fichier depuis l'output d'une autre commande :

```bash
cat file.txt | less
```

Il est important de noter que la commande `less` ne modifie pas le fichier d'origine, mais affiche simplement son contenu de manière paginée dans le terminal.