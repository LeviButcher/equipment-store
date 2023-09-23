import React from "react";
import { db, locations } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { insertLocationsSchema, locationHistories } from "@/db/schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CreateLocation() {
  async function createLocationAction(formData: FormData) {
    "use server";

    await db.transaction(async (tx) => {
      const location = await insertLocationsSchema.parseAsync({
        name: formData.get("name"),
        address: formData.get("address"),
      });

      var [newLocation] = await tx
        .insert(locations)
        .values(location)
        .returning();
      await tx
        .insert(locationHistories)
        .values({ locationId: newLocation.id, ...newLocation, id: undefined });
    });

    revalidatePath("/locations");
    redirect("/locations");
  }

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Location</DialogTitle>
        </DialogHeader>
        <form action={createLocationAction} className="grid grid-cols-1 gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" required />
          <Button variant={"outline"} className="bg-green-300">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
