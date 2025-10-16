**Création des documents Web**

**Consignes**

1. *Toutes les fonctions JavaScript doivent être enregistrées dans un fichier nommé "mesControles.js".*
2. *Toutes les règles CSS doivent être enregistrées dans le fichier "mesStyles.css".*
3. *Toutes les pages HTML doivent être reliées au fichier "mesStyles.css".*
4. *Les pages "reservation.html" et "commande.html" doivent être reliées au fichier "mesControles.js".*
5. *Le clic sur le bouton "Annuler" de chaque formulaire à créer, permet d’initialiser les champs.*

**Création de la page index du site**

- **html**
1. Créer la page "**html**" tout en la reliant au fichier "mesStyles.css" afin de respecter la disposition ci-contre. Sachant que :
- L’élément **<h1>** contient le titre : **Le Traditionnel**
- L’élément **<nav>** représente le volet de navigation et contient les liens hypertextes suivants :
- **Accueil** (servira de lien vers la page "***html***").
- **Réservation** (servira de lien vers la page "***html***").
- **Commande** (servira de lien vers la page "***html***").
- L’élément <main> contient la zone **iframe** qui servira pour l’affichage de différentes pages de ce site et contient par défaut la page "***html***").
- 

**Figure 1**

---

- L’élément **<footer>** représente le pied de page et contient les lignes suivantes :

Le Traditionnel - Café depuis 1987

123 Rue de la Tradition, La Marsa Tunis

Ouvert tous les jours de 7h à 20h

---

1. Ajouter au fichier "mesStyles.css", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :

| **Elément** | **Mise en forme** |
| --- | --- |
| h1 | Taille 24 pixel en gras, Couleur du texte : #fff |
| header | Couleur arrière-plan : #5d4037, Couleur du texte : #fff
Marge interne 20px en haut et en bas, hauteur 120 pixel
Ombre noir 0 décalage horizontale, 2px de décalage verticale avec une propagation de 5px |
| Liste à puce | Liste alignée à droite, Les éléments alignés sur une seule ligne
Les éléments espacés de 20px, Liste sans style de puces |
| Les liens hypertextes | Couleur : #fff, Non soulignés, Arrière-plan: #5d4037, Marge interne : 5px
Lors du survole en dessus avec la souris la couleur du texte du lien change vers #ffcc80 et l’arrière-plans de couleur: rgba(255, 255, 255, 0.1) avec des angles à rayons de 2px |
| footer | Couleur de l’arriere-plan  #5d4037,  Couleur du texte :  #fff, Texte centré
Espacement interne haut et bas de 20 px
Espacement avant de 40px
Fixé en bas de la page afficher à la largeur de la page |
- **html**

La page d’accueil est enregistrée dans votre dossier de travail sous le nom **accueil.html**

- **html**
1. Créer la page " **reservation.html**" tout en la reliant au fichier "mesStyles.css" afin de respecter la disposition ci-contre. Sachant que :
- L’élément **<h1>** contient le titre : **Réserver une table**
- L’élément **<h2>** contient le texte : « **Choisissez l'emplacement qui vous convient le mieux et complétez le formulaire ci-dessous.**»
- Le premier élément **<section>** contient :
- L’image plan du café qui est enregistrée sous le nom « **png**»
- 5 éléments **<div>** chacun contient un titre niveau 4 pour représenter le nom de l’espace à Réserver numéroté de 1 à 5 : espace 1, espace 2, espace 3, espace 4 et espace 5.
- Le deuxième élément **<section>** contient un formulaire de réservation comme présenté ci-dessous :

**Figure 2**

---

1. Ajouter au fichier "mesStyles.css", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :

| **Elément** | **Mise en forme** |
| --- | --- |
| h1 | Taille 24 pixel en gras |
| h2 | Espacement en bas de 20 pixel
Couleur du texte : #5d4037 |
| img | Largeur de 600px
Hauteur: 300px
Aligné à gauche
Un ombre noir horizontale de 5px verticale de 5px et propagation de 5px
Border à angle arrondis de 5px
Marge de 20px |
| div
 
**Figure 3**
 | Largeur 100px
Hauteur 25px
Style de la police en gras
Alignement du texte :  center 
Couleur du texte blanc
Couleur de l’arrière-plan violet avec une transparence de 50% 
Chaque div aura sa position épinglée à l’espace convenable sur l’image comme décrit dans la figure à droite.
è Lors du survol avec la souris au-dessous d’un élément :
Le texte sera souligné
Couleur du texte: chartreuse;
l’élément ne sera plus transparent |
| section centenaire de l’image | Largeur 50%, Hauteur 400px;
Aligné à gauche,
Espacement à droite de 10px |
| section centenaire du formulaire | Largeur 40%, Hauteur 400px,
Aligné à gauche,
Espacement à gauche de 90px,
Espacement  en haut de 20px. |
| formulaire | Aligner les élément du formulaires comme présenté dans la figure 3 |
| Boutons réserver et annuler | Appliquer un effet de transition de changement de couleur de l’arrière-plan, lors du survol avec la souris, qui dure 0.3 secondes
 |
1. Le clic sur l’un espace à réserver fait l’appel d’une fonction JavaScript nommé espace(x), développée dans le fichier *"mesControles.js"* permettant de remplir le champ Espace réservé par le nom de l’espace choisit (espace1, espace2, espace3, espace4 ou espace 5)
2. Le clic sur le bouton Réserver fait l’appel à une fonction JavaScript, nommée verif(), développée dans le fichier *"mesControles.js" permettant de respecter les contrôle du formulaire suivants :*
- Le nom est une chaine de caractère alphabétique acceptant l’espace de plus de 3 caractères
- L’email obligatoirement sous la forme suivante xxxxxxxx**@**xxxx**.**xxx : vérifier l’existence et le bon emplacement des symbole @ et le point seulement.
- Le numéro du téléphone est un nombre de 8 chiffre ne commence ni par 0 ni par 1 ni par 6
- La date de la réservation est une date strictement supérieure à la date actuelle (date système)
- L’heure de réservation varie entre 07:00 et 18:59 (c a d avant 19h)
- Le nombre de personne est un nombre strictement positif et inferieur ou égale à la capacité de l’espace réservé sachant que :
    - Espace 1 : capacité maximale 14 personnes
    - Espace 2 : capacité maximale 8 personnes
    - Espace 3 : capacité maximale 2 personnes
    - Espace 4 : capacité maximale 4 personnes
    - Espace 5 : capacité maximale 4 personnes
