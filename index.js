var myNumber = 9;
console.log(myNumber);

if (myNumber == "number") {
  console.log("This is not a number");
} else if (myNumber % 3 == 0) {
  console.log("Gen");
} else if (myNumber % 5 == 0) {
  console.log("Buzz");
} else
if (myNumber % 3 == 0 && myNumber % 5 == 0) {
  console.log("Genbuzz");
}
else console.log(myNumber)


let storeItem = "Shoes";

switch (storeItem) {
  case "shoes":
    console.log("shoes are $50");
    break;
  case "jeans":
    console.log("jeans are $25");
    break;
  case "hat":
    console.log("hat are $12");
    break;
  case "sockes":
    console.log("sockes are $2");
    break;
  default:
    console.log("Invalid item");
    break;
}