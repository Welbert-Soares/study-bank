/*
  Warnings:

  - You are about to drop the `DiaDisciplinaMateria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Materia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlanoDeEstudos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DiaDisciplinaMateria" DROP CONSTRAINT "DiaDisciplinaMateria_materiaId_fkey";

-- DropForeignKey
ALTER TABLE "DiaDisciplinaMateria" DROP CONSTRAINT "DiaDisciplinaMateria_planoId_fkey";

-- DropForeignKey
ALTER TABLE "DiaDisciplinaMateria" DROP CONSTRAINT "DiaDisciplinaMateria_userId_fkey";

-- DropForeignKey
ALTER TABLE "Materia" DROP CONSTRAINT "Materia_userId_fkey";

-- DropForeignKey
ALTER TABLE "PlanoDeEstudos" DROP CONSTRAINT "PlanoDeEstudos_userId_fkey";

-- DropTable
DROP TABLE "DiaDisciplinaMateria";

-- DropTable
DROP TABLE "Materia";

-- DropTable
DROP TABLE "PlanoDeEstudos";

-- DropEnum
DROP TYPE "DisciplinaNome";
