/*
  Warnings:

  - You are about to drop the `HistoricoEstudo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HistoricoEstudo" DROP CONSTRAINT "HistoricoEstudo_userId_fkey";

-- DropTable
DROP TABLE "HistoricoEstudo";
