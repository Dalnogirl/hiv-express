ALTER TABLE "users" DROP CONSTRAINT "users_name_unique";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");