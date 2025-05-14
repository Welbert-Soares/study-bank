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
CREATE INDEX "HistoricoEstudo_disciplina_idx" ON "HistoricoEstudo"("disciplina");

-- CreateIndex
CREATE INDEX "HistoricoEstudo_dataEstudo_idx" ON "HistoricoEstudo"("dataEstudo");
