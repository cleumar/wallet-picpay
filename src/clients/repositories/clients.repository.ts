import { Injectable } from '@nestjs/common'
import { NotFoundError } from 'src/common/errors/types/NotFoundError'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateClientDTO } from '../dto/create-clients.dto'
import { FindClientDTO } from '../dto/find-clients.dto'
import { ClientEntity } from '../entities/clients.entity'

@Injectable()
export class ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDTO): Promise<ClientEntity> {
    return this.prisma.client.create({
      data: createClientDto,
    })
  }

  async findOne(cpf: string): Promise<FindClientDTO> {
    const client = await this.prisma.client.findUnique({
      where: {
        cpf,
      },
    })

    if (!client) {
      throw new NotFoundError('Client not found')
    }

    return client
  }
}
