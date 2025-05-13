import { PrismaClient } from '../../prisma/generated/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type GlobalThisWithPrisma = typeof globalThis & {
  prisma?: PrismaClient
}

const globalWithPrisma = globalThis as GlobalThisWithPrisma

const prisma = globalWithPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalWithPrisma.prisma = prisma

export default prisma
