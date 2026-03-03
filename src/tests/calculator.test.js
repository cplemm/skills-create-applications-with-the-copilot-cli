const { add, subtract, multiply, divide } = require("../calculator");

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
