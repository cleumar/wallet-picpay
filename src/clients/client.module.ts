import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { ClientsController } from './client.controller'
import { ClientsService } from './client.service'
import { ClientsRepository } from './repositories/clients.repository'

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, PrismaService, ClientsRepository],
})
export class ClientsModule {}
