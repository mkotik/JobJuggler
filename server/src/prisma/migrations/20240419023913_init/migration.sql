


-- CreateTable
CREATE TABLE "Taxes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "description" TEXT,

    CONSTRAINT "Taxes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "company_name" TEXT,
    "subscription_id" TEXT,
    "free_trial_expiration_date" TIMESTAMP(3) NOT NULL,
    "default_tax_id" INTEGER,
    "settings" JSONB NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_number_key" ON "Users"("phone_number");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_default_tax_id_fkey" FOREIGN KEY ("default_tax_id") REFERENCES "Taxes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
