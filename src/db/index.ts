import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";
import { users, locations, Location, User, NewUser } from "@/db/schema";

export const db = drizzle(sql, { schema: { users, locations } });

export { users, locations };
export type { Location, User, NewUser };

await migrate(db, { migrationsFolder: "drizzle" });
