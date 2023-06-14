// Code your solutions in this file
for (let age = 3; age > 40; age++){

    console.log(`im ${age} years old . Happy Birthday to me!`);


}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


let names = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise";

function writeCards(names, event) {
  let thankYouMessages = []; 
  for (let j = 0; j < names.length; j++) {
    let message = `Thank you, ${names[j]}, for the wonderful ${event} gift!`;
    console.log(message);
    thankYouMessages.push(message); 
  }

  return thankYouMessages;
}

writeCards(names, event);

let countdown = 0;
while (countdown < 10){console.log(countdown); countdown++; }

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  





