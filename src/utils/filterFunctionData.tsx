export const isWithinRange = (row, columnId, value) => {

  if (!value) {
    return
  }

  console.log(value)
  const rowValue = row.getValue(columnId);
  const date = new Date(rowValue);

  const start = value[0] ? new Date(value[0]) : new Date()
  const end = value[1] ? new Date(value[1]) : new Date()             // value => two date input values
  //If one filter defined and date is null filter it
  if ((start || end) && !date) return false;
  if (start && !end) {
    return date.getTime() >= start.getTime()
  } else if (!start && end) {
    return date.getTime() <= end.getTime()
  } else if (start && end) {
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
  } else return true;
};