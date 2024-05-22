/*
  Warnings:

  - You are about to drop the `FoundItemCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FoundItemCategory";

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foundItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,
    "foundItemName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "foundItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "foundItem_userId_key" ON "foundItem"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "foundItem_categoryID_key" ON "foundItem"("categoryID");

-- AddForeignKey
ALTER TABLE "foundItem" ADD CONSTRAINT "foundItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foundItem" ADD CONSTRAINT "foundItem_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
