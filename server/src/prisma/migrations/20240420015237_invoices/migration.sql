-- CreateTable
CREATE TABLE "JobRequest" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "request_id" INTEGER NOT NULL,

    CONSTRAINT "JobRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobQuote" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "quote_id" INTEGER NOT NULL,

    CONSTRAINT "JobQuote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobRequest_job_id_request_id_key" ON "JobRequest"("job_id", "request_id");

-- CreateIndex
CREATE UNIQUE INDEX "JobQuote_job_id_quote_id_key" ON "JobQuote"("job_id", "quote_id");

-- AddForeignKey
ALTER TABLE "JobRequest" ADD CONSTRAINT "JobRequest_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobRequest" ADD CONSTRAINT "JobRequest_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "Requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobQuote" ADD CONSTRAINT "JobQuote_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobQuote" ADD CONSTRAINT "JobQuote_quote_id_fkey" FOREIGN KEY ("quote_id") REFERENCES "Quotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
