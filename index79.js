//Ex_79
let numbers=1;
let sum = 0;
do {
    sum = sum + numbers;
    numbers++;
    console.log(sum)
} while (numbers < 1001);

//Ex_80

let numbers2=1;
let sum2 = 0;
do {
    if (numbers2%2 == 0){
    sum2 = sum2 + numbers2;
    console.log(sum2)
    }
    numbers2++;
} while (numbers2 < 1001) ;

//Ex_81
let num = 9;
let i = 1;
SumTable = null;
do {
    SumTable = num*i;
    console.log(`${num} times ${i} equals ${SumTable}`)
    i = i+1
} while (i<=10);