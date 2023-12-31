import { db } from "@/db";
import { locationHistories } from "@/db/schema";
import { DataTable } from "@/components/table/data-table";
import { locationHistoryColumns } from "../locationColumns";

const getHistory = () => {
  return db.select().from(locationHistories);
};

export default async function History() {
  const res = await getHistory();
  return (
    <main>
      <h1>history - {res.length}</h1>
      <div className="mb-4 w-auto h-96">
        <DataTable columns={locationHistoryColumns} data={res} />
      </div>
    </main>
  );
}
