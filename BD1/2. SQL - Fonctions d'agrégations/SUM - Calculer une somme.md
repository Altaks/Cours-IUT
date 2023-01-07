**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La fonction `SUM` (pour "somme") est une fonction d'agrégation utilisée en SQL pour calculer la somme des valeurs d'une colonne de données numériques. Elle retourne le résultat sous forme de nombre entier ou décimal, selon le type de données de la colonne.

Voici comment utiliser la fonction `SUM` dans une requête SQL :

```sql
SELECT SUM(colonne) FROM table;
```

Voici un exemple de requête avec la fonction `SUM` :

```sql
SELECT SUM(montant) AS total_commandes
FROM commandes;
```

Cette requête calcule la somme des montants de toutes les commandes.

La fonction `SUM` ne peut être utilisée qu'avec des colonnes de type numérique (entier ou décimal). Si vous utilisez la fonction `SUM` avec une colonne de type chaîne de caractères ou une valeur `NULL`, la requête échouera.

Voici un exemple d'utilisation de la fonction `SUM` dans une requête plus complexe :

```sql
SELECT SUM(montant) AS total_commandes
FROM commandes
WHERE id_utilisateur IN (
	SELECT id 
	FROM utilisateurs 
	WHERE ville = 'Paris'
);
```

Cette requête calcule la somme des montants des commandes passées par les utilisateurs habitant à Paris.

Il est important de noter que la fonction `SUM` ignore les valeurs `NULL` dans le calcul de la somme. Si toutes les valeurs d'une colonne sont `NULL`, la fonction `SUM` retournera également `NULL`