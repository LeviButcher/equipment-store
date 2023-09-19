"use client";

import { AgGridReact } from "ag-grid-react";
import { Location } from "@/db/schema";

type LocationTableProps = {
  locations: Location[];
};

// const columns: ColDef<Location> = [{ field: "id" }, { field: "addres" }];
export default function LocationTable({ locations }: LocationTableProps) {
  return (
    <AgGridReact
      animateRows
      rowData={locations}
      columnDefs={[
        { field: "id" },
        { field: "name" },
        { field: "address" },
        { field: "isDeleted", headerName: "Is Deleted" },
      ]}
    />
  );
}
