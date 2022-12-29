**Cours lié :**
- [[Sélecteurs]]

L'attribut CSS `display` permet de définir comment un élément doit être affiché dans la page. Il existe plusieurs valeurs possibles pour cet attribut, qui permettent de contrôler la manière dont l'élément prend de la place dans la page, comment il est aligné, etc.

Voici quelques valeurs couramment utilisées pour l'attribut `display` :

> [!summary] Valeurs disponibles
> -   `block` : cette valeur indique que l'élément doit être affiché en bloc, c'est-à-dire qu'il occupe toute la largeur disponible et qu'il passe à la ligne suivante. Par exemple, les éléments `div`, `h1`, `p`, etc. sont par défaut en `display: block`.
> -   `inline` : cette valeur indique que l'élément doit être affiché en ligne, c'est-à-dire qu'il ne prend que l'espace nécessaire à son contenu et qu'il ne passe pas à la ligne suivante. Par exemple, les éléments `a`, `span`, etc. sont par défaut en `display: inline`.
> -   `inline-block` : cette valeur indique que l'élément doit être affiché en ligne, mais qu'il peut être stylé comme un élément en `display: block`.
> -   `none` : cette valeur indique que l'élément doit être masqué et qu'il ne doit pas être affiché dans la page.

Voici un exemple de code qui utilise l'attribut `display` :

```CSS
.ma-classe {
	display: block;
}
```

Cet exemple indique que l'élément doit être affiché en bloc.

Il est également possible de définir des valeurs spécifiques pour chaque type d'écran, comme `display: none; display: block;` pour masquer l'élément sur les écrans de petite taille et l'afficher sur les écrans de grande taille.

Il est important de bien comprendre comment fonctionne l'attribut `display`, car cela peut avoir un impact important sur la mise en forme de la page.