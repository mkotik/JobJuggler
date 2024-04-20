-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "tags" JSONB,
    "emailed_to_client" BOOLEAN NOT NULL DEFAULT false,
    "texted_to_client" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    "client_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "instructions" TEXT,
    "number" TEXT NOT NULL,
    "schedule_type" TEXT NOT NULL,
    "recurring_frequency" TEXT,
    "recurring_interval" TEXT,
    "day_of_week" TEXT,
    "day_of_year" TEXT,
    "duration" TEXT,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "schedule_later" BOOLEAN NOT NULL DEFAULT false,
    "team" TEXT,
    "email_team" BOOLEAN NOT NULL DEFAULT true,
    "invoice_reminder" BOOLEAN NOT NULL DEFAULT true,
    "internal_notes" TEXT,
    "internal_attachment_url" TEXT,
    "link_to_related_invoices" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineItemJob" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "line_item_id" INTEGER NOT NULL,

    CONSTRAINT "LineItemJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LineItemJob_job_id_line_item_id_key" ON "LineItemJob"("job_id", "line_item_id");

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemJob" ADD CONSTRAINT "LineItemJob_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItemJob" ADD CONSTRAINT "LineItemJob_line_item_id_fkey" FOREIGN KEY ("line_item_id") REFERENCES "LineItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
