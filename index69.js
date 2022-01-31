//Ex_69
let numbers=1;
let sum = 0;
while (numbers < 1001){
    sum = sum + numbers;
    numbers++;
    console.log(sum)
}

//Ex_70

let numbers=1;
let sum = 0;
while (numbers < 1001){
    if (numbers%2 == 0){
    sum = sum + numbers;
    console.log(sum)
    }
    numbers++;
}

//Ex_71
let num = 9;
let i = 1;
SumTable = null;
while (i<=10){
    SumTable = num*i;
    console.log(`${num} times ${i} equals ${SumTable}`)
    i = i+1
}

