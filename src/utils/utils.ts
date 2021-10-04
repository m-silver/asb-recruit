export const formatExpiryDate = (expiry: string): Date => {
  const currentYearPrefix = new Date().getFullYear().toString().slice(0,2)
  const year = parseInt(currentYearPrefix + expiry.slice(2))
  const monthIndex = parseInt(expiry.slice(0, 2))-1
  return new Date(year, monthIndex)
}