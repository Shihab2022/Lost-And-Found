-- AlterTable
ALTER TABLE "foundItem" ADD COLUMN     "color" TEXT,
ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "distinguishing" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "number" TEXT,
ALTER COLUMN "description" DROP NOT NULL;
