"use client";
import { Location } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<Location>[] = [
    { accessorKey: "id" },
    { accessorKey: "name" },
    { accessorKey: "created" },
    { accessorKey: "updated" },
    { accessorKey: "isDeleted", header: "Is Deleted" },
];

