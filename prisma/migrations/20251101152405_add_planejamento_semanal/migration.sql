-- CreateTable
CREATE TABLE "PlanejamentoSemanal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planoId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "horasPorDia" INTEGER NOT NULL,
    "tempoMinimo" INTEGER NOT NULL,
    "tempoMaximo" INTEGER NOT NULL,
    "diasDisponiveis" TEXT NOT NULL,
    "horariosDisponiveis" TEXT NOT NULL,
    "configuracoes" TEXT NOT NULL,
    "distribuicao" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanejamentoSemanal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlanejamentoSemanal_userId_idx" ON "PlanejamentoSemanal"("userId");

-- CreateIndex
CREATE INDEX "PlanejamentoSemanal_planoId_idx" ON "PlanejamentoSemanal"("planoId");

-- CreateIndex
CREATE INDEX "PlanejamentoSemanal_ativo_idx" ON "PlanejamentoSemanal"("ativo");

-- CreateIndex
CREATE INDEX "PlanejamentoSemanal_dataInicio_idx" ON "PlanejamentoSemanal"("dataInicio");

-- AddForeignKey
ALTER TABLE "PlanejamentoSemanal" ADD CONSTRAINT "PlanejamentoSemanal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanejamentoSemanal" ADD CONSTRAINT "PlanejamentoSemanal_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano"("id") ON DELETE CASCADE ON UPDATE CASCADE;
