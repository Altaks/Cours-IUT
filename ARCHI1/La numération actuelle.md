La numération actuelle permet de représenter un nombre, par juxtaposition de **symboles** (numération de position), appelés **chiffres**, appartenant à un ensemble.

## Comment la numérotation fonctionne ?

Le **nombre de symboles utilisés** correspond à la **base** de numération.

>[!info] Les symboles d'un système
>Par exemple dans le système décimal, ce sous-ensemble contient 10 symboles différents, à savoir : { 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 }

Lorsqu’un nombre est écrit, la position respective des chiffres (rang) détermine leur poids.

On peut alors compter en unités, en dizaines, en centaines, en milliers, etc.

> [!example] Exemple avec le nombre 4785 :
> 
> On dispose donc des chiffres 4, 7, 8, 5.
> 
> On détermine leur poids avec leur distance par rapport au chiffre des unités.
> >[!important] Déterminer un poids
> >Le poids d'une valeur correspond à la base du système. Par exemple, pour le système **décimal**, le poids correspondra à $10^n$ avec $n$ étant la position par rapport au chiffre des unités.
> >Pour le système héxadécimal, il aurait fallu faire $16^n$.
> >Pour un système octal, il aurait fallu faire $8^n$, etc...
> 
> On détermine donc :
> 
| Symbole         | 4                      | 7                     | 8      | 5      | 
| --------------- | ----------------------: | ---------------------: | ------: | ------: |
| Position        | 3                      | 2                     | 1      | 0      |
| Poids           | $10^3$                 | $10^2$                | $10^1$ | $10^0$ |
| Valeur décimale | $4 \times 10^3 = 4000$ | $7 \times 10^2 = 700$ | $8 \times 10^1 = 80$       |  $5\times 10^0 = 5$      |
Ce qui nous donne finalement  $4000 + 700 + 80 + 5 = 4785$

Le poids (p) d’un symbole, dans une juxtaposition, est lié à la base de numération et au rang (r) qu’occupe le symbole par la relation suivante :

$$p = base^r$$

## La forme canonique, la notation qui supporte toutes les bases

Il est ainsi possible d'exprimer n'importe quel nombre dans sa forme **canonique** :

$$
(a_{n-1} \text{ } a_{n-2} \text{ ... } a_2 \text{ } a_1 \text{ }  
a_0 )_B
$$

Soit 
$$
=(a_{n-1}\times B^{n-1})+ (a_{n-2}\times B^{n-2}) + \text{ ... } + (a_2\times B^2)+(a_1\times B^1)+ (a_0\times B^0)
$$

$B$ : La base du nombre à convertir
$n$ : Le nombre de chiffres ou de bits du nombre exprimé en base $B$
$a_i$ : Le chiffre ou bit de rang $i$ du nombre exprimé en base $B$

Ce qui revient tout simplement à écrire quelque chose tel que : 
$$
(4 \times 10^3) + (7 \times 10^2) + (8 \times 10^1) + (5 \times 10^0) = 4785
$$
$$
(4 \times 1000) + (7 \times 100) + (8 \times 10) + (5 \times 1) = 4785
$$

Pour la base $10$ avec le nombre $4785$.

## Préciser la base d'un nombre 

La base décimale est la base de référence. On peut alors omettre la notation de la base du nombre.
Mais lorsqu'on note un nombre **binaire** tel que :
$$
011100101010
$$
Alors on doit noter la base en indice du nombre, entre parenthèses : 
$$
011100101010_{(2)}
$$
On peut alors noter la base avec le nombre d'élement qui la composent, 10 pour la base décimale, 16 pour l'héxadécimal, 8 pour l'octal ou encore 64 pour la base 64.

On aurait alors des notations telles que les suivantes :

$$1982149_{(10)}, \text{19DAE}_{(16)}, 45621_{(8)}$$

Qui peuvent être d'ailleurs écrites telles que : $1982149_{(\text{dec})}, \text{19DAE}_{(\text{hex})}, 45621_{(\text{oct})}$.

**Cours à voir :**
- [[2.0 Les variables]]
- [[4. Types de données]]