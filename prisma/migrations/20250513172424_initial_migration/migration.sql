-- CreateTable
CREATE TABLE "DailyDashboard" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "proximosConteudos" TEXT[],

    CONSTRAINT "DailyDashboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objetivo" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "completo" BOOLEAN NOT NULL DEFAULT false,
    "dashboardId" TEXT NOT NULL,

    CONSTRAINT "Objetivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "atividade" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dashboardId" TEXT NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricaDisciplina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "progresso" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "dashboardId" TEXT NOT NULL,

    CONSTRAINT "MetricaDisciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoricoProgresso" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progresso" INTEGER NOT NULL,
    "observacoes" TEXT,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "HistoricoProgresso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyDashboard_date_key" ON "DailyDashboard"("date");

-- AddForeignKey
ALTER TABLE "Objetivo" ADD CONSTRAINT "Objetivo_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "DailyDashboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "DailyDashboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricaDisciplina" ADD CONSTRAINT "MetricaDisciplina_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "DailyDashboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoProgresso" ADD CONSTRAINT "HistoricoProgresso_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "MetricaDisciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
