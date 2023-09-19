CREATE TABLE IF NOT EXISTS "locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"address" text,
	"is_deleted" boolean
);
