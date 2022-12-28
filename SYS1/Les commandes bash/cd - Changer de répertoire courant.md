**Cours liés :**
- [[pwd - Afficher le répertoire courant]]

La commande `cd` (Change Directory) est utilisée pour changer de répertoire dans les shells Unix et Linux. En utilisant `cd`, vous pouvez naviguer dans l'arborescence de fichiers de votre ordinateur et accéder aux répertoires et fichiers qui s'y trouvent.

Voici comment fonctionne la commande `cd` :

1.  Lorsque vous entrez la commande `cd` dans le shell, le shell commence par rechercher le programme `cd` sur votre ordinateur.
   
2.  Une fois que le shell a trouvé le programme `cd`, il le lance et passe l'argument que vous avez saisi à la commande `cd`.
   
3.  Le programme `cd` change le répertoire courant de votre shell en fonction de l'argument spécifié. Si aucun argument n'est spécifié, `cd` vous renvoie au répertoire de démarrage de votre compte utilisateur (généralement `/home/username`).

Voici un exemple de commande `cd` simple :

```bash
cd /etc
```

Cette commande changera votre répertoire courant en `/etc`, vous permettant d'accéder aux fichiers et répertoires de ce répertoire.

## Utiliser `cd` pour accéder aux répertoires parents

Vous pouvez utiliser la commande `cd` pour accéder aux répertoires parents de votre répertoire courant en utilisant le caractère `..` comme argument.

Par exemple, si vous vous trouvez dans le répertoire `/home/user/documents`, vous pouvez utiliser la commande `cd ..` pour accéder au répertoire parent de `documents`, c'est-à-dire `/home/user`.

Vous pouvez également utiliser la commande `cd ../..` pour accéder au répertoire grand-parent de `documents`, c'est-à-dire `/home`, ou la commande `cd ../../..` pour accéder au répertoire arrière-grand-parent, et ainsi de suite.

## Exemples d'utilisation de `cd`

Voici quelques exemples d'utilisation de la commande `cd` :

-   Pour accéder au répertoire `/etc`, vous pouvez utiliser la commande `cd /etc`.
-   Pour accéder au répertoire parent de votre répertoire courant, vous pouvez utiliser la commande `cd ..`.
-   Pour accéder au répertoire de démarrage de votre compte utilisateur, vous pouvez utiliser la commande `cd` sans arguments.
-   Pour accéder au répertoire `/usr/local/bin`, vous pouvez utiliser la commande `cd /usr/local/bin`.
-   Pour accéder au répertoire `/usr/local/bin` depuis le répertoire `/etc`, vous pouvez utiliser la commande `cd /usr/local/bin`.

Il est important de noter que la commande `cd` ne fonctionne que pour changer de répertoire. Elle ne peut pas être utilisée pour créer de nouveaux répertoires ou pour supprimer des répertoires existants. Pour cela, vous devez utiliser les commandes `mkdir` et `rmdir`, respectivement.

En utilisant la commande `cd` avec les chemins absolus et relatifs, les alias et les répertoires parents, vous pouvez facilement naviguer dans l'arborescence de fichiers de votre ordinateur et accéder aux fichiers et répertoires qui vous intéressent.