**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

Le produit cartésien de deux tables est un résultat de requête qui contient toutes les combinaisons possibles de lignes des deux tables. En d'autres termes, pour chaque ligne de la première table, le produit cartésien associe toutes les lignes de la seconde table.

Voici comment utiliser le produit cartésien dans une requête SQL :

```sql
SELECT * FROM table1, table2;
```

Voici un exemple de produit cartésien avec deux tables `utilisateurs` et `commandes` :

```
utilisateurs
+----+--------+--------+
| id | nom    | prenom |
+----+--------+--------+
| 1  | Dupont | Jean   |
| 2  | Durand | Marie  |
| 3  | Martin | Paul   |
+----+--------+--------+

commandes
+----+-------------+------------+
| id | id_utilisateur | montant   |
+----+-------------+------------+
| 1  | 1           | 100        |
| 2  | 1           | 50         |
| 3  | 3           | 200        |
+----+-------------+------------+
```

```sql
SELECT * FROM utilisateurs, commandes;
```

```
Res: 
+----+--------+--------+----+----------------+------------+
| id | nom    | prenom | id | id_utilisateur | montant    |
+----+--------+--------+----+----------------+------------+
| 1  | Dupont | Jean   | 1  | 1              | 100        |
| 1  | Dupont | Jean   | 2  | 1              | 50         |
| 1  | Dupont | Jean   | 3  | 3              | 200        |
| 2  | Durand | Marie  | 1  | 1              | 100        |
| 2  | Durand | Marie  | 2  | 1              | 50         |
| 2  | Durand | Marie  | 3  | 3              | 200        |
| 3  | Martin | Paul   | 1  | 1              | 100        |
| 3  | Martin | Paul   | 2  | 1              | 50         |
| 3  | Martin | Paul   | 3  | 3              | 200        |
+----+--------+--------+----+----------------+------------+
```

Comme vous pouvez le voir, le produit cartésien a généré 9 lignes, correspondant à toutes les combinaisons possibles de lignes des deux tables.

Il est important de noter que le produit cartésien peut rapidement devenir très volumineux, et n'est généralement pas utilisé dans les requêtes courantes. Il est souvent utilisé comme étape intermédiaire pour obtenir un résultat qui sera filtré ou agrégé par la suite.