'use strict'

function userName() {
    let name = prompt('What is your name?');
    console.log('Hello, ' + name);
    return name;
}

function greeting() {
    let time = prompt('What time is it? Hint: Military Time');
    let message;
    if (time <= 1100) {
        message = 'Good Morning, ';
    } else if (time <= 1800) {
        message = 'Good Afternoon, ';
    } else if (time <= 2400) {
        message = 'Good Evening, ';
    } else if (time > 2400) {
        message = 'Good morrow, ';
    } return message;
}

function olives() {
    let disposition = prompt('Do you like olives?');
    let reply;
    if (disposition.toLowerCase() == 'yes') {
        reply = 'Great! You love olives? ';
    } else if (disposition.toLowerCase() == 'no') {
        reply = 'So you do not love olives? You have more to learn! ';
    } else if (disposition.toLowerCase() == ' ') {
        reply = 'Unsure about olives? ';
    } return reply;
}

function guess() {
    let answer;

    do{
        answer = prompt('Guess a number between 1-5');
        if(answer != 5){
            alert('Close, but no olive! Try again!')
        } else{
            alert('That is right on the olive!');
        }
    }while(answer !=5)
}

guess();

function displayRating() {

    let output = '';
    let rating = prompt('Scale of 1-5 Olives, how happy are you with our service?');
    for(let i = 0; i < rating; i++){
        output = output + "<img class='olive' src='images/olove.png'/>";
    }
    return document.write(output);
}
