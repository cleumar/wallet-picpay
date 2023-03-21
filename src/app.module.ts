import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { ClientsModule } from './clients/client.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TransactionsModule } from './transactions/transactions.module'

@Module({
  imports: [ConfigModule.forRoot(), ClientsModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
