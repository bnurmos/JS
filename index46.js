// Define a userAndPassword variable and assign the following value: 'pepito2017,12345'
// Define a username variable and use the substr method to only get the username from the userAndPassword variable (pepito2017)
// Define a password variable and use the substr method to only get the password from the userAndPassword variable (12345)
// Show the following output: The user %username% has %password% as password

let userAndPassword = 'pepito2017,12345';
userLength = "pepito2017";
let userName = userAndPassword.substr(0, userLength.length);
console.log(userName);
let password = userAndPassword.substr(-5,5);
console.log(password);
console.log(`The user ${userName} has ${password} as password`)
// const text = 'I love JavaScript!!';
// const jsText = 'JavaScript';
// const result = text.substr(7, jsText.length);

// console.log(result); // JavaScript