**Cours lié :**
- [[Sélecteurs]]

L'attribut CSS `font` permet de définir la police de caractères d'un élément. Il est possible de définir plusieurs propriétés de police en utilisant l'attribut `font`, comme la taille, la famille de polices, le style, etc.

Voici comment utiliser l'attribut `font` :

```CSS
.ma-classe {
	font: 12px Arial, sans-serif; /* taille et famille de police */
}
```

```CSS
.ma-classe {
	font: italic bold 12px Arial, sans-serif; /* style et poids */
}
```

Il est également possible de définir chaque propriété de police séparément, en utilisant les attributs suivants :

> [!summary] Attributs de `font`
> -   `font-size` : définit la taille de la police
> -   `font-family` : définit la famille de polices
> -   `font-style` : définit le style de la police (italique, oblique, etc.)
> -   `font-weight` : définit le poids de la police (normal, bold, etc.)

Voici un exemple de code qui utilise ces attributs de manière individuelle :

Copy code

`.ma-classe {   font-size: 12px;   font-family: Arial, sans-serif;   font-style: italic;   font-weight: bold; }`

Il est important de bien comprendre comment fonctionne l'attribut `font` et ses propriétés, car cela peut avoir un impact important sur la mise en forme du texte de votre site web.