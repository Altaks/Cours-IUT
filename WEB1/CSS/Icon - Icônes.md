**Cours lié :**
- [[Sélecteurs]]
- [[Backgrounds - Fonds]]

L'attribut CSS `icon` permet de définir une icône pour un élément. Cet attribut est souvent utilisé avec la balise `::before` ou `::after` pour insérer une icône avant ou après le contenu de l'élément.

Voici comment utiliser l'attribut `icon` :

```CSS
.ma-classe::before {
	content: ""; /* le contenu de l'élément est vide */
	icon: url("mon-icone.png"); /* définit l'icône à utiliser */
}
```

Il est important de noter que l'attribut `icon` nécessite que l'attribut `content` soit défini, même si ce contenu est vide. Cela permet à l'icône de s'afficher correctement.

Il est également possible de définir l'icône en utilisant la propriété `background-image`, comme ceci :

```CSS
.ma-classe::before {
	content: "";
	background-image: url("mon-icone.png");
	background-repeat: no-repeat; /* ne pas répéter l'image */
}
```

Il est recommandé de bien comprendre comment fonctionne l'attribut `icon` et de savoir comment l'utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.