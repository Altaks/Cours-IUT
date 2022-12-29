**Cours lié :**
- [[body - Contenu de la page]]
- [[p, br - Paragraphes]]

La balise `<span>` est utilisée pour appliquer un style à un fragment de texte dans une page web. Elle peut être utilisée de la même manière que la balise `<div>`, mais elle est préférée lorsqu'il s'agit de fragment de texte plutôt que de blocs de contenu. Voici un exemple de code HTML qui utilise la balise `<span>` :

```HTML
<p>Voici un exemple de texte <span style="color: red;">en rouge</span>.</p>
```

Dans cet exemple, le texte "en rouge" sera affiché en rouge grâce à la balise `<span>` et à l'attribut `style`.

Il est important de noter que la balise `<span>` ne doit pas être utilisée pour ajouter de la signification sémantique au contenu. Si vous souhaitez ajouter de la signification sémantique, vous devriez plutôt utiliser des balises spécifiques comme `<em>` (pour "emphasis") ou `<strong>` (pour "strong").

Voici un exemple de code HTML qui utilise la balise `<span>` de manière sémantique :

```HTML
<p>Voici un exemple de texte <span class="important">important</span>.</p>
```

Dans cet exemple, la balise `<span>` est utilisée avec l'attribut `class` pour ajouter de la signification sémantique au contenu. Cependant, il serait préférable d'utiliser la balise `<strong>` à la place de la balise `<span>` dans ce cas, comme ceci :

```HTML
<p>Voici un exemple de texte <strong>important</strong>.</p>
```

Cette approche est préférable car elle utilise une balise spécifique qui a un sens sémantique précis, ce qui rend le code HTML plus clair et plus facile à comprendre.