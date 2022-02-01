//Ex_102

// let showName = function(){
//     let myName = "= Yulia =";
//     let decor = myName[0].repeat(myName.length);
//     console.log(decor);
//     console.log(myName);
//     console.log(decor);
// }
// showName()

//Ex_103
// Define a evenNumbers variable and assign a function as value
// When executed the evenNumbers function will print even numbers 
//between 0 and 100 as output
// Execute this function 5 times

const evenNumbers = function(){
    for (i = 0; i <= 100; i++) {
        if (i%2 ==0){
        console.log(i);
        }
    }
}
evenNumbers()
evenNumbers()
evenNumbers()
evenNumbers()
evenNumbers()

