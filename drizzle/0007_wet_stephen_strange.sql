ALTER TABLE "locationHistories" RENAME COLUMN "locationId" TO "location_Id";--> statement-breakpoint
ALTER TABLE "locationHistories" DROP CONSTRAINT "locationHistories_locationId_locations_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "locationHistories" ADD CONSTRAINT "locationHistories_location_Id_locations_id_fk" FOREIGN KEY ("location_Id") REFERENCES "locations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
