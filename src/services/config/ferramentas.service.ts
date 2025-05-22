import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { NovaFerramentaPersonalizada } from '@/types/ferramentas'
import { Prisma } from '@prisma/client'

// Erros customizados para melhor tratamento
class FerramentaError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FerramentaError'
  }
}

export async function listarFerramentas() {
  try {
    const { userId } = await auth()
    if (!userId) throw new FerramentaError('Usuário não autenticado')

    return await db.ferramentaPersonalizada.findMany({
      where: { userId },
      orderBy: { ordem: 'asc' },
    })
  } catch (error) {
    console.error('[listarFerramentas] Erro:', error)
    throw error instanceof FerramentaError
      ? error
      : new FerramentaError('Erro ao listar ferramentas')
  }
}

export async function criarFerramenta(data: NovaFerramentaPersonalizada) {
  try {
    const { userId } = await auth()
    if (!userId) throw new FerramentaError('Usuário não autenticado')

    // Validação adicional dos dados
    if (!data.nome?.trim()) {
      throw new FerramentaError('Nome da ferramenta é obrigatório')
    }

    if (!data.url?.trim()) {
      throw new FerramentaError('URL da ferramenta é obrigatória')
    }

    // Define um ícone padrão baseado no tipo da ferramenta
    const iconesPadrao: Record<string, string> = {
      kanban: '📌',
      flashcards: '🗂️',
      estudar: '📚',
      continuar: '▶️',
      simulado: '✍️',
      default: '📌',
    }

    const iconeFinal =
      data.icone?.trim() ||
      iconesPadrao[data.tipo.toLowerCase()] ||
      iconesPadrao.default

    return await db.ferramentaPersonalizada.create({
      data: {
        ...data,
        userId,
        icone: iconeFinal,
      },
    })
  } catch (error) {
    console.error('[criarFerramenta] Erro:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Tratamento específico para erros do Prisma
      if (error.code === 'P2002') {
        throw new FerramentaError('Já existe uma ferramenta com este nome')
      }
    }
    throw error instanceof FerramentaError
      ? error
      : new FerramentaError('Erro ao criar ferramenta')
  }
}

export async function atualizarFerramenta(
  id: string,
  data: Partial<NovaFerramentaPersonalizada>,
) {
  try {
    const { userId } = await auth()
    if (!userId) throw new FerramentaError('Usuário não autenticado')
    if (!id) throw new FerramentaError('ID da ferramenta é obrigatório')

    // Verifica se a ferramenta existe e pertence ao usuário
    const ferramenta = await db.ferramentaPersonalizada.findFirst({
      where: { id, userId },
    })

    if (!ferramenta) {
      throw new FerramentaError('Ferramenta não encontrada')
    }

    // Validação dos dados de atualização
    if (data.nome !== undefined && !data.nome.trim()) {
      throw new FerramentaError('Nome da ferramenta não pode ser vazio')
    }

    if (data.url !== undefined && !data.url.trim()) {
      throw new FerramentaError('URL da ferramenta não pode ser vazia')
    }

    // Define um ícone padrão baseado no tipo da ferramenta
    const iconesPadrao: Record<string, string> = {
      kanban: '📌',
      flashcards: '🗂️',
      estudar: '📚',
      continuar: '▶️',
      simulado: '✍️',
      default: '📌',
    }

    // Se o tipo foi atualizado e não foi fornecido um novo ícone, atualiza o ícone padrão
    let dataAtualizada = { ...data }
    if (data.tipo && !data.icone) {
      dataAtualizada.icone =
        iconesPadrao[data.tipo.toLowerCase()] || iconesPadrao.default
    }

    return await db.ferramentaPersonalizada.update({
      where: { id, userId },
      data: dataAtualizada,
    })
  } catch (error) {
    console.error('[atualizarFerramenta] Erro:', error)
    throw error instanceof FerramentaError
      ? error
      : new FerramentaError('Erro ao atualizar ferramenta')
  }
}

export async function excluirFerramenta(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) throw new FerramentaError('Usuário não autenticado')
    if (!id) throw new FerramentaError('ID da ferramenta é obrigatório')

    // Verifica se a ferramenta existe e pertence ao usuário antes de excluir
    const ferramenta = await db.ferramentaPersonalizada.findFirst({
      where: { id, userId },
    })

    if (!ferramenta) {
      throw new FerramentaError('Ferramenta não encontrada')
    }

    return await db.ferramentaPersonalizada.delete({
      where: { id, userId },
    })
  } catch (error) {
    console.error('[excluirFerramenta] Erro:', error)
    throw error instanceof FerramentaError
      ? error
      : new FerramentaError('Erro ao excluir ferramenta')
  }
}
