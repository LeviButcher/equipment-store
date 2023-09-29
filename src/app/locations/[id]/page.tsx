import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { locations } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { deleteLocation } from "./actions";

type Params = {
  id: number;
};

const getLocation = (id: number) => {
  return db.query.locations.findFirst({ where: eq(locations.id, id) });
};

export default async function LocationPage({ params }: { params: Params }) {
  const location = await getLocation(params.id);
  const deleteThisLocation = deleteLocation.bind(null, params.id);

  return (
    <main>
      <header className="flex justify-between items-center">
        <h1 className="text-4xl">{location?.name}</h1>
        <form action={deleteThisLocation}>
          <Button variant="outline">Delete</Button>
        </form>
      </header>
      <Link href={`${params.id}/history `}>Location History</Link>
    </main>
  );
}
