import { Table } from "@tanstack/react-table";

import { MdOutlineFirstPage, MdOutlineLastPage } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import cn from "clsx";
import { Tenant } from "../utils/type";

const TenantTablePagination = ({ table }: { table: Table<Tenant> }) => {
  return (
    <div className="flex gap-1">
      <button
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
        className={cn(
          "border-2 border-gray-400 p-2 rounded-md",
          !table.getCanPreviousPage() &&
            "opacity-40 cursor-not-allowed bg-gray-100"
        )}
      >
        <MdOutlineFirstPage className="w-4 h-4 text-gray-800" />
      </button>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className={cn(
          "border-2 border-gray-400 p-2 rounded-md",
          !table.getCanPreviousPage() &&
            "opacity-40 cursor-not-allowed bg-gray-100"
        )}
      >
        <GrFormPrevious className="w-4 h-4 text-gray-800" />
      </button>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className={cn(
          "border-2 border-gray-400 p-2 rounded-md",
          !table.getCanNextPage() && "opacity-40 cursor-not-allowed bg-gray-100"
        )}
      >
        <GrFormNext className="w-4 h-4 text-gray-800" />
      </button>
      <button
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
        className={cn(
          "border-2 border-gray-400 p-2 rounded-md",
          !table.getCanNextPage() && "opacity-40 cursor-not-allowed bg-gray-100"
        )}
      >
        <MdOutlineLastPage className="w-4 h-4 text-gray-800" />
      </button>

      <div className="flex gap-2 ml-2">
        <span className="text-gray-400 my-auto">Go to page: </span>
        <input
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          className="border rounded w-16 px-1 focus:border-sky-500 outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
    </div>
  );
};

export default TenantTablePagination;
