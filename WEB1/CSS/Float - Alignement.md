**Cours lié :**
- [[Sélecteurs]]
- [[Flexbox - Alignement automatisé]]

L'attribut CSS `float` permet de définir si un élément doit flotter à gauche ou à droite de la page, en prenant seulement l'espace nécessaire à son contenu. Cela permet de créer des colonnes, des encadrés, etc.

Voici comment utiliser l'attribut `float` :

```CSS
.ma-classe {
	float: left; /* flotte à gauche de la page */
}
```

```CSS
.ma-classe {
	float: right; /* flotte à droite de la page */
}
```

Il est important de noter que l'élément flottant n'occupe pas de place dans le flux normal de la page, ce qui signifie que les éléments suivants ne tiendront pas compte de sa présence et viendront se superposer à lui. Pour éviter ce problème, il est recommandé de définir une largeur pour l'élément flottant, afin de limiter l'espace qu'il occupe.

Voici un exemple de code qui utilise l'attribut `float` pour créer une colonne à gauche de la page :

```CSS
.ma-colonne {
	float: left;
	width: 200px;
	background-color: #eee;
}
```

Dans cet exemple, l'élément `.ma-colonne` flotte à gauche de la page et occupe une largeur de 200 pixels.

Il est également possible de flotter plusieurs éléments côte à côte en utilisant l'attribut `float` et en définissant une largeur adéquate.

Il est important de bien comprendre comment fonctionne l'attribut `float`, car cela peut avoir un impact important sur la mise en forme de la page.