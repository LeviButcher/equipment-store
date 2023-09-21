CREATE TABLE IF NOT EXISTS "locationHistories" (
	"id" serial PRIMARY KEY NOT NULL,
	"locationId" serial NOT NULL,
	"name" text NOT NULL,
	"address" text NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"created" timestamp with time zone DEFAULT now() NOT NULL,
	"updated" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "locationHistories" ADD CONSTRAINT "locationHistories_locationId_locations_id_fk" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
