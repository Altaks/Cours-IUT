**Cours liés :**
- [[Génération d'une suite]]

## Qu'est ce qu'une suite ? 

Une suite est une fonction définie depuis $\mathbb{N}$ vers $\mathbb{R}$, qui associe tout nombre $n$ tel que $n \geq n_0$ une valeur $U_n$. On dira alors que $U_n$ représente le $n$-ième terme de la suite indiquée, et que la suite est nommée $U$.
*Un exemple sera souvent plus parlant :*

#### Exemple :

Prenons par exemple la suite suivante :
$$
U =
\begin{cases}
U_0 = 0 \\
U_1 = 0 + 1 \\
U_2 = 0 + 1 + 2 \\
\qquad \vdots \\ 
U_n = 0 + 1 + 2 + 3 + 4 +\dots + (n-2) + (n-1) + n
\end{cases}
$$
Nous allons la définir par *récurrence*. Mais pour cela nous allons devoir comprendre comment elle est construite.

>[!important] Que dois-je retenir des informations que j'ai ?
>Pour comprendre comment définir une suite par récurrence, nous devons tout d'abord noter les éléments importants de celle ci. 
>Les élements importants d'une suite sont : 
>- Le premier terme (ici d'indice $0$)
>- La définition d'un terme par rapport à un autre.
>  
>  Si ces informations ne sont pas trouvables, alors les termes que vous étudiez ne représentent pas une suite.

On observe alors que notre suite à comme premier terme $U_0 = 0$ et que chaque terme est la somme du terme d'avant et de l'itération. Ce qui donne $U_{n+1} = U_n + n$. Si vous avez quelques difficultés à le voir, regardez plutôt : 
$$
U =
\begin{cases}
U_0 = 0 \\
U_1 = (0) + 1 \\
U_2 = (0 + 1) + 2 \\
U_3 = (0 + 1 + 2) + 3 \\
U_4 = (0 + 1 + 2 + 3) + 4 \\
\qquad \vdots \\ 
U_n = (0 + 1 + 2 + 3 + 4 +\dots + (n-2) + (n-1)) + n
\end{cases}
$$
Ce qui revient à écrire : 
$$
U =
\begin{cases}
U_0 = 0 \\
U_1 = U_0 + 1 \\
U_2 = U_1 + 2 \\
U_3 = U_2 + 3 \\
U_4 = U_3 + 4 \\
\qquad \vdots \\ 
U_n = U_{n-1} + n
\end{cases}
$$
On voit alors bel et bien que la suite peut être définie ainsi :
$$
U =
\begin{cases}
U_0 = 0 \\
U_{n+1} = U_n + n
\end{cases}
$$
On voit alors que le premier terme de la suite et sa formule de récurrence sont des informations essentielles à son étude. 

**Cours à voir :**
- [[Suites arithmétiques et géométriques]]