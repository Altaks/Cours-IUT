**Cours lié :**
- [[Sélecteurs]]
- [[Colors - Couleurs]]

La propriété `opacity` en CSS permet de définir la transparence d'un élément HTML. Elle peut être utilisée pour créer des effets de superposition ou pour rendre un élément semi-transparent.

Voici comment utiliser la propriété `opacity` :

```CSS
.ma-classe {
	opacity: 0.5; /* rend l'élément à 50% transparent */
}
```

Il est important de noter que lorsque vous utilisez la propriété `opacity`, tous les éléments enfants de l'élément ciblé seront également affectés. Si vous souhaitez que seul l'élément ciblé soit affecté, vous pouvez utiliser la propriété `rgba` (`rgba` signifie "red green blue alpha") pour définir la couleur de fond de l'élément avec un canal alpha :

```CSS
.ma-classe {
	background-color: rgba(0, 0, 0, 0.5); /* rend l'élément à 50% transparent sans affecter les éléments enfants */
}
```

Il est recommandé de bien comprendre comment fonctionne la propriété `opacity` et de savoir comment l'utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.