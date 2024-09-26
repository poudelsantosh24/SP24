// const addNumbers=(a,b=0)=>{
//     const c=a+b;
//     return c;

// }
// const result=addNumbers(10);
// console.log(result);

// two types of scopes in js
//global scope example

// let x=10;
// let y=20;
// let z=null;
// const sumvalues=()=>{
// z=x+y;
// };
// sumvalues();
// console.log(z); //30

// write js function to get sum of the values of the array

const num1=[2,4,6,7,9]
const getsum=(arr)=>{
    let sum=0;
    for (let numb of arr){
        sum+=numb;
    }
    return sum;
}
let resultsum=getsum(num1);
console.log(resultsum);
