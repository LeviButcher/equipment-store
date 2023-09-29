import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { locationHistories, locations } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { deleteLocation } from "./actions";
import HistoryTable from "./location-history-table";

type Params = {
  id: number;
};

const getLocation = (id: number) => {
  return db.query.locations.findFirst({ where: eq(locations.id, id) });
};

const getHistory = (id: number) => {
  return db
    .select()
    .from(locationHistories)
    .where(eq(locationHistories.locationId, id));
};

export default async function LocationPage({ params }: { params: Params }) {
  const location = await getLocation(params.id);
  const history = await getHistory(params.id);
  const deleteThisLocation = deleteLocation.bind(null, params.id);

  return (
    <main className="grid gap-3">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl">{location?.name}</h1>
        <div className="flex gap-2 items-center">
          <Link href={`${params.id}/history `}>Location History</Link>
          <form action={deleteThisLocation}>
            <Button variant="outline" className="bg-red-200">
              Delete
            </Button>
          </form>
        </div>
      </header>
      <section>
        <h2>{location?.name}</h2>
        <h2>Address: {location?.address}</h2>
        <h2>Created: {location?.created.toLocaleString()}</h2>
        <h2>Updated: {location?.updated.toLocaleString()}</h2>
        <h2>Is Deleted: {location?.isDeleted ? "Yes" : "No"}</h2>
      </section>
      <section>
        <header>
          <h2 className="mb-2 text-3xl">Change History</h2>
        </header>
        <div>
          <HistoryTable history={history} />
        </div>
      </section>
    </main>
  );
}
