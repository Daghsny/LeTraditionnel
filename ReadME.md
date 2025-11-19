**Web Shared Components**

Link To Picture : 
<a href="https://drive.google.com/drive/folders/14c3_FmQGSbqMBhNC6bR3DUP2nV4GGIHk?usp=sharing">Click Here</a>
---

**Création des documents Web: Projet 01: Le Traditionnel**
---
**Consignes**

1. *Toutes les fonctions JavaScript doivent être enregistrées dans un fichier nommé "mesControles.js".*
2. *Toutes les règles CSS doivent être enregistrées dans le fichier "mesStyles.css".*
3. *Toutes les pages HTML doivent être reliées au fichier "mesStyles.css".*
4. *Les pages "reservation.html" et "commande.html" doivent être reliées au fichier "mesControles.js".*
5. *Le clic sur le bouton "Annuler" de chaque formulaire à créer, permet d’initialiser les champs.*
---
**Création de la page index du site**

1. **index. html**
a. Créer la page "**html**" tout en la reliant au fichier "mesStyles.css" afin de respecter la disposition ci-contre. Sachant que :
- L’élément **< h1 >** contient le titre : **Le Traditionnel**
- L’élément **< nav >** représente le volet de navigation et contient les liens hypertextes suivants :
    - **Accueil** (servira de lien vers la page "***Accueil.html***").
    - **Réservation** (servira de lien vers la page "***Réservation.html***").
    - **Commande** (servira de lien vers la page "***Commande.html***").
- L’élément **< main >** contient la zone **< iframe >** qui servira pour l’affichage de différentes pages de ce site et contient par défaut la page "***acceuil.html***").
- L’élément **<footer>** représente le pied de page et contient les lignes suivantes :

---
Le Traditionnel - Café depuis 1987
123 Rue de la Tradition, La Marsa Tunis
Ouvert tous les jours de 7h à 20h
---

1. Ajouter au fichier "**mesStyles.css**", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :

| **Elément** | **Mise en forme** |
| --- | --- |
| h1 | Taille 24 pixel en gras, Couleur du texte : #fff |
| header | Couleur arrière-plan : #5d4037, Couleur du texte : #fff ; Marge interne 20px en haut et en bas, hauteur 120 pixel ; Ombre noir 0 décalage horizontale, 2px de décalage verticale avec une propagation de 5px |
| Liste à puce | Liste alignée à droite, Les éléments alignés sur une seule ligne ; Les éléments espacés de 20px, Liste sans style de puces |
| Les liens hypertextes | Couleur : #fff, Non soulignés, Arrière-plan: #5d4037, Marge interne : 5px ; Lors du survole en dessus avec la souris la couleur du texte du lien change vers #ffcc80 et l’arrière-plans de couleur: rgba(255, 255, 255, 0.1) avec des angles à rayons de 2px |
| footer | Couleur de l’arriere-plan  #5d4037,  Couleur du texte :  #fff, Texte centré ; Espacement interne haut et bas de 20 px ; Espacement avant de 40px Fixé en bas de la page afficher à la largeur de la page |

2. **acceuil.html**

La page d’accueil est enregistrée dans votre dossier de travail sous le nom **accueil.html**

3. **reservation.html**
- Créer la page " **reservation.html**" tout en la reliant au fichier "mesStyles.css" afin de respecter la disposition ci-contre. Sachant que :
    - L’élément **< h1 >** contient le titre : **Réserver une table**
    - L’élément **< h2 >** contient le texte : « **Choisissez l'emplacement qui vous convient le mieux et complétez le formulaire ci-dessous.**»
    - Le premier élément **< section >** contient :
      - L’image plan du café qui est enregistrée sous le nom « **plan.png**»
      - 5 éléments **< div >** chacun contient un titre niveau 4 pour représenter le nom de l’espace à Réserver numéroté de 1 à 5 : **espace 1, espace 2, espace 3, espace 4 et espace 5**.
    - Le deuxième élément **< section >** contient un formulaire de réservation comme présenté ci-dessous :

- Ajouter au fichier "mesStyles.css", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :

| **Elément** | **Mise en forme** |
| --- | --- |
| h1 | Taille 24 pixel en gras |
| h2 | Espacement en bas de 20 pixel ; Couleur du texte : #5d4037 |
| img | Largeur de 600px ; Hauteur: 300px ; Aligné à gauche ; Un ombre noir horizontale de 5px verticale de 5px et propagation de 5px ; Border à angle arrondis de 5px ; Marge de 20px |
| div | Largeur 100px ; Hauteur 25px ; Style de la police en gras ; Alignement du texte :  center ; Couleur du texte blanc ; Couleur de l’arrière-plan violet avec une transparence de 50% ; Chaque div aura sa position épinglée à l’espace convenable sur l’image comme décrit dans la figure à droite. ; **Lors** du survol avec la souris au-dessous d’un élément : Le texte sera souligné ; Couleur du texte: chartreuse; l’élément ne sera plus transparent |
| section centenaire de l’image | Largeur 50%, Hauteur 400px; Aligné à gauche, Espacement à droite de 10px |
| section centenaire du formulaire | Largeur 40%, Hauteur 400px, Aligné à gauche, Espacement à gauche de 90px, Espacement  en haut de 20px. |
| formulaire | Aligner les élément du formulaires comme présenté dans la figure 3 |
| Boutons réserver et annuler | Appliquer un effet de transition de changement de couleur de l’arrière-plan, lors du survol avec la souris, qui dure 0.3 secondes  |

- Le clic sur l’un espace à réserver fait l’appel d’une fonction JavaScript nommé espace(x), développée dans le fichier *"mesControles.js"* permettant de remplir le champ Espace réservé par le nom de l’espace choisit (espace1, espace2, espace3, espace4 ou espace 5)
- Le clic sur le bouton Réserver fait l’appel à une fonction JavaScript, nommée verif(), développée dans le fichier *"mesControles.js" permettant de respecter les contrôle du formulaire suivants :
  
  - Le nom est une chaine de caractère alphabétique acceptant l’espace de plus de **3** caractères
  -  L’email obligatoirement sous la forme suivante **xxxxxxxx@xxxx.xxx** : vérifier l’existence et le bon emplacement des symbole **@** et le point seulement.
  - Le numéro du téléphone est un nombre de **8** chiffres ne commence ni par **0** ni par **1** ni par **6**
  - La date de la réservation est une date strictement supérieure à la date actuelle (date système)
  - L’heure de réservation varie entre **07:00** et **18:59** (c a d avant 19h)
  - Le nombre de personne est un nombre strictement positif et inferieur ou égale à la capacité de l’espace réservé sachant que :
    
      - Espace 1 : capacité maximale 14 personnes
      - Espace 2 : capacité maximale 8 personnes
      - Espace 3 : capacité maximale 2 personnes
      - Espace 4 : capacité maximale 4 personnes
      - Espace 5 : capacité maximale 4 personnes



4. **commande.html**
   
Créer la page " commande.html" tout en la reliant au fichier "mesStyles.css" afin de respecter la disposition ci-contre. Sachant que: 
  - L’élément < h1 > contient le titre : Café Le Traditionnel
  - L’élément < h2 > contient le texte : « Commandez vos boissons et sandwichs préférés »
  - L’élément < section > contient un formulaire de commande comme présenté ci-dessus : <br>
        - Quatre éléments **< div >** pour représenter des box pour des produits avec bordure de couleur Vert et arrondis aux côtés. Chacun contient un champs texte qui représente la quantité commandée de ce produit.

      

| **Element** | **Types d'élément du champ de saisie** | **Image** | **Libellé** | **Prix** |
| --- | --- | --- | --- | -- |
| Box 01 | CheckBox  | Image café | Café expresso | 4,500 dt | 
| Box 02 | Boutons radio  (pour choisir entre deux types de boissons) | Image Boisson	| Canette 33cl Bouteille 0.5l	 | 3.500 dt 4.200 dt | 
| Box 03 | Liste déroulante (pour choisir entre deux types de bouteille)	 | Image bouteille d’eau  |  	Eau minérale 0.5L   Eau minérale 1.0L	|  2.500 dt 4.000 dt  | 
| Box 04 | Range (pour choisir entre Soft, Normal, Spicy et Extra hot)	 | Image Sandwich	 | Sandwich traditionnel	 | 9.500 dt | 


**NB** : La zone de texte Quantité est désactivée par défaut et contient une valeur égale à Zéro. Suivant chaque box produit, elle sera active et obtient une valeur de 1 qui peut être incrémenter selon le choix de client.

**Exemple** :   
  - La zone texte de quantité dans le box 1 sera activer et contenant la valeur 1 après que le checkbox devant l’image du café avait été cocher.
  - La zone texte de quantité dans le box 2 sera activer et contenant la valeur 1 après avoir sélectionner une des bouton radio.
  - La zone texte de quantité dans le box 3 sera activer et contenant la valeur 1 après avoir sélectionner une des options du menu déroulant.
  - La zone texte de quantité dans le box 4 et l’input de type range seront activer (La zone texte de quantité aura en plus la valeur 1) après que le checkbox devant l’image du sandwich avait été cocher.

- b. Ajouter au fichier "**mesStyles.css**", les règles permettant d’appliquer aux éléments de cette page, les mises en forme spécifiées dans le tableau suivant :

|Elément|	Mise en forme|
| --- | --- |
|**h1**	|Taille 24 pixel en gras|
|**h2**	|Espacement en bas de 20 pixels
||Couleur du texte : #5d4037|
|**img** |	Largeur : 50px|
||Hauteur : 50px|
||	Lors du survol avec la souris au-dessous d’une image : L’image aura un effet de transformation de  scale de 1.5|
|**div** |	Largeur 100%|
||Un ombre vert horizontale de 5px verticale de 5px et propagation de 5px|
||Border à angle arrondis de 5px|
||Marge de 20px|
||Padding de 20px |

- c. Le clic sur le bouton Valider fait l’appel d’une fonction JavaScript nommé choix(), développée dans le fichier "mesControles.js" permettant de valider la commande.


---

<h2>Partie II : Création de la base de données </h2> 

---
Le concepteur du site utilise la base de données simplifiée intitulée Le_Traditionnel décrite par la représentation textuelle suivante : <br>
- Client ( <u>email</u> , tel, nom) <br>
- Réservation (<u>idReservation</u>, espace, numTable, email#, dateR, heureP, nbPersonnes) <br>
- Produit (<u>idProduit</u>, nomProduit, prix, qteStock) <br>
- Commande (<u>idCommande</u>, idReservation#) <br>
- LigneCommande (<u>idCommande#</u>, <u>idProduit#</u>, qte, caracteristiques) <br>


Les descriptions des différents champs sont présentées dans le tableau suivant :

|Champs|Type|Description|Contrainte|
| --- | --- | --- | --- |
|email|	Chaine de 30 caractères|	Email d’un client|	Clé primaire|
|tel	|Numérique de 8 chiffres	|Téléphone d’un client	||
|nom	|Chaine de 20 caractères	|Nom d’un client||	
|idReservation	|entier|	Identifiant d’une réservation	|Clé primaire auto-incrémenté|
|espace|	Chaine de 10 caractères|	Nom d‘un espace	||
|numTable	|Entier de 2 chiffres|	Numéro de table dans un espace	||
|dateR	|Date |	Date d’une réservation	||
|heureP	|heure|	Heure d’une réservation	||
|nbPersonnes	|Entier de 2 chiffres	|Nombre de personnes pour une réservation||	
|idProduit|	entier	|Identifiant d’un produit|	Clé primaire auto-incrémenté|
|nomProduit	|Chaine de 20 caractères	|Nom d’un produit|	
|prix	|décimale (10,3)|	Prix d’un produit|	Un réel strictement positif||
|qteStock|	Entier de 3 chiffres|	Quantité de stock d’un produit	|Un entier positif|
|idCommande	|entier	|Identifiant| d’une commande	|Clé primaire auto-incrémenté|
|qte|	entier de 3 chiffres	|Quantité d’un produit commandée	|Un entier strictement positif|
|caracteristiques|	Chaine de 40 caractères|	Caractéristiques d’un produit commandé	||


    a.	Créer une base de données en lui attribuant le nom **TraditionnelBD** . 
    b.	Créer les tables conformément à la représentation textuelle et aux descriptions des champs présentées dans le tableau. 
    c.	Créer les relations entre les différentes tables. 
    d.	Insérer les lignes suivantes dans les tables jardin et parcelle :
    e.	Exporter cette base de données au format SQL dans votre dossier de travail.


