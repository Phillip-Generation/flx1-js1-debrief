//# flx1-js1-debrief

// 1. GenBuzz 

const myNumber = 10;
let modThree = false;
let modFive = false;

if (typeof myNumber !== 'number') {
  console.log('This is not a number');
}

else if (typeof myNumber == 'number' && myNumber % 3 == 0) {
  console.log('Gen');
  modThree = true;
}
else if (typeof myNumber == 'number' && myNumber % 5 == 0) {
  console.log('Buzz');
  modFive = true;
}

else if (typeof myNumber == 'number' && modThree && modFive) {
  console.log('GenBuzz');
  modThree = true;
  modFive = true;
}

else
  console.log(myNumber);
