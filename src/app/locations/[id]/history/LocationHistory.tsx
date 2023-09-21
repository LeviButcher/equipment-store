"use client";

import { AgGridReact } from "ag-grid-react";
import { LocationHistory } from "@/db/schema";
import React from "react";

type LocationTableProps = {
  locations: LocationHistory[];
};

export default function LocationHistoryTable({
  locations,
}: LocationTableProps) {
  return (
    <AgGridReact
      animateRows
      rowData={locations}
      defaultColDef={{ flex: 1, sortable: true, filter: true }}
      columnDefs={[
        { field: "id" },
        { field: "locationId" },
        { field: "name" },
        { field: "address" },
        { field: "created", cellDataType: "datetime" },
        { field: "updated", cellDataType: "datetime" },
        { field: "isDeleted", headerName: "Is Deleted" },
      ]}
    />
  );
}
