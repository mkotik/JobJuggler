-- AlterTable
ALTER TABLE "Clients" ADD COLUMN     "belongs_to_id" INTEGER,
ADD COLUMN     "reated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" TEXT;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
