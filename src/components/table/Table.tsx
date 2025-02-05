import { useState } from "react"
import { tableData } from "../../../data"
import { ColumnFiltersState, createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import DebouncedInput from "../DebouncedInput";
import { isWithinRange } from "../../utils/filterFunctionData";


export interface TTableData {
    song: string;
    artist: string;
    dateStreamed: string;
    streamCount: number;
    userID: number
}

const columnHelper = createColumnHelper<TTableData>()


const columns = [
    columnHelper.accessor(row => row.userID.toString(), {
        id: 'userID',
        cell: info => info.getValue().toString(),
        header: () => <span>Id</span>
    }),
    columnHelper.accessor('song', {
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Song Name</span>,
    }),
    columnHelper.accessor('artist', {
        header: () => 'Artist Name',
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('streamCount', {
        header: () => <span>Stream Count</span>,
        cell: info => info.renderValue(),

    }),
    columnHelper.accessor('dateStreamed', {
        header: 'Date',
        filterFn: isWithinRange,
        cell: info => info.renderValue(),
    }),
]

export default function Table() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, _setData] = useState<TTableData[]>(tableData)
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])


    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
        },
        filterFns: {
            isWithinRange
        },
        onColumnFiltersChange: setColumnFilters,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel()
    })

    const userIds = tableData.reduce((acc: number[], item) => {
        if (acc.indexOf(item.userID) === -1) {
            acc.push(item.userID)
        }
        return acc
    }, [])

    const handleChangeFilters = (tableName: string, value: string | number) => {
        table.getColumn(tableName)?.setFilterValue(value)

    }

    const handleSorting = (value: string) => {
        if (value === 'desc') {
            table.getColumn('streamCount')?.toggleSorting(true)
        } else {
            table.getColumn('streamCount')?.toggleSorting(false)
        }
    }

    const getValue = (tableName: string) => table.getColumn(tableName)?.getFilterValue()

    const resetFilters = () => {
        table.getAllColumns().map(col => col.setFilterValue(null))
    }

    return (
        <div className="mt-5">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <p className='text-2xl text-left'>Filters:            </p>
                <button onClick={resetFilters} className="py-1 px-4 bg-blue-500 text-white rounded-2xl cursor-pointer hover:bg-blue-400">Reset Filters</button>
            </div>

            <div className='flex flex-col gap-2 my-3 '>
                <div className='flex flex-col lg:flex-row gap-3 lg:items-center justify-between'>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <DebouncedInput onChange={(value) => handleChangeFilters('song', value as string)} value={getValue('song') as string} type='text' placeholder='Enter name of song' className='px-3 py-2 md:min-w-[350px] min-w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300' />
                        <DebouncedInput onChange={(value) => handleChangeFilters('artist', value as string)} value={getValue('artist') as string} type='text' placeholder='Enter name of artist' className='px-3 py-2 md:min-w-[350px] min-w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300' />
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <select name="userId" onChange={(e) => handleChangeFilters("userID", e.target.value)} value={getValue('userID') as string} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300'>
                            <option value={undefined} className='text-gray-300'>Filter By UserId</option>
                            {userIds.map(id => <option key={id} value={id}>{id}</option>)}
                        </select>
                        <select name="sort" onChange={(e) => handleSorting(e.target.value)} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300'>
                            <option value={"desc"}>Most Streamed</option>
                            <option value={"asc"}>Least Streamed</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-2  md:items-center flex-col md:flex-row'>
                    <input type="date" placeholder='From Date' className='px-3 py-2 border-2 border-gray-300 rounded-2xl' onChange={(e) => table.getColumn('dateStreamed')?.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])} />
                    <span className='hidden md:inline'>-</span>
                    <input type='date' placeholder='Till Date' className='px-3 py-2 border-2 border-gray-300 rounded-2xl' onChange={(e) => table.getColumn('dateStreamed')?.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])} />
                </div>
            </div>
            <div className="overflow-x-auto  w-[80vw] lg:w-full  overflow-scroll shadow-2xl my-3">
                <table className="w-[100%] whitespace-nowrap bg-white border border-gray-50 rounded-lg shadow-md  overflow-auto">
                    <thead className="bg-gray-100">

                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="py-3 px-6 text-center text-gray-700 font-semibold border-b">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="py-3 px-6 border-b border-gray-100 text-gray-500">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}
