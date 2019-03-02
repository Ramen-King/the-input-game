// Global variables ftw

let country1 = '';
let country2 = '';
let country3 = '';
let country4 = '';
let country5 = '';
let result = '';
let switched = false;
let heading = 'Unlock Me'; // What should the heading start out as?


// Set init to run when the window loads.
window.onload = init;
// need 5 more

// did any of the input match bestCountry?
// if that's true then push out the result

//first case is japan- as long as one of the inputs matches 'japan'  then result.

let countries = [
    'Japan', 
    'India', 
    'Yemen', 
    'Malaysia', 
    'Malta', 
    'America', 
    'China', 
    'Korea', 
    'Vietnam', 
    'Mexico'];


let japan = 1;
let denmark = 2;
let poland = 3;
let germany = 4;
let malta = 5;
let america = 6;
let china = 7;
let korea = 8;
let vietnam = 9;
let mexico = 10;

function init() {
    // Make sure we're dealing with a clean slate.
    reset();

    // Set event handlers.
    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput1);
    
    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput2);

    document.querySelector('#user-input3')
        .addEventListener('keyup', handleUserInput3);

    document.querySelector('#user-input4')
            .addEventListener('keyup', handleUserInput4);

    document.querySelector('#user-input5')
        .addEventListener('keyup', handleUserInput5);

    document.querySelector('#reset')
        .addEventListener('click', reset)

    document.querySelector('#switch')
        .addEventListener('click', switchGears)
}

function reset() {  
     country1 = '';
     country2 = '';
     country3 = '';
     country4 = '';
     country5 = '';
     result = '';

    document.querySelector('#user-input1').value = country1;
    document.querySelector('#user-input2').value = country2;
    document.querySelector('#user-input3').value = country3;
    document.querySelector('#user-input4').value = country4;
    document.querySelector('#user-input5').value = country5;

    
    // If you feel like it, you can comment out the five queries above and use the magical one below!
    // Feel free to ask how it works.

    // document.querySelectorAll('.input').forEach(function(node) { node.value = ''});

    document.querySelector('#result').innerText = result;
}

function switchGears() {
    // TODO: change the value:of 'switched' to the opposite of what it currently is
    // use ternary or case?
    if(switched) {
        heading = ''; // TODO: change the heading to whatever would be appropriate for YOUR app.
    } else {
        heading = ''; // TODO: change the heading to whatever would be appropriate for your OTHER app.
    }

    changeHeading();
}

function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}

function handleUserInput1(event) {
    let userInput = event.target.value;
    let country1 = countries[3]
    
    
    //console.log(country1);
}

function handleUserInput2(event) {
    let userInput = event.target.value;
    country2 = userInput ;
    console.log(country2);
}

function handleUserInput3(event) {
    let userInput = event.target.value;
    country3 = userInput;
    console.log(country3);
}   
function handleUserInput4(event) {
    let userInput = event.target.value;
    country4 = userInput;
    console.log(country4);
}
function handleUserInput5(event) {
    let userInput = event.target.value;
    country5 = userInput;
    console.log(country5);

}

function printResult() {
     result = 'Unlocked' 
     console.log(result);
     document.querySelector('#result').innerText = result;
}

