import { Row } from "@tanstack/react-table";
import { TTableData } from "../components/table/Table";

export const isWithinRange = (row: Row<TTableData>, columnId: string, value: [string, string]) => {


  const rowValue = row.getValue(columnId) as string;
  const date = new Date(rowValue);

  const start = value?.[0] ? new Date(value[0]) : new Date('1970/01/01')
  const end = value?.[1] ? new Date(value[1]) : new Date()             // value => two date input values
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