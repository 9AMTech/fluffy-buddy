//  Cat Fact Api Construction

// Creating the URL
const apiData = {
    url : 'https://cat-fact.herokuapp.com',
    request : '/facts/random',
    animal : '?animal_type=cat',
    amount : '&amount=1'
}   

// Refactoring URL by making the properties all the same type
const {url, request, animal, amount} = apiData

// Actually constructing the URL
const apiURL = `${url}${request}${animal}${amount}`

/*
    This block of code is to actually fetch and acquire the
    cat facts from      https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html
    it stores it in a promise using .then, if the fetch request was successful we store
    the data in fact.json(). If the fetch wasn't sucecssful it will show an error.
    Using .then again, we take the data in fact, and  run it through function generateHTML.
    generateHTML will extract the text (random cat fact) and post it to the <p> in index.html
    with the class name of fact.

*/
fetch(apiURL)
    .then( (fact) => {
        if(fact.ok){
            return fact.json()
        }
        throw new Error('Respone not ok.');
    })
    .then ( fact => generateHTML(fact))
    .catch ( error => console.error ('Error:', error))


const generateHTML = (info) => {
    console.log(info) 
    const HTML = `
        ${info.text}
    `

    const catFactSection = document.querySelector('.fact');
    catFactSection.innerHTML = HTML;
}


// Little Butters Funny Easter Egg
function wakeUpButters() {
    document.getElementById('butters').src = '../images/butters/awake.jpeg';
}

function sleepyButters() {
    document.getElementById('butters').src = '../images/butters/asleep.jpeg';
}

// Sign Up Page date.fns Logic

// Creating a new Day of the Week
// dddd pattern gives me the actual day -- Monday, Tuesday, Wednesday
var dayOfTheWeek = dateFns.format(new Date(), 'dddd');
document.getElementById('signUpGreeting').innerHTML = dayOfTheWeek;

// Creating a date to detect Morning / Afternoon
// A pattern gives me the time but in AM or PM
var AMPM = dateFns.format(new Date(), 'A');

// Mandatory While Loop to change the background color while it's the afternoon
if(AMPM === 'AM') {
    AMPM = 'Good Morning';
}
else {
    AMPM = 'Good Afternoon';
}

// Creating a new full format date
var date = dateFns.format(new Date(), "M-D-YYYY");

// Constructing the greeting message
const greetingMessage = AMPM + ' on this beautiful ' + dayOfTheWeek;
document.getElementById('signUpGreeting').innerHTML = '<p>' + greetingMessage + '</p><p>' + date +'</p>';


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("hidden-links");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }