**Cours lié :**
- [[Sélecteurs]]
- [[Max, Min height, width - Limites de taille]]
- [[Height, Width, Size - Taille]]

La propriété `overflow` en CSS permet de définir comment les éléments sont affichés lorsqu'ils débordent de leur conteneur. Elle peut être utilisée pour masquer les éléments débordants, pour les afficher dans un défilement ou pour les ajuster à la taille de leur conteneur.

Voici comment utiliser la propriété `overflow` :

```CSS
.ma-classe {
	overflow: hidden; /* masque les éléments débordants */
}
```

```CSS
.ma-classe {
	overflow: scroll; /* affiche un défilement vertical et horizontal pour les éléments débordants */
}
```

```CSS
.ma-classe {
	overflow: auto; /* affiche un défilement vertical et horizontal pour les éléments débordants uniquement si nécessaire */
}
```

```CSS
.ma-classe {
	overflow: visible; /* affiche les éléments débordants sans aucune restriction */
}
```

Il existe plusieurs valeurs possibles pour la propriété `overflow`, chacune ayant un comportement différent. Vous pouvez également utiliser la propriété `overflow-x` pour définir le comportement de débordement horizontal et la propriété `overflow-y` pour définir le comportement de débordement vertical.

Il est recommandé de bien comprendre comment fonctionne la propriété `overflow` et de savoir comment l'utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.