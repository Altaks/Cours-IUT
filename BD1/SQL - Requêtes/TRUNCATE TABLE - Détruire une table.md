**Cours liés :**
- [[CREATE TABLE - Créer des tables]]
- [[DROP TABLE - Supprimer des tables]]

La requête `TRUNCATE TABLE` est utilisée en SQL pour supprimer toutes les lignes d'une table de base de données, tout en conservant la structure de la table elle-même. Elle prend la forme suivante :

```sql
TRUNCATE TABLE nom_table;
```

Voici comment utiliser la requête `TRUNCATE TABLE` :

1.  Spécifiez le nom de la table à vider en utilisant la clause `TABLE`.

Voici un exemple de requête `TRUNCATE TABLE` :

```sql
TRUNCATE TABLE utilisateurs;
```

Il est important de noter que la requête `TRUNCATE TABLE` supprimera toutes les lignes de la table, mais elle ne resettera pas l'auto-incrémentation des colonnes de type `INT` avec la contrainte `AUTO_INCREMENT`. Elle échouera si la table n'existe pas ou si elle est référencée par des clés étrangères dans d'autres tables. Pour éviter cela, vous pouvez utiliser la clause `CASCADE` pour supprimer également les données des tables référençant la table à vider, ou la clause `RESTRICT` pour empêcher la suppression des données tant que la table est référencée par d'autres tables