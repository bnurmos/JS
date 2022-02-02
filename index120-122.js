//Ex_120
// Create a new index120.js file
// Define a students variable and assign an empty array
// Assing students values in the following indexes: 0, 1, 2, 3, 4 and 5
// Show the index number and value as otput:
// index 0: Marta

let students  = [];
students = [1,2,3,4,5];
students.forEach(function(item, index, array) {
    console.log(item, index);
  })

  //Ex_121
let games = ["Grand Theft Auto V", "The Last of Us Remastered", "Persona 5", "Metal Gear Solid V",
"Uncharted 4", "Journey", "Bloodborne", "The Witcher 3", "Diablo III"];
games[0]="FIFA 18";
games[3]="FIFA 17";
games[2]="FIFA 16";
console.log(games);

//Ex_122

let ingredients = ["Pork", "Pomato", "Chiken", "Lettuce", "Beef", "Carrots", "Cucumber"];
let vegetarian = ingredients;
vegetarian.shift();
vegetarian.splice(1,1);
console.log(vegetarian);



