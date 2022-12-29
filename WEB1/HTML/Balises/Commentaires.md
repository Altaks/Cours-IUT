**Cours lié :**
- [[body - Contenu de la page]]

Les commentaires sont des parties de code qui sont ignorées par le navigateur et qui servent à ajouter des explications ou des annotations dans le code HTML. Ils permettent de documenter le code et de le rendre plus lisible pour les développeurs.

Il existe deux syntaxes pour ajouter des commentaires dans du code HTML :

-   La syntaxe `<!-- Commentaire -->` permet de commenter une ligne ou une partie de code.
-   La syntaxe `<!--[if condition]> Element <![endif]-->` permet de commenter une partie de code conditionnelle (voir la section "Conditional comments" ci-dessous).

Voici un exemple de commentaire avec la première syntaxe :

```HTML
<!-- Cette balise est utilisée pour mettre en gras du texte -->
<b>Texte en gras</b>
```

Voici un exemple de commentaire avec la deuxième syntaxe :

```HTML
<!--[if lt IE 9]>
  <script src="ie.js"></script>
<![endif]-->
```

Dans cet exemple, le script "ie.js" ne sera chargé que si le navigateur est une version inférieure à Internet Explorer 9.

Il est important de noter que les commentaires HTML ne doivent pas être utilisés pour cacher du code ou du contenu, car ils peuvent être visibles dans la source HTML et être lus par les utilisateurs ou les moteurs de recherche. Pour cacher du contenu, il est recommandé d'utiliser des techniques de style (CSS) ou de script (JavaScript).

En résumé, les commentaires sont des parties de code ignorées par le navigateur qui servent à ajouter des explications ou des annotations dans le code HTML. Ils permettent de documenter le code et de le rendre plus lisible pour les développeurs. Il existe deux syntaxes pour ajouter des commentaires dans du code HTML : `<!-- Commentaire -->` et `<!--[if condition]> Element <![endif]-->`. Les commentaires HTML ne doivent pas être utilisés pour cacher du code ou du contenu, mais plutôt pour documenter le code.