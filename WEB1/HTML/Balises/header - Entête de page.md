**Cours lié :**
- [[body - Contenu de la page]]
- [[footer - Pied de page]]

La balise `<header>` est utilisée dans les documents HTML pour définir un en-tête. Elle est utilisée pour regrouper du contenu qui se trouve en début de page, comme le logo, le menu de navigation, le titre de la page, etc.

Voici comment utiliser la balise `<header>` :

```HTML
<header>
  <a href="/"><img src="/logo.png" alt="Logo de mon site"></a>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/a-propos">À propos</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

Dans l'exemple ci-dessus, la balise `<header>` contient un lien vers le logo de la page et un menu de navigation.

Il est important de noter que la balise `<header>` peut être utilisée à différents niveaux de structure, comme dans l'exemple suivant :

```HTML
<body>
  <header>
    <h1>Titre de mon site</h1>
  </header>
  <main>
    <article>
      <header>
        <h2>Titre de mon article</h2>
      </header>
      <p>Contenu de mon article</p>
    </article>
  </main>
</body>
```

Dans cet exemple, la balise `<header>` est utilisée pour définir un en-tête à différents niveaux de structure : à la racine de la page (`<body>`) et à l'intérieur de l'article (`<article>`).

En résumé, la balise `<header>` est utilisée dans les documents HTML pour définir un en-tête. Elle est utilisée pour regrouper du contenu qui se trouve en début de page, comme le logo, le menu de navigation, le titre de la page, etc. La balise `<header>` peut être utilisée à différents niveaux de structure, comme à la racine de la page ou à l'intérieur d'un élément sémantique comme un article.