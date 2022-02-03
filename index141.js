let tripExpenses = [
    hotelFee = 15,
    tripFee = 150,
    mealsFee=65
];
let budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  
  console.log(budget); 