import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { users, locations, Location, User, NewUser } from "@/db/schema";

const client = postgres(process.env.DB_CS ?? "");
export const db = drizzle(client, { schema: { users, locations } });

export { users, locations };
export type { Location, User, NewUser };

await migrate(db, { migrationsFolder: "drizzle" });
