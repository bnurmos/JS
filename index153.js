let arithmetic = {
    add: function(a,b){
        if(a!=NaN&&b!=NaN){
        result = a+b;
        console.log(result);
        } else {
            console.log("Error, needs number")
        }

    },
    subtract: function(a,b){
        if(a!=NaN&&b!=NaN){
            result = a-b;
            console.log(result);
            } else {
                console.log("Error, needs number")
            }

    },
    multiply: function(a,b){
        if(a!=NaN&&b!=NaN){
            result = a*b;
            console.log(result);
            } else {
                console.log("Error, needs number")
            }

    },
    divide: function(a,b){
        if(a!=NaN&&b!=NaN){
            result = a/b;
            console.log(result);
            } else {
                console.log("Error, needs number")
            }

    },
    remainder: function(a,b){
        if(a!=NaN&&b!=NaN){
            result = a%b;
            console.log(result);
            } else {
                console.log("Error, needs number")
            }

    } 
}
arithmetic.add(2, 10);
arithmetic.subtract(10, 5)
arithmetic.multiply(3, 100)
arithmetic.divide(40, 2)
arithmetic.remainder(20, 2)