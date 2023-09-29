import { Card } from "@/components/ui/card";
import { db } from "@/db";
import { locations } from "@/db/schema";
import { sql } from "drizzle-orm";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-4xl">Equipment Store</h1>
      </header>
      <section className="grid grid-cols-3">
        <LocationSummary />
      </section>
    </main>
  );
}

const getLocationMetrics = () => {
  return db
    .select({
      count: sql<number>`count(${locations.id})`,
      is_deleted: locations.isDeleted,
    })
    .from(locations)
    .groupBy((x) => x.is_deleted);
};

async function LocationSummary() {
  const metrics = await getLocationMetrics();
  return (
    <Card className="grid grid-cols-2 gap-10 justify-items-center items-center h-40">
      <div className="w-20 h-20 outline-gray-50 outline">
        <div>Active Location </div>
        <div>{metrics.find((x) => !x.is_deleted)?.count}</div>
      </div>
      <div className="w-20 h-20 outline-gray-50 outline">
        <div>Deleted Location </div>
        <div>{metrics.find((x) => x.is_deleted)?.count}</div>
      </div>
    </Card>
  );
}
