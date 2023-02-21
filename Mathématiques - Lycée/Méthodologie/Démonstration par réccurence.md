Pour démontrer par réccurence une hypothèse, on suit la méthode suivante : 

>[!info] Étapes de la démonstration :
>- Démontrer l'hypothèse pour l'itération initiale 
>- Démontrer la réccurence entre $n$ et $n+1$

## Exemple : 

### Propriété que l'on cherche à démontrer :

$$
\sum^{n}_{i=0}k = \frac{n(n+1)}{2}
$$
---
### Démonstration par réccurence :

#### Initialisation avec $n_0 = 1$ : 
$$
P(n_0) = \frac{1+(1+1)}{2}
$$
On détermine que $P(n_0)$ est vraie.

#### Hérédité :

Soit $n$ un entier fixé, on suppose que pour $n$, $P(n)$ est vrai :
C'est à dire : 
$$
\sum^{n}_{k=1}k = \frac{n(n+1)}{2}
$$
Montrons que $P(n+1)$ est une propriété vraie, c'est à dire, montrons que :
$$
\sum^{n+1}_{k=1}k = \frac{(n+1)(n+2)}{2}
$$ 
On a :

$$
\begin{align}
\sum^{n}_{k=1}k &= \frac{n(n+1)}{2} \\
\sum^{\textcolor{orange}{n+1}}_{k=1}k &= \frac{n(n+1)}{2}+\textcolor{orange}{(n+1)} \\
\sum^{\textcolor{orange}{n+1}}_{k=1}k &= \frac{n(n+1)}{2}+\textcolor{orange}{\frac{2(n+1)}{2}} \\
\sum^{\textcolor{orange}{n+1}}_{k=1}k &= \frac{n(n+1)+\textcolor{orange}{2(n+1)}}{2} \\
\sum^{\textcolor{orange}{n+1}}_{k=1}k &= \frac{n\textcolor{pink}{(n+1)}+2\textcolor{pink}{(n+1)}}{2} \\
\sum^{\textcolor{orange}{n+1}}_{k=1}k &= \frac{\textcolor{pink}{(n+1)}(n+2)}{2} \\
\end{align}
$$

La propriété $P(n+1)$ est vérifiée, la démonstration par réccurence est valide !