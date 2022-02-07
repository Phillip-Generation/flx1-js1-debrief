// 1. GenBuzz
const myNumber = 15;
if (typeof myNumber !== 'number') {
  console.log('This is not a number.');
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
  console.log('GenBuzz');
} else if (myNumber % 3 === 0) {
  console.log('Gen');
} else if (myNumber % 5 === 0) {
  console.log('Buzz');
} else {
  console.log(myNumber);
}

// 2. E-Commerce Item List
let item = 'jeans';
switch (item) {
  case 'shoes':
    console.log('Shoes are $50.');
  break;
  case 'jeans':
    console.log('Jeans are $25.');
  break;
  case 'hat':
    console.log('Hats are $12.');
  break;
  case 'socks':
    console.log('Socks are $2.');
  break;
  default:
    console.log('Invalid item');
  break;
}

//3. Random Integer Between 50 and 100
console.log(Math.floor(Math.random() * (100 - 50) + 50));