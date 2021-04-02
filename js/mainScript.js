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
    generateHTML will extract the text (random cat fact) and post it to the <p> in home.html
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



// Form Validation

// Prevent the form from submitting
function validateForm(submit) {
    submit.preventDefault();
}

// Refactoring the message code
function errorMessageUpdater(errorID) {
    document.getElementById(errorID).textContent = message;
}

// Preventing Empty Fields AND Minimum 4 Character Checks
function validation(myEvent) {
    let element = myEvent.target;

    // Username Validation
    if(element.id == "username") {
        let usernameValue = element.value;
        if(usernameValue.length === 0)
        {
            message = "Username can't be blank!";
            errorMessageUpdater('errorUsername');
        }
        else if(usernameValue.length > 0 && usernameValue.length < 4)
        {
            message = "Username length must be longer than 4 characters!";
            errorMessageUpdater('errorUsername');
        }
        else{
            message = "";
            errorMessageUpdater('errorUsername');
        }
    }

    // Password Validation
    else if(element.id == "password") {
        let passwordValue = element.value;
        if(passwordValue.length === 0)
        {
            message = "Password can't be blank!";
            errorMessageUpdater('errorPassword');
        }
        else if(passwordValue.length > 0 && passwordValue.length < 4)
        {
            message = "Username length must be longer than 4 characters!";
            errorMessageUpdater('errorPassword');
        }
        else{
            message = "";
            errorMessageUpdater('errorPassword');
        }
    }

    // Confirm Password Validation
    else if(element.id == "confirmPassword") {
        let confirmPasswordValue = element.value;
        if(confirmPasswordValue.length === 0)
        {
            message = "Password Confirmation can't be blank!";
            errorMessageUpdater('errorConfirmPassword');
        }
        else{
            message = "";
            errorMessageUpdater('errorConfirmPassword');
        }
    }
}


window.onload = function() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    document.getElementById('submitButton').addEventListener('submit', validateForm);
    usernameInput.addEventListener("keyup", validation);
    passwordInput.addEventListener("keyup", validation);
    confirmPasswordInput.addEventListener("keyup", validation);
}

