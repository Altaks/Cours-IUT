La directive `COLUMN` de SQLPlus est utilisée pour définir le format d'affichage des colonnes dans les résultats d'une requête SQL. Elle permet de spécifier le nom d'affichage, le format de données, et la taille d'une colonne. Cela peut être utile pour améliorer la lisibilité et la présentation des résultats d'une requête, notamment lorsque les données sont destinées à être utilisées dans des rapports ou pour d'autres fins de présentation.

La syntaxe générale pour utiliser la directive `COLUMN` est la suivante:

```SQL
COLUMN column_name [HEADING 'heading_name'] [FORMAT format_string] [NEW_VALUE new_variable] [FOR varchar2_col_name]
```

Voici un exemple d'utilisation de la directive `COLUMN` pour définir un format d'affichage pour les résultats d'une requête `SELECT` :

```SQL
COLUMN last_name HEADING 'Last Name' FORMAT A20
COLUMN salary HEADING 'Salary' FORMAT $99,999.99
SELECT last_name, salary FROM employees;
```

Cela permet de définir un format d'affichage pour les colonnes `last_name` et `salary`.

-   la colonne `last_name` sera affiché sous le titre "Last Name" avec un format "A20", cela signifie que le champ sera aligné à gauche et aura une taille maximale de 20 caractères.
-   la colonne `salary` sera affiché sous le titre "Salary" avec un format "$99,999.99", cela signifie que le champ sera affiché sous forme de monnaie.

Il est également possible de définir un format d'affichage pour les résultats de calculs utilisant la directive `COMPUTE` en utilisant la clause `COLUMN`. Voici un exemple pour calculer la somme, la moyenne et le compte des salaires par département d'une table `employees` avec un format d'affichage :

```SQL
-- Reports.sql
COMPUTE SUM OF salary ON department_name COLUMN department_name HEADING 'Department'
COMPUTE SUM OF salary ON department_name COLUMN salary HEADING 'Total Salary' FORMAT $99,999.99
COMPUTE AVG OF salary ON department_name COLUMN salary HEADING 'Average Salary' FORMAT $99,999.99
COMPUTE COUNT OF salary ON department_name COLUMN salary HEADING 'Employee Count'
BREAK ON department_name;
```

Il est important de noter que cette utilisation de la directive `COLUMN` en entête de fichier de requête n'est pas nécessairement la meilleure option pour tous les cas d'utilisation. Pour des cas où les calculs sont plus complexes ou pour des utilisations à grande échelle, il peut être préférable d'utiliser des outils de BI (Business Intelligence) dédiés pour créer des rapports automatisés avec un format d'affichage personnalisé. De plus, cette méthode de définition de format d'affichage est spécifique à SQLPlus et peut ne pas fonctionner correctement ou ne pas être supportée par d'autres outils ou systèmes de gestion de bases de données. Il est donc important de vérifier les fonctionnalités de votre système avant d'utiliser cette méthode pour générer des rapports automatisés.