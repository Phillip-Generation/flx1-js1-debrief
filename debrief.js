//GenBuzz

let myNumber = 32;
if (typeof myNumber !== 'number') {
  console.log('This is not a number');
} else if (myNumber%3 == 0 && myNumber%5 == 0) {
  console.log('GenBuzz');
} else if (myNumber%5 == 0) {
  console.log('Buzz');
}  else if (myNumber%3 == 0) {
  console.log('Gen');
} else {
  console.log(myNumber);
}
 

//E-Commerce Item list

let item = 'socks'

switch(item) {
  case 'shoes' :
    console.log('Shoes are $50');
    break;
  case 'jeans' :
    console.log('Jeans are $25');
    break;
  case 'hats' :
    console.log('Hats are $25' );
    break;
    case 'socks' :
      console.log('Socks are $2');
    break;
    default:
      console.log('Invalid Item');
     break;  
} 


//Random number generator

console.log(Math.floor(Math.random() * 50) + 50);































