'use strict'

let name = prompt('What is your name?');
let time = prompt('What time is it? Hint: Military Time');
let message;

if(time <=1100){
    message = 'Good Morning!';
} else if (time <= 1800){
    message = 'Good Afternoon!';
} else if (time <=2400){
    message = 'Good Evening!';
} else if (time >2400){
    message = 'Time does not exist!';
}

document.write('Hello ' + name + '! ' + message);

console.log('Ryan look at this')