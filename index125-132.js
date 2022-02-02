//Ex_125
let iceCreamFlavors = [];
iceCreamFlavors.push("Vanilla", "Cacao","Dark Choc", "Catamel", "Cream Brule");
console.log(iceCreamFlavors); 

//Ex_126
// let iceCreamFlavors = [];
// iceCreamFlavors.unshift( "Cacao","Vanilla","Dark Choc", "Catamel", "Cream Brule");
// console.log(iceCreamFlavors); 

//Ex_127

// let iceCreamFlavors = ["Cacao","Vanilla","Dark Choc", "Catamel", "Cream Brule"];
// const cacao = iceCreamFlavors.shift( );
// const vanilla = iceCreamFlavors.shift( );
// console.log(iceCreamFlavors);
// console.log(cacao); 
// console.log(vanilla) ;
// Answer: [ 'Dark Choc', 'Catamel', 'Cream Brule' ]
// Cacao
// Vanilla

//Ex_128
// let iceCreamFlavors = ["Cacao","Vanilla","Dark Choc", "Caramel", "Cream Brule"];
// const creamBrule = iceCreamFlavors.pop();
// const caramel = iceCreamFlavors.pop();
// console.log(iceCreamFlavors);
// console.log(creamBrule); 
// console.log(caramel) ;
// // Answer: [ 'Cacao', 'Vanilla', 'Dark Choc' ]
// Cream Brule
// Caramel

//Ex_129
// let iceCreamFlavors = ["Cacao","Vanilla","Dark Choc", "Caramel", "Cream Brule"];
// for ( j = 0; j < iceCreamFlavors.length; j++){
// console.log(iceCreamFlavors[j]);
//     }

//Ex_130
// const mutants = ["Professor X", "Cyclops","Iceman", "Angel", "Beast","Phoenix"];
// console.log("Original mutants list", mutants);
// mutants.sort(); // [ 'Angel', 'Beast', 'Cyclops', 'Iceman', 'Phoenix', 'Professor X' ]
// console.log("Sorted mutants list", mutants);
// mutants.reverse(); //[ 'Professor X', 'Phoenix', 'Iceman', 'Cyclops', 'Beast', 'Angel' ]
// console.log("Reversed mutants list", mutants);
// const joinedNumbersBy = mutants.join(' * ')
// console.log("Mutants name separated by *", joinedNumbersBy);

//Ex_131

// const femaleStudents = ["Emma", "Anna", "Inna", "Zinna", "Nina"];
// const maleStudents = ["Vova", "Vasya", "Sasha", "Kolya", "Tolya"];
// const students =femaleStudents.concat(maleStudents);
// console.log(students);
// students.sort();
// console.log("Sorted output:", students);
// console.log("Female names:", students[0],students[1],students[2],students[4],students[9]);
// let i=maleStudents.length;
// while (i>4){
//     console.log("Male names:",maleStudents);
//     i--;
// }
// for (count = students.length; count>=students.length; count--){
// console.log("All students:", students)
// }

//Ex_132
// const mutants = ["Professor X", "Cyclops","Iceman", "Angel", "Beast","Phoenix", "Logan"];
// mutants.indexOf('Logan');
// mutants.indexOf('Professor X');
// if (mutants.indexOf('Logan'&&'Professor X') > -1) {
//   console.log('We love X-Men');
// }

// mutants.indexOf('Gambit'); 

// if (mutants.indexOf('Gambit') > -1) {
//   console.log('X-Men sucks');
// } else {
//   console.log('Logan is on his own');
// }

