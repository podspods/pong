console.log("JS est chargé")
/**
Exercice 1

Gérer les controlles de la bare de droite

Commencer par déclarer les variables suivantes :

let rightBarUp = false
let rightBarDown = false

Grace au événements "keyup" et "keydown" sur le document faire en sorte de : 
- lors de l'appuie sur la touche "ArrowUp" changer la variable rightBarUp à true et lors
de son relachement la changer à false
- Lors de l'appuie sur la touche "ArrowDown" changer la variable rightBarDown à true et
lors de son relachement le changer à false
*/
let rightBarUp = false
let rightBarDown = false
const ball   = document.querySelector(".ball")
const barDiv   = document.querySelector(".bar")
const g_tailleBall   =  ball.offsetWidth
//const g_maxHaut   = barDiv.clientHeight
const g_HauteurRaquette = barDiv.clientHeight
const g_largeurRaquette = barDiv.clientWidth

const g_maxBas   =  document.documentElement.clientHeight - g_HauteurRaquette
const g_minHaut   = 0
const g_ligneBarDroit =  document.documentElement.clientWidth-g_largeurRaquette-barDiv.clientWidth

const g_ligneBarGauche =  barDiv.offsetWidth+ g_largeurRaquette
const rightBarDiv     = document.querySelector(".bar.right")
const leftBarDiv     = document.querySelector(".bar.left")


const g_pas   = 4
const g_minBallDroite   = 0
const g_minBallhaut   = 0
const g_maxBallDroite   =  document.documentElement.clientWidth - g_tailleBall
const g_maxBallhaut   =  document.documentElement.clientHeight - ball.offsetHeight


const pongTitre = document.querySelector(".pong-title")
let sensX = 1 
let sensY = 1 

let leftScore = 0 
let rightScore = 0 


const g_nbTour = 1000



function functionKeyDown_1 (event) {
  event.preventDefault()            // permet d'afficher les touche spéciaux (tab, escape etc.)
  if   (event.key === "ArrowUp")
    rightBarUp = true
  if   (event.key === "ArrowDown")
    rightBarDown = true
  
//  console.log (`rightBarUp : ${rightBarUp} rightBarDown : ${rightBarDown}`)
}

function functionKeyUp_2 (event) {
  
  if   (event.key === "ArrowUp")
    rightBarUp = false
  if   (event.key === "ArrowDown")
    rightBarDown = false
//  console.log (`rightBarUp : ${rightBarUp} rightBarDown : ${rightBarDown}`)
}

//document.addEventListener("keydown", functionKeyDown )
//document.addEventListener("keyup", functionKeyUp )





/**
Exercice 2

Gérer les controlles de la bare de gauche

Commencer par déclarer les variables suivantes :

let leftBarUp = false
let leftBarDown = false

Grace au événements "keyup" et "keydown" sur le document : 
- lors de l'appuie sur la touche "z" changer la variable leftBarUp à true et lors
de son relachement la changer à false
- Lors de l'appuie sur la touche "s" changer la variable leftBarDown à true et
lors de son relachement le changer à false
*/

let leftBarUp = false
let leftBarDown = false


function functionKeyDown (event) {
  event.preventDefault()            // permet d'afficher les touche spéciaux (tab, escape etc.)
  
  switch (event.key) {
  case "ArrowUp":   rightBarUp = true;
                    break;
  case "ArrowDown": rightBarDown = true;
                    break;
  case "z":       leftBarUp = true;
                    break;
  case "s":       leftBarDown = true;
                    break;
  default:
    break; 
  }
  console.log (`r-Up : ${rightBarUp} r-Down : ${rightBarDown} l-Up : ${leftBarUp} l-Down : ${leftBarDown}`)
}

function functionKeyUp (event) {
  
  switch (event.key) {
  case "ArrowUp":   rightBarUp = false;
                    break;
  case "ArrowDown": rightBarDown = false;
                    break;
  case "z":         leftBarUp = false;
                    break;
  case "s":         leftBarDown = false;
                    break;
  default:
    break; 
  }
  console.log (`r-Up : ${rightBarUp} r-Down : ${rightBarDown} l-Up : ${leftBarUp} l-Down : ${leftBarDown}`)
}

document.addEventListener("keydown", functionKeyDown )
document.addEventListener("keyup", functionKeyUp )




/**
Exercice 3

Mettre en place une GameLoop (boucle de jeux)

Créer une fonction "gameLoop" et placer à l'intérieur :

console.log(rightBarUp, rightBarDown);
console.log(leftBarUp, leftBarDown);

Documentez-vous sur la fonction "requestAnimationFrame" et
faire en sorte que la fonction "gameLoop" se lance
undéfiniment !

Indice : Cette fonction permet de créer une boucle infinie
nous permettant de gérer un jeux videos !
*/

// voir plus bas






  
  /*
Exercice 4

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
*/


function versleHaut(BarDiv){
  const positionVertical= BarDiv.offsetTop
  const tailleHauteur   = BarDiv.clientHeight
  const hauteurEcran    = document.clientHeight
  if (BarDiv.style.top =="")
    BarDiv.style.top = `${BarDiv.offsetTop}px`

  let nouveauPosition = BarDiv.offsetTop  - g_pas
  if (nouveauPosition < g_minHaut)
    nouveauPosition = g_minHaut;
  BarDiv.style.top =  `${nouveauPosition}px`
 console.log (` rightBarDiv.style.top ${BarDiv.style.top} `)
  
}

function versleBas(BarDiv){
  const positionVertical= BarDiv.offsetTop
  const tailleHauteur   = BarDiv.clientHeight
  const hauteurEcran    = document.clientHeight
  if (BarDiv.style.top =="")
    BarDiv.style.top = `${BarDiv.offsetTop}px`

  let nouveauPosition = BarDiv.offsetTop  +g_pas
  
    if (nouveauPosition > g_maxBas){
      nouveauPosition = g_maxBas;  
    }
    
  BarDiv.style.top =  `${nouveauPosition}px`
 console.log (` rightBarDiv.style.top ${BarDiv.style.top} `)
  
}

function moveRightBar(){
  
  if (rightBarUp===true)
    versleHaut(rightBarDiv)
  if (rightBarDown===true)
    versleBas(rightBarDiv)


}


function moveLeftBar(){

  if (leftBarUp===true)
    versleHaut(leftBarDiv)
  if (leftBarDown===true)
    versleBas(leftBarDiv)


}


/*
Exercice 5

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
*/

/*
Exercice 6

Bouger la balle !

Créer une fonction "moveBall", placé le code
de déplacement de la balle à l'intérieur (la balle rebondit sur
les murs et les barres) :)

Lancer cette fonction dans la fonction "gameLoop" :)
*/

function tapeBare(){
  
	if (sensX === 1){
		if (ball.offsetTop >= rightBarDiv.offsetTop){
			console.log (`* ${sensX}`);
			// console.log (`**** ball.offsetTop ${ball.offsetTop} rightBarDiv.offsetTop ${rightBarDiv.offsetTop}`);
			if    ( ball.offsetTop <= rightBarDiv.offsetTop+g_HauteurRaquette){
				console.log (`** ${sensX}`);
				// console.log (`**** ball.offsetTop ${ball.offsetTop} + raquette ${rightBarDiv.offsetTop+g_HauteurRaquette}`);
					if (ball.offsetLeft+ g_tailleBall >= g_ligneBarDroit)	{
							sensX = -1 
							console.log (`*** ${sensX}`);
					}
			}
		}
	}
	else{
    if (ball.offsetTop  >= leftBarDiv.offsetTop)
    {
			console.log (`-** ${sensX}`);

			console.log (`**** ball.offsetTop ${ball.offsetTop} leftBarDiv.offsetTop ${leftBarDiv.offsetTop}`);
			if    ( ball.offsetTop <= leftBarDiv.offsetTop+g_HauteurRaquette) 
			{
				console.log (`-*** ${sensX}`);
				if (ball.offsetLeft <= g_ligneBarGauche)
				{
						sensX = 1 
						console.log (`-**** ${sensX}`);

				}
			}
    
    }
	
	}


}

//---------------------------------------------------------------

function deplacementX(){
//  const positionY= ball.offsetTop
  

  let nouveauPosition = ball.offsetLeft  + (g_pas * sensX)
  
	if (sensX ===-1)	{
		if (nouveauPosition < g_minBallDroite){
			nouveauPosition = g_minBallDroite;
			sensX = sensX * -1 ; 
			leftScore ++;
      pongTitre.innerText = `${leftScore}  : ${rightScore}`
		}
	
	}
	else{
		if(   nouveauPosition > g_maxBallDroite)
		{
			nouveauPosition = g_maxBallDroite;
			rightScore ++;
			sensX = sensX * -1 ; 
      pongTitre.innerText = `${leftScore}  : ${rightScore}`

    }
	}

  ball.style.left =  `${nouveauPosition}px`

	// console.log (`x ball.style.left : ${ball.style.left}`)

}
//---------------------------------------------------------------
function deplacementY(){

  let nouveauPosition = ball.offsetTop  + (g_pas * sensY)
  if (nouveauPosition < g_minBallhaut){
    nouveauPosition = g_minBallhaut;
    sensY = sensY * -1 ; 
  }
  else if( nouveauPosition > g_maxBallhaut)
  {
    nouveauPosition = g_maxBallhaut;
    sensY = sensY * -1 ; 
  }
  ball.style.top =  `${nouveauPosition}px`
  console.log (`y ball.style.top : ${ball.style.top}`)

}

//---------------------------------------------------------------


function moveBall(){
  
  deplacementX()
  deplacementY()
  tapeBare()
}
//---------------------------------------------------------------

function action (){
  
  moveRightBar()
  moveLeftBar()
  moveBall()
}

//---------------------------------------------------------------


let  timerCount = 0;
function initVariable() {
  min=0
  max= 1
  const randX = Math.floor(Math.random() * (max - min + 1) + min);
  const randY = Math.floor(Math.random() * (max - min + 1) + min);
  
  if (randX === 0){ sensX = -1} else{ sensX = 1 }
  if (randY === 0){ sensY = -1} else{ sensY = 1 }

  min=0
  max= g_maxBallDroite
  const randLeft = Math.floor(Math.random() * (max - min + 1) + min);
  min=0
  max= g_maxBallhaut
  const randTop = Math.floor(Math.random() * (max - min + 1) + min);

  
  ball.style.left = randLeft
  ball.style.top = randTop
    


}

function initVariableTest() {

    sensX = -1 
    sensY = 1 
    let posX = g_ligneBarGauche+ g_tailleBall-5
    ball.style.left = `${posX}px`
    let posY = document.documentElement.clientHeight/2
    // let posY = 308
    
    ball.style.top = `${posY}px`

}
// ---------------  main loop ------------------------------------------

function gameLoop() {

  action()
  
  console.log(`timercount ${timerCount} sensX ${sensX}`)
  timerCount++
  if (timerCount< g_nbTour)
      window.requestAnimationFrame(gameLoop)
  
}



initVariable()
//initVariableTest()
window.requestAnimationFrame(gameLoop)




function testTapeBar()
{

    sensX = -1 
    sensY = 1 
     
    const zrightBarDiv= document.querySelector(".bar.right")
    const zleftBarDiv = document.querySelector(".bar.left")

    const barHauteur = zrightBarDiv.offsetHeight;
    const barLargeur = zrightBarDiv.offsetWidth;
    const positionBarX= zrightBarDiv.style.left;
    // const positionRaquetteRight = document.documentElement.clientWidth-zrightBarDiv.offsetWidth-ball.offsetWidth-zrightBarDiv.clientWidth-ball.clientWidth
    const positionRaquetteRight = document.documentElement.clientWidth-zrightBarDiv.offsetWidth-zrightBarDiv.clientWidth
    const positionVerticale = zrightBarDiv.offsetTop
    const tailleHauteur = zrightBarDiv.clientHeight
    const ecranHauteur = document.documentElement.clientHeight
    zrightBarDiv.style.top =`${(ecranHauteur/2)}-${tailleHauteur/2}px` 

    // const g_tailleBall   =  ball.offsetWidth
    // const g_maxBallDroite   =  document.documentElement.clientWidth - g_tailleBall
    
    //    posX = g_maxBallDroite -((g_nbTour/2)  *g_pas) 
    // posX = g_maxBallDroite -g_ligneBarGauche;
    console.log(`doc clientWidth ${document.documentElement.clientWidth}`)
    console.log(`zrightBarDiv offsetWidth ${zrightBarDiv.offsetWidth}`)
    console.log(`ball offsetWidth ${ball.offsetWidth}`)
    console.log(`zrightBarDiv clientWidth ${zrightBarDiv.clientWidth}`)
    console.log(`ball clientWidth ${ball.clientWidth}`)
    console.log(`positionRaquetteRight ${positionRaquetteRight}`)

    
    // posX = positionRaquetteRight-ball.clientWidth
    // let posX = positionRaquetteRight-40
    let posX = g_ligneBarGauche +1
    // let posX = 1141
    console.log(`posX ${posX}`)

    
    // posY =  (g_ligneBarDroit +((g_nbTour/2)  *g_pas) )/2
 
    ball.style.left = `${posX}px`

    console.log(`ball ${ball.offsetLeft}`)


    // Obtenez sa position vertical avec "element.offsetTop" (pixel)
    // - Obtenez sa taille en hauteur avec "element.clientHeight" (pixel)
    // - Obtenez la hauteur de l'écran avec "document.documentElement.clientHeight" (pixel)

    posY =    positionVerticale+10
    // let posY = 304
    ball.style.top = `${posY}px`
    // moveBall()

    // zrightBarDiv.style.left = "200px"
    console.log (`1 sensX : ${sensX} posY ${ball.style.left} ${g_ligneBarGauche}`)
    tapeBare()
    console.log (`2 sensX : ${sensX} posY ${ball.style.left}${g_ligneBarGauche}`)
    
    // let zPosY = ball.style.left
    // let zPosX = ball.offsetLeft
    posX = g_ligneBarGauche

    //  posX = zPosX -1 
    // posY = zPosY 

    ball.style.left = `${posX}px`
    // console.log (` zPosX ${zPosX} posX ${posX}`)
    console.log (`3 sensX : ${sensX} posY ${ball.style.left} ${g_ligneBarGauche}`)

    tapeBare()
    // console.log (` zPosX ${zPosX} posX ${posX}`)
    console.log (`4 sensX : ${sensX} posY ${ball.style.left}${g_ligneBarGauche}`)


    posX = g_ligneBarGauche-2


    //  posX = zPosX -1 
    // posY = zPosY 

    ball.style.left = `${posX}px`
    // console.log (` zPosX ${zPosX} posX ${posX}`)
    console.log (`5 sensX : ${sensX} posY ${ball.style.left} ${g_ligneBarGauche}`)

    tapeBare()
    // console.log (` zPosX ${zPosX} posX ${posX}`)
    console.log (`6 sensX : ${sensX} posY ${ball.style.left}${g_ligneBarGauche}`)



    // console.log (`zrightBarDiv.style.top : ${zrightBarDiv.style.top}`)
     
    // console.log (`zrightBarDiv.style.top : ${zrightBarDiv.style.top}`)
    // console.log (`positionVerticale : ${positionVerticale}`)
    // console.log (`tailleHauteur : ${tailleHauteur}`)
    // console.log (`ecranHauteur : ${ecranHauteur}`)


    // console.log (`ball.style.left : ${ball.style.left}`)
    // console.log (`ball.style.top  : ${ball.style.top}`)
    // console.log (`barHauteur  : ${barHauteur}`)
    // console.log (`barLargeur  : ${barLargeur}`)
    // console.log (`positionBarX  : ${positionBarX}`)
    // console.log (`B.offsetWidth  : ${zrightBarDiv.offsetWidth}`)
    // console.log (`ball.offsetWidth  : ${ball.offsetWidth}`)
    // console.log (`clientWidth  : ${document.documentElement.clientWidth}`)
    // console.log (`positionRaquetteRight  : ${positionRaquetteRight}`)
     
// console.log (`document.documentElement.clientWidth : ${document.documentElement.clientWidth}`)
// console.log (`g_ligneBarDroit : ${g_ligneBarDroit}`)
  //ball.offsetTop = rightBarDiv.offsetTop+1

  //ball.offsetLeft = g_ligneBarDroit rightBarDiv.offsetTop+1

/*  
  if (ball.offsetTop >= 
      && 
      ball.offsetTop <= rightBarDiv.offsetTop-g_HauteurRaquette
      &&
      ball.offsetLeft + g_ballSize >= g_ligneBarDroit)
*/

}


//  testTapeBar()