function add(numbers){
let sum = 0;
numbers.forEach(number=>{
    sum= sum+number;
})
return sum
}
console.log(add([1,2,3,4]));
console.log(add([1,2,3,4,5,6,7,8,9,10]));

