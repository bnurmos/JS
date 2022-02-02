// function sort(number1, number2, number3){
//     let lowestToHighest = numbers.sort((a, b) => a - b);
//     console.log(sort())

// }
// sort(10,8,25);

function sort1(number1, number2, number3, highToLow) {
    const numbers = [number1, number2, number3];
    if (highToLow) {
      const numbersArray = numbers.sort((a, b) => b - a);
      return numbersArray.join(', ');
    } else {
      const numbersArray = numbers.sort((a, b) => a - b);
      return numbersArray.join(', ');
    }
  }
  console.log(sort1(10,8,25));