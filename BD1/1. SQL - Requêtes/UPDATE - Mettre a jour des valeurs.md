La requête `UPDATE` est utilisée en SQL pour modifier des données existantes dans une table de base de données. Elle prend la forme suivante :

```sql
UPDATE nom_table 
SET colonne1 = valeur1, colonne2 = valeur2 
WHERE condition;
```

Voici comment utiliser la requête `UPDATE` :

1.  Spécifiez le nom de la table où vous souhaitez mettre à jour les données en utilisant la clause `FROM`.
    
2.  Utilisez la clause `SET` pour définir les colonnes et les valeurs à mettre à jour. Vous pouvez mettre à jour plusieurs colonnes en même temps en les séparant par une virgule.
    
3.  Utilisez la clause `WHERE` pour filtrer les lignes à mettre à jour. Si vous omettez cette clause, toutes les lignes de la table seront mises à jour.
    

Voici quelques exemples de requêtes `UPDATE` :

-   Mettre à jour une colonne pour toutes les lignes de la table :

```sql
UPDATE utilisateurs 
SET est_actif = 0;
```

-   Mettre à jour plusieurs colonnes pour toutes les lignes de la table :

```sql
UPDATE utilisateurs 
SET nom = 'Dupont', prenom = 'Jean';
```

-   Mettre à jour une colonne pour certaines lignes de la table :

```sql
UPDATE utilisateurs 
SET est_actif = 0 
WHERE date_inscription < '2022-01-01';
```

Il est important de noter que la requête `UPDATE` ne mettra pas à jour les lignes si des valeurs nulles sont spécifiées pour des colonnes qui ne sont pas autorisées à contenir null. De plus, si la table possède une contrainte d'unicité, la requête `UPDATE` peut échouer si la modification des données entraîne la création d'une ligne avec des valeurs uniques en double.