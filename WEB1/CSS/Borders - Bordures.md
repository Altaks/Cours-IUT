**Cours lié :**
- [[Sélecteurs]]

L'attribut CSS `border` est un raccourci qui permet de définir plusieurs propriétés de bordure en une seule ligne de code. Voici les propriétés qu'il peut inclure :

> [!summary] Composition de l'attribut `border`
> -   `border-width` : permet de définir l'épaisseur de la bordure d'un élément.
> -   `border-style` : permet de définir le style de la bordure d'un élément (plein, pointillé, etc.).
> -   `border-color` : permet de définir la couleur de la bordure d'un élément.

Voici un exemple de code qui utilise l'attribut `border` :

```CSS
.ma-classe {
	border: 2px solid blue;
}
```

Cet exemple définit une bordure bleue, de 2 pixels d'épaisseur et de style plein.

Il est également possible de définir chaque propriété de bordure séparément, comme ceci :

```CSS
.ma-classe {
	border-width: 2px;
	border-style: solid;
	border-color: blue;
}
```

Dans ce cas, l'effet sera le même que dans l'exemple précédent.

Il est également possible de définir des bordures différentes pour chaque côté de l'élément, en utilisant les attributs `border-top`, `border-right`, `border-bottom` et `border-left`. Par exemple :

```CSS
.ma-classe {
	border-top: 1px dotted red;
	border-right: 2px solid blue;
	border-bottom: 3px dashed green;
	border-left: 4px solid purple;
}
```

Cet exemple définit des bordures de styles et de couleurs différents pour chaque côté de l'élément.

Il est également possible de définir des bordures arrondies en utilisant l'attribut `border-radius`. Par exemple :

```CSS
.ma-classe {
	border: 2px solid blue;
	border-radius: 20px;
}
```

Cet exemple définit une bordure bleue de 2 pixels d'épaisseur, avec des coins arrondis de 20 pixels de rayon.