export function formatIndianNumber(value: number): string {
  if (isNaN(value)) return "0";
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
  }).format(value);
}
