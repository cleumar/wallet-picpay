import { Test } from '@nestjs/testing'
import { TransactionsRepository } from '../src/transactions/repositories/transactions.repository'

import { AppModule } from '../src/app.module'
import { TransactionsService } from '../src/transactions/transactions.service'
import { PrismaService } from '../src/prisma/prisma.service'

describe('App Module', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        TransactionsService,
        PrismaService,
        TransactionsRepository,
      ],
    }).compile()

    expect(module).toBeDefined()
  })
})
