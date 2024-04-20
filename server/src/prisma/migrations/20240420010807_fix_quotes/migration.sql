/*
  Warnings:

  - Added the required column `tax_id` to the `Quotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "client_message" TEXT,
ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "discount_unit" TEXT,
ADD COLUMN     "link_to_releated_invoices" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "link_to_releated_jobs" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "required_deposit" DOUBLE PRECISION,
ADD COLUMN     "tax_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "Taxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
