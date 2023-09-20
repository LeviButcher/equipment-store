type Params = {
  id: number;
};
import { db } from "@/db";
import { locations } from "@/db/schema";
import { eq } from "drizzle-orm";

const getLocation = (id: number) => {
  return db.query.locations.findFirst({ where: eq(locations.id, id) });
};

export default async function LocationPage({ params }: { params: Params }) {
  const location = await getLocation(params.id);
  return <div>hello - {location?.name}</div>;
}
