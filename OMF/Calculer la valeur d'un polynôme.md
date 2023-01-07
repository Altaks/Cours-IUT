## Un [polynôme](https://fr.wikipedia.org/wiki/Polyn%C3%B4me) c'est quoi ?

Un polynôme est une expression mathématique qui consiste en une somme de termes de la forme $\textcolor{tomato}a\textcolor{cyan}x^\textcolor{pink}n$, où $a$ est un nombre (appelé coefficient) et $n$ est un entier (appelé degré). Le degré d'un polynôme est le plus grand degré de ses termes. Par exemple, le polynôme $2x^2 + 3x + 1$ a un degré de 2.

1. Les polynômes de degré 1 sont appelés polynômes du premier degré ou polynômes linéaires. Ils ont la forme $ax + b$, où $a$ et $b$ sont des nombres. 
    Par exemple, $3x + 2$ est un polynôme du premier degré.

2. Les polynômes de degré 2 sont appelés polynômes du second degré ou polynômes quadratiques. Ils ont la forme $ax^2 + bx + c$, où $a$, $b$ et $c$ sont des nombres. 
    Par exemple, $2x^2 + 3x + 1$ est un polynôme du second degré.

2. Les polynômes de degré 3 sont appelés polynômes du troisième degré ou polynômes cubiques. Ils ont la forme $ax^3 + bx^2 + cx + d$, où $a$, $b$, $c$ et $d$ sont des nombres. 
    Par exemple, $x^3 + 2x^2 + 3x + 1$ est un polynôme du troisième degré.

On peut généraliser cette définition en disant qu'un polynôme de degré $\color{pink}n$ a la forme 
$$
\textcolor{tomato}a_\textcolor{pink}n\textcolor{cyan}x^\textcolor{pink}n + \textcolor{tomato}a_\textcolor{pink}{n-1}\textcolor{cyan}x^\textcolor{pink}{n-1} + \text{ ... } + \textcolor{tomato}a_\textcolor{pink}1\textcolor{cyan}x^\textcolor{pink}1 + \textcolor{tomato}a_\textcolor{pink}0
$$
Où $\textcolor{tomato}a_\textcolor{pink}n$, $\textcolor{tomato}a_\textcolor{pink}{n-1}$, ..., $\textcolor{tomato}a_\textcolor{pink}1$ et $\textcolor{tomato}a_\textcolor{pink}0$ sont des nombres appelés *coefficients*.

Voici quelques exemples de polynômes de différents degrés :

-   $\textcolor{cyan}x + \textcolor{tomato}1$ est un polynôme du premier degré.
-   $\textcolor{cyan}x^\textcolor{pink}2 + \textcolor{tomato}2\textcolor{cyan}x + \textcolor{tomato}1$ est un polynôme du second degré.
-   $\textcolor{cyan}x^\textcolor{pink}3 - \textcolor{tomato}2\textcolor{cyan}x^\textcolor{pink}2 + \textcolor{cyan}x - \textcolor{tomato}1$ est un polynôme du troisième degré.
-   $\textcolor{cyan}x^\textcolor{pink}4 - \textcolor{tomato}3\textcolor{cyan}x^\textcolor{pink}3 + \textcolor{tomato}2\textcolor{cyan}x^\textcolor{pink}2 - \textcolor{cyan}x + \textcolor{tomato}1$ est un polynôme du quatrième degré. 

# Calcul de la valeur d'un polynome : $P(x)$

Il existe plusieurs méthodes pour calculer la valeur d'un polynôme.
Nous allons étudier 3 méthodes différentes, plus ou moins efficaces ou simples à comprendre.

Nous prendrons comme exemple un polynôme de degré $\color{pink}4$ : 
$$
P(\textcolor{cyan}x) = 
\textcolor{tomato}a_\textcolor{pink}4\textcolor{cyan}x^\textcolor{pink}4+\textcolor{tomato}a_\textcolor{pink}3\textcolor{cyan}x^\textcolor{pink}3+\textcolor{tomato}a_\textcolor{pink}2\textcolor{cyan}x^\textcolor{pink}2+\textcolor{tomato}a_\textcolor{pink}1\textcolor{cyan}x +
\textcolor{tomato}a_\textcolor{pink}0
$$
## Version 1 - Calcul classique

Explication du fonctionnement : 

> [!abstract] Fonctionnement
> Voici le fonctionnement de base de la méthode
> 
> | Initialisation | $Res = \textcolor{tomato}a_\textcolor{pink}0$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}1\textcolor{cyan}x^\textcolor{pink}1$ |
> |Itération 2 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}2\textcolor{cyan}x^\textcolor{pink}2$ |
> |Itération 3 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}3\textcolor{cyan}x^\textcolor{pink}3$ |
> |Itération 4 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}4\textcolor{cyan}x^\textcolor{pink}4$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow \textcolor{tomato}a_\textcolor{pink}0$
> Pour $\color{pink}i$ allant de $1$ à $\color{pink}n$ :
> $\qquad$$Res \leftarrow Res + \textcolor{tomato}a_\textcolor{pink}i \times \textcolor{cyan}x^\textcolor{pink}i$
> Retourner $Res$

Ce qui donne alors en *python* avec un polynôme sous forme de liste de coefficients :

```python
def version_1(P,x) :
    somme = P[0]
    for index in range(1, len(P)):
        somme += (P[index] * (x**(index)))
    return somme
```

## Version 2 - Calcul de $x^i$

Explication du fonctionnement : 

> [!abstract] Fonctionnement
> Voici le fonctionnement de base de la méthode
> 
> | Initialisation | $Res = \textcolor{tomato}a_\textcolor{pink}0$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}1\times\textcolor{cyan}x^\textcolor{pink}1$ |
> |Itération 2 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}2\times\textcolor{cyan}x^\textcolor{pink}2$ |
> |Itération 3 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}3\times\textcolor{cyan}x^\textcolor{pink}3$ |
> |Itération 4 | $Res = Res + \textcolor{tomato}a_\textcolor{pink}4\times\textcolor{cyan}x^\textcolor{pink}4$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow \textcolor{tomato}a_\textcolor{pink}0$
> Pour $\textcolor{pink}i$ allant de $1$ à $\textcolor{pink}n$ :
> $\qquad$$Puiss \leftarrow 1$
> $\qquad$Pour $\textcolor{orange}k$ allant de $1$ à $\textcolor{pink}i$ :
> $\qquad$$\qquad$$Puiss \leftarrow Puiss \times \textcolor{cyan}x$ 
> $\qquad$$Res \leftarrow Res +\textcolor{tomato}a_\textcolor{pink}i \times Puiss$
> Retourner $Res$

Ce qui donne alors en *python* avec un polynôme sous forme de liste de coefficients :

```python
def version_2(P,x) :
    somme = P[0]
    for index in range(1, len(P)):
        puiss = 1
        for i in range(1, index+1):
            puiss *= x
        somme += (P[index] * puiss)
    return somme
```

## Version 3 - Conservation de $x^{i-1}$

Explication du fonctionnement : 

> [!abstract] Fonctionnement
> Voici le fonctionnement de base de la méthode
> 
> | Initialisation | $Res = \textcolor{tomato}a_\textcolor{pink}0$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res + (\textcolor{tomato}a_\textcolor{pink}1\times\textcolor{cyan}x^\textcolor{pink}0\times\textcolor{cyan}x)$ |
> |Itération 2 | $Res = Res + (\textcolor{tomato}a_\textcolor{pink}2\times\textcolor{cyan}x^\textcolor{pink}1\times\textcolor{cyan}x)$ |
> |Itération 3 | $Res = Res + (\textcolor{tomato}a_\textcolor{pink}3\times\textcolor{cyan}x^\textcolor{pink}2\times\textcolor{cyan}x)$ |
> |Itération 4 | $Res = Res + (\textcolor{tomato}a_\textcolor{pink}4\times\textcolor{cyan}x^\textcolor{pink}3\times\textcolor{cyan}x)$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow \textcolor{tomato}a_\textcolor{pink}0$
> $Puiss \leftarrow 1$
> Pour $\textcolor{pink}i$ allant de $1$ à $\textcolor{pink}n$ :
> $\qquad$$Puiss \leftarrow Puiss \times \textcolor{cyan}x$
> $\qquad$$Res \leftarrow Res +\textcolor{tomato}a_\textcolor{pink}i \times Puiss$
> Retourner $Res$

Ce qui donne alors en *python* avec un polynôme sous forme de liste de coefficients :

```python
def version_3(P,x) :
    res = P[0]
    puiss = 1
    for i in range(1, len(P)):
        puiss *= x
        res += (P[i] * puiss)
    return res
```

## Version 4 - [Algorithme de Horner](https://fr.wikipedia.org/wiki/M%C3%A9thode_de_Ruffini-Horner#Valeur_d'un_polyn%C3%B4me_en_un_point)

Voyons différement le polynome suivant : $$P(\textcolor{cyan}x) = 
\textcolor{tomato}a_\textcolor{pink}4\textcolor{cyan}x^\textcolor{pink}4+\textcolor{tomato}a_\textcolor{pink}3\textcolor{cyan}x^\textcolor{pink}3+\textcolor{tomato}a_\textcolor{pink}2\textcolor{cyan}x^\textcolor{pink}2+\textcolor{tomato}a_\textcolor{pink}1\textcolor{cyan}x +
\textcolor{tomato}a_\textcolor{pink}0$$  
Il peut s'écrire de la façon suivante :
$$
P(\textcolor{cyan}x) = ((((
\textcolor{tomato}a_\textcolor{pink}4)\times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}3)\times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}2)\times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}1)\times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}0
$$
Cette version permet d'éviter de calculer la $n$-ième puissance de $x$ associée au coefficiant.

Le calcul se fait alors de la façon suivante :

> [!abstract] Fonctionnement
> Voici le déroulé du calcul pour un polynôme de degré 4
> 
> | Initialisation | $Res = \textcolor{tomato}a_\textcolor{pink}4$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res \times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}3$ |
> |Itération 2 | $Res = Res \times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}2$ |
> |Itération 3 | $Res = Res \times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}1$ |
> |Itération 4 | $Res = Res \times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}0$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow \textcolor{tomato}a_\textcolor{pink}n$
> Pour $\textcolor{pink}i$ allant de $1$ à $\textcolor{pink}n$ :
> $\qquad$$Res \leftarrow Res \times \textcolor{cyan}x + \textcolor{tomato}a_\textcolor{pink}{n-i}$
> Retourner $Res$

Ce qui donne alors en *python* avec un polynôme sous forme de liste de coefficients :

```python
def horner(P,x):
    res = P[-1]
    for i in range(1, len(P)):
        res = res * x + P[-i-1]
    return res
```
