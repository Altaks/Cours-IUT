**Cours liés :**
- [[pwd - Afficher le répertoire courant]]
- [[cd - Changer de répertoire courant]]

La commande `ls` est l'une des commandes les plus couramment utilisées dans les shells Unix et Linux. Elle permet d'afficher la liste des fichiers et répertoires d'un répertoire donné. Dans cet article, nous allons couvrir l'utilisation de la commande `ls`, en expliquant comment elle fonctionne et en donnant des exemples de ses différentes options et utilisations.

## Comment fonctionne la commande `ls`

La commande `ls` est utilisée pour afficher la liste des fichiers et répertoires d'un répertoire donné. Par défaut, `ls` affiche la liste des fichiers et répertoires du répertoire courant (c'est-à-dire le répertoire dans lequel vous vous trouvez actuellement). Voici comment fonctionne la commande `ls` :

1.  Lorsque vous entrez la commande `ls` dans le shell, le shell commence par rechercher le programme `ls` sur votre ordinateur.

2.  Une fois que le shell a trouvé le programme `ls`, il le lance et passe les arguments que vous avez saisis à la commande `ls`.

3.  Le programme `ls` parcourt le répertoire spécifié et récupère la liste des fichiers et répertoires contenus dans ce répertoire. Si aucun répertoire n'est spécifié, `ls` utilise le répertoire courant par défaut.

4.  Le programme `ls` affiche alors la liste des fichiers et répertoires sur la sortie standard (généralement la console ou le terminal).


Voici un exemple de commande `ls` simple :

```bash
ls
```

Cette commande affichera la liste des fichiers et répertoires du répertoire courant.

## Options de la commande `ls`

Vous pouvez utiliser des options avec la commande `ls` pour afficher plus d'informations sur les fichiers et répertoires, ou pour modifier le format de sortie de la commande. Voici quelques exemples d'options couramment utilisées avec la commande `ls` :

-   `-l` : affiche la liste des fichiers et répertoires avec plus de détails, tels que la taille du fichier, les droits d'accès et la date de modification.

Voici un exemple de commande `ls` utilisant l'option `-l` :

```bash
ls -l
```

Cette commande affichera la liste des fichiers et répertoires du répertoire courant avec plus de détails.

* `-a` : affiche tous les fichiers et répertoires, y compris ceux qui sont cachés (c'est-à-dire les fichiers dont le nom commence par un point). Par défaut, `ls` n'affiche pas ces fichiers cachés, car ils sont généralement utilisés pour stocker des fichiers de configuration ou d'autres fichiers de système qui ne sont pas censés être modifiés par l'utilisateur.

Voici un exemple de commande `ls` utilisant l'option `-a` pour afficher tous les fichiers et répertoires, y compris ceux qui sont cachés :

```bash
ls -a
```

Cette commande affichera la liste de tous les fichiers et répertoires du répertoire courant, y compris ceux qui sont cachés.

Il est important de noter que l'option `-a` ne fonctionne que pour afficher les fichiers cachés. Elle ne modifie pas le comportement de la commande `ls` pour autre chose, comme le tri ou l'affichage de détails. Si vous souhaitez afficher les fichiers cachés avec plus de détails, par exemple, vous devrez utiliser les options `-a` et `-l` ensemble :

```bash
ls -al
```

Cette commande affichera la liste de tous les fichiers et répertoires du répertoire courant, y compris ceux qui sont cachés, avec plus de détails.

## Affichage des fichiers et répertoires d'un autre répertoire

Vous pouvez également utiliser la commande `ls` pour afficher la liste des fichiers et répertoires d'un autre répertoire que le répertoire courant. Pour ce faire, vous devez spécifier le nom du répertoire comme argument de la commande `ls`.

Par exemple, pour afficher la liste des fichiers et répertoires du répertoire `/etc`, vous pouvez utiliser la commande suivante :

```bash
ls /etc
```

Vous pouvez également utiliser des chemins relatifs pour spécifier le répertoire à afficher. Par exemple, si vous vous trouvez dans le répertoire `/home/user`, vous pouvez utiliser la commande `ls ..` pour afficher la liste des fichiers et répertoires du répertoire parent (c'est-à-dire `/home`).

## Affichage des fichiers et répertoires de plusieurs répertoires

Vous pouvez également utiliser la commande `ls` pour afficher la liste des fichiers et répertoires de plusieurs répertoires en même temps. Pour ce faire, vous devez simplement spécifier le nom de chaque répertoire comme argument de la commande `ls`.

Par exemple, pour afficher la liste des fichiers et répertoires des répertoires `/etc` et `/home/user`, vous pouvez utiliser la commande suivante :

```bash
ls /etc /home/usr
```

La commande `ls` affichera alors la liste des fichiers et répertoires de chaque répertoire, en les séparant par un espace.

## Tri des fichiers et répertoires

Vous pouvez utiliser l'option `-S` pour trier la liste des fichiers et répertoires par taille, du plus grand au plus petit. Vous pouvez également utiliser l'option `-t` pour trier la liste par date de modification, du plus récent au plus ancien.

Voici un exemple de commande `ls` utilisant l'option `-S` pour trier la liste par taille :

```bash
ls -S
```

Et voici un exemple de commande `ls` utilisant l'option `-t` pour trier la liste par date de modification :

```bash
ls -t
```

Vous pouvez également combiner ces options pour trier la liste par taille et date de modification. Par exemple, la commande suivante triera la liste par taille, puis par date de modification pour les fichiers de taille identique :

```bash
ls -t -S
```

## Liste complète des options de la commande `ls`

Voici une liste des options couramment utilisées avec la commande `ls` :

> [!info] Options
> -  `-a` : affiche tous les fichiers et répertoires, y compris ceux qui sont cachés (c'est-à-dire dont le nom commence par un point).
> -  `-l` : affiche la liste des fichiers et répertoires avec plus de détails, tels que la taille du fichier, les droits d'accès et la date de modification.
> -  `-d` : affiche seulement les répertoires eux-mêmes, et non leur contenu.
> -  `-h` : affiche les tailles de fichier de manière lisible par l'homme (c'est-à-dire en utilisant des unités comme K, M ou G au lieu de chiffres bruts).
> -  `-R` : affiche récursivement la liste des fichiers et répertoires de tous les sous-répertoires du répertoire spécifié.
> -  `-S` : trie la liste des fichiers et répertoires par taille, du plus grand au plus petit.
> -  `-t` : trie la liste des fichiers et répertoires par date de modification, du plus récent au plus ancien.

Il existe de nombreuses autres options disponibles pour la commande `ls`, vous pouvez donc personnaliser l'affichage de la liste de fichiers et répertoires selon vos besoins. Pour en savoir plus sur les options disponibles, vous pouvez consulter la documentation de votre shell ou utiliser la commande `man ls` pour afficher la page de manuel de `ls`.