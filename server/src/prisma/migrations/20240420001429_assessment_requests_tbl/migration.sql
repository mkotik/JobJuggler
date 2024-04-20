-- CreateTable
CREATE TABLE "Assessments" (
    "id" SERIAL NOT NULL,
    "instructions" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "scheduleLater" BOOLEAN NOT NULL DEFAULT false,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "anytime" BOOLEAN NOT NULL DEFAULT false,
    "team" TEXT,

    CONSTRAINT "Assessments_pkey" PRIMARY KEY ("id")
);
