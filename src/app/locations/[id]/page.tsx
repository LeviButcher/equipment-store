import { db } from "@/db";
import { locations } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

type Params = {
  id: number;
};

const getLocation = (id: number) => {
  return db.query.locations.findFirst({ where: eq(locations.id, id) });
};

export default async function LocationPage({ params }: { params: Params }) {
  const location = await getLocation(params.id);

  return (
    <div>
      <h1>{location?.name}</h1>
      <Link href={`${params.id}/history `}>Location History</Link>
    </div>
  );
}
