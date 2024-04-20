/*
  Warnings:

  - You are about to drop the column `anytime` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleLater` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Assessments` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Assessments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Assessments" DROP COLUMN "anytime",
DROP COLUMN "endDate",
DROP COLUMN "endTime",
DROP COLUMN "scheduleLater",
DROP COLUMN "startDate",
DROP COLUMN "startTime",
ADD COLUMN     "any_time" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "end_time" TIMESTAMP(3),
ADD COLUMN     "schedule_later" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "start_date" TIMESTAMP(3),
ADD COLUMN     "start_time" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "address_id" INTEGER,
ALTER COLUMN "settings" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Addresses" (
    "id" SERIAL NOT NULL,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "tags" JSONB,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "company_name" TEXT,
    "use_company_name_as_primary" BOOLEAN NOT NULL DEFAULT false,
    "mobile_phone_number" TEXT,
    "work_phone_number" TEXT,
    "email" TEXT,
    "quote_follow_up" BOOLEAN NOT NULL DEFAULT true,
    "job_follow_up" BOOLEAN NOT NULL DEFAULT true,
    "invoice_follow_up" BOOLEAN NOT NULL DEFAULT true,
    "upcoming_visit_reminder" BOOLEAN NOT NULL DEFAULT true,
    "referred_by" TEXT,
    "billing_address_same_as_property" BOOLEAN NOT NULL DEFAULT true,
    "property_address_id" INTEGER,
    "billing_address_id" INTEGER,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requests" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "tags" JSONB,
    "emailed_to_client" BOOLEAN NOT NULL DEFAULT false,
    "texted_to_client" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "service_details" TEXT NOT NULL,
    "assessment_date" TIMESTAMP(3) NOT NULL,
    "backup_assessment__date" TIMESTAMP(3),
    "preferred_arrival_times" TEXT,
    "on_site_assesment_required" BOOLEAN NOT NULL DEFAULT false,
    "client_id" INTEGER NOT NULL,
    "assessment_id" INTEGER NOT NULL,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_property_address_id_fkey" FOREIGN KEY ("property_address_id") REFERENCES "Addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_billing_address_id_fkey" FOREIGN KEY ("billing_address_id") REFERENCES "Addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_assessment_id_fkey" FOREIGN KEY ("assessment_id") REFERENCES "Assessments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
