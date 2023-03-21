import { Controller, Post, Body, Get, Query } from '@nestjs/common'
import { CreateTransactionDTO } from './dto/create-transactions.dto'
import { FindTransactionDTO } from './dto/find-transactions.dto'
import { TransactionsService } from './transactions.service'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiCreatedResponse({
    description: 'successfully created.',
  })
  @ApiBadRequestResponse({ description: 'incorrect request syntax.' })
  @ApiConflictResponse({
    description: 'A record with this id_transaction already exists.',
  })
  @Post()
  async create(
    @Body()
    createTransactionDTO: CreateTransactionDTO,
  ) {
    return await this.transactionsService.create({
      ...createTransactionDTO,
    })
  }

  @ApiOkResponse({ description: 'The found record' })
  @ApiBadRequestResponse({
    description: 'incorrect request syntax',
  })
  @ApiNotFoundResponse({ description: 'Client not found' })
  @Get('/')
  async findOne(@Query() findTransactionDTO: FindTransactionDTO) {
    return await this.transactionsService.findOne(findTransactionDTO)
  }
}
