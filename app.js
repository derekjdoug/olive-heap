'use strict'

function userName(){
let name = prompt('What is your name?');
console.log('Hello, ' + name);
return name;
}

let time = prompt('What time is it? Hint: Military Time');
let message;

function greeting(){
  if(time <=1100){
    message = 'Good Morning, ';
} else if (time <= 1800){
    message = 'Good Afternoon, ';
} else if (time <=2400){
    message = 'Good Evening, ';
} else if (time >2400){
    message = 'Time does not exist,';
} return message;
}


let disposition = prompt('Do you like olives?');
let reply;

function olives(){
  if(disposition == 'yes'){
    reply = 'Great! You love olives? ';
} else if (disposition == 'no'){
    reply = 'So you do not love olives? You have more to learn! ';
} else if (disposition == ' '){
    reply = 'Unsure about olives?' ;
} return reply;
}

