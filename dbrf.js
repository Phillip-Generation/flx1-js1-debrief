//GenBuzz
let myNumber = '9';
console.log(typeof myNumber);
myNumber!=='number'??console.log('this is not a number');

myNumber =9;
if(myNumber%3===0&&myNumber%5===0){
    console.log('GenBuzz');
}else if(myNumber%5===0){
    (console.log('Buzz'));
}else if(myNumber%3===0){
    (console.log('Gen'));
}
else{
    console.log(myNumber);
}

//E-commerce Item List
let storeItem ='shoes'
switch(storeItem){
    case'shoes':console.log('shoes are $50');
    break;
    case'jeans':console.log('jeans are $25');
    break;
    case'hat':console.log('hats are $12');
    break;
    case 'socks':console.log('socks are $2');
    break;
}
//some maths
console.log(Math.floor(Math.random()*(100 - 50)+50));