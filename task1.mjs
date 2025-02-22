// A function that returns the square of a number
function squareNumber (number) {
    return number * number;
}

//A function that returns a length in mm assuming it has been given a length in inches
function inchesToMm (inches) {
    const millimetersPerInch = 25.4
    return inches * millimetersPerInch;
}

//A function that returns the root of a number
function squareRoot (number) {
    let approx = 1;

    for (let i = 0; i <20; i++) {
        approx = (approx +number / approx) / 2;
    }

    return approx;
}

//A function that returns the cube of a number
function cubeNumber (number) {
    return number * number * number;
}

//A function that returns the area of a circle given the radius
function areaOfCricle (radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}

//A function that returns a greeting, given a name
function greet (name) {
    return "Hello, " + name;
}

//TEST LOGS

console.log("Square of 5:", squareNumber(5));
console.log("5 inches in mm:", inchesToMm(5));
console.log("Square root of 25:", squareRoot(25));
console.log("Cube of 3:", cubeNumber(3));
console.log("Area of circle with radius 7:", areaOfCricle(7));
console.log(greet("John"));