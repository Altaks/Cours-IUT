**Cours lié :**
- [[body - Contenu de la page]]

La balise `<iframe>` est utilisée dans les documents HTML pour inclure du contenu d'un autre site web dans la page en cours. Elle est utilisée pour intégrer des vidéos, des cartes, des widgets, etc.

Voici comment utiliser la balise `<iframe>` :

```HTML
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="640" height="360"></iframe>
```

Dans l'exemple ci-dessus, la balise `<iframe>` est utilisée pour inclure une vidéo YouTube dans la page en cours. Le contenu de l'iframe est défini grâce à l'attribut `src`, qui spécifie l'URL de la vidéo. Les attributs `width` et `height` sont utilisés pour définir la taille de l'iframe.

Il est important de noter que la balise `<iframe>` peut être utilisée avec plusieurs attributs pour personnaliser son comportement, comme l'attribut `name` qui permet de donner un nom à l'iframe, l'attribut `frameborder` qui permet de désactiver la bordure de l'iframe, etc. Voici un exemple d'utilisation de la balise `<iframe>` avec plusieurs attributs :

```HTML
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.753034381579!2d2.3559134!3d48.8698788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78e2ec7e936f8b0e!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1607487634280!5m2!1sen!2sfr" width="640" height="360" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
```

Dans cet exemple, la balise `<iframe>` est utilisée pour inclure une carte Google Maps dans la page en cours. Elle utilise plusieurs attributs pour personnaliser son comportement, comme l'attribut `frameborder` qui désactive la bordure de l'iframe, l'attribut `style` qui applique du style à la bordure de l'iframe, l'attribut `allowfullscreen` qui permet de passer en plein écran, l'attribut `aria-hidden` qui indique si l'iframe est accessible aux technologies d'assistance, et l'attribut `tabindex` qui permet de naviguer dans l'iframe à l'aide des touches de tabulation.