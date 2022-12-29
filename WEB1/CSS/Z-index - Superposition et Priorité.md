**Cours lié :**
- [[Sélecteurs]]
- [[Display - Modes d'affichage]]

L'attribut `z-index` est utilisé en CSS pour définir l'ordre d'empilement des éléments dans une page. Plus précisément, `z-index` détermine la position de l'élément dans la pile de couches de l'interface utilisateur.

Lorsqu'un élément est superposé à un autre, le premier élément qui apparaît dans le code HTML sera placé au-dessus de l'autre élément. Toutefois, en utilisant `z-index`, vous pouvez définir explicitement l'ordre d'empilement des éléments, indépendamment de leur ordre d'apparition dans le code HTML.

Pour utiliser `z-index`, vous devez spécifier une valeur numérique pour l'attribut. Les éléments ayant une valeur de `z-index` plus élevée seront placés au-dessus de ceux ayant une valeur plus basse. Par exemple :

```CSS
.element1 {
  z-index: 10;
}

.element2 {
  z-index: 5;
}
```

Dans cet exemple, `.element1` sera placé au-dessus de `.element2`, car il a une valeur de `z-index` plus élevée.

Il est important de noter que `z-index` ne fonctionne que pour les éléments qui ont un positionnement non statique (c'est-à-dire `position: absolute`, `position: fixed` ou `position: relative`). Si un élément a un positionnement statique (`position: static`), sa valeur de `z-index` sera ignorée.