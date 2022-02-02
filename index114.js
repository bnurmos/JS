// function revert (){
//    let text = revert();
//     console.log(text.slice(text.lenght,text[0]));
// }
// revert("Hello")

function revert(str) {
    return str.split("").reverse().join("");;
}
console.log( revert("hello"));
console.log( revert("together"));
console.log( revert("Decrementing "));