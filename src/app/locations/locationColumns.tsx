import { ColumnDef } from "@tanstack/react-table";
import { Location, LocationHistory } from "@/db/schema";

export const locationColumns: ColumnDef<Location>[] = [
  { accessorKey: "id" },
  { accessorKey: "name" },
  { accessorKey: "address" },
  { accessorKey: "created" },
  { accessorKey: "updated" },
  { accessorKey: "isDeleted", header: "Is Deleted" },
];

export const locationHistoryColumns: ColumnDef<LocationHistory>[] = [
  { accessorKey: "id" },
  { accessorKey: "locationId" },
  { accessorKey: "name" },
  { accessorKey: "address" },
  { accessorKey: "created" },
  { accessorKey: "updated" },
  { accessorKey: "isDeleted", header: "Is Deleted" },
];
