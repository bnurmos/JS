// i=13;
// a="*************";
// while (i>0){ 
//     console.log(a);
//     i--;
//     a=a.slice(0,a.length-1);
// }

//refactored the code Ex_93

for ( a="*************"; a.length >0; a=a.slice(0,a.length-1)){
    console.log(a);
}

//Ex_94

for (let i=7, step = "*"; i>0; i--){
    console.log(step);
    step = step +"**"
}
