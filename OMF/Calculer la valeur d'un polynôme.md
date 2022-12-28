## Un [polynôme](https://fr.wikipedia.org/wiki/Polyn%C3%B4me) c'est quoi ?

Un polynôme est une expression mathématique qui consiste en une somme de termes de la forme $ax^n$, où $a$ est un nombre (appelé coefficient) et $n$ est un entier (appelé degré). Le degré d'un polynôme est le plus grand degré de ses termes. Par exemple, le polynôme $2x^2 + 3x + 1$ a un degré de 2.

1. Les polynômes de degré 1 sont appelés polynômes du premier degré ou polynômes linéaires. Ils ont la forme $ax + b$, où $a$ et $b$ sont des nombres. 
    Par exemple, $3x + 2$ est un polynôme du premier degré.

2. Les polynômes de degré 2 sont appelés polynômes du second degré ou polynômes quadratiques. Ils ont la forme $ax^2 + bx + c$, où $a$, $b$ et $c$ sont des nombres. 
    Par exemple, $2x^2 + 3x + 1$ est un polynôme du second degré.

2. Les polynômes de degré 3 sont appelés polynômes du troisième degré ou polynômes cubiques. Ils ont la forme $ax^3 + bx^2 + cx + d$, où $a$, $b$, $c$ et $d$ sont des nombres. 
    Par exemple, $x^3 + 2x^2 + 3x + 1$ est un polynôme du troisième degré.

On peut généraliser cette définition en disant qu'un polynôme de degré $n$ a la forme 
$$
a_nx^n + a_{n-1}x^{n-1} + \text{ ... } + a_1x^1 + a_0
$$
Où $a_n$, $a_{n-1}$, ..., $a_1$ et $a_0$ sont des nombres appelés *coefficients*.

Voici quelques exemples de polynômes de différents degrés :

-   $x + 1$ est un polynôme du premier degré.
-   $x^2 + 2x + 1$ est un polynôme du second degré.
-   $x^3 - 2x^2 + x - 1$ est un polynôme du troisième degré.
-   $x^4 - 3x^3 + 2x^2 - x + 1$ est un polynôme du quatrième degré.

# Calcul de la valeur d'un polynome : $P(x)$

Il existe plusieurs méthodes pour calculer la valeur d'un polynôme.
Nous allons étudier 3 méthodes différentes, plus ou moins efficaces ou simples à comprendre.

Nous prendrons comme exemple un polynôme de degré 4 : 
$$
P(x) = a_4x^4 + a_3x^3 + a_2x^2+a_1x+a_0
$$
## Version 1 - Calcul classique

Explication du fonctionnement : 

> [!abstract] Fonctionnement
> Voici le fonctionnement de base de la méthode
> 
> | Initialisation | $Res = a_0$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res + a_1x^1$ |
> |Itération 2 | $Res = Res + a_2x^2$ |
> |Itération 3 | $Res = Res + a_3x^3$ |
> |Itération 4 | $Res = Res + a_4x^4$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow a_0$
> Pour $i$ allant de $1$ à $n$ :
> $\qquad$$Res \leftarrow Res +a_i \times x^i$
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
> | Initialisation | $Res = a_0$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res + a_1x^1$ |
> |Itération 2 | $Res = Res + a_2x^2$ |
> |Itération 3 | $Res = Res + a_3x^3$ |
> |Itération 4 | $Res = Res + a_4x^4$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow a_0$
> Pour $i$ allant de $1$ à $n$ :
> $\qquad$$Puiss \leftarrow 1$
> $\qquad$Pour $k$ allant de $1$ à $i$ :
> $\qquad$$\qquad$$Puiss \leftarrow Puiss \times x$ 
> $\qquad$$Res \leftarrow Res +a_i \times Puiss$
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
> | Initialisation | $Res = a_0$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res + a_1x^1$ |
> |Itération 2 | $Res = Res + a_2x^2$ |
> |Itération 3 | $Res = Res + a_3x^3$ |
> |Itération 4 | $Res = Res + a_4x^4$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow a_0$
> $Puiss \leftarrow 1$
> Pour $i$ allant de $1$ à $n$ :
> $\qquad$$Puiss \leftarrow Puiss \times x$
> $\qquad$$Res \leftarrow Res +a_i \times Puiss$
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

Voyons le polynome suivant : $P(x) = a_4x^4 + a_3x^3 + a_2x^2+a_1x+a_0$ d'une manière un peu différente. 

Il peut s'écrire de la façon suivante :
$$
P(x) = ((((a_4)\times x + a_3)\times x + a_2)\times x + a_1)\times x + a_0
$$
Cette version permet d'éviter de calculer la $n$-ième puissance de $x$ associée au coefficiant.

Le calcul se fait alors de la façon suivante :

> [!abstract] Fonctionnement
> Voici le déroulé du calcul pour un polynôme de degré 4
> 
> | Initialisation | $Res = a_4$ |
> | :---: | :---- | 
> |Itération 1 | $Res = Res \times x + a_3$ |
> |Itération 2 | $Res = Res \times x + a_2$ |
> |Itération 3 | $Res = Res \times x + a_1$ |
> |Itération 4 | $Res = Res \times x + a_0$ |

Qui peut être écrite en **pseudocode** : 

> [!hint] Algorithme en pseudocode 
> $Res \leftarrow a_n$
> Pour $i$ allant de $1$ à $n$ :
> $\qquad$$Res \leftarrow Res \times x + a_{n-i-1}$
> Retourner $Res$

Ce qui donne alors en *python* avec un polynôme sous forme de liste de coefficients :

```python
def horner(P,x):
    res = P[-1]
    for i in range(1, len(P)):
        res = res * x + P[-i-1]
    return res
```
