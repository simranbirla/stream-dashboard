import { ColumnFiltersState } from "@tanstack/react-table";
import { createContext, useState } from "react";

export type TFilterContext = {
    columnFilters: ColumnFiltersState | undefined,
    setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>> | undefined,
}

export const FilterContext = createContext<TFilterContext>({
    columnFilters: undefined,
    setColumnFilters: undefined,
})


export const FilterProvider = ({ children }: { children: React.ReactElement }) => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    return <FilterContext.Provider value={{ columnFilters, setColumnFilters }}>{children}</FilterContext.Provider>
}