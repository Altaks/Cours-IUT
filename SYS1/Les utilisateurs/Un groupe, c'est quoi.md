**Cours liés :**
- [[ls - Lister les fichiers]]
- [[chmod - Changer les permissions d'un fichier, dossier]]
- [[chown - Changer le propriétaire d'un fichier, dossier]]
- [[Un utilisateur, c'est quoi]]

Sur un système d'exploitation, un groupe est un ensemble d'utilisateurs qui partagent un ensemble de droits d'accès communs. Un utilisateur peut appartenir à plusieurs groupes et chaque groupe peut contenir plusieurs utilisateurs.

Les groupes sont généralement utilisés pour regrouper des utilisateurs qui ont des intérêts ou des responsabilités communs et pour leur donner un accès commun à certains fichiers et répertoires. Par exemple, on peut créer un groupe pour les membres d'un projet et donner à ce groupe l'accès en lecture et écriture à un répertoire contenant les fichiers du projet.

Sur un système Linux, chaque fichier et chaque répertoire appartient à un utilisateur et à un groupe. Les droits d'accès permettent de déterminer qui peut accéder aux fichiers et répertoires et de quelle manière. Le propriétaire d'un fichier ou d'un répertoire peut définir les droits d'accès pour lui-même, le groupe auquel il appartient et les autres utilisateurs.

Il est important de créer et de gérer correctement les groupes sur un système pour pouvoir contrôler l'accès aux ressources et garantir la sécurité du système. Sur un système Linux, on peut utiliser la commande `groupadd` pour créer un nouveau groupe et la commande `usermod` pour ajouter ou retirer un utilisateur d'un groupe.

Il est recommandé de définir les groupes et les droits d'accès de manière à ce que chaque utilisateur ait accès aux ressources dont il a besoin pour effectuer son travail, mais sans donner accès à des ressources non nécessaires ou sensibles. Cela peut contribuer à améliorer la sécurité et la productivité du système.

**Cours à voir :**
- [[Gérer un groupe]]
- [[Gérer un utilisateur]]