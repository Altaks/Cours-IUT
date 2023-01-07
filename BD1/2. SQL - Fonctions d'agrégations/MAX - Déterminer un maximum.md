**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La fonction `MAX` (pour "maximum") est une fonction d'agrégation utilisée en SQL pour trouver la valeur maximale d'une colonne de données. Elle retourne la valeur la plus grande de la colonne, quel que soit son type de données (entier, décimal, chaîne de caractères, etc.).

Voici comment utiliser la fonction `MAX` dans une requête SQL :

```sql
SELECT MAX(colonne) FROM table;
```

Voici un exemple de requête avec la fonction `MAX` :

```sql
SELECT MAX(age) AS age_maximum
FROM utilisateurs;
```

Cette requête trouve l'âge maximum de tous les utilisateurs.

La fonction `MAX` ignore les valeurs `NULL` dans le calcul du maximum. Si toutes les valeurs d'une colonne sont `NULL`, la fonction `MAX` retournera également `NULL`.

Voici un exemple d'utilisation de la fonction `MAX` dans une requête plus complexe :

```sql
SELECT MAX(montant) AS commande_max
FROM commandes
WHERE id_utilisateur IN (
	SELECT id 
	FROM utilisateurs 
	WHERE ville = 'Paris'
);
```

Cette requête trouve le montant maximum d'une commande passée par un utilisateur habitant à Paris.