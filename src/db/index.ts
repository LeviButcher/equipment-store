import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users, locations, Location, User, NewUser } from "@/db/schema";

const cs = "postgresql://postgres:postgres@localhost:5432/postgres";

const client = postgres(cs);
export const db = drizzle(client, { schema: { users, locations } });

export { users, locations };
export type { Location, User, NewUser };
