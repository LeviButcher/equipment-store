import { db } from "@/db";
import { locationHistories } from "@/db/schema";
import { eq } from "drizzle-orm";
import { DataTable } from "@/components/table/data-table";
import { locationHistoryColumns } from "../../locationColumns";

const getHistory = (id: number) => {
  return db
    .select()
    .from(locationHistories)
    .where(eq(locationHistories.locationId, id));
};

type Params = {
  id: number;
};

export default async function History({ params }: { params: Params }) {
  const res = await getHistory(params.id);

  return (
    <div>
      <h1>history - {res.length}</h1>
      <div className="mb-4 w-auto h-96">
        <DataTable data={res} columns={locationHistoryColumns} />
      </div>
    </div>
  );
}
