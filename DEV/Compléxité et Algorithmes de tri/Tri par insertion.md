## Explication du fonctionnement

Le tri par insertion consiste à parcourir les valeurs non triées dans l'ordre et les placer dans la partie triée du tableau de sorte à cette partie triée reste triée. Elle est donc insérée avant la première valeur qui la dépasse.

L'algorithme va donc parcourir le tableau de valeurs, et pour chaque itération, prendre la première valeur non triée et la sauvegarder dans une variable temporaire, parcourir les valeurs triées, déterminer l'indice auquel elle doit se placer, décaler d'un cran les valeurs empêchant l'insertion, et placer la valeur stockée.

## Exemple avec un jeu de valeurs

Prenons comme exemple le tableau suivant : $\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$.

On affichera en orange la première valeur non triée et en jaune les valeurs à déplacer lors de l'insertion :

|     Etape      | 1ère non-triée | Indice d'insertion |                    État du tableau                    |
|:--------------:|:--------------:|:---------------:|:-----------------------------------------------------:|
| Initialisation |       -        |        -        | $\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$ |

## Implémentation en C++ (tableau d'entiers)

```cpp
/*
 * Permet d'afficher un tableau de valeurs entières dans la console
 * Entrée: le tableau array et sa taille size.
 */
void displayArray(int array[], int size)
{
    std::cout << "[ ";
    for(int i = 0; i < size; i++)
    {
        std::cout << array[i] << " ";
    }
    std::cout << "]" << std::endl;
}

/*
 * Permet d'échanger les valeurs de deux ints de position en RAM.
 * Entrée: l'adresse de l'entier 1 et l'adresse de l'entier 2
 */
void swap(int &val1, int &val2)
{
    int temp = val1;
    val1 = val2;
    val2 = temp;
}

/*
 * Permet de trier un tableau d'entiers suivant la méthode du tri par insertion
 * Entrée: le tableau array et sa taille size.
 */
void insertionSort(int array[], int size)
{

}
```

### Sortie en console :

```
[ 1 8 3 7 4 5 ]
[ 1 3 8 7 4 5 ]
[ 1 3 7 8 4 5 ]
[ 1 3 7 4 8 5 ]
[ 1 3 7 4 5 8 ]
[ 1 3 4 7 5 8 ]
[ 1 3 4 5 7 8 ]
```
