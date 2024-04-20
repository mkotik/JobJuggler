-- CreateTable
CREATE TABLE "QuoteRequest" (
    "id" SERIAL NOT NULL,
    "quoteId" INTEGER NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "QuoteRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuoteRequest_quoteId_requestId_key" ON "QuoteRequest"("quoteId", "requestId");

-- AddForeignKey
ALTER TABLE "QuoteRequest" ADD CONSTRAINT "QuoteRequest_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteRequest" ADD CONSTRAINT "QuoteRequest_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
