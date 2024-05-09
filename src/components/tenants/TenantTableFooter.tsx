import { Table } from "@tanstack/react-table";
import { Tenant } from "../utils/type";
import cn from "clsx";
import TenantTablePagination from "./TenantTablePagination";

const TenantTableFooter = ({ table }: { table: Table<Tenant> }) => {
  return (
    <>
      <div className="flex justify-between w-full px-6 pb-2">
        <div className="text-gray-400 space-x-2">
          <span>Page</span>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </div>
        <TenantTablePagination table={table} />
      </div>
    </>
  );
};

export default TenantTableFooter;
