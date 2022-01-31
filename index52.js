let firstNumber, secondNumber;
firstNumber = 10;
secondNumber = 15;
if (firstNumber > secondNumber){
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
}
else {
    console.log(`Number ${secondNumber} is bigger than ${firstNumber}`)
}

///Ex_53

let number = 11;
if (number % 2 == 0) {
    console.log(`${number} is an even number`)
}
else {
    console.log(`${number} is an odd number`) 
}

//Ex_54

let username = "pepe2017";
let password = 123456;
if (username == "pepe2017" && password == 12345){
    console.log("Logged in username, show user home page");
} 
else {
    console.log("Sorry, there has been a problem, please try it again.");

}