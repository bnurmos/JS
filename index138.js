const mutants = ["Professor X", "Cyclops","Iceman", "Magneto", "Angel", "Beast","Phoenix", "Logan","Gambit"];
let symbol="<3";
mutants.forEach(function(mutant){
    console.log(mutant);
   
})
if (mutants.indexOf('Magneto') > -1){
    mutants[(mutants.indexOf('Magneto'))] = symbol.concat(mutants[mutants.indexOf('Magneto')])
} 
if (mutants.indexOf('Phoenix') > -1){
    mutants[(mutants.indexOf('Phoenix'))] = symbol.concat(mutants[mutants.indexOf('Phoenix')])
} if (mutants.indexOf('Logan') > -1){
    mutants[(mutants.indexOf('Logan'))] =symbol.concat(mutants[mutants.indexOf('Logan')])
}
console.log("F", mutants)
// const professor = mutants.indexOf();
// const logan = mutants.indexOf();
// const phoenix = mutants.indexOf();
// const gambit = mutants.indexOf();

