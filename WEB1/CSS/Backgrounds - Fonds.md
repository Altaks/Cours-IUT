
**Cours lié :**
- [[Sélecteurs]]

L'attribut CSS `background` est un raccourci qui permet de définir plusieurs propriétés de fond en une seule ligne de code. Voici les propriétés qu'il peut inclure :

> [!info] Composition de l'attribut  `background`
>-   `background-color` : permet de définir la couleur de fond d'un élément.
>-   `background-image` : permet de définir une image de fond d'un élément.
>-   `background-repeat` : permet de définir si l'image de fond doit être répétée ou non (horizontalement, verticalement ou pas du tout).
>-   `background-attachment` : permet de définir si l'image de fond doit être fixe ou défilante avec le contenu de la page.
>-   `background-position` : permet de définir la position de l'image de fond (horizontale et verticale).

Voici un exemple de code qui utilise l'attribut `background` :

```CSS
.ma-classe {
	background: red url('mon-image.jpg') no-repeat fixed center;
}
```

Cet exemple définit un fond rouge avec une image centrée et fixe, qui ne sera pas répétée.

Il est également possible de définir chaque propriété de fond séparément, comme ceci :

```CSS
.ma-classe {
	background-color: red;
	background-image: url('mon-image.jpg');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
}
```

Dans ce cas, l'effet sera le même que dans l'exemple précédent.