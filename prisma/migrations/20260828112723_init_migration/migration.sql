-- CreateTable
CREATE TABLE "Info" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "plusOne" TEXT NOT NULL,
    "fridayDinner" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,
    "transport" TEXT NOT NULL,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);
