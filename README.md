# pong

pong game

-[correction](https://codepen.io/djeg/pen/jOppQYr)

## Exercice 1

Gérer les controlles de la bare de droite

Commencer par déclarer les variables suivantes :

let rightBarUp = false
let rightBarDown = false

Grace au événements "keyup" et "keydown" sur le document faire en sorte de :

- lors de l'appuie sur la touche "ArrowUp" changer la variable rightBarUp à true et lors
  de son relachement la changer à false
- Lors de l'appuie sur la touche "ArrowDown" changer la variable rightBarDown à true et
  lors de son relachement le changer à false
  \*/

/\*\*

## Exercice 2

Gérer les controlles de la bare de gauche

Commencer par déclarer les variables suivantes :

let leftBarUp = false
let leftBarDown = false

Grace au événements "keyup" et "keydown" sur le document :

- lors de l'appuie sur la touche "z" changer la variable leftBarUp à true et lors
  de son relachement la changer à false
- Lors de l'appuie sur la touche "s" changer la variable leftBarDown à true et
  lors de son relachement le changer à false
  \*/

/\*\*

## Exercice 3

Mettre en place une GameLoop (boucle de jeux)

Créer une fonction "gameLoop" et placer à l'intérieur :

console.log(rightBarUp, rightBarDown);
console.log(leftBarUp, leftBarDown);

Documentez-vous sur la fonction "requestAnimationFrame" et
faire en sorte que la fonction "gameLoop" se lance
undéfiniment !

Indice : Cette fonction permet de créer une boucle infinie
nous permettant de gérer un jeux videos !
\*/

/\*

## Exercice 4

Bouger la bare de droite !

Créer une fonction "moveRightBar" et réalisez le code
suivant :

- Récupérer la div avec les class ".bar.right"
- Obtenez sa position vertical avec "element.offsetTop" (pixel)
- Obtenez sa taille en hauteur avec "element.clientHeight" (pixel)
- Obtenez la hauteur de l'écran avec "document.documentElement.clientHeight" (pixel)
- Si la variable "rightBarUp" est vrai, déplacer la bar vers le haut
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'` pour assigner
  sa nouvelle position !
- Si la variable "rightBarDown" est vrai, déplacer la bar vers le bas
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'`
- Lancer la fonction "moveRightBar" à l'intérieur de la fonction "gameLoop" :)
  \*/
  const rightBar = document.querySelector('.bar.left')

// hauteur en pixel
rightBar.clientHeight

// Position vertical de la barre sur l'écran
rightBar.offsetTop

// Changement de la position vertical
rightBar.style.top = '10px'

/\*

## Exercice 5

Bouger la bare de gauche !

Créer une fonction "moveLeftBar" et réalisez le code
suivant :

- Récupérer la div avec les class ".bar.left"
- Obtenez sa position vertical avec "element.offsetTop" (pixel)
- Obtenez sa taille en hauteur avec "element.clientHeight" (pixel)
- Obtenez la hauteur de l'écran avec "document.documentElement.clientHeight" (pixel)
- Si la variable "leftBarUp" est vrai, déplacer la bar vers le haut
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'`
- Si la variable "leftBarDown" est vrai, déplacer la bar vers le bas
  en calculant sa nouvelle position (attention la bar ne doit pas
  sortir de l'écran). Vous pouvez utiliser `element.style.top = 'XXXpx'`
- Lancer la fonction "moveLeftBar" à l'intérieur de la fonction "gameLoop" :)
  \*/

/\*

## Exercice 6

Bouger la balle !

Créer une fonction "moveBall", placé le code
de déplacement de la balle à l'intérieur (la balle rebondit sur
les murs et les barres) :)

Lancer cette fonction dans la fonction "gameLoop" :)
\*/
