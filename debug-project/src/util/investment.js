// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults(values, results) {
  // Extract the values from the input object and convert them to numbers
  let investmentValue = Number(values.initialInvestment);
  const annualInvestment = Number(values.annualInvestment);
  const expectedReturn = Number(values.expectedReturn);
  const duration = Number(values.duration);

  // The total investment is the sum of the initial investment and the annual investment
  let totalInvestment = Number(values.initialInvestment); // initial investment

  // If the duration is less than 1 year, only the initial investment is considered
  if (duration < 1) {
    results.push({
      year: 1, // year identifier
      interest: 0, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: 0, // investment added in this year
      totalInvestment: totalInvestment, // total investment at end of year
    });
    return;
  }

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInvestment += annualInvestment;
    results.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year,
      totalInvestment: totalInvestment, // total investment at end of year
    });
  }
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
