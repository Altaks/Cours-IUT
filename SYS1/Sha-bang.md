## Le sha-bang, c'est quoi ?

Le sha-bang, également connu sous le nom de shebang ou hashbang, est une ligne de commentaire spéciale qui se trouve en tête de certains scripts Linux. Il est utilisé pour indiquer au système l'interpréteur à utiliser pour exécuter le script.

Voici à quoi ressemble un sha-bang :

```bash
#!/bin/bash
```

Le sha-bang se compose de deux éléments :

-   Le caractère `#`, qui indique qu'il s'agit d'un commentaire.
-   Le caractère `!`, qui indique au système qu'il s'agit d'un sha-bang.

Le reste de la ligne indique le chemin de l'interpréteur à utiliser pour exécuter le script. Dans l'exemple ci-dessus, le sha-bang indique au système d'utiliser l'interpréteur `bash` pour exécuter le script.

Le sha-bang est utilisé pour indiquer au système l'interpréteur à utiliser pour exécuter un script, afin que le script puisse être exécuté en utilisant la commande `./nom_du_script` au lieu de devoir utiliser la commande complète, comme `bash nom_du_script`.

Il est important de noter que le sha-bang ne fonctionne que si le fichier a les permissions d'exécution. Pour donner les permissions d'exécution à un fichier, vous pouvez utiliser la commande `chmod +x nom_du_fichier`.

En résumé, le sha-bang est une ligne de commentaire spéciale qui indique au système l'interpréteur à utiliser pour exécuter un script Linux. Il est utilisé pour permettre à un script d'être exécuté en utilisant la commande `./nom_du_script` au lieu de devoir utiliser la commande complète.