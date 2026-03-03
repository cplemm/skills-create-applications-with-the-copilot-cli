#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+)       : Adds two numbers
 *   - Subtraction (-)    : Subtracts the second number from the first
 *   - Multiplication (*) : Multiplies two numbers
 *   - Division (/)       : Divides the first number by the second
 */

// --- Arithmetic Functions ---

/** Addition: returns the sum of a and b */
function add(a, b) {
  return a + b;
}

/** Subtraction: returns the difference of a and b */
function subtract(a, b) {
  return a - b;
}

/** Multiplication: returns the product of a and b */
function multiply(a, b) {
  return a * b;
}

/** Division: returns the quotient of a and b, with division-by-zero handling */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// --- CLI Interface ---

function printUsage() {
  console.log("Usage: node calculator.js <number> <operator> <number>");
  console.log("Operators: add (+), subtract (-), multiply (*), divide (/)");
  console.log("Example: node calculator.js 10 + 5");
}

function run() {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    printUsage();
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both operands must be valid numbers.");
    process.exit(1);
  }

  let result;

  switch (operator) {
    case "+":
    case "add":
      result = add(num1, num2);
      break;
    case "-":
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "*":
    case "x":
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "/":
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      console.error(`Error: Unknown operator '${operator}'`);
      printUsage();
      process.exit(1);
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// Run CLI when executed directly
if (require.main === module) {
  run();
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide };
