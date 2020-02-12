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

}


//Create New Elements

//New Images
let transormImg = document.createElement('img').src = '/img/transforming.gif';
let crazyAzzBusImg = document.createElement('img').src = '/img/crazyassbus.gif';

//Set width
transormImg.style.width = '';
crazyAzzBusImg.style.width=

//Get Parent Image

let softyIMG = document.querySelector('[alt~=bus]');

//Animate Parent Image



//New Button

let transformBtn = document.createElement('div');




//Event Handlers

