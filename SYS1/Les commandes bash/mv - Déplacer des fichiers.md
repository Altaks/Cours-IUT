**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `mv` (move) est utilisée pour déplacer ou renommer des fichiers et des dossiers dans un système de fichiers.

Voici comment utiliser la commande `mv` avec quelques exemples :

Pour déplacer un fichier ou un dossier, vous pouvez utiliser la syntaxe suivante :

```bash
mv source destination
```

Par exemple, pour déplacer le fichier `test.txt` dans le dossier `documents`, vous pouvez utiliser la commande suivante :

```bash
mv test.txt documents/
```

Pour renommer un fichier ou un dossier, vous pouvez utiliser la même syntaxe en spécifiant le nouveau nom du fichier ou du dossier comme destination :

```bash
mv ancien_nom nouveau_nom
```

Par exemple, pour renommer le fichier `test.txt` en `example.txt`, vous pouvez utiliser la commande suivante :

```bash
mv test.txt example.txt
```

La commande `mv` prend également en charge plusieurs options qui vous permettent de contrôler son comportement :

> [!info] Options
> -   `-f` : ignore toutes les erreurs et force le déplacement ou le renommage du fichier ou du dossier.
> -   `-i` : demande une confirmation avant de déplacer ou de renommer le fichier ou le dossier.
> -   `-n` : n'écrase pas les fichiers existants et renvoie une erreur si le fichier de destination existe déjà.
> -   `-v` : affiche les noms des fichiers et des dossiers qui sont déplacés ou renommés.

Voici quelques exemples d'utilisation de ces options :

```bash
# Demande une confirmation avant de déplacer le fichier
mv -i test.txt documents/

# Force le déplacement du fichier même s'il existe déjà dans le dossier de destination
mv -f test.txt documents/

# Ne déplace pas le fichier s'il existe déjà dans le dossier de destination
mv -n test.txt documents/

# Affiche les noms des fichiers et des dossiers déplacés
mv -v test.txt documents/
```

Il est également possible d'utiliser la commande `mv` pour déplacer plusieurs fichiers ou dossiers en même temps en les spécifiant tous comme source, suivis de la destination :

```bash
mv file1 file2 file3 destination/
```

Dans ce cas, les fichiers `file1`, `file2` et `file3` seront déplacés dans le dossier de destination. Si la destination est un fichier, la commande `mv` renvoie une erreur.

Voici quelques exemples supplémentaires d'utilisation de la commande `mv` :

-   Déplacer tous les fichiers de type `.txt` du répertoire courant dans le dossier `documents` :

```bash
mv *.txt documents/
```

-   Déplacer le fichier `file.txt` dans le répertoire parent :

```bash
mv file.txt ../
```

-   Déplacer le fichier `file.txt` dans le répertoire racine :

```bash
mv file.txt /
```

Il est important de noter que la commande `mv` ne copie pas les fichiers ou les dossiers, mais les déplace réellement dans le système de fichiers. Cela signifie que le fichier ou le dossier original n'existe plus à l'emplacement d'origine une fois qu'il a été déplacé.