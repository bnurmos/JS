i=13;
a="*************";
while (i>0){ 
    console.log(a);
    i--;
    a=a.slice(0,a.length-1);
}

a="*************";
while(a.length >0 ) {
    console.log(a);
    a=a.slice(0,a.length-1);
}

//Ex_74


i=7;
step = "*";
while (i>0){
    console.log(step);
    step = step +"**"
    i--;
}