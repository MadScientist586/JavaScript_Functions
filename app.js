console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: Print Odds Continued");
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i% 2 != 0){
            console.log(i);       
         }
    }
}
printOdds(10);
printOdds(100);
console.log("-------------------------------------------------")
// Exercise 2 Section
console.log("EXERCISE 2: Legal?");
function checkAge(userName, userAge) {
    let oldEnough = `Hey ${userName}, you are old enough to drive.`
    let tooYoung = `Sorry ${userName}, you are not old enought to drive. You must wait ${16 - userAge} years.`

    if (userAge < 16) {
        console.log(tooYoung);
    }
    else {
        console.log(oldEnough);
    }
}
checkAge("Aiden", 13);
checkAge("Person", 16);
checkAge("Anonymous", 21);
console.log("-------------------------------------------------")

// Exercise 3 Section
console.log("EXERCISE 3: Which Quadrant?");
function checkQuadrant(x, y) {
    if (x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if (x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if (x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if (x > 0 && y < 0){
        return "Quadrant 4";
    }
    else if (x == 0 && y != 0) {
        return "X Axis";
    }
    else if (x != 0 && y == 0){
        return "Y Axis";
    }
    else {
        return "Origin";
    }
}
console.log(checkQuadrant(1, 3));
console.log(checkQuadrant(-1, 3));
console.log(checkQuadrant(1, -3));
console.log(checkQuadrant(-1, -3));
console.log(checkQuadrant(0, 3));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));
console.log("-------------------------------------------------")

// Exercise 4 Section
console.log("EXERCISE 4: What Type of Triangle?");
function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}
function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c){
            return "Equilateral Triangle";
        }
        else if (a == b || b == c || c == a){
            return "Isoceles Triangle";
        }
        else {
            return "Scalene Triangle";
        }
    }
    else {
        return "Not a valid triangle.";
    }
}
console.log(checkTriangle(1, 1, 2));
console.log(checkTriangle(1, 3, 3));
console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(1, 1, 1));
console.log("-------------------------------------------------")

