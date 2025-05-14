-- CreateTable
CREATE TABLE "Historico" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "disciplina" "DisciplinaNome" NOT NULL,
    "materia" TEXT NOT NULL,
    "descricao" TEXT,
    "progresso" INTEGER NOT NULL DEFAULT 0,
    "status" "StatusConteudo" NOT NULL DEFAULT 'pendente',
    "tempoEstudado" INTEGER,
    "anotacoes" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Historico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Historico_data_idx" ON "Historico"("data");
