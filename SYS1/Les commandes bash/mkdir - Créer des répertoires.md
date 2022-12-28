**Cours liés :**
- [[ls - Lister les fichiers]]

La commande `mkdir` (Make Directory) est utilisée pour créer de nouveaux répertoires dans les shells Unix et Linux. En utilisant `mkdir`, vous pouvez créer des répertoires vides et les utiliser pour organiser vos fichiers et dossiers.

Voici comment fonctionne la commande `mkdir` :

1. Lorsque vous entrez la commande `mkdir` dans le shell, le shell commence par rechercher le programme `mkdir` sur votre ordinateur.

2. Une fois que le shell a trouvé le programme `mkdir`, il le lance et passe l'argument que vous avez saisi à la commande `mkdir`.

3. Le programme `mkdir` crée un nouveau répertoire vide dans le répertoire courant, ou dans le répertoire spécifié en argument.


Voici un exemple de commande `mkdir` simple :

```bash
mkdir mon_dossier
```

Cette commande créera un nouveau répertoire vide nommé `mon_dossier` dans le répertoire courant.

## Créer des répertoires à partir de chemins absolus ou relatifs

Vous pouvez également utiliser la commande `mkdir` pour créer des répertoires dans d'autres répertoires que le répertoire courant, en utilisant soit un chemin absolu, soit un chemin relatif.

Un chemin absolu est le chemin complet vers un répertoire, en partant de la racine de l'arborescence de fichiers (`/`). Par exemple, pour créer un répertoire `mon_dossier` dans le répertoire `/home/user`, vous pouvez utiliser la commande suivante :

```bash
mkdir /home/user/mon_dossier
```

Un chemin relatif est un chemin vers un répertoire en partant du répertoire courant. Par exemple, pour créer un répertoire `mon_dossier` dans le répertoire parent de votre répertoire courant, vous pouvez utiliser la commande suivante :

```bash
mkdir ../mon_dossier
```

## Créer des répertoires en utilisant des noms de fichiers existants

Il est important de noter que la commande `mkdir` ne peut pas créer de nouveaux répertoires si un fichier portant le même nom existe déjà dans le répertoire cible. Si vous essayez de créer un répertoire avec un nom de fichier existant, la commande `mkdir` affichera une erreur.

Pour contourner ce problème, vous pouvez utiliser l'option `-p` de la commande `mkdir`, qui permet de créer les répertoires intermédiaires d'un chemin de répertoire s'ils n'existent pas déjà. Ainsi, si vous utilisez la commande `mkdir -p` et que le répertoire cible n'existe pas, `mkdir` créera tous les répertoires intermédiaires nécessaires pour arriver au répertoire cible, même s'ils portent le même nom que des fichiers existants.

Voici un exemple de commande `mkdir` utilisant l'option `-p` :

```shell
mkdir -p /etc/mon_dossier
```

Dans cet exemple, si le répertoire `mon_dossier` n'existe pas déjà dans le répertoire `/etc`, la commande `mkdir` créera le répertoire `mon_dossier` et tous les répertoires intermédiaires nécessaires (`/etc`) pour arriver au répertoire cible, même s'il y a déjà des fichiers portant le même nom dans ces répertoires.

## Exemples d'utilisation de `mkdir`

Voici quelques exemples d'utilisation de la commande `mkdir` :

-  Pour créer un répertoire `mon_dossier` dans le répertoire courant, vous pouvez utiliser la commande `mkdir mon_dossier`.
  
-  Pour créer un répertoire `mon_dossier` dans le répertoire parent de votre répertoire courant, vous pouvez utiliser la commande `mkdir ../mon_dossier`.
  
-  Pour créer un répertoire `mon_dossier` dans le répertoire `/home/user`, vous pouvez utiliser la commande `mkdir /home/user/mon_dossier`.
  
-  Pour créer un répertoire `mon_dossier` dans le répertoire `/usr/local/bin`, vous pouvez utiliser la commande `mkdir /usr/local/bin/mon_dossier`.
  
-  Pour créer un répertoire `mon_dossier` dans le répertoire `/etc`, même si des fichiers portant le même nom existent déjà dans ce répertoire, vous pouvez utiliser la commande `mkdir -p /etc/mon_dossier`.

En utilisant la commande `mkdir` avec les chemins absolus et relatifs, vous pouvez facilement créer de nouveaux répertoires dans l'arborescence de fichiers de votre ordinateur et organiser vos fichiers et dossiers.