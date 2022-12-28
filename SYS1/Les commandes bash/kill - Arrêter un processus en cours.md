**Cours liés :**
- [[ps - Lister les processus en cours]]

La commande `kill` est un utilitaire en ligne de commande qui permet de terminer un processus sur un système Linux. Cette commande est très utile pour terminer des processus qui ne répondent plus, qui sont bloqués ou qui utilisent des ressources système de manière anormale.

Voici comment utiliser la commande `kill` :

```bash
kill [options] pid
```

La commande `kill` prend en argument l'identifiant du processus (`pid`) à terminer.

Voici quelques options couramment utilisées avec la commande `kill` :

> [!info] Options
> -   `-s signal` : envoie le signal spécifié au processus. Par défaut, le signal `SIGTERM` est envoyé, qui demande au processus de se terminer de manière ordonnée.
> -   `-l` : affiche la liste des signaux disponibles.
> -   `-L` : affiche la liste des signaux disponibles, avec leur nom et leur numéro.

Voici un exemple d'utilisation de la commande `kill` pour terminer le processus avec l'identifiant `1234` :

```bash
kill 1234
```

Il est important de noter que la commande `kill` ne garantit pas la terminaison immédiate du processus. Certaines applications peuvent ignorer le signal de terminaison ou prendre du temps pour terminer proprement leurs tâches en cours. Dans ce cas, il est possible d'utiliser le signal `SIGKILL` pour forcer la terminaison immédiate du processus, mais cela peut entraîner des données corrompues ou des fichiers inutilisables.

Voici une liste des signaux couramment utilisés avec la commande `kill` :

> [!important] Signaux
> -   `SIGABRT` : envoie un signal d'abandon de la part de l'application. Ce signal est généralement envoyé lorsqu'une erreur grave se produit dans l'application et qu'elle ne peut pas continuer à fonctionner correctement.
> -   `SIGALRM` : envoie un signal d'alarme. Ce signal est utilisé par les applications pour mettre en place un temporisateur et pour être notifiées lorsque le temps est écoulé.
> -   `SIGBUS` : envoie un signal de bus de données incorrect. Ce signal est généralement envoyé lorsqu'une erreur se produit dans l'accès aux données mémoire de l'application.
> -   `SIGCHLD` : envoie un signal de fin de processus fils. Ce signal est envoyé par le système au processus parent lorsqu'un de ses processus fils se termine.
> -   `SIGCONT` : envoie un signal de continuation. Ce signal est utilisé pour reprendre l'exécution d'un processus qui a été mis en pause par un signal `SIGSTOP` ou `SIGTSTP`.
> -   `SIGFPE` : envoie un signal d'erreur de virgule flottante. Ce signal est généralement envoyé lorsqu'une erreur se produit dans le traitement des données à virgule flottante par l'application.
> -   `SIGHUP` : envoie un signal de fin de session. Ce signal est envoyé au processus lorsque la session de terminal dans laquelle il s'exécute se termine.
> -   `SIGILL` : envoie un signal d'instruction illégale. Ce signal est généralement envoyé lorsqu'une instruction exécutée par l'application est illégale ou non reconnue par le système.
> -   `SIGINT` : envoie un signal d'interruption. Ce signal est envoyé au processus lorsque l'utilisateur appuie sur la touche `CTRL-C` dans le terminal.
> -   `SIGKILL` : envoie un signal de terminaison forcée. Ce signal est utilisé pour forcer la terminaison immédiate d'un processus, même s'il ignore les autres signaux de terminaison. Attention, cela peut entraîner des données corrompues ou des fichiers inutilisables.
> -   `SIGPIPE` : envoie un signal de pipe brisé. Ce signal est envoyé lorsqu'un processus essaie d'écrire dans un pipe qui a été fermé par l'autre extrémité.
> -   `SIGQUIT` : envoie un signal de terminaison et de création de rapport de débogage. Ce signal est envoyé au processus lorsque l'utilisateur appuie sur la touche `CTRL-\` dans le terminal.
> -   `SIGSEGV` : envoie un signal de segmentation violée. Ce signal est généralement envoyé lorsqu'une erreur se produit dans l'accès à une zone mémoire qui n'est pas autorisée pour l'application.
> -   `SIGSTOP` : envoie un signal de pause. Ce signal est utilisé pour mettre en pause l'exécution d'un processus jusqu'à ce qu'un signal `SIGCONT` soit envoyé.
> -   `SIGTERM` : envoie un signal de terminaison. Ce signal est utilisé pour demander au processus de se terminer de manière ordonnée.
> -   `SIGTSTP` : envoie un signal de pause de terminal. Ce signal est envoyé au processus lorsque l'utilisateur appuie sur la touche `CTRL-Z` dans le terminal.
> -   `SIGTTIN` : envoie un signal de lecture de terminal en arrière-plan. Ce signal est envoyé au processus lorsqu'un processus en arrière-plan essaie de lire depuis le terminal.
> -   `SIGTTOU` : envoie un signal d'écriture de terminal en arrière-plan. Ce signal est envoyé au processus lorsqu'un processus en arrière-plan essaie d'écrire sur le terminal.
> -   `SIGUSR1` et `SIGUSR2` : envoie des signaux d'utilisateur personnalisables. Ces signaux peuvent être utilisés par les applications pour envoyer des notifications ou des demandes de traitement spéciales.

Il est important de noter que chaque signal a un effet précis sur le processus cible, et que certains signaux peuvent être ignorés ou gérés de manière différente selon l'application. Il est recommandé de consulter la documentation de l'application pour connaître la manière dont elle gère les signaux.

La commande `kill` est une commande très utile pour terminer des processus qui ne répondent plus ou qui utilisent des ressources système de manière anormale. Elle est souvent utilisée en combinaison avec d'autres commandes, comme `ps` ou `top`, pour trouver l'identifiant du processus à terminer.

