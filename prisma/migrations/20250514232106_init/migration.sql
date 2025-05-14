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
    "planoId" TEXT,
    "status" "StatusConteudo" NOT NULL DEFAULT 'pendente',
    "tempoEstudado" INTEGER,
    "anotacoes" TEXT,
    "progresso" INTEGER NOT NULL DEFAULT 0,
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
    "progressoGeral" INTEGER NOT NULL DEFAULT 0,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanoDeEstudos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoricoEstudo" (
    "id" TEXT NOT NULL,
    "tituloDaMateria" TEXT NOT NULL,
    "disciplina" "DisciplinaNome" NOT NULL,
    "dataEstudo" TIMESTAMP(3) NOT NULL,
    "tempoEstudado" INTEGER NOT NULL,
    "anotacoes" TEXT,
    "progresso" INTEGER NOT NULL DEFAULT 0,
    "planoId" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HistoricoEstudo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DiaDisciplinaMateria_materiaId_idx" ON "DiaDisciplinaMateria"("materiaId");

-- CreateIndex
CREATE INDEX "DiaDisciplinaMateria_planoId_idx" ON "DiaDisciplinaMateria"("planoId");

-- CreateIndex
CREATE INDEX "HistoricoEstudo_disciplina_idx" ON "HistoricoEstudo"("disciplina");

-- CreateIndex
CREATE INDEX "HistoricoEstudo_dataEstudo_idx" ON "HistoricoEstudo"("dataEstudo");

-- AddForeignKey
ALTER TABLE "DiaDisciplinaMateria" ADD CONSTRAINT "DiaDisciplinaMateria_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiaDisciplinaMateria" ADD CONSTRAINT "DiaDisciplinaMateria_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "PlanoDeEstudos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
