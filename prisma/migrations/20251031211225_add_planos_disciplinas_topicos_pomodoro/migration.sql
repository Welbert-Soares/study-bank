-- CreateTable
CREATE TABLE "Plano" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "emblema" TEXT,
    "edital" TEXT,
    "cargo" TEXT,
    "observacoes" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planoId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT,
    "descricao" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "edital" TEXT,
    "cargo" TEXT,
    "status" "StatusConteudo" NOT NULL DEFAULT 'pendente',
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topico" (
    "id" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT,
    "status" "StatusConteudo" NOT NULL DEFAULT 'pendente',
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CicloPomodoro" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL,
    "completo" BOOLEAN NOT NULL DEFAULT false,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CicloPomodoro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Plano_userId_idx" ON "Plano"("userId");

-- CreateIndex
CREATE INDEX "Plano_ativo_idx" ON "Plano"("ativo");

-- CreateIndex
CREATE INDEX "Disciplina_userId_idx" ON "Disciplina"("userId");

-- CreateIndex
CREATE INDEX "Disciplina_planoId_idx" ON "Disciplina"("planoId");

-- CreateIndex
CREATE INDEX "Disciplina_status_idx" ON "Disciplina"("status");

-- CreateIndex
CREATE INDEX "Topico_disciplinaId_idx" ON "Topico"("disciplinaId");

-- CreateIndex
CREATE INDEX "Topico_status_idx" ON "Topico"("status");

-- CreateIndex
CREATE INDEX "CicloPomodoro_userId_idx" ON "CicloPomodoro"("userId");

-- CreateIndex
CREATE INDEX "CicloPomodoro_disciplinaId_idx" ON "CicloPomodoro"("disciplinaId");

-- CreateIndex
CREATE INDEX "CicloPomodoro_data_idx" ON "CicloPomodoro"("data");

-- CreateIndex
CREATE INDEX "CicloPomodoro_completo_idx" ON "CicloPomodoro"("completo");

-- AddForeignKey
ALTER TABLE "Plano" ADD CONSTRAINT "Plano_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topico" ADD CONSTRAINT "Topico_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CicloPomodoro" ADD CONSTRAINT "CicloPomodoro_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CicloPomodoro" ADD CONSTRAINT "CicloPomodoro_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
