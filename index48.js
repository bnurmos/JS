let message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = message.substr(0,4);
pi = parseFloat(pi);
let answerToLife = message.substr(29,2);
console.log(answerToLife);
answerToLife = parseInt(answerToLife);
let result = pi + answerToLife;
console.log("result:", result);
// console.log(pi);
// console.log(answerToLife);
//result = toString(result); 

console.log(result, "is the result of adding pi and answerToLife");