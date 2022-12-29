**Cours lié :**
- [[Sélecteurs]]
- [[Float - Alignement]]

Le modèle de boîte flexible (flexbox en anglais) est un modèle de mise en page en CSS qui permet de disposer les éléments d'une page de manière flexible et adaptable. Il offre de nombreuses possibilités de mise en forme des éléments, comme l'alignement, la distribution de l'espace, le redimensionnement, etc.

Voici comment utiliser le modèle de boîte flexible :

```CSS
.ma-classe {
	display: flex; /* active le modèle de boîte flexible */
	flex-direction: row; /* aligne les éléments en ligne */
	justify-content: space-between; /* distribue l'espace entre les éléments */
	align-items: center; /* aligne les éléments au centre */
}
```

Voici une liste des propriétés CSS couramment utilisées pour configurer une boîte flexible (flexbox):

1.  `display: flex` - permet de définir une boîte flexible et de lui appliquer les propriétés suivantes.
   
2.  `flex-direction` - définit la direction dans laquelle les éléments enfants sont disposés dans la boîte flexible. Les valeurs possibles sont `row, row-reverse, column et column-reverse`.
   
3.  `flex-wrap` - définit si les éléments enfants doivent être disposés sur une seule ligne ou sur plusieurs lignes. Les valeurs possibles sont `nowrap, wrap et wrap-reverse`.
   
4.  `flex-flow` - combinaison des propriétés `flex-direction` et `flex-wrap`.
   
5.  `justify-content` - définit l'alignement horizontal des éléments enfants dans la boîte flexible. Les valeurs possibles sont `flex-start, flex-end, center, space-between et space-around`.
   
6.  `align-items` - définit l'alignement vertical des éléments enfants dans la boîte flexible. Les valeurs possibles sont `flex-start, flex-end, center, baseline` et `stretch`.
   
7.  `align-content` - définit l'alignement des lignes dans une boîte flexible multiligne. Les valeurs possibles sont `flex-start, flex-end, center, space-between, space-around` et `stretch`
   
8.  `order` - définit l'ordre de disposition des éléments enfants dans la boîte flexible. Les valeurs possibles sont un nombre entier (par exemple, 0, 1, 2, etc.).
   
9.  `flex-grow` - définit le taux de croissance des éléments enfants dans la boîte flexible. Les valeurs possibles sont un nombre entier (par exemple, 0, 1, 2, etc.).
   
10.  `flex-shrink` - définit le taux de rétrécissement des éléments enfants dans la boîte flexible. Les valeurs possibles sont un nombre entier (par exemple, 0, 1, 2, etc.).

11.  `flex-basis` - définit la base de dimensionnement des éléments enfants dans la boîte flexible. Les valeurs possibles sont une longueur (par exemple, `100px`), un pourcentage ou `auto`.

12.  `flex` - combinaison des propriétés `flex-grow, flex-shrink` et `flex-basis`.

13.  `align-self` - définit l'alignement vertical d'un élément enfant unique dans la boîte flexible. Les valeurs possibles sont `flex-start, flex-end, center, baseline` et `stretch`.

Il existe également d'autres propriétés CSS associées aux boîtes flexibles, comme flex-flow-wrap et flex-flow-direction, qui permettent de définir respectivement la propriété flex-wrap et la propriété flex-direction en utilisant une seule ligne de code.

Voici un exemple de code qui utilise plusieurs de ces propriétés :

```CSS
.ma-classe {
	display: flex;
	flex-wrap: wrap; /* permet aux éléments de passer à la ligne si nécessaire */
	align-content: flex-start; /* aligne les lignes au début de la boîte flexible */
	align-self: flex-end; /* aligne l'élément en fin de ligne */
}
```

Il est recommandé de bien comprendre comment fonctionne le modèle de boîte flexible et de savoir comment l'utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.