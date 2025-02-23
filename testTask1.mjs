import test from './test.mjs'; 
import { squareNumber, inchesToMm, squareRoot, cubeNumber, areaOfCircle, greet } from './task1.mjs';

const tester = test("Testing Functions");

tester.isEqual(squareNumber(5), 25, "Square of 5");
tester.isEqual(squareNumber(10), 100, "Square of 10");

tester.isEqual(inchesToMm(1), 25.4, "1 inch to mm");
tester.isEqual(inchesToMm(5), 127, "5 inches to mm");

tester.isEqual(Math.round(squareRoot(25)), 5, "Square root of 25");
tester.isEqual(Math.round(squareRoot(49)), 7, "Square root of 49");

tester.isEqual(cubeNumber(3), 27, "Cube of 3");
tester.isEqual(cubeNumber(4), 64, "Cube of 4");

tester.isEqual(Math.round(areaOfCircle(7)), Math.round(3.14159 * 7 * 7), "Area of circle with radius 7");
tester.isEqual(Math.round(areaOfCircle(10)), Math.round(3.14159 * 10 * 10), "Area of circle with radius 10");

tester.isEqual(greet("John"), "Hello, John", "Greeting John");
tester.isEqual(greet("Alice"), "Hello, Alice", "Greeting Alice");
