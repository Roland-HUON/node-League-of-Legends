/*
  Warnings:

  - You are about to drop the `agent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `agent`;

-- CreateTable
CREATE TABLE `Champions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
