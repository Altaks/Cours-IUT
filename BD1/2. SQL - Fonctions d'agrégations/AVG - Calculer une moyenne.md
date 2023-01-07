**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La fonction `AVG` (pour "average" ou "moyenne") est une fonction d'agrégation utilisée en SQL pour calculer la moyenne d'une colonne de données numériques. Elle retourne le résultat sous forme de nombre décimal.

Voici comment utiliser la fonction `AVG` dans une requête SQL :

```sql
SELECT AVG(colonne) FROM table;
```

Voici un exemple de requête avec la fonction `AVG` :

```sql
SELECT AVG(age) AS moyenne_age
FROM utilisateurs;
```

Cette requête calcule la moyenne d'âge de tous les utilisateurs.

La fonction `AVG` ne peut être utilisée qu'avec des colonnes de type numérique (entier ou décimal). Si vous utilisez la fonction `AVG` avec une colonne de type chaîne de caractères ou une valeur `NULL`, la requête échouera.

Voici un exemple d'utilisation de la fonction `AVG` dans une requête plus complexe :

```sql
SELECT AVG(montant) AS moyenne_commandes
FROM commandes
WHERE id_utilisateur IN (
	SELECT id 
	FROM utilisateurs 
	WHERE ville = 'Paris'
);
```

Cette requête calcule la moyenne des montants des commandes passées par les utilisateurs habitant à Paris.

Il est important de noter que la fonction `AVG` ignore les valeurs `NULL` dans le calcul de la moyenne. Si toutes les valeurs d'une colonne sont `NULL`, la fonction `AVG` retournera également `NULL`.