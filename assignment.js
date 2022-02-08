let myNumber=19;
if(typeof myNumber !=='number') {
console.log("this is not a number");
} else if(myNumber%3==0) {
    console.log("gen");
    
}else if(myNumber%5==0) {
    console.log("buzz");
}else if(myNumber%3==0 && myNumber%5==0){
    console.log("GenBuzz");
}else{
    console.log("not the number");
}
//Ecommerce problem 2 using switch case:
let item='shoes';
switch (item) {
    case 'shoes':
     console.log("Shoes are 50$");
      break;
    case 'jeans':
      console.log("Jeans are 25$");
      break;
    case 'hat':
        console.log("hats are 12$");
        break;
    case 'socks':
    console.log("Socks are 2$");
    break;
    default :
    console.log("invalid Item");
}
//Random Number Generator-to print whole number between 50 and 100
let randomNumber=Math.floor(Math.random()*50) +50;
console.log(randomNumber);