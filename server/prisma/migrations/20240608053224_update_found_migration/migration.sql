-- AlterTable
ALTER TABLE "foundItem" ALTER COLUMN "foundItemName" DROP NOT NULL,
ALTER COLUMN "foundItemName" SET DEFAULT 'Mobile',
ALTER COLUMN "color" SET DEFAULT 'black';
