**Cours liés :**
- [[SELECT - Afficher des valeurs depuis une table]]
- [[DROP TABLE - Supprimer des tables]]
- [[TRUNCATE TABLE - Détruire une table]]

La requête `CREATE TABLE` est utilisée en SQL pour créer une nouvelle table dans une base de données. Elle prend la forme suivante :

```sql
CREATE TABLE nom_table (
  colonne1 type_donnee(taille) contrainte,
  colonne2 type_donnee(taille) contrainte,
  colonne3 type_donnee(taille) contrainte,
  ...
);
```

Voici comment utiliser la requête `CREATE TABLE` :

1.  Spécifiez le nom de la table à créer en utilisant la clause `TABLE`.
    
2.  Définissez les colonnes de la table en utilisant la syntaxe `colonne type_donnee(taille) contrainte`. Vous pouvez définir plusieurs colonnes en les séparant par une virgule.
    
3.  Utilisez les types de données appropriés pour chaque colonne en fonction du type de données que vous souhaitez stocker (par exemple, `NUMBER`, `VARCHAR2`, `DATE`, etc.). Vous pouvez également spécifier la taille des données pour certains types de données (par exemple, `VARCHAR2(255)`).
    
4.  Utilisez les contraintes pour définir les règles de contenu de chaque colonne. Les contraintes courantes incluent `NOT NULL` (ne peut pas être null), `UNIQUE` (doit être unique) et `PRIMARY KEY` (clé primaire). Vous pouvez également utiliser des contraintes de clé étrangère pour définir des relations entre les tables.
    

Voici quelques exemples de requêtes `CREATE TABLE` :

-   Créer une table avec une colonne unique et une colonne de clé primaire :

```sql
CREATE TABLE utilisateurs (
  id           NUMBER        NOT NULL AUTO_INCREMENT,
  email        VARCHAR2(255)          UNIQUE,
  PRIMARY KEY (id)
);
```

-   Créer une table avec une colonne de clé étrangère :

```sql
CREATE TABLE commandes (
  id             NUMBER       NOT NULL AUTO_INCREMENT,
  id_utilisateur NUMBER,
  montant        NUMBER,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
);
```

Il est important de noter que la requête `CREATE TABLE` échouera si le nom de la table ou de la colonne est déjà utilisé dans la base de données ou s'il y a une erreur dans la syntaxe de la requête. De plus, la requête `CREATE TABLE` ne créera pas la table si des valeurs nulles sont spécifiées pour des colonnes qui ne sont pas autorisées à contenir null.