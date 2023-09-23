import { pgTable, serial, text, varchar, boolean, timestamp, foreignKey } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	fullName: text("full_name"),
	phone: varchar("phone", { length: 256 }),
});

export const locations = pgTable("locations", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	address: text("address").notNull(),
	isDeleted: boolean("is_deleted").default(false).notNull(),
	created: timestamp("created", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated: timestamp("updated", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

export const locationHistories = pgTable("locationHistories", {
	id: serial("id").primaryKey().notNull(),
	locationId: serial("location_Id").notNull().references(() => locations.id),
	name: text("name").notNull(),
	address: text("address").notNull(),
	isDeleted: boolean("is_deleted").default(false).notNull(),
	created: timestamp("created", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updated: timestamp("updated", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});