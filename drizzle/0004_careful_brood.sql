ALTER TABLE "locations" ALTER COLUMN "created" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "locations" ADD COLUMN "updated" timestamp DEFAULT now() NOT NULL;