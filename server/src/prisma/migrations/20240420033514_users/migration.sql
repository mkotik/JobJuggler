-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "free_trial_expiration_date" DROP NOT NULL;
