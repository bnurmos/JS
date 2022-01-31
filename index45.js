let playerName = "Darian Durant is lame";
let teams = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
let message = "Regina is the best Canadian city, Go Riders";
let tenplate = playerName.slice(0,14)+teams.slice(-30,-24)+message.slice(-11,-2);

console.log(tenplate);
playerName= playerName.toUpperCase();
tenplate2=`${playerName.slice(0, 14)}is the best Riders player, Go Riders!!`
;
console.log(tenplate2);
