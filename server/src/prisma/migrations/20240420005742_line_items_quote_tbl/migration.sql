/*
  Warnings:

  - Added the required column `internalAttachmentUrl` to the `Requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internal_notes` to the `Requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "internalAttachmentUrl" TEXT NOT NULL,
ADD COLUMN     "internal_notes" TEXT NOT NULL,
ADD COLUMN     "link_to_releated_invoices" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "link_to_releated_jobs" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "link_to_releated_quotes" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "LineItems" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unit_price" DOUBLE PRECISION NOT NULL,
    "markup" DOUBLE PRECISION,
    "img_url" TEXT,
    "recommend_item" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LineItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotes" (
    "id" SERIAL NOT NULL,
    "tags" JSONB,
    "emailed_to_client" BOOLEAN NOT NULL DEFAULT false,
    "texted_to_client" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "quote_number" TEXT NOT NULL,
    "opportunity_rating" TEXT,
    "client_id" INTEGER NOT NULL,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineItemQuote" (
    "id" SERIAL NOT NULL,
    "quote_id" INTEGER NOT NULL,
    "line_item_id" INTEGER NOT NULL,

    CONSTRAINT "LineItemQuote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LineItemQuote_quote_id_line_item_id_key" ON "LineItemQuote"("quote_id", "line_item_id");

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemQuote" ADD CONSTRAINT "LineItemQuote_quote_id_fkey" FOREIGN KEY ("quote_id") REFERENCES "Quotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemQuote" ADD CONSTRAINT "LineItemQuote_line_item_id_fkey" FOREIGN KEY ("line_item_id") REFERENCES "LineItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
