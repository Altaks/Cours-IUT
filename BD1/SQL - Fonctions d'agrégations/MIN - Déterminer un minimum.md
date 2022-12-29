**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La fonction `MIN` (pour "minimum") est une fonction d'agrégation similaire à la fonction `MAX`, mais qui retourne la valeur minimale d'une colonne de données au lieu de la valeur maximale. Elle fonctionne de la même manière que la fonction `MAX`, mais en trouvant la valeur la plus petite de la colonne au lieu de la plus grande.

Voici comment utiliser la fonction `MIN` dans une requête SQL :

```sql
SELECT MIN(colonne) FROM table;
```

Voici un exemple de requête avec la fonction `MIN` :

```sql
SELECT MIN(age) AS age_minimum
FROM utilisateurs;
```

Cette requête trouve l'âge minimum de tous les utilisateurs.

Comme pour la fonction `MAX`, la fonction `MIN` ignore les valeurs `NULL` dans le calcul du minimum. Si toutes les valeurs d'une colonne sont `NULL`, la fonction `MIN` retournera également `NULL`.

Voici un exemple d'utilisation de la fonction `MIN` dans une requête plus complexe :

```sql
SELECT MIN(montant) AS commande_min
FROM commandes
WHERE id_utilisateur IN (
	SELECT id 
	FROM utilisateurs 
	WHERE ville = 'Paris'
);
```

Cette requête trouve le montant minimum d'une commande passée par un utilisateur habitant à Paris.