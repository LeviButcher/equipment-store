"use server";

import { db, users } from "@/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteUser(id: number) {
  await db.delete(users).where(eq(users.id, id));
  revalidatePath("/users");
}
