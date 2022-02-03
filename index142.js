let firstPerson = [
    firstName="Nick", lastName="Carter", address="Tuscany", cell=911
];

let secondPerson = [
    "Vicky", "Porter", "Luscany", 811
];

let getString = firstPerson.reduce(function(accumulator, currentValue, index) {
   let comma= accumulator.length ? ", " : "";
    return accumulator + comma + currentValue;
  });
  

  console.log(getString); 

