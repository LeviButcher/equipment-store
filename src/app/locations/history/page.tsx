import { db } from "@/db";
import { locationHistories } from "@/db/schema";

const getHistory = () => {
  return db.select().from(locationHistories);
};

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import LocationHistoryTable from "../LocationHistoryTable";

export default async function History() {
  const res = await getHistory();
  return (
    <div>
      <h1>history - {res.length}</h1>
      <div className="mb-4 w-auto h-96 ag-theme-alpine">
        <LocationHistoryTable history={res} />
      </div>
    </div>
  );
}
