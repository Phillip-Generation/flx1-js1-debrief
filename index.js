//   1- GenBuzz 
let myNumber = 61;
console.log(typeof myNumber);
if (typeof myNumber !== 'number') {
    console.log('This is not a number');
} else if (myNumber % 3 === 0) {
    console.log('Gen');

} else if (myNumber % 5 === 0) {
    console.log('buzz');
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
} else {
    console.log(myNumber);
}


//E-Commerce Item list
let item = 'Shoes';
switch (item) {
    case 'Shoes':
        console.log('Shoes are $ 50.00');
        break;
    case 'Jeans':
        console.log('Jeans are $ 25.00');
        break;
    case 'Hat':
        console.log('Hat is $ 12.00');
        break;
    case 'Socks':
        console.log('Socks are $ 2.00');
        break;
    default:
        console.log('Invalid item');
        break;

}

//Print a random integer (whole number) between 50 and 100 to the console

console.log(Math.floor((Math.random() * (100 - 50) + 50)));