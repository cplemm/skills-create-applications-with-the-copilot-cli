#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+)          : Adds two numbers
 *   - Subtraction (-)       : Subtracts the second number from the first
 *   - Multiplication (*)    : Multiplies two numbers
 *   - Division (/)          : Divides the first number by the second
 *   - Modulo (%)            : Returns the remainder of dividing the first number by the second
 *   - Exponentiation (**)   : Raises the first number to the power of the second
 *   - Square root (sqrt)    : Returns the square root of a number
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

/** Modulo: returns the remainder of dividing a by b, with division-by-zero handling */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot modulo by zero");
  }
  return a % b;
}

/** Exponentiation: returns a raised to the power of b */
function exponentiate(a, b) {
  return Math.pow(a, b);
}

/** Square root: returns the square root of a, throws for negative numbers */
function sqrt(a) {
  if (a < 0) {
    throw new Error("Cannot take square root of a negative number");
  }
  return Math.sqrt(a);
}

// --- CLI Interface ---

function printUsage() {
  console.log("Usage: node calculator.js <number> <operator> <number>");
  console.log("       node calculator.js sqrt <number>");
  console.log("Operators: add (+), subtract (-), multiply (*), divide (/), modulo (%), exponentiate (**)");
  console.log("Example: node calculator.js 10 + 5");
  console.log("         node calculator.js sqrt 9");
}

function run() {
  const args = process.argv.slice(2);

  // Handle sqrt as a special single-operand case
  if (args.length === 2 && (args[0] === "sqrt")) {
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.error("Error: Operand must be a valid number.");
      process.exit(1);
    }
    try {
      const result = sqrt(num);
      console.log(`sqrt(${num}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

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

  try {
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
      case "%":
      case "modulo":
        result = modulo(num1, num2);
        break;
      case "**":
      case "exponentiate":
        result = exponentiate(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'`);
        printUsage();
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// Run CLI when executed directly
if (require.main === module) {
  run();
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide, modulo, exponentiate, sqrt };
