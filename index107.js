function biggerNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
    } else if (firstNumber < secondNumber) {
        console.log(`Number ${firstNumber} is not bigger than ${secondNumber}`)

    } else if (firstNumber == secondNumber) {
        console.log(`Number ${firstNumber} is equal ${secondNumber}`)

    }else if (firstNumber == NaN || secondNumber == NaN) {
        console.log("Error: please use a number")
    }
}
biggerNumber(2, 2);