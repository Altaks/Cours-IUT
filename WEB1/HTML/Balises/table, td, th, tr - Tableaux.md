**Cours lié :**
- [[body - Contenu de la page]]

Les balises `<td>`, `<th>` et `<tr>` sont utilisées pour créer des tableaux HTML. Voici un bref aperçu de chacune de ces balises :

-   La balise `<td>` (pour "table data") est utilisée pour créer une cellule de tableau. Elle doit être placée à l'intérieur d'une ligne de tableau (balise `<tr>`) et peut contenir n'importe quel type de contenu, y compris du texte, des images, des formulaires, etc. Voici un exemple de code HTML qui utilise la balise `<td>` :

```HTML
<table>
  <tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
  </tr>
  <tr>
    <td>Cellule 3</td>
    <td>Cellule 4</td>
  </tr>
</table>
```

Dans cet exemple, le tableau contient deux lignes et deux colonnes, chaque colonne étant représentée par une balise `<td>`.

-   La balise `<th>` (pour "table header") est utilisée pour créer une cellule d'en-tête de tableau. Elle est utilisée de la même manière que la balise `<td>`, mais elle est généralement utilisée pour créer un en-tête de colonne ou de ligne. Elle peut également être utilisée pour donner un titre à un tableau. Voici un exemple de code HTML qui utilise la balise `<th>` :

```HTML
<table>
  <tr>
    <th>En-tête de colonne 1</th>
    <th>En-tête de colonne 2</th>
  </tr>
  <tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
  </tr>
  <tr>
    <td>Cellule 3</td>
    <td>Cellule 4</td>
  </tr>
</table>
```

Dans cet exemple, le tableau contient deux lignes et deux colonnes, avec les en-têtes de colonne représentés par des balises `<th>`.

-   La balise `<tr>` (pour "table row") est utilisée pour créer une ligne de tableau qui doit contenir une ou plusieurs cellules de tableau (balises `<td>` ou `<th>`). Elle doit être placée à l'intérieur d'un tableau (balise `<table>`).

Voici un exemple de code HTML qui utilise toutes ces balises :

```HTML
<table>
  <tr>
    <th>En-tête de colonne 1</th>
    <th>En-tête de colonne 2</th>
  </tr>
  <tr>
    <td>Cellule 1</td>
    <td>Cellule 2</td>
  </tr>
  <tr>
    <td>Cellule 3</td>
    <td>Cellule 4</td>
  </tr>
</table>
```

Cet exemple crée un tableau avec deux lignes et deux colonnes, avec les en-têtes de colonne représentés par des balises `<th>`. Les autres cellules du tableau sont représentées par des balises `<td>`.