**Cours liés :**
- [[3. Affichage et entrées console]]

La commande `echo` est une commande de base disponible dans de nombreux systèmes d'exploitation, y compris Linux et Unix. Elle permet d'afficher du texte à l'écran, ce qui en fait une commande utile pour afficher des messages de diagnostic ou de suivi lors de la création de scripts.

Voici comment utiliser la commande `echo` :

Pour afficher du texte à l'écran, il suffit de taper `echo` suivi du texte que vous souhaitez afficher entre guillemets :

```bash
echo "Bonjour"
```

Cela affichera "Bonjour" à l'écran.

Vous pouvez également utiliser la commande `echo` pour afficher des variables :

```bash
nom="Paul"
echo "Bonjour, $nom"
```

Cela affichera "Bonjour, Paul" à l'écran.

Il existe plusieurs options pour la commande `echo`. Par exemple, vous pouvez utiliser l'option `-n` pour empêcher `echo` de sauter à la ligne à la fin de l'affichage :

```bash
echo -n "Bonjour"
```

Cela affichera "Bonjour" sans sauter à la ligne.

Vous pouvez également utiliser l'option `-e` pour activer l'interprétation des échappements de caractères, ce qui vous permet d'utiliser des codes spéciaux pour afficher des caractères spéciaux tels que des tabulations ou des retours chariot :

```bash
echo -e "Bonjour\nAu revoir"
```

Cela affichera "Bonjour" suivi d'un retour chariot et "Au revoir" sur deux lignes distinctes.

Enfin, vous pouvez utiliser l'option `-E` pour désactiver l'interprétation des échappements de caractères si vous ne voulez pas que les codes spéciaux soient interprétés.

Voici un exemple de script qui utilise la commande `echo` avec différentes options :

```bash
#!/bin/bash

# Affiche le message "Bonjour" sans sauter à la ligne
echo -n "Bonjour"

# Affiche un retour chariot
echo -e "\n"

# Affiche "Au revoir" en utilisant l'interprétation des échappements de caractères
echo -e "Au revoir"
```

En résumé, la commande `echo` est une commande utile pour afficher du texte à l'écran dans les scripts et les shells. Elle prend en charge plusieurs options pour contrôler la façon dont le texte est affiché, telles que la suppression du saut à la ligne