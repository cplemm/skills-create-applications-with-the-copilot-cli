const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require("../calculator");

// --- Tests based on image examples (calc-basic-operations.png) ---

describe("Image example operations", () => {
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });
});

// --- Comprehensive addition tests ---

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds two negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// --- Comprehensive subtraction tests ---

describe("subtract", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts a number from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts equal numbers", () => {
    expect(subtract(42, 42)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.3)).toBeCloseTo(3.2);
  });
});

// --- Comprehensive multiplication tests ---

describe("multiply", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -2)).toBe(-12);
  });

  test("multiplies by one", () => {
    expect(multiply(99, 1)).toBe(99);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test("multiplies large numbers", () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });
});

// --- Comprehensive division tests ---

describe("divide", () => {
  test("divides two positive numbers evenly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides with a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides two negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides a negative by a positive number", () => {
    expect(divide(-9, 3)).toBe(-3);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(42, 1)).toBe(42);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBe(3);
  });

  // --- Edge case: division by zero ---

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when dividing negative number by zero", () => {
    expect(() => divide(-5, 0)).toThrow("Cannot divide by zero");
  });
});

// --- Comprehensive modulo tests ---

describe("modulo", () => {
  test("returns the remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when there is no remainder", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("returns the remainder with a negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("returns the remainder with a negative divisor", () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test("returns zero when dividend is zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("returns the dividend when divisor is larger", () => {
    expect(modulo(3, 10)).toBe(3);
  });

  test("throws error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot modulo by zero");
  });
});

// --- Comprehensive exponentiation tests ---

describe("exponentiate", () => {
  test("raises a number to a positive power", () => {
    expect(exponentiate(2, 3)).toBe(8);
  });

  test("raises a number to the power of zero", () => {
    expect(exponentiate(5, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(exponentiate(7, 1)).toBe(7);
  });

  test("raises a negative number to an even power", () => {
    expect(exponentiate(-2, 2)).toBe(4);
  });

  test("raises a negative number to an odd power", () => {
    expect(exponentiate(-2, 3)).toBe(-8);
  });

  test("raises a number to a negative power", () => {
    expect(exponentiate(2, -2)).toBe(0.25);
  });

  test("raises a decimal number to a power", () => {
    expect(exponentiate(0.5, 2)).toBe(0.25);
  });
});

// --- Comprehensive square root tests ---

describe("sqrt", () => {
  test("returns the square root of a perfect square", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("returns the square root of 1", () => {
    expect(sqrt(1)).toBe(1);
  });

  test("returns 0 for sqrt(0)", () => {
    expect(sqrt(0)).toBe(0);
  });

  test("returns a decimal for a non-perfect square", () => {
    expect(sqrt(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns the square root of a large number", () => {
    expect(sqrt(1000000)).toBe(1000);
  });

  test("returns a decimal square root", () => {
    expect(sqrt(0.25)).toBe(0.5);
  });

  test("throws error for negative numbers", () => {
    expect(() => sqrt(-1)).toThrow("Cannot take square root of a negative number");
  });

  test("throws error for negative decimal numbers", () => {
    expect(() => sqrt(-0.5)).toThrow("Cannot take square root of a negative number");
  });
});
