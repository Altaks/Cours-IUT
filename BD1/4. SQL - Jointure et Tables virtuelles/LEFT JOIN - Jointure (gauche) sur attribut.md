**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La clause `LEFT JOIN` est utilisée en SQL pour effectuer une jointure entre deux tables en récupérant toutes les lignes de la table de gauche, même si elles ne correspondent pas à des lignes de la table de droite. Elle prend la forme suivante :

```sql
SELECT * FROM table1 
LEFT JOIN table2 ON table1.colonne = table2.colonne;
```

Voici comment utiliser la clause `LEFT JOIN` :

1.  Sélectionnez les colonnes que vous souhaitez récupérer à l'aide de la clause `SELECT`. Vous pouvez utiliser l'asterisque `*` pour sélectionner toutes les colonnes.
    
2.  Utilisez la clause `FROM` pour spécifier les tables à joindre.
    
3.  Utilisez la clause `LEFT JOIN` pour effectuer la jointure entre les tables.
    
4.  Utilisez la clause `ON` pour définir la condition de jointure. La condition de jointure doit être une expression qui évalue à `TRUE` pour les lignes à joindre.
    

Voici un exemple de requête avec la clause `LEFT JOIN` :

```sql
SELECT u.nom, u.prenom, c.montant
FROM utilisateurs u 
LEFT JOIN commandes c ON u.id = c.id_utilisateur;
```

Cette requête récupère le nom et le prénom de tous les utilisateurs, ainsi que le montant de leurs commandes (s'ils en ont passé). Si un utilisateur n'a pas passé de commande, le montant de la commande sera `NULL`.

Il est important de noter que la clause `LEFT JOIN` ne fonctionne que si la condition de jointure est présente dans la clause `ON`. Si elle n'est pas présente, la requête échouera. De plus, si vous souhaitez effectuer une jointure avec la table de droite comme table de référence, vous pouvez utiliser la clause `RIGHT JOIN` à la place de la clause `LEFT JOIN`.