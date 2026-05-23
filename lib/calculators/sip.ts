export type SIPResult = {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
  yearlyBreakdown: {
    year: number;
    investedAmount: number;
    totalValue: number;
  }[];
};

export function calculateSIP(
  monthlyInvestment: number,
  expectedReturnRate: number,
  timePeriodYears: number
): SIPResult {
  const i = expectedReturnRate / 100 / 12; // monthly rate of return
  const n = timePeriodYears * 12; // total number of months

  let totalValue = 0;
  if (i === 0) {
    totalValue = monthlyInvestment * n;
  } else {
    totalValue = monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  }

  const investedAmount = monthlyInvestment * n;
  const estimatedReturns = totalValue - investedAmount;

  // Yearly breakdown
  const yearlyBreakdown = [];
  for (let year = 1; year <= timePeriodYears; year++) {
    const months = year * 12;
    const yearInvested = monthlyInvestment * months;
    let yearTotal = 0;
    if (i === 0) {
      yearTotal = yearInvested;
    } else {
      yearTotal = monthlyInvestment * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
    }
    yearlyBreakdown.push({
      year,
      investedAmount: yearInvested,
      totalValue: yearTotal,
    });
  }

  return {
    investedAmount,
    estimatedReturns,
    totalValue,
    yearlyBreakdown,
  };
}
