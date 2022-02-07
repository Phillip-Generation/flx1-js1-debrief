let myNumber = 19;

if (typeof myNumber !== 'number') {
    console.log('This is not a number')
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz')
} else if (myNumber % 3 === 0) {
    console.log('Gen')
} else if (myNumber % 5 === 0) {
    console.log('Buzz')
} else {
    console.log(myNumber)
}