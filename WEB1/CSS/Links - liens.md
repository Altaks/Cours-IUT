**Cours lié :**
- [[Sélecteurs]]

Il est possible de personnaliser la mise en forme des liens en utilisant les propriétés CSS suivantes :

-   `color` : permet de définir la couleur du texte du lien
-   `text-decoration` : permet de définir la décoration du texte du lien (soulignement, surlignement, etc.)
-   `font-style` : permet de définir le style de police du lien (italique, gras, etc.)

Voici comment utiliser ces propriétés :

```CSS
a {
	color: red; /* définit la couleur rouge pour le texte du lien */
	text-decoration: none; /* retire le soulignement du lien */
	font-style: italic; /* met le texte du lien en italique */
}
```

Il est également possible de personnaliser l'apparence des liens lorsqu'ils sont visités ou survolés en utilisant les pseudoclasses `:link`, `:visited` et `:hover` :

```CSS
a:link {
	color: blue; /* définit la couleur bleue pour les liens non visités */
}
a:visited {
	color: purple; /* définit la couleur violette pour les liens visités */
}
a:hover {
	color: red; /* définit la couleur rouge pour les liens lorsqu'on les survole */
}
```

Il est recommandé de bien comprendre comment fonctionnent ces propriétés et de savoir comment les utiliser de manière appropriée, car cela peut avoir un impact sur la mise en forme de votre site web.