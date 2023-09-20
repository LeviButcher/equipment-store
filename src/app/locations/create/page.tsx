import React from "react";
import { db, locations, type NewLocation } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function CreateLocation() {
  async function createLocationAction(formData: FormData) {
    "use server";

    const location: NewLocation = {
      name: formData.get("name")?.toString(),
      address: formData.get("address")?.toString(),
    };

    await db.insert(locations).values(location);
    revalidatePath("/locations");
    redirect("/locations");
  }

  return (
    <main className="">
      <header className="">
        <h1 className="text-4xl">Create Location</h1>
      </header>
      <section>
        <form action={createLocationAction}>
          <label>
            Name <input name="name" />
          </label>
          <label>
            Address <input name="address" />
          </label>
          <button type="submit" className="py-2 px-4 bg-blue-300 rounded">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
