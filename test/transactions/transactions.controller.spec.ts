import { Test, TestingModule } from '@nestjs/testing'
import { TransactionsController } from '../../src/transactions/transactions.controller'
import { TransactionsService } from '../../src/transactions/transactions.service'

const fakePosts = {
  id_transaction: '1111111',
  from: '12345678978',
  to: '22773461878',
  desc_transaction: 'COMPRA',
  tp_transaction: 'D',
  amount: 100,
}

const serviceMock = {
  findOne: jest.fn().mockReturnValue(fakePosts),
  create: jest.fn().mockReturnValue(fakePosts),
}

describe('PostsController', () => {
  let controller: TransactionsController
  let service: TransactionsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsController],
      providers: [{ provide: TransactionsService, useValue: serviceMock }],
    }).compile()

    controller = module.get<TransactionsController>(TransactionsController)
    service = module.get<TransactionsService>(TransactionsService)
  })

  describe('findOne', () => {
    it('should return an array of categories', async () => {
      const response = await controller.findOne('22773461878' as any)

      expect(service.findOne).toBeCalledTimes(1)
      expect(response).toEqual(fakePosts)
    })
  })

  describe('create', () => {
    it('should create a post and return', async () => {
      const fake = {
        name: 'teste',
        cpf: '111.111.111-11',
      }
      const response = await controller.create(fake as any)

      expect(response).toEqual(fakePosts)
    })
  })

  describe('findOne', () => {
    it('should return one post', async () => {
      expect(service.findOne).toHaveBeenCalled()
    })
  })
})
