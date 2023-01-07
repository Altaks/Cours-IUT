**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La clause `INNER JOIN` est utilisée en SQL pour effectuer une jointure entre deux tables en récupérant uniquement les lignes qui ont des valeurs communes dans les colonnes partagées entre les deux tables. Elle prend la forme suivante :

```sql
SELECT * FROM table1
INNER JOIN table2 ON table1.colonne = table2.colonne;
```

Voici comment utiliser la clause `INNER JOIN` :

1.  Sélectionnez les colonnes que vous souhaitez récupérer à l'aide de la clause `SELECT`. Vous pouvez utiliser l'asterisque `*` pour sélectionner toutes les colonnes.
    
2.  Utilisez la clause `FROM` pour spécifier les tables à joindre.
    
3.  Utilisez la clause `INNER JOIN` pour effectuer la jointure entre les tables.
    
4.  Utilisez la clause `ON` pour définir la condition de jointure. La condition de jointure doit être une expression qui évalue à `TRUE` pour les lignes à joindre.
    

Voici un exemple de requête avec la clause `INNER JOIN` :

```sql
SELECT * FROM table1 
INNER JOIN table2 ON table1.colonne = table2.colonne;
```

Cette requête récupère le nom et le prénom de tous les utilisateurs ayant passé une commande, ainsi que le montant de leurs commandes. Si un utilisateur n'a pas passé de commande ou si une commande n'a pas d'utilisateur associé, la ligne sera ignorée.

La clause `OUTER JOIN`, en revanche, permet de récupérer toutes les lignes de chaque table, même si elles ne correspondent pas à des lignes de l'autre table. Il existe deux types de clause `OUTER JOIN` : `LEFT JOIN` et `RIGHT JOIN`. La clause `LEFT JOIN` récupère toutes les lignes de la table de gauche, même si elles ne correspondent pas à des lignes de la table de droite, tandis que la clause `RIGHT JOIN` récupère toutes les lignes de la table de droite, même si elles ne correspondent pas à des lignes de la table de gauche.

Voici un exemple de requête avec la clause `OUTER JOIN` :

*La clause OUTER est implicite lors d'un left/right join, de plus, un OUTER JOIN sur les deux tables reviendrait à réaliser un produit cartésien*

```sql
SELECT u.nom, u.prenom, c.montant
FROM utilisateurs u 
LEFT JOIN commandes c ON u.id = c.id_utilisateur;
```

Cette requête récupère le nom et le prénom de tous les utilisateurs, ainsi que le montant de leurs commandes (s'ils en ont passé). Si un utilisateur n'a pas passé de commande, le montant de la commande sera `NULL`.

Voici un autre exemple avec la clause `RIGHT JOIN` :

```sql
SELECT c.id, c.montant, u.nom, u.prenom
FROM commandes c 
RIGHT JOIN utilisateurs u ON c.id_utilisateur = u.id;
```

Cette requête récupère l'ID et le montant de toutes les commandes, ainsi que le nom et le prénom de l'utilisateur qui a passé la commande (s'il existe). Si une commande n'a pas d'utilisateur associé, le nom et le prénom de l'utilisateur seront `NULL`.

Il est important de noter que les clauses `LEFT JOIN` et `RIGHT JOIN` ne fonctionnent que si la condition de jointure est présente dans la clause `ON`. Si elle n'est pas présente, la requête échouera. De plus, si vous souhaitez effectuer une jointure sans référence à une table en particulier, vous pouvez utiliser la clause `FULL OUTER JOIN`, qui récupère toutes les lignes de chaque table, même si elles ne correspondent pas à des lignes de l'autre table.