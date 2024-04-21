-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "belongs_to_id" INTEGER;

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "belongs_to_id" INTEGER;

-- AlterTable
ALTER TABLE "Quotes" ADD COLUMN     "belongs_to_id" INTEGER;

-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "belongs_to_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
