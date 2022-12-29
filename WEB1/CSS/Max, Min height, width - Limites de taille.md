**Cours lié :**
- [[Sélecteurs]]

Les propriétés `min-height`, `max-height`, `min-width` et `max-width` en CSS permettent de définir des dimensions minimales et maximales pour les éléments HTML.

Voici comment utiliser ces propriétés :

```CSS
.ma-classe {
	min-height: 100px; /* définit une hauteur minimale de 100 pixels pour l'élément */
	max-height: 200px; /* définit une hauteur maximale de 200 pixels pour l'élément */
	min-width: 150px; /* définit une largeur minimale de 150 pixels pour l'élément */
	max-width: 250px; /* définit une largeur maximale de 250 pixels pour l'élément */
}
```

Il est important de noter que ces propriétés sont soumises aux règles de la cascade (`cascade` en anglais). Cela signifie que si plusieurs règles s'appliquent à un élément et qu'elles définissent des dimensions minimales ou maximales différentes, seule la plus restrictive sera appliquée.

Il est recommandé de bien comprendre comment fonctionnent ces propriétés et de savoir comment les utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.