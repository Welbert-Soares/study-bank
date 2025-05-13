/*
  Warnings:

  - The `status` column on the `Atividade` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AtividadeStatus" AS ENUM ('completed', 'in_progress', 'pending');

-- AlterTable
ALTER TABLE "Atividade" DROP COLUMN "status",
ADD COLUMN     "status" "AtividadeStatus" NOT NULL DEFAULT 'pending';
