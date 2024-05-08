import { useReducer, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type Status = "Paid" | "Late";

type Tenant = {
  name: string;
  property: string;
  startDate: string;
  monthlyRent: string;
  status: Status;
  action: string;
};

const defaultData: Tenant[] = [
  {
    name: "Galen Slixby",
    property: "linsley",
    startDate: "24",
    monthlyRent: "100",
    status: "Paid",
    action: "action",
  },
  {
    name: "Q Slixby",
    property: "linsley",
    startDate: "5",
    monthlyRent: "100",
    status: "Paid",
    action: "action",
  },
  {
    name: "Ef Slixby",
    property: "linsley",
    startDate: "6",
    monthlyRent: "100",
    status: "Paid",
    action: "action",
  },
  {
    name: "Cd Slixby",
    property: "linsley",
    startDate: "1",
    monthlyRent: "100",
    status: "Paid",
    action: "action",
  },
  {
    name: "Ab Slixby",
    property: "linsley",
    startDate: "12",
    monthlyRent: "100",
    status: "Paid",
    action: "action",
  },
];

const columnHelper = createColumnHelper<Tenant>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
    header: () => <span>Tenant</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.property, {
    id: "property",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Property</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("startDate", {
    header: () => <span className="whitespace-nowrap">Tenancy Start Date</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("monthlyRent", {
    header: () => <span className="whitespace-nowrap">Monthly Rent</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("action", {
    header: () => <span>Action</span>,
    cell: () => (
      <button onClick={() => {}}>
        <BsThreeDotsVertical className="w-5 h-5" />
      </button>
    ),
  }),
];

export const TenantTable = () => {
  const [data, _setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div id="table" className="w-full overflow-x-auto font-publicSans">
      <table className="w-full">
        <thead className="border-t border-b text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-4 font-medium uppercase text-sm"
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
            <tr key={row.id} className="border-t border-b">
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
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
};
