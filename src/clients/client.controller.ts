import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateClientDTO } from './dto/create-clients.dto'
import { ClientsService } from './client.service'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiCreatedResponse({
    description: 'successfully created.',
  })
  @ApiBadRequestResponse({ description: 'incorrect request syntax.' })
  @ApiConflictResponse({
    description: 'A record with this cpf already exists.',
  })
  @Post()
  async create(@Body() data: CreateClientDTO) {
    return this.clientsService.create(data)
  }

  @ApiOkResponse({ description: 'The found record' })
  @ApiBadRequestResponse({
    description: 'incorrect request syntax',
  })
  @ApiNotFoundResponse({ description: 'Client not found' })
  @Get('/:cpf/balance')
  findOne(@Param('cpf') cpf: string) {
    return this.clientsService.findOne(cpf)
  }
}
