// Your code goes here

function crazyAzzBus() {
        //Change Bg

 let bg = document.querySelectorAll('body, .footer, .main-navigation');

 for(let i = 0; i < bg.length; i++){

    bg[i].style.backgroundColor = 'black';


 }

            //Change Text Color

            //Select Text Type

//General Text
let txtCAB = document.querySelectorAll('p, h1, h2, h4, a');

for(let i = 0; i < txtCAB.length; i++){

    txtCAB[i].style.color = 'red';
    

}

//buttons
let txtCABBT = document.querySelectorAll('.btn');

for (let i = 0; i < txtCABBT.length; i++){


    txtCABBT[i].style.color = 'black';
    txtCABBT[i].style.background = 'red'

}



//Create New Elements

//New Images
let transormImg = document.createElement('img');
transormImg.src = '/img/cab.gif';

//Set width
transormImg.style.width = '1000px';


//Animate Parent Image


 source[0].replaceChild(transormImg, softyIMG);
  


}


//Get source of parent image

let source = document.querySelectorAll('.intro');

//Get Parent Image

let softyIMG = document.querySelector('[alt~=bus]');

//New Button

let transformBtn = document.createElement('button');

//updating button
transformBtn.textContent = "Bored?";


//Adding Button to html

function addCrazy(){

source[0].prepend(transformBtn)
}

setTimeout(addCrazy, 10000)


//Event Handlers

//Transform Page
transformBtn.onclick = crazyAzzBus;


//Transform Back

function reld() {

    location.reload();
}

transformBtn.addEventListener('dblclick', reld)

//Loading IMG

function loading(){

softyIMG.style.width = '1000px'
softyIMG.style.height= '300px'

softyIMG.src = '/img/crazyassbs.gif';

}
 
setTimeout(loading, 9000)


//Change Text

const cabTitle =  document.querySelector('.logo-heading');

const ponR = document.querySelector('.intro h2')

const hellY = document.querySelector('.text-content h2')

const restOfH2s = document.querySelectorAll('.text-content h2')

const nightmare = restOfH2s[1]

const pyP = document.querySelector('.content-destination h2')

const destiny = document.querySelectorAll('.destination h4')

const hotHeat = destiny[0]
const cBungee = destiny[1]
const eStreet = destiny[2]



//Draggable Content




cabTitle.addEventListener('dragend', function(event) {cabTitle.textContent = 'Crazy A** Bus'     
event.stopPropagation()
})



ponR.addEventListener("dragenter", function(event) {
  
      ponR.textContent = "Welcome to the point of no return!";
  });


  document.addEventListener("dragover", function(event) {
    event.preventDefault();
    event.stopPropagation()
  });

hellY.addEventListener('dragend', function(event) {hellY.textContent = "Hell Yeah! [H]"})
nightmare.addEventListener('dragend', function(event) {nightmare.textContent = 'Nightmares Await [N]'})
pyP.addEventListener('dragend', function(event) {pyP.textContent = 'Pick your poison [P]'})
hotHeat.addEventListener('dragend', function(event) {hotHeat.textContent = 'Scorching Heat [S]'})
cBungee.addEventListener('dragend', function(event) {cBungee.textContent = 'Cordless Bungee [C]'})
eStreet.addEventListener('dragend', function(event) {eStreet.textContent = 'Elm Street? [E]'})


