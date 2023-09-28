> Le [TDD](https://fr.wikipedia.org/wiki/Test_driven_development) sauvera l'humanité, ou au moins les devs.

---

### Le Design de code, pourquoi s'embêter à faire un code propre si ça marche ?

> "L'essentiel c'est que ça fonctionne" 

Doit être la phrase responsable de milliers d'heures perdues à comprendre du code illisible/spaghetti ou simplement complexe dans le meilleur des cas.

La qualité logicielle est la notion qui attend de votre code :
- Une **capacité fonctionnelle** (donc oui ça marche c'est bien Youhou !)
- **Ré-utilisabilité** (Doit pouvoir gérer tous les cas sans broncher)
- **Rendement et efficacité dans l'avenir** (Il doit prendre en compte des possibles changements futurs et ne pas se reposer sur l'environnement de travail actuel)
- **Fiabilité dans l'avenir** : Il ne doit pas devenir obsolète rapidement.
- **Maintenabilité** : Un autre développeur doit pouvoir modifier votre code et le maintenir sans devoir passer trois jours à essayer de le comprendre (les commentaires bon sang !)
- **Portabilité dans l'avenir** : Votre code doit pouvoir être utilisable dans le futur et ce dans d'autres situations que celle pour laquelle vous l'avez codé. Il doit supporter tous les cas. 

---

### Les logiciels évoluent, toujours. Non mais vraiment

- Pour chaque ajout d'une fonctionnalité
- Une correction de bug mineur
- Un ajout de langage
- Une mise à jour système
- Un patch de sécurité

C'est pourquoi un **bon design** sert à **renforcer la capacité à subir ces évolutions** sans générer de régression en capacités. (renforcer et non pas garantir)

---

### Détecter les anomalies

- Toute modification/évolution du code peut engendrer des anomalies, des bugs
- Il faut donc détecter au plus vite ces bugs
- Le seul moyen de le faire est de tester tous les cas d'utilisation de notre programme pour s'assurer de son fonctionnement
- A chaque modification il faut tester l'intégralité des fonctionnalités du logiciel, cependant
	- Tester manuellement ces fonctionnalités serait **très cher, très long et peu fiable**
	- **C'est pourquoi on automatise ces tests**.

---

### Les types de tests automatisés

Il existe plusieurs types de tests d'application :

- Les tests de montée en charge (ex: connecter 300 faux joueurs à un serveur de jeu pour verifier la connexion, la fiabilité et le lag serveur)
- Les tests d'intrusion (Vérification de potentielles failles de sécurité)
- Les tests fonctionnels (Vérifier que les fonctionnalités marchent)
- Les tests unitaires
- ...

Tous ces types de tests se réduisent à deux catégories : 

- Les tests qui s'exécutent rapidement (en quelques millisecondes)
- Les tests qui sont lennnnnnnnnnts ... (tout ce qui est au dessus de la seconde)

---
### On récapitule

- Tout code doit évoluer
- Toute évolution peut introduire des bugs
- Il n'est pas possible de détecter les bugs sans tests

**Il faut écrire des tests**

---
### Mais c'est quoi un test automatisé

C'est du code. Oui oui, du code qui va tester du code. Vous avez bien lu. Mais attention, c'est un code qui :
- Dans un contexte très précis
- Exécute un autre code
- Et vérifie l'exactitude du résultat (avec une précision maximale, au bit près s'il le faut)

> "Mais alors, si on teste du code avec du code, est ce que les tests peuvent contenir des bugs ?"

Bien sûr, c'est pour ça que les tests sont souvent faits par une autre personne que le développeur qui créé l'application. C'est pour éviter de se renfermer sur les cas d'utilisations principaux et permettre de tout tester. *De plus ça permet de parler a des gens, c'est bien de parler à ses collègues parfois non ?*

---

### Comment on écrit un test du coup ? #Komankonfé

Dans sa plus simple expression, un test est une **[assertion](https://fr.wikipedia.org/wiki/Assert.h)** : 

```c
assert (2 == 1+1)
```

```
assert <bool>
```

Un test est généralement composé de 3 parties, c'est qu'on appelle le **AAA** : 

- **Arrange** : On prépare les éléments dont on a besoin, les variables qui seront utilisées dans nos tests
- **Act** : On fait une action
- **Assert** : On vérifie le résultat

Pour **tester de manière automatique**, tous les langages proposent des **frameworks de test** : 
Les frameworks apportent en plus des assertions "élaborées" :
- `assertEqual`
- `assertContains`
- `assertNotNull`
- etc..

En PHP, on a PHPUnit, Codeception, Storyplayer, SeleniumHG, Behat, Atoum, SimpleTest, PhpSpec, Peridot, Kahlan, ...
En C++ il y en a plusieurs tels que Google Test, Doctest, Catch2, Embunit, CppUtest, ...
En Java il y a JUnit, TestNG, ...
En JavaScript : MochaJS, Jest, Jasmine, Karma, Puppeteer (NodeJS), Cypress, Playwright (NodeJS), Selenium, ...

*Il y en a dans quasiment tous les langages, même en MATLAB c'est pour vous dire... [Regardez par vous même](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks)* 

### Et sinon concrètement je fais quoi ? 

Mettons ce code sous test : 

```php
namespace App;  
  
class NombreEntierRomain  
{  
    private static array $conversion = [  
        1000 => 'M', 900 => 'CM',  
        500 => 'D' , 400 => 'CD',  
        100 => 'C' , 90 => 'XC',  
        50 => 'L'  , 40 => 'XL',  
        10 => 'X'  , 9 => 'IX',  
        5 => 'V'   , 4 => 'IV',  
        1 => 'I'  
    ];  
  
    public static function convertir($to_convert) : string {  
        $result = "";  
        foreach (self::$conversion as $as_number => $as_text){  
            while($to_convert >= $as_number){  
                $result .= $as_text;  
                $to_convert -= $as_number;  
            }  
        }  
        return $result;  
    }  
}
```

On doit tester tous les types de conversions possibles, y compris les conversions dans les cas ou on a des exceptions.

**Pour tester ce code, en le connaissant déjà :**

- Il a fallu décortiquer le code (c'est pénible)
- On ne couvre pas tout le code (c'est dangereux)
- On peut ne pas les écrire (c'est interdit en TDD)

=> Il faut se mettre en position d'**être forcé à écrire des tests.**
=> **Faisons du TDD**

### Jouons ensemble, 3 règles simples

=> Il est **interdit** d'introduire du code dans l'application si aucun test n'échoue (ça sert à rien)
=> On n'écrit pas plus de code que celui nécessaire **pour faire échouer le test** (faire un bon test)
=> On n'écrit pas plus de code que celui nécessaire **pour faire passer les tests** (même chose)

Le processus se fait en 3 étapes : 

- $\textcolor{red}{\text{RED}}$ : Avant tout, **écrire les tests du programme** avant de le concevoir, tous les tests doivent échouer une fois écris.
- $\textcolor{lime}{\text{GREEN}}$ : Le plus vite possible, **développer le vrai code** pour que les tests passent
- $\textcolor{aqua}{\text{BLUE/REFACTOR}}$ : Les tests passent, on **nettoie** le code, on **renomme les variables correctement**, on **commente** et on **documente** comme des grands.

Une fois ce processus terminé, on recommence pour une autre fonctionnalité.
La durée d'**un cycle de TDD est de l'ordre de la minute pour des fonctions simples**.

>[!attention] Quelques points d'attention : 
>- Tous les éléments du cycle sont importants (refactor !)
>- Le refactor est la partie "implémentation" intelligente, pas le passage du red au green
>- Avoir de quoi noter à proximité
>- Durée du cycle : ne pas dépasser quelques minutes
>- le code de test est aussi important que le code de prod : même qualité, même entretien
