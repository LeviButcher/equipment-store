"use server";

import { insertLocationsSchema, locationHistories } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db, locations } from "@/db";

export async function createLocationAction(formData: FormData) {
  await db.transaction(async (tx) => {
    const location = await insertLocationsSchema.parseAsync({
      name: formData.get("name"),
      address: formData.get("address"),
    });

    var [newLocation] = await tx.insert(locations).values(location).returning();

    await tx
      .insert(locationHistories)
      .values({ locationId: newLocation.id, ...newLocation, id: undefined });
  });

  revalidatePath("/locations");
  redirect("/locations");
}
