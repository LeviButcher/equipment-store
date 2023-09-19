import { db } from "@/db/index";
import { locations } from "@/db/schema";
import LocationTable from "./LocationTable";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const getLocations = () => {
  return db.select().from(locations);
};

export default async function Locations() {
  const locations = await getLocations();

  return (
    <main className="">
      <h1>Locations</h1>
      <div className="w-auto h-96 ag-theme-alpine">
        <LocationTable locations={locations} />
      </div>
    </main>
  );
}
