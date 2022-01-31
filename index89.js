//Ex_89
for ( let numbers=1, sum = 0; numbers < 1001; numbers++) {
    sum = sum + numbers;
    console.log("sum= ", sum)
}

//Ex_90

for ( let numbers2=1, sum2 = 0; numbers2 < 1001; numbers2++){
    if (numbers2%2 == 0){
        sum2 = sum2 + numbers2;
        console.log(sum2)
}}

//Ex_91
for (let num = 9, i = 1; i<=10; i = i+1) {
    SumTable = null;
    SumTable = num*i;
    console.log(`${num} times ${i} equals ${SumTable}`)
}
