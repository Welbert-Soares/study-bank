-- CreateEnum
CREATE TYPE "DisciplinaNome" AS ENUM ('TI', 'Ingles', 'Portugues', 'Estatistica', 'Atualidades', 'Bancarios', 'Matematica', 'Simulado', 'Revisoes', 'Redacao');

-- CreateEnum
CREATE TYPE "DiaDaSemana" AS ENUM ('Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado');

-- CreateEnum
CREATE TYPE "StatusConteudo" AS ENUM ('pendente', 'em_progresso', 'concluido');

-- CreateTable
CREATE TABLE "Materia" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" "StatusConteudo" NOT NULL DEFAULT 'pendente',
    "ordem" INTEGER NOT NULL,
    "disciplina" "DisciplinaNome" NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiaDisciplinaMateria" (
    "id" TEXT NOT NULL,
    "dia" "DiaDaSemana" NOT NULL,
    "materiaId" TEXT NOT NULL,
    "status" "StatusConteudo" NOT NULL DEFAULT 'pendente',
    "tempoEstudado" INTEGER,
    "anotacoes" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiaDisciplinaMateria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanoDeEstudos" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3),
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanoDeEstudos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DiaDisciplinaMateria_materiaId_idx" ON "DiaDisciplinaMateria"("materiaId");

-- AddForeignKey
ALTER TABLE "DiaDisciplinaMateria" ADD CONSTRAINT "DiaDisciplinaMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
