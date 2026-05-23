export type CalculatorCategory = "investment" | "loan" | "retirement" | "tax";

export type Calculator = {
  slug: string;
  title: string;
  shortDesc: string;
  category: CalculatorCategory;
  icon: string;
  formula?: string;
  isPopular?: boolean;
  faqs?: {
    q: string;
    a: string;
  }[];
};

export const calculators: Calculator[] = [
  // Investment
  {
    slug: "sip-calculator",
    title: "SIP Calculator",
    shortDesc: "Calculate returns on your Systematic Investment Plan",
    category: "investment",
    icon: "chart-line",
    isPopular: true,
  },
  {
    slug: "swp-calculator",
    title: "SWP Calculator",
    shortDesc: "Plan your Systematic Withdrawal Plan",
    category: "investment",
    icon: "arrow-trend-down",
  },
  {
    slug: "cagr-calculator",
    title: "CAGR Calculator",
    shortDesc: "Calculate Compound Annual Growth Rate",
    category: "investment",
    icon: "chart-pie",
    isPopular: true,
  },
  {
    slug: "lumpsum-calculator",
    title: "Lumpsum Calculator",
    shortDesc: "Calculate returns on your one-time investments",
    category: "investment",
    icon: "sack-dollar",
  },
  // Loan
  {
    slug: "emi-calculator",
    title: "EMI Calculator",
    shortDesc: "Calculate your Equated Monthly Installment",
    category: "loan",
    icon: "calculator",
    isPopular: true,
  },
  {
    slug: "home-loan-calculator",
    title: "Home Loan Calculator",
    shortDesc: "Plan your home loan EMI and interest",
    category: "loan",
    icon: "house",
  },
  {
    slug: "car-loan-calculator",
    title: "Car Loan Calculator",
    shortDesc: "Calculate your car loan EMI easily",
    category: "loan",
    icon: "car",
  },
  // Retirement
  {
    slug: "gratuity-calculator",
    title: "Gratuity Calculator",
    shortDesc: "Calculate your gratuity amount on retirement",
    category: "retirement",
    icon: "gift",
    isPopular: true,
  },
  {
    slug: "pension-calculator",
    title: "Pension Calculator",
    shortDesc: "Plan your monthly pension after retirement",
    category: "retirement",
    icon: "piggy-bank",
  },
  // Tax
  {
    slug: "income-tax-calculator",
    title: "Income Tax Calculator",
    shortDesc: "Calculate your income tax for the current financial year",
    category: "tax",
    icon: "file-invoice-dollar",
    isPopular: true,
  },
  {
    slug: "hra-calculator",
    title: "HRA Calculator",
    shortDesc: "Calculate your House Rent Allowance exemption",
    category: "tax",
    icon: "building",
  },
  {
    slug: "gst-calculator",
    title: "GST Calculator",
    shortDesc: "Calculate Goods and Services Tax",
    category: "tax",
    icon: "receipt",
  },
];
