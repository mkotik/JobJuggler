/*
  Warnings:

  - Made the column `belongs_to_id` on table `Invoices` required. This step will fail if there are existing NULL values in that column.
  - Made the column `belongs_to_id` on table `Jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `belongs_to_id` on table `Quotes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `belongs_to_id` on table `Requests` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_belongs_to_id_fkey";

-- DropForeignKey
ALTER TABLE "Jobs" DROP CONSTRAINT "Jobs_belongs_to_id_fkey";

-- DropForeignKey
ALTER TABLE "Quotes" DROP CONSTRAINT "Quotes_belongs_to_id_fkey";

-- DropForeignKey
ALTER TABLE "Requests" DROP CONSTRAINT "Requests_belongs_to_id_fkey";

-- AlterTable
ALTER TABLE "Invoices" ALTER COLUMN "belongs_to_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Jobs" ALTER COLUMN "belongs_to_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Quotes" ALTER COLUMN "belongs_to_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Requests" ALTER COLUMN "belongs_to_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
