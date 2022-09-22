export function getTimeFromDate(date) {
  return `${(date.getHours() + "").padStart(2, 0)}:${(
    date.getMinutes() + ""
  ).padStart(2, 0)}`;
}
