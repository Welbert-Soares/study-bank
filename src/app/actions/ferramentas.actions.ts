'use server'

import { revalidatePath } from 'next/cache'
import { NovaFerramentaPersonalizada } from '@/types/ferramentas'
import * as ferramentasService from '@/services/config/ferramentas.service'

export async function listarFerramentasAction() {
  try {
    const ferramentas = await ferramentasService.listarFerramentas()
    return { data: ferramentas }
  } catch (error) {
    return { error: 'Erro ao listar ferramentas' }
  }
}

export async function criarFerramentaAction(data: NovaFerramentaPersonalizada) {
  try {
    await ferramentasService.criarFerramenta(data)
    revalidatePath('/')
    revalidatePath('/config')
    return { success: true }
  } catch (error) {
    return { error: 'Erro ao criar ferramenta' }
  }
}

export async function atualizarFerramentaAction(
  id: string,
  data: Partial<NovaFerramentaPersonalizada>,
) {
  try {
    await ferramentasService.atualizarFerramenta(id, data)
    revalidatePath('/')
    revalidatePath('/config')
    return { success: true }
  } catch (error) {
    return { error: 'Erro ao atualizar ferramenta' }
  }
}

export async function excluirFerramentaAction(id: string) {
  try {
    await ferramentasService.excluirFerramenta(id)
    revalidatePath('/')
    revalidatePath('/config')
    return { success: true }
  } catch (error) {
    return { error: 'Erro ao excluir ferramenta' }
  }
}
