let PHPCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PHP",
});

const calculateCompoundInterest = (
  investmentAmount,
  rate,
  years,
  additionalInvestment
) => {
  // Calculate compound interest
  const principal = parseFloat(investmentAmount);
  const interestRate = parseFloat(rate) / 100;
  const time = parseFloat(years);
  const additionalInvestmentAmount = parseFloat(additionalInvestment);
  let totalAmount = principal;

  console.table({
    principal,
    interestRate,
    time,
    additionalInvestmentAmount,
    totalAmount,
  });

  for (let i = 0; i < time; i++) {
    totalAmount += totalAmount * interestRate;
    totalAmount += additionalInvestmentAmount;
  }

  // Display the result
  const resultElement = document.getElementById("result");

  if (resultElement) {
    resultElement.textContent = `Total amount after ${years} years: ${PHPCurrency.format(
      totalAmount
    )}`;
  }

  return PHPCurrency.format(totalAmount);
};

window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("investment-form");

  form.addEventListener("submit", function (event) {
    const investmentAmount = document.getElementById("investment-amount").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const additionalInvestment = document.getElementById(
      "additional-investment"
    ).value;
    event.preventDefault();
    calculateCompoundInterest(
      investmentAmount,
      rate,
      years,
      additionalInvestment
    );
  });
});

module.exports = { calculateCompoundInterest };
