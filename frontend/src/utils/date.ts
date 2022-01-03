export const isWeekFromCurrentDate = (date: string) => {
  const dateToCompare = new Date(date);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 10);

  return dateToCompare.setHours(0, 0, 0, 0) >= currentDate.setHours(0, 0, 0, 0);
};
