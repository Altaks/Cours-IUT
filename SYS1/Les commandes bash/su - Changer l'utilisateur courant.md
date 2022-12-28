La commande `su` (switch user) est un outil qui permet de changer de l'identité de l'utilisateur actuellement connecté à un système Unix-like. Elle permet à un utilisateur de se connecter en tant que superutilisateur (root) ou en tant qu'un autre utilisateur du système.

Voici comment utiliser la commande `su` avec quelques exemples :

Pour se connecter en tant que superutilisateur (root), vous pouvez utiliser la syntaxe suivante :

```bash
su
```

Vous serez alors invité à entrer le mot de passe du superutilisateur (root). Une fois que vous avez entré le mot de passe correctement, vous serez connecté en tant que superutilisateur (root) et vous pourrez exécuter toutes les commandes du système avec les privilèges de superutilisateur.

Pour se connecter en tant qu'un autre utilisateur du système, vous pouvez utiliser la syntaxe suivante :

```bash
su -l username
```

Vous serez alors invité à entrer le mot de passe de l'utilisateur `username`. Une fois que vous avez entré le mot de passe correctement, vous serez connecté en tant que l'utilisateur `username` et vous pourrez exécuter toutes les commandes du système avec les privilèges de cet utilisateur.

Voici la suite des options disponibles pour la commande `su` :

-   `-c` : permet d'exécuter une commande en tant que l'utilisateur spécifié, puis de quitter immédiatement.
-   `-l` : permet de se connecter en tant que l'utilisateur spécifié et de charger son environnement, y compris son répertoire de travail et son fichier de configuration `.bashrc`.
-   `-m` : permet de conserver l'environnement actuel, y compris le répertoire de travail et le fichier de configuration `.bashrc`, lorsque vous vous connectez en tant que l'utilisateur spécifié.

Voici quelques exemples d'utilisation de ces options :

```bash
# Exécute la commande "ls -l" en tant que superutilisateur (root)
su -c "ls -l"

# Se connecte en tant que l'utilisateur "user" et charge son environnement
su -l user

# Se connecte en tant que l'utilisateur "user" et conserve l'environnement actuel
su -m user
```

Il est important de noter que la commande `su` nécessite de connaitre le mot de passe de l'utilisateur sur lequel vous souhaitez vous connecter