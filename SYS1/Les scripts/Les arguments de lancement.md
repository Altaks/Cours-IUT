**Cours liés :**
- [[Un shell, c'est quoi]]

Les arguments de lancement d'un script Linux sont des paramètres passés à un script lors de son exécution, qui peuvent être utilisés pour configurer ou personnaliser le comportement du script. Ils sont généralement utilisés pour passer des valeurs ou des options spécifiques au script, ou pour indiquer des actions à effectuer.

Voici comment utiliser les arguments de lancement d'un script Linux :

```shell
./mon_script.sh arg1 arg2 arg3 ...
```

Dans cet exemple, `mon_script.sh` est le nom du script à exécuter, et `arg1`, `arg2`, `arg3`, etc. sont les arguments de lancement passés au script.

Les arguments de lancement sont disponibles dans le script sous forme de variables d'environnement. La variable `$0` contient le nom du script lui-même, tandis que les variables `$1`, `$2`, `$3`, etc. contiennent les arguments de lancement respectivement. Par exemple, si le script `mon_script.sh` contient la ligne suivante :

```bash
echo "Premier argument : $1"
```

Lorsque le script est exécuté avec l'argument `arg1`, la sortie sera :

```bash
Premier argument : arg1
```

Il est également possible de récupérer tous les arguments de lancement dans un tableau, en utilisant la variable spéciale `"$@"`. Par exemple, si le script `mon_script.sh` contient la ligne suivante :

```bash
for arg in "$@"
do
    echo "Argument : $arg"
done
```

Lorsque le script est exécuté avec les arguments `arg1` et `arg2`, la sortie sera :

```bash
Argument : arg1
Argument : arg2
```

Pour afficher le nombre d'arguments présents lors de l'exécution d'un script Linux, vous pouvez utiliser la variable spéciale `$#`. Cette variable contient le nombre total d'arguments de lancement passés au script.

Voici un exemple de script qui affiche le nombre d'arguments présents :

```bash
#!/bin/bash

echo "Nombre d'arguments : $#"
```

Pour afficher le nombre d'arguments présents lors de l'exécution de ce script, il suffit de l'exécuter avec les arguments de votre choix :

```bash
./mon_script.sh arg1 arg2 arg3
```

La sortie de ce script sera :

```
Nombre d'arguments : 3
```

Vous pouvez également utiliser la variable `$#` pour vérifier le nombre d'arguments attendus par le script et pour gérer les erreurs si le nombre d'arguments est incorrect. Par exemple :

```bash
#!/bin/bash

if [ $# -ne 2 ]
then
    echo "Erreur : 2 arguments attendus"
    exit 1
fi

echo "Premier argument : $1"
echo "Deuxième argument : $2"
```

Dans cet exemple, le script vérifie que le nombre d'arguments passés est bien égal à 2. Si ce n'est pas le cas, un message d'erreur est affiché et le script se termine avec le code de retour 1. Sinon, les arguments sont affichés normalement.

Les arguments de lancement sont une fonctionnalité très utile pour personnaliser et configurer le comportement d'un script. Ils peuvent être utilisés pour passer des valeurs spécifiques au script, pour indiquer des actions à effectuer, ou pour fournir des options de lancement. Il est recommandé de documenter clairement les arguments de lancement attendus par un script, afin que les utilisateurs puissent les utiliser de manière efficace.