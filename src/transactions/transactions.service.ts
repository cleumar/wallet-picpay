import { Injectable } from '@nestjs/common'
import { CreateTransactionDTO } from './dto/create-transactions.dto'
import { FindTransactionDTO } from './dto/find-transactions.dto'

import { TransactionsRepository } from './repositories/transactions.repository'

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async create(createTransactionDTO: CreateTransactionDTO) {
    return this.transactionsRepository.create(createTransactionDTO)
  }

  async findOne(findTransactionDTO: FindTransactionDTO) {
    return this.transactionsRepository.findOne(findTransactionDTO)
  }
}
