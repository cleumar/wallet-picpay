import { Transactions } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

export class TransactionEntity implements Transactions {
  id: number
  id_transaction: string
  from: string
  to: string
  desc_transaction: string
  tp_transaction: string
  amount: Decimal
  createdAt: Date
  updatedAt: Date
  cod_cli: number | null
}
