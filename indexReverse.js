function reverseArray(arr=[]){
    arr.sort((a,b)=>b.localeCompare(a));
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));

//let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arrayValue = [1, 2, 3, 4, 5]){
    arrayValue.sort((a,b)=>b-a);
    console.log(arrayValue);
}
reverseArrayInPlace();