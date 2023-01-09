## Explication du fonctionnement


## Exemple avec un jeu de valeurs

Prenons comme exemple le tableau suivant : $\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$.

On affichera en orange la valeur dite de la bulle
En jaune la valeur à laquelle elle est comparée
Et en vert la partie du tableau déjà triée

|  Etape  | Bulle | Limite | État du tableau |
|:-------:|:-----:|:------:|:---------------:|
| Init.   |   -   |   -   |$\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$|


## Implémentation en C++ pour un tableau de strings (ordre alphabétique)

```cpp
void swap(std::string &val1, std::string &val2){
	std::string temp = val1;
	val1 = val2;
	val2 = temp;
}

void selectionSort(std::string array[], int arraySize){
	std::string temp;
	for(int i = 0; i < arraySize; i++){
		for(int j = i + 1; j < arraySize; j++){
			if(std::string::compare(array[i], array[j])){
				swap(array[i], array[j]);
			}
		}
	}
}
```