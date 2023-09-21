import { db } from "@/db/index";
import { locations } from "@/db/schema";
import LocationTable from "./LocationTable";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const getLocations = () => {
  return db.select().from(locations);
};

export default async function Locations() {
  const locations = await getLocations();

  return (
    <main className="">
      <header className="flex justify-between mb-4">
        <h1 className="text-4xl">Locations Directory</h1>
        <Button variant="outline">
          <Link href="locations/create">Create New</Link>
        </Button>
      </header>
      <div className="mb-4 w-auto h-96 ag-theme-alpine">
        <LocationTable locations={locations} />
      </div>
    </main>
  );
}
