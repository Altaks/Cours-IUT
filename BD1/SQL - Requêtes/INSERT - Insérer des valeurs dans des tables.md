**Cours liés :**
- [[DELETE - Supprimer le contenu des tables]]
- [[UPDATE - Mettre a jour des valeurs]]

La requête `INSERT` est utilisée en SQL pour ajouter de nouvelles lignes à une table de base de données. Elle prend la forme suivante :

```sql
INSERT INTO nom_table (colonne1, colonne2, colonne3) 
VALUES (valeur1, valeur2, valeur3);
```

Voici comment utiliser la requête `INSERT` :

1.  Spécifiez le nom de la table où vous souhaitez ajouter de nouvelles lignes en utilisant la clause `INTO`.

2.  Spécifiez la liste des colonnes où vous souhaitez ajouter de nouvelles valeurs en utilisant la clause `(colonne1, colonne2, colonne3)`. Vous pouvez omettre cette clause si vous souhaitez ajouter des valeurs à toutes les colonnes de la table.

3.  Spécifiez les valeurs à ajouter en utilisant la clause `VALUES (valeur1, valeur2, valeur3)`. Assurez-vous que le nombre de valeurs correspond au nombre de colonnes spécifiées.


Voici quelques exemples de requêtes `INSERT` :

-   Ajouter une nouvelle ligne avec des valeurs pour toutes les colonnes :

```sql
INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe) 
VALUES ('Dupont', 'Jean', 'jean.dupont@example.com', 'motdepasse');
```

-   Ajouter une nouvelle ligne avec des valeurs pour certaines colonnes uniquement :

```sql
INSERT INTO utilisateurs (nom, prenom) VALUES ('Dupont', 'Jean');
```

Il est important de noter que la requête `INSERT` n'ajoutera pas de nouvelles lignes si des valeurs nulles sont spécifiées pour des colonnes qui ne sont pas autorisées à contenir null. De plus, si la table possède une contrainte d'unicité, la requête `INSERT` échouera si une ligne avec les mêmes valeurs pour les colonnes uniques existe déjà.