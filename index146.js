//Ex_146 Didn't finish
let user={
    userName: "batman",
    password: "Alfred1960KPO",
}

function shouldOpenBatCave(userName, password){
if (userName=="batman"&& password=="Alfred1960KPO"){
    return true;
} else {
    return false;
}}
if (user==shouldOpenBatCave(user)){
    console.log("Welcome back batman!!")
} else {
    console.log("Sorry, you can't enter the Batcave, try again..")
}
//Answer: Sorry, you can't enter the Batcave, try again..
