//??????????????????????????
const propertiesNames = [
    "name", "price", "sold","console"
];
const games = [
    {
       name: "Crash Bandicoot N. Sane Trilogy",
       price: 1060,
       sold: 20,
       console: "PS4"
   },
   {
       name: "Lego Marvel Super Heroes",
       price: 700,
       sold: 25,
       console: "XBOX"
   },
   {
       name: "Gta V",
       price: 1449,
       sold: 30,
       console: "PS4"
   },
   {   name: "Fifa 2017",
       price: 890,
       sold: 15,
       console: "PS4"
   }
];

// for (game in games){
//     return game;
// };
games.forEach((game)=>{
    return game;

})
console.log(propertiesNames['name']);
