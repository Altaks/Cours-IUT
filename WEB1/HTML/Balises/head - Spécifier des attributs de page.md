**Cours lié :**
- [[html - Page entière]]

La balise `<head>` est utilisée dans les documents HTML pour définir les informations sur le document, qui ne sont pas affichées directement sur la page. Elle est placée entre les balises `<html>` et `<body>`, et contient des éléments tels que le titre du document, les méta-données, les liens vers les feuilles de style et les scripts.

Voici comment utiliser la balise `<head>` :

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

La balise `<head>` peut contenir plusieurs éléments, tels que :

>[!summary] Que peut-t-on y mettre ?
>-   La balise `<title>` : qui définit le titre du document, qui est affiché dans l'onglet du navigateur et utilisé par les moteurs de recherche pour indexer le document.
> -   Les balises `<meta>` : qui définissent des informations sur le document, telles que l'auteur, la description et les mots-clés.
> -   Les balises `<link>` : qui définissent des liens vers des ressources externes, telles que les feuilles de style et les icônes.
> -   Les balises `<script>` : qui définissent des scripts à exécuter sur la page.

Voici un exemple de balise `<head>` avec différents éléments :

```HTML
<head>
  <title>Mon site</title>
  <meta name="author" content="John Doe">
  <meta name="description" content="Bienvenue sur mon site">
  <meta name="keywords" content="site, web, HTML">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <script src="script.js"></script>
</head>
```

En résumé, la balise `<head>` est utilisée dans les documents HTML pour définir les informations sur le document, qui ne sont pas affichées directement sur la page. Elle est placée entre les balises `<html>` et `<body>`, et peut contenir plusieurs éléments tels que le titre du document, les méta-données, les liens vers les feuilles de style et les scripts.