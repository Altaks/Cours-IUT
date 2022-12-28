La gestion des utilisateurs sur un système d'exploitation Linux consiste à créer, modifier et supprimer les comptes utilisateur et à gérer les groupes auxquels ils appartiennent. Cela permet de contrôler l'accès aux ressources du système et de garantir la sécurité du système.

Voici quelques commandes et concepts importants à connaître pour gérer les utilisateurs sur un système Linux :

## Créer et supprimer des utilisateurs

Pour créer un nouvel utilisateur sur un système Linux, on peut utiliser la commande `useradd`. Cette commande prend en argument le nom de l'utilisateur et peut être utilisée avec plusieurs options pour définir les détails du compte, tels que le groupe principal, le répertoire home et le shell par défaut.

Voici un exemple de création d'un nouvel utilisateur nommé `utilisateur1` :

```bash
sudo useradd utilisateur1
```

Pour supprimer un utilisateur, on peut utiliser la commande `userdel`. Cette commande prend en argument le nom de l'utilisateur et peut être utilisée avec l'option `-r` pour supprimer également le répertoire home de l'utilisateur.

```ad-note
title: Arguments
Voici quelques options couramment utilisées avec la commande `useradd` :

-   `-c` : permet de spécifier le commentaire associé au compte de l'utilisateur.
-   `-d` : permet de spécifier le répertoire home de l'utilisateur.
-   `-g` : permet de spécifier le groupe principal de l'utilisateur.
-   `-G` : permet de spécifier les groupes supplémentaires auxquels l'utilisateur appartient.
-   `-m` : permet de créer le répertoire home de l'utilisateur s'il n'existe pas.
-   `-s` : permet de spécifier le shell par défaut de l'utilisateur.
```

Voici un exemple de création d'un nouvel utilisateur nommé `utilisateur1` avec le répertoire home `/home/utilisateur1`, le groupe principal `groupe1` et le shell `bash` :

```bash
sudo useradd -c "Utilisateur 1" -d /home/utilisateur1 -g groupe1 -m -s /bin/bash utilisateur1
```

Voici un exemple de suppression de l'utilisateur `utilisateur1` et de son répertoire home :

```bash
sudo userdel -r utilisateur1
```

Voici quelques options couramment utilisées avec la commande `userdel` :

```ad-note
title: Arguments
-   `-f` : permet de forcer la suppression du compte même si l'utilisateur est connecté au système.
-   `-r` : permet de supprimer également le répertoire home de l'utilisateur et tout son contenu.
```

## Modifier les détails d'un utilisateur

Pour modifier les détails d'un utilisateur, on peut utiliser la commande `usermod`. Cette commande prend en argument le nom de l'utilisateur et peut être utilisée avec plusieurs options pour définir les nouvelles valeurs pour les différents paramètres du compte, tels que le groupe principal, le répertoire home et le shell par défaut.

Voici un exemple de modification du groupe principal de l'utilisateur `utilisateur1` pour qu'il appartienne au groupe `groupe1` :

```bash
sudo usermod -g groupe1 utilisateur1
```

```ad-note
title: Arguments
Voici quelques options couramment utilisées avec la commande `usermod` :

-   `-c` : permet de modifier le commentaire associé au compte de l'utilisateur.
-   `-d` : permet de modifier le répertoire home de l'utilisateur.
-   `-g` : permet de modifier le groupe principal de l'utilisateur.
-   `-G` : permet de modifier les groupes supplémentaires auxquels l'utilisateur appartient.
-   `-L` : permet de verrouiller le compte de l'utilisateur en empêchant toute authentification.
-   `-s` : permet de modifier le shell par défaut de l'utilisateur.
-   `-U` : permet de déverrouiller le compte de l'utilisateur en autorisant à nouveau l'authentification.
```

Voici un exemple de modification du commentaire du compte de l'utilisateur `utilisateur1` et du groupe principal de celui-ci :

```bash
sudo usermod -c "Nouveau commentaire" -g groupe2 utilisateur1
```
