**Cours lié :**
- [[Sélecteurs]]
- [[Display - Modes d'affichage]]

La propriété `position` en CSS permet de définir la position d'un élément par rapport à son conteneur ou par rapport à la page. Elle peut être utilisée pour placer un élément n'importe où sur la page, qu'il s'agisse d'un élément statique ou d'un élément qui doit être déplacé lorsqu'on interagit avec lui.

Voici comment utiliser la propriété `position` :

```CSS
.ma-classe {
	position: static; /* l'élément est positionné de manière normale, selon le flux de la page */
}

```

```CSS
.ma-classe {
	position: relative; /* l'élément est positionné par rapport à sa position initiale dans le flux de la page */
}
```

```CSS
.ma-classe {
	position: absolute; /* l'élément est positionné par rapport à son premier parent non statique (c'est-à-dire non static, relative, absolute ou fixed) */
}
```

```CSS
.ma-classe {
	position: fixed; /* l'élément est positionné par rapport à la fenêtre du navigateur, même lorsque la page est défilée */
}
```

Il existe plusieurs valeurs possibles pour la propriété `position`, chacune ayant un comportement différent. Vous pouvez utiliser les propriétés `top`, `right`, `bottom` et `left` pour définir la position de l'élément de manière précise.

Il est recommandé de bien comprendre comment fonctionne la propriété `position` et de savoir comment l'utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.