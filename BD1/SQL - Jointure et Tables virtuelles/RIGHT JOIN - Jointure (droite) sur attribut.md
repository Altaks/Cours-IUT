**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La clause `RIGHT JOIN` est utilisée en SQL pour effectuer une jointure entre deux tables en récupérant toutes les lignes de la table de droite, même si elles ne correspondent pas à des lignes de la table de gauche. Elle prend la forme suivante :

```sql
SELECT * FROM table1 
RIGHT JOIN table2 ON table1.colonne = table2.colonne;
```

Voici comment utiliser la clause `RIGHT JOIN` :

1.  Sélectionnez les colonnes que vous souhaitez récupérer à l'aide de la clause `SELECT`. Vous pouvez utiliser l'asterisque `*` pour sélectionner toutes les colonnes.
    
2.  Utilisez la clause `FROM` pour spécifier les tables à joindre.
    
3.  Utilisez la clause `RIGHT JOIN` pour effectuer la jointure entre les tables.
    
4.  Utilisez la clause `ON` pour définir la condition de jointure. La condition de jointure doit être une expression qui évalue à `TRUE` pour les lignes à joindre.
    

Voici un exemple de requête avec la clause `RIGHT JOIN` :

```sql
SELECT c.id, c.montant, u.nom, u.prenom
FROM commandes c 
RIGHT JOIN utilisateurs u ON c.id_utilisateur = u.id;
```

Cette requête récupère l'ID et le montant de toutes les commandes, ainsi que le nom et le prénom de l'utilisateur qui a passé la commande (s'il existe). Si une commande n'a pas d'utilisateur associé, le nom et le prénom de l'utilisateur seront `NULL`.

Il est important de noter que la clause `RIGHT JOIN` ne fonctionne que si la condition de jointure est présente dans la clause `ON`. Si elle n'est pas présente, la requête échouera. De plus, si vous souhaitez effectuer une jointure avec la table de gauche comme table de référence, vous pouvez utiliser la clause `LEFT JOIN` à la place de la clause `RIGHT JOIN`.