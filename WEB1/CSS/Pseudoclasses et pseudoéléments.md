**Cours lié :**
- [[Sélecteurs]]

Les pseudoclasses et les pseudoéléments sont des mécanismes en CSS qui permettent de sélectionner des éléments en fonction de leur état ou de leur position dans le document. Ils permettent de définir des règles de style qui s'appliquent uniquement lorsqu'un élément est dans un certain état ou se trouve dans une certaine position.

Voici quelques exemples de pseudoclasses :

```CSS
a:hover {
  /* applique un style lorsque la souris passe sur un lien */
}
```

```CSS
input:focus {
  /* applique un style lorsque l'élément a le focus */
}
```

> [!summary] Liste des pseudo-classes : 
> -   `:active` : sélectionne un élément actif (c'est-à-dire en train d'être cliqué)
> -   `:checked` : sélectionne un élément de type checkbox ou radio coché
> -   `:default` : sélectionne un élément qui est la valeur par défaut
> -   `:disabled` : sélectionne un élément désactivé
> -   `:empty` : sélectionne un élément qui ne contient pas d'autres éléments
> -   `:enabled` : sélectionne un élément activé
> -   `:first-child` : sélectionne le premier enfant d'un élément parent
> -   `:first-of-type` : sélectionne le premier élément d'un type donné dans un élément parent
> -   `:focus` : sélectionne un élément qui a le focus
> -   `:hover` : sélectionne un élément lorsque la souris passe dessus
> -   `:in-range` : sélectionne un élément de type range dont la valeur est dans l'intervalle spécifié
> -   `:invalid` : sélectionne un élément de formulaire qui est invalide
> -   `:lang(language)` : sélectionne un élément dont la langue est spécifiée
> -   `:last-child` : sélectionne le dernier enfant d'un élément parent
> -   `:last-of-type` : sélectionne le dernier élément d'un type donné dans un élément parent
> -   `:link` : sélectionne un lien qui n'a pas encore été visité
> -   `:not(selector)` : sélectionne tous les éléments qui ne correspondent pas à un sélecteur donné
> -   `:nth-child(n)` : sélectionne l'élément enfant de rang n dans un élément parent
> -   `:nth-last-child(n)` : sélectionne l'élément enfant de rang n à partir de la fin dans un élément parent
> -   `:nth-last-of-type(n)` : sélectionne l'élément de type n à partir de la fin dans un élément parent
> -   `:nth-of-type(n)` : sélectionne l'élément de type n dans un élément parent
> -   `:only-of-type` : sélectionne un élément qui est le seul élément de son type dans un élément parent
> -   `:only-child` : sélectionne un élément qui est le seul enfant d'un élément parent
> -   `:optional` : sélectionne un élément de formulaire optionnel
> -   `:out-of-range` : sélectionne un élément de type range dontla valeur est en dehors de l'intervalle spécifié
> -   `:read-only` : sélectionne un élément de formulaire en lecture seule
> -   `:read-write` : sélectionne un élément de formulaire en lecture et écriture
> -   `:required` : sélectionne un élément de formulaire requis
> -   `:root` : sélectionne l'élément racine du document
> -   `:target` : sélectionne l'élément ciblé par un ancre
> -   `:valid` : sélectionne un élément de formulaire valide
> -   `:visited` : sélectionne un lien qui a déjà été visité

Il est important de noter que certaines pseudoclasses et pseudoéléments sont spécifiques à certaines versions de CSS et ne sont pas pris en charge par tous les navigateurs. Il est donc recommandé de vérifier la compatibilité avant de les utiliser dans un projet.


Voici quelques exemples de pseudoéléments :

```CSS
p::first-line {
  /* applique un style à la première ligne d'un paragraphe */
}
```

```CSS
li::before {
  /* insère un contenu avant chaque élément li */
}
```

> [!summary] Liste des pseudoéléments
> -   `::after` : ajoute du contenu après l'élément sélectionné
> -   `::before` : ajoute du contenu avant l'élément sélectionné
> -   `::first-letter` : sélectionne la première lettre d'un élément
> -   `::first-line` : sélectionne la première ligne d'un élément
> -   `::selection` : sélectionne du texte sélectionné par l'utilisateur

Il existe de nombreuses pseudoclasses et pseudoéléments différents, chacun ayant un comportement spécifique. Ils peuvent être utilisés de manière combinée avec d'autres sélecteurs pour cibler de manière précise les éléments sur lesquels vous souhaitez appliquer un style.