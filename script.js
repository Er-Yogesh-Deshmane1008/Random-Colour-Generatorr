'use strict';

var colors = ['orange' ,'red', 'pink', 'skyblue', 'red', 'yellow', 'green', 'blue','violet','white'];
var len = colors.length -1;

var buttonControl = document.getElementById('btnn');
var spanControl = document.querySelector('.colour');

buttonControl.addEventListener('click',()=>{
   var index = generateRandomNumber();
   console.log(colors[index]);
  document.body.style.backgroundColor = colors[index];
  spanControl.textContent = colors[index];

})

function generateRandomNumber(){
   return Math.round(Math.random() * len);
}