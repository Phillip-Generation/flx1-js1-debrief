//# flx1-js1-debrief

// 1. GenBuzz 

var myNumber = prompt("Please enter a whole number");
myNumber = parseInt(myNumber);

// Check myNumber is type Number
if (typeof myNumber !== 'number') {
  console.log('This is not a number');
}
// Check myNumber factor 3
else if (myNumber % 3 == 0) {
  console.log('Gen');
  let modThree = true;
}
// Check myNumber factor 5
else if (myNumber % 5 == 0) {
  console.log('Buzz');
  let modFive = true;
}
// Check myNumber factors of 3 and 5 
else if (typeof myNumber == 'number' && modThree && modFive) {
  console.log('GenBuzz');

}
// Print myNumber if not either factor 3 or 5 
else
  console.log(myNumber);

//Use a swtich statement to print the price of the each item in the store to the console.

var inventoryItem = prompt("Check inventory Items: Shoes, Jeans, Hat, or Socks");


  switch (inventoryItem) {
    case 'Shoes':
      console.log('Shoes are $50');
      break;
    case 'Jeans':
      console.log('Jeans are $25');
      break;
    case 'Hat':
      console.log('Hats are $12');
      break;
    case 'Socks':
      console.log('Socks are $2');
      break;
      // expected output: "Shoes are $50"
    default:
      console.log(`Invalid item: ${inventoryItem}.`);
  }
  

// Print a random integer (whole number) between 50 and 100 to the console
let min = 50;
let max = 100;

console.log(Math.floor(Math.random() * (max - min) + min));