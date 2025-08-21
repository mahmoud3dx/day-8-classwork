let name = prompt("What's your name?");
let age = parseInt(prompt("What's your age?"));

function legalAgeForDriving(num) {
    if(num >= 18) {
        alert("Hello " + name + ", " + "You can drive");
    }
    else if(num < 18) {
        alert("Hello " + name + ", " + "You're too young to drive");
    }
}


legalAgeForDriving(age);