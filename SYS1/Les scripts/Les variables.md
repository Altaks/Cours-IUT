**Cours liés :**
- [[Un shell, c'est quoi]]
- [[2.0 Les variables]]
- [[echo - Afficher du texte]]

Les variables sont un élément important de tout langage de programmation, y compris Bash, le shell par défaut de la plupart des distributions Linux. Elles permettent de stocker et de manipuler des valeurs dans un script ou un shell.

Voici comment déclarer et utiliser une variable en Bash :

Pour déclarer une variable, il suffit de lui donner un nom et de lui affecter une valeur en utilisant le signe `=` :

```bash
nom="Paul"
```

Pour accéder à la valeur de la variable, vous pouvez utiliser le `$` suivi du nom de la variable :

```bash
echo "Bonjour, $nom"
```

Cela affichera "Bonjour, Paul".

Il est important de noter que les noms de variables en Bash sont sensibles à la casse, c'est-à-dire qu'une variable nommée `nom` n'est pas la même que `Nom` ou `NOM`. De plus, les noms de variables ne peuvent pas commencer par un chiffre et ne doivent pas contenir d'espaces.

```ad-important
title: "Types" de variables
Il existe plusieurs types de variables en Bash, notamment :

-   Les variables d'**environnement** : ce sont des variables qui sont définies par le système et qui peuvent être utilisées par tous les programmes. Elles sont généralement préfixées par `$` (par exemple, `$HOME` pour le répertoire home de l'utilisateur).

-   Les variables **locales** : ce sont des variables qui sont définies dans un script ou un shell et qui ne sont accessibles que dans ce script ou ce shell.

-   Les variables de **paramètres** : ce sont des variables qui sont passées en tant qu'arguments lors de l'exécution d'un script. Elles sont accessibles via les variables spéciales `$1`, `$2`, etc. (par exemple, `$1` représente le premier argument, `$2` représente le second argument, etc.).
```


Voici un exemple de script qui utilise plusieurs types de variables :

```bash
#!/bin/bash

# Déclare une variable locale
nom="Paul"

# Affiche la valeur de la variable d'environnement HOME
echo "Le répertoire home de l'utilisateur est $HOME"

# Affiche la valeur de la variable locale
echo "Bonjour, $nom"

# Affiche la valeur du premier argument passé au script
echo "Le premier argument du script est $1"
```

En résumé, les variables sont un élément essentiel de Bash qui permettent de stocker et de manipuler des valeurs dans un script ou un shell. Il existe plusieurs types de variables en Bash, chacun ayant des caractéristiques et des utilisations spécifiques.