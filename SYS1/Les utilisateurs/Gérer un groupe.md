**Cours liés :**
- [[Un groupe, c'est quoi]]
- [[Un utilisateur, c'est quoi]]
- [[Gérer un utilisateur]]

La gestion des groupes sur un système d'exploitation Linux permet de regrouper des utilisateurs qui ont des intérêts ou des responsabilités communs et de leur donner un accès commun à certains fichiers et répertoires. Cela peut contribuer à améliorer la sécurité et la productivité du système en permettant de contrôler l'accès aux ressources de manière fine.

Voici quelques commandes et concepts importants à connaître pour gérer les groupes sur un système Linux :

## Créer et supprimer des groupes

Pour créer un nouveau groupe sur un système Linux, on peut utiliser la commande `groupadd`. Cette commande prend en argument le nom du groupe à créer.

Voici un exemple de création d'un nouveau groupe nommé `groupe1` :

```bash
sudo groupadd groupe1
```

Pour supprimer un groupe, on peut utiliser la commande `groupdel`. Cette commande prend en argument le nom du groupe à supprimer.

Voici quelques options couramment utilisées avec la commande `groupadd` :

> [!info] Options
> -   `-f` : permet de forcer la création du groupe même si un groupe du même nom existe déjà.
> -   `-g` : permet de spécifier un identifiant de groupe (GID) pour le groupe.
> -   `-o` : permet de créer un groupe avec un identifiant de groupe (GID) qui n'est pas encore utilisé par un autre groupe.

Voici un exemple de création d'un nouveau groupe nommé `groupe1` avec l'identifiant de groupe `1000` :

```bash
sudo groupadd -g 1000 groupe1
```

La commande `groupdel` permet de supprimer un groupe existant sur un système Linux. Elle prend en argument le nom du groupe à supprimer et peut être utilisée avec plusieurs options pour définir comment le groupe doit être supprimé.

Voici un exemple de suppression du groupe `groupe1` :

```bash
sudo groupdel groupe1
```

Il est important de noter que la suppression d'un groupe ne supprime pas les utilisateurs qui y appartiennent. Ces utilisateurs conservent leurs droits d'accès aux fichiers et répertoires auxquels ils avaient accès via ce groupe.

Voici quelques options couramment utilisées avec la commande `groupdel` :

> [!info] Options
> -   `-f` : permet de forcer la suppression du groupe même s'il y a des utilisateurs qui y appartiennent.
> -   `-r` : permet de supprimer également les utilisateurs qui appartiennent au groupe.

Voici un exemple de suppression du groupe `groupe1` et de tous les utilisateurs qui y appartiennent:

```bash
sudo groupdel -r groupe1
```

Il est important de noter que la suppression d'un groupe peut entraîner la perte de droits d'accès pour les utilisateurs qui y appartiennent, en particulier si ces utilisateurs n'appartiennent à aucun autre groupe. Il est recommandé de vérifier les utilisateurs qui appartiennent au groupe avant de le supprimer, et de déplacer ces utilisateurs dans un autre groupe si nécessaire.

## Ajouter et retirer des utilisateurs d'un groupe

Pour ajouter un utilisateur à un groupe existant, on peut utiliser la commande `usermod`. Cette commande prend en argument le nom de l'utilisateur et peut être utilisée avec l'option `-G` suivie de la liste des groupes auxquels l'utilisateur doit être ajouté.

Voici un exemple d'ajout de l'utilisateur `utilisateur1` au groupe `groupe1` :

```bash
sudo usermod -G groupe1 utilisateur1
```

Pour retirer un utilisateur d'un groupe, on peut utiliser la même commande `usermod` en spécifiant l'option `-G` suivie de la liste des groupes auxquels l'utilisateur ne doit pas être ajouté.

Voici un exemple de retrait de l'utilisateur `utilisateur1` du groupe `groupe1` :

```bash
sudo usermod -G "" utilisateur1
```

Il est important de noter qu'il est recommandé de ne pas supprimer un utilisateur d'un groupe s'il est le seul membre de ce groupe, car cela peut entraîner la perte de droits d'accès pour l'utilisateur. Il est recommandé de créer un nouveau groupe et de déplacer l'utilisateur dans ce nouveau groupe plutôt que de le retirer de son groupe actuel.