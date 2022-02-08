/* 1. GenBuzz */

let myNumber= 15;

if(typeof myNumber!== Number){
  console.log("This is not a number");
}
else{
console.log(typeof myNumber);
}

if((myNumber%3 && myNumber%5)==0){
    console.log("GenBuzz");
}
else if (myNumber%5 == 0){
    console.log("Buzz");
}
else if(myNumber%3 ==0){
    console.log("Gen");
}
else{
    console.log(myNumber);
}


/* E-Commerce Item List */

let item = "Shoes";
let itemPrice = "";

switch(item){
 case 'Shoes':
     itemPrice = "Shoes are $50";
     break;

 case 'Jeans':
     itemPrice = "Jeans are $25";
     break;

 case 'Hat':
     itemPrice = "Hat is $12";
     break;

 case 'Socks':
    itemPrice = "Socks are $12";
    break;

 default:
     itemPrice = "Invalid item";
     break;
}
console.log(itemPrice);

/* Printing random integer between 50 and 100 */

let randomNumber = Math.floor(Math.random()*100);

if(randomNumber> 50){
 console.log(randomNumber);
}