import {
  PrismaClient,
  Prisma,
  DisciplinaNome,
  DiaDaSemana,
  StatusConteudo,
} from '@/generated/prisma'

const prisma = new PrismaClient()

const materiasData: Prisma.MateriaCreateInput[] = [
  {
    titulo: 'Matemática Financeira',
    descricao: 'Juros simples e compostos',
    ordem: 1,
    disciplina: DisciplinaNome.Matematica,
    status: StatusConteudo.pendente,
  },
  {
    titulo: 'Interpretação de Texto',
    descricao: 'Análise de textos dissertativos',
    ordem: 1,
    disciplina: DisciplinaNome.Portugues,
    status: StatusConteudo.pendente,
  },
  {
    titulo: 'Excel Avançado',
    descricao: 'Fórmulas e macros',
    ordem: 1,
    disciplina: DisciplinaNome.TI,
    status: StatusConteudo.pendente,
  },
  {
    titulo: 'Atualidades Bancárias',
    descricao: 'Sistema financeiro nacional',
    ordem: 1,
    disciplina: DisciplinaNome.Bancarios,
    status: StatusConteudo.pendente,
  },
]

async function main() {
  // Primeiro, criar as matérias
  const materiasCriadas = await Promise.all(
    materiasData.map(async (materia) => {
      return await prisma.materia.create({
        data: materia,
      })
    }),
  )

  // Depois, criar os agendamentos para cada matéria
  const diasDisciplinaData: Prisma.DiaDisciplinaMateriaCreateInput[] = [
    {
      dia: DiaDaSemana.Segunda,
      materia: { connect: { id: materiasCriadas[0].id } }, // Matemática
      status: StatusConteudo.pendente,
      tempoEstudado: 120, // 2 horas em minutos
      anotacoes: 'Focar em exercícios práticos',
    },
    {
      dia: DiaDaSemana.Terca,
      materia: { connect: { id: materiasCriadas[1].id } }, // Português
      status: StatusConteudo.pendente,
      tempoEstudado: 90, // 1.5 horas em minutos
      anotacoes: 'Fazer resumo do material',
    },
    {
      dia: DiaDaSemana.Quarta,
      materia: { connect: { id: materiasCriadas[2].id } }, // TI
      status: StatusConteudo.pendente,
      tempoEstudado: 60, // 1 hora em minutos
      anotacoes: 'Praticar no computador',
    },
    {
      dia: DiaDaSemana.Quinta,
      materia: { connect: { id: materiasCriadas[3].id } }, // Bancários
      status: StatusConteudo.pendente,
      tempoEstudado: 120, // 2 horas em minutos
      anotacoes: 'Revisar legislação atual',
    },
  ]

  // Criar os agendamentos
  for (const diaDisciplina of diasDisciplinaData) {
    await prisma.diaDisciplinaMateria.create({
      data: diaDisciplina,
    })
  }

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
