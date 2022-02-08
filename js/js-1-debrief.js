//# flx1-js1-debrief

// 1. GenBuzz 

const myNumber = 10;
let modThree = false;
let modFive = false;
// Check myNumber is type Number
if (typeof myNumber !== 'number') {
  console.log('This is not a number');
}
// Check myNumber factor 3
else if (myNumber % 3 == 0) {
  console.log('Gen');
  modThree = true;
}
// Check myNumber factor 5
else if (myNumber % 5 == 0) {
  console.log('Buzz');
  modFive = true;
}
// Check myNumber factors of 3 and 5 
else if (typeof myNumber == 'number' && modThree && modFive) {
  console.log('GenBuzz');
  modThree = true;
  modFive = true;
}
// Print myNumber if not either factor 3 or 5 
else
  console.log(myNumber);

//Use a swtich statement to print the price of the each item in the store to the console.

  const expr = 'Shoes';
  switch (expr) {
    case 'Shoes':
      console.log('Shoes are $50');
      break;
    case 'Jeans':
      console.log('Jeans are $25');
    case 'Hat':
      console.log('Hats are $12');
      break;
    case 'Socks':
      console.log('Socks are $2');
      break;
      // expected output: "Shoes are $50"
    default:
      console.log(`Invalid item: ${expr}.`);
  }
  

// Print a random integer (whole number) between 50 and 100 to the console
let min = 50;
let max = 100;

console.log(Math.floor(Math.random() * (max -min) + min));