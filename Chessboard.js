let move1 = " ";
let move2= "#";
for ( let step = 0; step <4; step++ ){
    let result = (move1.concat(move2)).repeat(4);
    console.log(result);
    if (result[0] == " ") {
        result = (move2.concat(move1)).repeat(4);
        console.log(result);
        }
}

//Solution from the book::
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);