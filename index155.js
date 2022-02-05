// let games = [
//     name= " ",
//     price= null,
//     sold= null,
//     _console= " "
// ];
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
games.forEach((item)=>{
    console.log(`Use games item properties
    name: ${item.name}
    price: ${item.price}
    sold: ${item.sold}
    console: ${item.console}`);
});

