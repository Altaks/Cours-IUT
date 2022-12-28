**Cours liés :**
- [[echo - Afficher du texte]]
- [[cd - Changer de répertoire courant]]
- [[touch - Créer des fichiers]]

La commande `cat` (concatenate) est utilisée pour afficher le contenu d'un ou plusieurs fichiers dans la sortie standard (généralement le terminal). Elle peut également être utilisée pour concaténer (joindre) plusieurs fichiers en un seul, ou pour créer de nouveaux fichiers en y écrivant du contenu.

Voici comment utiliser la commande `cat` avec quelques exemples :

Pour afficher le contenu d'un fichier, vous pouvez utiliser la syntaxe suivante :

```bash
cat file
```

Par exemple, pour afficher le contenu du fichier `test.txt`, vous pouvez utiliser la commande suivante :

```bash
cat test.txt
```

Pour concaténer plusieurs fichiers en un seul, vous pouvez utiliser la syntaxe suivante :

```bash
cat file1 file2 file3 > output_file
```

Dans ce cas, le contenu de `file1`, `file2` et `file3` sera concaténé et enregistré dans le fichier `output_file`. Si le fichier `output_file` existe déjà, son contenu sera remplacé par la concaténation des autres fichiers. Si le fichier `output_file` n'existe pas, il sera créé.

La commande `cat` prend également en charge plusieurs options qui vous permettent de contrôler son comportement :

>[!info] Options 
>-   `-n` : ajoute un numéro de ligne devant chaque ligne de sortie.
>-   `-s` : supprime les lignes vides consécutives.
> -   `-E` : ajoute un `$` à la fin de chaque ligne de sortie.

Voici quelques exemples d'utilisation de ces options :

```bash
# Ajoute un numéro de ligne devant chaque ligne de sortie
cat -n test.txt

# Supprime les lignes vides consécutives
cat -s test.txt

# Ajoute un $ à la fin de chaque ligne de sortie
cat -E test.txt
```

Il est également possible d'utiliser la commande `cat` pour créer de nouveaux fichiers en y écrivant du contenu. Pour ce faire, vous pouvez utiliser la syntaxe suivante :

```bash
cat > file
```

Lorsque vous exécutez cette commande, le terminal vous invite à entrer du texte. Vous pouvez taper du texte et utiliser `CTRL + D` pour indiquer la fin de l'entrée et enregistrer le contenu dans le fichier `file`.