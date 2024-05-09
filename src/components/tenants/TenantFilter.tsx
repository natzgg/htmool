import { Table } from "@tanstack/react-table";
import Dropdown from "../Dropdown";
import { Tenant } from "../utils/type";
import TenantSearch from "./TenantSearch";
import { useMemo, useState } from "react";

const TenantFilter = ({ table }: { table: Table<Tenant> }) => {
  const [column, setColumn] = useState<any>();

  useMemo(() => {
    table.getHeaderGroups().map((headerGroup) => {
      headerGroup.headers.map((header) => {
        if (header.column.id === "name") {
          setColumn(header.column);
        }
      });
    });
  }, []);

  return (
    <div className="p-4">
      <Dropdown />
      <TenantSearch column={column} />
    </div>
  );
};

export default TenantFilter;
