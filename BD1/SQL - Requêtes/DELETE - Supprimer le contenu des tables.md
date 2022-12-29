La requête `DELETE` est utilisée en SQL pour supprimer des lignes d'une table de base de données. Elle prend la forme suivante :

```sql
DELETE FROM nom_table 
WHERE condition;
```

Voici comment utiliser la requête `DELETE` :

1.  Spécifiez le nom de la table à partir de laquelle vous souhaitez supprimer les lignes en utilisant la clause `FROM`.
    
2.  Utilisez la clause `WHERE` pour filtrer les lignes à supprimer. Si vous omettez cette clause, toutes les lignes de la table seront supprimées.
    

Voici quelques exemples de requêtes `DELETE` :

-   Supprimer toutes les lignes de la table :

```sql
DELETE FROM utilisateurs;
```

-   Supprimer certaines lignes de la table :

```sql
DELETE FROM utilisateurs 
WHERE date_inscription < '2022-01-01';
```

Il est important de noter que la requête `DELETE` peut entraîner la suppression de lignes qui sont référencées par des clés étrangères dans d'autres tables. Si la table possède des contraintes de clé étrangère, la requête `DELETE` peut échouer si elle entraîne la suppression de lignes référencées. Pour éviter cela, vous pouvez utiliser la clause `ON DELETE SET NULL` ou `ON DELETE CASCADE` lors de la définition de la contrainte de clé étrangère pour définir comment les lignes référencées doivent être traitées lors de la suppression.