import { Row } from "@tanstack/react-table";
import { TTableData } from "../components/table/Table";

export const isWithinRange = (row: Row<TTableData>, columnId: string, value: [string, string]) => {


  const rowValue = row.getValue(columnId) as string;
  const date = new Date(rowValue);

  //In case we dont have a former date we would consider 1jan 1970 as the start value for sorting
  const start = value?.[0] ? new Date(value[0]) : new Date('1970/01/01')
  //for end we would consider todays date
  const end = value?.[1] ? new Date(value[1]) : new Date()
  //If one filter defined and date is null filter it
  if ((start || end) && !date) return false;

  if (start > end) {
    return false
  } else if (start && end) {
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
  } else return true;
};