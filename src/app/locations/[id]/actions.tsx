"use server";

import { locationHistories } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db, locations } from "@/db";
import { eq } from "drizzle-orm";

export async function deleteLocation(id: number, _: FormData) {
  await db.transaction(async (tx) => {
    var [updatedLocation] = await tx
      .update(locations)
      .set({ isDeleted: true })
      .where(eq(locations.id, id))
      .returning();

    await tx
      .insert(locationHistories)
      .values({
        locationId: updatedLocation.id,
        ...updatedLocation,
        id: undefined,
      });
  });

  revalidatePath("/locations");
  redirect("/locations");
}
