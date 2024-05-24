-- AlterTable
ALTER TABLE "userProfile" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "bio" SET DEFAULT 'You are not provided you Bio data .Please update those information .',
ALTER COLUMN "age" DROP NOT NULL;
