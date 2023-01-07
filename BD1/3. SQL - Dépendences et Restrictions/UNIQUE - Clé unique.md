**Cours liés :**
- [[CREATE TABLE - Créer des tables]]

Une clé unique (ou "unique key" en anglais) est une colonne ou un groupe de colonnes d'une table en base de données qui est utilisée pour s'assurer qu'il n'y a pas de valeurs dupliquées dans la table. En d'autres termes, chaque ligne de la table doit avoir une valeur unique pour la clé unique.

La clé unique peut être définie lors de la création de la table, mais elle peut également être ajoutée ultérieurement. Elle peut être de n'importe quel type de données (entier, chaîne de caractères, etc.), mais elle doit être unique et ne doit pas être modifiable (à moins de supprimer et de recréer la ligne).

Voici un exemple de définition d'une clé unique lors de la création d'une table :

```sql
CREATE TABLE utilisateurs (
  id      NUMBER        PRIMARY KEY,
  email   VARCHAR2(255) UNIQUE,
  nom     VARCHAR2(255),
  prenom  VARCHAR2(255),
  age     NUMBER
);
```

Dans cet exemple, la colonne `email` est définie comme clé unique de la table `utilisateurs`.

La clé unique est souvent utilisée pour s'assurer que certaines données sont uniques dans la table, comme par exemple un numéro de téléphone ou un nom d'utilisateur. Elle est également utilisée pour éviter les erreurs lors de l'insertion de données dans la table, en empêchant l'ajout de lignes avec des valeurs déjà existantes.

Il est important de noter que la clé unique est différente de la clé primaire. La clé primaire est utilisée pour identifier de manière unique chaque ligne de la table, tandis que la clé unique est utilisée pour s'assurer qu'il n'y a pas de valeurs dupliquées dans la table. La clé primaire peut être utilisée comme clé étrangère dans une autre table, tandis que la clé unique ne peut pas être utilisée de cette manière.

En résumé, une clé unique est une colonne ou un groupe de colonnes d'une table en base de données qui est utilisée pour s'assurer qu'il n'y a pas de valeurs dupliquées dans la table. Elle peut être définie lors de la création de la table, et peut être de n'importe quel type de données. La clé unique est souvent utilisée pour s'assurer que certaines données sont uniques dans la table, et est également utilisée pour éviter les erreurs lors de l'insertion de données dans la table. Elle est différente de la clé primaire, qui est utilisée pour identifier de manière unique chaque ligne de la table et peut être utilisée comme clé étrangère dans une autre table.