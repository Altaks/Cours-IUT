**Cours lié :**
- [[body - Contenu de la page]]
- [[form, input - Formulaires]]

La balise `<button>` est utilisée dans les documents HTML pour créer des boutons interactifs. Elle est utilisée pour permettre aux utilisateurs de cliquer sur le bouton et de déclencher une action, comme soumettre un formulaire, lancer une requête AJAX, ouvrir un menu déroulant, etc.

Voici comment utiliser la balise `<button>` :

```HTML
<button>Cliquez ici</button>
```

La balise `<button>` peut contenir du texte et d'autres éléments tels que des images, des icônes, etc. Voici un exemple de balise `<button>` avec différents éléments :

```HTML
<button>
  <img src="icon.png" alt="Icône de mon bouton">
  Cliquez ici
</button>
```

La balise `<button>` utilise plusieurs attributs pour définir son comportement et son apparence :

> [!summary] Quels attributs ?
> -   `type` : spécifie le type de bouton (par défaut "submit" pour soumettre un formulaire, "reset" pour réinitialiser un formulaire, ou "button" pour un bouton générique)
> -   `name` : spécifie le nom du bouton (utile pour les formulaires)
> -   `value` : spécifie la valeur du bouton (utile pour les formulaires)
> -   `disabled` : désactive le bouton (empêche l'utilisateur de cliquer dessus)
> -   `form` : spécifie l'identifiant du formulaire auquel le bouton appartient
> -   `formaction` : spécifie l'URL de soumission du formulaire (si différente de l'URL du formulaire)
> -   `formmethod` : spécifie la méthode HTTP de soumission du formulaire (par défaut "get", peut être "post")

Voici un exemple de balise `<button>` avec plusieurs attributs :

```HTML
<button type="button" name="bouton1" value="valeur1" disabled form="form1" formaction="/soumettre" formmethod="post">
  Cliquez ici
</button>
```

En résumé, la balise `<button>` est utilisée dans les documents HTML pour créer des boutons interactifs. Elle utilise plusieurs attributs pour définir son comportement et son apparence, comme le type de bouton, le nom, la valeur, l'état de désactivation, le formulaire auquel il appartient, l'URL de soumission et la méthode HTTP de soumission. La balise `<button>` peut contenir du texte et d'autres éléments tels que des images, des icônes, etc.