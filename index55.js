let firstNumber, secondNumber;
firstNumber = 10;
secondNumber = 15;
let message = (firstNumber > secondNumber)? `Number ${firstNumber} is bigger than ${secondNumber}` : `Number ${secondNumber} is bigger than ${firstNumber}`;
console.log(message);

///Ex_56

let number = 11;
let message2 = (number % 2 == 0) ? `${number} is an even number` : `${number} is an odd number`;
console.log(message2);

//Ex_57

let username = "pepe2017";
let password = 123456;
let message3 = (username == "pepe2017" && password == 12345)? "Logged in username, show user home page" : "Sorry, there has been a problem, please try it again.";
console.log (message3);