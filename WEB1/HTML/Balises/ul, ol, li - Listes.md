**Cours lié :**
- [[body - Contenu de la page]]

Les balises `<ul>`, `<ol>` et `<li>` sont utilisées pour créer des listes dans du code HTML. Voici un bref aperçu de chacune de ces balises :

-   La balise `<ul>` (pour "unordered list") est utilisée pour créer une liste non ordonnée. Une liste non ordonnée est une liste de points qui n'ont pas de numérotation ou de classement particulier. Chaque élément de la liste est représenté par une balise `<li>` (pour "list item"). Voici un exemple de code HTML qui utilise la balise `<ul>` :

```HTML
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

Dans cet exemple, la liste contient trois éléments, chacun étant représenté par une balise `<li>`.

-   La balise `<ol>` (pour "ordered list") est utilisée pour créer une liste ordonnée. Une liste ordonnée est une liste de points qui sont numérotés ou classés selon un ordre particulier. Chaque élément de la liste est également représenté par une balise `<li>`. Voici un exemple de code HTML qui utilise la balise `<ol>` :

```HTML
<ol>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ol>
```

Dans cet exemple, la liste contient également trois éléments, chacun étant représenté par une balise `<li>`.

-   La balise `<li>` (pour "list item") est utilisée pour représenter un élément de liste, qu'il s'agisse d'une liste non ordonnée (balise `<ul>`) ou ordonnée (balise `<ol>`). Elle doit être placée à l'intérieur d'une liste et peut contenir n'importe quel type de contenu, y compris du texte, des images, des formulaires, etc. Voici un exemple de code HTML qui utilise la balise `<li>` :

```HTML
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

Dans cet exemple, chaque élément de la liste est représenté par une balise `<li>`, qui doit être placée à l'intérieur d'une liste et peut contenir n'importe quel type de contenu.

Voici un exemple de code HTML qui utilise toutes ces balises :

```HTML
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>
    Élément 3
    <ol>
      <li>Sous-élément 1</li>
      <li>Sous-élément 2</li>
    </ol>
  </li>
</ul>
```

Dans cet exemple, la liste contient trois éléments, le troisième étant lui-même une liste ordonnée (balise `<ol>`) avec deux sous-éléments (balises `<li>`).

> [!question] Changer le style d'une liste
> En HTML, il est possible de personnaliser l'apparence des listes grâce à des styles CSS. Voici quelques exemples de styles que tu peux appliquer aux listes :
> -   La propriété `list-style-type` permet de choisir le type de puce qui sera affiché devant chaque élément de la liste. Par exemple, tu peux utiliser la valeur `disc` pour afficher des disques pleins, `circle` pour afficher des cercles vides, `square` pour afficher des carrés, etc. Tu peux également utiliser la valeur `none` pour ne pas afficher de puce du tout.
> -   La propriété `list-style-position` permet de choisir l'emplacement de la puce par rapport au texte de l'élément de la liste. Tu peux utiliser la valeur `inside` pour que la puce soit placée à l'intérieur du texte, ou `outside` pour qu'elle soit placée à l'extérieur.
> -   La propriété `list-style-image` permet de remplacer la puce par une image. Tu peux utiliser cette propriété en indiquant l'URL de l'image souhaitée.