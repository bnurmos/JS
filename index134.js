//Ex134 Don't work the last part
//Iterate over the numbers array and add all numbers items
//On each iteration show the partial result
//If the final result equals 500500 then show the following output: Good job!!!
//Else show: Take a look to see if something is wrong
let numbers = [];
for ( let i=1; i<=1000; i++){
    numbers[i-1]=i;
} 
console.log(numbers);

let sum=0;
numbers.forEach((n)=>{
    sum=sum+n;
    console.log(sum);
})
    if (sum == 500500){
        console.log("Good job!!");
    } else {
        console.log(" Take a look to see if something is wrong");
    }

