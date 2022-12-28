**Cours liés :**
- [[pwd - Afficher le répertoire courant]]
- [[cd - Changer de répertoire courant]]

La commande `touch` est un utilitaire Unix et Linux qui permet de créer de nouveaux fichiers vides ou de mettre à jour la date de modification d'un fichier existant. Elle est souvent utilisée pour créer de nouveaux fichiers, mais elle peut également être utilisée pour forcer la mise à jour de la date de modification d'un fichier, ce qui peut être utile dans certaines situations.

Voici comment fonctionne la commande `touch` :

1.  Lorsque vous entrez la commande `touch` dans le shell, le shell commence par rechercher le programme `touch` sur votre ordinateur.

2.  Une fois que le shell a trouvé le programme `touch`, il le lance et passe les arguments que vous avez saisi à la commande `touch`.
   
3.  Le programme `touch` crée un nouveau fichier vide ou met à jour la date de modification d'un fichier existant en fonction des arguments spécifiés.

Voici un exemple de commande `touch` simple :

```bash
touch mon_fichier
```

Cette commande créera un nouveau fichier vide nommé `mon_fichier` dans le répertoire courant. Si un fichier portant le même nom existe déjà dans le répertoire courant, la commande `touch` mettra à jour la date de modification de ce fichier sans en changer le contenu.

## Options de la commande `touch`

Voici quelques options couramment utilisées avec la commande `touch` :

> [!info] Options
> -   `-a` : met à jour la date d'accès (date à laquelle le fichier a été accédé pour la dernière fois) du fichier, mais pas la date de modification.
> -   `-c` : n'actualise pas la date de modification ou de création du fichier si le fichier n'existe pas déjà.
> -   `-m` : met à jour la date de modification (date à laquelle le fichier a été modifié pour la dernière fois) du fichier, mais pas la date d'accès.
> -   `-t <time>` : spécifie la date et l'heure de modification du fichier sous la forme `YYYYMMDDhhmm`.
> -   `--reference=<file>` : utilise la date de modification du fichier spécifié en référence pour mettre à jour la date de modification du fichier cible.

## Exemples d'utilisation de `touch`

Voici quelques exemples d'utilisation de la commande `touch` :

-  Pour créer un nouveau fichier vide nommé `mon_fichier` dans le répertoire courant, vous pouvez utiliser la commande `touch mon_fichier`.
-  Pour mettre à jour la date de modification d'un fichier existant nommé `mon_fichier` dans le répertoire courant, vous pouvez utiliser la commande `touch mon_fichier`.
-  Pour créer un nouveau fichier vide nommé `mon_fichier` dans le répertoire `/home/user`, vous pouvez utiliser la commande `touch /home/user/mon_fichier`.
-   Pour mettre à jour la date de modification d'un fichier existant nommé `mon_fichier` dans le répertoire `/usr/local/bin`, vous pouvez utiliser la commande `touch /usr/local/bin/mon_fichier`.
-   Pour mettre à jour la date d'accès d'un fichier existant nommé `mon_fichier` dans le répertoire courant, sans mettre à jour la date de modification, vous pouvez utiliser la commande `touch -a mon_fichier`.
-   Pour mettre à jour la date de modification d'un fichier existant nommé `mon_fichier` dans le répertoire `/etc`, en utilisant la date de modification du fichier `/var/log/messages` comme référence, vous pouvez utiliser la commande `touch --reference=/var/log/messages /etc/mon_fichier`.

En utilisant la commande `touch` avec les chemins absolus et relatifs, et en combinant cette commande avec les options disponibles, vous pouvez facilement créer de nouveaux fichiers vides ou mettre à jour la date de modification d'un fichier existant dans l'arborescence de fichiers de votre ordinateur. Cela peut être utile pour organiser vos fichiers et dossiers, ou pour exécuter des scripts qui nécessitent une date de modification à jour.

Il est important de noter que la commande `touch` ne modifie pas le contenu d'un fichier existant. Elle ne fait que mettre à jour la date de modification ou de création du fichier. Si vous souhaitez ajouter du contenu à un fichier existant, vous pouvez utiliser la commande `echo` ou un éditeur de texte comme `vi`, `nano` ou `gedit`.