**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `cp` (pour "copy") est un utilitaire Unix et Linux qui permet de copier des fichiers et des répertoires. Elle est souvent utilisée pour copier des fichiers d'un emplacement à un autre, mais elle peut également être utilisée pour créer des copies de sauvegarde de fichiers ou pour dupliquer des répertoires entiers.

Voici comment fonctionne la commande `cp` :

1.  Lorsque vous entrez la commande `cp` dans le shell, le shell commence par rechercher le programme `cp` sur votre ordinateur.

2.  Une fois que le shell a trouvé le programme `cp`, il le lance et passe les arguments que vous avez saisi à la commande `cp`.

3.  Le programme `cp` copie le fichier ou le répertoire spécifié à l'emplacement cible en fonction des arguments spécifiés.

Voici un exemple de commande `cp` simple :

```bash
cp mon_fichier mon_fichier_copie
```

Cette commande copiera le fichier `mon_fichier` dans le répertoire courant et le renommera `mon_fichier_copie`.

Voici un autre exemple de commande `cp` :

```bash
cp mon_fichier /chemin/vers/dossier
```

Cette commande copiera le fichier `mon_fichier` dans le répertoire `/chemin/vers/dossier`. Si un fichier portant le même nom existe déjà dans ce répertoire, la commande `cp` écrasera le fichier existant avec la copie.

## Options de la commande `cp`

> [!info] Options
> -   `-a` : copie le fichier ou le répertoire ainsi que tous ses attributs, comme les permissions et les propriétaires.
> -   `-i` : demande confirmation avant d'écraser un fichier existant.
> -   `-r` : copie récursivement les sous-répertoires et leur contenu.
> -   `-v` : affiche des messages de confirmation lors de la copie des fichiers.

## Exemples d'utilisation de `cp`

Voici quelques exemples d'utilisation de la commande `cp` :

-  Pour copier le fichier `mon_fichier` dans le répertoire `/chemin/vers/dossier`, vous pouvez utiliser la commande `cp mon_fichier /chemin/vers/dossier`.
  
-  Pour copier le répertoire `mon_dossier` et tout son contenu dans le répertoire `/chemin/vers/dossier`, vous pouvez utiliser la commande `cp -r mon_dossier /chemin/vers/dossier`.
  
-  Pour copier le fichier `mon_fichier` dans le répertoire `/chemin/vers/dossier` en conservant tous ses attributs, vous pouvez utiliser la commande `cp -a mon_fichier /chemin/vers/dossier`.
  
-  Pour copier le fichier `mon_fichier` dans le répertoire `/chemin/vers/dossier` en demandant confirmation avant d'écraser un fichier existant, vous pouvez utiliser la commande `cp -i mon_fichier /chemin/vers/dossier`.

En utilisant la commande `cp` avec les chemins absolus et relatifs, et en combinant cette commande avec les options disponibles, vous pouvez facilement copier des fichiers et répertoires dans l'arborescence de fichiers de votre ordinateur. Cela peut être utile pour organiser vos fichiers et dossiers, ou pour créer des copies de sauvegarde de vos fichiers importants.