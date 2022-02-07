
function range (start, end, step=1){
    const pizds = [];
    for (let i=start; i>=end; i+=step){
        pizds.push(i);
    } 
    return pizds;
}
console.log(range(5,2,-1));
function sum(pis){
    let result=0;
    pis.forEach(element => {
        result = result + element;
        
    });
    return result;
}

 
//console.log(sum(range(1,10,2)));




