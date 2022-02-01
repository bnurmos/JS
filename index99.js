// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output


for (let number=0, step = 0; number<=1000; number++) {
    if (number%2 == 0){
    console.log(number); 
    step++;
    }  else if (step >= 20){
        break;
    }

    }
