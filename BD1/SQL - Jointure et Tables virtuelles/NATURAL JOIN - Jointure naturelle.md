**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]

La clause `NATURAL JOIN` est utilisée en SQL pour effectuer une jointure entre deux tables en récupérant toutes les lignes qui ont des valeurs communes dans les colonnes partagées entre les deux tables. Elle prend la forme suivante :

```sql
SELECT * FROM table1 
NATURAL JOIN table2;
```

Voici comment utiliser la clause `NATURAL JOIN` :

1.  Sélectionnez les colonnes que vous souhaitez récupérer à l'aide de la clause `SELECT`. Vous pouvez utiliser l'asterisque `*` pour sélectionner toutes les colonnes.

2.  Utilisez la clause `FROM` pour spécifier les tables à joindre.

3.  Utilisez la clause `NATURAL JOIN` pour effectuer la jointure entre les tables.


Voici un exemple de requête avec la clause `NATURAL JOIN` :

```sql
SELECT u.nom, u.prenom, c.montant
FROM utilisateurs u 
NATURAL JOIN commandes c;
```

Cette requête récupère le nom et le prénom de tous les utilisateurs ayant passé une commande, ainsi que le montant de leurs commandes. Si un utilisateur n'a pas passé de commande ou si une commande n'a pas d'utilisateur associé, la ligne sera ignorée.

Il est important de noter que la clause `NATURAL JOIN` utilise automatiquement toutes les colonnes partagées entre les tables comme condition de jointure. Si les tables n'ont pas de colonnes en commun, la requête échouera. De plus, la clause `NATURAL JOIN` supprimera les colonnes en double des résultats de la requête, en ne conservant qu'une seule occurrence de chaque colonne