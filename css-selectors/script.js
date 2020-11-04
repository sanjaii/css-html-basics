var myHeading= document.querySelector('h1');

myHeading.textContent='CSS Introduction';

document.querySelector('a').onclick=function(){
    alert("Clicked a Link");
}

var nameButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setName () {
    'use strict';
    var myName=window.prompt('Please enter the name');
    localStorage.setItem('n',myName);
    myHeading.textContent="CSS "+ myName;

}

if (!localStorage.getItem('n')) {
    setName();

} else{
    var storedName= localStorage.getItem('n');
    myHeading.textContent='CSS '+ storedName;
}

nameButton.onclick= function(){
    'use strict';
    setName();
};
