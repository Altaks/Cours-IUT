**Cours liés :**
- [[Un shell, c'est quoi]]
- [[Les variables]]
- [[8. Les conditions]]

Les conditions sont un élément important de tout langage de programmation, y compris Bash. Elles permettent de tester une expression et de prendre une décision en fonction du résultat de cette expression.

Voici comment utiliser les conditions en Bash :

La syntaxe de base d'une condition en Bash est la suivante :

```bash
if [expression]; then
    # Instructions à exécuter si l'expression est vraie
else
    # Instructions à exécuter si l'expression est fausse
fi
```

L'expression doit être placée entre crochets `[]` et doit être suivie d'un point-virgule `;`. Le mot-clé `then` indique le début des instructions à exécuter si l'expression est vraie, et le mot-clé `else` indique le début des instructions à exécuter si l'expression est fausse. Le mot-clé `fi` marque la fin de la condition.

```ad-important
title: Comment comparer ?
Voici quelques exemples d'expressions couramment utilisées en Bash :

-   `-z "$string"` : vérifie si la chaîne `string` est vide (c'est-à-dire si elle a une longueur de 0).
  
-   `-n "$string"` : vérifie si la chaîne `string` n'est pas vide (c'est-à-dire si elle a une longueur supérieure à 0).
-   `"$a" = "$b"` : vérifie si les chaînes `a` et `b` sont égales.
-   `"$a" != "$b"` : vérifie si les chaînes `a` et `b` sont différentes.
-   `"$a" -eq "$b"` : vérifie si les nombres `a` et `b` sont égaux.
-   `"$a" -ne "$b"` : vérifie si les nombres `a` et `b` sont différents.
-   `"$a" -gt "$b"` : vérifie si le nombre `a` est strictement supérieur à `b`.
-   `"$a" -lt "$b"` : vérifie si le nombre `a` est strictement inférieur à `b`.
```

Voici un exemple de script qui utilise une condition en Bash :

```bash
#!/bin/bash

# Demande à l'utilisateur d'entrer un mot de passe
echo "Entrez votre mot de passe :"
read password

# Vérifie si le mot de passe est correct
if [ "$password" = "secret" ]; then
    echo "Mot de passe correct"
else
    echo "Mot de passe incorrect"
fi
```

Le mot-clé `elif` est utilisé en conjonction avec la structure `if` pour vérifier plusieurs conditions de manière successive. Il permet de spécifier une suite d'expressions à tester et d'exécuter des instructions en fonction du résultat de ces expressions.

Voici comment utiliser le mot-clé `elif` en Bash :

```bash
if [expression1]; then
    # Instructions à exécuter si expression1 est vraie
elif [expression2]; then
    # Instructions à exécuter si expression1 est fausse et expression2 est vraie
else
    # Instructions à exécuter si aucune expression n'est vraie
fi
```

Le mot-clé `elif` doit être utilisé après un `if` et avant un éventuel `else`. Vous pouvez utiliser autant de `elif` que nécessaire pour vérifier plusieurs conditions de manière successive.

Voici un exemple de script qui utilise le mot-clé `elif` en Bash :

```bash
#!/bin/bash

# Demande à l'utilisateur de saisir un nombre
echo "Entrez un nombre :"
read nombre

# Vérifie si le nombre est négatif, positif ou nul
if [ "$nombre" -lt 0 ]; then
    echo "Le nombre est négatif"
elif [ "$nombre" -gt 0 ]; then
    echo "Le nombre est positif"
else
    echo "Le nombre est nul"
fi
```

Ce script demande à l'utilisateur de saisir un nombre, puis vérifie si ce nombre est négatif, positif ou nul en utilisant le mot-clé `elif`. Si le nombre est négatif, le script affiche "Le nombre est négatif". Si le nombre est positif, le script affiche "Le nombre est positif". Si le nombre est nul, le script affiche "Le nombre est nul".

Le mot-clé `case` est utilisé en Bash pour effectuer une série de tests sur une expression et exécuter des instructions en fonction du résultat de ces tests. Il est souvent utilisé pour simplifier les structures de contrôle complexes qui impliquent de nombreuses conditions `if` et `elif`.

Voici comment utiliser le mot-clé `case` en Bash :

```bash
case expression in
    pattern1)
        # Instructions à exécuter si expression correspond à pattern1
        ;;
    pattern2)
        # Instructions à exécuter si expression correspond à pattern2
        ;;
    ...)
        ...
        ;;
esac
```

Le mot-clé `case` est suivi de l'expression à tester et de la suite de `pattern` à vérifier. Chaque `pattern` est suivi de deux points de fin `;;` et des instructions à exécuter si l'expression correspond à ce `pattern`. Le mot-clé `esac` (`case` inversé) marque la fin de la structure `case`.

Voici un exemple de script qui utilise le mot-clé `case` en Bash :

```bash
#!/bin/bash

# Demande à l'utilisateur de saisir un mot
echo "Entrez un mot :"
read mot

# Vérifie la longueur du mot et affiche un message en conséquence
case ${#mot} in
    0)
        echo "Vous n'avez pas entré de mot"
        ;;
    1)
        echo "Vous avez entré un mot de longueur 1"
        ;;
    2)
        echo "Vous avez entré un mot de longueur 2"
        ;;
    *)
        echo "Vous avez entré un mot de longueur supérieure à 2"
        ;;
esac
```

Ce script demande à l'utilisateur de saisir un mot, puis vérifie la longueur de ce mot en utilisant le mot-clé `case`. Si le mot a une longueur de 0, le script affiche "Vous n'avez pas entré de mot". Si le mot a une longueur de 1, le script affiche "Vous avez entré un mot de longueur 1". Si le mot a une longueur de 2, le script affiche "Vous avez entré un mot de longueur 2". Dans tous les autres cas, le script affiche "Vous avez entré un mot de longueur supérieure à 2".

En résumé, les conditions sont un élément essentiel de Bash qui permettent de tester une expression et de prendre une décision en fonction du résultat de cette expression.