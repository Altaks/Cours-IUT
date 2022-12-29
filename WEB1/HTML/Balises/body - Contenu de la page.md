**Cours lié :**
- [[html - Page entière]]

La balise `<body>` est utilisée dans les documents HTML pour définir le contenu principal de la page, qui est affiché dans le navigateur web. Elle est placée entre les balises `<html>` et `</html>`, après la balise `<head>`, et contient tous les éléments visuels et interactifs de la page.

Voici comment utiliser la balise `<body>` :

```HTML
<html>
  <head>
    <!-- informations sur le document -->
  </head>
  <body>
    <!-- contenu du document -->
  </body>
</html>
```

La balise `<body>` peut contenir de nombreux éléments, tels que du texte, des images, des formulaires, des tableaux, etc. Voici un exemple de balise `<body>` avec différents éléments :

```HTML
<body>
  <h1>Bienvenue sur mon site</h1>
  <p>Voici quelques informations sur moi :</p>
  <ul>
    <li>Je m'appelle John Doe</li>
    <li>J'ai 25 ans</li>
    <li>Je suis développeur web</li>
  </ul>
  <p>Voici quelques-unes de mes réalisations :</p>
  <ol>
    <li>Site e-commerce</li>
    <li>Application de gestion de projet</li>
    <li>Jeu en ligne</li>
  </ol>
  <form action="">
    <label for="nom">Nom :</label><br>
    <input type="text" id="nom" name="nom"><br>
    <label for="email">Email :</label><br>
    <input type="email" id="email" name="email"><br>
    <label for="message">Message :</label><br>
    <textarea id="message" name="message"></textarea><br>
    <input type="submit" value="Envoyer">
  </form>
</body>
```

En résumé, la balise `<body>` est utilisée dans les documents HTML pour définir le contenu principal de la page, qui est affiché dans le navigateur web. Elle est placée entre les balises `<html>` et `</html>`, après la balise `<head>`, et peut contenir de nombreux éléments tels que du texte, des images, des formulaires, des tableaux, etc.