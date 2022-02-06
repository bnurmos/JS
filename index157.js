

const consolee = "PS4";
const functia = function (){
    console.log(`name: ${this.name}`, `\nsold: ${this.sold}`,`\nprice: ${this.price}`,`\nconsole: ${this.console}`);
};

const games = [
     {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        console: "PS4",
        showDetail: functia
    },
    {
        name: "Lego Marvel Super Heroes",
        price: 700,
        sold: 25,
        console: "XBOX",
        showDetail: functia
    },
    {
        name: "Gta V",
        price: 1449,
        sold: 30,
        console: "PS4",
        showDetail: functia
    },
    {   name: "Fifa 2017",
        price: 890,
        sold: 15,
        console: "PS4",
        showDetail: functia
    }
];
// const ffffu = (item)=>{
//     if (item.console ==console){
//     item.showDetail();
//     }
// };
const rightGame = games.filter(function(item){
    return item.console =="PS4";
         
            
});
console.log(rightGame);
// const goodGreades = grades.filter(function(grade) {
//      if (item.console ==console){
//     item.showDetail();
//     }
//   });
