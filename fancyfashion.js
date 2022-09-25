//Tweak an element: When using the DOM in your script to access an HTML element, whether it’s an <li> element or the entire <body> element, 
//you also have access to all of that element’s properties.
//This includes the ability to modify the contents of the element as well as its attributes and properties, 
//which can range from modifying the text inside a <p> element to assigning a new background color to a <div>. 
//For example, the .innerHTML property allows you to access and set the contents of an element.
//I will change the header2 of "having trouble what to wear" to "haing trouble DECIDING what to wear":
//Code such as the queryselector() allows me to select a SPECIFIC element, versus the body selector which selects all,
//as in: document.body.innerHTML = '<h2>This is a heading</h2>'; NOW, I'll use the getElementByClass() and zeroth [0] to make change

//document.getElementsByClassName('service')[0].innerHTML = 'Having trouble deciding what to wear?';
//NOTE: the code above changed the sentence, but wiped out everything in that div and disabled the css for that div!

//I will attempt to change the background color to the service div:

//document.getElementsByClassName('service').style.backgroundColor = '#201f2e'; DID NOT WORK EITHER.

//TRAVERSING THE DOM: dealing with parent and child nodes.
//const thirteen = document.body.children[0];
//thirteen.innerHTML = 'Having trouble deciding what to wear?'; worked, but disabled my menu bar and its css!

//CREATE AND INSERT AN ELEMENT: Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones.
//The .createElement() method creates a new element based on the specified tag name passed into it as an argument. 
//However, it does not append it to the document. It creates an empty element with no inner HTML.

//let newSentence = document.createElement('h2');
//newSentence.class = 'wardrobe';
//newSentence.innerHTML = 'Having trouble deciding what to wear?';
//document.getElementsByClassName('service').appendChild(newSentence); - DID NOT WORK!!!

//CLICK INTERACTIVITY: You can add interactivity to DOM elements by assigning a function to run based on an event. 
//Events can include anything from a click to a user mousing over an element. 
//The .onclick property allows you to assign a function to run on when a click event happens on an element(IT WORKS but does not keep it black):

//let element = document.querySelector('.button li a');
//function turnButtonBlack(){
//element.style.backgroundColor = 'black';
//}
//element.onclick = turnButtonBlack;

//I turned to Colt's Udemy course, and followed along with the different addEventListener commands. Via the "addEventListner"
//we used one method, addEventListener, and attached multiple different addEventListeners.
//multiple 
//NOTE: FIND OUT HOW TO "STYLE" POP UP MESSAGE ALERT BOX

const item = document.querySelector('.button li a');
item.addEventListener('click', function(){
   alert('GOT IT!'); 
});

item.addEventListener('mouseover', function(){
    item.innerText = 'GET READY!';
    
});

item.addEventListener('mouseout', function(){
    item.innerText = 'CLICK HERE';
});



//Colt mentioned the 'scroll', where things will change based on scrolling. He also mentioned "throttling" whereas the action attached
//to the scroll will only act once the scroll goes only so far. SCROLLING could be the way to change menu bar background color for 
//QUIET MOMENTUM.

//Colt taught a lesson on the "impossible button" - when will this be useful for anything??


function oldLa(){
    document.querySelector('#changeh1').src='./images/losangeleswoman1.jpg';
}

function newLa(){
    document.querySelector('#changeh1').src='./images/losangeleswoman.jpg';
}


function newGirl() {
    document.querySelector('#changeher').src='./images/fashion week1.jpg';
    }
    
function oldGirl() {
document.querySelector('#changeher').src='./images/fashion week2.jpg';
    }

    function newChick() {
        document.querySelector('#changeher1').src='./images/ff2.jpg';
        }
        
    function oldChick() {
    document.querySelector('#changeher1').src='./images/ff1.jpg';
        }

        function newPhot() {
            document.querySelector('#changeher2').src='./images/welldressed3.jpg';
            }
            
        function oldPhot() {
        document.querySelector('#changeher2').src='./images/welldressed2.jpg';
        
            }


//MOBILE MENU BUTTON

//const mobileMenu = document.querySelector('.mobile-button');

//const menuItems = document.querySelector('.drop-down');


function toggleMenu() {

    //const mobileMenu = document.querySelector('.mobile-button');

    const menuItems = document.querySelector('.drop-down');

        if(menuItems.style.display === 'none') {
            menuItems.style.display = 'block';
                 
        }

            else {
                menuItems.style.display = 'none';
            }


}














//function showMenu() {
    //menuItems.style.display ='block';
    
    //}
    
    //mobileMenu.addEventListener('click', showMenu);

    
//function hideMenu() {
    //menuItems.style.remove ='none';
//}

//mobileMenu.addEventListener('click', hideMenu);


    
    
    