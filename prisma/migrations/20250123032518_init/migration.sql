/*
  Warnings:

  - You are about to alter the column `name` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `artist_name` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `material` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "artist_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "material" SET DATA TYPE VARCHAR(255);
