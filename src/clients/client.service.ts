import { Injectable } from '@nestjs/common'
import { CreateClientDTO } from './dto/create-clients.dto'
import { FindClientDTO } from './dto/find-clients.dto'

import { ClientsRepository } from './repositories/clients.repository'

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientsRepository) {}

  async create(createClientDTO: CreateClientDTO) {
    return this.clientsRepository.create(createClientDTO)
  }
  async findOne(cpf: string): Promise<FindClientDTO> {
    return await this.clientsRepository.findOne(cpf)
  }
}
