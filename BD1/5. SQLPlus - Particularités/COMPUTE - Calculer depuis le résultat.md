La directive `COMPUTE` de SQL*Plus est utilisée pour calculer des statistiques sur les résultats d'une requête SQL. Elle permet de calculer des sommes, des moyennes, des comptes, des minimums et des maximums, et de les afficher dans un format de rapport. Il est possible d'utiliser cette directive avec toutes les commandes SQL qui renvoient des données, comme `SELECT`, `UPDATE`, et `DELETE`.

L'utilisation de la directive `COMPUTE` en entête d'un fichier de requête peut s'avérer très utile pour générer des rapports automatisés. Par exemple, on peut créer un fichier `.sql` contenant une requête pour sélectionner les données nécessaires, suivie d'une directive `COMPUTE` pour calculer les statistiques souhaitées. On peut ensuite exécuter ce fichier en utilisant SQL*Plus pour générer le rapport automatiquement.

Voici un exemple de fichier de requête qui utilise la directive `COMPUTE` pour calculer la somme, la moyenne et le compte des salaires par département d'une table `employees` :

```SQL
-- Reports.sql
COMPUTE SUM OF salary ON department_name BREAK ON department_name;
COMPUTE AVG OF salary ON department_name BREAK ON department_name;
COMPUTE COUNT OF salary ON department_name BREAK ON department_name;

SELECT department_name, last_name, salary FROM employees;
```

On peut alors exécuter ce fichier en utilisant SQL*Plus :

```SQL
SQL> @Reports.sql
```

La clause `BREAK` permet de grouper les résultats de la requête par une colonne spécifique, en l'occurrence le département ici, cela permet de regrouper les calculs pour chaque département séparemment. Cela permet également de séparer les calculs entre chaque groupe.

Il est possible de controler l'affichage des calculs en utilisant une commande `BREAK ON REPORT`. Cette commande va séparer les calculs de chaque groupe pour un affichage plus lisible.

```SQL
SQL> BREAK ON REPORT
SQL> @Reports.sql
```

Il est important de noter que cette utilisation de la directive `COMPUTE` en entête de fichier de requête n'est pas nécessairement la meilleure option pour tous les cas d'utilisation. Pour les cas où les calculs sont plus complexes ou pour des utilisations à grande échelle, il peut être préférable d'utiliser des outils de BI (Business Intelligence) dédiés pour créer des rapports automatisés.