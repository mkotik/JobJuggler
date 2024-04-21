-- CreateTable
CREATE TABLE "Invoices" (
    "id" SERIAL NOT NULL,
    "tags" JSONB,
    "emailed_to_client" BOOLEAN NOT NULL DEFAULT false,
    "texted_to_client" BOOLEAN NOT NULL DEFAULT false,
    "issued_date" TIMESTAMP(3) NOT NULL,
    "due_date" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "client_id" INTEGER NOT NULL,
    "job_id" INTEGER,
    "tax_id" INTEGER,
    "client_message" TEXT NOT NULL,
    "internal_notes" TEXT NOT NULL,
    "internalAttachmentUrl" TEXT NOT NULL,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineItemInvoice" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER NOT NULL,
    "line_item_id" INTEGER NOT NULL,

    CONSTRAINT "LineItemInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LineItemInvoice_invoice_id_line_item_id_key" ON "LineItemInvoice"("invoice_id", "line_item_id");

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "Taxes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemInvoice" ADD CONSTRAINT "LineItemInvoice_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemInvoice" ADD CONSTRAINT "LineItemInvoice_line_item_id_fkey" FOREIGN KEY ("line_item_id") REFERENCES "LineItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
