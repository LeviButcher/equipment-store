import { db } from "@/db";
import { locationHistories } from "@/db/schema";
import { eq } from "drizzle-orm";

const getHistory = (id: number) => {
  return db
    .select()
    .from(locationHistories)
    .where(eq(locationHistories.locationId, id));
};

type Params = {
  id: number;
};

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import LocationHistoryTable from "../../LocationHistoryTable";

export default async function History({ params }: { params: Params }) {
  const res = await getHistory(params.id);
  return (
    <div>
      <h1>history - {res.length}</h1>
      <div className="mb-4 w-auto h-96 ag-theme-alpine">
        <LocationHistoryTable history={res} />
      </div>
    </div>
  );
}
