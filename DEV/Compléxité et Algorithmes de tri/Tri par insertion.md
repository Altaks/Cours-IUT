## Explication du fonctionnement

Le tri par insertion consiste à parcourir les valeurs non triées dans l'ordre et les placer dans la partie triée du tableau de sorte à cette partie triée reste triée. Elle est donc insérée avant la première valeur qui la dépasse.

L'algorithme va donc parcourir le tableau de valeurs, et pour chaque itération, prendre la première valeur non triée et la sauvegarder dans une variable temporaire, parcourir les valeurs triées, déterminer l'indice auquel elle doit se placer, décaler d'un cran les valeurs empêchant l'insertion, et placer la valeur stockée.

## Exemple avec un jeu de valeurs

Prenons comme exemple le tableau suivant : $\begin{bmatrix}&8_\textcolor{gray}0 & 1_\textcolor{gray}1 & 3_\textcolor{gray}2 & 7_\textcolor{gray}3& 4_\textcolor{gray}4 & 5_\textcolor{gray}5&\end{bmatrix}$.
Les numéros placés en indice (en gris) correspondent à l'indice de la valeur dans le tableau.

On affichera en orange la première valeur non triée et en jaune les valeurs à déplacer lors de l'insertion :

|     Etape      | 1ère valeur non-triée | Indice d'insertion |                    État du tableau                    |
|:--------------:|:--------------:|:---------------:|:-----------------------------------------------------:|
| Initialisation |       -        |        -        | $\begin{bmatrix}&8_\textcolor{gray}0 & 1_\textcolor{gray}1 & 3_\textcolor{gray}2 & 7_\textcolor{gray}3 & 4_\textcolor{gray}4 & 5_\textcolor{gray}5&\end{bmatrix}$ |
| Étape 1 |       1        |        0        | $\begin{bmatrix}& \color{yellow}8_\textcolor{gray}0 & \color{orange}1_\textcolor{gray}1 & 3_\textcolor{gray}2 & 7_\textcolor{gray}3 & 4_\textcolor{gray}4 & 5_\textcolor{gray}5&\end{bmatrix}$ |
| Étape 2 |       3        |        1        | $\begin{bmatrix}& \color{yellow}1_\textcolor{gray}0 & \color{yellow}8_\textcolor{gray}1 & \color{orange}3_\textcolor{gray}2 & 7_\textcolor{gray}3 & 4_\textcolor{gray}4 & 5_\textcolor{gray}5&\end{bmatrix}$ |
| Étape 3 |       7        |        2        | $\begin{bmatrix}& \color{yellow}1_\textcolor{gray}0 & \color{yellow}3_\textcolor{gray}1 & \color{yellow}8_\textcolor{gray}2 & \color{orange}7_\textcolor{gray}3 & 4_\textcolor{gray}4 & 5_\textcolor{gray}5&\end{bmatrix}$ |
| Étape 4 |       4        |        2        | $\begin{bmatrix}& \color{yellow}1_\textcolor{gray}0 & \color{yellow}3_\textcolor{gray}1 & \color{yellow}7_\textcolor{gray}2 & \color{yellow}8_\textcolor{gray}3 & \color{orange}4_\textcolor{gray}4 & 5_\textcolor{gray}5&\end{bmatrix}$ |
| Étape 5 |       5        |        3        | $\begin{bmatrix}& \color{yellow}1_\textcolor{gray}0 & \color{yellow}3_\textcolor{gray}1 & \color{yellow}4_\textcolor{gray}2 & \color{yellow}7_\textcolor{gray}3 & \color{yellow}8_\textcolor{gray}4 & \color{orange}5_\textcolor{gray}5&\end{bmatrix}$ |
| Tableau trié |       -        |        -        | $\begin{bmatrix}& 1 & 3 & 4 & 5 & 7 & 8 &\end{bmatrix}$ |

## Démonstration en vidéo

<iframe width="700" height="400" src="https://www.youtube-nocookie.com/embed/8oJS1BMKE64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Implémentation en C++ (tableau d'entiers)

```cpp
void displayArray(int array[], int size)
{
    std::cout << "[ ";
    for(int i = 0; i < size; i++)
    {
        std::cout << array[i] << " ";
    }
    std::cout << "]" << std::endl;
}

void swap(int &val1, int &val2)
{
    int temp = val1;
    val1 = val2;
    val2 = temp;
}

void insertionSort(int array[], int size)
{

}
```

### Sortie en console :

```

```
