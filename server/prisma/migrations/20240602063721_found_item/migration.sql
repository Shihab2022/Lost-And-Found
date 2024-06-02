-- CreateTable
CREATE TABLE "lostItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "foundItemName" TEXT NOT NULL,
    "distinguishing" TEXT,
    "description" TEXT,
    "location" TEXT NOT NULL,
    "color" TEXT,
    "date" TEXT,
    "number" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "claimId" TEXT,

    CONSTRAINT "lostItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lostItem" ADD CONSTRAINT "lostItem_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES "claim"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lostItem" ADD CONSTRAINT "lostItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lostItem" ADD CONSTRAINT "lostItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
