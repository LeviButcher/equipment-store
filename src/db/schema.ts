import {
  boolean,
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  isDeleted: boolean("is_deleted").notNull().default(false),
  created: timestamp("created", { withTimezone: true }).notNull().defaultNow(),
  updated: timestamp("updated", { withTimezone: true }).notNull().defaultNow(),
});

export const insertLocationsSchema = createInsertSchema(locations);
export const selectLocationsSchema = createSelectSchema(locations);
export type Location = z.infer<typeof selectLocationsSchema>;

export const locationHistories = pgTable("locationHistories", {
  id: serial("id").primaryKey(),
  locationId: serial("location_Id")
    .notNull()
    .references(() => locations.id),
  name: text("name").notNull(),
  address: text("address").notNull(),
  isDeleted: boolean("is_deleted").notNull().default(false),
  created: timestamp("created", { withTimezone: true }).notNull().defaultNow(),
  updated: timestamp("updated", { withTimezone: true }).notNull().defaultNow(),
});

export const insertLocationHistoriesSchema =
  createInsertSchema(locationHistories);
export const selectLocationHistorieschema =
  createSelectSchema(locationHistories);

export type LocationHistory = z.infer<typeof selectLocationHistorieschema>;
