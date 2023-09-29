"use client";

import { LocationHistory } from "@/db/schema";
import { DataTable } from "@/components/table/data-table";
import { locationHistoryColumns } from "../locationColumns";

type HistoryTableProps = {
  history: LocationHistory[];
};

export default function HistoryTable(props: HistoryTableProps) {
  return <DataTable data={props.history} columns={locationHistoryColumns} />;
}
