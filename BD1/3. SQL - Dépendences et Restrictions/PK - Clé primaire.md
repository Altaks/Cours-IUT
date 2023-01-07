**Cours liés :**
- [[CREATE TABLE - Créer des tables]]

Une clé primaire (ou "primary key" en anglais) est une colonne ou un groupe de colonnes d'une table en base de données qui est utilisée pour identifier de manière unique chaque ligne de la table. En d'autres termes, chaque ligne de la table doit avoir une valeur différente pour la clé primaire.

La clé primaire est généralement définie lors de la création de la table, mais elle peut également être ajoutée ultérieurement. Elle peut être de n'importe quel type de données (entier, chaîne de caractères, etc.), mais elle doit être unique et ne doit pas être modifiable (à moins de supprimer et de recréer la ligne).

Voici un exemple de définition d'une clé primaire lors de la création d'une table :

```sql
CREATE TABLE utilisateurs (
  id         NUMBER        PRIMARY KEY,
  nom        VARCHAR2(255),
  prenom     VARCHAR2(255),
  age        NUMBER
);
```

Dans cet exemple, la colonne `id` est définie comme clé primaire de la table `utilisateurs`.

La clé primaire est souvent utilisée comme référence dans d'autres tables de la base de données, grâce à ce qu'on appelle des clés étrangères (ou "foreign keys"). Les clés étrangères permettent de lier des données de différentes tables entre elles, en utilisant la clé primaire d'une table comme référence dans une autre table.

En résumé, la clé primaire est une colonne ou un groupe de colonnes utilisée pour identifier de manière unique chaque ligne d'une table en base de données. Elle est souvent utilisée comme référence dans d'autres tables grâce à des clés étrangères.