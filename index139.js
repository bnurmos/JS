// //Ex_139 Didn't finish
//+Define a numbers array with values between 1000 and 1
// +Iterate over the numbers array and filter the following values creating new arrays for each type:
// +Even numbers and Odd numbers
// Show the last 10 odd numbers as output
// Show the first 10 even numbers as output
let numbers = [1,11,2222,3333,4444,6655,64,46,33,77,88,258,951,357,846];

const even = numbers.filter(function(num) {
  return num%2==0;
});
const odd = numbers.filter(function(num) {
    return num%2!=0;
  });
// for (step = numbers.length; step>=numbers.length-6; step--){
// console.log(numbers);
// }

console.log(odd); 
console.log(even);
console.log(numbers.slice(Math.max(numbers.length - 10, 0)));
console.log(numbers.slice(0,10));