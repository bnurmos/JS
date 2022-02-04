let player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy= this.energy-damage;
        //console.log(this.energy);
    },
    recoverEnergy: function(energyUp){
         energyUp = this.energy;
    },
    loseLife: function(){
        this.lives= this.lives-1;
    },
    recoverLife: function(){
        this.lives= this.lives+1;  
    }
}
if (player.energy == 0 || player.energy < 0){
    player.loseLife(); 
}  else if (player.energy >100){
    console.log("Game over");
}  else if(player.lives >99){
    console.log("You are immortal, this game over")
}  else if (player.energy < 0){
    console.log("Game over");
}
player.name = "Gosha";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(25);
player.loseEnergy(20);
player.recoverLife();
player.loseEnergy(70);
player.loseLife();
player.recoverLife();
player.recoverLife();
console.log(`The ${player.name} has ${player.energy} energy and  ${player.lives} lifes`)


