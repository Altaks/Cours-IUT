**Cours liés :**
- [[CREATE TABLE - Créer des tables]]

Une clé étrangère (ou "foreign key" en anglais) est une colonne ou un groupe de colonnes d'une table en base de données qui fait référence à une clé primaire d'une autre table. Elle permet de lier des données de différentes tables entre elles, en utilisant la clé primaire d'une table comme référence dans une autre table.

La clé étrangère est généralement définie lors de la création de la table, mais elle peut également être ajoutée ultérieurement. Elle doit avoir le même type de données que la clé primaire à laquelle elle fait référence, et ne peut contenir que des valeurs qui existent déjà dans la clé primaire.

Voici un exemple de définition d'une clé étrangère lors de la création d'une table :

```sql
CREATE TABLE commandes (
  id             NUMBER PRIMARY KEY,
  id_utilisateur NUMBER,
  montant        NUMBER,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
);
```

Dans cet exemple, la colonne `id_utilisateur` est définie comme clé étrangère de la table `commandes`, en référence à la clé primaire `id` de la table `utilisateurs`.

Les clés étrangères sont utilisées pour garantir l'intégrité référentielle des données dans la base de données. Elles empêchent la modification ou la suppression d'une valeur de clé primaire si elle est utilisée comme clé étrangère dans une autre table. Elles permettent également de naviguer facilement entre les différentes tables de la base de données grâce aux relations établies entre elles.