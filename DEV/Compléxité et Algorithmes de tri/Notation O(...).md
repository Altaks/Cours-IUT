**Cours liés :**
- [[1.13.1 Les tableaux]]
- [[2.1. Les fonctions en général]]

## Qu'est ce que la complexité ?

La complexité d'un algorithme est une notion qui va permettre de juger de l'efficacité de celui-ci.
Elle permettra de comparer des algorithmes et déterminer lequel implémenter pour répondre à un problème. 

Il s'agit d'une notion capitale en terme d'optimisation de logiciels. L'analyse des performances et du système de fonctionnement de l'application permettra de réduire les lags, accélérer le fonctionnement et réduire les "exigences minimales"d'une machine pour utiliser l'application.

La complexité d'une application est souvent notée de la manière suivante :
$$
\mathcal{O}(\dots)
$$
La notation ci-dessus est représentative d'une complexité linéaire : elle dépend de $n$ et n'est placée à aucune puissance. Vous rencontrerez probablement les complexités $\mathcal{O}(n^2)$, $\mathcal{O}(\frac{n}{2})$, $\mathcal{O}(\log{n})$, $\mathcal{O}(n\log{n})$, $\mathcal{O}(\log_2{n})$ et bien d'autres au cours de vos études.

### Listes de complexités en temps classiques

| Nom            | Temps de calcul                      | Exemple de temps de calcul      | Exemple d'algorithme                                         |
| -------------- | ------------------------------------ | ------------------------------- | ------------------------------------------------------------ |
| Constant       | $\mathcal{O}(1)$                     | 10                              | Diminution d'une clé dans un tas de fibonacci                |
| Logarithmique  | $\mathcal{O}(\log{n})$               | $\log{n}, \log{n^2}$            | Recherche dichotomique                                       |
| Linéaire       | $\mathcal{O}(n)$                     | $n$                             | Recherche séquentielle, algorithme de recherche d'un min/max |
| Linéarithmique | $\mathcal{O}(n \times \log{(n)})$    | $n\times\log{(n)}, \log{(n!)}$  | Tri fusion                                                   |
| Quadratique    | $\mathcal{O}(n^2)$                   | $n^2$                           | Tri par insersion                                            |
| Cubique        | $\mathcal{O}(n^3)$                   | $n^3$                           | Algorithme de multiplication matricielle                     |
| Polynomial     | $2^{\mathcal{O}(\log{n})} = poly(n)$ | $n, n \times \log{(n)}, n^{10}$ |                                                              |
| Exponentiel    | $2^{\mathcal{O}(n)}$                 | $1.1^n, 10^n$                                |                                                              |

## Sur quoi se base-t-elle ?

Elle se base sur son temps d'execution et son utilisation de l'espace mémoire :

- Un algorithme de tri peu performant mettra plus de temps qu'un algorithme de tri optimisé, ce qui n'est pas attendu en général. 
- Un algorithme récursif prendra par exemple énormément d'espace mémoire dû à l'empilement sur la [pile d'éxecution](https://fr.m.wikipedia.org/wiki/Pile_d'ex%C3%A9cution).

Le temps d'execution doit être comparé sur le même jeu de valeurs, la même machine et réglée aux mêmes performances afin d'avoir une comparaison viable.

## Quelques exemples

Voici un tableau de valeurs décrivant la complexité d'algorithmes communs et des mesures sur la même machine : 

| Nom de l'algorithme       | Meilleur des cas                  | Cas moyen                         | Pire des cas       | Temps (cas moyen) |
| ------------------------- | --------------------------------- | --------------------------------- | ------------------ | ----------------- |
| Insertion (2048 valeurs)  | $\mathcal{O}(n)$                  | $\mathcal{O}(n^2)$                | $\mathcal{O}(n^2)$ | 50,74 ms          |
| Bulle (2048 valeurs)      | $\mathcal{O}(n)$                  | $\mathcal{O}(n^2)$                | $\mathcal{O}(n^2)$ | 128,84 ms         |
| Tri rapide (2048 valeurs) | $\mathcal{O}(n \times \log_2{n})$ | $\mathcal{O}(n \times \log_2{n})$ | $\mathcal{O}(n^2)$ | 1,22 ms                  |

**Cours à voir :**
- [[Tri à bulle (bubbleSort)]]
- [[Tri par sélection]]
- [[Tri par insertion]]