
**Cours en lien :**
- [[Notation O(...)]]
- [[Tri par insertion]]

## Explication du fonctionnement

Le tri a bulle est un algorithme de tri de valeurs, qui consiste à selectionner la valeur la moins élevée des valeurs non triées et l'échanger de place avec la première valeur non triée.

L'algorithme va parcourir le tableau, et lors de chaque itération, l'algorithme va parcourir le reste du tableau (la partie de droite par rapport au point de départ), déterminer la valeur minimale dans le tableau, et l'échanger de place avec la première valeur non triée.

## Exemple avec un jeu de valeurs

Prenons comme exemple le tableau suivant : $\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$.

On affichera en orange la valeur la plus petite
En jaune les valeurs auxquelles elle est comparée
Et en vert la partie du tableau déjà triée

|  Etape  | Val. min | Indice départ |                    État du tableau                    |
|:-------:|:-----:|:------:|:-----------------------------------------------------:|
|  Init.  |   -   |   -    | $\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$ |
| Étape 1 |   1   |   0    | $\begin{bmatrix}&\textcolor{yellow}8 & \textcolor{yellow}3 & \textcolor{orange}1 & \textcolor{yellow}7 & \textcolor{yellow}4 & \textcolor{yellow}5&\end{bmatrix}$ |
| Étape 2 |   3   |   1    | $\begin{bmatrix}&\textcolor{lime}1 & \textcolor{orange}3 & \textcolor{yellow}8 & \textcolor{yellow}7 & \textcolor{yellow}4 & \textcolor{yellow}5&\end{bmatrix}$ |
| Étape 3 |   4   |   2    | $\begin{bmatrix}& \textcolor{lime}1 & \textcolor{lime}3 & \textcolor{orange}4 & \textcolor{yellow}7 & \textcolor{yellow}8 & \textcolor{yellow}5&\end{bmatrix}$ |
| Étape 4 |   5   |   3    | $\begin{bmatrix}&\textcolor{lime}1 & \textcolor{lime}3 & \textcolor{lime}4 & \textcolor{orange}5 & \textcolor{yellow}8 & \textcolor{yellow}7 &\end{bmatrix}$ |
| Étape 5 |   7   |   4    | $\begin{bmatrix}&\textcolor{lime}1 & \textcolor{lime}3 & \textcolor{lime}4 & \textcolor{lime}5 & \textcolor{orange}7 & \textcolor{yellow}8 &\end{bmatrix}$ |
| Étape 6 |   -   |   -    | $\begin{bmatrix}&\textcolor{lime}1 & \textcolor{lime}3 & \textcolor{lime}4 & \textcolor{lime}5 & \textcolor{lime}7 & \textcolor{lime}8 &\end{bmatrix}$ |


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

void selectionSort(int array[], int size)
{
    for(int i = 0; i < size; i++)
    {
        int min_index = i;
        for(int j = i + 1; j < size; j++)
        {
            if(array[j] < array[min_index])
            {
                min_index = j;
            }
        }
        swap(array[i], array[min_index]);
        displayArray(array, size);
    }
}
```

### Sortie en console : 

```
[ 1 8 3 7 4 5 ]
[ 1 3 8 7 4 5 ]
[ 1 3 4 7 8 5 ]
[ 1 3 4 5 8 7 ]
[ 1 3 4 5 7 8 ]
[ 1 3 4 5 7 8 ]
```

**Cours à voir :**
- [[Tri rapide (quicksort)]]