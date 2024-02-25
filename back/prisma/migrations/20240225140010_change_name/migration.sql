/*
  Warnings:

  - You are about to drop the column `nom` on the `champions` table. All the data in the column will be lost.
  - Added the required column `name` to the `Champions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `champions` DROP COLUMN `nom`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
