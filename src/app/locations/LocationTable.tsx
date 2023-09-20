"use client";

import { AgGridReact } from "ag-grid-react";
import { Location } from "@/db/schema";
import { useRouter } from "next/navigation";

type LocationTableProps = {
  locations: Location[];
};

export default function LocationTable({ locations }: LocationTableProps) {
  const router = useRouter();

  return (
    <AgGridReact
      animateRows
      rowData={locations}
      defaultColDef={{ flex: 1, sortable: true, filter: true }}
      onRowDoubleClicked={(params) => {
        const id = params.data?.id;
        if (!id) return;
        router.push(` /locations/${id}`);
      }}
      columnDefs={[
        { field: "id" },
        { field: "name" },
        { field: "address" },
        { field: "isDeleted", headerName: "Is Deleted" },
      ]}
    />
  );
}
