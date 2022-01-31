// i=13;
// a="*************";
// do { 
//     console.log(a);
//     i--;
//     a=a.slice(0,a.length-1);
// } while (i>0);

// refactored code::
a="*************";
do {
    
    a=a.slice(0,a.length-1);
    console.log(a);
} while (a.length>0);

//Ex_84


// i=7;
// step = "*";
// do {
//     console.log(step);
//     step = step +"**"
//     i--;
// } while (i>0);