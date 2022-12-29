**Cours lié :**
- [[body - Contenu de la page]]
- [[button - Bouton]]

La balise `<form>` est utilisée dans les documents HTML pour créer un formulaire de saisie de données. Elle est utilisée pour récolter des informations de l'utilisateur, comme des noms, des adresses e-mail, des mots de passe, etc.

Voici comment utiliser la balise `<form>` :

```HTML
<form action="/process" method="post">
  <label for="name">Nom :</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="email">E-mail :</label><br>
  <input type="email" id="email" name="email"><br>
  <label for="password">Mot de passe :</label><br>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Envoyer">
</form> 
```

Dans l'exemple ci-dessus, la balise `<form>` est utilisée pour créer un formulaire de saisie de données comprenant trois champs (nom, e-mail, mot de passe) et un bouton d'envoi. L'attribut `action` définit l'URL de la page qui va traiter les données du formulaire, tandis que l'attribut `method` définit la méthode HTTP à utiliser pour envoyer les données (POST dans l'exemple).

>[!faq] GET et POST : Quelle différence ?
La méthode HTTP `GET` est utilisée pour récupérer des données à partir d'un serveur. Elle est utilisée lorsque l'on souhaite afficher une page web, effectuer une recherche sur un site, etc.
>
La méthode HTTP `POST` est utilisée pour envoyer des données à un serveur. Elle est utilisée lorsque l'on souhaite envoyer un formulaire, uploader un fichier, etc.
>
Voici la principale différence entre `GET` et `POST` :
>
>-   `GET` est idempotent, c'est-à-dire qu'elle peut être appelée plusieurs fois sans avoir d'effet sur le serveur ou les données. Par exemple, si vous chargez plusieurs fois la même page web en utilisant `GET`, le serveur ne traitera qu'une seule demande.
>-   `POST` n'est pas idempotent, c'est-à-dire qu'elle a un effet sur le serveur ou les données. Par exemple, si vous envoyez plusieurs fois le même formulaire en utilisant `POST`, le serveur traitera chaque demande comme une action distincte.
>
>Voici quelques exemples d'utilisation de `GET` et `POST` :
>
>-   Afficher une page web : `GET /index.html`
>-   Effectuer une recherche sur un site : `GET /search?q=keyword`
>-   Envoyer un formulaire : `POST /process`
>-   Uploader un fichier : `POST /upload`

La balise `<input>` est utilisée dans les documents HTML pour créer un champ de saisie de données. Elle est utilisée pour récolter une information unique de l'utilisateur, comme un nom, une adresse e-mail, un mot de passe, etc.

Voici comment utiliser la balise `<input>` :

```HTML
<input type="text" id="name" name="name" value="Valeur par défaut">
```

Dans l'exemple ci-dessus, la balise `<input>` est utilisée pour créer un champ de saisie de type texte. L'attribut `type` définit le type de champ (texte, e-mail, mot de passe, etc.), l'attribut `id` définit un identifiant unique pour le champ, et l'attribut `name` définit le nom du champ qui sera utilisé pour envoyer les données. L'attribut `value` définit la valeur par défaut du champ.

Il est important de noter que la balise `<input>` peut être utilisée avec plusieurs attributs pour personnaliser son comportement, comme l'attribut `placeholder` qui permet de définir un texte de suggestion pour le champ, l'attribut `required` qui permet de rendre le champ obligatoire, l'attribut `readonly` qui permet de rendre le champ en lecture seule, etc.

> [!important] Attributs d'input :
> Voici la liste des attributs que vous pouvez utiliser avec la balise `<input>` :
> -   `accept` : spécifie les types de fichiers acceptés pour un champ de type `file`
> -   `alt` : spécifie une alternative au texte pour un champ de type `image`
> -   `autocomplete` : indique si le navigateur doit automatiquement compléter le champ ou non
> -   `autofocus` : indique si le champ doit être automatiquement sélectionné au chargement de la page
> -   `checked` : indique si un bouton radio ou une case à cocher doit être coché par défaut
> -   `disabled` : indique si le champ est désactivé et ne peut pas être modifié
> -   `form` : spécifie l'identifiant du formulaire auquel le champ appartient
> -   `formaction` : spécifie l'URL de la page qui va traiter les données du formulaire pour un champ de type `submit`
> -   `formenctype` : spécifie le type d'encodage des données du formulaire pour un champ de type `submit`
> -   `formmethod` : spécifie la méthode HTTP à utiliser pour envoyer les données du formulaire pour un champ de type `submit`
> -   `formtarget` : spécifie la fenêtre ou le cadre dans lequel la page de destination doit être affichée pour un champ de type `submit`
> -   `height` : spécifie la hauteur en pixels d'un champ de type `image`
> -   `id` : spécifie un identifiant unique pour le champ
> -   `list` : spécifie l'identifiant de la liste de suggestions associée au champ
> -   `max` : spécifie la valeur maximale autorisée pour un champ de type `number` ou `range`
> -   `maxlength` : spécifie la longueur maximale autorisée pour le champ
> -   `min` : spécifie la valeur minimale autorisée pour un champ de type `number` ou `range`
> -   `multiple` : indique si le champ peut accepter plusieurs valeurs pour un champ de type `file` ou `email`
> -   `name` : spécifie le nom du champ qui sera utilisé pour envoyer les données
> -   `pattern` : spécifie un motif à vérifier pour le champ
> -   `placeholder` : spécifie un texte de suggestion pour le champ
> -   `readonly` : indique si le champ est en lecture seule et ne peut pas être modifié
> -   `required` : indique si le champ est obligatoire et doit être rempli
> -   `size` : spécifie la longueur en caractères du champ
> -   `src` : spécifie l'URL de l'image à afficher pour un champ de type `image`
> -   `step` : spécifie l'intervalle de valeurs autorisé pour un champ de type `number` ou `range`
> -   `type` : spécifie le type de champ (text, email, password, etc.)
>   
>>[!abstract] Quels types possibles ?
>>Voici la liste des types de champ que vous pouvez utiliser avec la balise `<input>` :
>>
>>-   `button` : crée un bouton de formulaire qui peut être utilisé pour envoyer des données ou exécuter une action
>>-   `checkbox` : crée une case à cocher qui peut être cochée ou décochée
>>-   `color` : crée un champ de sélection de couleur
>>-   `date` : crée un champ de sélection de date
>>-   `datetime-local` : crée un champ de sélection de date et d'heure
>>-   `email` : crée un champ de saisie d'adresse email
>>-   `file` : crée un champ de sélection de fichier
>>-   `hidden` : crée un champ caché qui n'est pas affiché à l'écran
>>-   `image` : crée un bouton de formulaire qui affiche une image et qui peut être utilisé pour envoyer des données ou exécuter une action
>>-   `month` : crée un champ de sélection de mois
>>-   `number` : crée un champ de saisie de nombre
>>-   `password` : crée un champ de saisie de mot de passe
>>-   `radio` : crée un bouton radio qui peut être sélectionné ou non
>>-   `range` : crée un curseur qui permet de sélectionner une valeur dans une plage de valeurs
>>-   `reset` : crée un bouton de formulaire qui réinitialise tous les champs du formulaire
>>-   `search` : crée un champ de saisie de recherche
>>-   `submit` : crée un bouton de formulaire qui envoie les données du formulaire à une page de destination
>>-   `tel` : crée un champ de saisie de numéro de téléphone
>>-   `text` : crée un champ de saisie de texte
>>-   `time` : crée un champ de sélection d'heure
>>-   `url` : crée un champ de saisie d'URL
>>-   `week` : crée un champ de sélection de semaine  
> -   `value` : spécifie la valeur par défaut du champ
> -   `width` : spécifie la largeur en pixels d'un champ de type `image`
