La requête `SELECT` est l'une des commandes les plus couramment utilisées en SQL (Structured Query Language). Elle permet de sélectionner des données d'une base de données et de les afficher à l'écran ou de les utiliser dans une autre requête.

Voici comment utiliser la requête `SELECT` :

1.  Sélectionnez les colonnes souhaitées à partir de la table ou des tables :

```sql
SELECT colonne1, colonne2, colonne3 
FROM nom_table;
```

Vous pouvez sélectionner toutes les colonnes en utilisant le caractère `*` à la place de la liste de colonnes.

2.  Ajoutez une clause `WHERE` pour filtrer les lignes :

```sql
SELECT colonne1, colonne2, colonne3 
FROM nom_table 
WHERE colonne4 = valeur;
```

La clause `WHERE` permet de filtrer les lignes en fonction de critères spécifiques. Vous pouvez utiliser des opérateurs de comparaison tels que `=`, `<>`, `>`, `<`, `>=` et `<=` pour spécifier les critères de filtrage.

3.  Ajoutez une clause `ORDER BY` pour trier les résultats :

```sql
SELECT colonne1, colonne2, colonne3 
FROM nom_table 
WHERE colonne4 = valeur 
ORDER BY colonne5 ASC;
```

La clause `ORDER BY` permet de trier les résultats de la requête en fonction de la valeur d'une colonne. Vous pouvez utiliser l'option `ASC` (ascendant) ou `DESC` (descendant) pour spécifier l'ordre de tri.

4.  Ajoutez une clause `LIMIT` pour limiter le nombre de résultats :

```sql
SELECT colonne1, colonne2, colonne3 
FROM nom_table 
WHERE colonne4 = valeur 
ORDER BY colonne5 ASC 
LIMIT 10;
```

La clause `LIMIT` permet de limiter le nombre de résultats retournés par la requête. Elle est particulièrement utile lorsque vous travaillez avec de grandes bases de données et que vous ne voulez pas afficher tous les résultats.

Voici quelques exemples de requêtes `SELECT` plus avancées :

-   Joindre plusieurs tables :

```sql
SELECT t1.colonne1, t2.colonne2 
FROM nom_table1 t1 
INNER JOIN nom_table2 t2 ON t1.colonne3 = t2.colonne4;
```

-   Utiliser des fonctions de groupe :

```sql
SELECT colonne1, AVG(colonne2) 
FROM nom_table 
GROUP BY colonne1;
```