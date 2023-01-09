## Explication du fonctionnement

Le tri a bulle est un algorithme de tri de valeurs, qui consiste à ramener les valeurs les plus élevées vers la fin du tableau (dans le cas d'un tri croissant). 

A chaque itération, la bulle va être comparée avec la valeur voisine (la valeur de droite), et si la valeur voisine est moins grande que celle de la bulle, les deux valeurs vont échanger de position, et cette opération est répétée jusqu'à atteindre la fin des valeurs non triées. Une fois la fin des valeurs non triées atteintes, on réitère cette logique et ainsi de suite jusqu'à ce que le tableau soit trié.

## Exemple avec un jeu de valeurs

Prenons comme exemple le tableau suivant : $\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$.

On affichera en orange la valeur dite de la bulle
En jaune la valeur à laquelle elle est comparée
Et en vert la partie du tableau déjà triée

|  Etape  | Bulle | Limite | État du tableau |
|:-------:|:-----:|:------:|:---------------:|
| Init.   |   -   |   -   |$\begin{bmatrix}&8 & 1 & 3 & 7 & 4 & 5&\end{bmatrix}$|
| Étape 1 |   8   |   5   |$\begin{bmatrix}&\textcolor{orange}8 & \textcolor{yellow}1 & 3 & 7 & 4 & 5&\end{bmatrix}$|
| Étape 2 |   8   |   5   |$\begin{bmatrix}&1 & \textcolor{orange}8 & \textcolor{yellow}3 & 7 & 4 & 5&\end{bmatrix}$|
| Étape 3 |   8   |   5   |$\begin{bmatrix}& 1 & 3 & \textcolor{orange}8 & \textcolor{yellow}7 & 4 & 5 &\end{bmatrix}$|
| Étape 4 |   8   |   5   |$\begin{bmatrix}& 1 & 3 & 7 & \textcolor{orange}8 & \textcolor{yellow}4 & 5&\end{bmatrix}$|
| Étape 5 |   8   |   5   |$\begin{bmatrix}&1 & 3 & 7 & 4 & \textcolor{orange}8 & \textcolor{yellow}5 &\end{bmatrix}$|
| Étape 6 |   -   |   -   |$\begin{bmatrix}&1 & 3& 7& 4& 5& \textcolor{lime}8 &\end{bmatrix}$|
| Étape 7 |   7   |   4   |$\begin{bmatrix}&1 & 3& \textcolor{orange}7& \textcolor{yellow}4& 5& \textcolor{lime}8 &\end{bmatrix}$|
| Étape 8 |   7   |   5   |$\begin{bmatrix}&1 & 3& 4& \textcolor{orange}7& \textcolor{yellow}5& \textcolor{lime}8 &\end{bmatrix}$|
| Étape 9 |   -   |   -   |$\begin{bmatrix}&1 & 3 & 4 & 5 & \textcolor{lime}7 & \textcolor{lime}8 &\end{bmatrix}$|
| Étape - |   -   |   -   |$\color{lime}\begin{bmatrix}&1 & 3 & 4 & 5 & 7 & 8 &\end{bmatrix}$|

## Implémentation en C++