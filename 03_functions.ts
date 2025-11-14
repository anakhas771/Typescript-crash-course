// 1. Basic Function Syntax 
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Anakha")); // ✅

// 2. Function with Multiple Parameters
function addss(a: number, b: number): number {
  return a + b;
}

// 3. Void Return Type
// If a function does not return anything, use void.
function logMessage(message: string): void {
  console.log(message);
}

// 4. Optional Parameters
// Use ? to make a parameter optional.
function greets(name: string, age?: number): string {
  return age ? `Hi ${name}, age ${age}` : `Hi ${name}`;
}
greets("Aanya");         
greets("Yuvan", 22);     

// 5. Default Parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}
multiply(5); // 10
multiply(5, 3); // 15

// 6. Anonymous Functions (Function Expressions)
const divide = function (a: number, b: number): number {
  return a / b;
};

// 7. Arrow Functions
const subtract = (a: number, b: number): number => a - b;

// 8. Function Type Declarations
let add: (x: number, y: number) => number;
add = (x, y) => x + y;

// 9. Functions with Object Types
function printUser(user: { name: string; age: number }): void {
  console.log(`${user.name} is ${user.age} years old`);
}
printUser({ name: "Anakha", age: 22 });

// 10. Using Type Aliases with Functions
type MathOperation = (a: number, b: number) => number;
const adds: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;

// 11. Functions with Interfaces
interface Greeter {
  (name: string): string;
}
const sayHello: Greeter = (name) => `Hello, ${name}`;

// 12. Function Overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
combine(2, 3); // 5
combine("Hello ", "World"); // "Hello World"

// 13. Rest Parameters
// Used for variable number of arguments:
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10


// 14. Never Type (for functions that never return)
// Used when a function always throws an error or never finishes:
function throwError(msg: string): never {
  throw new Error(msg);
}

// 15. Function with Generics
// Make your function reusable for different data types.
function identity<T>(value: T): T {
  return value;
}
identity<number>(10); // 10
identity<string>("Hello"); // "Hello"
