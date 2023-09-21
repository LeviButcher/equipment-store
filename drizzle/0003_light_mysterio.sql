ALTER TABLE "locations" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "locations" ALTER COLUMN "address" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "locations" ALTER COLUMN "is_deleted" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "locations" ADD COLUMN "created" timestamp DEFAULT now();