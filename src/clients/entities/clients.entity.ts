import { Client } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime'

export class ClientEntity implements Client {
  id: number
  cpf: string
  name: string
  createdAt: Date
  updatedAt: Date
  balance: Decimal
}
