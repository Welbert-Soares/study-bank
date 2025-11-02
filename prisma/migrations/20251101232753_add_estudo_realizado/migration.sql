-- CreateTable
CREATE TABLE "EstudoRealizado" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planoId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "topicoId" TEXT,
    "dataEstudo" TIMESTAMP(3) NOT NULL,
    "tempoEstudado" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "material" TEXT,
    "teoriaFinalizada" BOOLEAN NOT NULL DEFAULT false,
    "anotacoes" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EstudoRealizado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EstudoRealizado_userId_idx" ON "EstudoRealizado"("userId");

-- CreateIndex
CREATE INDEX "EstudoRealizado_planoId_idx" ON "EstudoRealizado"("planoId");

-- CreateIndex
CREATE INDEX "EstudoRealizado_disciplinaId_idx" ON "EstudoRealizado"("disciplinaId");

-- CreateIndex
CREATE INDEX "EstudoRealizado_dataEstudo_idx" ON "EstudoRealizado"("dataEstudo");

-- AddForeignKey
ALTER TABLE "EstudoRealizado" ADD CONSTRAINT "EstudoRealizado_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
