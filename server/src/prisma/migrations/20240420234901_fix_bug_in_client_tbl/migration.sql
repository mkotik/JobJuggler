/*
  Warnings:

  - You are about to drop the column `reated_date` on the `Clients` table. All the data in the column will be lost.
  - Made the column `belongs_to_id` on table `Clients` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_belongs_to_id_fkey";

-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "reated_date",
ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "belongs_to_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_belongs_to_id_fkey" FOREIGN KEY ("belongs_to_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
