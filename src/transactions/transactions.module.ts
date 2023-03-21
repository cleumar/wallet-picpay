import { Module } from '@nestjs/common'
import { TransactionsService } from './transactions.service'
import { TransactionsController } from './transactions.controller'
import { PrismaService } from '../prisma/prisma.service'
import { TransactionsRepository } from './repositories/transactions.repository'

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaService, TransactionsRepository],
})
export class TransactionsModule {}
