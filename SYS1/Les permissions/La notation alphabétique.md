**Cours liés :**
- [[ls - Lister les fichiers]]
- [[Une vue globale]]

La commande `ls -l` permet de lister les fichiers et répertoires d'un répertoire et de afficher leurs attributs, y compris les droits d'accès.

Les droits d'accès sont affichés sous forme de neuf caractères, chacun correspondant à un type de droit pour un type de parties (propriétaire, groupe et tous). 

> [!info] La notation alphabétique
> Les caractères utilisés sont :
> - `r` pour la lecture (Ouvrir le fichier ou du dossier)
> - `w` pour l'écriture  (Changer le contenu du fichier ou du dossier)
> - `x` pour l'exécution (Executer le fichier)

Si un type de droit n'est pas accordé, le caractère correspondant est remplacé par un `-`.

Voici un exemple de sortie de la commande `ls -l` :

```
-rw-rw-r-- 1 utilisateur groupe  856 janv.  3 12:34 fichier.txt
drwxrwxr-x 2 utilisateur groupe 4096 janv.  3 12:34 répertoire
```

Dans cet exemple, le fichier `fichier.txt` est en lecture et écriture pour le propriétaire et le groupe, et en lecture seulement pour les autres utilisateurs. Le répertoire `répertoire` est en lecture, écriture et exécution pour le propriétaire et le groupe, et en lecture et exécution pour les autres utilisateurs.

Il est important de comprendre cette notation pour pouvoir interpréter correctement les droits d'accès affichés par la commande `ls -l` et pour savoir comment utiliser la commande `chmod` pour modifier les droits d'accès.

## Il existe des notations particulières 

| Caractère | Description                                                          |
|:---------:| -------------------------------------------------------------------- |
|     r     | Permission de lire le fichier                                        |
|     w     | Permission d'écrire dans le fichier                                  |
|     x     | Permission d'exécuter le fichier                                     |
|     a     | Il s'agit d'un fichier d'archive (Le fichier n'a pas été sauvegardé) |
|     c     | Il s'agit d'un fichier compressé                                     |
|     s     | Il s'agit d'un fichier système                                       |
|     h     | Il s'agit d'un fichier caché                                         |
|     t     | Il s'agit d'un fichier temporaire                                    |


