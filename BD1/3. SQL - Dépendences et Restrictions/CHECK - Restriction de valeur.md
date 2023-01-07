**Cours liés :**
- [[CREATE TABLE - Créer des tables]]

Dans OracleSQL, la clause `CHECK` est utilisée de la même manière qu'en SQL standard, pour vérifier que les valeurs d'une colonne respectent certaines conditions. Elle permet de définir des règles de validation pour les données insérées ou modifiées dans la table.

Voici comment utiliser la clause `CHECK` dans une requête OracleSQL :

```sql
CREATE TABLE table (
  colonne1 TYPE
  colonne2 TYPE
  ...
  CONSTRAINT CHK_IDCHECK CHECK (condition),
  CONSTRAINT CHK_IDCHECK CHECK (condition),
);
```

Voici un exemple de définition de la clause `CHECK` lors de la création d'une table dans OracleSQL :

```sql
CREATE TABLE utilisateurs (
  id       NUMBER        PRIMARY KEY,
  nom      VARCHAR2(255)
  prenom   VARCHAR2(255) 
  age      NUMBER        
  CONSTRAINT CHK_NOM_VIDE    CHECK (nom != ''),
  CONSTRAINT CHK_PRENOM_VIDE CHECK (prenom != ''),
  CONSTRAINT CHK_AGE_VALIDE  CHECK (age > 0)
);
```

Dans cet exemple, la clause `CHECK` est utilisée pour vérifier que les colonnes `nom` et `prenom` ne sont pas vides, et que la colonne `age` est supérieure à 0.

Il est important de noter que la clause `CHECK` peut être utilisée uniquement dans la définition d'une colonne, et non dans une clause `WHERE` ou une clause `HAVING`. De plus, elle ne peut pas être utilisée pour vérifier la validité d'une clé étrangère.

En résumé, dans OracleSQL, la clause `CHECK` est utilisée de la même manière qu'en SQL standard, pour vérifier que les valeurs d'une colonne respectent certaines conditions. Elle permet de définir des règles de validation pour les données insérées ou modifiées dans la table, mais ne peut pas être utilisée dans une clause `WHERE` ou une clause `HAVING`, et ne peut pas être utilisée pour vérifier la validité d'une clé étrangère.