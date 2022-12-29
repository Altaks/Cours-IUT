**Cours lié :**
- [[Introduction au CSS]]

En CSS, les sélecteurs sont utilisés pour sélectionner les éléments HTML sur lesquels s'appliqueront les règles de style définies dans le fichier de feuille de style. Il existe plusieurs types de sélecteurs en CSS :

-   Les sélecteurs simples, qui permettent de sélectionner un élément HTML en fonction de son nom de balise, de sa classe ou de son identifiant :
  
   > [!example] Exemples : 
> `h1` : Sélectionne toutes les balises h1
> 
> `.ma-classe` : Sélectionne tous les éléments ayant comme classe `ma-classe
> 
>  `#mon-identifiant` : Sélectionne l'élément portant l'identifiant `mon-identifiant`
      
-   Les sélecteurs de descendance, qui permettent de sélectionner des éléments HTML qui se trouvent à l'intérieur d'autres éléments :
    -   Exemple : `div p`, `ul li`
      
-   Les sélecteurs de fratrie, qui permettent de sélectionner des éléments HTML qui ont le même parent et qui se suivent dans le code HTML :
    -   Exemple : `h1 + h2`, `p ~ span`
      
-   Les sélecteurs d'attribut, qui permettent de sélectionner des éléments HTML en fonction de la valeur d'un de leurs attributs :
    -   Exemple : `a[href='https://www.example.com']`, `input[type='text']`

Il existe également d'autres types de sélecteurs en CSS, comme les sélecteurs de pseudo-classe (qui permettent de sélectionner des éléments en fonction de leur état, comme par exemple les liens qui ont été visités ou survolés), et les sélecteurs de pseudo-éléments (qui permettent de sélectionner des parties spécifiques de certains éléments, comme par exemple la première lettre d'un paragraphe).