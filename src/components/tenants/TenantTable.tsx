import { useReducer, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import cn from "clsx";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { Tenant } from "../utils/type";
import TenantTableFooter from "./TenantTableFooter";
import { makeData } from "../utils/fakeData";

const columnHelper = createColumnHelper<Tenant>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    header: () => <span>Tenant</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.property, {
    id: "property",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Property</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("startDate", {
    header: () => <span className="whitespace-nowrap">Tenancy Start Date</span>,
    cell: (info) => info.renderValue()?.toLocaleDateString("en-US"),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("monthlyRent", {
    header: () => <span className="whitespace-nowrap">Monthly Rent</span>,
    cell: (info) => (
      <span className="text-sm p-1.5 bg-gray-500/10 font-bold text-gray-500/80 rounded">
        {info.getValue()}
      </span>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <span
        className={cn(
          "p-1.5 rounded font-bold text-sm",
          info.getValue() === "Paid"
            ? "bg-green-400/20 text-green-400"
            : "bg-red-400/20 text-red-400"
        )}
      >
        {info.getValue()}
      </span>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("action", {
    header: () => <span>Action</span>,
    cell: () => (
      <button onClick={() => {}} className="">
        <BsThreeDotsVertical className="w-5 h-5" />
      </button>
    ),
  }),
];

export const TenantTable = () => {
  const [data, _setData] = useState(() => makeData(12));
  const rerender = useReducer(() => ({}), {})[1];
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div
      id="table"
      className="w-full overflow-x-auto font-publicSans text-gray-600 mb-5"
    >
      <table className="w-full">
        <thead className="border-t border-b text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={cn(
                    "p-4 font-medium uppercase text-sm",
                    header.column.getCanSort() && "cursor-pointer select-none"
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-b text-sm">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      <TenantTableFooter table={table} />
    </div>
  );
};
