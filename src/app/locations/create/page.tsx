import React from "react";
import { db, locations } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { insertLocationsSchema, locationHistories } from "@/db/schema";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <main className="flex justify-center items-center h-full">
      <Card className="w-1/3">
        <CardHeader>
          <h1 className="text-4xl">Create Location</h1>
        </CardHeader>
        <CardContent>
          <form
            action={createLocationAction}
            className="grid grid-cols-1 gap-2"
          >
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" required />
            <Button variant={"outline"} className="bg-green-300">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
