## Une liste chaînée c'est quoi ?

Une liste chaînée est une structure de donnée permettant de stocker une liste de valeur, au même titre que les [[13. Les tableaux]]. Cependant elles permettent de par leur nature d'allouer de de désallouer de l'espace mémoire afin de changer leur taille, et ainsi avoir une taille dynamique.

Une liste chaînée est composée de deux choses, d'une variable contenant la taille de la liste, et d'un pointeur, qui va référer à l'adresse mémoire du premier élément de la liste. 
Chaque élement de la liste contient sa propre valeur, ainsi qu'un pointeur vers le prochain élément de la liste.

La liste chainée peut donc être imaginée telle une chaîne, ou chaque maillon est lié au prochain. La liste chainée commence par un maillon appelé la tête ou le sommet. Cependant afin de rendre la chaine utilisable, on doit attribuer une adresse pour le pointeur du dernier élément de la liste. Celui-ci va donc pointer vers une adresse mémoire par défaut : `nullptr`.

Nous allons donc voir comment créer cette structure de donnée, avec un sens de parcours unique, et un sens de parcours double.

## Les listes chaînées (sens unique)

#### Liste chainée simple : définition par des structures

```cpp
struct Element {
	int value = 0;
	Element *next = nullptr; 
}

struct LinkedList {
	int size = 0;
	Element *head = nullptr; 
}
```

On définit premièrement une structure élément qui va représenter chaque maillon de la liste chainée, et qui va englober la valeur et le pointeur de chaque maillon.

#### Liste chainée simple : définition par des classes

## Les listes doublement-chaînées (double sens) 

#### Liste chainée simple : définition par des structures

#### Liste chainée simple : définition par des classes
