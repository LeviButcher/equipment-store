import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name"),
  address: text("address"),
  isDeleted: boolean("is_deleted").default(false),
});

export type Location = typeof locations.$inferSelect; // return type when queried
export type NewLocation = typeof locations.$inferInsert; // insert type
