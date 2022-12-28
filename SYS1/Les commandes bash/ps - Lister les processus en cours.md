
**Cours liés :**
- [[Un shell, c'est quoi]]

La commande `ps` est un utilitaire en ligne de commande qui permet d'afficher les informations sur les processus en cours d'exécution sur un système Linux. Cette commande est très utile pour surveiller les processus en cours d'exécution sur le système et pour trouver les processus qui utilisent des ressources système de manière anormale.

Voici comment utiliser la commande `ps` :

```bash
ps [options]
```

La commande `ps` ne prend pas d'arguments. Elle affiche les informations sur les processus en cours d'exécution sur le système.

Voici quelques options couramment utilisées avec la commande `ps` :

> [!info] Options
> -   `-a` : affiche les informations sur tous les processus, y compris ceux appartenant à d'autres utilisateurs.
> -   `-u` : affiche les informations sur les processus de l'utilisateur spécifié.
> -   `-e` : affiche les informations sur tous les processus, y compris ceux qui ne sont pas associés à un terminal.
> -   `-f` : affiche un format étendu des informations sur les processus, incluant le nom du shell et les arguments passés au processus.
> -   `-H` : affiche l'arborescence des processus, indiquant les relations de parenté entre les processus.

Voici un exemple d'utilisation de la commande `ps` pour afficher les informations sur tous les processus en cours d'exécution sur le système, y compris ceux qui ne sont pas associés à un terminal :

```bash
ps -ef
```

Voici un exemple de sortie de la commande `ps` :

```
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 Jan01 ?        00:00:01 /sbin/init
root         2     0  0 Jan01 ?        00:00:00 [kthreadd]
root         3     2  0 Jan01 ?        00:00:00 [ksoftirqd/0]
root         4     2  0 Jan01 ?        00:00:00 [kworker/0:0]
root         5     2  0 Jan01 ?        00:00:00 [kworker/0:0H]
root         6     2  0 Jan01 ?        00:00:00 [migration/0]
root         7     2  0 Jan01 ?        00:00:00 [watchdog/0]
root         8     2  0 Jan01 ?        00:00:00 [cpuhp/0]
root         9     2  0 Jan01 ?        00:00:00 [cpuhp/1]
root        10     2  0 Jan01 ?        00:00:00 [migration/1]
root        11     2  0 Jan01 ?        00:00:00 [ksoftirqd/1]
```

Dans cet exemple, `ps` affiche les informations sur chaque processus en cours d'exécution sur le système. Les colonnes affichées sont :

> [!help] Explication des noms de colonnes
> -   `UID` : l'identifiant de l'utilisateur propriétaire du processus.
> -   `PID` : l'identifiant du processus.
> -   `PPID` : l'identifiant du processus parent du processus.
> -   `C` : la charge CPU du processus.
> -   `STIME` : l'heure de démarrage du processus.
> -   `TTY` : le terminal associé au processus.
> -   `TIME` : le temps CPU cumulé par le processus.
> -   `CMD` : la commande exécutée par le processus.

La commande `ps` est une commande très utile pour surveiller les processus en cours d'exécution sur le système et pour trouver les processus qui utilisent des ressources système de manière anormale. Elle est souvent utilisée en combinaison avec d'autres commandes, comme `grep` ou `awk`, pour filtrer et traiter les informations sur les processus.

**Cours à voir :**
- [[kill - Arrêter un processus en cours]]
