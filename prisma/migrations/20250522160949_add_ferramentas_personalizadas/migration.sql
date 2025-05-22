-- CreateTable
CREATE TABLE "FerramentaPersonalizada" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "url" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "icone" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FerramentaPersonalizada_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FerramentaPersonalizada_userId_idx" ON "FerramentaPersonalizada"("userId");

-- AddForeignKey
ALTER TABLE "FerramentaPersonalizada" ADD CONSTRAINT "FerramentaPersonalizada_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
