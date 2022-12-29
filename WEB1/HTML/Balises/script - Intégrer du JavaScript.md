**Cours lié :**
- [[head - Spécifier des attributs de page]]

La balise `<script>` est utilisée pour inclure du code JavaScript dans une page web. Elle peut être utilisée de deux manières :

1.  En incluant directement le code JavaScript entre les balises `<script>` et `</script>` :

```HTML
<script>
  console.log("Hello, world!");
</script>
```

2.  En pointant vers un fichier externe contenant le code JavaScript en utilisant l'attribut `src` :

```HTML
<script src="/scripts/main.js"></script>
```

Dans cet exemple, le fichier `main.js` sera chargé et exécuté lorsque la page sera chargée.

Il est important de noter que la balise `<script>` doit être placée dans la section `<head>` ou `<body>` de la page. Si vous placez la balise `<script>` avant les éléments HTML de la page, il est possible que le code JavaScript soit exécuté avant que les éléments HTML ne soient chargés, ce qui peut causer des problèmes. Pour éviter cela, vous devriez placer la balise `<script>` à la fin de la section `<body>`, juste avant la balise de fermeture `</body>`.

Voici un exemple de code HTML qui utilise la balise `<script>` pour inclure du code JavaScript :

```HTML
<html>
  <head>
    <title>Mon site</title>
  </head>
  <body>
    <h1>Bienvenue sur mon site</h1>
    <p>Voici quelques informations sur moi :</p>
    <ul id="info">
      <li>Prénom : Jean</li>
      <li>Age : 30</li>
      <li>Ville : Paris</li>
    </ul>
    <script>
      console.log("Hello, world!");
      document.getElementById("info").innerHTML += "<li>Pays : France</li>";
    </script>
  </body>
</html>
```

Dans cet exemple, le code JavaScript est inclué à la fin de la section `<body>` et ajoute un nouvel élément à la liste d'informations sur moi.