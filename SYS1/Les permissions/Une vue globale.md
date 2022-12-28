**Cours liés :**
- [[ls - Lister les fichiers]]

Sur un système d'exploitation Linux, chaque fichier et chaque répertoire appartient à un utilisateur et à un groupe. Les droits d'accès permettent de déterminer qui peut accéder aux fichiers et répertoires et de quelle manière.

Il existe trois types de droits d'accès sur un fichier ou un répertoire :

```ad-important
title: Les droits d'accès
1.  `lecture` (`r`) - permet de lire le contenu d'un fichier ou de lister les fichiers d'un répertoire
2.  `écriture` (`w`) - permet de modifier le contenu d'un fichier ou de créer/supprimer des fichiers dans un répertoire
3.  `exécution` (`x`) - permet d'exécuter un fichier comme un programme
```

Les droits d'accès sont attribués aux trois types de parties suivantes :

```ad-abstract
title: De qui parle t'on ? 
1.  `propriétaire` - l'utilisateur qui possède le fichier ou le répertoire
2.  `groupe` - l'ensemble des utilisateurs appartenant au même groupe que le propriétaire du fichier ou du répertoire
3.  `tous` - tous les utilisateurs du système
```

Il est possible de définir différents niveaux de droits d'accès pour chaque type de parties. Par exemple, on peut donner au propriétaire les droits de lecture et d'écriture, au groupe les droits de lecture et aux autres utilisateurs aucun droit.

Pour afficher les droits d'accès d'un fichier ou d'un répertoire, on peut utiliser la commande `ls -l`. Pour modifier les droits d'accès, on peut utiliser la commande `chmod`.

Il est important de comprendre et de gérer correctement les droits d'accès sur un système Linux afin de contrôler l'accès aux fichiers et aux répertoires et de garantir la sécurité du système.

**Cours à voir :**
- [[La notation alphabétique]]
- [[La notation octale]]