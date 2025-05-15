-- Add unique constraint to prevent duplicates
ALTER TABLE "HistoricoEstudo" ADD CONSTRAINT "HistoricoEstudo_tituloDaMateria_disciplina_dataEstudo_key" UNIQUE ("tituloDaMateria", "disciplina", "dataEstudo");
