"use client";

import { useRouter } from "next/navigation";
import { DataTable } from "@/components/table/data-table";
import { locationColumns } from "./locationColumns";
import { Location } from "@/db";

type LocationTableProps = {
  locations: Location[];
};

export default function LocationTable({ locations }: LocationTableProps) {
  const router = useRouter();

  return (
    <div className="mb-4 w-auto h-96">
      <DataTable
        data={locations}
        columns={locationColumns}
        onRowDoubleClick={(row) =>
          router.push(`/locations/${row.getValue("id")}`)
        }
      />
    </div>
  );
}
