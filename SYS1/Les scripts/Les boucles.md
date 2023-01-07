**Cours liés :**
- [[Un shell, c'est quoi]]
- [[Les variables]]
- [[1.11. Les boucles 'pour' (for)]]
- [[1.10. Les boucles 'tant-que' (while, do-while)]]

Les boucles `while` et `for` sont des structures de contrôle couramment utilisées en Bash et dans d'autres langages de programmation. Elles permettent de répéter un certain nombre d'instructions jusqu'à ce qu'une condition soit remplie ou qu'un compteur atteigne une valeur spécifique.

Voici comment utiliser les boucles `while` et `for` en Bash :

### Boucle while

La syntaxe de base d'une boucle `while` en Bash est la suivante :

```bash
while [expression]; do
    # Instructions à répéter tant que l'expression est vraie
done
```

L'expression doit être placée entre crochets `[]` et doit être suivie d'un point-virgule `;`. Le mot-clé `do` indique le début des instructions à répéter, et le mot-clé `done` marque la fin de la boucle.

Voici un exemple de script qui utilise une boucle `while` en Bash :

```bash
#!/bin/bash

# Initialise un compteur à 0
i=0

# Répète l'instruction tant que le compteur est inférieur à 10
while [ "$i" -lt 10 ]; do
    echo "$i"
    i=$((i+1))
done
```

Ce script affichera les nombres de 0 à 9.

### Boucle for

La syntaxe de base d'une boucle `for` en Bash est la suivante :

```bash
for variable in liste; do
    # Instructions à répéter pour chaque élément de la liste
done
```

Le mot-clé `in` indique que la boucle parcourt la liste des éléments, et le mot-clé `do` indique le début des instructions à répéter. Le mot-clé `done` marque la fin de la boucle.

Voici un exemple de script qui utilise une boucle `for` en Bash :

```bash
#!/bin/bash

# Parcours la liste des noms
for nom in Alice Bob Charlie; do
    echo "Bonjour, $nom"
done
```

Ce script affichera "Bonjour, Alice", "Bonjour, Bob" et "Bonjour, Charlie".

En résumé, les boucles `while` et `for` sont des structures de contrôle couramment utilisées en Bash pour répéter un certain nombre d'instructions jusqu'à ce qu'une condition soit remplie ou qu'un compteur atteigne une valeur spécifique. La boucle `while` répète les instructions tant que l'expression est vraie, tandis que la boucle `for` parcourt une liste d'éléments et répète les instructions pour chaque élément de la liste.