export default function isDateWithinMonth(tDate, date) {
  const now = new Date(date);
  const trDate = new Date(new Date(tDate).setHours(0, 0, 0, 0));
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  if (
    startOfMonth.getTime() <= trDate.getTime() &&
    trDate.getTime() <= endOfMonth.getTime()
  ) {
    return true;
  } else {
    return false;
  }
}
