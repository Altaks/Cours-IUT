**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La fonction `ABS` (pour "absolute value" ou "valeur absolue") est une fonction de calcul utilisée en SQL pour retourner la valeur absolue d'un nombre. La valeur absolue d'un nombre est sa valeur numérique sans tenir compte de son signe (positif ou négatif).

Voici comment utiliser la fonction `ABS` dans une requête SQL :

```sql
SELECT ABS(colonne) FROM table;
```

Voici un exemple de requête avec la fonction `ABS` :

```sql
SELECT ABS(-100) AS valeur_absolue;
```

```
Res:
+----------------+
| valeur_absolue |
+----------------+
| 100            |
+----------------+
```

La fonction `ABS` peut être utilisée avec n'importe quel type de données numériques (entiers, décimaux, etc.), mais elle ne peut pas être utilisée avec des chaînes de caractères ou des valeurs `NULL`. Si vous utilisez la fonction `ABS` avec une valeur `NULL`, elle retournera également `NULL`.

Voici un exemple d'utilisation de la fonction `ABS` dans une requête plus complexe :

```sql
SELECT nom, prenom, ABS(age) AS age_absolu
FROM utilisateurs
WHERE ABS(age) > 20;
```

Cette requête récupère le nom, le prénom et l'âge absolu de tous les utilisateurs dont l'âge absolu est supérieur à 20 ans. Si l'âge de l'utilisateur est négatif, il sera converti en un âge positif avant d'être comparé à 20.