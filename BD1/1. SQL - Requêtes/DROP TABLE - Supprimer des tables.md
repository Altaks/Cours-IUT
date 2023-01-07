**Cours liés :**
- [[CREATE TABLE - Créer des tables]]

La requête `DROP TABLE` est utilisée en SQL pour supprimer une table de base de données. Elle prend la forme suivante :

```sql
DROP TABLE nom_table;
```

Voici comment utiliser la requête `DROP TABLE` :

1.  Spécifiez le nom de la table à supprimer en utilisant la clause `TABLE`.

Voici un exemple de requête `DROP TABLE` :

```sql
DROP TABLE utilisateurs;
```

Il est important de noter que la requête `DROP TABLE` supprimera définitivement la table et toutes les données qu'elle contient. Elle échouera si la table n'existe pas ou si elle est référencée par des clés étrangères dans d'autres tables. Pour éviter cela, vous pouvez utiliser la clause `CASCADE` pour supprimer également les tables référençant la table à supprimer, ou la clause `RESTRICT` pour empêcher la suppression de la table tant qu'elle est référencée par d'autres tables.