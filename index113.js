function getShapePerimiter(base, height){
    if (base == height){
        let perimeter = base*height;
        
        console.log(`${perimeter} is the shape perimiter`);
    } else {
        perimeter=(base+height)*2;
        console.log(`${perimeter} is the shape perimiter`);
    }
    if (`${perimeter}` > 100){
        console.log("The perimiter is to big");
    } else {
        console.log("The perimiter is fine");
    }
}
getShapePerimiter(80,5)