La directive `CASE` en SQL est utilisée pour effectuer des opérations conditionnelles dans les requêtes SQL. Il permet de spécifier des conditions qui sont vérifiées pour chaque ligne d'une table, et d'exécuter des actions différentes en fonction de ces conditions. Il y a deux types de directive CASE : la directive `CASE` simple et la directive `CASE` étendue.

La directive `CASE` simple est utilisée pour effectuer une opération conditionnelle basée sur une expression unique. Voici un exemple d'utilisation de la directive `CASE` simple pour afficher un message différent en fonction de l'âge d'un employé dans une table `employees` :

```SQL
SELECT last_name, age,
       CASE
           WHEN age < 25 THEN 'Young'
           WHEN age BETWEEN 25 AND 35 THEN 'Middle-aged'
           ELSE 'Senior'
       END as age_group
FROM employees;
```

La directive `CASE` étendue est utilisée pour effectuer une opération conditionnelle basée sur une expression de recherche. Il permet de comparer des valeurs de colonnes dans une table. voici un exemple d'utilisation de la directive `CASE` étendue pour calculer un salaire en fonction du poste d'un employé dans une table `employees`:

```SQL
SELECT last_name, job_id, salary,
       CASE job_id
           WHEN 'AD_PRES' THEN salary*2
           WHEN 'AD_VP' THEN salary*1.5
           ELSE salary
       END as new_salary
FROM employees;
```

Il est possible de combiner les deux directives de cas, avec la directive `CASE` simple dans la clause `SELECT` et la directive `CASE` étendue dans une clause `WHERE` par exemple :

```SQL
SELECT last_name, age, job_id,
       CASE
           WHEN age < 25 THEN 'Young'
           WHEN age BETWEEN 25 AND 35 THEN 'Middle-aged'
           ELSE 'Senior'
       END as age_group
FROM employees
WHERE job_id = (CASE age_group
                   WHEN 'Young' THEN 'SA_REP'
                   WHEN 'Middle-aged' THEN 'AD_ASST'
                   ELSE 'AD_VP'
               END);
```

Il est également possible de combiner `CASE` avec d'autres fonctions SQL pour des calculs plus complexes ou pour des utilisations plus avancées.

Il est important de noter que la plupart des bases de données supportent des alternatives plus modernes et plus expressives à la directive `CASE`, comme les fonctions `IF()` et `IIF()` qui sont plus lisibles et plus facile à maintenir. Il est donc important de vérifier les fonctionnalités de sa base de données avant de choisir une méthode spécifique.