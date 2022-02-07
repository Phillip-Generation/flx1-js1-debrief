var myNumber = 9;

console.log(typeof myNumber);

if (myNumber == "string") {
  console.log("This is not a number");
} else if (myNumber % 3 == 0) {
  console.log("Gen");
} else if (myNumber % 5 == 0) {
  console.log("Buzz");
} else if (myNumber % 3 == 0 && myNumber == 5) {
  console.log("Gen Buzz");
} else console.log(myNumber);

const a = Math.floor(Math.random() * (100 - 60 + 1)) + 50;
console.log(a);

let storeItem = "shoes";

switch (storeItem) {
  case "shoes":
    console.log("Shoes are $50");
    break;
  case "jeans":
    console.log("Jeans are $25");
    break;
  case "hat":
    console.log("Hat is $12");
    break;
  case "socks":
    console.log("Socks are $2");
    break;
  default:
    console.log("Invalid item");
    break;
}
