export const xDaysFromNow = (daysAhead: number) => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(futureDate.getDate() + daysAhead);
  return futureDate;
};
