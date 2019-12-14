# ![](ressources/logo.jpeg) Prog web client riche - JavaScript

### IUT Montpellier-Sète – Département Informatique

## TD4
#### _Thème : objets, classes, événements, jeu du taquin_

Cliquez sur le lien ci-dessous pour faire, dans un dossier public_html/JS/TD4, votre fork privé du TD4 (**attention, pas de fork à la main !**):

https://classroom.github.com/a/kOejRRzk

la version [pdf](ressources/td4.pdf)

## INTRODUCTION

Dans ce TD, nous allons réinvestir le travail des trois premiers TD pour créer une version web du jeu du taquin. 

Notre taquin est un puzzle de dimensions 4 lignes et 4 colonnes, soit 16 emplacements. Sur ces 16 emplacements se déplacent 15 carrés portant chacun une partie de l'image complète. L'emplacement sans carré permet aux carrés placés sur les emplacements voisins d'être déplacés sur cet emplacement vide.

L'environnement html-css est déjà opérationnel, mais vous pouvez adapter le css si besoin. 

Vous avez dans le dossier img plusieurs sous-dossiers contenant toutes les images nécessaires pour le jeu. Le nommage des fichiers images est standardisé.  


## CONSIGNES

Le travail à accomplir : créer les fichiers JavaScript qui permettent de jouer. 

Vous pouvez donner une version strictement fonctionnelle du jeu, ou alors organiser votre code en classes. C'est à vous de voir.


## QUELQUES CAPTURES D'ECRAN

Voici le jeu en configuration "puzzle"

<p align="center">
   <img src="ressources/img0.png">
</p>

+ Le sélecteur de thèmes permet de changer le thème du jeu. Le thème par défaut est celui des nombres.

+ Le bouton mélanger, comme son nom l'indique, mélange le puzzle. Il est actif dans la configuration jeu.

+ Le bouton solution permet un switch entre l'affichage du puzzle dans son état courant et l'image du puzzle résolu. En configuration jeu, ce bouton affiche le texte solution, et si on passe en configuration solution, alors le texte du bouton se change en "puzzle", et le bouton mélanger est provisoirement désactivé.

Voici le jeu en configuration "solution"

<p align="center">
   <img src="ressources/img0_1.png">
</p>


Le changement de thème ne fait que modifier l'apparence du puzzle, il ne touche en rien la situation des carrés. Si on change de thème, la vue "solution" est bien entendue actualisée. Voici un exemple de thème :

<p align="center">
   <img src="ressources/img3_1.png">
</p>

