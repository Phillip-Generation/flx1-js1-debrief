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
else if (typeof myNumber == 'number' && myNumber % 3 == 0) {
  console.log('Gen');
  modThree = true;
}
// Check myNumber factor 5
else if (typeof myNumber == 'number' && myNumber % 5 == 0) {
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
