// Import the function to be tested
import { calculateCompoundInterest } from "./calculator";
// Test case 1: Calculate compound interest with initial investment only
test("Calculate compound interest with initial investment only", () => {
  // Set up the input values

  // Call the function
  const result = calculateCompoundInterest(1000, 5, 10, 0);

  // Check the result
  expect(result).toBe("₱1,628.89");
});

// Test case 2: Calculate compound interest with additional investment
test("Calculate compound interest with additional investment", () => {
  // Call the function
  const result = calculateCompoundInterest(1000, 6, 10, 500);

  // Check the result
  expect(result).toBe("₱8,381.25");
});
