**Cours lié :**
- [[body - Contenu de la page]]
- [[header - Entête de page]]
- [[footer - Pied de page]]
- [[div, section - Partitionner sa page]]

La balise `<nav>` est utilisée pour créer une zone de navigation dans une page web. Elle est souvent utilisée pour regrouper des liens vers d'autres pages ou vers des sections de la page courante. Voici un exemple de code HTML qui utilise la balise `<nav>` :

```HTML
<nav>
  <a href="/">Accueil</a> |
  <a href="/blog">Blog</a> |
  <a href="/contact">Contact</a>
</nav>
```

Dans cet exemple, la balise `<nav>` contient trois liens qui pointent vers la page d'accueil, la page du blog et la page de contact. Ces liens sont séparés par le caractère `|`.

Il est important de noter que la balise `<nav>` ne doit être utilisée que pour les éléments de navigation principaux de la page. Pour les éléments de navigation secondaires ou tertiaires, vous devriez plutôt utiliser la balise `<ul>` (liste non ordonnée) avec des éléments `<li>` (élément de liste).

Voici un exemple de code HTML qui utilise la balise `<nav>` avec une liste non ordonnée :

```HTML
<nav>
  <ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

Dans cet exemple, la balise `<nav>` contient une liste non ordonnée qui contient trois éléments de liste avec des liens vers la page d'accueil, la page du blog et la page de contact.