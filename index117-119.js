//Ex_117
let students = ["Ola", "Nock", "Nick", "Petro", "Huan"];
console.log(students[0], students[2], students[4]);
//Ola Nick Huan
//Ex_118
const grades =[1,2,3,4,5,6,7,8,9,10]
let result = grades[0] + grades[2]+ grades[4]+grades[9];
console.log(result); // 19

//Ex_119
const data = [42, true, function() {return 'The meaning of life is: '}];
if (data[1]== true) {
    console.log(data[2] + " " + data[0]);
}


//function() {return 'The meaning of life is: '} 42