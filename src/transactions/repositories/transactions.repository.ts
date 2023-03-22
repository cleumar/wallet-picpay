/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { BadRequest } from '../../common/errors/types/BadRequest'
import { NotFoundError } from '../../common/errors/types/NotFoundError'

import { PrismaService } from '../../prisma/prisma.service'
import { AttributeTypeEnum } from '../../shared/enum/attribute-type.enum'
import { DescriptionEnum } from '../../shared/enum/description-enum'
import { CreateTransactionDTO } from '../dto/create-transactions.dto'
import { FindTransactionDTO } from '../dto/find-transactions.dto'

import { TransactionEntity } from '../entities/transactions.entity'

@Injectable()
export class TransactionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createTransactionDTO: CreateTransactionDTO,
  ): Promise<TransactionEntity> {
    const { to } = createTransactionDTO

    const client = await this.prisma.client.findUnique({
      where: {
        cpf: to,
      },
    })

    if (!client) {
      throw new NotFoundError('Client not found.')
    }

    const data: Prisma.TransactionsCreateInput = {
      ...createTransactionDTO,
      client: {
        connect: {
          cpf: to,
        },
      },
    }

    if (
      createTransactionDTO.desc_transaction === DescriptionEnum.COMPRAS || createTransactionDTO.desc_transaction === DescriptionEnum.SAQUES ) 

    if(createTransactionDTO.tp_transaction !== AttributeTypeEnum.DEBITO)
    {
      throw new BadRequest(
        'desc_transaction: Compras or Saques the tp_transaction is: D',
      )
    }

    if (
      createTransactionDTO.desc_transaction === DescriptionEnum.DEPOSITO ||      
      createTransactionDTO.desc_transaction === DescriptionEnum.CANCELAMENTO ||
      createTransactionDTO.desc_transaction === DescriptionEnum.ESTORNO ) 
      
    if(createTransactionDTO.tp_transaction !== AttributeTypeEnum.CREDITO){
      throw new BadRequest(
        'desc_transaction: DEPOSITO, CANCELAMENTO or ESTORNO the tp_transaction is: C',
      )
    }

    if (createTransactionDTO.tp_transaction === AttributeTypeEnum.DEBITO) {
      await this.prisma.client.update({
        where: { cpf: to },
        data: {
          balance: +client.balance - createTransactionDTO.amount,
          updatedAt: new Date(),
        },
      })
    } else {
      await this.prisma.client.update({
        where: { cpf: to },
        data: {
          balance: +client.balance + createTransactionDTO.amount,
          updatedAt: new Date(),
        },
      })
    }

    return this.prisma.transactions.create({
      data,
    })
  }

  async findOne(findTransactionDTO: FindTransactionDTO) {
    const { to } = findTransactionDTO
    const data = await this.prisma.transactions.findMany({
      where: {
        to,
        createdAt: {
          gte: new Date(findTransactionDTO.dt_ini),
          lte: new Date(findTransactionDTO.dt_fim),
        },
      },
      select: {
        id_transaction: true,
        from: true,
        to: true,
        desc_transaction: true,
        tp_transaction: true,
        amount: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    const balanceDebit = await this.prisma.transactions.aggregate({
      where: {
        to,
        tp_transaction: AttributeTypeEnum.DEBITO,
        createdAt: {
          gte: new Date(findTransactionDTO.dt_ini),
          lte: new Date(findTransactionDTO.dt_fim),
        },
      },
      _sum: {
        amount: true,
      },
    })

    const balanceCredit = await this.prisma.transactions.aggregate({
      where: {
        to,
        tp_transaction: AttributeTypeEnum.CREDITO,
        createdAt: {
          gte: new Date(findTransactionDTO.dt_ini),
          lte: new Date(findTransactionDTO.dt_fim),
        },
      },
      _sum: {
        amount: true,
      },
    })

 const balance =  +balanceDebit._sum.amount - +balanceCredit._sum.amount
    return {
      data,
      balance: {
        debit: balanceDebit,
        credit: balanceCredit,
        balance: balance
      },
    }
  }
}
