
let obtainedMarks = 300;
let division = (obtainedMarks / 500) * 100;
if (obtainedMarks < 0 || obtainedMarks > 500) {
    console.log("please enter obtained marks between 0 to 500 only");
}
else if (division >= 80) {
    console.log("first division");
}
else if (division >= 60) {
    console.log("second division")
}
else if (division >= 45) {
    console.log("third division")
}
else {
    console.log("fail");

}
//-------------------------------------------------------------------------

// calculate electricity bill

// let unitConsumed = 102;
// //let unitPrice=(20/80)*unitConsumed;
// if (unitConsumed <= 20) {
//     console.log("your billis rs. 80")
// }
// else if (unitConsumed >= 20 && unitConsumed <= 30) {
//     console.log(`your bill is ${(unitConsumed - 20) * 7.5 + 80}`)
// }
// else if (unitConsumed >= 30 && unitConsumed <= 50) {
//     console.log(`your bill is ${(unitConsumed - 20) * 8.6 + 80}`)
// }
// else if (unitConsumed >= 50 && unitConsumed <= 200) {
//     console.log(`your bill is ${(unitConsumed - 20) * 9.5 + 80}`)
// } 
// else {
//     console.log(`your bill is ${(unitConsumed - 20) * 11 + 80}`)
// }
let consumedUnit =1;
let differenceUnit = consumedUnit- 20;
let minPrice = 80;
let totalBill;
if (consumedUnit <= 20);
totalBill = minPrice;
if (consumedUnit >= 20 && consumedUnit <= 30)
    totalBill = differenceUnit * 7.5 + minPrice
if (consumedUnit >= 30 && consumedUnit <= 50);
totalBill = differenceUnit* 8.6 + minPrice;
if (consumedUnit>=50 && consumedUnit<=100)
    totalBill=differenceUnit*9.5+minPrice;
else
totalBill=differenceUnit*11+minPrice;
console.log(`Your total Bill is:${totalBill}`);





