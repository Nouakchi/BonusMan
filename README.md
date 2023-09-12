# BonusMan
Licence Professionnelle Universitaire
Développement des Applications Web & Technologies Mobiles
LPU-DAWM
RAPPORT DE STAGE DE FIN D’ETUDES
SUJET :
Conception et réalisation d'une application mobile de gestion de
livraison de produits
Préparé par :
NOUAKCHI OTHMANE
Encadré par :
Encadrant entreprise : NAJOUA CHTIOUI
Encadrant ESTC : PF ANOUN HOUDA
ANNEE UNIVERSITAIRE: 2021-2022
1|P ag eRemerciements
Je tiens à remercier toutes les personnes qui ont
contribué au succès de mon stage et qui m'ont aidé lors
de la rédaction de ce rapport.
Tout d'abord, j'adresse mes remerciements à mon
professeur, PF ANOUN HOUDA qui m'a beaucoup
aidé dans mes études et m'a permis de postuler dans
cette entreprise. Son écoute et ses conseils m'ont permis
de cibler mes candidatures, et de trouver ce stage qui
était en totale adéquation avec mes attentes.
Je pense également à Madame NAJOUA, qui a cru en
mon potentiel
Je n’oublie pas non plus mes proches qui m’ont sans
cesse soutenu dans l’élaboration de mon projet
professionnel et m’ont aidé à chaque étape de ce
rapport de stage
Ce stage m’a permis d’affiner certaines pistes pour bâtir
ma carrière et signe l’aboutissement de mon cursus
universitaire.
Remerciements spéciaux à mon relecteur et correcteur
qui a contribué, grâce à ses conseils et
recommandations, à l’élaboration et au bon déroulé de
mon rapport de stage.
2|P ag eSommaire :
Remerciements......................................................................................02
Introduction ..........................................................................................05
Chapitre I : spécification et analyse de besoins
I-Problématique ...................................................................................07
II-Solution envisagée et spécification des besoins.........................11
III- Présentation des acteurs...............................................................12
1- Epicier.................................................................................................13
2- Livreur................................................................................................13
3- L’usine.................................................................................................13
4-Administrateur.................................................................................. 13
IV- Modélisation adoptée....................................................................14
1- Le diagramme des cas d'utilisation ..............................................15
2-Diagramme de séquence ..................................................................20
V-Conclusion .........................................................................................24
Chapitre II : conception
I-Introduction .......................................................................................26
II-Dictionnaire des données................................................................27
III-Méthodologie utilisée ...................................................................27
1-Modèle conceptuel des données .....................................................28
2-Modèle logique des données ...........................................................29
IV-Conclusion........................................................................................30
3|P ag eSommaire :
Chapitre III : Réalisation
I-Introduction........................................................................................32
II-Environnement de travail ...............................................................32
1-Environnement matériel ..................................................................32
2-Environnement logiciel....................................................................32
lll-Environnement de développement ...............................................33
IV-Technologies utilisées ...................................................................34
V-Les interfaces ....................................................................................36
Conclusion générale..............................................................................38
4|P ag eIntroduction
Ce projet a pour but de concevoir et réaliser une application
mobile destinée à la gestion des commandes des épiciers
marocains à l'aide des BONUS MANS (livreurs) qui vont
remplacer la chaine de distribution et il vont jouer le rôle d'un
intermédiaire direct entre l'usine de production et l'épicier qui
permet aux épicier d'avoir un accès rapide aux produits .
Ces fonctionnalités sont les objectifs majeurs de cette
application.
Après avoir effectué des recherches, collecté les informations
nécessaires et déployé les efforts nous avons pu réaliser ce
travail que nous allons vous présenter sous forme de trois
chapitres :
- Un premier chapitre qui va placer le projet dans son contexte
général, et présenter une description globale de l’application
ainsi qu’une spécification des besoins et objectifs.
-Un deuxième chapitre qui va contenir une étude conceptuelle
et présentation des diagrammes nécessaires basés sur le
langage de modélisation UML.
- Un troisième chapitre qui va présenter l’environnement et
les outils de développement utilisés et les étapes de la
réalisation de cette application mobile
5|P ag eChapitre I
Analyse des besoins
et spécification
6|P ag eI- Problématique :
Une chaîne d’approvisionnement, ou « Supply Chain » en
anglais, est constituée d’un réseau d’acteurs contribuant à
l’élaboration d’un produit.
Elle englobe tout un ensemble logistique qui va de la
fourniture de matières premières à la distribution en passant
par la production de produit.
La chaîne d’approvisionnement, un réseau complexe
Le graphique ci-dessous fait ressortir les fortes
interdépendances entre les différents acteurs de la chaine
d’approvisionnement. La rupture de l’un des maillons de la
chaîne entraîne un effet domino, capable d’affecter l’ensemble
des sociétés concernées.
L’entreprise se trouve au centre d’un réseau de fournisseurs,
de sous-traitants, de distributeurs et de clients. Chaque
membre du réseau est, lui-même, au centre d’une autre chaîne
logistique ayant ses propres ramifications de sous-traitants,
fournisseurs et clients.
L’entreprise dépend en amont des fournisseurs de premier plan
(fournisseurs directs) qui dépendent, à leur tour, de ceux du
deuxième et du troisième rang.
En aval, l’entreprise dépend du bon fonctionnement des
réseaux de transport et des infrastructures critiques comme les
réseaux électriques et les systèmes de communication.
7|P ag eL’enquête 2017 de Business Continuity Institute (BCI)
établit une liste des risques de perturbation de la chaîne
d’approvisionnement. Les ruptures les plus courantes ont
pour origine les pannes des systèmes de
télécommunication.
Viennent ensuite les cyberattaques, le manque de main
d’œuvre qualifiée, la défaillance des sous-traitants et la
perturbation du réseau de transport.
Les conditions météorologiques défavorables se
retrouvent à la sixième place, soulignant ainsi les
menaces liées au changement climatique. Le risque
incendie grimpe de la quatorzième place occupée dans
l’édition de 2016 à la septième place en 2017.
8|P ag eRupture de la chaîne d’approvisionnement :
Les sources de risque
Les
sources
de
perturbation
de
la chaîne
d’approvisionnement sont multiples. Selon l’étude de BCI :
 44% des organisations sondées estiment que les fournisseurs
de premier rang sont les premiers responsables en cas de
mauvais fonctionnement ou de paralysie du système
 24% des sociétés pointent du doigt les fournisseurs de second
rang
 10% accusent les fournisseurs d’un rang plus éloigné.
 22% des entreprises n’arrivent pas à identifier la source de
perturbation
Sources de rupture de la chaîne d’approvisionnement
9|P ag eConséquences de la rupture de la chaîne
d’approvisionnement
La rupture de la chaîne d’approvisionnement est lourde de
conséquences :
 55% des entreprises sondées ont constaté une perte de
productivité suite à cet incident
 46% ont enregistré une augmentation du coût du travail due,
entre autres, à la recherche de nouveaux fournisseurs
 43% ont reçu des plaintes des consommateurs
Une baisse des revenus a été perçue chez 32% des entreprises
sondées.
Coût économique de la rupture de la chaîne
d’approvisionnement
A noter que 22% des entreprises affectées par une rupture de la
chaîne d’approvisionnement enregistrent une perte de plus de 1
million EUR (1,2 million USD), avec 5% d’entre elles qui
affichent des dommages supérieurs à 100 millions EUR
(120 millions USD).
10 | P a g eII- spécification des Besoins et
Solution envisagée:
Afin de lutter contre ce problème, nous proposons d'ajouter des
BONUS MANS ou bien des agents de livraison pour équilibrer
la charge quand il y a une brèche dans la chaîne
d'approvisionnement.
Et pour cela les épiciers n'auront plus besoin d'attendre la
chaine comme avant, par contre ils n'ont qu'à consulter les
produits, passer une commande,
Un BONUS MAN le livrera et VOILÀ !
Puis l'usine s'occupera de la commande !! En se basant sur une
petite application mobile les points de ventes auront leurs
produits rapidement.
Et les jeunes bénéficieront d'une source facile de revenus qui
influera positivement sur le système économique.
11 | P a g eIII- Presentation des acteurs
L’application admet 4 catégories d’utilisateurs :
I. Les administrateurs qui gèrent l’application
II. Épiciers qui passent leurs commandes
III. Les agents de livraison qui livrent les
commandes
IV. Les usines qui préparent les commandes
Figure 1: Présentation des acteurs
12 | P a g eVoici les cas d'utilisations accessibles pour chaque acteur :
III.1 L’Epicier:
 Consulter les produits propose par les usines.
 Manipuler les commandes
 Consulter et Valider la facture générer par le système.
III.2 Livreur:
 Consulter les EPICIERS sur GOOGLE MAPS.
 Consulter leurs informations (nom, position, tel,..).
 Consulter les commandes passées par un épicier.
 S’occuper d’une commande.
 Tracer l’itinéraire et Démarrer la route.
 Passer une commande.
 Ajouter un EPICIERS sur la MAP
III.3 L’usine:
 Consulter les commandes des épiciers.
 Ajouter un produit dans la vitrine.
 Masquer un produit de la vitrine.
 Préparer une commande.
III.4 L’administrateur:
 Ajouter, modifier, supprimer un agent de livraison.
 Valider les nouveaux points de ventes.
 Affecter des missions aux agents libres.
 Modifier les champs visuels des BONUS MAN
13 | P a g eIV- Modélisation adoptée:
Afin d’optimiser la compréhension ainsi que la réalisation du
projet on a choisi comme langage de modélisation L'UML
(Unified Modling langage).
UML comme son nom l'implique, un langage de modélisation
et non une méthode ou un procédé.
L'UML est constitué d'une notation très spécifique ainsi que
les règles grammaticales s y attachant pour élaborer des
modèles de logiciel.
Il supporte un riche ensemble d'éléments de notation
graphique.
Il décrit la notation pour les classes, les composants, les
nœuds, les activités, le workflow, les cas d'utilisations, les
objets, les états ainsi que la façon de modéliser les relations
entre ces éléments.
L'UML permet également les extensions personnelles à
travers les éléments stéréotypés.
14 | P a g eIV.1 Le diagramme des cas d'utilisation :
L’objectif fondamental de cette étape est d’identifier les
principaux cas d’utilisation.
Nous nous intéressons donc, dans cette partie, à la réalisation
des diagrammes des cas d’utilisations.
Ces diagrammes décrivent précisément les besoins du client
final et spécifient le comportement attendu par le système à
développer.
Généralement un diagramme de cas d’utilisation modélise
l’ensemble des services rendu par le système.
15 | P a g e- On va voir par la suite les diagrammes de cas d'utilisation
pour chaque utilisateur en détail, en commençant par :
1) les cas d'utilisation de l'épicier :
Un épicier à le droit de consulter les produits propose
par les usines, commander les produits dont il a besoin, le
suivi et la gestion de ses commandes ainsi que la validation
de la facture.
Figure 2 : cas d'utilisation épicier
16 | P a g e2) les cas d'utilisation du livreur :
Un livreur à le droit de consulter les épiciers situés dans
un périmètre prédéfini, accéder aux informations de chaque
point de vente y compris le nom l’adresse le téléphone,
s’occuper d’une commande, passer une commande pour un
épicier, tracer un itinéraire pour livrer la commande, générer
une facture
Figure 3 : cas d'utilisation livreur
17 | P a g e3) les cas d'utilisation de l’usine:
L’usine à le droit de consulter les commandes passé par
les points de ventes, manipuler les produits présenté sur leur
vitrine, préparer les commandes pour qu’il soit prête pour la
livraison
Figure 4: cas d'utilisation usine
18 | P a g e4) les cas d'utilisation de l’administrateur:
L’administrateur à le droit de créer des comptes pour les
nouveaux BONUS MAN, manipuler leurs champs visuels
sur la MAP, affecter des missions pour las agents libres,
Valider les nouveaux points de ventes ajoutées par les
BONUS MANS
Figure 5: cas d'utilisation l’administrateur
19 | P a g eIV.2 Diagramme de séquence :
Les diagrammes de séquences sont la représentation
graphique des interactions entre les acteurs et le
système selon un ordre chronologique dans la
formulation Unified Modeling Language.
20 | P a g e1) Diagramme de séquence-passer une commande :
Valider une commande
Figure 6: Diagramme séquence passer une commande
21 | P a g e2) Diagramme de séquence-s’occuper d’une commande :
Figure 7: Diagramme séquence s’occuper d’une commande
22 | P a g e3) Diagramme de séquence-préparer une commande :
Figure 8: Diagramme séquence préparer une commande
23 | P a g eV- Conclusion
Ce chapitre a été dédié à la présentation et à la spécification des
différents besoins de l’application à développer.
Il nous a permis de bien comprendre le problème et d'avoir une
vue d'ensemble sur les fonctionnalités fondamentales sur
lesquelles on va se focaliser.
Nous avons d’abord identifié les acteurs, puis nous avons
élaboré les différents cas d'utilisation de chaque acteur.
Et à la fin, nous avons expliqué le fonctionnement détaillé par
le moyen de la modélisation par des diagrammes UML.
Cette vue globale est le pilier et le support de base de notre
conception qu'on exposera dans le chapitre suivant.
24 | P a g eChapitre II
Conception
25 | P a g eI-Introduction :
La conception est une étape primordiale dans le cycle de
vie d’une application, elle a pour objectif d’élaborer à
partir du modèle du système obtenu lors de l’étape
d’analyse de besoin, des modèles détaillés de
l’architecture du système.
Elle vise également la réduction de la complexité du
système.
Ce chapitre comporte la présentation d'une conception
détaillée de l’application à développer.
26 | P a g eII-Dictionnaire des données :
Dictionnaire de l'entité "utilisateur":
Dictionnaire de l'entité "produit":
Dictionnaire de l'entité "commande":
III-Méthodologie utilisée :
Merise est une méthode d'analyse et de conception des
systèmes d'information basée sur le principe de la
séparation des données et des traitements. Elle possède
plusieurs modèles qui sont répartis sur 3 niveaux (Le
niveau conceptuel, le niveau logique ou organisationnel,
le niveau physique).
27 | P a g eIII.1 Modèle conceptuel des données :
Le MCD est une représentation graphique de haut niveau qui
permet facilement de comprendre comment les différents
éléments sont liés entre eux à l’aide de diagrammes codifiés avec
des entités, les propriétés, les relations qui expliquent comment
les entités sont reliées entre elles et les cardinalités
Passer une commande
Se compose de
Quantity
Figure 9 : modèle conceptuel des données
28 | P a g eIII.2 Modèle logique des données :
Le Modèle Logique de Données (MLD) est la modélisation
logique des données qui tient compte du niveau organisationnel
des données.
Il s’agit d’une vue logique en terme d’organisation de données
nécessaire à un traitement.
Figure 10 : modèle logique des données
29 | P a g eIV-Conclusion
Ce chapitre est d’une grande importance pour la
suite du travail du fait qu’il projette la notion
théorique sur un cas pratique de notre plateforme
et qu’il traite la conception du système à réaliser,
sans laquelle la réalisation ne pourra se faire
comme il le faut.
Pour ce projet on a choisi comme méthodologie la
méthode française Merise qui nous a facilité la
conception afin de passer à la phase réalisation
qu'on exposera dans le chapitre suivant.
30 | P a g eChapitre III
Réalisation
31 | P a g eI- Introduction :
Au niveau de cette dernière partie, nous nous intéressons
aux outils utilisés pour la réalisation de notre application et
la mise en œuvre des différents composants décrits au niveau
du chapitre précédant ainsi qu’aux principales interfaces de
l’application
II-Environnement de travail :
1- Environnement matériel :
Le travail a été réalisé sur un ordinateur portable
qui dispose des caractéristiques suivantes :
 Microprocesseur : Intel i7
 Mémoire vive de : 16Go DDR3
 Disque dur : 1 To SSD
2- Environnement logiciel :
Le système d' exploitation utilisé est :
 Windows 11
32 | P a g eIII-Environnement de développement :
1) Visual Studio code 2019
Visual Studio Code est un éditeur de code source gratuit
créé par Microsoft pour Windows, Linux et MacOs. Les fonctionnalités
incluent la prise en charge du débogage, de la coloration syntaxique, de la
complétion de code intelligente, des extraits de code, de la factorisation du
code et de Git intégré. Les utilisateurs peuvent modifier le thème, les
raccourcis clavier, les préférences et installer des extensions qui ajoutent
des fonctionnalités supplémentaires.
2) Mongo DB
Est un système de gestion de base de données orienté
documents, répartissable sur un nombre quelconque d'ordinateurs et ne
nécessitant pas de schéma prédéfini des données. Il est écrit en C++. Le
serveur et les outils sont distribués sous licence SSPL, les pilotes
sous licence Apache et la documentation sous licence Créative Commons. Il
fait partie de la mouvance NOSQL.
3) Mongo DB Compas
Compas est un outil interactif qui permet
d'interroger, d'optimiser et d'analyser vos données
Mongo DB.
Obtenez des informations clés, effectuez un glisser-déposer
pour créer des pipelines, et plus encore.
33 | P a g eIV-Technologies utilisées :
1)
REACT NATIVE
REACT Native est un Framework
d'applications mobiles open source créé par Facebook. Il est
utilisé pour développer des applications pour Android, iOS
et UWP en permettant aux développeurs d’utiliser REACT
avec les fonctionnalités natives de ces plateformes.
2)
CSS
Les feuilles de style en cascade,
généralement appelées CSS de l'anglais Cascading Style
Sheets, forment un langage informatique qui décrit la
présentation des documents HTML et XML. Les
standards définissant CSS sont publiés par le World Wide
Web Consortium
34 | P a g e3)
JAVASCRIPT
Les feuilles de style en cascade,
généralement appelées CSS de l'anglais Cascading Style
Sheets, forment un langage informatique qui décrit la
présentation des documents HTML et XML. Les standards
définissant CSS sont publiés par le World Wide Web
Consortium
4)
NODEJS
Node.js est une plateforme logicielle
libre en JavaScript, orientée vers les applications réseau
évènementielles hautement concurrentes qui doivent
pouvoir monter en charge. Elle utilise la machine virtuelle
V8, la librairie libuv pour sa boucle d'évènements, et
implémente sous licence MIT les spécifications
CommonJS.
35 | P a g eV-Les interfaces –LIVREUR-:
MenuChargement des points de
ventsListe d’épiciers valable sur le
périmètre prédéfini
Detection automatique
de position actuelSélectionner un point de
vente pour plus d’informationListe de produits
habituelle
36 | P a g eBoite de commande pour
passer une commandeListe des produits
disponiblesQuantité de produit
Modifier la quantité
d’une commandeBoite de commande prête
pour la confirmationFacture générer
automatiquement
37 | P a g eTracer l’itinéraire et
démarrer la route
Ajouter un nouveau point
de vente
Point de vente ajoutée
temporairement
Conclusion générale
Ce travail a été réalisé dans le cadre de notre projet de fin
d’études qui a pour objectif la conception et la réalisation
d'une application mobile permettant la gestion et le suivi
des commandes des épiciers marocain.
Nous avons procédé ainsi à la réalisation de cette
application qui va donner la possibilité de remplacer la
chaine d'approvisionnent et éviter d'être parmi les
victimes de la rupture de ce system.
38 | P a g ePour la conception de cette plateforme, Nous avons eu
recours à la méthodologie UML/Merise. Cette approche
nous a permis de bien comprendre la problématique et de
bien modéliser les objectifs à atteindre. Le projet s’est
déroulé selon trois axes principaux afin de passer par les
étapes essentielles de tout projet : l’analyse, la conception
et la réalisation.
Pour la réalisation, Nous avons utilisé JAVASCRIPT
comme langage de programmation et
MONGODB comme système de gestion de base de
données. En outre, ce projet était une opportunité pour bien
maîtriser le développement d’une application mobile et
concrétiser tout ce qu'on a appris durant cette année
d'études.
En guise de perspective, Ce travail reste prêt pour toute
amélioration envisageable comme par exemple le
développement d’une application web qui va exploiter
toutes les fonctionnalités de cette application. Il est
également possible d’étendre son utilité et utilisation d’une
façon d’être valable pour tous les domaines
39 | P a g e