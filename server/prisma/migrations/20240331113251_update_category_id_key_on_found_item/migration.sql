/*
  Warnings:

  - You are about to drop the column `categoryID` on the `foundItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `foundItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `foundItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "foundItem" DROP CONSTRAINT "foundItem_categoryID_fkey";

-- DropIndex
DROP INDEX "foundItem_categoryID_key";

-- AlterTable
ALTER TABLE "foundItem" DROP COLUMN "categoryID",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "foundItem_categoryId_key" ON "foundItem"("categoryId");

-- AddForeignKey
ALTER TABLE "foundItem" ADD CONSTRAINT "foundItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
